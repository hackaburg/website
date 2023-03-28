<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import busplan from '$lib/busplan.pdf';
</script>

<BaseComponent headline={'Teaser'} subHeadline={'A plant is not enough!'} id={'teaser'}>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="p-4">
			<iframe
				width="100%"
				height="315"
				src="https://www.youtube.com/embed/3D3N9r8PGv4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
		<div class="p-4">
			<div class="address lg:pl-24 flex flex-col">
				<p class="text-lg mb-2 text-left">
					Hackaburg 2023 has finally started! <br />Stay up to date over our social media channels.
				</p>
				<br />

				<div class="grid md:grid-cols-1 gap-4">
					<a
						href="https://www.instagram.com/hackaburg/"
						target="_blank"
						class="w-full max-w-xs text-md w-1/2 text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white flex flex-col items-center"
						>Follow us on Instagram</a
					>
					<a
						href="https://www.linkedin.com/company/17902166/"
						target="_blank"
						class="w-full max-w-xs text-md w-1/2 text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white flex flex-col items-center"
						>Follow us on LinkedIn</a
					>
				</div>
			</div>
		</div>
	</div>
</BaseComponent>

<style scoped>
	.venue {
		width: 100%;
		height: 25rem;
		border-radius: 5px;
	}
</style>
