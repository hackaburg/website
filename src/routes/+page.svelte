<script>
	import Nav from './components/Nav.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Hero from './landing/Hero.svelte';
	import About from './landing/About.svelte';
	import Supporters from './landing/Supporters.svelte';
	import Venue from './landing/Venue.svelte';
	import FAQ from './landing/FAQ.svelte';
	import Behind from './landing/Behind.svelte';

	import Footer from './components/Footer.svelte';
	import Timeline from './landing/Timeline.svelte';
	import Team from './landing/Team.svelte';
	import Schedule from './landing/Schedule.svelte';
	import Workshops from './landing/Workshops.svelte';
	export const prerender = true;
</script>

<Nav />
<div class="container mx-auto">
	<Hero />
	<Timeline />
	<Schedule />
  <Workshops />
	<Supporters />
	<Team />
	<Behind />
	<About />
	<Venue />
	<FAQ />
</div>
<Footer />

<style>
	@media (min-width: 1536px) {
		.container {
			max-width: 1336px;
		}
	}
</style>
