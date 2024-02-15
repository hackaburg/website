<script lang="ts">
	export let label: string;
  let glowVisible = false;
</script>

<div class="relative group">
  {#if glowVisible}
    <div class="absolute -inset-0.5 mt-7 round-2xl bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-75 group-hover:opacity-100" />
  {/if}

	<button
    on:mouseover={() => {glowVisible = true}}
    on:mouseleave={() => {glowVisible = false}}
		class="relative bg-black m-auto w-52 mt-8 border-2 border-white rounded-3xl px-3 py-2 text-white hover:cursor-pointer  hover:bg-primary hover:text-black"
	>
		{label}
	</button>
</div>
