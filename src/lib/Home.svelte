<script lang="ts">
	import { AnchorButton, Card } from './index';
	import type { PageData } from '../routes/$types';
	import Landing from './Landing.svelte';

	let blog_start: HTMLElement;

	function scrollToBlog() {
		window.scrollTo({
			top: blog_start.offsetTop,
			behavior: 'smooth'
		});
	}

	export let data: PageData;
</script>

<Landing {scrollToBlog} />

<div bind:this={blog_start}></div>

<ul>
	{#each data.posts as post}
		<Card href={'blog/' + post.slug} image_src={post.cover}>
			<svelte:fragment slot="title">{post.title}</svelte:fragment>
		</Card>
	{/each}
</ul>

<AnchorButton href="https://github.com/matthewCmatt" label="View more on my GitHub" ext />
