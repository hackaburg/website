<script lang="ts">
	export let hours: number;
	export let minutes: number;

	export const hourSize = 6.8;

	const getHeightFromDuration = (hours: number, minutes: number) =>
		`${((hours + minutes / 60) * hourSize) / 1.65}rem`;
</script>

<div class="DurationContainer" style="height:{getHeightFromDuration(hours, minutes)}" />

<style>
	@media screen and (max-width: 766px) {
		.DurationContainer {
			display: none;
		}
	}
</style>
