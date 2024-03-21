<script>
	import hero from '$lib/images/logo2024.png';
	import Button from '../components/Button.svelte';
</script>

<section class="dark:bg-gray-900 mt-8">
	<div class="grid lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="place-self-center md:col-span-5 p-6">
			<h1 class="flex text-white mb-4 md:text-5xl text-3xl font-extrabold dark:text-white mt-8">
				HACKABURG <p class="ml-4 text-primary">2024</p>
				<br />
			</h1>

			<p class="mb-6 font-light text-white lg:mb-8 text-xl dark:text-gray-400">
				The registration is NOW open! <br />Let's connect the unconnected.
			</p>
			<p class="mb-6 font-bold text-white lg:mb-8 text-xl dark:text-gray-400">
				<b class="text-primary">23.5. - 25.5.2024</b> | Techbase Regensburg
			</p>
			<div>
				<a href="https://hackaburg.de/apply/" target="_blank" rel="noreferrer">
					<Button label="APPLY NOW" />
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

		<div class="mt:mt-0 md:col-span-7 lg:flex mx-auto sm:p-8">
			<img src={hero} class="hover:saturate-400 heroImg" alt="mockup" />
		</div>
	</div>
</section>

<style>
	.hover\:saturate-400:hover {
		filter: blur(5px);
		filter: brightness(2);
		backdrop-filter: blur(15px) saturate(3);
	}
	.heroImg {
		width: 40rem;
	}
	/**mobile width 80rem*/
	@media (min-width: 320px) {
		.heroImg {
			width: 80rem;
		}
	}
</style>
