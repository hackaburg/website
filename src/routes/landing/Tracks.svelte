<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	let data = {
		images: [
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'Sustainable Mobility',
				description: 'Sustainable Mobility'
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'Think global, hack local ',
				description: 'Think global, hack local '
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'Reduce the Footprint',
				description: 'Reduce the Footprint'
			},
			{
				src: 'https://via.placeholder.com/600x300',
				alt: 'Social',
				description: 'Social'
			},
			{
				src: 'https://via.placeholder.com/700x300',
				alt: 'Free Track',
				description: 'Free Track'
			}
		]
	};
</script>

<BaseComponent headline={'Tracks'} subHeadline={'How you can change the future'} id={'tracks'}>
	<div class="w-full md:w-1/2 flex flex-wrap flex-col items-center">
		<p class="text-black text-left">
			The new tracks introduced this year offer you the possibility to challenge in the category of
			interest.
		</p>
		<div class="grid">
			{#each data.images as image, i}
				<div
					class=" grid-item {i === data.images.length - 1 && data.images.length % 2 !== 0
						? 'grid-item-full'
						: ''}"
				>
					<a href="/tracks">
						<img src={image.src} alt={image.alt} />
					</a>
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
