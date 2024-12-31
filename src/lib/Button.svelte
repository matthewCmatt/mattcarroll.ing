<script lang="ts">
	interface Props {
		onClick: Function;
		children?: import('svelte').Snippet;
	}

	let { onClick, children }: Props = $props();
</script>

<button onclick={() => onClick()} class="hoverable">
	{@render children?.()}
</button>

<style>
	button {
		display: flex;
		height: 100%;
		width: 100%;
		border-radius: var(--border-radius);
		font-weight: 500;
		font-family: inherit;
		background-color: var(--color-button-bg);
	}
</style>
