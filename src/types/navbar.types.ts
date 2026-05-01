export interface SearchResult {
  label: string;
  href: string;
  category: string;
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