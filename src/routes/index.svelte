<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import HomeSection from '$lib/HomeSection.svelte';
	import AskQuestion from '$lib/AskQuestion.svelte';

</script>

<Hero />
<HomeSection title={'Description and Goals'} imageURL={"hello.png"}>
	<span slot="text">
		<p>
			I'm very excited for the project-based aspect of this class. My goals for Capstone are to come up with a useful solution to a real issue and to work well with my team. I'm excited about using code and 3d modeling for our project.
		</p>
	</span>
</HomeSection>

<HomeSection title={'Specific Interests'} imageURL={"hej.png"}>
	<span slot="text">
		<p>
			This is my fourth year in PLTW! Although I like all forms of engineering, my specific interest is in computer science and software engineering. I'm also interested in political/election predictions and playing piano.
		</p>
	</span>
</HomeSection>

<style>
	p {
		text-align: justify;
		text-justify: inter-word;
	}
</style>
