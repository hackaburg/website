<script lang="ts">
	export let text: string;
	export const hourSize = 6.75;
</script>

<div class="HourLineContainer">{text}</div>

<style>
	.HourLineContainer {
		position: relative;
		top: -0.5rem;
		margin-top: 6.75rem;
	}
	.HourLineContainer:first-child {
		margin-top: 0.5rem;
	}
	.HourLineContainer:before {
		content: ' ';
		position: absolute;
		top: 0.5rem;
		left: 3rem;
		right: 0rem;
		display: block;
		border-bottom: 1px solid #eee;
	}
</style>
