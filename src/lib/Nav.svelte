<script lang="ts">
	export let page: string;
</script>

<span class="menu-container blur">
	<div id="menu" class="pad-sides">
		<a sveltekit:prefetch href="/">
			<h3 class:active-page={page === ''} class="text-margin-right inline weight-normal">
				Home
			</h3>
		</a>
		<a href="/resources">
			<h3 class:active-page={page === 'resources'} class="text-margin-right inline weight-normal">
				Resources
			</h3>
		</a>

		<a href="/wip">
			<h3 class:active-page={page === 'wip'} class="text-margin-right inline weight-normal">
				Work in Progress
			</h3>
		</a>

		<a href="/blog">
			<h3 class:active-page={page === 'blog'} class="text-margin-right inline weight-normal">
				Blog
			</h3>
		</a>

		<a href="/projects">
			<h3 class:active-page={page === 'projects'} class="text-margin-right inline weight-normal">
				Projects
			</h3>
		</a>
	</div>
</span>

<style>
	#menu {
		padding-top: 1rem;
		padding-bottom: 1rem;
		/* Disable selection */
		-webkit-touch-callout: none; /* iOS Safari */
    	-webkit-user-select: none; /* Safari */
     	-khtml-user-select: none; /* Konqueror HTML */
       	-moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
	}
	.active-page {
		text-decoration: underline;
		text-decoration-color: var(--color-primary);
	}
	.menu-container {
		position: fixed;
		top: 0;
		z-index: 100;
		border-bottom: 1px solid rgb(224, 224, 224);
	}
</style>
