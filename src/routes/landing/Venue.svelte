<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import busplan from '$lib/busplan.pdf';
</script>

<BaseComponent headline={'Venue'} subHeadline={'How to get there?'} id={'venue'}>
	<div class="w-full md:w-1/2 flex flex-wrap venue">
		<div class="w-1/2 p-8">
			<div class="address lg:pl-24">
				<p class="text-lg mb-2 text-left">Techbase Regensburg</p>
				<p class="text-lg mb-2 text-left">Franz-Mayer-Straße 1</p>
				<p class="text-lg mb-8 text-left">93053 Regensburg</p>
				<div>
					<a
						href="https://www.google.de/maps/dir//TechBase+Regensburg"
						class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
						>Directions</a
					>
					<a
						href="https://www.google.de/maps/dir//TechBase+Regensburg"
						target="_blank"
						class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
						>Bus Stop: TechCampus/OTH
					</a>
				</div>
			</div>
		</div>
		<div class="w-1/2 p-4">
			<iframe
				class="venue"
				title="Map"
				src="https://www.openstreetmap.org/export/embed.html?bbox=12.093780040740969%2C48.99895101491149%2C12.106568813323976%2C49.005672708905124&amp;layer=mapnik&amp;marker=49.00231197530939%2C12.10017442703247"
				scrolling="no"
			/>
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
