<script>
	import Nav from './components/Nav.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Hero from './landing/Hero.svelte';
	import About from './landing/About.svelte';
	import Footer from './components/Footer.svelte';
	import Green from './landing/Green.svelte';
	import Behind from './landing/Behind.svelte';
	import Tracks from './landing/Tracks.svelte';
	import Supporters from './landing/Supporters.svelte';
	import Hb22 from './landing/Hb22.svelte';
	import Schedule from './landing/Schedule.svelte';
	import Venue from './landing/Venue.svelte';
	import Faq from './landing/FAQ.svelte';
	export const prerender = true;
</script>

<Nav />
<div class="container mx-auto">
	<Hero />
	<About />
	<Green />
	<Tracks />
	<Behind />
	<Supporters />
</div>

<Hb22 />

<div class="container mx-auto">
	<!--Schedule /-->
	<Venue />
	<Faq />
</div>
<Footer />

<style>
	@media (min-width: 1536px) {
		.container {
			max-width: 1336px;
		}
	}
</style>
