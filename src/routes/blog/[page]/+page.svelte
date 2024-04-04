<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import SvelteMarkdown from 'svelte-markdown';
	const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
    1. And a sublist
    2. That is ordered
        * With another
        * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`;
</script>

<main>
	<h1>
		{data.title}
	</h1>
	<SvelteMarkdown {source} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
