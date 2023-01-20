<script>
	import BaseComponent from '../components/BaseComponent.svelte';

  const timeline = [
    {
      date: 'March 15, 2024',
      title: 'Registration opens',
      content: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.'
    },
    {
      date: 'April 31, 2024',
      title: 'Registrations closes',
      content: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.'
    },
    {
      date: 'May 1, 2024',
      title: 'We invite you!',
      content: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.'
    },
    {
      date: 'March 15, 2024',
      title: 'Confirm your spot!',
      content: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.'
    },
    {
      date: 'May 23, 2024',
      title: 'Hackaburg 2024',
      content: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.'
    }
  ];
</script>

<BaseComponent headline={'Timeline'} subHeadline={'What happens when and how'} id={'timeline'}>
	<div class="w-full max-w-3xl mx-auto">
		<div class="-my-6">
			{#each timeline as event, i}
			<div class="relative pl-8 sm:pl-32 py-6 group">
				<div class="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0 sm:ml-24">{event.title}</div>
				<div
					class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
				>
					<time
						class="sm:absolute sm:-ml-16 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 pl-3 pr-3 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
						>{event.date}</time
					>
				</div>
				<!-- Content -->
				<div class="text-slate-500 sm:ml-24">
				{event.content}
				</div>
			</div>
      {/each}

		</div>
	</div>
</BaseComponent>
