import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    video: z.string().url().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    games: z
      .array(
        z.object({
          name: z.string(),
          description: z.string().optional(),
          link: z.string().url().optional(),
          gallery: z.array(z.string()),
        })
      )
      .optional(),
  }),
});

export const collections = { projects };
