<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import team from '$lib/images/team.png';
</script>

<BaseComponent
	headline={'Behind Hackaburg'}
	subHeadline={'Ratisbona Coding e.V.'}
	id={'ratisbona-coding'}
>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="p-4">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={team} alt="your-image-description" class="w-2/3 mx-auto" />
		</div>
		<div class="p-4 text-center">
			<p class="text-base mb-8 text-left mt-8">
				We are ratisbona-coding e.V., a non-profit association from Regensburg. We were founded in
				2018 from the student organization team of the Hackaburg Hackathon. As a young association,
				we organize other IT events in the Regensburg region in addition to the Hackaburg Hackathon.
			</p>
			<a
				href="https://ratisbona-coding.org/"
				target="_blank"
				class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
				>About Ratisbona Coding e.V.</a
			>
		</div>
	</div>
</BaseComponent>

<style scoped>
	img {
		border-radius: 0.5rem;
	}
</style>
