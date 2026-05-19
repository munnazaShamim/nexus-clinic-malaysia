"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

import "@/src/lib/vibration.css";
import { TopBar } from "./TopBar";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { navItems } from "./navData";
import { buildSearchIndex } from "./search/searchUtils";
import { SearchResult } from "@/src/types/navbar.types";

const Navbar = ({ locale }: { locale?: string }) => {
  const { t: tFallback, i18n } = useTranslation('common');
  const t = useMemo(
    () => (typeof i18n.getFixedT === 'function' ? i18n.getFixedT(locale || 'en', 'common') : tFallback),
    [locale, i18n]
  );
  
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBlogsPage, setIsBlogsPage] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locale);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname() ?? "/";

  // Check if current page is blogs page
  useEffect(() => {
    const isBlogs = pathname.includes('/blogs/');
    setIsBlogsPage(isBlogs);
    
    if (isBlogs) {
      setCurrentLocale('en');
    } else {
      setCurrentLocale(locale);
    }
  }, [pathname, locale]);

  const getText = useCallback((key: string, fallback: string) => {
    if (isBlogsPage) {
      return fallback;
    }
    const translated = t(key);
    return translated === key ? fallback : translated;
  }, [isBlogsPage, t]);

  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([]);

  useEffect(() => {
    const newSearchIndex = buildSearchIndex(getText, navItems);
    setSearchIndex(newSearchIndex);
  }, [getText]);

  const getLocaleHref = useCallback((langCode: string) => {
    if (isBlogsPage || pathname.includes('/blogs/')) {
      return '/blogs/';
    }
    
    const localePrefixRegex = /^\/(id|ar|ms|zh)(\/|$)/;
    const hasPrefixMatch = pathname.match(localePrefixRegex);
    
    let basePath = pathname;
    
    if (hasPrefixMatch) {
      basePath = pathname.replace(localePrefixRegex, "/");
    } else {
      basePath = pathname;
    }
    
    const cleanPath = basePath === "" || basePath === "/" ? "/" : basePath;
    
    if (langCode === "en") {
      return cleanPath;
    }
    
    return cleanPath === "/" ? `/${langCode}` : `/${langCode}${cleanPath}`;
  }, [pathname, isBlogsPage]);

  const handleLangClick = useCallback((langCode: string) => {
    document.cookie = `i18next=${langCode}; path=/; max-age=31536000; SameSite=Lax`;
    
    const newHref = getLocaleHref(langCode);
    
    const currentLang = currentLocale || 'en';
    if (langCode === currentLang && newHref === pathname) {
      return;
    }
    
    setTimeout(() => {
      window.location.href = newHref;
    }, 50);
  }, [getLocaleHref, currentLocale, pathname]);

  const getNavHref = useCallback((path: string) => {
    if (path === '/blogs/' || path === '/blogs/' || path.startsWith('/blogs/')) {
      return '/blogs/';
    }
    
    if (isBlogsPage) {
      return path;
    }

    if (!currentLocale || currentLocale === "en") return path;
    
    return `/${currentLocale}${path}`;
  }, [currentLocale, isBlogsPage]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const handleDropdownItemClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-light/95 backdrop-blur-xl shadow-lg shadow-brown/5 mt-4 md:mt-0"
            : "bg-transparent"
        }`}
      >
        <TopBar isScrolled={isScrolled} getText={getText} />

        {/* Main Nav */}
        {!isScrolled && (
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 bg-white">
            <div className="flex items-center justify-between md:justify-center h-16 lg:h-20 gap-3 mt-16 mx-auto">
              {/* Logo */}
              <Link
                href={getNavHref("/")}
                className="shrink-0 relative z-10 overflow-hidden transition-transform duration-200 hover:translate-x-1"
              >
                <Image
                  src="/images/logo.webp"
                  alt="Nexus Clinic Logo"
                  width={150}
                  height={150}
                  loading="lazy"
                  className="h-full w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <DesktopNav
                isScrolled={isScrolled}
                navItems={navItems}
                activeDropdown={activeDropdown}
                currentLocale={currentLocale}
                getText={getText}
                getNavHref={getNavHref}
                getLocaleHref={getLocaleHref}
                handleLangClick={handleLangClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                onDropdownItemClick={handleDropdownItemClick}
                searchIndex={searchIndex}
                isBlogsPage={isBlogsPage}
              />

              {/* Mobile Navigation */}
              <MobileNav
                isScrolled={isScrolled}
                currentLocale={currentLocale}
                getText={getText}
                getNavHref={getNavHref}
                getLocaleHref={getLocaleHref}
                handleLangClick={handleLangClick}
                searchIndex={searchIndex}
                isBlogsPage={isBlogsPage}
                navItems={navItems}
              />
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className={`${isScrolled ? "h-16 lg:h-20" : "h-16 lg:h-28"}`} />
    </>
  );
};

export default Navbar;