import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import { SITE_TITLE } from "../../../config.mjs";

const entries = await getCollection("docs");

const pages: Record<
	string,
	{
		data: (typeof entries)[number]["data"];
	}
> = {};

for (const entry of entries) {
	const { data, id } = entry;
	const _id = id.replace(".md", "").replace(/\d+-/, "");
	if (typeof _id !== "string" || _id.endsWith("summary")) {
		continue;
	}
	pages[_id] = { data };
}

// biome-ignore lint: Astro check fails when used as "pages.index"
pages["index"] = {
	data: {
		title: "What's this?",
		editUrl: true,
		head: [],
		template: "doc",
		sidebar: entries[0].data.sidebar,
		pagefind: true,
		draft: false,
	},
};

export const { getStaticPaths, GET } = OGImageRoute({
	pages,
	param: "slug",
	getImageOptions: (_path, page: (typeof pages)[number]) => {
		return {
			title: page.data.title.concat(" | ", SITE_TITLE),
			description: page.data.description,
			bgGradient: [[250, 254, 247]],
			logo: {
				path: "./public/me.png",
				size: [120],
			},
			font: {
				title: {
					color: [0, 0, 0],
					weight: "ExtraBlack",
					size: 80,
					lineHeight: 1.2,
				},
				description: {
					color: [0, 0, 0],
					size: 35,
				},
			},
			padding: 90,
		};
	},
});
