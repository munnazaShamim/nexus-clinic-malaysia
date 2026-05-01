import { SearchResult } from '@/src/types/navbar.types';

export const getCategoryPath = (category: string): string => {
  const mapping: Record<string, string> = {
    weightLoss: 'weight-loss',
  };
  return mapping[category] || category;
};

export const buildSearchIndex = (
  getText: (key: string, fallback: string) => string,
  navItems: any[]
): SearchResult[] => {
  const results: SearchResult[] = [];
  navItems.forEach((item) => {
    if (item.submenu) {
      Object.entries(item.submenu).forEach(([category, categoryData]: [string, any]) => {
        categoryData.items.forEach((subItem: { key: string; fallback: string }) => {
          results.push({
            label: getText(subItem.key, subItem.fallback),
            href: `/${getCategoryPath(category)}/${subItem.fallback}/`,
            category: category,
          });
        });
      });
    } else if (item.href && item.href !== "#") {
      results.push({
        label: getText(item.label, item.fallback),
        href: item.href,
        category: "page"
      });
    }
  });
  return results;
};

export const highlightMatch = (text: string, query: string) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-wine font-semibold">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
};