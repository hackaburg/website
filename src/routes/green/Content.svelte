<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import green from '$lib/images/green.svg';
	import co2 from '$lib/images/kpiIcons/co2.svg';
	import energy from '$lib/images/kpiIcons/energy.svg';
	import gender from '$lib/images/kpiIcons/gender.svg';
	import trash from '$lib/images/kpiIcons/trash.svg';
	import water from '$lib/images/kpiIcons/water.svg';

	let kpis = [
		{
			headline: 'Total Carbon Foodprint (CO2 in kg)',
			number: '~',
			info: '',
			color: '#82bd53',
			icon: co2
		},
		{
			headline: 'Energy Consumption (kWh)',
			number: '~',
			info: '',
			color: '#82bd53',
			icon: energy
		},
		{
			headline: 'Water Foodprint (m3)',
			number: '~',
			info: '',
			color: '#82bd53',
			icon: water
		},
		{
			headline: 'Waste (kg)',
			number: '~',
			info: '',
			color: '#82bd53',
			icon: trash
		},
		{
			headline: 'Gender Split (men / women / diverse)',
			number: '~',
			info: '',
			color: '#82bd53',
			icon: gender
		}
	];

	let data = [
		{
			headline: 'Mobility',
			text: 'The main environmental impact of events is usually caused by participants travel to and from the event. Create incentives for the use of public and / or environmentally friendly means of transport. Public transport plan + travel concepts (formation of groups for car sharing via Discord). When registering for the event, the planned travel time and means will be requested in order to be able to calculate the estimated Co2 costs.',
			color: '#f8c413'
		},
		{
			headline: 'Venue and accommodation for participants',
			text: '* Accommodation for participants should be as close as possible to the event location, e.g. in the TechBase directly, youth hostel. Thus, unnecessary travel & footprint can be avoided; <br>* There are bike racks at the Techbase and a bus line directly in front of the door (Bus 6).',
			color: '#184669'
		},
		{
			headline: 'Energy and climate',
			text: '<b>Techbase as an event venue:</b> <br>* The construction of the TechBase is particularly low in concrete in order to conserve the scarce resource of sand<br> * LEDs and motion detectors are used for lighting in the building<br> * An extensive green roof ensures a pleasant climate inside, purifies the air, stores rainwater and provides a habitat for insects<br> * With the largest ice storage in Bavaria, an innovative concept for heat storage was implemented<br> * A combined heat and power plant provides heat and also reduces external electricity consumption through self-production<br> * The purchased energy sources are 100% green electricity<br> * Two free wall boxes in the underground parking garage<br> * One e-charging point on the building<br> * The "EARL" e-car sharing scheme run by the municipal utility company<br><br> <b>Other important measures:</b> <br>* Heating: not above 20 degrees in all meeting and conference rooms <br> * Temperature reduction at night  <br> * Cooling: no more than 6 degrees below outside temperature <br> * Use of daylight, optimized lighting control, optimized sun protection, energy-efficient lighting <br> * Training of employees on correct, i.e. energy-efficient ventilation<br>',
			color: '#2895d2'
		},
		{
			headline: 'Temporary structures and exhibition stands',
			text: '* Ensure separate waste collection and disposal <br> * Use reusiiable, at least recyclable, transport packaging wherever possible to avoid waste (e.g., no plastic dishes or cutlery)<br> * Create a concept for the further use of the individual parts of an exhibition stand and the decoration <br>',
			color: '#f49d1e'
		},
		{
			headline: 'Procurement of products and services',
			text: '* Reduction of paper consumption. through digital invitation and event management, e.g. digital contract creation, digital applicant management, etc.<br> * Badges only with name + and cut + Schedule with QR code<br> * If paper is required, use of recycled paper bearing the "Blue Angel" label or meeting its criteria (for all invitations, meeting documents, print jobs and the like); whiteness of recycled paper: maximum 100 % (incl. UV content) according to DIN ISO 2470 and maximum 135 according to ISO standard 11475 (CIE whiteness) <br> * Use of certified cleaning agents <br>',
			color: '#5db146'
		},
		{
			headline: 'Catering',
			text: '* Significant share of products from organic farming Promotion of seasonal foods <br> * Vegan and vegetarian catering<br> * Use of Fair Trade products if food from overseas is offered <br> * Avoidance of food waste as well as other waste (see also chapter 3.7 "Waste management")<br> * Provision of piped drinking water in carafes<br> * Use of reusable tableware, e.g. reusable cutlery, glasses and bottles<br> * Paying attention to the offer of quantities of food that meet the needs of the customer <br> * Use of packaging that avoids or reduces waste <br> * Labeling of the dishes at the buffet (avoidance of "mistakes") <br> * Sensitization of serving staff, e.g. serving smaller quantities, targeted replenishment of dishes <br> * Distribution of leftover food to charitable organizations, e.g. to food banks, to the extent permitted by the applicable hygiene regulations<br> * Separate collection of kitchen waste<br> * When choosing a catering service company, ensure compliance with the quality standards of the German Nutrition Society (DGE)<br>',
			color: '#e43526'
		},
		{
			headline: 'Waste management',
			text: '* Minimize packaging waste, e.g. by using reusable packaging and ordering in bulk if the contents are used up  <br> * Take-back systems and reuse, e.g. for name tags  <br> * Use of recyclable products and packaging made from recycled materials, e.g. recycled cardboard for cardboard packaging <br> * Installation of waste islands for separate waste collection, especially for the fractions paper, organic waste, glass and light packaging, as well as clear labeling (especially at international events) <br> * Information about the separation system to all suppliers and the operating company. Important: Involve cleaning companies <br> * Obligation of suppliers to take back packaging <br>',
			color: '#4a9b45'
		},
		{
			headline: 'Handling water',
			text: '* Conservation of the resource water <br> * Economical use of water, e.g. use of water-saving equipment in kitchens and canteens  <br> * Placing signs with information about water-saving devices in sanitary rooms to also address the awareness of the participants <br>',
			color: '#33bbe4'
		},
		{
			headline: 'Guest gifts and giveaways',
			text: '* We advice our supporeters to hand out sustainable guest gifts and giveaways',
			color: '#a51d3e'
		},
		{
			headline: 'Organization, communication and evaluation',
			text: '* Designate contact person <br> * Point out sustainability aspects of the event to participants (e.g., via presentation areas during breaks).<br> * Collect, evaluate and communicate data on the impact of the measures<br> * Qualitative and quantitative impact measurement of implemented measures (documentation) <br> * Evaluation of the collected data<br> * Communication of the evaluated data (especially for large events)<br>',
			color: '#d1d3d4'
		},
		{
			headline: 'Accessibility',
			text: '* Designate contact person <br> * Point out sustainability aspects of the event to participants (e.g., via presentation areas during breaks).<br> * Collect, evaluate and communicate data on the impact of the measures',
			color: '#e43526'
		},
		{
			headline: 'Gender mainstreaming',
			text: '* Gender-equitable written and oral formulations (in the sense of the cabinet decision of June 1999) ',
			color: '#dc1079'
		}
	];
