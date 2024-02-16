<script lang="ts">
	export let label: string;
</script>

<div class="relative group">
	<button
		class="glow relative bg-black m-auto w-full mt-8 border-2 border-white rounded-3xl px-3 py-2 text-white hover:cursor-pointer hover:bg-primary hover:text-black"
	>
		{label}
	</button>
</div>
