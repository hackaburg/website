<script>
	import hero from '$lib/images/header.svg';
</script>

<section class="bg-white dark:bg-gray-900 mt-8">
	<div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-5">
			<h1
				class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none  dark:text-white mt-8"
			>
				HACKABURG <br />Goes
				<span class="hackaburg">Green</span>
			</h1>

			<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-2xl dark:text-gray-400">
				TechBase Regensburg | 25.5 - 27.5.2023
			</p>
			<a
				href="https://ratisbona-coding.org/"
				target="_blank"
				class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white w-full"
				>About Ratisbona Coding e.V.</a
			>
		</div>
		<div class="lg:mt-0 lg:col-span-7 lg:flex mx-auto p-8">
			<img src={hero} alt="mockup" style="width: 40rem;" />
		</div>
	</div>
</section>
