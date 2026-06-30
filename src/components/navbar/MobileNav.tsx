"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { NavItem } from "@/src/types/navbar.types";
import { categoryLabels, languages } from "./navData";
import { MobileSearchBox } from "./search/MobileSearchBox";

interface MobileNavProps {
  isScrolled: boolean;
  currentLocale?: string;
  getText: (key: string, fallback: string) => string;
  getNavHref: (path: string) => string;
  getLocaleHref: (langCode: string) => string;
  handleLangClick: (langCode: string) => void;
  searchIndex: any[];
  isBlogsPage: boolean;
  navItems: NavItem[];
}

const getCategoryPath = (category: string): string => {
  const mapping: Record<string, string> = {
    weightLoss: 'weight-loss',
  };
  return mapping[category] || category;
};

export const MobileNav = ({
  isScrolled,
  currentLocale,
  getText,
  getNavHref,
  getLocaleHref,
  handleLangClick,
  searchIndex,
  isBlogsPage,
  navItems,
}: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
    setIsMenuOpen(false);
    setMobileSubmenu(null);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileSubmenu(null);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Actions */}
      <div className="flex items-center gap-1 ml-auto">
        <AnimatePresence mode="wait">
          {isMobileSearchOpen ? (
            <motion.div
              key="search-open"
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "right center" }}
              className="w-full"
            >
              <MobileSearchBox
                isScrolled={isScrolled}
                onClose={closeMobileSearch}
                locale={currentLocale}
                getText={getText}
                searchIndex={searchIndex}
              />
            </motion.div>
          ) : (
            <motion.div
              key="icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1"
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={openMobileSearch}
                className={`p-2.5 rounded-full transition-colors ${
                  isScrolled
                    ? "text-brown hover:bg-cream"
                    : "text-brown hover:bg-light/10"
                }`}
                aria-label="Open search"
              >
                <Search size={20} aria-hidden={true} />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className={`p-2.5 mr-4 rounded-full transition-colors ${
                  isScrolled
                    ? "text-brown hover:bg-cream"
                    : "text-brown hover:bg-light/10"
                }`}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      aria-hidden={true}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      aria-hidden={true}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="bg-light border-t border-cream shadow-xl shadow-brown/10 absolute top-full left-0 right-0"
          >
            <div className="max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    {item.submenu ? (
                      <>
                        <div
                          className={`w-full max-w-[93%] flex items-center rounded-xl transition-all duration-200 ${
                            mobileSubmenu === item.label
                              ? "bg-cream text-wine"
                              : "text-brown hover:bg-cream/50"
                          }`}
                        >
                          {item.href && item.href !== "#" ? (
                            <Link
                              href={getNavHref(item.href)}
                              className="flex-1 py-3.5 pl-4 font-inter font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {getText(item.label, item.fallback)}
                            </Link>
                          ) : (
                            <span className="flex-1 py-3.5 pl-4 font-inter font-medium">
                              {getText(item.label, item.fallback)}
                            </span>
                          )}
                          <button
                            onClick={() =>
                              setMobileSubmenu(
                                mobileSubmenu === item.label ? null : item.label
                              )
                            }
                            className="py-3.5 px-4 flex items-center"
                            aria-label={`${mobileSubmenu === item.label ? "Collapse" : "Expand"} ${getText(item.label, item.fallback)} submenu`}
                          >
                            <motion.div
                              animate={{
                                rotate: mobileSubmenu === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              aria-hidden={true}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-cream/30 rounded-xl mt-2 mb-3 p-4 space-y-6">
                                {Object.entries(item.submenu).map(
                                  ([category, categoryData]: [string, any], catIdx) => (
                                    <motion.div
                                      key={category}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: catIdx * 0.05 }}
                                    >
                                      <div className="flex items-center gap-2 mb-3">
                                        <h5 className="text-wine font-georgia font-semibold text-sm">
                                          {getText(
                                            categoryData.label ||
                                              categoryLabels[category]?.key ||
                                              category,
                                            categoryData.fallback ||
                                              categoryLabels[category]?.fallback ||
                                              category
                                          )}
                                        </h5>
                                      </div>
                                      <div className="grid grid-cols-1 gap-1">
                                        {categoryData.items.map(
                                          (subItem: { key: string; fallback: string }, idx: number) => (
                                            <Link
                                              key={idx}
                                              href={getNavHref(
                                                `/${getCategoryPath(category)}/${subItem.fallback}/`
                                              )}
                                              className="text-taupe hover:text-wine text-sm py-2.5 px-3 rounded-lg hover:bg-light transition-all duration-200 flex items-center gap-2"
                                              onClick={() => setIsMenuOpen(false)}
                                            >
                                              <span className="w-1.5 h-1.5 rounded-full bg-taupe/30" />
                                              {getText(subItem.key, subItem.fallback)}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </motion.div>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={getNavHref(item.href)}
                        className="flex items-center gap-3 text-brown hover:text-wine hover:bg-cream/50 py-3.5 px-4 rounded-xl font-inter font-medium transition-all duration-200"
                      >
                        {getText(item.label, item.fallback)}
                      </a>
                    )}
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="my-6 h-px bg-linear-to-r from-transparent via-taupe/20 to-transparent" />

                {/* Mobile Language Selector - Hide on blogs page */}
                {/* {!isBlogsPage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-taupe text-xs font-inter uppercase tracking-wider mb-3 px-4">
                      {getText("nav.selectLanguage", "Select Language")}
                    </p>
                    <div className="flex flex-wrap gap-2 px-2">
                      {languages.map((lang) => (
                        <Link
                          key={lang.code}
                          href={getLocaleHref(lang.code.toLowerCase())}
                          onClick={() => handleLangClick(lang.code.toLowerCase())}
                          className="flex items-center gap-2 bg-cream hover:bg-rose/10 px-4 py-2.5 rounded-xl text-brown hover:text-wine text-sm font-inter transition-all duration-200"
                        >
                          <span className="font-medium">{lang.code}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )} */}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 space-y-3"
                >
                  <a
                    href={getNavHref("/contact-us/")}
                    className="flex max-w-[93%] items-center justify-center gap-2 bg-wine text-light px-6 py-4 rounded-xl font-inter font-semibold text-center shadow-lg shadow-wine/20 hover:bg-wine/90 transition-all duration-200"
                  >
                    <Calendar size={18} aria-hidden={true} />
                    <span>
                      {getText("nav.bookConsultation", "Book Your Consultation")}
                    </span>
                  </a>
                  <a
                    href="tel:0167025699"
                    className="flex w-full max-w-[93%] items-center justify-center gap-2 text-taupe hover:text-wine py-3 font-inter transition-colors"
                  >
                    <Phone size={16} aria-hidden={true} />
                    <span className="font-medium">016-702 5699</span>
                  </a>
                </motion.div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 text-center"
                >
                  <p className="text-taupe/60 text-xs font-inter">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-taupe/60 text-xs font-inter mt-1">
                    {getText("footer.address", "Wisma UOA II, KL")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};