<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div>
	{@render children?.()}
</div>

<style>
	div {
		position: absolute;
		display: inline;
		opacity: 50%;
		background: -webkit-linear-gradient(var(--color-a-hover), var(--color-a));
		background-clip: text;
		color: rgba(0, 0, 0, 0);
		user-select: none;
	}

	@media (prefers-color-scheme: light) {
		div {
			opacity: 70%;
		}
	}
</style>
