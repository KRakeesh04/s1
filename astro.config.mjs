import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

const DEFAULT_TITLE = "UoM E S1";

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
				"Short notes of 1st semester of Engineering at University of Moratuwa.",
			head:
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
			customCss: ["./src/global.css"],
			tableOfContents: {
				maxHeadingLevel: 4,
			},
			editLink: {
				baseUrl: "https://github.com/sahithyandev/s1/edit/main/",
			},
			lastUpdated: true,
			expressiveCode: true,
			components: {
				Head: "./src/components/Head.astro",
				Sidebar: "./src/components/Sidebar.astro",
				MarkdownContent: "./src/components/MarkdownContent.astro",
				SiteTitle: "./src/components/SiteTitle.astro",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Dimensions & Units",
					link: "/dimensions-and-units",
				},
				{
					label: "Electrical Fundamentals",
					collapsed: true,
					autogenerate: {
						directory: "electrical-fundamentals",
					},
				},
				{
					label: "Fluid Mechanics",
					items: [
						{
							label: "Statics",
							collapsed: true,
							autogenerate: {
								directory: "fluid-mechanics/statics",
							},
						},
						{
							label: "Dynamics",
							collapsed: true,
							autogenerate: {
								directory: "fluid-mechanics/dynamics",
							},
						},
					],
				},
				{
					label: "Mathematics",
					items: [
						{
							label: "Vectors",
							collapsed: true,
							autogenerate: {
								directory: "maths/vectors",
							},
						},
						{
							label: "Matrices",
							collapsed: true,
							autogenerate: {
								directory: "maths/matrices",
							},
						},
						{
							label: "Complex Numbers",
							collapsed: true,
							autogenerate: {
								directory: "maths/complex-numbers",
							},
						},
						{
							label: "Real Analysis",
							collapsed: true,
							autogenerate: {
								directory: "maths/real-analysis",
							},
						},
						{
							collapsed: true,
							label: "ODE",
							autogenerate: {
								directory: "maths/ode",
							},
						},
						{
							collapsed: true,
							label: "Riemann Integration",
							autogenerate: {
								directory: "maths/riemann-integration",
							},
						},
					],
				},
				{
					label: "Mechanics",
					items: [
						{
							label: "Statics",
							collapsed: true,
							autogenerate: {
								directory: "mechanics/statics",
							},
						},
						{
							label: "Dynamics",
							collapsed: true,
							autogenerate: {
								directory: "mechanics/dynamics",
							},
						},
					],
				},
				{
					label: "Programming Fundamentals",
					items: [
						{
							label: "A book",
							collapsed: true,
							autogenerate: {
								directory: "programming-fundamentals/A-book",
							},
						},
						{
							collapsed: true,
							label: "B book",
							autogenerate: {
								directory: "programming-fundamentals/B-book",
							},
						},
						{
							collapsed: true,
							label: "C book",
							autogenerate: {
								directory: "programming-fundamentals/C-book",
							},
						},
					],
				},
				{
					label: "Properties of Materials",
					items: [
						{
							label: "Basics",
							collapsed: true,
							autogenerate: {
								directory: "properties-of-materials/basics",
							},
						},
						{
							label: "Mechanical Properties",
							collapsed: true,
							autogenerate: {
								directory: "properties-of-materials/mechanical-properties",
							},
						},
						{
							label: "Electrical Properties",
							collapsed: true,
							autogenerate: {
								directory: "properties-of-materials/electrical-properties",
							},
						},
						{
							label: "Nanotechnology",
							collapsed: true,
							autogenerate: {
								directory: "properties-of-materials/nanotechnology",
							},
						},
						{
							label: "Degradation",
							collapsed: true,
							autogenerate: {
								directory: "properties-of-materials/degradation",
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
