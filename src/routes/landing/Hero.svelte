<script>
	import hero from '$lib/images/hackaburg.svg';
	import Button from '../components/Button.svelte';
</script>

<section class="dark:bg-gray-900 mt-8">
	<div class="grid lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="place-self-center md:col-span-5 p-6">
			<h1
				class="flex dark:text-white mb-4 md:text-5xl text-3xl font-extrabold dark:dark:text-white mt-8"
			>
				HACKABURG <p class="ml-4 text-primary">2025</p>
				<br />
			</h1>
			<p class="mb-6 font-bold dark:text-white lg:mb-8 text-xl">
				<b class="text-primary">22.5. - 24.5.2025</b> | Techbase Regensburg
			</p>
			<div class="mb-6 font-bold dark:text-white lg:mb-8 text-md">
				<a href="https://apply.hackaburg.de" target="_blank" rel="noreferrer">
					<Button label="Apply now!" />
				</a>
			</div>
			<div class="sm:flex md:space-x-4">
				<div>
					<a
						href="https://26490796.sibforms.com/serve/MUIFAPx4aKGKuMbU3UZxk_ODAxapOpxY9oApe-LFK48oC2HcUpuUDG5RfLrplRnzmlE2fhnxFsrLWAO1LoVerg8hegpCyxQDQ85Ac45SzhCZXZlT8m5RRT7wDfIbcv9GgTCPGWiw6QSSK2qQR2n6ST8ezKWg-QTn0tCj8LRENn-vhJpHafi3096LcWLZQXDIx_IzJZaOLL7Chfdk"
						target="_blank"
						rel="noreferrer"
					>
						<Button label="Our Newsletter" />
					</a>
				</div>
				<div>
					<a href="https://linktr.ee/hackaburg/" target="_blank" rel="noreferrer">
						<Button label="Social Media" />
					</a>
				</div>
			</div>
		</div>

		<div class="mt:mt-0 md:col-span-7 lg:flex mx-auto sm:p-8 relative">
			<img src={hero} class="transition w-96 px-20 md:px-0" alt="mockup" />
		</div>
	</div>
</section>
