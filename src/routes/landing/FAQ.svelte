<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'FAQ'} subHeadline={'Questions and answers'} id={'faq'}>
	<div class="w-full flex">
		<a
			href="mailto:support@hackaburg.de"
			rel="noreferrer"
			class="m-auto mb-8 w-56 text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white"
			>Need support - contact us</a
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="p-4 text-left">
			<p class="question">What exactly is a hackathon?</p>
			<p class="answer">
				A hackathon is an event in which software developers, designers and entrepreneurs come
				together and work on an idea for a few days. The event will be sponsored by companies, that
				means we have exciting prizes and planned key notes for you! There is also a career fair
				waiting for you to be checked out and of course free food and drinks.
			</p>
			<p class="question">How many people will be there?</p>
			<p class="answer">
				We re planning with 120 attendees, 90% students and 10% professionals! Just apply here!
			</p>
			<p class="question">What can I build?</p>
			<p class="answer">
				Anything your heart desires! Hardware, web, mobile, gaming; you name it, we'll support it.
			</p>
			<p class="question">How do I find a team?</p>
			<p class="answer">
				A team has to be smaller than 5 people. On the first day, we will have a short pitch event.
				That means, you can come with an idea and tell everyone what you're looking for or you get
				inspired by other people. Maximum team size is 5 but of course you also can work in projects
				on smaller teams. The minimum team size is 3 people.
			</p>
			<p class="question">Overnight stay?</p>
			<p class="answer">Sure! We'll provide beds as required at a local hostel (maximum 30).</p>
		</div>
		<div class="p-4 text-left">
			<p class="question">Do I have to be a programmer to attend?</p>
			<p class="answer">
				<span class="font-bold">No!</span> We're looking for a diverse group of people who want to work
				on an idea for a few days. You're a designer? Help create the user interface. You're a business
				rockstar? Help create a business or customer plan. You want to try coding for the first time?
				We will have introduction workshops that will give you a first glance about coding.
			</p>
			<p class="question">What about hardware?</p>
			<p class="answer">
				We'll have a hardware lounge with plenty of boards, tools, and gadgets for you to check out!
			</p>
			<p class="question">Headstart?</p>
			<p class="answer">Only projects started at the hackathon will be eligible for prizes.</p>
			<p class="question">What should I bring to the event</p>
			<p class="answer">
				Your computer (laptop or desktop), any electronics want to use, chargers, toiletries and a
				sleeping bag or blanket and pillow if you're planning to stay over night and we hope you
				will! And of course, your student ID.
			</p>
			<p class="question">Will there be travel reimbursements available?</p>
			<p class="answer">
				Yes! If you're coming from outside the Oberpfalz, it s possible to apply for reimbursement
				to cover some of your travel expenses. This also includes an overnight stay from Saturday to
				Sunday if you can't reasonably get home after the event. Depending on where you come from,
				the reimbursement can be up to:
			</p>
			<ul class="list-disc pl-8 mb-4">
				<li>Bavaria (outside of the Oberpfalz region): 32€</li>
				<li>Germany: 50€</li>
				<li>Rest of Europe (SEPA area): 90€</li>
				<br />
			</ul>
			<b>* We only support transport by train and carpools of 2 people minimum</b>
			<br /><br />
			<p class="answer">
				Important note: We can only transfer money in the SEPA area! Thus, be ready to provide your
				travel receipts and bank address.
			</p>
		</div>
	</div>
</BaseComponent>

<style scoped>
	.question {
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.answer {
		font-weight: 100;
		margin-bottom: 2rem;
	}
</style>
