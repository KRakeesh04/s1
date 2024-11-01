import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { Glob } from "bun";
import puppeteer from "puppeteer";
import { CONTENT_DIRECTORY } from "./generate-summary";

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
			const fileName = linkParts.at(-2).concat(".temp.pdf");
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

			// const outline = await summaryPage.evaluate(() => {
			// 	const headings = [...document.querySelectorAll("h1, h2, h3")];
			// 	return headings.map((heading) => ({
			// 		text: heading.textContent,
			// 		level: heading.tagName,
			// 		id:
			// 			heading.id ||
			// 			heading.textContent.replace(/\s+/g, "-").toLowerCase(),
			// 		pageIndex: 0, // Modify if you need different page indices
			// 	}));
			// });

			// await Bun.write(
			// 	path.replace(".pdf", ".json"),
			// 	JSON.stringify(outline, null, 2),
			// );

			await summaryPage.pdf({
				path,
				format: "A4",
				scale: 0.9,
			});
			console.log(`saved: ${baseLink} (to ${path})`);
			await summaryPage.close();

			// const pdfBuffer = new Uint8Array(await readFile(path));
			// const pdfDoc = await PDFDocument.load(pdfBuffer);
			// const pages = pdfDoc.getPages();

			// for (const item of outline) {
			// 	const page = pages[item.pageIndex]; // Add to the first page or change as needed
			// 	pdfDoc.addPageOutline(item.text, page.ref);
			// }

			// const pdfBytes = await pdfDoc.save();
			// await Bun.write(path.replace(".temp.", "."), pdfBytes);
		}),
	);

	await browser.close();

	// clean up summary files
	const summaryFilesGlob = new Glob("**/summary.md");

	for await (const file of summaryFilesGlob.scan(CONTENT_DIRECTORY)) {
		const filePath = join(CONTENT_DIRECTORY, file);
		rm(filePath);
		console.log(`removed: ${filePath}`);
	}
})();
