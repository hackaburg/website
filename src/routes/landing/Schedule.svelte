<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import Day from '../components/Day.svelte';
</script>

<BaseComponent headline={'Schedule'} subHeadline={'When and what?'} id={'green'}>
	<div class="grid grid-cols-3">
		<Day headline={'Do. 25.6.2023'} />
		<Day headline={'Fr. 25.6.2023'} />
		<Day headline={'Sa. 25.6.2023'} />
	</div>
</BaseComponent>
