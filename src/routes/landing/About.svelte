<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import img_2016 from '$lib/images/2016.png';
	import img_2017 from '$lib/images/2017.png';
	import img_2018 from '$lib/images/2018.png';
	import img_2019 from '$lib/images/2019.png';
	import img_2022 from '$lib/images/2022.png';
	import img_2023 from '$lib/images/2023.png';

	let events = [
		{
			img: img_2016,
			title: 'Hackaburg 2016',
			link: null,
			text: 'We are moving, for the first time Hackaburg will take place in the Techbase.',
			aftermovie: 'https://www.youtube.com/watch?v=p4qgYhv26C0'
		},
		{
			img: img_2017,
			title: 'Hackaburg 2017',
			link: null,
			text: 'We are moving, for the first time Hackaburg will take place in the Techbase.',
			aftermovie: 'https://www.youtube.com/watch?v=pRULo5j4gZo'
		},
		{
			img: img_2018,
			title: 'Hackaburg 2018',
			link: '/2018/',
			text: 'We are moving, for the first time Hackaburg will take place in the Techbase.',
			aftermovie: 'https://www.youtube.com/watch?v=LVb5gjv5KeE'
		},
		{
			img: img_2019,
			title: 'Hackaburg 2019',
			link: '/2019/',
			text: 'We break the previous record for participants. Over 120 participants hack and tinker for 2 days.',
			aftermovie: 'https://www.youtube.com/watch?v=ygeK5hStwP8'
		},
		{
			img: img_2022,
			title: 'Hackaburg 2022',
			link: '/2022/',
			text: 'After a Corona break of almost 3 years, Hackaburg can finally take place again.',
			aftermovie: 'https://www.youtube.com/watch?v=0VDavuIEMOk'
		},
		{
			img: img_2023,
			title: 'Hackaburg 2023',
			link: '/2023/',
			text: 'Under the motto "Goes Green", Hackabug is taking place under the aspect of sustainability.',
			aftermovie: 'https://www.youtube.com/watch?v=7dS4uvJLne0'
		}
	];
</script>

<BaseComponent
	headline={'Looking Back'}
	subHeadline={'Hackaburg 2018 / 2019 / 2022 / 2023'}
	id={'about'}
>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 md:mt-8 mt-4 sm:p-8">
		{#each events as event, i}
			<div class="glow bg-black rounded-2xl dark:bg-gray-800 ml-4 relative">
				<div class="relative">
					<img class="rounded-ss-xl rounded-se-xl w-full" alt="event" src={event.img} />
				</div>
				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
						{event.title}
					</h5>
					<p class="mb-3 text-base text-white dark:text-gray-400 h-16">
						{event.text}
					</p>
					<div class="flex">
						{#if event.link != null}
							<a href={event.link}>
								<button
									class="flex items-center m-auto w-20 mt-8 rounded-3xl px-3 py-2 text-primary hover:cursor-pointer hover:bg-black hover:text-gray-200"
								>
									Website <svg
										class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="white"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</button>
							</a>
						{/if}
						<a href={event.aftermovie} class="ml-2">
							<button
								class="flex items-center m-auto w-32 mt-8 border-2 text-white border-white rounded-3xl px-3 py-2 hover:cursor-pointer hover:bg-black hover:text-gray-200"
							>
								Aftermovie <svg
									class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="white"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</button>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</BaseComponent>
