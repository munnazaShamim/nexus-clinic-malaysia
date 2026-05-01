"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TopBarProps {
  isScrolled: boolean;
  getText: (key: string, fallback: string) => string;
}

export const TopBar = ({ isScrolled, getText }: TopBarProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="bg-green text-light/90 text-xs fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              {isScrolled ? (
                <Link className="flex items-center" href="/">
                  <Image
                    src="/images/logo_nexus_white.webp"
                    alt="Nexus Logo"
                    width={120}
                    height={40}
                    className="h-auto w-auto"
                  />
                </Link>
              ) : (
                <div className="hidden lg:flex items-center gap-6">
                  <a
                    href="tel:0167025699"
                    className="flex items-center gap-2 hover:text-cream transition-colors"
                  >
                    <Phone size={12} />
                    <span>016-702 5699</span>
                  </a>

                  <span className="text-light/40">|</span>

                  <span className="text-light">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </span>
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <a
                href="https://api.whatsapp.com/send?phone=60168245699&text=Any%20Dr%20Available%20%3F%20(%20HB%20)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-green text-green hover:bg-transparent hover:text-white hover:border-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-300 animate-vibration-slow"
              >
                {getText("nav.topButton", "Consult with experts")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};