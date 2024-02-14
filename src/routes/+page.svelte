<script>
	import Nav from './components/Nav.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Hero from './landing/Hero.svelte';
	import About from './landing/About.svelte';
<<<<<<< HEAD
	import Behind from './landing/Behind.svelte';

	import Footer from './components/Footer.svelte';
	import Timeline from './landing/Timeline.svelte';
=======
	import Ziele from './landing/Ziele.svelte';
	import Footer from './components/Footer.svelte';
	import Projekte from './landing/Projekte.svelte';
	import Mitglied from './landing/Mitglied.svelte';
	import Termine from './landing/Termine.svelte';
	import KontaktOldSchool from './landing/KontaktOldSchool.svelte';
>>>>>>> 3d03d62 (feat: 🎸 add old repo)
	export const prerender = true;
</script>

<Nav />
<div class="container mx-auto">
	<Hero />
<<<<<<< HEAD
  <Timeline />
	<About />
	<Behind />
=======
	<About />
	<Ziele />
	<Projekte />
	<Mitglied />
	<Termine />
	<KontaktOldSchool />
>>>>>>> 3d03d62 (feat: 🎸 add old repo)
</div>
<Footer />

<style>
	@media (min-width: 1536px) {
		.container {
			max-width: 1336px;
		}
	}
</style>
