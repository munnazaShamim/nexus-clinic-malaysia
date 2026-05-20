// Known search categories. The `(string & {})` member keeps editor autocomplete
// for the known values while still accepting any string (e.g. categories derived
// dynamically from the sitemap or nav submenu keys), so assignments never break.
export type SearchCategory =
  | 'weightLoss'
  | 'skin'
  | 'face'
  | 'hair'
  | 'regenerative'
  | 'blog'
  | 'page'
  | 'doctors'
  | (string & {});

export interface SearchResult {
  label: string;
  href: string;
  category: SearchCategory;
}

export interface CategoryLabel {
  key: string;
  fallback: string;
}

export interface NavSubItem {
  key: string;
  fallback: string;
}

export interface SubmenuCategory {
  label?: string;
  fallback?: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  fallback: string;
  href: string;
  submenu?: Record<string, SubmenuCategory>;
}

export interface Language {
  code: string;
  label: string;
  flag: string;
}