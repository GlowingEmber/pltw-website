<script lang="ts">
	export let title;
	export let imageURL;

</script>

<div class="pad-sides pad-top" style="display: inline-flex; padding-right: 20%; padding-left: 20%;">
	<div>
		<h3>{title}</h3>
		<slot name="text" />
	</div>
	<img class="featuresImage" src={imageURL} alt="Section Image">
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
	img {
		border-radius: 50%;
	}
</style>