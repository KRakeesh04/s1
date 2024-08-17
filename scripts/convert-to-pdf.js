import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto("http://localhost:4321/", { waitUntil: "domcontentloaded" });
	/**
	 * @type {string[]}
	 */
	const links = await page.evaluate((d) => {
		const items = document
			.querySelector("#content-included")
			.querySelectorAll("a");
		const links = [];
		for (const item of items) {
			links.push(item.href);
		}
		return links;
	});

	const alreadyDone = [];
	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		if (link.includes("license") || link.includes("dimensions")) {
			continue;
		}
		const baseLink = link.replace("http://localhost:4321/", "");
		const linkParts = baseLink.split("/").slice(0, -1);
		const outputDir = linkParts.slice(0, -1).join("/");
		if (!alreadyDone.includes(outputDir)) {
			await mkdir("public/as-pdf/".concat(outputDir), { recursive: true });
			alreadyDone.push(outputDir);
		}
		const path = `./public/as-pdf/${outputDir}/${i.toString().padStart(3, "0")}-${linkParts.at(-1)}.pdf`;
		await page.goto(link, { waitUntil: "networkidle2" });
		await page.pdf({
			path,
			format: "A4",
			margin: {
				top: 2,
			},
		});
		console.log(`Saved: ${baseLink} (to ${path})`);
	}

	await browser.close();
})();
