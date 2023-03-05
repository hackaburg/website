<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	import bechtle from '$lib/images/supporters/bechtle.png';
	import continental from '$lib/images/supporters/conti.png';
	import energieAgentur from '$lib/images/supporters/eagentur.png';
	import krones from '$lib/images/supporters/syscron.png';
	import tcon from '$lib/images/supporters/tcon.png';
	import tng from '$lib/images/supporters/tng.png';
	import trinnovative from '$lib/images/supporters/trinnovative.png';
	import vitesco from '$lib/images/supporters/vitesco.png';
	import dgo from '$lib/images/supporters/dgo.png';
	import rnext from '$lib/images/supporters/rnext.png';
	import infineon from '$lib/images/supporters/infineon.png';
	import witt from '$lib/images/supporters/witt.png';
	import vector from '$lib/images/supporters/vector.png';
	import emgenics from '$lib/images/supporters/emgenics.png';
	import zollner from '$lib/images/supporters/zollner.png';
	import wacker from '$lib/images/supporters/wacker.png';

	let images = {
		partners: [
			{
				src: rnext,
				alt: 'your-image-description-1',
				description: 'Image 1 description',
				link: 'https://www.regensburg.de/r-next'
			},
			{
				src: dgo,
				alt: 'your-image-description-2',
				description: 'Image 2 description',
				link: 'https://www.digitale-oberpfalz.de/'
			}
		],
		starter_1: [
			{
				src: energieAgentur,
				alt: 'your-image-description-1',
				description: 'Image 1 description',
				link: 'https://www.energieagentur-regensburg.de/'
			},
			{
				src: tng,
				alt: 'your-image-description-2',
				description: 'Image 2 description',
				link: 'https://www.tngtech.com/index.html'
			},
			{
				src: trinnovative,
				alt: 'your-image-description-3',
				description: 'Image 3 description',
				link: 'https://www.trinnovative.de/'
			},
			{
				src: krones,
				alt: 'your-image-description-4',
				description: 'Image 4 description',
				link: 'https://www.syskron.com/'
			}
		],
		starter_2: [
			{
				src: emgenics,
				alt: 'your-image-description-4',
				description: 'Image 4 description',
				link: 'https://www.emgenics.de/'
			},
			{
				src: wacker,
				alt: 'your-image-description-4',
				description: 'Image 4 description',
				link: 'https://www.wacker.com/'
			},
			{
				src: zollner,
				alt: 'your-image-description-4',
				description: 'Image 4 description',
				link: 'https://www.zollner.de/'
			}
		],
		medium: [
			{
				src: bechtle,
				alt: 'Bechtle',
				description: 'Bechtle',
				link: 'https://www.bechtle.com/ueber-bechtle/unternehmen/standorte/bechtle-it-systemhaus-regensburg'
			},
			{
				src: tcon,
				alt: 'tcon',
				description: 'Tcon',
				link: 'https://careers.team-con.de'
			},
			{
				src: witt,
				alt: 'your-image-description-3',
				description: 'Image 3 description',
				link: 'https://karriere.witt-gruppe.eu/'
			},
			{
				src: vector,
				alt: 'your-image-description-4',
				description: 'Image 4 description',
				link: 'https://jobs.vector.com/de/unsere-jobs'
			}
		],
		premium: [
			{
				src: continental,
				alt: 'your-image-description-1',
				description: 'Image 1 description',
				link: 'https://www.continental.com/'
			},
			{
				src: infineon,
				alt: 'your-image-description-2',
				description: 'Image 2 description',
				link: 'https://www.infineon.com/cms/de/'
			},
			{
				src: vitesco,
				alt: 'your-image-description-3',
				description: 'Image 3 description',
				link: 'https://www.vitesco-technologies.com/de-de' // INSERT REAL LINK!
			}
		]
	};
</script>

<BaseComponent
	headline={'Supporters'}
	subHeadline={'Without them, Hackaburg would not be possible'}
	id={'supporters'}
>
	<h2 class="text-2xl font-bold text-center text-black-800 mb-8 hackaburg">OUR PARTNERS</h2>

	<div class="grid grid-cols-1 md:grid-cols-2">
		{#each images.partners as partner}
			<div class="p-3">
				<img src={partner.src} alt={partner.alt} />
			</div>
		{/each}
	</div>

	<h2 class="text-2xl font-bold text-center text-black-800 mb-8 hackaburg mt-16">OUR SPONSORS</h2>

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
</BaseComponent>

<style scoped>
	.row {
		display: flex;
		justify-content: center;
	}
	.image {
		width: 30%;
		margin: 1%;
		box-sizing: border-box;
	}
	.image img {
		width: 100%;
	}

	.img-split {
		width: calc(50% - 20px);
		margin: 10px;
		margin: auto;
	}

	.img-normal {
		width: calc(33.33% - 20px);
		margin: 10px;
	}

	.img-small {
		width: calc(25% - 20px);
		margin: 10px;
	}

	.img-smaller {
		width: calc(20% - 20px);
		margin: 10px;
	}
</style>
