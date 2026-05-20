import { SearchResult, SearchCategory } from '@/src/types/navbar.types';

export const getCategoryPath = (category: string): string => {
  const mapping: Record<string, string> = {
    weightLoss: 'weight-loss',
  };
  return mapping[category] || category;
};

// Convert a URL slug into a readable title
// "acne-scar-treatment-malaysia" → "Acne Scar Treatment Malaysia"
export const slugToTitle = (slug: string): string => {
  return slug
    .replace(/-malaysia$/, '') // strip trailing "-malaysia"
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
};

// Derive category from a sitemap URL path
const getCategoryFromPath = (path: string): SearchCategory => {
  if (path.startsWith('/blogs/')) return 'blog';
  if (path.startsWith('/weight-loss/')) return 'weightLoss';
  if (path.startsWith('/face/')) return 'face';
  if (path.startsWith('/hair/')) return 'hair';
  if (path.startsWith('/skin/')) return 'skin';
  if (path.startsWith('/regenerative/')) return 'regenerative';
  if (path.startsWith('/doctors/')) return 'doctors';
  return 'page';
};

// Static extra pages from sitemap that aren't in navItems
const STATIC_PAGES: SearchResult[] = [
  { label: 'About Us', href: '/about-us/', category: 'page' },
  { label: 'Contact Us', href: '/contact-us/', category: 'page' },
  { label: 'Consultation', href: '/consultation/', category: 'page' },
  { label: 'Awards and Certifications', href: '/awards-and-certifications/', category: 'page' },
  { label: 'Fractional Laser Resurfacing', href: '/fraqtional-laser-resurfacing/', category: 'page' },
  { label: 'Face Treatments', href: '/face/', category: 'face' },
  { label: 'Hair Treatments', href: '/hair/', category: 'hair' },
  { label: 'Skin Treatments', href: '/skin/', category: 'skin' },
  { label: 'Regenerative Treatments', href: '/regenerative/', category: 'regenerative' },
];

// Parse sitemap XML and return SearchResult[]
export const buildIndexFromSitemap = async (): Promise<SearchResult[]> => {
  try {
    const res = await fetch('https://www.nexus-clinic.com/sitemap.xml', {
      next: { revalidate: 3600 }, // cache 1 hour (Next.js App Router)
    });
    const xml = await res.text();

    // Extract all <loc> values
    const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

    const results: SearchResult[] = [];

    for (const loc of locs) {
      const url = new URL(loc);
      const path = url.pathname;

      // Skip homepage and bare category pages already in navItems
      if (path === '/') continue;

      const category = getCategoryFromPath(path);
      const segments = path.replace(/^\/|\/$/g, '').split('/');
      const lastSegment = segments[segments.length - 1];

      // Blogs: slug becomes the label
      if (category === 'blog') {
        // skip low-quality auto-generated slugs like "25597-2"
        if (/^\d/.test(lastSegment)) continue;

        results.push({
          label: slugToTitle(lastSegment),
          href: path,
          category: 'blog',
        });
        continue;
      }

      // Treatment sub-pages (e.g. /face/botox-malaysia/)
      if (segments.length === 2) {
        results.push({
          label: slugToTitle(lastSegment),
          href: path,
          category,
        });
      }
    }

    return results;
  } catch (e) {
    console.error('Failed to build sitemap index:', e);
    return [];
  }
};

// Main builder — merges navItems + sitemap + static pages
export const buildSearchIndex = (
  getText: (key: string, fallback: string) => string,
  navItems: any[]
): SearchResult[] => {
  const results: SearchResult[] = [];

  // 1. Nav submenu items (existing logic)
  navItems.forEach((item) => {
    if (item.submenu) {
      Object.entries(item.submenu).forEach(([category, categoryData]: [string, any]) => {
        categoryData.items.forEach((subItem: { key: string; fallback: string }) => {
          results.push({
            label: getText(subItem.key, subItem.fallback),
            href: `/${getCategoryPath(category)}/${subItem.fallback}/`,
            category,
          });
        });
      });
    } else if (item.href && item.href !== '#') {
      results.push({
        label: getText(item.label, item.fallback),
        href: item.href,
        category: 'page',
      });
    }
  });

  // 2. Static extra pages
  results.push(...STATIC_PAGES);

  return results;
};

// Deduplicate by href
export const deduplicateIndex = (index: SearchResult[]): SearchResult[] => {
  const seen = new Set<string>();
  return index.filter(({ href }) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
};

export const getHighlightedText = (text: string, query: string): string => {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    text.slice(0, idx) +
    '{{HIGHLIGHT_START}}' +
    text.slice(idx, idx + query.length) +
    '{{HIGHLIGHT_END}}' +
    text.slice(idx + query.length)
  );
};