import { writeFile } from "node:fs/promises";
import { relative } from "node:path";
const matter = require("gray-matter");

// updates the frontmatter of mdx files
(async () => {
	const mdFilePaths = process.argv.slice(2);

	for (const filePath of mdFilePaths) {
		const file = matter.read(filePath);
		const { data: currentFrontMatter } = file;

		if (!currentFrontMatter.title) {
			return;
		}
		const newSlug = relative("./src/content/docs", filePath)
			.replace(".md", "")
			.replace(/\/\d+-/, "/");
		file.data = {
			...currentFrontMatter,
			slug: newSlug,
		};
		const updatedFileContent = matter.stringify(file, {});
		writeFile(filePath, updatedFileContent);
	}
})();

// for testing
// process.exit(27);
