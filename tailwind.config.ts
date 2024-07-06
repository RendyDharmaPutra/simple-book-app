import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00a499",
				secondary: "#98ddcc",
				page: "#d3f1e9",
				danger: "#D9534F",
			},
			backgroundImage: {},
		},
	},
	plugins: [],
};
export default config;
