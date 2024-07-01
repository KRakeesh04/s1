import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

					const DEFAULT_TITLE = "UOM ME23 Notes";
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: DEFAULT_TITLE,
			description: "Notes of 1st semester of Engineering at University of Moratuwa of batch 2023.",
			head: [
				{
					tag: "meta",
					attrs: {
						property: "og:title",
					},
					content: DEFAULT_TITLE
				},
			],
			customCss: ["./src/global.css"],
			social: {
				github: "https://github.com/sahithyandev/utils",
			},
			tableOfContents: false,
			components: {
				Hero: "./src/components/Hero.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Properties of Material",
					autogenerate: {
						directory: "properties-of-material",
					},
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
