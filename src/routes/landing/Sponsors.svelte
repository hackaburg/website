<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import sponsors from '$lib/images/sponsors.png';
</script>

<BaseComponent
	headline={'Sponsoring'}
	subHeadline={'Become a sponsor for Hackaburg 2024'}
	id={'about'}
>
	<div class="text-center text-white">
		Contact us and get detailed information on how a cooperation or sponsorship can look like. We
		are looking forward to hearing from you! <br />Mail us at: <b>sponsor@ratisbona-coding.org</b>
		<br />
		<a href="mailto:sponsor@ratisbona-coding.org">
			<button
				class="m-auto w-52 mt-8 border-2 border-white rounded-3xl px-3 py-2 text-white hover:cursor-pointer hover:bg-black hover:text-gray-200"
			>
				Please contact us
			</button>
		</a>
		<h2 class="text-xl font-bold text-center text-black-800 mt-12">
			Supporters that trusted us over the years
		</h2>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={sponsors} />
	</div>
</BaseComponent>
