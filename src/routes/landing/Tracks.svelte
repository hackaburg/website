<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	import track_ai from '$lib/images/track_ai.jpeg';
	import track_free from '$lib/images/track_free.jpeg';
	import track_local from '$lib/images/track_local.jpeg';
	import track_mobility from '$lib/images/track_mobility.jpeg';
	import track_social from '$lib/images/track_social.jpeg';

	let data = {
		images: [
			{
				src: track_mobility,
				alt: 'Sustainable Mobility',
				description:
					'Mobility is not an end in itself but rather a means, allowing people to access what they need: jobs, social interaction, education, and a full range of other services. But we need more sustainable and more intelligent ways to move.'
			},
			{
				src: track_local,
				alt: 'Think global, hack local ',
				description:
					'We cant all save the world all the time, but each of us can change or improve something about the place where we live.'
			},
			{
				src: track_ai,
				alt: 'Reduce the Footprint',
				description:
					'Artificial intelligence is no longer just a topic for the future, but already has real applications. How can we use the possibilities of this technology profitably for all of us?'
			},
			{
				src: track_social,
				alt: 'Social',
				description:
					'In times when one crisis follows the next (Climate, War in Ukraine, Covid-19), perhaps the best idea is not the one that yields the most profit, but the one that most or most easily helps others.'
			},
			{
				src: track_free,
				alt: 'Free Track',
				description:
					'You have an idea that doesn`t fit into one of the tracks above? No restrictions are set here, feel free to build what ever you want!'
			}
		]
	};
</script>

<BaseComponent headline={'Tracks'} subHeadline={'How you can change the future'} id={'tracks'}>
	<div class="w-full md:w-1/2 flex flex-wrap flex-col items-center">
		<p class="text-black text-left">
			The new tracks introduced this year offer you the possibility to challenge in the category of
			interest.
		</p>
		<div class="grid mt-12">
			{#each data.images as image, i}
				<div
					class=" grid-item {i === data.images.length - 1 && data.images.length % 2 !== 0
						? 'grid-item-full relative'
						: 'relative'}"
				>
					<img class="w-full h-64 object-cover" src={image.src} loading="lazy" alt={''} />
					<a href="/tracks">
						<div
							class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
							style="background-color: rgba(251, 251, 251, 0.2)"
						/>
					</a>
					<div
						class="absolute text-3xl text-white top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hackaburg-900 p-4  bg-opacity-50 "
					>
						{image.alt}
					</div>
					<div class="flex-1 p-6">
						<div class="">{image.description}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</BaseComponent>

<style scoped>
	.grid {
		display: flex;
		flex-wrap: wrap;
	}
	.grid-item {
		width: 50%;
		padding: 1rem;
	}

	.grid-item img {
		border-radius: 0.5rem;
	}

	.grid-item-full {
		width: 100%;
	}
</style>
