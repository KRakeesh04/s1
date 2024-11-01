import { exec } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

const CONTENT_DIRECTORY = "./src/content/docs";

function outputFilename(filePath: string) {
	return join(
		CONTENT_DIRECTORY,
		"summary",
		dirname(filePath).replaceAll("/", "--").concat(".md"),
	);
}

async function waitUntilAllBecomeAvailable(pages: string[]) {
	return new Promise<void>((resolve) => {
		while (pages.length >= 0) {
			if (pages.length === 0) {
				resolve();
				return;
			}
			if (existsSync(pages[0])) {
				pages.splice(0, 1);
			}
		}
	});
}

export default function generatePdfsPlugin(): AstroIntegration {
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
				const pagesToExport: string[] = [];
				for (const page of pages) {
					if (!page.pathname.startsWith("summary")) {
						continue;
					}
					pagesToExport.push(join("./dist/", page.pathname, "index.html"));
				}

				await waitUntilAllBecomeAvailable([...pagesToExport]);
				let commandArgs = "html-export-pdf-cli";
				for (const page of pagesToExport) {
					const newFilePath = page.replace("/index", "");
					await rename(page, newFilePath);
					commandArgs += ` -i ${newFilePath}`;
				}
				commandArgs += " --outDir dist/as-pdf";

				// `dir` is the final output directory where your generated files should go
				const outputDir = join(fileURLToPath(dir.toString()), "as-pdf");
				// Make sure the directory exists
				if (!existsSync(outputDir)) {
					await mkdir(outputDir, { recursive: true });
				}

				return new Promise((resolve, reject) => {
					exec(commandArgs, (error, stdout) => {
						if (error) {
							reject(error);
						}
						logger.info(`html-export-pdf-cli ${stdout}`);
						resolve();
					});
				});
			},
		},
	};
}
