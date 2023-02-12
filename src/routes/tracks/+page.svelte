<script>
	import './../../app.css';
	import 'flowbite/dist/flowbite.css';
	import Footer from '../components/Footer.svelte';
	import Content from './Content.svelte';
	import NavTracks from '../components/NavTracks.svelte';
	export const prerender = true;
</script>

<div class="container mx-auto mt-20">
	<NavTracks />
	<Content />
</div>
<div class="bottom-0 w-full">
	<Footer />
</div>