</script>

<BaseComponent
	headline={'Green - Hackaburg`s Sustainability Concept'}
	subHeadline="Find all details how we try reduce Hackaburg's foodprint"
>
	<div class="w-full md:w-1/2 flex flex-wrap">
		<div class="p-4 mx-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={green} alt="" class="w-full" />
		</div>
		<div class="w-1/2 p-4 text-center mt-16">
			<p class="text-base mb-8 text-left">
				Our concept includes the content design of the hackathon. On the one hand, special attention
				is paid to the design of the tracks and challenges. And on the other hand, on the
				implementation of the motto "Hackaburg Goes Green" and the associated sustainability, which
				should not just be a phrase. Below you find the main indicators, with them we try to measure
				how good we reduce our footprint. Further, you find a list of topics that are to be
				understood under the point Hackaburg Goes Green and a sustainable event.
			</p>
		</div>
	</div>

	<div>
		<h2
			class="text-3xl font-bold text-center text-black-800 mb-8 uppercase hackaburg mt-24"
			id="kpis"
		>
			Sustainablity KPIs
		</h2>
		<h2 class="text-xl font-bold text-center text-black-800 mb-8">
			Our stats how we try to measure how sustainable we are
		</h2>
		<p class="w-2/3 text-center m-auto mb-10">
			We try to be as transparent as possible about how we are trying to address the issue of
			sustainability. Therefore, as soon as we have the numbers for it, we will fill the tiles below
			and list you how they are composed in detail.
		</p>

		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			{#each kpis as kpi}
				<div
					class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-lg sm:p-6 border border-gray-100"
				>
					<div class="absolute rounded-md p-3 mt-2" style="background-color: {kpi.color};">
						<!-- Heroicon name: outline/users -->
						<img class="h-6 w-6 text-white" alt={kpi.headline} src={kpi.icon} />
					</div>
					<dt class="ml-16 truncate text-sm font-medium text-gray-500">{kpi.headline}</dt>
					<dd class="ml-16 mt-1 text-3xl font-semibold tracking-tight text-gray-900">
						{kpi.number}
					</dd>
				</div>
			{/each}
		</dl>
	</div>

	<h2
		class="text-3xl font-bold text-center text-black-800 mb-8 uppercase hackaburg mt-20"
		id="actions"
	>
		Fields of acation
	</h2>
	<h2 class="text-xl font-bold text-center text-black-800 mb-8">
		Fields of action of a sustainable hackathon based on guidlines of the BMUV
	</h2>

	<div class="grid grid-cols-2 gap-4 mt-10 mb-10">
		{#each data as field}
			<div class="mt-5">
				<div class="text-2xl" style="color:{field.color}">{field.headline}</div>
				<p class="mt-5">
					{@html field.text}
				</p>
			</div>
		{/each}
	</div>
</BaseComponent>
