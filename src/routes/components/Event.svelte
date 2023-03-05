<script lang="ts">
	// import type { StartType } from '../models/enum';

	export let headline: string;
	export let subHeadline: string | undefined = undefined;
	export let color: string;
	export let duration: number;
	export let start: [number, number];

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function mapHourToGrid(hour: number, min: number): number {
		let returnValue = 0;
		if (hour === 8) {
			returnValue = 2;
		} else {
			returnValue = 12 * (hour - 8);
		}

		return returnValue;
	}
</script>

<li
	class="relative flex"
	style="grid-row: {mapHourToGrid(start[0], start[1])} / span  {duration / 5}"
>
	<div
		class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
	>
		<div class="{color} group-hover:{color} flex">
			<time datetime="" class="font-bold">{start[0]}:{start[1] === 0 ? '00' : start[1]}</time>
			<p class="ml-4">{headline}</p>
		</div>
		{#if subHeadline}
			<p class="order-1 {color} group-hover:{color}">{subHeadline}</p>
		{/if}
	</div>
</li>
