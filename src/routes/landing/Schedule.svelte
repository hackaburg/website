<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	// import Day from '../components/Day.svelte';
	// import Event from '../components/Event.svelte';

	// import Calendar from '@event-calendar/core';
	// import TimeGrid from '@event-calendar/time-grid';

	/*
	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
		date: '2023-05-25',
		duration: { days: 3 },
		allDaySlot: false,
		slotMinTime: '07:00:00',

		events: [
			// your list of events
			{
				id: 'registration',
				title: 'Registration',
				start: '2023-05-25 15:00:00',
				end: '2023-05-25 16:00:00',
				color: '#82bd53'
			}
		]
	};
	*/
</script>

<BaseComponent headline={'Schedule'} subHeadline={'When and what?'} id={'schedule'}>
	<!--div class="grid grid-cols-1 md:grid-cols-3">
		<Day headline={'Do. 25.6.2023'}>
			<Event headline="Breakfast" duration={60} start={[11, 0]} color="hackaburg" />
			<Event headline="Breakfast" duration={60} start={[12, 0]} color="hackaburg" />
		</Day>
		<Day headline={'Fr. 25.6.2023'}>
			<Event headline="Breakfast" duration={120} start={[15, 0]} color="hackaburg" />
		</Day>
		<Day headline={'Sa. 25.6.2023'} />
	</div-->
	<!-- <Calendar {plugins} {options} /> -->
</BaseComponent>

<!--
<style>
	.ec-event {
		padding-left: 0.5rem !important;
	}
</style>
-->
