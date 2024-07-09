import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");

const pages = Object.fromEntries(
	entries.map(({ data, id }) => {
		const _id = id.replace(".md", "");
		return [_id, { data }];
	}),
);

export const { getStaticPaths, GET } = OGImageRoute({
	pages,
	param: "slug",
	getImageOptions: (_path, page: (typeof pages)[number]) => {
		return {
			title: page.data.title.concat(" | S1"),
			description: page.data.description,
			bgGradient: [[250, 254, 247]],
			logo: {
				path: "./public/me.png",
				size: [100],
			},
			font: {
				title: {
					color: [0, 0, 0],
					weight: "ExtraBlack",
					size: 90,
				},
				description: {
					color: [0, 0, 0],
					size: 30,
				},
			},
			padding: 90,
		};
	},
});
