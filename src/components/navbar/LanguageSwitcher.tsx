"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import { languages } from "./navData";

interface LanguageSwitcherProps {
  isScrolled: boolean;
  currentLocale?: string;
  getText: (key: string, fallback: string) => string;
  getLocaleHref: (langCode: string) => string;
  handleLangClick: (langCode: string) => void;
}

export const LanguageSwitcher = ({
  isScrolled,
  currentLocale,
  getText,
  getLocaleHref,
  handleLangClick,
}: LanguageSwitcherProps) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <div className="relative ml-2">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsLangOpen(!isLangOpen)}
        className={`flex cursor-pointer items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? "text-brown hover:bg-cream"
            : "text-brown/90 hover:text-brown hover:bg-light/10"
        }`}
      >
        <Globe size={16} />
        <span className="text-sm font-inter font-medium">
          {currentLocale?.toUpperCase() || "EN"}
        </span>
        <ChevronDown size={12} />
      </motion.button>

      <AnimatePresence>
        {isLangOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0"
              onClick={() => setIsLangOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-3 bg-light rounded-xl shadow-xl shadow-brown/10 py-2 min-w-44 border border-cream overflow-hidden"
            >
              <div className="px-3 pb-2 mb-2 border-b border-cream">
                <p className="text-taupe text-xs font-inter">
                  {getText("nav.selectLanguage", "Select Language")}
                </p>
              </div>
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={getLocaleHref(lang.code.toLowerCase())}
                  onClick={() => handleLangClick(lang.code.toLowerCase())}
                  className="flex items-center gap-3 px-4 py-2.5 text-brown border-b border-cream transition-colors hover:bg-[#F3EFEE] hover:border-[#8C4F58] last:border-0 hover:scale-102"
                >
                  <div>
                    <span className="text-sm font-inter font-medium block">
                      {lang.code}
                    </span>
                    <span className="text-xs text-taupe">
                      {lang.label}
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};