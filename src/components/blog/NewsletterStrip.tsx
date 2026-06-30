import { motion } from "framer-motion";
import { scaleIn } from "../../lib/animations";

export function NewsletterStrip() {
  return (
    <motion.section
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mx-6 lg:mx-12 mb-16 rounded-3xl overflow-hidden relative"
      style={{
        background: "linear-linear(120deg, var(--color-brown) 0%, var(--color-wine) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-taupe/50 mb-2">
            Stay informed
          </p>
          <h3
            className="text-3xl lg:text-4xl font-bold text-taupe mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Wellness in your inbox.
          </h3>
          <p className="text-taupe/60 text-sm">
            Expert tips, treatment guides, and exclusive offers — monthly.
          </p>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address for newsletter"
            className="flex-1 lg:w-64 px-5 py-3.5 rounded-xl text-sm outline-none"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
          <button
            className="px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shrink-0 transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--color-rose)", color: "white" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </motion.section>
  );
}