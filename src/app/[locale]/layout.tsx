import {
  buildSearchIndex,
  buildIndexFromSitemap,
  deduplicateIndex,
} from '@/src/components/navbar/search/searchUtils';
import { navItems } from '@/src/components/navbar/navData';


import Navbar from "@/src/components/navbar/Navbar";
import { Footer } from "@/src/components/Footer";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const getText = (key: string, fallback: string) => fallback; // server-side, no i18n needed here
  const navIndex = buildSearchIndex(getText, navItems);

  // Sitemap-based entries (blogs + extra pages)
  const sitemapIndex = await buildIndexFromSitemap();

  // Merge and deduplicate
  const searchIndex = deduplicateIndex([...navIndex, ...sitemapIndex]);

  return (
    <>
      <Navbar locale={locale} searchIndex={searchIndex} />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsapp isActive={true} hideOnMobile={false} />
    </>
  );
}