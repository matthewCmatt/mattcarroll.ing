<script lang="ts">
	export let image_src: URL;
	export let image_alt = '';
	export let href = '';
</script>

<a {href} class="card hoverable">
	<img class="cover" src={image_src.toString()} alt={image_alt} />
	<h2>
		<slot name="title">No Title was provided</slot>
	</h2>
</a>

<style>
	.card {
		--offset: max(1em, var(--border-radius));

		width: 50em;

		color: inherit;
		background-color: var(--color-card-bg);
		border-radius: var(--border-radius);
		font-family: inherit;

		overflow: hidden;

		padding: var(--offset);
		margin: 1.5em;

		transition: 0.25s;

		text-align: center;

		display: block;
	}

	.card:hover {
		box-shadow: 0px 2px 10px 10px rgba(0, 0, 0, 0.2);
	}

	a h2 {
		font-size: 1.6rem;
	}

	.cover {
		width: calc(100% + 2 * var(--offset));
		margin-left: calc(-1 * var(--offset));
		margin-top: calc(-1 * var(--offset));
		object-fit: cover;
		aspect-ratio: 3 / 2;
	}
</style>
