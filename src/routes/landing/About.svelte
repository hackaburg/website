<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import img_2016 from '$lib/images/2016.jpg';
	import img_2017 from '$lib/images/2017.jpg';
	import img_2018 from '$lib/images/2018.jpg';
	import img_2019 from '$lib/images/2019.jpg';
	import img_2022 from '$lib/images/2022.jpg';
	import img_2023 from '$lib/images/2023.jpg';

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
			<div class="glow-soft bg-white rounded-2xl dark:bg-gray-800 ml-4 relative">
				<div class="relative">
					<img class="rounded-ss-xl rounded-se-xl w-full" alt="event" src={event.img} />
				</div>
				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white dark:dark:text-white">
						{event.title}
					</h5>
					<p class="mb-3 text-base dark:text-white h-16">
						{event.text}
					</p>
					<div class="flex flex-row h-full md:pt-20">
						<div class="flex flex-wrap gap-0 mt-auto">
							<a href={event.aftermovie}>
								<button
									class="glow-soft flex items-center w-32 mt-2 border-2 border-white dark:text-white rounded-3xl px-3 py-2 hover:cursor-pointer hover:bg-primary hover:text-white"
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
							{#if event.link != null}
								<a href={event.link}>
									<button
										class="glow-soft flex items-center border-2 border-white mt-2 rounded-3xl px-4 py-2 hover:cursor-pointer hover:bg-primary hover:text-white"
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
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</BaseComponent>
