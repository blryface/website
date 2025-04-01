/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"generic-red": "#fa6f5a",
				"generic-orange": "#faa55a",
				"generic-yellow": "#fadd5a",
				"generic-green": "#9dfa5a",
				"generic-blue": "#5a95fa",
				"generic-purple": "#ba5afa",
				"generic-rose": "#fa5a87",

				"brand-colour": "#00d65d",

				"brand-background": "#0b0d0e",
				"brand-background-secondary": "#161b0d",
				"brand-border": "#21292c",
				"brand-text": "#ffffff",
				"brand-text-secondary": "#ebedf0",
			},
		},
	},
	plugins: [],
};
