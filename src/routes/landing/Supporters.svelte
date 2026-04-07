<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	import continental from '$lib/images/supporters/conti.png';
	import tcon from '$lib/images/supporters/tcon.png';
	import trinnovative from '$lib/images/supporters/trinnovative.png';
	import rnext from '$lib/images/supporters/rnext.png';
	import infineon from '$lib/images/supporters/infineon.png';
	import vector from '$lib/images/supporters/vector.png';
	import msg from '$lib/images/supporters/msg.png';
	import dgo from '$lib/images/supporters/dgo.png';
	import syskron from '$lib/images/supporters/syskron.png';
	import finanzit from '$lib/images/supporters/finanzit.png';
	import righleycooper from '$lib/images/supporters/righleycooper.svg';
	import logfield from '$lib/images/supporters/logfield.png';
	import stadtwerk from '$lib/images/supporters/stadtwerk.png';

	let images = {
		partners: [
			{
				src: dgo,
				alt: 'Digitale Gründerinitiative Oberpfalz',
				link: 'https://www.digitale-oberpfalz.de/',
				width: 'h-20'
			}
		],
		starter: [
			{
				src: msg,
				alt: 'MSG Group',
				link: 'https://karriere.msg.group/',
				width: 'h-8'
			},
			{
				src: syskron,
				alt: 'syskron',
				link: 'https://www.krones.com/en/career/krones.digital.php',
				width: 'h-24'
			},
			{
				src: tcon,
				alt: 'tcon',
				link: 'https://careers.team-con.de/',
				width: 'h-10'
			},
			{
				src: trinnovative,
				alt: 'Trinnovative',
				link: 'https://www.trinnovative.de/karriere/',
				width: 'h-20'
			},
			{
				src: righleycooper,
				alt: 'Righley Cooper',
				link: 'hhttps://righleycooper.eu/',
				width: 'h-20'
			},
			{
				src: logfield,
				alt: 'Logfield',
				link: 'https://logfield.de/',
				width: 'h-20'
			}
		],
		medium: [
			{
				src: vector,
				alt: 'Vector',
				link: 'https://jobs.vector.com',
				width: 'h-22'
			},
			{
				src: rnext,
				alt: 'R-Next',
				link: 'https://www.regensburg.de/r-next',
				width: 'h-12'
			}
		],
		premium: [
			{
				src: finanzit,
				alt: 'FinanzIT',
				link: 'https://www.continental.com/en/career/',
				width: 'h-30'
			},
			{
				src: infineon,
				alt: 'Infineon',
				link: 'https://www.infineon.com/regensburg',
				width: 'h-24'
			},
			{
				src: stadtwerk,
				alt: 'Stadtwerk',
				link: 'https://www.continental.com/en/career/',
				width: 'h-20'
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
					<img src={image.src} class="h-full w-auto object-contain {image.width}" alt={image.alt} />
				</a>
			{/each}
		</div>

		<hr class="mx-8 my-4" />

		<!-- Medium sponsors section -->
		<div class="flex flex-wrap justify-center">
			{#each images.medium as image}
				<a class="p-2 mx-3 my-2 flex items-center justify-center h-28" href={image.link}>
					<img src={image.src} class="h-full w-auto object-contain {image.width}" alt={image.alt} />
				</a>
			{/each}
		</div>

		<hr class="mx-8 my-4" />

		<!-- Starter sponsors section with specific height adjustment -->
		<div class="flex flex-wrap justify-center">
			{#each images.starter as image}
				<a class="p-2 mx-3 my-1 flex items-center justify-center" href={image.link}>
					<img src={image.src} class="w-auto object-contain {image.width}" alt={image.alt} />
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
