<script>
	let name;
	let thankYou;
	let message;
	let importance = "potential";
	let votedEthan = false;
	let myVote = "This is a red button that I prefer (work in progress lol)"
	let sent = false;

	function importanceCalc() {
		if (votedEthan == true) {
			document.getElementById("button1").classList.add('questionButton');
			importance = 'potential'
			votedEthan = false;
			myVote = "Nope, I actually do prefer red"
		} else if (votedEthan == false) {
			document.getElementById("button1").classList.remove('questionButton');
			votedEthan = true;
			importance = 'guaranteed'
			myVote = "Actually I prefer green"
		}
	}
	function send() {
		if (name != null) {
			thankYou = "Thank you, " + name.split(" ")[0] + "!";
		}
		else {
			thankYou = "Thank you!";
		}
		sent = true;
	}
	function redo() {
		sent = false;
	}
</script>
<main>
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#news">Resources</a></li>
		<li><a href="#contact">Completed</a></li>
		<li><a href="#contact">Work in Progress</a></li>
		<li><a href="#contact">Blog</a></li>
	  </ul>
	<h1>Ethan Hopkins</h1>
	<div id="form-container">
	<h4 style="color: gray;">Hello, I'm Ethan, a PLTW student at Santa Monica High School.</h4>
	<div style="width: 50vw; display: inline-flex; padding-right: 20%; padding-left: 20%;">
		<img src="https://lh3.googleusercontent.com/J3OQC5-9KjNJaOPoNqIs-XOM5U7T1igv3wfRRUxI5KKOuL7vmVhQW_gt_CXxxVUI6GCJxg0dxu7tn5XZ7RJzr2kwt0fc6RKnrfYZfHLH7K0kAPjufll55QU7TVIPI0n0gMEqT8EtRb0SGwv4PxoZRmGccPEZcyBPfHO5-Ueg4fqeRQb74qrVrwZUvg6xi8HCM5lL6CbGiyKsgdxJ5ENwF6FNyw0OLhthQUV7Kk7-LhGUiXQTAxvdqixYMAr6OMrlgbf87aUHGdAss_uRkFNfZ8p_C0oojn743vhVaaDJPUV63KV_Z0zJaZ60-QWAd6dgQvaVnVTVdH5GFiWT6t--ghQUvNe8MG7vw_bZvBrIfZlRhX8bFgQKOG-agU3nAeNUpCg7v_q4NmmRxeo_gw5xLwGmC3JL_L1KfhE2QSX3veLGcDZAhT6IDq9k65kLaduV_pfDaI4xgV4FCjLN1XOhruLk57elTTix1NTygBKJChqfm2CjKHlJdzHBvnIkGmW0qU2jYrUpl-BbAgVCuF6y1HwogIbcaKDHT_aC87-oXdPICo3gzZIrOd-NVK4Q4B5cdNJupN4bKaUpHffDeYBr7R6B7YicBRwPlDn6dSSGchyZL64RD3Z1jYGh5LOf7hjot0C2-E-zO5Gc5b_y0RXQLIvY5oWlR1MO0P0bv9doOC6YxCIZV1DGuoH54p6hkvpIoB4o2hGupPvNn0XxF_W6ytM4=s660-no?authuser=3" alt="profile picture">
		<div>
			<p><strong>Personal: </strong>This is my fourth year in PLTW! Although I like all forms of engineering, my specific interest is in computer science and software engineering. I'm also interested in political predictions and play piano.</p>
			<p><strong>Goals: </strong>I'm very excited for the project-based aspect of this class. My goals for Capstone are to come up with a useful solution to a real issue and to work well with my team. I'm excited about using code and 3d modeling for our project.</p>
			<p><strong>Contact: </strong>ethan.e.hopkins@gmail.com</p>
		</div>
	</div>
	<table>
		<tr>
			<button class="questionButton" id="button1" on:click={importanceCalc}>{myVote}</button>
		</tr>
		<tr>
			<button class="Send" on:click={send}>There is a {importance} chance that you're cool</button>
		</tr>
	</table>
	</div>

	<footer
	style=" display: inline-flex; -webkit-touch-callout: none; /* iOS Safari */ 
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently */">
		<a href="https://github.com/glowingember/pltw">
			<p>View GitHub</p>
		</a>
	</footer>
	
</main>


<style>
	#form-container {
		background-color: #EEF2F5;
		padding: 20px;
		padding-bottom: 30px;
		border-radius: 25px;
		/* Adjust these for mobile versions and versions with different screen sizes */
		margin-left: 10%;
		margin-right: 10%;
	}
	img {
		width: 15vw;
		padding: 20px;
		border-radius: 50%;
		align: left;
		display: inline-block;
		height: 15vw;

	}
	ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #EEF2F5;
  border-radius: 5px;
}

li {
  float: left;
}

li a {
  display: block;
  color: gray;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-radius: 5px;
}

li a:hover:not(.active) {
  background-color: rgb(241, 245, 255);
}

.active {
  background-color: #04AA6D;
}

	a, a:hover {
		color: gray;
		text-decoration: none;
		font-weight: bold;

	}
	.Send {
		background-color: #2d8afc;
		margin-top: 0;
	}
	.Send:hover {
		background-color: #1a569f;
	}
	.questionButton {
    background-color: #FF4C4C;
    color: white;
  }
  .questionButton:hover {
    background-color: #DA3232;
    color: white;
  }

	button {
		text-align: center;
		padding: 10pt;
		border-top-left-radius: 0; 
		border-top-right-radius: 0;
		width: 500px;
		resize: none;
		outline: 0;
  		border: none;
  		-moz-outline-style: none;
		color: white;
  		background-color: #2ECD72;
		border-radius: 5px;
		margin-top: 30px;
	}
	button:hover {
	background-color: #27AE60;
  }
	table {
		border-collapse: collapse;
		margin: 0 auto;
	}
	.nameArea {
		text-align: center;
		padding: 10pt;
		border-top-left-radius: 0; 
		border-top-right-radius: 0;
		width: 500px;
		resize: none;
		outline: 0;
  		border: none;
  		-moz-outline-style: none;
		background-color: #EEF2F5;
		border-radius: 5px;
	}
	.inputArea { 
		text-align: center;
		padding: 10pt 0;
		padding-top: 20pt;
		padding-left: 10pt;
		padding-right: 10pt;
		border-top-left-radius: 0; 
		border-top-right-radius: 0;
		width: 500px;
		height: 300px;
		resize: none;
		outline: 0;
  		border: none;
  		-moz-outline-style: none;
		background-color: #EEF2F5;
		border-radius: 5px;
	}
	.nameArea:active, .nameArea:focus, .inputArea:active, .inputArea:focus {
		outline: 0;
  		border: none;
  		-moz-outline-style: none;
	}
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		font-size: 4em;
		font-weight: 200;
	}
	p {
		font-size: 17.5px;
		text-align: left;
	}
	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>