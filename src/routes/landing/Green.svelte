<script>
	import timeline from '$lib/images/timeline.svg';
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Green'} subHeadline={'What is our goal this year?'} id={'green'}>
	<div class="w-full md:w-1/2 flex flex-wrap">
		<div class="w-1/2 p-4">
			<img src="https://via.placeholder.com/150" alt="your-image-description" class="w-full" />
		</div>
		<div class="w-1/2 p-4 text-center">
			<p class="text-base mb-8 text-left">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed eos vero ipsa maiores
				aliquid consectetur voluptatibus doloremque placeat, ut nulla, id aperiam rem enim vel quam
				sequi. Tempora, neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam magnam
				aliquid pariatur dolore velit fugit voluptas et eius! Accusantium expedita nobis,
				perspiciatis nihil eum eveniet velit tempora atque necessitatibus voluptatum?
			</p>
			<a
				href="#"
				class="text-md border-2 hackaburg border rounded-3xl px-3 py-2 cursor-pointer hover:bg-black hover:text-gray-200 w-full"
				>Learn more about our concept</a
			>
		</div>
	</div>
</BaseComponent>

<style scoped>
	.border {
		--tw-border-opacity: 1;
		border-color: #82bd53;
	}

	img {
		border-radius: 0.5rem;
	}
</style>
