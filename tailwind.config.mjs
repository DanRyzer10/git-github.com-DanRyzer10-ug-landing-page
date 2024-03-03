/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'blue-intense':'#0D3F72',
				'blue-light':'#0CB4D9',
				'white-light':'#F2F2F2',
				'white-intense':'#BBC9D2',
				'light-gray':'#E1DBD9',
				'blue-mid':'#1776CA',
				'blulight':'#8AA8BD'
			},
			fontFamily: {
				'body': ['Inter', 'sans-serif'],
				'heading':['Lora', 'serif']
			},

		},
	},
	plugins: [animations],
}
