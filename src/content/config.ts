import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		author: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

const events = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		author: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

const playlists = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		playlistURL: z.string(),
	}),
});

export const collections = { blog, events, playlists };
