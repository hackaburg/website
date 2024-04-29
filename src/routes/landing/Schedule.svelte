<script lang="ts">
	import BaseComponent from '../components/BaseComponent.svelte';
	import Timetable from '../components/Timetable.svelte';
	import Day from '../components/Day.svelte';
	import Spacer from '../components/Spacer.svelte';
	import Event from '../components/Event.svelte';
</script>

<BaseComponent headline={'Schedule'} subHeadline={'When and what?'} id={'schedule'}>
	<Timetable>
		<Day date="Thu, 23.5.2024">
			<Spacer hours={6} minutes={0} />
			<Event hours={1} minutes={0} time="14:00 - 15:00" title="Registration" food />
			<Event hours={1} minutes={45} time="15:15 - 17:00" title="Opening Ceremony">
				<Event hours={0} minutes={20} time="16:00 - 16:20" title="Track Presentation" special />
				<Event
					hours={0}
					minutes={20}
					time="16:20 - 16:40"
					title="Sponsor Challenge Pitches"
					special
				/>
				<Event hours={0} minutes={25} time="16:40 - 17:00" title="Idea Pitches" special />
			</Event>
			<Event hours={1} minutes={0} time="18:00 - 19:00" title="Find your team" special />
			<Event hours={1} minutes={0} time="18:00 - 19:00" title="Dinner" food />
			<Event hours={3} minutes={45} time="19:00 - 24:00" title="Hacking begins">
				<Spacer hours={2} minutes={45} />
				<Event hours={0} minutes={30} time="01:30 - 02:00" title="Playtime" special />
			</Event>
		</Day>
		<Day date="Fri, 24.5.2024">
			<Event hours={15} minutes={20} time="00:00 - 24:00" title="Hacking">
				<Spacer hours={0} minutes={35} />
				<Event hours={1} minutes={0} time="09:00 - 10:00" title="Breakfast" food />
				<Event
					hours={1}
					minutes={0}
					time="10:00 - 11:00"
					title="Workshop (0): Will follow soon"
					special
				/>
				<Spacer hours={0} minutes={30} />
				<Event
					hours={1}
					minutes={0}
					time="11:30 - 12:30"
					title="Workshop (1): Will follow soon"
					special
				/>
				<Event hours={1} minutes={0} time="12:30 - 13:30" title="Lunch" food />

				<Spacer hours={0} minutes={30} />
				<Event
					hours={1}
					minutes={0}
					time="14:00 - 15:00"
					title="Workshop (2): Will follow soon"
					special
				/>

				<Spacer hours={2} minutes={0} />

				<Spacer hours={1} minutes={0} />
				<Event hours={1} minutes={0} time="18:00 - 19:00" title="Dinner" food />

				<Event
					hours={1}
					minutes={0}
					time="19:00 - 20:00"
					title="Workshop (3): Will follow soon"
					special
				/>

				<Spacer hours={2} minutes={45} />
				<Event hours={0} minutes={30} time="01:30 - 02:00" title="Playtime" special />
			</Event>
		</Day>
		<Day date="Sat, 26.5.2024">
			<Event hours={4} minutes={30} time="00:00 - 12:30" title="Hacking">
				<Spacer hours={0} minutes={35} />
				<Event hours={1} minutes={0} time="09:00 - 10:00" title="Breakfast" food />

				<Spacer hours={1} minutes={30} />

				<Event hours={1} minutes={0} time="11:30 - 12:30" title="Project Registration" special>
					Register your project by 11:30, final submission by 12:30.
				</Event>
			</Event>

			<Event hours={1} minutes={0} time="12:30 - 13:30" title="Lunch" food />

			<Event
				hours={2}
				minutes={0}
				time="13:00 - 15:00"
				title="Pre-Judging and Finalist Selection"
				special
			/>
			<Event hours={0} minutes={30} time="15:00 - 15:30" title="Finalist Preparation" special />

			<Event hours={1} minutes={0} time="15:30 - 16:30" title="Final Pitches" special />
			<Event hours={0} minutes={30} time="16:30 - 17:00" title="Jury selects winners" special />
			<Event hours={0} minutes={30} time="17:00 - 17:30" title="Award ceremony" special />

			<Event hours={5} minutes={20} time="17:30 - open end" title="Afterparty" food />
		</Day>
	</Timetable>
	<!--div class="w-full flex mt-16 md:mt-32 flex-col md:flex-row">
		<a
			href="https://drive.google.com/file/d/123QS2ZPEOqKPbiQxZfja5EeVTJFqd4Vt/view?usp=sharing"
			target="_blank"
			rel="noreferrer"
			class="m-auto mb-8 w-48 text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white"
			>Download as .ics file</a
		>
		<a
			href="https://calendar.google.com/calendar/u/0?cid=Y183MDVmNzFmZTQxMDA1ZmYxZmRkY2NkN2VkNjMwMjE2ZGQ3YzYzZDczYzljOGU3Yzc3ZDQ4OWNkMDZmMGFkYTU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
			target="_blank"
			rel="noreferrer"
			class="m-auto mb-8 w-68 text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:text-white"
			>Subscribe to our event calendar</a
		>
	</div-->
</BaseComponent>
