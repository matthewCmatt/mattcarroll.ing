<script lang="ts">
	import { InlineTransparent, AnchorButton } from './index';
	import IconArrowDown from '$lib/assets/icons/IconArrowDown.svg.svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	export let scrollToBlog: MouseEventHandler<HTMLButtonElement>;
</script>

<div id="landing">
	<div id="title">
		<h1>
			Matt Carroll<InlineTransparent>.ing</InlineTransparent>
		</h1>
		<p>Software Engineer</p>
	</div>
	<div id="buttons">
		<AnchorButton href="https://github.com/matthewCmatt" label="GitHub" ext />
		<AnchorButton href="https://www.linkedin.com/in/matthewcmatt/" label="LinkedIn" ext />
	</div>
	<button id="blog-button" on:click={scrollToBlog}>
		<div>Blog</div>
		<div class="icon">
			<IconArrowDown />
		</div>
	</button>
</div>

<style>
	p {
		margin-bottom: 2em;
	}
	#landing {
		width: 100%;
		display: flex;
		height: 100svh;
		justify-content: space-between;
		align-items: center;
		background: linear-gradient(170deg, rgba(173, 63, 84, 0.5) 0%, rgba(0, 0, 0, 0) 66%);
	}

	#title,
	#buttons {
		margin: 0 10vw;
		margin-bottom: 5rem;
	}

	#blog-button {
		all: unset;

		cursor: pointer;

		display: flex;
		flex-direction: column;

		position: absolute;
		bottom: 3rem;

		left: 50%;
		transform: translate(0, -50%);

		text-align: center;

		color: inherit;
	}

	#blog-button .icon {
		transition: 0.2s;
	}

	#blog-button:hover .icon {
		transform: translate(0, 10px);
	}
</style>
