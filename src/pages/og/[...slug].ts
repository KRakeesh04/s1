import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");

const pages = Object.fromEntries(
	entries.map(({ data, id }) => {
		const _id = id.replace(".md", "");
		return [_id, { data }];
	}),
);
pages.index = {
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

console.log(pages);
export const { getStaticPaths, GET } = OGImageRoute({
	pages,
	param: "slug",
	getImageOptions: (_path, page: (typeof pages)[number]) => {
		return {
			title: page.data.title.concat(" | UoM E S1"),
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
