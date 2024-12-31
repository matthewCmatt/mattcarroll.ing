<script lang="ts">
	import IconArrowLeft from '$lib/assets/icons/IconArrowLeft.svg.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="full">
	<a href="/" id="home-button">
		<div class="icon">
			<IconArrowLeft />
		</div>
		<div>Home</div>
	</a>
</div>

<article class="md">
	{@render children?.()}
</article>

<style>
	#home-button {
		display: flex;
		gap: 5px;
		cursor: pointer;
		color: inherit;
	}
	#home-button .icon {
		transition: 0.2s;
	}

	#home-button:hover .icon {
		transform: translate(-10px, 0);
	}
	.full {
		margin-top: 5rem;
		width: min(80ch, 100vw);
	}
	.md {
		max-width: 80ch;
	}
</style>
