<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import team_1 from '$lib/images/team_1.png';
  import team_2 from '$lib/images/team_2.png';
  import team_3 from '$lib/images/team_3.png';


  let teams = [
    {
      img: team_1,
      title: 'Tilt and Invite Friends',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      img: team_2,
      title: 'Connect on Discord',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      img: team_3,
      title: 'Team Finding Session',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  ];
</script>

<BaseComponent
	headline={'Team'}
	subHeadline={'Finding a team is not always easy <b class="text-primary"> - but super important!</b>'}
	id={'team'}
>
	<div class="w-full max-w-3xl mx-auto">
		<div class="text-center mb-24 text-white justify-center">
			<p>
				Visiting a hackathon on your own is not always easy. But don't worry, we will help you to
				find a team. We try to support the team building in three different ways.
			</p>
    </div>
  </div>
			<div
				class="grid grid-cols-1 gap-x-8 gap-y-8 place-items-center md:grid-cols-3 md:mt-8 mt-4 sm:p-8"
			>
      {#each teams as team, i}
      <div class="relative group h-100">
        <div
          class="absolute -inset-0.5 ml-4 mr-1 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 "
        />
				<div class="bg-black rounded-2xl shadow dark:bg-gray-800 ml-4 relative h-100">
					<img class="rounded-t-lg w-96 object-fill" src={team.img} alt="" />
					<div class="p-5 h-full">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{team.title}</h5>
						<p class="mb-3 text-base text-white dark:text-gray-400 h-16">{team.text}</p>
					</div>
				</div></div>
        {/each}
	</div></BaseComponent
>

<style>
  .h-100 {
    height: 30rem
  }
</style>
