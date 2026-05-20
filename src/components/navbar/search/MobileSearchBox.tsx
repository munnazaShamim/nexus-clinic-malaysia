"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight } from "lucide-react";
import { categoryLabels } from "../navData";

interface MobileInlineSearchProps {
  onClose: () => void;
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

export const MobileSearchBox = ({
  onClose,
  isScrolled,
  locale,
  getText,
  searchIndex,
}: MobileInlineSearchProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, []);

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
          .slice(0, 7)
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
  };

  const handleClearOrClose = () => {
    if (query) {
      setQuery("");
      setDebouncedQuery("");
      setIsOpen(false);
      inputRef.current?.focus();
    } else {
      onClose();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
          isScrolled
            ? "bg-cream/80 border-taupe/30 focus-within:border-wine/50"
            : "bg-light/90 border-light/40 focus-within:border-light/70"
        }`}
      >
        <Search size={16} className="text-taupe shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={getText("search.placeholder", "Search treatments...")}
          className="bg-transparent outline-none text-sm font-inter text-brown placeholder:text-taupe/50 flex-1 min-w-0"
        />
        <button
          onClick={handleClearOrClose}
          className="text-taupe hover:text-wine transition-colors shrink-0 p-0.5"
        >
          <X size={16} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 mt-2 bg-light rounded-2xl shadow-2xl shadow-brown/15 border border-cream overflow-hidden z-60"
          >
            <div className="px-4 py-2.5 border-b border-cream">
              <p className="text-taupe text-xs font-inter">
                {results.length} result{results.length !== 1 ? "s" : ""} for
                &ldquo;{debouncedQuery}&rdquo;
              </p>
            </div>
            <ul className="py-2 max-h-200 overflow-y-auto">
              {results.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-cream/60 active:bg-cream transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                      <Search size={13} className="text-wine" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-brown text-sm font-inter truncate">
                        {highlightMatch(item.label, debouncedQuery)}
                      </p>
                      <p className="text-taupe/70 text-xs">
                        {getText(
                          categoryLabels[item.category]?.key || item.category,
                          categoryLabels[item.category]?.fallback || item.category
                        )}
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-taupe shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};