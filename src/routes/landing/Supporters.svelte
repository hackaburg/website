<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	import continental from '$lib/images/supporters/conti.png';
	import tcon from '$lib/images/supporters/tcon.png';
	import trinnovative from '$lib/images/supporters/trinnovative.png';
	import rnext from '$lib/images/supporters/rnext.png';
	import infineon from '$lib/images/supporters/infineon.png';
	import vector from '$lib/images/supporters/vector.png';
	import zollner from '$lib/images/supporters/zollner.png';
	import msg from '$lib/images/supporters/msg.png';
	import dgo from '$lib/images/supporters/dgo.png';

	let images = {
		partners: [
			{
				src: dgo,
				alt: 'Digitale Gründerinitiative Oberpfalz',
				link: 'https://www.digitale-oberpfalz.de/'
			}
		],
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
</script>

<BaseComponent
	headline={'Supporters'}
	subHeadline={'Without them, Hackaburg would not be possible'}
	id={'supporters'}
>
	<div class="bg-white md:mt-8 mt-4 sm:p-2 rounded-2xl glow">
		<h2 class="text-2xl font-bold text-center text-black-800 pt-4 uppercase hackaburg">
			Our Sponsors
		</h2>

		<!-- Premium sponsors section -->
		<div class="flex flex-wrap justify-center pb-2">
			{#each images.premium as image}
				<a class="px-4 py-6 mx-4 flex items-center h-40" href={image.link}>
					<img src={image.src} class="h-full w-auto object-contain" alt={image.alt} />
				</a>
			{/each}
		</div>

		<hr class="mx-8 my-4" />

		<!-- Medium sponsors section -->
		<div class="flex flex-wrap justify-center">
			{#each images.medium as image}
				<a class="p-2 mx-3 my-2 flex items-center justify-center h-28" href={image.link}>
					<img
						src={image.src}
						class="h-full w-auto object-contain {image.alt === 'Zollner' || image.alt === 'R-Next' || image.alt === 'tcon'
							? 'scale-[60%]'
							: ''}"
						alt={image.alt}
					/>
				</a>
			{/each}
		</div>

		<hr class="mx-8 my-4" />

		<!-- Starter sponsors section with specific height adjustment -->
		<div class="flex flex-wrap justify-center">
			{#each images.starter_1 as image}
				<a class="p-2 mx-3 my-1 flex items-center justify-center" href={image.link}>
					<img
						src={image.src}
						class="w-auto object-contain {image.alt === 'Trinnovative' ? 'h-16' : 'h-8'}"
						alt={image.alt}
					/>
				</a>
			{/each}
		</div>
		<hr class="mx-8 my-4" />

		<!-- Supporters section -->
		<h2 class="text-2xl font-bold text-center text-black-800 my-4 hackaburg">OUR PARTNERS</h2>
		<div class="text-center pb-8">
			{#each images.partners as partner}
				<a href={partner.link} class=" flex justify-center">
					<img src={partner.src} alt={partner.alt} class="max-h-28 w-auto" />
				</a>
			{/each}
		</div>
	</div>
</BaseComponent>
