<script>
	let description = "PLTW Engineering Student";
	function changeVar(changed) {
		description = changed;
	}
</script>
<div id="hero" class="align-center">
	<div class="pad-sides">
		<div class="titled">
			<div>
				<h1>Ethan Hopkins</h1>
				<h2 class="weight-normal">{description}</h2>
        <br>
        <p>ethan.e.hopkins@gmail.com</p>
        <p>+1 (310) 634-2465</p>
        <br>
				<div class='scrolldown' style="--color:black">
					<div class="downComponentss">
					  <div class='downComponentsdown'></div>
					</div>
        <br>
        <br>
		
			</div>
			</div>
			
			  
			  
		</div>
		
	</div>
</div>

<style>
  /* 
  button {
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--color-primary);
  text-align: center;
  font-family: 'Rubik', sans-serif;
}

button:nth-child(2) {
  float: right;
  text-align: left;
}

button > * {
  width: unset;
  display: inline;
}

button:hover {
  filter: brightness(85%);
  cursor: pointer;
}
*/
 
  button {
  border: none;
  border-radius: 3px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 200px;
  font-size: 2vh;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  }
  .questionButton {
    background-color: #3598DC;
    color: white;
  }
  .questionButton:hover {
    background-color: #2980B9;
    color: white;
  }

/* 
button {
  font-size: 20px;
	display: inline-block;
	text-align: center;
  padding: 16px 32px;
	margin: 4px 2px;
	width: 15vw;
  text-decoration: none;
  color: #67c5ff;
  border: dashed 3px #67c5ff;
  border-radius: 3px;
  transition: .7s;
	font-family: 'Rubik', sans-serif;
  }
  .questionButton:hover, .sendButton:hover {
	  background: #67c5ff;
	  color: #FFF;
  }
*/
	.imageContainer {
		/* margin-top: 5vh; */
	}
	.featuresImage {
		height: 20vh;
		width: 20vh;
		display: inline-block;
		padding: 1vh;
	}
	.titled {
		height: 100%;
		align-items: center;
		display: inline-flex;
	}
	#hero {
		height: 70vh;
  background: linear-gradient(-45deg, rgb(255, 145, 125), rgb(255, 174, 174), rgb(255, 174, 174)); 
	  background-size: 400% 400%;
	  animation: gradient 15s ease infinite;
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
  @keyframes gradient {
	  0% {
		  background-position: 0% 50%;
	  }
	  50% {
		  background-position: 100% 50%;
	  }
	  100% {
		  background-position: 0% 50%;
	  }
  }
.scrolldown {
bottom: 40vh;
  --color: white;
  --sizeX: 30px;
  --sizeY: 50px;
  position: absolute;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 0;
}

.scrolldown::before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  /* ox-shadow: 0px -5px 3px 1px #ffffff66; */
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 7px;
  }
  40% {
    opacity: 1;
    height: 7px;
  }
  80% {
    transform: translate(0, 20px);
    height: 7px;
    opacity: 0;
  }
  100% {
    height: 7px;
    opacity: 0;
  }
}
.downComponentss {
  padding: 12px 0 12px 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.downComponentsdown {
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}
.downComponentsdown:nth-child(odd) {
  animation: pulse 500ms ease infinite alternate;
}
.downComponentsdown:nth-child(even) {
  animation: pulse 500ms ease infinite alternate 250ms;
}
@keyframes pulse {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}

</style>
