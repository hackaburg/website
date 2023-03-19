<script lang="ts">
	export let hours: number;
	export let minutes: number;
	const hourSize = 6.8;
	let screenSize: number;

	const getHeightFromDuration = (hours: number, minutes: number) =>
		`${((hours + minutes / 60) * hourSize) / 1.65}rem`;
</script>

<svelte:window bind:innerWidth={screenSize} />
{#if screenSize > 766}
	<div class="DurationContainer" style="height:{getHeightFromDuration(hours, minutes)}" />
{/if}
