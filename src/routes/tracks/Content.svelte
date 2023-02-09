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

<BaseComponent headline={'Tracks and Challenges'} subHeadline="" id={'tracks'}>
	<div class="w-full md:w-1/2 flex flex-wrap flex-col items-center">
		<p class="text-black text-left">
			The new tracks introduced this year offer you the possibility to challenge in the category of
			interest.
		</p>
		<a
			href="/tracks#challenges"
			class="text-md w-52 text-center mt-10 text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white "
			>Jump to Challenges</a
		>
		<div class="grid grid-cols-2 mt-12">
			{#each data.images as image, i}
				<div class="p-10">
					<img
						class="w-11/12 h-72 object-cover rounded-xl"
						src={image.src}
						loading="lazy"
						alt={''}
					/>
				</div>
				<div class="text-left max-w-2xl mt-10">
					<div class="text-2xl text-hackaburg-900">Track {i}</div>
					<div class="text-3xl">{image.alt}</div>
					<p class="mt-5">{image.description}. {image.description}. {image.description}</p>
				</div>
			{/each}
		</div>
	</div>
</BaseComponent>

<BaseComponent headline={'Challenges and Tracks'} subHeadline="" id={'challenges'}>
	<div class="w-full md:w-1/2 flex flex-wrap flex-col items-center">
		<p class="text-black text-left">
			The new tracks introduced this year offer you the possibility to challenge in the category of
			interest.
		</p>
		<a
			href="/tracks"
			class="text-md w-52 text-center mt-10 text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white "
			>Jump to Tracks</a
		>
		<p class="text-black text-left mb-20 mt-10">### Challenges are comming soon ###</p>
	</div>
</BaseComponent>
