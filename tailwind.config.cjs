/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				darkknight: '#0E1D26',
				deadlydepth: '#0E1D26',
				tungsten: '#0E1D26',
				midnightblue: '#292764',
				darkslateblue: '#383376',
				mediumpurple: '#8a7fd5',
				royallavender: '#8158aa',
				slateblue: '#815baa',
				palevioletred: '#FABD77',
				lightskyblue: '#8ae1f4',
				cornflowerblue: '#74aee1'
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
