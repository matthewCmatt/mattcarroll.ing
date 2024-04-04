<script lang="ts">
	import { InlineTransparent, AnchorButton, Card } from './index';
	import IconArrowDown from '$lib/assets/icons/IconArrowDown.svg.svelte';

	import teardrop from '$lib/assets/images/teardrop.png';
	import plentyophish from '$lib/assets/images/plentyophish.png';
	import internetofpings from '$lib/assets/images/internetofpings.png';
	import airou from '$lib/assets/images/airou.png';

	let blog_start: HTMLElement;

	function scrollToBlog() {
		blog_start.scrollIntoView(true);
	}
</script>

<main>
	<div id="landing">
		<div id="title">
			<h1>
				Matt Carroll<InlineTransparent>.ing</InlineTransparent>
			</h1>
			<p>Computer Science Undergraduate at the University of Oklahoma</p>
		</div>
		<div id="buttons">
			<AnchorButton href="https://github.com/matthewCmatt" label="GitHub" ext />
			<AnchorButton
				href="https://www.linkedin.com/in/matthew-carroll-ab9129182/"
				label="LinkedIn"
				ext
			/>
		</div>
		<button id="blog-button" on:click={scrollToBlog}>
			<div>Blog</div>
			<div class="icon">
				<IconArrowDown />
			</div>
		</button>
	</div>

	<div bind:this={blog_start} />

	<Card href="/blog/teardrop-helix" image_src={teardrop}>
		<svelte:fragment slot="title">Python: Teardrop Helix</svelte:fragment>
		<AnchorButton href="https://github.com/matthewCmatt/teardrop-helix" label="Source Code" ext />
	</Card>

	<Card href="/blog/plenty-o-phish" image_src={plentyophish}>
		<svelte:fragment slot="title">Hacklahoma 2022: PlentyO'Phish</svelte:fragment>
		<p>
			Winning the 1st place prize for Hacklahoma 2022, our project, Plenty o' Phish, was a game
			centered around writing phishing emails.
		</p>
		<AnchorButton href="https://plentyophish.tauser.us/" label="Hosted Site" ext />
		<AnchorButton href="https://devpost.com/software/plenty-o-phish" label="DevPost" ext />
	</Card>

	<Card href="/blog/teardrop-helix" image_src={airou}>
		<svelte:fragment slot="title">AIROU Lab Site</svelte:fragment>
		<p>
			I redesigned the site for my robotics lab at the University of Oklahoma from scratch using
			Eleventy SSG, Nunjucks templating, and vanilla CSS.
		</p>
		<AnchorButton href="https://ou.edu/airou" label="Hosted Site" ext />
		<AnchorButton href="https://github.com/airou-lab/website" label="Source Code" ext />
	</Card>

	<Card href="/blog/teardrop-helix" image_src={internetofpings}>
		<svelte:fragment slot="title">Hacklahoma 2024: Internet of Pings</svelte:fragment>

		<p>
			For Hacklahoma 2024, I worked to create a browser-based network simulator and learning tool
			with the goal of teaching the OSI model.
		</p>
		<AnchorButton href="https://internetofpings.study/" label="Hosted Site" ext />
		<AnchorButton href="https://devpost.com/software/internet-of-pings" label="DevPost" ext />
	</Card>

	<AnchorButton href="https://github.com/matthewCmatt" label="View more on my GitHub" ext
	></AnchorButton>
</main>

<style>
	p {
		margin-bottom: 2em;
	}

	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 8rem;
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
