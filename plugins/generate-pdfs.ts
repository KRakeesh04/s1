import { type ChildProcessWithoutNullStreams, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import chromium from "@sparticuz/chromium";
import type { AstroIntegration } from "astro";
import type { Browser, Page } from "puppeteer-core";
import puppeteer from "puppeteer-core";

chromium.setHeadlessMode = true;
const CONTENT_DIRECTORY = "./src/content/docs";

function outputFilename(filePath: string) {
	return join(
		CONTENT_DIRECTORY,
		"summary",
		dirname(filePath).replaceAll("/", "--").concat(".md"),
	);
}

async function waitForServer(url: string, timeout = 10000, interval = 500) {
	const start = Date.now();

	while (Date.now() - start < timeout) {
		try {
			const response = await fetch(url);

			if (response.ok) {
				console.log(`Server is ready at ${url}`);
				return true;
			}
		} catch {}
		await new Promise((resolve) => setTimeout(resolve, interval));
	}

	throw new Error(`Server did not become ready within ${timeout}ms`);
}

export default function generatePdfsIntegration(): AstroIntegration {
	let browser: Browser;
	let devServer: ChildProcessWithoutNullStreams;
	return {
		name: "generate-pdfs",
		hooks: {
			"astro:config:setup": async ({ logger }) => {
				const outputFileContents: Record<string, string> = {};

				await mkdir(join(CONTENT_DIRECTORY, "summary"), {
					recursive: true,
				});

				const inputFiles = await readdir(CONTENT_DIRECTORY, {
					recursive: true,
				});
				inputFiles.sort();

				for (const fileString of inputFiles) {
					if (
						!fileString.includes("/") ||
						!fileString.endsWith(".md") ||
						fileString.includes("summary")
					) {
						continue;
					}
					const inputFile = join(CONTENT_DIRECTORY, fileString);
					const content = await readFile(inputFile, {
						encoding: "utf-8",
					});
					const outputPath = outputFilename(fileString);
					if (outputFileContents[outputPath] === undefined) {
						const parts = content.split("---");
						const sidebarLabel = parts[1]
							.split("\n")[1]
							.replaceAll("title: Introduction to ", "");
						const frontmatter = parts[1]
							.split("\n")[1]
							.replaceAll("Introduction to ", "Summary | ")
							.concat(`\nsidebar:\n  label: ${sidebarLabel}\n`);
						outputFileContents[outputPath] = "---".concat(
							"\n",
							frontmatter,
							"---\n\n",
							"## Introduction\n",
							parts[parts.length - 1]
								.replaceAll(/^#### /gm, "##### ")
								.replaceAll(/^### /gm, "#### ")
								.replaceAll(/^## /gm, "### "),
						);
					} else {
						const title = content
							.split("---")[1]
							.split("\n")[1]
							.split("\n")[0]
							.replace("title: ", "");
						outputFileContents[outputPath] = outputFileContents[
							outputPath
						].concat(
							`## ${title}`,
							content
								.split("---")
								.slice(2)
								.join("---")
								.replaceAll(/^#### /gm, "##### ")
								.replaceAll(/^### /gm, "#### ")
								.replaceAll(/^## /gm, "### "),
						);
					}
				}

				Promise.all(
					Object.entries(outputFileContents).map(async ([filePath, content]) =>
						writeFile(filePath, content).then(() => {
							logger.info(`saved: ${filePath}`);
						}),
					),
				);
			},
			"astro:build:done": async ({ dir, pages, logger }) => {
				devServer = spawn("astro", ["dev"]);
				const pagesToExport: string[] = [];
				for (const page of pages) {
					if (!page.pathname.startsWith("summary")) {
						continue;
					}
					pagesToExport.push(page.pathname);
				}

				const outputDir = join(fileURLToPath(dir.toString()), "as-pdf");
				if (!existsSync(outputDir)) {
					await mkdir(outputDir, { recursive: true });
				}

				await waitForServer("http://localhost:4321/");
				logger.info("dev server started");
				browser = await puppeteer.launch({
					devtools: false,
					args: chromium.args,
					defaultViewport: chromium.defaultViewport,
					executablePath: await chromium.executablePath(),
					headless: chromium.headless,
				});

				let usedAboutBlankPage = false;
				const browserTabs = await browser.pages();

				await Promise.all(
					pagesToExport.map(async (pageUrl) => {
						const linkParts = pageUrl.split("/").slice(0, -1);
						const lastPart = linkParts.at(-1);
						if (!lastPart) return;
						const fileName = lastPart.concat(".pdf");
						const path = join(outputDir, fileName);

						let summaryPage: Page;
						if (usedAboutBlankPage || browserTabs.length === 0) {
							summaryPage = await browser.newPage();
						} else {
							summaryPage = browserTabs[0];
							usedAboutBlankPage = true;
						}

						const pageFullUrl = "http://localhost:4321/".concat(pageUrl);
						logger.info(`opening ${pageFullUrl}`);
						await summaryPage.bringToFront();
						await summaryPage.goto(pageFullUrl, {
							waitUntil: "networkidle2",
							timeout: 90000,
						});
						await summaryPage.pdf({
							path,
							format: "A4",
							scale: 0.9,
						});
						logger.info(`saved: ${pageUrl} (to ${path})`);
						await summaryPage.close();
					}),
				);

				await browser.close();
				devServer.kill();
			},
		},
	};
}
