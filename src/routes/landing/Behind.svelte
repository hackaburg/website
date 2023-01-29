<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Behind Hackaburg'} subHeadline={'Ratisbona Coding e.V.'} id={'green'}>
	<div class="w-full md:w-1/2 flex flex-wrap">
		<div class="w-1/2 p-4">
			<img src="https://via.placeholder.com/150" alt="your-image-description" class="w-full" />
		</div>
		<div class="w-1/2 p-4 text-center">
			<p class="text-base mb-8 text-left">
				We are ratisbona-coding e.V., a non-profit association from Regensburg. We were founded in
				2018 from the student organization team of the Hackaburg Hackathon. As a young association,
				we organize other IT events in the Regensburg region in addition to the Hackaburg.
			</p>
		</div>
	</div>
</BaseComponent>

<style scoped>
	img {
		border-radius: 0.5rem;
	}
</style>
