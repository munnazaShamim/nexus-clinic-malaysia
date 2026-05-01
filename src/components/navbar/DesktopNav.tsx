"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import Link from "next/link";
import { NavItem } from "@/src/types/navbar.types";
import { DesktopSearchBox } from "./search/DesktopSearchBox";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavDropdown } from "./NavDropdown";

interface DesktopNavProps {
  isScrolled: boolean;
  navItems: NavItem[];
  activeDropdown: string | null;
  currentLocale?: string;
  getText: (key: string, fallback: string) => string;
  getNavHref: (path: string) => string;
  getLocaleHref: (langCode: string) => string;
  handleLangClick: (langCode: string) => void;
  handleMouseEnter: (label: string) => void;
  handleMouseLeave: () => void;
  onDropdownItemClick: () => void;
  searchIndex: any[];
  isBlogsPage: boolean;
}

export const DesktopNav = ({
  isScrolled,
  navItems,
  activeDropdown,
  currentLocale,
  getText,
  getNavHref,
  getLocaleHref,
  handleLangClick,
  handleMouseEnter,
  handleMouseLeave,
  onDropdownItemClick,
  searchIndex,
  isBlogsPage,
}: DesktopNavProps) => {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.submenu ? undefined : getNavHref(item.href)}
            className={`group flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-inter font-medium transition-all duration-300 cursor-pointer ${
              isScrolled
                ? activeDropdown === item.label
                  ? "bg-wine/10 text-wine"
                  : "text-brown hover:text-wine hover:bg-cream"
                : activeDropdown === item.label
                ? "bg-light/20 text-wine"
                : "text-wine/90 hover:bg-light/10"
            }`}
          >
            <span>{getText(item.label, item.fallback)}</span>
            {item.submenu && (
              <motion.div
                animate={{
                  rotate: activeDropdown === item.label ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            )}
          </a>

          <NavDropdown
            item={item}
            activeDropdown={activeDropdown}
            getText={getText}
            getNavHref={getNavHref}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            onItemClick={onDropdownItemClick} 
          />
        </div>
      ))}

      {/* Desktop Search */}
      <div className="ml-2">
        <DesktopSearchBox
          isScrolled={isScrolled}
          locale={currentLocale}
          getText={getText}
          searchIndex={searchIndex}
        />
      </div>

      {/* Language Selector - Hide on blogs page for now on all */}
      {/* {!isBlogsPage && (
        <LanguageSwitcher
          isScrolled={isScrolled}
          currentLocale={currentLocale}
          getText={getText}
          getLocaleHref={getLocaleHref}
          handleLangClick={handleLangClick}
        />
      )} */}

      {/* CTA */}
      <Link
        href={getNavHref("/contact-us/")}
        className="ml-4 bg-green text-light px-6 py-2.5 rounded-full font-inter font-semibold text-sm shadow-lg 
        shadow-green/20 hover:bg-green/90 transition-all duration-300 flex items-center justiy-center gap-2 hover:shadow-green/30
         hover:scale-105"
      >
        <Calendar size={16} />
        <span>{getText("nav.bookNow", "Book Now")}</span>
      </Link>
    </nav>
  );
};