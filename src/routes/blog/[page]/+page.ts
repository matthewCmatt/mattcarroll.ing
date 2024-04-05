import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import fm from 'front-matter';

import source from '$lib/posts/teardrop-helix.md?raw';

let content = fm(source);
console.log(content);

export const load: PageLoad = ({ params }) => {
	if (params.page === 'teardrop-helix') {
		return {
			title: content.attributes,
			source: content.body
		};
	}
	error(404, 'Post not found');
};
