<script>
	import logo from '$lib/images/rb_logo.svg';
</script>

<footer class=" p-4 sm:p-6 sm:mt-16">
	<div class="md:flex md:justify-between mt-8">
		<div class="mb-12 md:mb-0 sm:ml-20 md:w-1/2 sm:gap-6 sm:grid-cols-1 lg:grid-cols-1">
			<a href="/" class="flex items-center">
				<img src={logo} class="mr-3 h-8 invert" alt="ratisbona coding e.V. Logo" />
			</a>
			<p class="max-w-xs mt-4 text-sm dark:text-white">
				Nice of you to stop by our website. You can find more about us on our social media channels.
			</p>

			<p class="w-1/2 text-sm mt-8 font-normal dark:text-white">Made with 💚 in Regensburg</p>
			<div class="mt-4 flex space-x-2 dark:text-white">
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a href="https://github.com/ratisbona-coding" target="_blank">
					<!-- Github -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="social-icon"
						><path
							fill="currentColor"
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						/></svg
					>
				</a>

				<!-- Instagram -->
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a href="https://www.instagram.com/ratisbonacoding" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="social-icon"
						><path
							fill="currentColor"
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						/></svg
					></a
				>

				<!-- Linkedin -->
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a href="https://www.linkedin.com/company/ratisbona-coding" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="social-icon"
						><path
							fill="currentColor"
							d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
						/></svg
					></a
				>

				<!-- Facebook -->
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a href="https://www.facebook.com/hackaburg" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="social-icon"
						><path
							fill="currentColor"
							d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
						/></svg
					></a
				>

				<!-- Youtube -->
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a href="https://www.youtube.com/channel/UC-92ptcdIrZH5HOQ9fRX1Tw" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="social-icon"
						><path
							fill="currentColor"
							d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
						/></svg
					>
				</a>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:ml-8 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 sm:ml-12 text-md font-bold dark:text-white uppercase dark:dark:text-white">
					Verein
				</h2>
				<ul class="sm:ml-12 dark:text-white dark:text-gray-400">
					<li class="mb-4">
						<a href="/dataprotection" class="hover:underline">Data Protection</a>
					</li>
					<li class="mb-4">
						<a href="/imprint" class="hover:underline">Imprint</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style scoped lang="postcss">
	.social-icon {
		@apply w-5 h-5 hover:text-gray-400 hover:cursor-pointer;
	}
</style>
