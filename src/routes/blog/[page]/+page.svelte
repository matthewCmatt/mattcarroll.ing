<script lang="ts">
	import IconArrowLeft from '$lib/assets/icons/IconArrowLeft.svg.svelte';
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: PageData;
</script>

<div class="full">
	<a href="/" id="home-button">
		<div class="icon">
			<IconArrowLeft />
		</div>
		<div>Home</div>
	</a>
</div>

<div class="md">
	<SvelteMarkdown source={data.source} />
</div>

<style>
	.full {
		margin-top: 5rem;
		width: min(80ch, 100vw);
	}
	.md {
		margin: 5rem 0;
		max-width: 80ch;
	}

	#home-button {
		display: flex;
		gap: 5px;

		cursor: pointer;

		color: inherit;
	}

	#home-button .icon {
		transition: 0.2s;
	}

	#home-button:hover .icon {
		transform: translate(-10px, 0);
	}
</style>
