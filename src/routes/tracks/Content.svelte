<script>
	// @ts-nocheck

	import BaseComponent from '../components/BaseComponent.svelte';
	import track_ai from '$lib/images/track_ai.jpg';
	import track_free from '$lib/images/track_free.jpg';
	import track_local from '$lib/images/track_local.jpg';
	import track_mobility from '$lib/images/track_mobility.jpg';
	import track_social_justice from '$lib/images/track_social_justice.jpg';
	import continental from '$lib/images/supporters/conti.png';
	import vitesco from '$lib/images/supporters/vitesco.png';
	import dgo from '$lib/images/supporters/dgo.png';
	import rnext from '$lib/images/supporters/rnext.png';
	import infineon from '$lib/images/supporters/infineon.png';

	let images = {
		partners: [
			{
				src: rnext,
				alt: 'R_Next',
				link: 'https://www.regensburg.de/r-next'
			},
			{
				src: dgo,
				alt: 'your-image-description-2',
				link: 'https://www.digitale-oberpfalz.de/'
			}
		],
		premium: [
			{
				src: continental,
				alt: 'your-image-description-1',
				link: 'https://www.continental.com/'
			},
			{
				src: infineon,
				alt: 'your-image-description-2',
				link: 'https://www.infineon.com/cms/de/'
			},
			{
				src: vitesco,
				alt: 'your-image-description-3',
				link: 'https://www.vitesco-technologies.com/de-de' // INSERT REAL LINK!
			}
		]
	};

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
		<div class="grid grid-cols-2 gap-4 mt-8">
			<div>
				<img src={images.premium[2].src} alt={images.premium[2].src} class="w-2/3 m-auto" />
			</div>
			<div class="">
				<div class="text-2xl text-hackaburg-900">ICE, SNOW AND DATA</div>
				<p class="mt-4 mb-8">
					December 2022 - two Vitesco Technologies e-cars drive through a snowy landscape. They have
					a mission: the e-Nordkapp Challenge covers 7000 km of distance, covered in 19 days with
					two prototype vehicles. Temperatures of up to -25 degrees below zero, snow-covered roads
					and icy winds. <br /><br />Imagine you are an employee of Vitesco Technologies IT and you
					are following this adventure of your colleagues of your colleagues at home in front of
					your computer. The data measurements of the two prototype vehicles are transmitted live
					via the cloud to the Vitesco Technologies headquarters in Regensburg. You are now asked to
					give your colleagues vehicle insights and track-relevant optimizations. optimizations to
					your colleagues. Let's go!
				</p>
				<a
					href="/tracks"
					class="text-md w-52 text-center mt-16 text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white "
					>Download details</a
				>
			</div>

			<div>
				<img src={images.premium[2].src} alt={images.premium[2].src} class="w-2/3 m-auto" />
			</div>
			<div class="">
				<div class="text-2xl text-hackaburg-900 mt-10">WORK SMARTER & SUSTAINABLE</div>
				<p class="mt-4 mb-8">
					The pandemic has greatly changed our office world. With the possibility of a home office,
					office office hours are becoming more and more individual as well as the journey to the
					office. On the one hand, this leads to the fact that everyone comes to the office alone
					with his/her car. On the other hand, office space and parking spaces are reduced because
					there are fewer employees who come to the office on a regular basis. And sometimes both
					factors come together - there are often peak times when everyone arrives at the same time
					and there is too little parking. arrive at the same time and there is not enough parking
					and office space. <br /><br /> Find a tech solution to streamline the entire arrival process
					with cloud services and make it more sustainable. Think of a way to minimize the number of
					single occupant drivers travel to the office in one day, and to reduce unnecessary resource
					consumption and pollution.
				</p>
				<a
					href="https://hackaburg.de/apply"
					target="_blank"
					rel="noreferrer"
					class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
					>Download details</a
				>
			</div>

			<div>
				<img src={images.partners[0].src} alt={images.partners[0].src} class="w-2/3 m-auto" />
			</div>
			<div class="">
				<div class="text-2xl text-hackaburg-900 mt-10">
					Dealing with limited resources in Regensburg
				</div>
				<p class="mt-4 mb-8">
					The sustainable use of resources is a key ecological, economic and social topic for a
					green, just and productive Regensburg. It is essential to develop short-term solutions
					that enable Regensburg's stakeholders and citizens to use resources in a more sustainable
					way like repair, share, hand on, give away, buy sustainably.
				</p>
				<a
					href="https://hackaburg.de/apply"
					target="_blank"
					rel="noreferrer"
					class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
					>Download details</a
				>
			</div>

			<div>
				<img src={images.premium[1].src} alt={images.premium[1].src} class="w-2/3 m-auto" />
			</div>
			<div class="">
				<div class="text-2xl text-hackaburg-900 mt-10">
					Unlocking the Third Dimension: Unleash the potential of our 3D camera for Raspberry Pi
				</div>
				<p class="mt-4 mb-8">
					Early access to our brand new Time of Flight Camera Module for Raspberry Pi: <br />
					* A 3D camera, delivering depth information for 640x480 pixels <br />
					* A software library to access this camera on the Raspberry Pi <br />
					* Getting started examples & workshop on how to extract point clouds with depth information
					using the library <br />
					* Our product experts who can support you during the event <br /><br />

					Your task: <br />* You are free to implement any project using our technology <br />
					* We want you to decide what you want to build with our 3D cam <br />
					* Typical use cases are: 3D scanning, face authentication, augmented reality, robotics
					<br />
				</p>
				<a
					href="https://hackaburg.de/apply"
					target="_blank"
					rel="noreferrer"
					class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
					>Download details</a
				>
			</div>

			<!--div>
				<img src={images.premium[0].src} alt={images.premium[0].src} class="w-2/3 m-auto" />
			</div>
			<div class="">
				<div class="text-2xl text-hackaburg-900 mt-10">
					Anomaly detection for optical quality inspection in automotive manufacturing
				</div>
			</div-->
			<div class="mt-16" />
		</div>
	</div></BaseComponent
>
