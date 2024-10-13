import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto("http://localhost:4321/", { waitUntil: "domcontentloaded" });
	/**
	 * @type {string[]}
	 */
	const links = await page.evaluate(() => {
		const items = document
			.querySelector("#content-included")
			.querySelectorAll("a");
		/**
		 * @type {string[]}
		 */
		const links = [];
		for (const item of items) {
			if (item.innerText !== "Summary") continue;
			links.push(item.href);
		}
		return links;
	});
	await page.close();

	/**
	 * @type {string[]}
	 */
	const alreadyDone = [];
	await Promise.all(
		links.map(async (link) => {
			const baseLink = link.replace("http://localhost:4321/", "");
			const linkParts = baseLink.split("/").slice(0, -1);
			const outputDir = linkParts.slice(0, -2).join("/");
			const fileName = linkParts.at(-2).concat(".pdf");
			if (!alreadyDone.includes(outputDir)) {
				await mkdir("public/as-pdf/".concat(outputDir), { recursive: true });
				alreadyDone.push(outputDir);
			}
			let path = `./public/as-pdf/${outputDir}/${fileName}`;
			if (outputDir.length === 0) {
				path = `./public/as-pdf/${fileName}`;
			}
			const summaryPage = await browser.newPage();
			await summaryPage.goto(link, { waitUntil: "networkidle2" });
			await summaryPage.pdf({
				path,
				format: "A4",
				scale: 0.9,
			});
			console.log(`Saved: ${baseLink} (to ${path})`);
			await summaryPage.close();
		}),
	);

	await browser.close();
})();
