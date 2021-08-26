<script lang="ts">
	export let title;

</script>

<div class="pad-sides pad-top" style="display: inline-flex; padding-right: 20%; padding-left: 20%;">
	<div>
		<h3>{title}</h3>
		<slot name="text" />
	</div>
	<img class="featuresImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/2048px-Circle_-_black_simple.svg.png" alt="Safety">
</div>

<style>
	.featuresImage {
		height: 20vh;
		width: 20vh;
		display: inline-block;
		padding: 1vh;
	}
	hr {
		width: 90%;
		margin: auto;
	}
</style>