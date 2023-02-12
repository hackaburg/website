<script>
	import green from '$lib/images/green.svg';
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Green'} subHeadline={'What is our goal this year?'} id={'green'}>
	<div class="w-full md:w-1/2 flex flex-wrap">
		<div class="p-4 mx-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={green} alt="your-image-description" class="w-full" />
		</div>
		<div class="w-1/2 p-4 text-center">
			<p class="text-base mb-8 text-left mt-12">
				The topics of climate protection, environmental protection and the creation of a fairer
				world move many of us personally as organizers. We know that we can not change the world
				with Hackaburg, but we hope to make a contribution and possibly give you food for thought as
				participants in this great event. Hackaburg 2023, with the motto "Goes Green", should be the
				starting point for us to communicate as transparently as possible how big our footprint is.
				With the goal of reducing this footprint at every further event.
			</p>
			<a
				href="/green"
				class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
				>Learn more about our concept</a
			>
		</div>
	</div>
</BaseComponent>

<style scoped>
	.border {
		--tw-border-opacity: 1;
		border-color: #82bd53;
	}

	img {
		border-radius: 0.5rem;
	}
</style>
