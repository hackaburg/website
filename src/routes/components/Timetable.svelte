<script lang="ts">
	import HourLine from '../components/HourLine.svelte';
</script>

<div class="TimeTableContainer">
	<div class="HoursContainer">
		<HourLine text="08:00" />
		<HourLine text="10:00" />
		<HourLine text="12:00" />
		<HourLine text="14:00" />
		<HourLine text="16:00" />
		<HourLine text="18:00" />
		<HourLine text="20:00" />
		<HourLine text="22:00" />
	</div>
	<div class="DaysContainer">
		<slot />
	</div>
</div>

<style style="less">
	.TimeTableContainer {
		position: relative;
		height: 60rem;
	}
	.HoursContainer {
		position: absolute;
		top: 3rem;
		left: 0;
		width: 100%;
	}
	.DaysContainer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		padding-left: 3rem;
		white-space: nowrap;
	}

	@media screen and (max-width: 766px) {
		.HoursContainer {
			display: none;
		}
		.TimeTableContainer {
			height: auto;
			margin: 5rem 0;
		}
		.DaysContainer {
			position: static;
			padding: 0;
			white-space: initial;
			flex-direction: column;
		}
	}
</style>
