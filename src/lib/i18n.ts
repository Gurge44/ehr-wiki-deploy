import { getCollection } from 'astro:content';

type TranslationMap = Record<string, string>;

let translations: Record<string, TranslationMap> = {};
const defaultLang = 'en';

export async function loadI18n() {
  const entries = await getCollection('i18n');
  translations = {};

  for (const entry of entries) {
    // entry.id is the filename without extension, e.g. "en", "fr"
    const locale = entry.id;
    translations[locale] = entry.data;
  }

  // console.log('[i18n] Loaded locales:', Object.keys(translations));
}

function lookup(obj: any, parts: string[]): string | undefined {
  return parts.reduce((acc, p) => acc?.[p], obj);
}

export function t(key: string, locale: string = defaultLang): string {
  if (!translations[locale]) {
    // console.warn(`[i18n] Locale "${locale}" not loaded. Falling back to "${defaultLang}".`);
  }

  const parts = key.split('.');
  const value = lookup(translations[locale], parts);

  if (value !== undefined) {
    return value;
  }

  const fallback = lookup(translations[defaultLang], parts);
  if (fallback !== undefined) {
    // console.warn(`[i18n] Missing key "${key}" in locale "${locale}". Using fallback "${defaultLang}".`);
    return fallback;
  }

  // console.error(`[i18n] Key "${key}" not found in locale "${locale}" or fallback "${defaultLang}".`);
  return `${key}`;
}