import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import starlightLinksValidator from "starlight-links-validator";
import { SITE_TITLE } from "./config.mjs";
// import generatePdfsPlugin from "./plugins/generate-pdfs";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
	site: "https://s1.sahithyan.dev",
	integrations: [
		// generatePdfsPlugin(),
		starlight({
			plugins: [
				starlightLinksValidator({
					exclude: ["/summary/"],
				}),
			],
			title: SITE_TITLE,
			favicon: "/favicon.ico",
			description:
				"Short notes of 1st semester of Engineering at University of Moratuwa.",
			head: [
				{
					tag: "link",
					attrs: {
						rel: "preconnect",
						href: "https://fonts.googleapis.com",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "preconnect",
						href: "https://fonts.gstatic.com",
						crossOrigin: true,
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;500;700&display=swap",
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
						{
							label: "Machinery",
							collapsed: true,
							autogenerate: {
								directory: "fluid-mechanics/machinery",
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
							label: "Complex Analysis",
							collapsed: true,
							autogenerate: {
								directory: "maths/complex-analysis",
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
								directory: "programming-fundamentals/a-book",
							},
						},
						{
							collapsed: true,
							label: "B book",
							autogenerate: {
								directory: "programming-fundamentals/b-book",
							},
						},
						{
							collapsed: true,
							label: "C book",
							autogenerate: {
								directory: "programming-fundamentals/c-book",
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
