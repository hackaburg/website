<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import ratisbonacoding from '$lib/images/ratisbonacoding.png';
	import Button from '../components/Button.svelte';
</script>

<BaseComponent
	headline={'Behind Hackaburg'}
	subHeadline={'We are Ratisbona Coding - we make Hackaburg'}
	id={'about'}
>
	<div class="text-center mb-24 text-white">
		<p>
			We are ratisbona-coding e.V., a non-profit association from Regensburg. We were founded in
			2018 from the student organization team of the Hackaburg Hackathon. As a young association, we
			organize other IT events in the Regensburg region in addition to Hackaburg.
		</p>
		<a href="https://ratisbona-coding.org/" target="_blank">
      <Button label="More about us" />
		</a>
		<div class="relative group">
			<div
				class="absolute -inset-0.5 -mt-1 -mb-1 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 "
			/>
			<div class="relative">
				<img class="mt-8 rounded-2xl z-50" src={ratisbonacoding} />
			</div>
		</div>
	</div>
</BaseComponent>
