<script>
	import '$lib/css/app.css';
	import '$lib/css/theme.css';
	import '$lib/css/markdown.css';
</script>

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
