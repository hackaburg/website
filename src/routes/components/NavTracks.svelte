<script>
	import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';
	import NavLogo from './NavLogo.svelte';

	let menuOpen = true;

	function toggle() {
		menuOpen = !menuOpen;
	}

	export let size = '1.5rem'; // string | number
	export let width = size; // string | number
	export let height = size; // string | number
	export let color = 'currentColor'; // string
	export let viewBox = '0 0 24 24'; // string
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
				class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-gray-900 dark:border-gray-700"
			>
				<li class="hover:text-navHighlight-900">
					<a
						href="/"
						class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2  cursor-pointer hover:bg-hackaburg-900 hover:text-white w-40 flex -mt-2 "
					>
						<ChevronLeft {color} {size} {width} {height} {viewBox} />

						<p class="ml-6" style="margin-top: 2px">Go Back</p></a
					>
				</li>
				<li class="mt-2 hover:text-navHighlight-900">
					<a href="/tracks#mobility" class="nav-element-base" aria-current="page"
						>Sustainable Mobility
					</a>
				</li>
				<li class="mt-2 hover:text-navHighlight-900">
					<a href="/tracks#local" class="nav-element-base" aria-current="page"
						>Think global, hack local
					</a>
				</li>
				<li class="mt-2 hover:text-navHighlight-900">
					<a href="/tracks#footprint" class="nav-element-base" aria-current="page"
						>Reduce the Footprint
					</a>
				</li>
				<li class="mt-2 hover:text-navHighlight-900">
					<a href="/tracks#social" class="nav-element-base" aria-current="page">Social</a>
				</li>
				<li class="mt-2 hover:text-navHighlight-900">
					<a href="/tracks#free" class="nav-element-base" aria-current="page">Free Track</a>
				</li>
				<li class="mt-2 hover:text-navHighlight-900">
					<a href="/tracks#challenges" class="nav-element-base" aria-current="page">Challenges</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.menu {
		@apply items-center justify-between w-full md:flex md:w-auto md:order-1;
	}
</style>
