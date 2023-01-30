<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	let images = {
		partners: [
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'your-image-description-1',
				description: 'Image 1 description'
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'your-image-description-2',
				description: 'Image 2 description'
			}
		],
		starter: [
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-1',
				description: 'Image 1 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-2',
				description: 'Image 2 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-3',
				description: 'Image 3 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-4',
				description: 'Image 4 description'
			}
		],
		medium: [
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-1',
				description: 'Image 1 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-2',
				description: 'Image 2 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-3',
				description: 'Image 3 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-4',
				description: 'Image 4 description'
			}
		],
		premium: [
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-1',
				description: 'Image 1 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-2',
				description: 'Image 2 description'
			},
			{
				src: 'https://via.placeholder.com/400x200',
				alt: 'your-image-description-3',
				description: 'Image 3 description'
			}
		]
	};
</script>

<BaseComponent
	headline={'Supporters'}
	subHeadline={'Without them, Hackaburg would not be possible'}
	id={'green'}
>
	<div class="w-full md:w-1/2">
		<h2 class="text-2xl font-bold text-center text-black-800 mb-8 hackaburg">OUR PARTNERS</h2>
		<p class="text-center mb-8">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem recusandae minima temporibus
			id autem vel culpa magni?
		</p>
		<div class="mb-8 row">
			{#each images.partners as partner}
				<div class="img-split">
					<img src={partner.src} alt={partner.alt} />
				</div>
			{/each}
		</div>

		<h2 class="text-2xl font-bold text-center text-black-800 mb-8 hackaburg">OUR SPONSORS</h2>
		<p class="text-center">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem recusandae minima temporibus
			id autem vel culpa magni?
		</p>

		<div class="row">
			{#each images.premium as image}
				<div class="image img-normal">
					<img src={image.src} alt={image.alt} />
				</div>
			{/each}
		</div>
		<div class="row">
			{#each images.medium as image}
				<div class="image img-small">
					<img src={image.src} alt={image.alt} />
				</div>
			{/each}
		</div>
		<div class="row">
			{#each images.starter as image}
				<div class="image img-smaller">
					<img src={image.src} alt={image.alt} />
				</div>
			{/each}
		</div>
	</div></BaseComponent
>

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
