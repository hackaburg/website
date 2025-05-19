<script lang="ts">
	import BaseComponent from '../components/BaseComponent.svelte';
	import Timetable from '../components/Timetable.svelte';
	import Day from '../components/Day.svelte';
	import Spacer from '../components/Spacer.svelte';
	import Event from '../components/Event.svelte';
</script>

<BaseComponent headline={'Schedule'} subHeadline={''} id={'schedule'}>
	<Timetable>
		<Day date="Thu, 22.5.2025">
			<Spacer hours={5} minutes={30} />
			<Event hours={1} minutes={30} time="13:30 - 15:00" title="Registration" food />
			<Spacer hours={0} minutes={15} />
			<Event hours={2} minutes={30} time="15:15 - 17:45" title="Opening Ceremony">
				<Event hours={0} minutes={25} time="15:15 - 16:00" title="Getting Started" special />
				<Event hours={0} minutes={25} time="16:00 - 16:15" title="Theme Announcement" special />
				<Event hours={0} minutes={25} time="16:15 - 16:45" title="Partner & Sponsors" special />
				<Event
					hours={0}
					minutes={45}
					time="17:00 - 17:45"
					title="Idea Pitches & Group Building"
					special
				/>
			</Event>
			<Spacer hours={0} minutes={15} />
			<Event hours={1} minutes={0} time="18:00 - 19:00" title="Dinner" food />
			<Event hours={2} minutes={0} time="19:00 - 24:00" title="Hacking">
				<Spacer hours={1} minutes={25} />
				<Event hours={0} minutes={30} time="01:30 - 02:00" title="Playtime" special />
			</Event>
		</Day>
		<Day date="Fri, 23.5.2025">
			<Event hours={13} minutes={0} time="00:00 - 24:00" title="Hacking">
				<Spacer hours={0} minutes={40} />
				<Event hours={1} minutes={0} time="09:00 - 10:00" title="Breakfast" food />

				<Spacer hours={2} minutes={30} />
				<Event hours={1} minutes={0} time="12:30 - 13:30" title="Lunch" food />

				<Spacer hours={1} minutes={30} />
				<Event
					hours={1}
					minutes={0}
					time="15:00 - 16:00"
					title="Continental: Building Agentic Apps for Mobile and Web with Vertex AI in Firebase"
					special
				/>

				<Spacer hours={1} minutes={0} />
				<Event hours={1} minutes={0} time="17:00 - 18:00" title="Presentation Workshop" special />
				<Event hours={1} minutes={0} time="18:00 - 19:00" title="Dinner" food />

				<Spacer hours={1} minutes={45} />
				<Event hours={0} minutes={30} time="01:30 - 02:00" title="Playtime" special />
			</Event>
		</Day>
		<Day date="Sat, 24.5.2025">
			<Event hours={4} minutes={30} time="00:00 - 12:30" title="Hacking">
				<Spacer hours={0} minutes={40} />
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
			<Event hours={1} minutes={0} time="15:30 - 16:30" title="Finalist Presentation" special />
			<Event hours={0} minutes={30} time="16:30 - 17:00" title="Judging" special />
			<Event hours={0} minutes={30} time="17:00 - 17:30" title="Award ceremony" special />
			<Event hours={3} minutes={20} time="17:30 - open end" title="Afterparty" special />
		</Day>
	</Timetable>
	<!--div class="w-full flex mt-16 md:mt-32 flex-col md:flex-row">
		<a
			href="https://drive.google.com/file/d/123QS2ZPEOqKPbiQxZfja5EeVTJFqd4Vt/view?usp=sharing"
			target="_blank"
			rel="noreferrer"
			class="m-auto mb-8 w-48 text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:dark:text-white"
			>Download as .ics file</a
		>
		<a
			href="https://calendar.google.com/calendar/u/0?cid=Y183MDVmNzFmZTQxMDA1ZmYxZmRkY2NkN2VkNjMwMjE2ZGQ3YzYzZDczYzljOGU3Yzc3ZDQ4OWNkMDZmMGFkYTU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
			target="_blank"
			rel="noreferrer"
			class="m-auto mb-8 w-68 text-md text-hackaburg border-2 border-hackaburg-900 text-hackaburg-900 rounded-3xl px-3 py-2 cursor-pointer hover:bg-hackaburg-900 hover:dark:text-white"
			>Subscribe to our event calendar</a
		>
	</div-->
</BaseComponent>
