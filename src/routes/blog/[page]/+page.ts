import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import source from '$lib/posts/teardrop-helix.md?raw';

export const load: PageLoad = ({ params }) => {
	if (params.page === 'teardrop-helix') {
		return {
			source: source
		};
	}
	error(404, 'Post not found');
};
