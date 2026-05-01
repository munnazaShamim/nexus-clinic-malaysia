"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight } from "lucide-react";
import { categoryLabels } from "../navData";
import { getHighlightedText } from "./searchUtils";

interface DesktopSearchBoxProps {
  isScrolled: boolean;
  locale?: string;
  getText: (key: string, fallback: string) => string;
  searchIndex: Array<{
    label: string;
    href: string;
    category: string;
  }>;
}

const highlightMatch = (text: string, query: string) => {
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

export const DesktopSearchBox = ({
  isScrolled,
  locale,
  getText,
  searchIndex,
}: DesktopSearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQuery(val), 300);
  };

  const results =
    debouncedQuery.trim().length > 1
      ? searchIndex
          .filter((item) =>
            item.label.toLowerCase().includes(debouncedQuery.toLowerCase()),
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results.length]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (href: string) => {
    const localizedHref =
      locale && locale !== "en" ? `/${locale}${href}` : href;
    window.location.href = localizedHref;
    setQuery("");
    setDebouncedQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-cream/60 border-taupe/20 hover:border-wine/30 focus-within:border-wine/50 focus-within:bg-light"
            : "bg-light/20 border-light/30 hover:border-light/50 focus-within:bg-light/30 focus-within:border-light/60"
        }`}
      >
        <Search
          size={15}
          className={isScrolled ? "text-taupe" : "text-brown/80"}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={getText("search.placeholder", "Search treatments...")}
          className="bg-transparent outline-none text-sm font-inter w-36 md:w-36 placeholder:text-taupe/60 transition-all duration-300 text-brown"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setDebouncedQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="text-taupe hover:text-wine transition-colors"
          >
            <X size={13} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-72 bg-light rounded-2xl shadow-2xl shadow-brown/10 border border-cream overflow-hidden z-50"
          >
            <div className="px-4 py-2.5 border-b border-cream">
              <p className="text-taupe text-xs font-inter">
                {results.length} result{results.length !== 1 ? "s" : ""} for
                &ldquo;{debouncedQuery}&rdquo;
              </p>
            </div>
            <ul className="py-2 max-h-72 overflow-y-auto">
              {results.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left flex items-center gap-3 px-4 py-2.5 hover:bg-cream/60 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                      <Search size={13} className="text-wine" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brown text-sm font-inter truncate">
                        {highlightMatch(item.label, debouncedQuery)}
                      </p>
                      <p className="text-taupe/70 text-xs font-inter">
                        {getText(
                          categoryLabels[item.category]?.key || item.category,
                          categoryLabels[item.category]?.fallback || item.category
                        )}
                      </p>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-taupe ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};