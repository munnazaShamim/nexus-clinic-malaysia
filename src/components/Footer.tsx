"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "@/src/i18n/navigation";
import SocialIcons from "@/src/components/SocialIcons";
import Image from "next/image";

export const Footer = () => {
  // Footer copy lives at common.footer.* inside common.json
  const t = useTranslations('common.footer');
  const activeLocale = useLocale();

  const [isBlogsPage, setIsBlogsPage] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<string>(activeLocale);

  // next-intl's usePathname returns the path WITHOUT the locale prefix.
  const pathname = usePathname() ?? "/";

  // Blogs routes live outside [locale], so detect via the real browser URL.
  useEffect(() => {
    const fullPath = typeof window !== 'undefined' ? window.location.pathname : pathname;
    const isBlogs = fullPath.includes('/blogs/');
    setIsBlogsPage(isBlogs);
    setCurrentLocale(isBlogs ? 'en' : activeLocale);
  }, [pathname, activeLocale]);

  // On blogs pages, force the English fallback so copy doesn't leak between locales.
  const getText = useCallback((key: string, fallback: string) => {
    if (isBlogsPage) return fallback;
    try {
      const translated = t(key);
      return translated === key ? fallback : translated;
    } catch {
      return fallback;
    }
  }, [isBlogsPage, t]);

  const getNavHref = (path: string) => {
    if (path.startsWith('/blogs/')) return '/blogs/';
    if (!currentLocale || currentLocale === "en") return path;
    return `/${currentLocale}${path}`;
  };

  const quickLinks = [
    { label: getText("aboutUs", "About Us"), href: "/about-us/" },
    { label: getText("services", "Doctors"), href: "/doctors/" },
    { label: getText("treatments", "Gallery"), href: "/gallery/" },
    { label: getText("blog", "Blog"), href: "/blogs/" },
    { label: getText("contact", "Contact"), href: "/contact-us/" },
  ];

  const legalLinks = [
    { label: getText("privacyPolicy", "Privacy Policy"), href: "/privacy-policy/" },
    { label: getText("termsOfUse", "Terms of Use"), href: "/terms-of-use/" },
  ];

  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl mb-6 block font-georgia text-brown">
              <Image
                src="/images/logo.webp"
                alt="Nexus Clinic Logo"
                width={200}
                height={200}
                loading="lazy"
                className="w-auto"
              />
            </span>
            <p className="max-w-md mb-6 text-taupe">
              {getText("description", "LCP Certified and MOH Registered aesthetic and medical weight loss clinic in Kuala Lumpur, combining science-backed treatments with artistic precision for natural-looking results.")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">{getText("quickLinks", "Quick Links")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={getNavHref(link.href)}
                    whileHover={{ x: 5 }}
                    className="inline-block text-taupe hover:text-wine transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">{getText("contactTitle", "Contact")}</h4>
            <ul className="space-y-3 text-taupe">
              <li><a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Nexus Clinic Wisma UOA 2 Kuala Lumpur")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wine cursor-pointer transition-colors"
                >
                  {getText("address", "LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia")}
                </a></li>
              <li>
                <a
                  href={`tel:${getText("phone", "+016-774 5699").replace(/\s/g, '')}`}
                  className="hover:text-wine cursor-pointer transition-colors"
                >
                  {getText("phone", "+016‑774 5699")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${getText("email", "contact@nexus-clinic.com")}`}
                  className="hover:text-wine cursor-pointer transition-colors"
                >
                  {getText("email", "contact@nexus-clinic.com")}
                </a>
              </li>
            </ul>
            <SocialIcons variant="light" iconSize={18} />
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-taupe/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-taupe">
            {getText("copyright", "© 2026 Aesthetics & Skin Care Clinic Near Me | ⁠ ⁠⁠Mozart Simfoni Sdn Bhd | Powered by ")}
            <a href="http://daikimedia.com/"  target="_blank" >  <strong className="italic text-wine">  Daikimedia</strong></a>
          </p>

          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={getNavHref(link.href)}
                className="text-sm text-taupe hover:text-wine transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};