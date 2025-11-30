import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { locales, type LocaleKey } from './lib/locales';

const localePatterns: string[] = (Object.keys(locales) as LocaleKey[]).map(
  (key) => `${key}/${key}.json`
);

const i18n = defineCollection({
	loader: glob({ pattern: localePatterns, base: 'src/content/docs/' }),
})

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }), i18n
};
