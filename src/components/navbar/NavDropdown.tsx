"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import { NavItem } from "@/src/types/navbar.types";
import { categoryLabels } from "./navData";

interface NavDropdownProps {
  item: NavItem;
  activeDropdown: string | null;
  getText: (key: string, fallback: string) => string;
  getNavHref: (path: string) => string;
  handleMouseEnter: (label: string) => void;
  handleMouseLeave: () => void;
  onItemClick: () => void;
}

const getCategoryPath = (category: string): string => {
  const mapping: Record<string, string> = {
    weightLoss: 'weight-loss',
  };
  return mapping[category] || category;
};

export const NavDropdown = ({
  item,
  activeDropdown,
  getText,
  getNavHref,
  handleMouseEnter,
  handleMouseLeave,
  onItemClick,
}: NavDropdownProps) => {
  if (!item.submenu) return null;

  const submenuEntries = Object.entries(item.submenu);
  const isMultiColumn = submenuEntries.length > 1;

  return (
    <AnimatePresence>
      {activeDropdown === item.label && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
          style={{
            width: isMultiColumn ? "720px" : "280px",
          }}
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-light rotate-45 rounded-sm shadow-lg" />
          <div className="relative bg-light rounded-2xl shadow-2xl shadow-brown/10 border border-cream overflow-hidden">
            <div className="p-6">
              <div
                className={`grid gap-8 ${
                  isMultiColumn ? "grid-cols-4" : "grid-cols-1"
                }`}
              >
                {submenuEntries.map(([category, categoryData]: [string, any]) => (
                  <div key={category}>
                    <div className="flex items-center gap-2 mb-4">
                      <h4 className="text-brown font-georgia font-semibold text-sm">
                        {getText(
                          categoryData.label ||
                            categoryLabels[category]?.key ||
                            category,
                          categoryData.fallback ||
                            categoryLabels[category]?.fallback ||
                            category
                        )}
                      </h4>
                    </div>
                    <div className="h-px bg-linear-to-r from-wine/20 to-transparent mb-3" />
                    <ul className="space-y-0.5">
                      {categoryData.items.map(
                        (subItem: { key: string; fallback: string }, idx: number) => (
                          <li key={idx}>
                            <a
                              href={getNavHref(
                                `/${getCategoryPath(category)}/${subItem.fallback}/`
                              )}
                              onClick={onItemClick}
                              className="group/item flex items-center gap-2 text-taupe hover:text-wine text-sm py-1.5 transition-all duration-200"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-taupe/30 group-hover/item:bg-wine group-hover/item:scale-125 transition-all duration-200" />
                              <span>{getText(subItem.key, subItem.fallback)}</span>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-linear-to-r from-cream to-cream/50 px-6 py-4 border-t border-rose/10">
              <a
                href={getNavHref("/contact-us/")}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                    <Calendar size={18} className="text-wine" />
                  </div>
                  <div>
                    <p className="text-brown font-inter font-medium text-sm">
                      {getText(
                        "common.startTransformation",
                        "Start Your Transformation"
                      )}
                    </p>
                    <p className="text-taupe text-xs">
                      {getText("nav.bookConsultation", "Book Your Consultation")}
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-1 text-wine font-inter font-semibold text-sm"
                >
                  <span>{getText("nav.bookNow", "Book Now")}</span>
                  <ChevronRight size={16} />
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};