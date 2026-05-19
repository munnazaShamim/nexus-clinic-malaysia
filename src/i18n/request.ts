import { getRequestConfig } from "next-intl/server";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { routing } from "./routing";

// Recursively load every .json under a locale folder into a nested object that
// mirrors the directory layout, so namespaces like "face/botoxMalaysia" can be
// accessed via t("face.botoxMalaysia.…") in next-intl.
async function loadDir(absDir: string): Promise<Record<string, unknown>> {
  let entries;
  try {
    entries = await readdir(absDir, { withFileTypes: true });
  } catch {
    return {};
  }

  const result: Record<string, unknown> = {};
  await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(absDir, entry.name);
      if (entry.isDirectory()) {
        result[entry.name] = await loadDir(full);
      } else if (entry.name.endsWith(".json")) {
        const ns = entry.name.replace(/\.json$/, "");
        try {
          const raw = await readFile(full, "utf-8");
          result[ns] = JSON.parse(raw);
        } catch {
          result[ns] = {};
        }
      }
    })
  );
  return result;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Fill gaps in the requested locale with English copy so a missing translation
// renders the English fallback rather than the raw key.
function deepMerge(
  base: Record<string, unknown>,
  override: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override)) {
    const a = base[key];
    const b = override[key];
    out[key] = isPlainObject(a) && isPlainObject(b) ? deepMerge(a, b) : b;
  }
  return out;
}

export async function loadMessages(locale: string): Promise<Record<string, unknown>> {
  const localesRoot = path.join(process.cwd(), "src/locales");
  const localeMessages = await loadDir(path.join(localesRoot, locale));
  if (locale === "en") return localeMessages;
  const enMessages = await loadDir(path.join(localesRoot, "en"));
  return deepMerge(enMessages, localeMessages);
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }
  const messages = await loadMessages(locale);
  return { locale, messages };
});
