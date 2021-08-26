<script lang="ts">
	import type { PostQuestionPayload } from '../schema/index';
	import { onMount } from 'svelte';

	let firstName = '';
	let lastName = '';
	let allowPublic = true;
	let allowPublicName = true;
	let enabledPublic = 'ENABLED';
	let enabledPublicName = 'ENABLED';
	let startClass = 'questionButton';
	let question = '';
	let contactEmail = '';
	let sent = false;
	let loading = false;
	let questions = [];
	let publicQuestions = [];

	
	function allowPublicFunc() {
		if (allowPublic == true) {
			document.getElementById("button1").classList.remove('questionButton');
			enabledPublic = 'DISABLED'
			allowPublic = false;
		} else if (allowPublic == false) {
			document.getElementById("button1").classList.add('questionButton');
			allowPublic = true;
			enabledPublic = 'ENABLED'
		}
	}
	function allowPublicNameFunc() {
		if (allowPublicName == true) {
			document.getElementById("button2").classList.remove('questionButton');
			enabledPublicName = 'DISABLED'
			allowPublicName = false;
			startClass = 'questionButtonFalse';
		} else if (allowPublicName == false) {
			document.getElementById("button2").classList.add('questionButton');
			allowPublicName = true;
			enabledPublicName = 'ENABLED'
			startClass = 'questionButton';
		}
	}

</script>


<style>
	#newSpan {
		color:gray;
		align-items: right;
		margin-left: auto;
		margin-top: auto;
		margin-bottom: auto;
		text-align: right;
		padding: 10px;
		/* For testing */
		/* background-color: gray; */
	}
	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	/* hr {
		border: 1px solid lightgray;
		border-radius: 1px;
	} */
	#box {
		background-color: var(--off-white);
		padding-top: 40pt;
		padding-bottom: 40pt;
		/* box-shadow: 1.5px 0px 3px -3px gray; */
	}

	.loader {
		margin: auto;
		border: 2px solid #f3f3f3;
		border-radius: 50%;
		border-top: 2px solid #3498db;
		width: 20px;
		height: 20px;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

	/* Safari */
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	#box-bottom {
		background-color: var(--off-white);
		/* box-shadow: 0px 5px 3px -3px gray; */
	}

	.pointer-none {
		pointer-events: none;
	}

	input[type='checkbox'] {
		vertical-align: bottom;
		margin-bottom: 1pt;
	}

	#ask-question-form {
		position: absolute;
		top: 0;
		background-color: var(--off-white);
		height: 70vh;
	}

	#ask-question-form-container {
		position: relative;
		height: 400px;
	}

	#checkboxes {
		flex-direction: row-reverse;
	}

	input {
		background-color: var(--off-white) !important;
		border-bottom: 1pt solid gray;
		margin-right: 10pt;
		padding: 10pt 0;
		border-radius: 0;
	}

	textarea {
		padding: 10pt 0;
		padding-top: 20pt;
	}

	/* 
	button {
		display: inline-block;
		text-align: center;
    	padding: 16px 32px;
		margin: 4px 2px;
		float: right;
		width: 200px;
    	text-decoration: none;
    	border-radius: 3px;
    	transition: .4s;
		font-family: 'Rubik', sans-serif;
  	}
  	.questionButton {
		color: #2ECD72;
		border: solid 3px #2ECD72;
		background: #bdffc0;
  	}
  	.questionButton:hover {
	  	border: 3px dashed #2ECD72;
	  	background: #bdffc0;
  	}
  	.sendButton {
		color: #67c5ff;
		border: solid 3px #67c5ff;
		background: #f2fcff;
  	}
  	.sendButton:hover {
	  	background: #67c5ff;
	  	color: #FFF;
  	}
	  */


	button {
  border: none;
  border-radius: 3px;
  color: white;
  background-color: #FF4C4C;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  float: right;
  width: 200px;
  }
  button:hover {
	background-color: #DA3232;
  }

  .questionButton {
    background-color: #2ECD72;
    color: white;
  }
  .questionButton:hover {
    background-color: #27AE60;
    color: white;
  }
  .questionButtonFalse {
    background-color: #FF4C4C;
    color: white;
  }
  .questionButtonFalse:hover {
    background-color: #DA3232;
    color: white;
  }
  .sendButton {
	background-color: #3598DC;
	color: white;
  }
  .sendButton:hover {
	  background-color: #2980B9;
	  color: white;
  }

	#question-send {
		flex-direction: row-reverse;
	}

	h2 {
		margin-bottom: 20pt;
	}
</style>
