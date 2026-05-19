export const fallbackLng = "en";
// export const languages = ["en", "id", "ar", "ms", "zh"];
export const languages = ["en"];

export const defaultNS = "common";

export const languageNames: Record<string, string> = {
  en: "English",
  id: "Indonesia",
  ar: "العربية",
  ms: "Melayu",
  zh: "中文",
};

export const languageFlags: Record<string, string> = {
  en: "🇺🇸",
  id: "🇮🇩",
  ar: "🇸🇦",
  ms: "🇲🇾",
  zh: "🇨🇳",
};

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
