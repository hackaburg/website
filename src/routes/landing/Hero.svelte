<script>
	import hero from '$lib/images/hackaburg.svg';
	import Button from '../components/Button.svelte';
</script>

<section class="stars dark:bg-gray-900 mt-32 px-10 mx-auto">
	<div class="grid lg:grid-cols-12">
		<div class="place-self-center lg:col-span-6 ml-mr-auto">
			<img src={hero} class="transition w-96" alt="mockup" />
		</div>

		<div class="lg:col-span-4 sm:place-self-center">
			<h1
				class="flex dark:text-white mb-4 md:text-5xl text-3xl font-extrabold dark:dark:text-white mt-8"
			>
				HACKABURG <p class="ml-4 text-palevioletred">2025</p>
				<br />
			</h1>
			<p class="mb-6 font-bold dark:text-white lg:mb-8 text-xl">
				<b class="text-palevioletred">22.05. - 24.05.2025</b> | Techbase Regensburg
			</p>
			<div class="mb-6 font-bold lg:mb-8 text-md">
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
				<div>
					<a href="https://discord.gg/NF3DA2xghD" target="_blank" rel="noreferrer">
						<Button label="Discord" type="discord" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
