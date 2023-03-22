<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import track_ai from '$lib/images/track_ai.jpg';
	import track_free from '$lib/images/track_free.jpg';
	import track_local from '$lib/images/track_local.jpg';
	import track_mobility from '$lib/images/track_mobility.jpg';
	import track_social_justice from '$lib/images/track_social_justice.jpg';

	let data = {
		images: [
			{
				src: track_mobility,
				alt: 'Sustainable Mobility',
				id: 'mobility',
				description:
					'Mobility is not an end in itself but rather a means, allowing people to access what they need: jobs, social interaction, education, and a full range of other services. But we need more sustainable and more intelligent ways to move.'
			},
			{
				src: track_local,
				alt: 'Think global, hack local ',
				id: 'local',
				description:
					"We can't all save the world all the time, but each of us can change or improve something about the place where we live."
			},
			{
				src: track_ai,
				alt: 'Reduce the Footprint',
				id: 'footprint',
				description:
					'Artificial intelligence is no longer just a topic for the future, but already has real applications. How can we use the possibilities of this technology profitably for all of us?'
			},
			{
				src: track_social_justice,
				alt: 'Social',
				id: 'social',
				description:
					'In times when one crisis follows the next (Climate, War of aggression against Ukraine, Covid-19), perhaps the best idea is not the one that yields the most profit, but the one that most or most easily helps others.'
			},
			{
				src: track_free,
				alt: 'Free Track',
				id: 'free',
				description:
					'You have an idea that doesn`t fit into one of the tracks above? No restrictions are set here, feel free to build what ever you want!'
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
		<div class="grid  grid-cols-1 md:grid-cols-2 gap-4 mt-28">
			{#each data.images as image, i}
				<div class="md:pl-10 md:pr-10 md:pb-10" id={image.id}>
					<img
						class="w-full md:w-11/12 h-72 object-cover rounded-xl mt-10 md:mt-0"
						src={image.src}
						loading="lazy"
						alt={''}
					/>
				</div>
				<div class="text-left max-w-2xl">
					<div class="text-2xl text-hackaburg-900">Track {i}</div>
					<div class="text-3xl">{image.alt}</div>
					<p class="mt-5">{image.description}</p>
				</div>
			{/each}
		</div>
	</div>
</BaseComponent>

<BaseComponent headline={'Challenges and Tracks'} subHeadline="" id={'challenges'}>
	<div class="w-full md:w-1/2 flex flex-wrap flex-col items-center">
		<p class="text-black text-left w-2/3">
			Not everyone always has the right idea at the ready, but would still like to try out something
			new on a Hackaburg. That's why our sponsors offer real problems from their companies as a
			challenge. They provide data sets, hardware and experts to support you in the challenge.
		</p>
		<a
			href="/tracks"
			class="text-md w-52 text-center mt-10 text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white "
			>Jump to Tracks</a
		>
		<p class="text-black text-left mb-20 mt-10">### Challenges are comming soon ###</p>
	</div>
</BaseComponent>
