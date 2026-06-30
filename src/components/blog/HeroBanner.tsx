import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer } from "../../lib/animations";

interface HeroBannerProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchFocused: boolean;
  setSearchFocused: (focused: boolean) => void;
}

export function HeroBanner({ 
  searchQuery, 
  setSearchQuery, 
  searchFocused, 
  setSearchFocused 
}: HeroBannerProps) {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24"
      style={{
        background:
          "linear-linear(135deg, var(--color-brown) 0%, var(--color-wine) 60%, #6b2d37 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
        style={{ background: "var(--color-rose)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3"
        style={{ background: "var(--color-taupe)" }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px" style={{ background: "var(--color-rose)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-taupe/60">
              Nexus Clinic · Insights
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold text-rose mb-6 leading-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The <em className="not-italic" style={{ color: "var(--color-rose)" }}>Journal</em>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-taupe/70 text-lg max-w-xl mb-10 leading-relaxed"
          >
            Expert insights on aesthetics, skincare, and transformative
            wellness — curated by our doctors for your journey.
          </motion.p>

          <motion.div variants={scaleIn} className="relative max-w-md">
            <div
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 border border-pink-800/20 hover:border-pink-800/30 focus-within:border-pink-800/40"
                  style={{
                    background: searchFocused ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
              <Search size={18} className="text-wine shrink-0" aria-hidden={true} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="bg-transparent text-brown placeholder-taupe/70 text-sm outline-none flex-1 font-medium"
                style={{
                  color: "var(--color-brown)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}