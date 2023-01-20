<script lang="ts">
	export let headline: string;
	export let id: string;
	export let subHeadline: string;
</script>

<section class="container mx-auto px-6 p-10" {id}>
	<h2 class="text-4xl font-bold text-center text-black-800 mb-8 uppercase">{headline}</h2>
	<h2 class="text-3xl font-bold text-center text-black-800 mb-8 text-green-500">{subHeadline}</h2>
	<hr class="my-4 mx-auto w-20 h-1 bg-black rounded border-0 md:my-10 dark:bg-gray-700" />
	<slot />
</section>

<style>
	section:before {
		height: 54px;
		content: '';
		display: block;
	}
</style>
