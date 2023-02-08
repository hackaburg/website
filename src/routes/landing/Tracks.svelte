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
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed eos vero ipsa maiores aliquid consectetur voluptatibus doloremque placeat'
			},
			{
				src: track_local,
				alt: 'Think global, hack local ',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed eos vero ipsa maiores aliquid consectetur voluptatibus doloremque placeat'
			},
			{
				src: track_ai,
				alt: 'Reduce the Footprint',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed eos vero ipsa maiores aliquid consectetur voluptatibus doloremque placeat'
			},
			{
				src: track_social,
				alt: 'Social',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed eos vero ipsa maiores aliquid consectetur voluptatibus doloremque placeat'
			},
			{
				src: track_free,
				alt: 'Free Track',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed eos vero ipsa maiores aliquid consectetur voluptatibus doloremque placeat'
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
