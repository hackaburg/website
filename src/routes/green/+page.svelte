<script>
	import './../../app.css';
	import 'flowbite/dist/flowbite.css';
	import NavGreen from '../components/NavGreen.svelte';
	import Footer from '../components/Footer.svelte';
	import Content from './Content.svelte';
	export const prerender = true;
</script>

<div class="container mx-auto mt-20">
	<NavGreen />
	<Content />
</div>
<div class="bottom-0 w-full">
	<Footer />
</div>
