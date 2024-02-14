/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
<<<<<<< HEAD
  theme: {
    extend: {
      colors: {
        "primary": "#3fb28f",
      },
    },
  },
=======
	theme: {
		extend: {}
	},
>>>>>>> 3d03d62 (feat: 🎸 add old repo)
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
