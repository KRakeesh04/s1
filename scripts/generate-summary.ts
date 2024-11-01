import { dirname, join } from "node:path";
import { Glob } from "bun";

export const CONTENT_DIRECTORY = "./src/content/docs";

function outputFilename(filePath: string) {
	return join(
		CONTENT_DIRECTORY,
		"summary",
		dirname(filePath).replaceAll("/", "--").concat(".md"),
	);
}

const outputFileContents: Record<string, string> = {};

const inputFilesGlob = new Glob("**/*.md");
const inputFiles = Array.from(
	inputFilesGlob.scanSync(CONTENT_DIRECTORY),
).sort();

for (const fileString of inputFiles) {
	if (!fileString.includes("/") || fileString.includes("summary")) {
		continue;
	}
	const f = Bun.file(join(CONTENT_DIRECTORY, fileString));
	const content = await f.text(); // contents as a string
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
		outputFileContents[outputPath] = outputFileContents[outputPath].concat(
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

const id = "All files have been written.";

console.time(id);
Promise.all(
	Object.entries(outputFileContents).map(async ([filePath, content]) => {
		return Bun.write(filePath, content).then(() => {
			console.log(`saved: ${filePath}`);
		});
	}),
).then(() => {
	console.timeEnd(id);
});
