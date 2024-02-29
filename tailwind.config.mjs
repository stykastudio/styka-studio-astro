/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/src/assets/heroBg.webp')",
			},
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
				serif: ["Schibsted Grotesk Variable", ...defaultTheme.fontFamily.serif],
			},
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
			keyframes: {
				slidein: {
					from: {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
			},
		},
		colors: {
			transparent: "transparent",
			white: "#ffffff",
			jet: {
				DEFAULT: "#323232",
				100: "#0a0a0a",
				200: "#141414",
				300: "#1f1f1f",
				400: "#292929",
				500: "#323232",
				600: "#5c5c5c",
				700: "#858585",
				800: "#adadad",
				900: "#d6d6d6",
			},

			tan: {
				DEFAULT: "#CAAB8A",
				100: "#2f2315",
				200: "#5e452a",
				300: "#8d6840",
				400: "#b68a5c",
				500: "#caab8a",
				600: "#d5bda2",
				700: "#e0cdb9",
				800: "#eaded1",
				900: "#f5eee8",
			},

			davysgray: {
				DEFAULT: "#595754",
				100: "#121111",
				200: "#242322",
				300: "#363432",
				400: "#474643",
				500: "#595754",
				600: "#7c7975",
				700: "#9d9b97",
				800: "#bebcba",
				900: "#dededc",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
		require("@tailwindcss/typography"),
	],
};
