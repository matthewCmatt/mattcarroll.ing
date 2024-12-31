<script lang="ts">
	import AnchorButton from '$lib/AnchorButton.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<h1>{data.meta.title}</h1>
<img src={data.meta.cover} alt={data.meta.cover_alt} class="cover" />
<data.content />
<div class="buttons">
	{#each data.meta.links as button}
		<AnchorButton href={button.href} label={button.label} ext />
	{/each}
</div>

<style>
	.buttons {
		display: flex;
		justify-content: center;
	}

	img.cover {
		background-color: black;
		border-radius: 10px;
	}
</style>
