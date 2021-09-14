<script context="module" lang="ts">
	import Section from '$lib/Section.svelte';
</script>


<div id="hero" class="align-center">
	<div class="pad-sides">
		<div class="flex-middle full-height">
			<span>
				<h1>Completed Projects</h1>
			</span>
		</div>
	</div>
</div>

<div class="project">
	<h2>Ethics in Engineering</h2>
	<h3 style="text-align: center; font-size: 0.8em; padding-bottom: 15px; padding-top: 15px">Project Added September 13, 2021</h3>
	<br>
	<p style="margin: auto;">We analyzed a case study of the potential collapse of the Citicorp Tower in New York.</p>
	<Section title={"Citicorp Tower 'Collapse'"} imageURL={"/citicorp.png"}>
		<span slot="text">
			<p>
				The Citicorp tower was at risk of collapse due to its unique pillared construction at the bottom. If there was a hurricane with quartering winds (winds that hit the building's corners at high speeds), it may have collapsed and, due to its special construction, would've toppled over and knocked over other buildings instead of imploding in on itself, potentially killing up to 200,000 people. Luckily this error was revealed before any disaster and fixes were put in place. The ethical dilemma was whether to tell the public before or after they made the repairs. They ultimately waited until after because it may have caused a lot of unnecessary panic.
			</p>
		</span>
	</Section>
	<br>
	<br>
	<div class="align">
		<h4>Case Study Slides</h4>
		<a target="_blank" href="/Case-Study.pdf" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Slides</a>
		<br>
		<br>
	</div>
	<br>
	<p style="margin: auto;">We also watched Monster's Inc. and created arguments FOR and AGAINST the actions of the CEO. I ultimately took the side of the CEO because I ultimately think it's more fun to argue a more difficult point, and the CEO was clearly portrayed as the villain by the movie Monsters, Inc.</p>
	<Section title={'In Support of the CEO'} imageURL={"/pro-screenshot.png"}>
		<span slot="text">
			<p>
				The main argument in favor of the CEO was that the factory was necessary to Monster society before the discovery of screams, and that the CEO did whatever what was needed to maintain energy for society. For example, Monsters appeared to be very enthusiastic about their jobs, getting excited about the 'top scarer' and generally having high daily energy. They were also morally okay with screaming, and only switched to laughter later on because of its efficiency.
			</p>
		</span>
	</Section>
	<br>
	<br>
	<div class="align">
		<h4>PRO-CEO Slides</h4>
		<a target="_blank" href="/PRO-CEO.pdf" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Slides</a>
		<br>
		<br>
	</div>
	<Section title={'Against the CEO'} imageURL={"/anti-screenshot.png"}>
		<span slot="text">
			<p>
				The main argument against the CEO stems from the CEO's clear portrayal as a villain throughout the movie. From being okay with kidnapping children for profit, to obstructing justice by hiding evidence of the children, to quickly getting rid of his 'top scarer' with little remorse, the CEO appeared to have very little regard for anything except his own appearance and profit.
			</p>
		</span>
	</Section>
	<br>
	<br>
	<div class="align">
		<h4>ANTI-CEO Slides</h4>
		<a target="_blank" href="/ANTI-CEO.pdf" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Slides</a>
		<br>
		<br>
	</div>
	<hr />

</div>


<style>
	.project {
		width: 80%;
		margin: auto;
	}
	.align {
		text-align: center;
	}
	h2 {
		text-align: center;
		padding-top: 10vh;
	}
	hr {
		border: 1px solid lightgray;
		border-radius: 1px;
		margin: auto;
		width: 70%;
	}
	p {
		text-align: justify;
		text-justify: inter-word;
	}
	#hero {
		height: 70vh;
		background-color: aliceblue;
		width: 100%;
		text-align: left;
		align-items: center;
		display: flex;
		justify-content: space-evenly;
		overflow-y: visible;
		/* Disable selection */
		-webkit-touch-callout: none; /* iOS Safari */
    	-webkit-user-select: none; /* Safari */
     	-khtml-user-select: none; /* Konqueror HTML */
       	-moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
	}
</style>
