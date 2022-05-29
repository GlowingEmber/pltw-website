<script lang="ts">
	import Nav from '../lib/Nav.svelte';
	import Footer from '../lib/Footer.svelte';

	import { page, navigating } from '$app/stores';

	$: section = $page.url.pathname.split('/')[1];
</script>

<Nav page={section} />
<slot />

<Footer />
