import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const load: PageLoad = ({ params }) => {
	if (params.page === 'hello-world') {
		return {
			title: 'Hello world!',
			source: 'source'
		};
	}
	error(404, 'Not found');
};
