<script lang="ts">
	export let headline: string;
	export let id: string;
	export let subHeadline: string;
</script>

<section class="stars container mx-auto px-6 mt-10" {id}>
	<h2
		class="text-3xl font-bold text-center text-black-800 mb-4 uppercase hackaburg dark:dark:text-white"
	>
		{headline}
	</h2>
	<hr class="w-20 h-1 mb-4 mx-auto text-black" />
	<h2 class="text-xl font-bold text-center text-black-800 mb-8 dark:dark:text-white">
		{@html subHeadline}
	</h2>
	<slot />
</section>

<style>
	section:before {
		height: 54px;
		content: '';
		display: block;
	}
</style>
