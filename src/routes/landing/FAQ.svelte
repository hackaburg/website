<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import Button from '../components/Button.svelte';

	const faq = [
		{
			question: 'What exactly is a hackathon?',
			answer: `A hackathon is an event in which software developers, designers and entrepreneurs come
				together and work on an idea for a few days. The event will be sponsored by companies, that
				means we have exciting prizes and planned key notes for you! There is also a career fair
				waiting for you to be checked out and of course free food and drinks.`
		},
		{
			question: 'How many people will be there?',
			answer: `We re planning with 120 attendees, 90% students and 10% professionals! Just apply here!`
		},
		{
			question: 'What can I build?',
			answer: `Anything your heart desires! Hardware, web, mobile, gaming; you name it, we'll support it.`
		},
		{
			question: 'How do I find a team?',
			answer: `A team has to be smaller than 5 people. On the first day, we will have a short pitch event.
        That means, you can come with an idea and tell everyone what you're looking for or you get inspired
        by other people. Maximum team size is 5 but of course you also can work in projects on smaller teams.
        The minimum team size is 3 people.`
		},
		{
			question: 'Overnight stay?',
			answer: `Sure! We'll provide beds at the event location.
        Please contact us if you are in need of a place to sleep, as we only have limited availability.`
		},
		{
			question: 'Do I have to be a programmer to attend?',
			answer: `<b>No!</b> We're looking for a diverse group of people who want to work on an idea for a few days.
        You're a designer? Help create the user interface. You're a business rockstar?
        Help create a business or customer plan. You want to try coding for the first time?
        We will have introduction workshops that will give you a first glance into programming.`
		},
		{
			question: 'What about hardware?',
			answer: `We'll have a hardware lounge with plenty of boards, tools, and gadgets for you to check out!`
		},
		{
			question: 'Headstart?',
			answer: `Only projects started at the hackathon will be eligible for prizes.`
		},
		{
			question: 'What should I bring to the event?',
			answer: `Your computer (laptop or desktop), any electronics want to use, chargers, toiletries and a
      sleeping bag or blanket and pillow if you're planning to stay over night and we hope you will!
      And of course, a valid ID.`
		},
		{
			question: 'Will there be travel reimbursements available?',
			answer: `Yes! If you're coming from outside the Oberpfalz area, it s possible to apply for reimbursement
      to cover some of your travel expenses. This also includes an overnight stay from Saturday to Sunday if
      you can't reasonably get home after the event. Depending on where you come from, the reimbursement can be up to:
      <ul class="m-2">
      <li>Bavaria (outside of the Oberpfalz area): 32€</li>
      <li>Germany: 50€</li>
      <li>Rest of Europe (SEPA area): 90€</li>
      </ul>
      <div><b>We only support transport by train and carpools of 2 people minimum.</b></div>
      Important note: We can only transfer money in the SEPA area! Thus, be ready to provide your travel receipts and bank address (IBAN).
      `
		}
	];
</script>

<BaseComponent
	headline={'Frequently asked questions'}
	subHeadline={'Questions and answers'}
	id={'faq'}
>
	<div class="w-full max-w-3xl mx-auto">
		<div class="-my-6 sm:p-10">
			{#each faq as { question, answer }, i}
				<div class="group my-2 mt-7">
					<div class="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
						{question}
					</div>

					<!-- Content -->
					<div class="text-gray-300">
						{@html answer}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="w-full flex justify-center">
		<a href="mailto:support@hackaburg.de">
			<Button label="Need support? Contact us!" />
		</a>
	</div>
</BaseComponent>
