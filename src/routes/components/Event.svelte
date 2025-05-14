<script lang="ts">
	export let hours: number;
	export let minutes: number;
	export let food: boolean | undefined = undefined;
	// export let hidden: boolean | undefined = undefined;
	export let special: boolean | undefined = undefined;
	export let time: string;
	export let title: string;

	export const hourSize = 6.75;
	let screenSize: number;

	const getHeightFromDuration = (hours: number, minutes: number) =>
		`${((hours + minutes / 60) * hourSize) / 1.65}rem`;
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="EventContainer {food ? 'stripped' : ''} {special ? 'special' : ''}">
	{#if screenSize > 766}
		<div class="DurationContainer" style="height:{getHeightFromDuration(hours, minutes)}" />
	{/if}

	<div class="ContentContainer">
		<div class="TimeContainer">{time}</div>
		<div class="TitleContainer">{title}</div>
		<div><slot /></div>
	</div>
</div>

<style>
	.EventContainer {
		display: block;
		position: relative;

		color: white;

		background-color: #261f54;
		border-left: 3px solid #ca70a2;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
		border-radius: 2px;

		white-space: initial;
	}
	.ContentContainer {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
	}
	.TimeContainer {
		display: inline-block;
		opacity: 0.75;
		font-weight: bold;
		margin-right: 0.5rem;
	}
	.TitleContainer {
		display: inline-block;
	}

	.stripped {
		background: repeating-linear-gradient(-45deg, #eee, #eee 3px, #f7f7f7 3px, #f7f7f7 10px);
		color: black;
	}

	.special {
		color: white;
		background-color: #ca70a2;
	}

	@media screen and (max-width: 766px) {
		.ContentContainer {
			position: initial;
			margin-bottom: 0.5rem;
		}
	}
</style>
