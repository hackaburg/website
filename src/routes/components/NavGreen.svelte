<script>
	import back from '$lib/images/back.svg';

	let menuOpen = true;

	function toggle() {
		menuOpen = !menuOpen;
	}
</script>

<nav
	class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<h1 class="text-xl font-extrabold tracking-tight dark:text-white">
			HACKA
			<span class="-ml-1 hackaburg">BURG</span>
		</h1>
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
				<li>
					<a
						href="/"
						class="text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2  cursor-pointer hover:bg-hackaburg-900 hover:text-white w-40 flex -mt-2 "
					>
						<img src={back} class="w-5 hover:text-white" alt="back" />
						<p class="ml-8">Go Back</p></a
					>
				</li>
				<li>
					<a href="/green#kpis" class="nav-element-base" aria-current="page">Sustainability KPIs</a>
				</li>
				<li>
					<a href="/green#actions" class="nav-element-base">Fields of action</a>
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
