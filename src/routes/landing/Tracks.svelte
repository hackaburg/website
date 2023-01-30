<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	let data = {
		images: [
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'your-image-description-1',
				description: 'Image 1 description'
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'your-image-description-2',
				description: 'Image 2 description'
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'your-image-description-3',
				description: 'Image 3 description'
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'your-image-description-4',
				description: 'Image 4 description'
			},
			{
				src: 'https://via.placeholder.com/700x300',
				alt: 'your-image-description-5',
				description: 'Image 5 description'
			}
		]
	};
</script>

<BaseComponent headline={'Tracks'} subHeadline={'How you can change the future'} id={'green'}>
	<div class="w-full md:w-1/2 flex flex-wrap flex-col items-center">
		<p class="text-black text-left">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, consectetur. Voluptatibus,
			dolore, error nulla quaerat lib.
		</p>
		<div class="grid">
			{#each data.images as image, i}
				<div
					class=" grid-item {i === data.images.length - 1 && data.images.length % 2 !== 0
						? 'grid-item-full'
						: ''}"
				>
					<img src={image.src} alt={image.alt} />
					<p class="text-center">{image.description}</p>
				</div>
			{/each}
		</div>
	</div>
</BaseComponent>

<style scoped>
	.grid {
		display: flex;
		flex-wrap: wrap;
	}
	.grid-item {
		width: 50%;
		padding: 1rem;
	}

	.grid-item img {
		border-radius: 0.5rem;
	}

	.grid-item-full {
		width: 100%;
	}
</style>
