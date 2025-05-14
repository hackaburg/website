<script lang="ts">
	export let label: string;
	export let type = 'default';
	import discordIcon from '$lib/images/discord.svg';
</script>

<div class="relative group">
	<button
		class="flex items-center gap-1 justify-center glow relative bg-tungsten m-auto w-full mt-8 border-2 border-white rounded-3xl px-3 py-2 dark:text-black hover:cursor-pointer hover:bg-deadlydepth"
	>
		{label}
		{#if type === 'discord'}
			<img class="h-5" src={discordIcon} alt="" />
		{/if}
	</button>
</div>
