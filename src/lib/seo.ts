import { routing } from "@/src/i18n/routing";

export const BASE_URL = process.env.BASE_URL || "https://www.nexus-clinic.com";

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, "");

const localizedPath = (locale: string, path: string) => {
  const seg = trimSlashes(path);
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return seg ? `${prefix}/${seg}/` : `${prefix}/`;
};

export function localizedUrl(locale: string, path: string) {
  return `${BASE_URL}${localizedPath(locale, path)}`;
}

export function buildAlternates(locale: string, path: string) {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = localizedUrl(loc, path);
  }
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);

  return {
    canonical: localizedUrl(locale, path),
    languages,
  };
}
