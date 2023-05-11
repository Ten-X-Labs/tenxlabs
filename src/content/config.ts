import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    imageSmall: z.string().optional(),
    imageLarge: z.string().optional(),
    class: z.string().optional(),
    cardImage: z.string().optional(),
    logo: z.string().optional(),
    founderName: z.string().optional(),
    companyName: z.string().optional(),
    companyDescription: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  post: post,
};
