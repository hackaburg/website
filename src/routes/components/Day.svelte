<script lang="ts">
	export let date: string;
</script>

<div class="DayContainer">
	<div class="Date">
		{date}
	</div>
	<slot />
</div>

<style>
	.DayContainer {
		flex-grow: 1;
		margin-left: 2rem;
		vertical-align: top;
	}
	.Date {
		margin: 0.64rem 0;
		font-size: 1.5rem;
	}

	@media screen and (max-width: 766px) {
		.Date {
			margin: 0;
		}
	}
</style>
