export type Categories = '';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
	cover: URL;
	cover_alt: string;
};
