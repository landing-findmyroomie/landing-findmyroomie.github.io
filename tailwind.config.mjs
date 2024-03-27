import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cabin Variable', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			colors: {
				'lightBlue': '#0E92B0',
				'background': '#09090B',
				'myBlack': '#84818B',
				'videoBg': '#323232',
				'darkGrey': '#212121',
				'divider': '#2c2c2c',
				'text': '#A59FB0'
			}
		},
	},
	plugins: [],
}
