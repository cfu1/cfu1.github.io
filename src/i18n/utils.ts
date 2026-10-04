import { en, type Dict } from './en';
import { zh } from './zh';

export const languages: Record<'en' | 'zh', Dict> = { en, zh };
export type Lang = keyof typeof languages;

type Leaves<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${Leaves<T[K]>}`;
}[keyof T & string];

export type TranslationKey = Leaves<typeof en>;

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return first === 'zh' ? 'zh' : 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    const value = key
      .split('.')
      .reduce<unknown>(
        (acc, part) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[part] : undefined),
        languages[lang] as unknown,
      );
    return typeof value === 'string' ? value : key;
  };
}

export function getAltPath(pathname: string): string {
  if (pathname === '/zh' || pathname === '/zh/') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3);
  return pathname === '/' ? '/zh/' : `/zh${pathname}`;
}

export function localizePath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  if (path === '/') return '/zh/';
  return `/zh${path}`;
}
