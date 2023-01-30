<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	let videoUrl = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4';
</script>

<BaseComponent headline={'Hackaburg 2022'} subHeadline={'What happened last time?'} id={'green'}>
	<div class="w-full md:w-1/2">
		<p class="text-black">XXX</p>
		<div class="video-container">
			<video autoplay playsinline muted src={videoUrl} />
		</div>
	</div></BaseComponent
>

<style scoped>
	.video-container {
		position: relative;
		overflow: hidden;
	}

	.video-container::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: inherit;
		transform: skew(-50deg);
		z-index: -2;
	}

	video {
		width: 100%;
		height: auto;
		object-fit: cover;
		transform: skew(20deg);
	}
</style>
