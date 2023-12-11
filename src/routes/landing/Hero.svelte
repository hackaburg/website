<script>
	import hero from '$lib/images/construction.png';
</script>

<section class="bg-white dark:bg-gray-900 mt-8">
	<div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 overflow-hidden">
		<div class="mr-auto place-self-center lg:col-span-5 p-6">
			<h1
				class="max-w-2xl mb-4 text-5xl md:text-6xl font-extrabold tracking-tight leading-none dark:text-white mt-8 hazard-border p-4"
			>
				HACKABURG 2024 <br />
			</h1>

			<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-xl dark:text-gray-400">
				Thank you all for attending Hackaburg 2023.We're already planning for Hackaburg 2024 and
				hope to see you next year again.
			</p>
		</div>
		<div class="lg:mt-0 lg:col-span-7 lg:flex mx-auto p-8">
			<img src={hero} alt="mockup" style="width: 40rem;" />
		</div>
	</div>
</section>

<style>
	.hazard-border {
		border: 10px solid pink;
		border-image: repeating-linear-gradient(-55deg, #000, #000 20px, #ffb101 20px, #ffb101 40px) 10;
	}
</style>
