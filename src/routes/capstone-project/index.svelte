<script context="module" lang="ts">
	import Section from '$lib/Section.svelte';

	// These values are bound to properties of the video
	let time = 0;
	let duration;
	let paused = true;

	let showControls = true;
	let showControlsTimeout;

	// Used to track time of last mouse down event
	let lastMouseDown;

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = duration * (clientX - left) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e) {
		lastMouseDown = new Date();
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

</script>


<div id="hero" class="align-center">
	<div class="pad-sides">
		<div class="flex-middle full-height">
			<span>
				<h1>Capstone Project</h1>
			</span>
		</div>
	</div>
</div>

<div class="pad-top">
	<div class="pad-sides">
		<div class="project" id="capstone">
			<h2>Capstone Project</h2>
			<h3 style="text-align: center; font-size: 0.8em; padding-top: 15px; color: red">★ Major Project</h3>
			<h3 style="text-align: center; font-size: 0.8em; padding-top: 15px"><i>'Package Pirate Prevention'</i></h3>
			<h3 style="text-align: center; font-size: 0.8em; padding-bottom: 15px; padding-top: 15px">Project Added Jan 6, 2022</h3>
			<p style="margin: auto;"><a href="https://www.cnbc.com/2020/01/10/package-theft-how-amazon-google-others-are-fighting-porch-pirates.html">According to CNBC</a>, more than 1.7 million packages are stolen (or lost) EACH DAY in the United States, costing sellers billions of dollars each year. Our goal is to build a solution to decrease or limit the amount of package theft, and are currently developing ideas.</p>
			<br>
			<hr>
			<br>
			<Section title={'Final Design'} imageURL={"/3p.png"}>
				<span slot="text">
					<p>
						This was our final prototype. We designed a device that was both aesthetically appealing and could physically store the package with a mailbox-esque door system. It also has a top dip that allows it to hold pillows, planter boxes, or other accessories in order to look inconspicuous on a front porch. (For more details, check out riveour poster!)
					</p>
				</span>
			</Section>
			<Section title={'Poster'} imageURL={"/poster.png"}>
				<span slot="text">
					<p>
						Our poster includes information about our brainstorming/research process, surveys, 3d modeling/rendering, logo, and physical building of our 3 prototype iterations. It's cool! Check it out!
					</p>
				</span>
			</Section>
			<div class="align">
				<h4>Poster</h4>
				<br>
				<p>Click the following link to view the full poster!</p>
				<br>
				<a target="_blank" href="https://docs.google.com/presentation/d/1bHtWSZDDSn6cq6F0i7IlzIZS1KhxGWuFAdQbGalQgI0/edit?usp=sharing" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Poster (Google Slides)</a>
				<br>
				<br>
				<a target="_blank" href="/PLTW Capstone Presentation.pdf" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Poster (PDF)</a>
				<br>
				<br>
			</div>
			<div class="align">
				<h4>Research Document</h4>
				<br>
				<p>Click the following link to view the full research document!</p>
				<br>
				<a target="_blank" href="https://docs.google.com/document/d/1x-VyUiv4vz1Ljr4aU771L6Ak9uuqY74W3yeDSz1pVRA/edit?usp=sharing" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Document (Google Docs)</a>
				<br>
				<br>
				<a target="_blank" href="/Package Pirating Prevention Capstone Research.pdf" style="font-weight: bold; font-size: 30px; padding-top: 25px; padding-bottom: 25px; color: #388eff;">View Document (PDF)</a>
				<br>
				<br>
			</div>
			<div>
				<video
					poster="/final-render.png"
					src="/1 Minute Commercial.mp4"
					on:mousemove={handleMove}
					on:touchmove|preventDefault={handleMove}
					on:mousedown={handleMousedown}
					on:mouseup={handleMouseup}
					bind:currentTime={time}
					bind:duration
					bind:paused>
					<track kind="captions">
				</video>
			
				<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
					<progress value="{(time / duration) || 0}"/>
			
					<div class="info">
						<span class="time">{format(time)}</span>
						<span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
						<span class="time">{format(duration)}</span>
					</div>
				</div>
			</div>			
			<hr>
			<br>
		</div>
		<br>
		<div>
			<h2 style="text-align: center; padding-top: 0">Gallery</h2>
			<br>
			<img src="/final-render.png" class="gallery">
			<h5 style="text-align: center">Final Model in Onshape by Kim and Theo, final texture/render in Blender by Ethan.</h5>
			<br>
			<img src="/the-gang.png" class="gallery">
			<h5 style="text-align: center">Final Capstone Presentation! Left to right: Theo, Ethan, Kim ( :( MJ couldn't make it). You can see our final design on the top left!</h5>
			<br>
			<img src="/gallery1.png" class="gallery">
			<h5 style="text-align: center">Testing our blocking mechanism</h5>
			<br>
			<img src="/gallery2.png" class="gallery">
			<h5 style="text-align: center">Another angle: testing our blocking mechanism</h5>
			<br>
			<img src="/gallery3.png" class="gallery">
			<h5 style="text-align: center">It's structurally secure! Ethan sitting on it comfortably</h5>
			<br>
			<img src="/gallery4.png" class="gallery">
			<h5 style="text-align: center">It's not breaking! Kim sitting on it snazzily</h5>
			<br>
			<img src="/gallery5.png" class="gallery">
			<h5 style="text-align: center">Ethan and Kim breaking apart a palette to use its wood for the second prototype</h5>
			<br>
			<img src="/gallery6.png" class="gallery">
			<h5 style="text-align: center">Ethan and Theo breaking another palette</h5>
			<br>
			<img src="/gallery7.png" class="gallery">
			<h5 style="text-align: center">Ethan and Theo posing to look productive for a picture</h5>
			<br>
			<img src="/gallery8.png" class="gallery">
			<h5 style="text-align: center">Theo cutting for the second prototype using a mechanical saw, MJ standing to hold the wood down</h5>
			<br>
			<img src="/gallery9.png" class="gallery">
			<h5 style="text-align: center">MJ cutting with a saw. By the way, you can see the clamps that we used with wood to make a straight cut</h5>
			<br>
			<img src="/gallery10.png" class="gallery">
			<h5 style="text-align: center">After a cut</h5>
			<br>

		</div>
			
	</div>
</div>


<style>
		.gallery {
		height: 40vh;
		width: 40vh;
		padding: 1vh;
		margin-left: auto;
  margin-right: auto;
	}
	a {
		
		font-weight: bold; 
		color: #388eff;
	}
	a:hover {
		color: #2980B9;
	}
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
		margin: auto;
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
