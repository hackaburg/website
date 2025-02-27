<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	import continental from '$lib/images/supporters/conti.png';
	import krones from '$lib/images/supporters/syskron.png';
	import tcon from '$lib/images/supporters/tcon.png';
	import trinnovative from '$lib/images/supporters/trinnovative.png';
	import internetx from '$lib/images/supporters/internetx.png';
	import rnext from '$lib/images/supporters/rnext.png';
	import infineon from '$lib/images/supporters/infineon.png';
	import intive from '$lib/images/supporters/intive.png';
	import vector from '$lib/images/supporters/vector.png';
	import edag from '$lib/images/supporters/edag.png';
	import zollner from '$lib/images/supporters/zollner.png';
	import msg from '$lib/images/supporters/msg.png';

	let images = {
		partners: [],
		starter_1: [
			{
				src: msg,
				alt: 'MSG Group',
				link: 'https://karriere.msg.group/',
				width: 'w-40'
			},
			{
				src: trinnovative,
				alt: 'Trinnovative',
				link: 'https://www.trinnovative.de/karriere/',
				width: 'h-20'
			}
		],
		medium: [
			{
				src: infineon,
				alt: 'Infineon',
				link: 'https://www.infineon.com/regensburg',
				width: 'w-33'
			},
			{
				src: vector,
				alt: 'Vector',
				link: 'https://jobs.vector.com',
				width: 'w-33'
			},
			{
				src: tcon,
				alt: 'tcon',
				link: 'https://careers.team-con.de',
				width: 'w-33'
			},
			{
				src: zollner,
				alt: 'Zollner',
				link: 'https://www.zollner.de/karriere',
				width: 'w-20'
			},

			{
				src: rnext,
				alt: 'R-Next',
				link: 'https://www.regensburg.de/r-next',
				width: 'w-33'
			}
		],
		premium: [
			{
				src: continental,
				alt: 'Continental',
				link: 'https://www.continental.com/en/career/',
				width: 'full-size max-h-[120px]'
			}
		]
	};

	let topRowMediumSponsors = images.medium.slice(0, 3);
	let bottomRowMediumSponsors = images.medium.slice(3);
</script>

<BaseComponent
	headline={'Supporters'}
	subHeadline={'Without them, Hackaburg would not be possible'}
	id={'supporters'}
>
	<div class="bg-white md:mt-8 mt-4 sm:p-2 rounded-2xl glow">
		<h2 class="text-2xl font-bold text-center text-black-800 my-4 uppercase hackaburg pt-4">
			Our Sponsors
		</h2>

		<div class="grid grid-cols-1 justify-items-center">
			{#each images.premium as image}
				<a class="px-10 py-8" href={image.link}>
					<img src={image.src} class={image.width} alt={image.alt} />
				</a>
			{/each}
		</div>
		<hr />
		<!-- Top row Medium: 3 logos -->
		<div class="grid grid-cols-3 gap-4 mb-2">
			{#each topRowMediumSponsors as image}
				<a class="p-3 flex items-center justify-center" href={image.link}>
					<img
						src={image.src}
						class="max-w-[80%] max-h-full w-auto object-contain"
						alt={image.alt}
					/>
				</a>
			{/each}
		</div>
		<!-- Bottom row Medium: 2 logos -->
		<div class="grid grid-cols-2 gap-4 px-20 md:px-32 lg:px-48 mb-4 sm:pb-2">
			{#each bottomRowMediumSponsors as image, i}
				<a class="p-4 mx-auto h-24 flex items-center justify-center" href={image.link}>
					<img
						src={image.src}
						class="h-full w-auto object-contain {image.alt === 'Zollner' ? 'scale-75' : ''}"
						alt={image.alt}
					/>
				</a>
			{/each}
		</div>
		<hr class="sm: pb-4" />
		<div class="grid grid-cols-1 md:grid-cols-2">
			{#each images.starter_1 as image}
				<a class="p-3 m-auto" href={image.link}>
					<img
						src={image.src}
						class="w-20 md:w-auto max-w-[150px] md:max-w-[200px] h-auto"
						alt={image.alt}
					/>
				</a>
			{/each}
		</div>
	</div>
</BaseComponent>
