<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Venue'} subHeadline={'How to get there?'} id={'venue'}>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="p-4">
			<div class="address lg:pl-24 flex flex-col">
				<p class="text-lg text-white mb-2 text-left">Techbase Regensburg</p>
				<p class="text-lg text-white mb-2 text-left">Franz-Mayer-Straße 1</p>
				<p class="text-lg text-white mb-8 text-left">93053 Regensburg</p>
				<div class="grid md:grid-cols-1 gap-4">
					<a
						href="https://www.google.de/maps/dir//TechBase+Regensburg"
						class="w-full max-w-xs text-md w-1/2 text-white border-2 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white flex flex-col items-center"
						>Directions</a
					>
				</div>
			</div>
		</div>
		<div class="p-4">
			<iframe
				class="venue"
				title="Map"
				src="https://www.openstreetmap.org/export/embed.html?bbox=12.093780040740969%2C48.99895101491149%2C12.106568813323976%2C49.005672708905124&amp;layer=mapnik&amp;marker=49.00231197530939%2C12.10017442703247"
				scrolling="no"
			/>
		</div>
	</div>
</BaseComponent>
