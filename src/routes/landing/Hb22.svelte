<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import videoUrl from '$lib/images/hb22.mp4';
</script>

<BaseComponent
	headline={'Hackaburg 2022'}
	subHeadline={'What happened last time?'}
	id={'hackaburg22'}
/>
<div class="diagonal-box p-4 md:p-0 hb22">
	<video class="hidden md:block" preload="none" autoplay loop muted src={videoUrl} />
	<div class="info-box text-white p-4 mt-5 md:top-1/3 md:left-1/4 md:p-8 md:max-w-xl">
		<h2 class="text-4xl">HACKABURG 2022</h2>
		<h3 class="text-2xl">What happened last time?</h3>
		<p class="mt-4">
			What happened last time? 125 attendees from all over Germany together with 22 Sponsors
			transformed the facilities of Techbase Regensburg into a home for 20 Teams working on a large
			variety of cool projects. The best teams got rewarded with prizes of more than 3.000€ in total
			value and everyone got new experiences, met new friends and had an enjoyable weekend.
		</p>
		<br />
		<!-- svelte-ignore security-anchor-rel-noreferrer -->
		<a
			href="https://www.youtube.com/watch?v=0VDavuIEMOk"
			class="text-md border-2 rounded-3xl px-3 py-2 cursor-pointer hover:bg-black hover:text-gray-200 w-full mt-4"
			target="_blank"
			>See the full aftermovie
		</a>
	</div>
</div>

<style scoped>
	.diagonal-box {
		transform: skewY(5deg);
		overflow: hidden;
		margin: 0 auto;
		display: block;
	}

	.info-box {
		position: absolute;
		transform: skewY(-5deg);
		background-color: rgba(0, 0, 0, 0.75);
		border-radius: 5px;
		backdrop-filter: blur(10px);
	}

	.hb22 {
		height: 50rem;
	}

	/* md = 767px */
	@media only screen and (max-width: 767px) {
		/* Bei jedem größeren Monitor kommen neue Regeln hinzu */
		.hb22 {
			height: 25rem;
		}

		/* disable diagonal box */
		.diagonal-box {
			transform: none;
		}
	}
</style>
