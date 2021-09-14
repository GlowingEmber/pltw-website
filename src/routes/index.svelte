<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import AskQuestion from '$lib/AskQuestion.svelte';

</script>

<Hero />
<Section title={'Description and Goals'} imageURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/2048px-Circle_-_black_simple.svg.png"}>
	<span slot="text">
		<p>
			I'm very excited for the project-based aspect of this class. My goals for Capstone are to come up with a useful solution to a real issue and to work well with my team. I'm excited about using code and 3d modeling for our project.
		</p>
	</span>
</Section>

<Section title={'Specific Interests'} imageURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/2048px-Circle_-_black_simple.svg.png"}>
	<span slot="text">
		<p>
			This is my fourth year in PLTW! Although I like all forms of engineering, my specific interest is in computer science and software engineering. I'm also interested in political predictions and play piano.
		</p>
	</span>
</Section>

<style>
	p {
		text-align: justify;
		text-justify: inter-word;
	}
</style>
