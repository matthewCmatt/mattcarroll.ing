<script lang="ts">
	import IconExternal from '$lib/assets/icons/IconExternal.svg.svelte';

	interface Props {
		href?: string;
		label: string;
		ext?: boolean;
	}

	let { href = '', label, ext = false }: Props = $props();
</script>

<a {href} class={'hoverable' + (ext ? ' icon' : '')}>
	{label}
	{#if ext}
		<IconExternal />
	{/if}
</a>

<style>
	a {
		display: inline-block;
		border-radius: var(--border-radius);
		padding: 0.6em 1em;
		margin: 0.4em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: var(--color-button-bg);
		color: inherit;
	}

	.icon {
		padding-right: 0.8em;
	}
</style>
