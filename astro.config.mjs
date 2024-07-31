import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

const DEFAULT_TITLE = "S1";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
	site: "https://s1.sahithyan.dev",
	integrations: [
		starlight({
			title: DEFAULT_TITLE,
			favicon: "/favicon.ico",
			description:
				"Short notes of my 1st semester notes. INTENDED FOR PERSONAL USE.",
			head: [
				{
					tag: "meta",
					attrs: {
						property: "og:title",
						content: DEFAULT_TITLE,
					},
				},
			].concat(
				process.env.NODE_ENV === "production"
					? [
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
						]
					: [],
			),
			customCss: ["./src/global.css"],
			social: {
				twitter: "https://x.com/sahithyandev",
			},
			tableOfContents: {
				maxHeadingLevel: 4,
			},
			lastUpdated: true,
			expressiveCode: false,
			components: {
				Head: "./src/components/Head.astro",
				Sidebar: "./src/components/Sidebar.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Thinkpad",
					link: "/thinkpad",
				},
				{
					label: "Dimensions & Units",
					link: "/dimensions-and-units",
				},
				{
					label: "Electrical Fundamentals",
					autogenerate: {
						directory: "electrical-fundamentals",
					},
				},
				{
					label: "Fluid Mechanics",
					autogenerate: {
						directory: "fluid-mechanics",
					},
				},
				{
					label: "Mathematics",
					items: [
						{
							label: "Algebra",
							items: [
								{
									label: "Vectors",
									autogenerate: {
										directory: "maths/algebra/vectors",
									},
								},
								{
									label: "Matrices",
									autogenerate: {
										directory: "maths/algebra/matrices",
									},
								},
								{
									label: "Complex Numbers",
									autogenerate: {
										directory: "maths/algebra/complex-numbers",
									},
								},
							],
						},
						{
							label: "Real Analysis",
							autogenerate: {
								directory: "maths/real-analysis",
							},
						},
						{
							label: "ODE",
							autogenerate: {
								directory: "maths/ode",
							},
						},
					],
				},
				{
					label: "Mechanics",
					items: [
						{
							label: "Statics",
							autogenerate: {
								directory: "mechanics/statics",
							},
						},
						{
							label: "Dynamics",
							autogenerate: {
								directory: "mechanics/dynamics",
							},
						},
					],
				},
				{
					label: "Programming Fundamentals",
					autogenerate: {
						directory: "programming-fundamentals",
					},
				},
				{
					label: "Properties of Materials",
					items: [
						{
							label: "Basics",
							autogenerate: {
								directory: "properties-of-materials/basics",
							},
						},
						{
							label: "Mechanical Properties",
							autogenerate: {
								directory: "properties-of-materials/mechanical-properties",
							},
						},
						{
							label: "Electrical Properties",
							autogenerate: {
								directory: "properties-of-materials/electrical-properties",
							},
						},
					],
				},
				{
					label: "License",
					link: "/license",
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
