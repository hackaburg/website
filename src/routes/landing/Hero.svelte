<script>
	import hero from '$lib/images/logo2024.png';
	import Button from '../components/Button.svelte';
</script>

<section class="dark:bg-gray-900 mt-8">
	<div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 overflow-hidden">
		<div class="mr-auto place-self-center lg:col-span-5 p-6">
			<h1
				class="max-w-2xl text-white mb-4 text-5xl md:text-6xl font-extrabold tracking-tight leading-none dark:text-white mt-8"
			>
				HACKABURG 2024 <br />
			</h1>

			<p class="max-w-2xl mb-6 font-light text-white lg:mb-8 text-xl dark:text-gray-400">
				We are currently working on the next edition of Hackaburg. Stay tuned for more information.
			</p>
			<p class="max-w-2xl mb-6 font-bold text-white lg:mb-8 text-xl dark:text-gray-400">
				<b class="text-primary">23.5. - 25.5.2024</b> | Techbase Regensburg
			</p>
			<div class="flex space-x-4 -mt-10">
				<div>
					<a href="https://26490796.sibforms.com/serve/MUIFAPx4aKGKuMbU3UZxk_ODAxapOpxY9oApe-LFK48oC2HcUpuUDG5RfLrplRnzmlE2fhnxFsrLWAO1LoVerg8hegpCyxQDQ85Ac45SzhCZXZlT8m5RRT7wDfIbcv9GgTCPGWiw6QSSK2qQR2n6ST8ezKWg-QTn0tCj8LRENn-vhJpHafi3096LcWLZQXDIx_IzJZaOLL7Chfdk" target="_blank" rel="noreferrer">
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

		<div class="lg:mt-0 lg:col-span-7 lg:flex mx-auto p-8">
			<img src={hero} alt="mockup" style="width: 40rem;" />
		</div>
	</div>
</section>
