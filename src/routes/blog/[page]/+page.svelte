<script lang="ts">
	import IconArrowLeft from '$lib/assets/icons/IconArrowLeft.svg.svelte';
	import type { PageData } from './$types';

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

<article class="md">
	<h1>{data.meta.title}</h1>
	<img src={data.meta.cover} alt={data.meta.cover_alt} />
	<svelte:component this={data.content} />
</article>

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
