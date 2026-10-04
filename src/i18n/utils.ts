import { en } from './en';
import { zh } from './zh';

export const languages = { en, zh };
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return first === 'zh' ? 'zh' : 'en';
}

export function useTranslations(lang: Lang) {
  const dict = languages[lang] as Record<string, unknown>;
  return function t(key: string): string {
    const value = key
      .split('.')
      .reduce<unknown>((acc, part) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[part] : undefined), dict);
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
