/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			hackaburg: {
				100: '#82bd53',
				900: '#82bd53'
			},
			navHighlight: {
				900: '#686868'
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
