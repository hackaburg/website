<script>
	import BaseComponent from '../components/BaseComponent.svelte';

	const timeline = [
		{
			date: 'April 2nd, 2025',
			title: 'Registration opens',
			content:
				'At this day, you can fill your <b class="text-mediumpurple">profile form</b> (only takes 5min) and register for Hackaburg 2025. A <b class="text-mediumpurple">button</b> to our registration tool will appear on the website on that day, so you can not miss it.</b>'
		},
		{
			date: 'May 1st, 2025',
			title: 'We invite you!',
			content:
				'We will send out the first invitations to Hackaburg 2025. You have one week to confirm! <b class="text-mediumpurple">So, keep an eye on your inbox!</b>'
		},
		{
			date: 'May 7th, 2025',
			title: 'Confirm your spot!',
			content:
				'If you are invited, you will receive an email with a <b class="text-mediumpurple">confirmation link</b>. Please confirm your spot as soon as possible - <b class="text-mediumpurple">1 week</b>. If you are not invited, you will be put on the <b class="text-mediumpurple">waiting list</b>, but also about that you will be informed. Normally quite some people jump off and you will probably get a place. <b class="text-mediumpurple">So, keep an eye on your inbox!</b>'
		},
		{
			date: 'May 22, 2025',
			title: 'Hackaburg 2025',
			content: 'Everything went well and you are now part of Hackaburg 2025. '
		}
	];
</script>

<BaseComponent headline={'Timeline'} subHeadline={'What happens when and how'} id={'timeline'}>
	<div class="w-full max-w-3xl mx-auto">
		<div class="-my-6 sm:p-10">
			{#each timeline as event, i}
				<div class="relative pl-8 sm:pl-32 py-6 group">
					<div class="font-caveat font-medium text-2xl text-palevioletred mb-1 sm:mb-0 sm:ml-24">
						{event.title}
					</div>
					<div
						class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-mediumpurple after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
					>
						<time
							class="sm:absolute sm:-ml-20 w-32 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 pl-3 pr-3 h-6 mb-3 sm:mb-0 text-text-gray-300 bg-palevioletred rounded-full"
							>{event.date}</time
						>
					</div>
					<!-- Content -->
					<div class="text-gray-300 sm:ml-24">
						{@html event.content}
					</div>
				</div>
			{/each}
		</div>
	</div>
</BaseComponent>
