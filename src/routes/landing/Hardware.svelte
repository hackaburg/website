<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import Button from '../components/Button.svelte';
	import cutter from '$lib/images/cutter.png';
	import printer from '$lib/images/printer.png';
</script>

<BaseComponent headline={'Hardware'} subHeadline={'You Need It We Have It!'} id={'hardware'}>
	<div class="text-center dark:text-white">
		<p>
			We have a lot of hardware from us and our supporters. This year we also provide a lasercutter
			and two 3D printers. We also have a lot of different smaller hardware components, have a look
			at the list below.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 md:mt-8 mt-4 sm:p-8">
			<div>
				<img src={printer} alt="printer" class="m-auto" />
				<h1 class="text-xl m-auto mt-4">Pursa Mini</h1>
			</div>
			<div>
				<img src={printer} alt="printer" class="m-auto" />
				<h1 class="text-xl m-auto mt-4">Pursa Mini</h1>
			</div>
			<div>
				<img src={cutter} alt="cutter" class="m-auto" />
				<h1 class="text-xl m-auto mt-4">Mr Beam Lasercutter</h1>
			</div>
		</div>
		<a
			href="https://docs.google.com/spreadsheets/d/1gRr8oxADCrWdkZiIQk2lfpEkRAI-z8vDCcRmEEfjRms/edit?usp=sharing"
			target="_blank"
			rel="noreferrer"
		>
			<Button label="Download Hardware List" />
		</a>
	</div>
</BaseComponent>
