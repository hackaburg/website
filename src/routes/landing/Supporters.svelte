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
				link: 'https://www.msg.group'
			},
			{
				src: trinnovative,
				alt: 'Trinnovative',
				link: 'https://www.trinnovative.de/'
			},
			{
				src: edag,
				alt: 'EDAG',
				link: 'https://www.edag.com/de/'
			},
			{
				src: intive,
				alt: 'intive',
				link: 'https://intive.com'
			}
		],
		starter_2: [
			{
				src: internetx,
				alt: 'InternetX',
				link: 'https://www.internetx.com'
			}
		],
		medium: [
			{
				src: infineon,
				alt: 'Infineon',
				link: 'https://www.infineon.com/cms/de/'
			},
			{
				src: tcon,
				alt: 'tcon',
				link: 'https://careers.team-con.de'
			},
			{
				src: vector,
				alt: 'Vector',
				link: 'https://jobs.vector.com'
			},
			{
				src: krones,
				alt: 'Syskron',
				link: 'https://www.krones.com/en/career/krones.digital.php'
			}
		],
		premium: [
			{
				src: continental,
				alt: 'Continental',
				link: 'https://www.continental.com/en/career/'
			},
			{
				src: rnext,
				alt: 'R-Next',
				link: 'https://www.regensburg.de/r-next'
			},
			{
				src: zollner,
				alt: 'Zollner',
				link: 'https://www.zollner.de/karriere',
				class: 'md:ml-0'
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
		<!--
	<h2 class="text-2xl font-bold text-center text-black-800 mb-8 hackaburg">OUR PARTNERS</h2>

	<div class="grid grid-cols-1 md:grid-cols-2">
		{#each images.partners as partner}
			<div class="p-3">
				<img src={partner.src} alt={partner.alt} />
			</div>
		{/each}
	</div>
	-->

		<h2 class="text-2xl font-bold text-center text-black-800 my-4 uppercase emerald">
			Our Sponsors
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3">
			{#each images.premium as image}
				<a class="p-3 " href={image.link}>
					<img src={image.src} alt={image.alt} />
				</a>
			{/each}
		</div>
		<hr />
		<div class="grid grid-cols-1 md:grid-cols-4">
			{#each images.medium as image}
				<a class="p-3 m-auto" href={image.link}>
					<img src={image.src} class="w-60" alt={image.alt} />
				</a>
			{/each}
		</div>
		<hr />
		<div class="grid grid-cols-1 md:grid-cols-4">
			{#each images.starter_1 as image}
				<a class="p-3 m-auto" href={image.link}>
					<img src={image.src} class="w-40" alt={image.alt} />
				</a>
			{/each}
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3">
			{#each images.starter_2 as image}
				<a class="p-3 m-auto" href={image.link}>
					<img src={image.src} class="w-40" alt={image.alt} />
				</a>
			{/each}
		</div>
	</div>
</BaseComponent>
