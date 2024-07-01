import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const DEFAULT_TITLE = "UOM E23 Sem1 Notes";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			rehypeKatex({
				trust: true,
			}),
		],
	},
	integrations: [
		starlight({
			title: DEFAULT_TITLE,
			description:
				"Notes of 1st semester of Engineering at University of Moratuwa of batch 2023.",
			head: [
				{
					tag: "meta",
					attrs: {
						property: "og:title",
					},
					content: DEFAULT_TITLE,
				},
				{
					tag: "link",
					attrs: {
						rel: "stylesheet",
						href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css",
						crossOrigin: "anonymous",
					},
				},
			],
			customCss: ["./src/global.css"],
			social: {
				github: "https://github.com/sahithyandev/me23-notes",
			},
			tableOfContents: false,
			lastUpdated: true,
			components: {
				Hero: "./src/components/Hero.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Fluid Mechanics",
					autogenerate: {
						directory: "CE1023",
					},
				},
				{
					label: "Properties of Material",
					autogenerate: {
						directory: "MT1023",
					},
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
