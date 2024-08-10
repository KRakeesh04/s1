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
			social: {
				twitter: "https://x.com/sahithyandev",
			},
			tableOfContents: {
				maxHeadingLevel: 4,
			},
			editLink: {
				baseUrl: "https://github.com/sahithyandev/s1/edit/main/",
			},
			lastUpdated: true,
			expressiveCode: false,
			components: {
				Head: "./src/components/Head.astro",
				Sidebar: "./src/components/Sidebar.astro",
				MarkdownContent: "./src/components/MarkdownContent.astro",
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
					collapsed: true,
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
									collapsed: true,
									autogenerate: {
										directory: "maths/algebra/vectors",
									},
								},
								{
									label: "Matrices",
									collapsed: true,
									autogenerate: {
										directory: "maths/algebra/matrices",
									},
								},
								{
									label: "Complex Numbers",
									collapsed: true,
									autogenerate: {
										directory: "maths/algebra/complex-numbers",
									},
								},
							],
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
					collapsed: true,
					autogenerate: {
						directory: "programming-fundamentals",
					},
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
