import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "sahithyan/utils",
			description: "Copy-pastable utilities and code snippets",
			head: [
				{
					tag: "meta",
					attrs: {
						property: "og:title",
					},
					content: "sahithyan/utils",
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
					label: "Getting Started",
					link: "/getting-started",
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
