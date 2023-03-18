<script lang="ts">
	import BaseComponent from '../components/BaseComponent.svelte';
	import Timetable from '../components/Timetable.svelte';
	import Day from '../components/Day.svelte';
	import Spacer from '../components/Spacer.svelte';
	import Event from '../components/Event.svelte';
</script>

<BaseComponent headline={'Schedule'} subHeadline={'When and what?'} id={'schedule'}>
	<Timetable>
		<Day date="Thu, 25.5.2023">
			<Spacer hours={8} minutes={0} />
			<Event hours={0} minutes={45} time="16:00 - 16:45" title="Registration" food />
			<Event hours={1} minutes={45} time="16:45 - 18:30" title="Opening Ceremony">
				<Event hours={0} minutes={25} time="17:30 - 17:50" title="Track Presentation" special />
				<Event hours={0} minutes={25} time="17:50 - 18:10" title="Idea Pitches" special />
				<Event hours={0} minutes={25} time="18:10 - 18:30" title="Sponsor Pitches" special />
			</Event>
			<Event hours={0} minutes={45} time="18:30 - 19:15" title="Dinner" food />
			<Event hours={3} minutes={45} time="19:15 - 24:00" title="Hacking">
				<Spacer hours={2} minutes={50} />
				<Event hours={0} minutes={30} time="01:30 - 02:00" title="Playtime" special />
			</Event>
		</Day>
		<Day date="Fri, 26.5.2023">
			<Event hours={15} minutes={0} time="00:00 - 24:00" title="Hacking">
				<Spacer hours={0} minutes={35} />
				<Event hours={1} minutes={0} time="09:00 - 10:00" title="Breakfast" food />

				<Spacer hours={1} minutes={0} />
				<Event hours={1} minutes={0} time="11:00 - 12:00" title="Workshop: Slot 1" special />

				<Spacer hours={1} minutes={0} />
				<Event hours={1} minutes={0} time="13:00 - 14:00" title="Lunch" food />

				<Spacer hours={0} minutes={0} />
				<Event hours={1} minutes={0} time="14:00 - 15:00" title="Workshop: Slot 2" special />

				<Spacer hours={1} minutes={0} />
				<Event hours={1} minutes={0} time="16:00 - 17:00" title="Workshop: Slot 3" special />

				<Spacer hours={1} minutes={0} />
				<Event hours={1} minutes={0} time="18:00 - 19:00" title="Dinner" food />

				<Event hours={1} minutes={0} time="19:00 - 20:00" title="Workshop: Slot 4" special />

				<Spacer hours={2} minutes={30} />
				<Event hours={0} minutes={30} time="01:30 - 02:00" title="Playtime" special />
			</Event>
		</Day>
		<Day date="Sat, 27.5.2023">
			<Event hours={5} minutes={0} time="00:00 - 13:00" title="Hacking">
				<Spacer hours={0} minutes={35} />
				<Event hours={1} minutes={0} time="09:00 - 10:00" title="Breakfast" food />

				<Spacer hours={0} minutes={30} />

				<Event hours={1} minutes={30} time="11:30 - 13:00" title="Project Registration" special>
					Register your project by 11:30, final submission by 13:00.
				</Event>
			</Event>

			<Event hours={1} minutes={0} time="13:00 - 14:00" title="Lunch" food />

			<Event
				hours={1}
				minutes={0}
				time="14:00 - 15:00"
				title="Pre-Judging and Finalist Selection"
				special
			/>
			<Event hours={1} minutes={0} time="15:00 - 16:00" title="Finalist Preparation" special />

			<Event hours={1} minutes={45} time="16:00 - 17:30" title="Final Pitches" special />

			<Event hours={4} minutes={15} time="17:30 - open end" title="Afterparty" food />
		</Day>
	</Timetable>
	<div class="w-full flex mt-32">
		<a
			href="https://drive.google.com/file/d/1jqK-MlSxvSRO8FyQU7zJF6TUjpwYBj6l/view?usp=sharing"
			target="_blank"
			rel="noreferrer"
			class="m-auto mb-8 w-48 text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white"
			>Download as .ics file</a
		>
	</div>
</BaseComponent>
