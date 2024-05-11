/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Dela Gothic One', 'sans-serif'],
			},
			colors: {
				base: '#e6e5ef',
				accent: '#3e3a3a',
				subAccent: '#56555f',
				sub: '#ced7dc',
			}
		},
	},
	plugins: [],
}
