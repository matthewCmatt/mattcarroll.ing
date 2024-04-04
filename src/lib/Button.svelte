<script lang="ts">
	export let onClick: Function;
</script>

<button on:click={() => onClick()} class="hoverable">
	<slot />
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

	slot {
		margin: auto;
	}
</style>
