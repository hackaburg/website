<script lang="ts">
	export let headline: string;
	export let id: string;
	export let subHeadline: string;
</script>

<section class="container mx-auto px-6 p-3 pt-10" {id}>
	<h2 class="text-3xl font-bold text-center text-black-800 mb-8 uppercase hackaburg">{headline}</h2>
	<h2 class="text-xl font-bold text-center text-black-800 mb-8 ">{subHeadline}</h2>
	<slot />
</section>

<style>
	section:before {
		height: 54px;
		content: '';
		display: block;
	}
</style>
