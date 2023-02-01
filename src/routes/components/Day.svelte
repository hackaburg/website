<script lang="ts">
	export let headline: string;
</script>

<div class="isolate overflow-hidden bg-white">
	<p class="mt-1 text-lg text-gray-500 mb-6 text-center">{headline}</p>

	<div class="flex flex-auto flex-col overflow-auto">
		<div class="flex w-full flex-auto">
			<div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
			<div class="grid flex-auto grid-cols-1 grid-rows-1">
				<!-- Horizontal lines -->
				<div
					class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
					style="grid-template-rows:  repeat(31, minmax(1rem, 1fr))"
				>
					<div class="row-end-1 h-7" />

					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							8AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							9AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							10AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							11AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							12PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							1PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							2PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							3PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							4PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							5PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							6PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							7PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							8PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							9PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							10PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							11PM
						</div>
					</div>
					<div />
				</div>

				<!-- Events -->
				<ol
					class="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
					style="grid-template-rows: 1.75rem repeat(204, minmax(0, 2fr)) auto"
				>
					<slot />
				</ol>
			</div>
		</div>
	</div>
</div>
