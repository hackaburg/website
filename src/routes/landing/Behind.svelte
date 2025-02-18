<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import ratisbonacoding from '$lib/images/ratisbonacoding.png';
	let glowVisible = false;
</script>

<BaseComponent
	headline={'Behind Hackaburg'}
	subHeadline={'We are Ratisbona Coding - we make Hackaburg'}
	id={'behind'}
>
	<div class="w-full max-w-3xl mx-auto">
		<div class="text-center mb-24 dark:text-white justify-center">
			<p>
				We are ratisbona-coding e.V., a non-profit association from Regensburg. We were founded in
				2018 from the student organization team of the Hackaburg Hackathon. As a young association,
				we organize other IT events in the Regensburg region in addition to Hackaburg.
			</p>
			<div>
				<a href="https://ratisbona-coding.org/" target="_blank" rel="noreferrer">
					<div class="relative group">
						{#if glowVisible}
							<div
								class="absolute w-52 h-10 mt-4 transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 -inset-0.5 round-2xl bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-75 group-hover:opacity-100"
							/>
						{/if}

						<button
							on:focus={() => {
								return;
							}}
							on:mouseover={() => {
								glowVisible = true;
							}}
							on:mouseleave={() => {
								glowVisible = false;
							}}
							class="relative bg-white m-auto w-52 mt-8 border-2  rounded-3xl px-3 py-2 dark:text-white hover:cursor-pointer hover:bg-primary hover:text-white"
						>
							More about us
						</button>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="relative group">
		<div
			class="absolute -inset-0.5 -mt-1 -mb-1 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-75 group-hover:opacity-100"
		/>
		<div class="relative">
			<img class="mt-8 rounded-2xl w-full" alt="ratisbona coding" src={ratisbonacoding} />
		</div>
	</div>
</BaseComponent>
