import { defineCollection, z } from "astro:content";

const forge = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			coverImage: image().optional(),
			demoHeight: z.string().default("60vh"),
			demoStyle: z.enum(["embedded", "immersive"]).default("embedded"),
			// Component to render in demo slot (resolved by slug convention)
			demoComponent: z.string().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { forge };
