<script>
	import Nav from './components/Nav.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Hero from './landing/Hero.svelte';
	import About from './landing/About.svelte';
	import Behind from './landing/Behind.svelte';

	import Footer from './components/Footer.svelte';
	import Timeline from './landing/Timeline.svelte';
	import Team from './landing/Team.svelte';
	export const prerender = true;
</script>

<Nav />
<div class="container mx-auto">
	<Hero />
  <Timeline />
  <Team />
	<About />
	<Behind />
</div>
<Footer />

<style>
	@media (min-width: 1536px) {
		.container {
			max-width: 1336px;
		}
	}
</style>
