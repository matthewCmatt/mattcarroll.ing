<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import SvelteMarkdown from 'svelte-markdown';
</script>

<main>
	<SvelteMarkdown source={data.source} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
