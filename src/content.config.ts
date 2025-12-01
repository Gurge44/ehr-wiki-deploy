import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { locales, type LocaleKey } from './lib/locales';

const localePatterns: string[] = (Object.keys(locales) as LocaleKey[]).map(
	(key) => `${key}/strings.json`
);

export const collections = {
	docs: defineCollection({
		loader: docsLoader(), schema: docsSchema({
			extend: z.object({
				shortDesc: z.string().optional()
			})
		})
	}),
	i18n: defineCollection({
		loader: glob({ pattern: localePatterns, base: 'src/content/docs/' }),
	})
};
