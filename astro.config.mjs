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
				{
					tag: "script",
					attrs: {
						async: true,
						src: "https://www.googletagmanager.com/gtag/js?id=G-CM1QCK35XF",
					},
				},
				{
					tag: "script",
					content:
						"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config', 'G-CM1QCK35XF');",
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
					items: [
						{
							label: "Algebra",
							autogenerate: {
								directory: "MA1014/Algebra",
							},
						},
						{
							label: "Real Analysis",
							autogenerate: {
								directory: "MA1014/Real Analysis",
							},
						},
						{
							label: "ODE",
							autogenerate: {
								directory: "MA1014/ODE",
							},
						},
					],
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
