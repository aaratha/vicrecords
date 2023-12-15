import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const events = await getCollection('events');
	const playlists = await getCollection('playlists');

	const formatItems = (items, path) => items.map((item) => ({
		...item.data,
		link: `/${path}/${item.slug}/`,
	}));

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...formatItems(posts, 'blog'),
			...formatItems(events, 'events'),
			...formatItems(playlists, 'playlists'),
		],
	});
}
