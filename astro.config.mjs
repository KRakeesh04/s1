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
		rehypePlugins: [rehypeKatex],
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
						content: DEFAULT_TITLE,
					},
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
				github: "https://github.com/sahithyandev/uom-e23-sem1",
				twitter: "https://x.com/sahithyandev",
			},
			tableOfContents: false,
			lastUpdated: true,
			expressiveCode: false,
			components: {
				Sidebar: "./src/components/Sidebar.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Electrical Fundamentals",
					autogenerate: {
						directory: "EE1040",
					},
				},
				{
					label: "Fluid Mechanics",
					autogenerate: {
						directory: "CE1023",
					},
				},
				{
					label: "Mathematics",
					autogenerate: {
						directory: "MA1014",
					},
				},
				{
					label: "Mechanics",
					autogenerate: {
						directory: "ME1033",
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
