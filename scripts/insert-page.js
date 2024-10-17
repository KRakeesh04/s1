import { parseArgs } from "bun:util";
import { readdir, rename, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { autoSlug } from "./auto-slug";

const args = process.argv.slice(2);

console.log("======================");
console.log("EXPECTED ARGUMENTS:");
console.log(" directory title [order-number]");
console.log("======================");
console.log();

if (args.length < 2) {
	console.log(`expected length of arguments 2 or 3, but got ${args.length}`);
	process.exit(1);
}

/**
    @param {string} text
*/
function hyphenCaseToTitleCase(text) {
	const words = text.split("-");
	const newText = new Array(words.length);

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		newText[i] = word[0].toUpperCase().concat(word.slice(1));
	}

	return newText.join(" ");
}

(async () => {
	const directory = relative("./", args[0]);
	const title = args[1];
	/** @type {number | undefined} */
	let n = undefined;

	if (args.length === 3) {
		n = Number.parseInt(args[2]);
	}

	const files = await readdir(directory);
	let shouldReorder = false;

	if (n === undefined) {
		n = files.length + 1;
	} else {
		for (const file of files) {
			const parts = file.split("-");
			const id = Number.parseInt(parts[0]);

			if (id === n) {
				console.log(`There is already a file with id ${n}.`);
				shouldReorder = true;
			}

			if (shouldReorder && id >= n) {
				parts[0] = (id + 1).toString().padStart(2, "0");
				const oldPath = join(directory, file);
				const newPath = join(directory, parts.join("-"));
				console.log("renaming", oldPath, "-->", newPath);
				await rename(oldPath, newPath);
			}
		}
	}

	const newFileLocation = join(
		directory,
		`${n.toString().padStart(2, "0")}-${title}.md`,
	);
	console.log("writing", newFileLocation);
	const lines = ["---", `title: ${hyphenCaseToTitleCase(title)}`, "---"].join(
		"\n",
	);
	for (const line of lines) {
		console.log(">>>", line);
	}
	await writeFile(newFileLocation, lines);

	if (shouldReorder) {
		console.log("running auto-slug.js on", directory);
		await autoSlug(files.map((file) => join(directory, file)));
	}
})();
