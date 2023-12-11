<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import ratisbonacoding from '$lib/images/ratisbonacoding.png';
</script>

<BaseComponent
	headline={'Behind Hackaburg'}
	subHeadline={'We are Ratisbona Coding - we make Hackaburg'}
	id={'about'}
>
	<div class="text-center mb-24">
		<p>
			We are ratisbona-coding e.V., a non-profit association from Regensburg. We were founded in
			2018 from the student organization team of the Hackaburg Hackathon. As a young association, we
			organize other IT events in the Regensburg region in addition to Hackaburg.
		</p>
		<a href="https://ratisbona-coding.org/">
			<button
				class="m-auto w-52 mt-8 border-2 border-black rounded-3xl px-3 py-2 text-black hover:cursor-pointer hover:bg-black hover:text-gray-200"
			>
				More about us
			</button>
		</a>
		<img class="mt-8" src={ratisbonacoding} />
	</div>
</BaseComponent>
