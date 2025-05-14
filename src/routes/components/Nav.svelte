<script>
	import NavLogo from './NavLogo.svelte';

	let menuOpen = true;

	function toggle() {
		menuOpen = !menuOpen;
	}
</script>

<nav
	class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<NavLogo />

		<div>
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded="false"
				on:click={toggle}
			>
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div class={menuOpen ? ' menu hidden' : 'menu'}>
			<ul
				class="flex flex-col p-4 mt-4 bg-white text-deadlydepth md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
			>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/" class="nav-element-base" aria-current="page">Home</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#schedule" class="nav-element-base">Schedule</a>
				</li>
				<!--
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#timeline" class="nav-element-base">Timeline</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#workshops" class="nav-element-base">Workshops</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#challenges" class="nav-element-base">Challenges</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#hardware" class="nav-element-base">Hardware</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#supporters" class="nav-element-base">Supporters</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#team" class="nav-element-base">Team</a>
				</li>
			-->
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#behind" class="nav-element-base">Behind Hackaburg</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#about" class="nav-element-base">Looking Back</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#venue" class="nav-element-base">Venue</a>
				</li>
				<li class="mt-2 hover:text-palevioletred">
					<a href="/#faq" class="nav-element-base">FAQ</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	.menu {
		@apply items-center justify-between w-full md:flex md:w-auto md:order-1;
	}
</style>
