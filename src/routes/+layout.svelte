<script>
	import '$lib/style/theme.css';
	import '$lib/style/app.css';
	import '$lib/style/markdown.css';
</script>

<svelte:head>
	<title>Matt Carroll</title>
</svelte:head>
<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
