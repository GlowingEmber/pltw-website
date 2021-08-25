<script>
	let name;
	let thankYou;
	let message;
	let importance = "potential";
	let votedEthan = false;
	let myVote = "No, I did not vote for Ethan and Henry"
	let sent = false;

	function importanceCalc() {
		if (votedEthan == true) {
			document.getElementById("button1").classList.add('questionButton');
			importance = 'potential'
			votedEthan = false;
			myVote = "No, I did not vote for Ethan and Henry"
		} else if (votedEthan == false) {
			document.getElementById("button1").classList.remove('questionButton');
			votedEthan = true;
			importance = 'guaranteed'
			myVote = "Yes, I did vote for Ethan and Henry"
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
	<h4 style="color: gray;">Have a suggestion for the class? Leave a comment here!</h4>
	<div>
		<img src="">
	</div>
	<table>
		<tr>
			<button class="questionButton" id="button1" on:click={importanceCalc}>{myVote}</button>
		</tr>
		<tr>
			<button class="Send" on:click={send}>Send for {importance} consideration</button>
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