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
					style="grid-template-rows: repeat(48, minmax(1rem, 1fr))"
				>
					<div class="row-end-1 h-7" />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							12AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							1AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							2AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							3AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							4AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							5AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							6AM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							7AM
						</div>
					</div>
					<div />
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
					style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto"
				>
					<li class="relative mt-px flex" style="grid-row: 74 / span 12">
						<a
							href="#"
							class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
						>
							<p class="order-1 font-semibold text-blue-700">Breakfast</p>
							<p class="text-blue-500 group-hover:text-blue-700">
								<time datetime="2022-01-22T06:00">6:00 AM</time>
							</p>
						</a>
					</li>
					<li class="relative mt-px flex" style="grid-row: 92 / span 30">
						<a
							href="#"
							class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
						>
							<p class="order-1 font-semibold text-pink-700">Flight to Paris</p>
							<p class="order-1 text-pink-500 group-hover:text-pink-700">
								John F. Kennedy International Airport
							</p>
							<p class="text-pink-500 group-hover:text-pink-700">
								<time datetime="2022-01-22T07:30">7:30 AM</time>
							</p>
						</a>
					</li>
					<li class="relative mt-px flex" style="grid-row: 134 / span 18">
						<a
							href="#"
							class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
						>
							<p class="order-1 font-semibold text-indigo-700">Sightseeing</p>
							<p class="order-1 text-indigo-500 group-hover:text-indigo-700">Eiffel Tower</p>
							<p class="text-indigo-500 group-hover:text-indigo-700">
								<time datetime="2022-01-22T11:00">11:00 AM</time>
							</p>
						</a>
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>
