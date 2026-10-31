import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Pages live in src/docs/ and are served under /docs/.
export const collections = {
  docs: defineCollection({
    loader: glob({
      base: './src/docs',
      pattern: '**/*.{md,mdx}',
      generateId: ({ entry }) =>
        ('docs/' + entry.replace(/\.mdx?$/, '')).replace(/\/index$/, ''),
    }),
    schema: docsSchema(),
  }),
};
