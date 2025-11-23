import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const i18n = defineCollection({
	loader: glob({ pattern: '*.json', base: 'src/content/i18n' }),
})

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }), i18n
};
