<script lang="ts">
	import IconExternal from '$lib/assets/icons/IconExternal.svg.svelte';

	export let href = '';
	export let label: string;
	export let ext = false;
</script>

<a {href} class="hoverable">
	{label}
	{#if ext}
		<IconExternal />
	{/if}
</a>

<style>
	a {
		display: inline-block;
		border-radius: var(--border-radius);
		padding: 0.6em 1.2em;
		margin: 0.4em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: var(--color-button-bg);
		color: inherit;
	}
</style>
