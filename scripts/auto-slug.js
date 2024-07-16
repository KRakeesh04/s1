import { writeFile } from "node:fs/promises";
import { relative } from "node:path";
const matter = require("gray-matter");

const PATTERN_TITLE_PREFIX = /\/(\d+)-/;

function safeParseInt(value, defaultValue = undefined) {
	if (typeof value === "undefined") return defaultValue;

	const parsed = Number.parseInt(value);
	if (Number.isNaN(parsed)) {
		return defaultValue;
	}
	return parsed;
}

// updates the frontmatter of mdx files
(async () => {
	const mdFilePaths = process.argv.slice(2);

	for (const filePath of mdFilePaths) {
		const file = matter.read(filePath);
		const { data: currentFrontMatter } = file;

		if (!currentFrontMatter.title) {
			return;
		}
		const slugSection = relative("./src/content/docs", filePath).replace(
			".md",
			"",
		);
		const newSlug = slugSection.replace(PATTERN_TITLE_PREFIX, "/");

		file.data = {
			...currentFrontMatter,
			slug: newSlug,
		};
		const orderMatched = slugSection.match(PATTERN_TITLE_PREFIX);
		if (orderMatched) {
			const orderNumber = safeParseInt(orderMatched[1]);
			if (orderNumber !== undefined) {
				if (!file.data.sidebar) {
					file.data.sidebar = {};
				}
				file.data.sidebar.order = orderNumber;
			}
		} else {
			console.log(filePath, "isn't named correctly.");
		}
		const updatedFileContent = matter.stringify(file, {});
		writeFile(filePath, updatedFileContent);
	}
})();

// for testing
// process.exit(27);
