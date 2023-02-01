<script lang="ts">
	import type { StartType } from '../models/enum';

	export let headline: string;
	export let subHeadline: any = undefined;
	export let color: string;
	export let duration: number;
	export let start: [number, number];
	export let startType: StartType;
</script>

<li class="relative mt-px flex" style="grid-row: {start[0] * 12 - 79} / span  {duration / 4}">
	<div
		class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
	>
		<div class="{color} group-hover:{color} flex">
			<time datetime="" class="font-bold"
				>{start[0]}:{start[1] === 0 ? '00' : start[1]} {startType}</time
			>
			<p class="ml-4">{headline}</p>
		</div>
		{#if subHeadline}
			<p class="order-1 {color} group-hover:{color}">{subHeadline}</p>
		{/if}
	</div>
</li>
