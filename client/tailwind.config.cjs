/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./chat.html",
		"./public/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			'black':
			{
				110: '#000',
				100: '#222831',
				90: '#393E46',
			},
			'yellow': {
				100: '#FFd369',
				90: '#fbe0a1',
			},
			'gray': {
				100: '#808080',
				50: '#c5c5c5',
				0: '#EEEEEE',
			},
		}
	},
	plugins: [],
}
