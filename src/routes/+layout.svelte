<script lang="ts">
	import '$lib/style/theme.css';
	import '$lib/style/app.css';
	import '$lib/style/markdown.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Matt Carroll</title>
</svelte:head>

<main>
	{@render children?.()}
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;
	}
</style>
