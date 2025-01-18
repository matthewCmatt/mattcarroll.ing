<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<article class="md">
	{@render children?.()}
</article>

<style>
	.md {
		max-width: 70ch;
	}
</style>
