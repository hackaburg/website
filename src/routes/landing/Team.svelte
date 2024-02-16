<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import team_1 from '$lib/images/team_1.png';
	import team_2 from '$lib/images/team_2.png';
	import team_3 from '$lib/images/team_3.png';
	import Button from '../components/Button.svelte';

	let teams = [
		{
			img: team_1,
			title: 'Tilt and Invite Friends',
			text: 'Our registration tool (tilt) provides the possibility to invite your friends directly and to form teams in advance. You can request to join existing teams or create your own ones.<br><br> <b class="text-primary">Important:</b> Inviting friends and creating teams, increases your chances to get a spot at Hackaburg. So, don\'t miss it!'
		},
		{
			img: team_2,
			title: 'Connect on Discord',
			text: 'Our Discord this year is open for everyone, now! Join, introduce yourself and get connected.',
			btn: 'Discord coming soon',
			btnLink: ''
		},
		{
			img: team_3,
			title: 'Team Finding Session',
			text: 'On the first day of the hackathon we provide little workshop for everyone without a complete team. We do this better and more structured than last year. More information will follow.'
		}
	];
</script>

<BaseComponent
	headline={'Team'}
	subHeadline={'Finding a team is not always easy <b class="text-primary"> - but super important!</b>'}
	id={'team'}
>
	<div class="w-full max-w-3xl mx-auto">
		<div class="text-center mb-12 text-white justify-center">
			<p>
				Visiting a hackathon on your own is not always easy. But don't worry, we will help you to
				find a team. We try to support the team building in three different ways.
			</p>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-x-8 gap-y-8 place-items-center lg:grid-cols-3 md:grid-cols-2">
		{#each teams as team, i}
			<div class="glow bg-black rounded-2xl dark:bg-gray-800 ml-4 relative min-h-100">
				<img class="rounded-t-lg w-full object-fill" src={team.img} alt="" />
				<div class="p-5 h-full">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
						{team.title}
					</h5>
					<p class="mb-3 text-base text-white dark:text-gray-400 h-16">{@html team.text}</p>
					<a href={team.btnLink} target="_blank" rel="noreferrer">
						{#if team.btn}
							<Button label={team.btn} />
						{/if}
					</a>
				</div>
			</div>
		{/each}
	</div></BaseComponent
>

<style>
	.min-h-100 {
		min-height: 30rem;
	}
</style>
