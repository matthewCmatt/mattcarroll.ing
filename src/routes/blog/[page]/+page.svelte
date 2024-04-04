<script lang="ts">
	import IconArrowLeft from '$lib/assets/icons/IconArrowLeft.svg.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import SvelteMarkdown from 'svelte-markdown';
</script>

<a href="/" id="blog-button">
	<div class="icon">
		<IconArrowLeft />
	</div>
	<div>Blog</div>
</a>

<div class="md">
	<SvelteMarkdown source={data.source} />
</div>

<style>
	.md {
		margin: 5rem 0;
		max-width: 80ch;
	}

	a {
		margin-top: 5rem;
		display: flex;
		gap: 5px;
		right: 0px;
	}
</style>
