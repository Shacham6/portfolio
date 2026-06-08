import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
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
          thumbnail: z.string().optional(),
          description: z.string().optional(),
          link: z.string().url().optional(),
          gallery: z.array(z.string()),
        })
      )
      .optional(),
  }),
});

export const collections = { projects };
