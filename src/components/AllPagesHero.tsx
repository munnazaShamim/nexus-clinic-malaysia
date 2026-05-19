"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, AlertCircle, Calendar } from "lucide-react";
import Whatsapp from "./Whatsapp";
import Link from "next/link";

interface TreatmentHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  details?: string;
  note?: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink?: string;
  whatsappMessage: string;
  /**
   * floatingTitle — bold heading on the image float card.
   * Pass a doctor name (e.g. "Dr. Vanessa Lee"),
   * an award label (e.g. "🏆 Industry Recognised"),
   * or any short trust line (e.g. "Refreshed Look").
   */
  floatingTitle?: string;
  /**
   * floatingSubtitle — supporting line under floatingTitle.
   * E.g. "MBBS (UM) | AAM Certified" or "Natural results • No frozen look".
   */
  floatingSubtitle?: string;
  staggerContainer: any;
  fadeInLeft: any;
  fadeInRight: any;
  fadeInUp: any;
}

export default function AllPagesHero({
  badge,
  title,
  highlight,
  description,
  details,
  note,
  image,
  imageAlt,
  ctaText,
  ctaLink = "/contact-us/",
  whatsappMessage,
  floatingTitle = "Trusted by clients",
  floatingSubtitle = "Kuala Lumpur, Malaysia",
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
}: TreatmentHeroProps) {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#F9F5F0] to-[#F3ECE3] pt-8 pb-8">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="container mx-auto max-w-7xl relative z-10 px-4 md:px-8"
        >
          <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center pt-12 pb-12">

            {/* ── LEFT CONTENT — 6 cols ─────────────── */}
            <motion.div
              variants={fadeInLeft}
              className="md:col-span-7 mx-auto lg:mx-0"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8C2A3C]/5 border border-[#8C2A3C]/15 mb-5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8C2A3C] shrink-0" />
                <span className="text-xs font-medium tracking-widest uppercase font-inter text-[#8C2A3C]">
                  {badge}
                </span>
              </motion.div>

              {/* H1 — capped at 5xl / 48px for premium hierarchy */}
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl sm:text-5xl lg:text-5xl text-[#3A2D27] leading-[1.18] tracking-tight mb-4"
              >
                {title}{" "}
                <span className="text-[#8C2A3C] italic font-normal block sm:inline">
                  {highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[#65554D] font-inter leading-relaxed mb-2"
              >
                {description}
              </motion.p>

              {/* Optional supporting detail line */}
              {details && (
                <motion.p
                  variants={fadeInUp}
                  className="text-sm text-[#3A2D27]/65 font-inter leading-relaxed mt-2"
                >
                  {details}
                </motion.p>
              )}

              {/* ── CTA ROW ─── */}
              <motion.div
                variants={fadeInLeft}
                className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-8"
              >
                {/* Primary — solid filled, dominant weight */}
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#8C2A3C] text-white font-georgia text-base font-medium transition-all duration-200 hover:bg-[#70212F] shadow-sm hover:shadow-md w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  {ctaText}
                </Link>

                {/* Secondary — Whatsapp component handles its own outline/dark styling */}
                <Whatsapp
                  message={whatsappMessage}
                  variant="dark"
                />
              </motion.div>

              {/* Clinical Note — hidden on mobile to protect the conversion fold */}
              {note && (
                <motion.div
                  variants={fadeInUp}
                  className="hidden sm:flex items-start gap-3 mt-7 bg-[#8C2A3C]/5 border-l-4 border-[#8C2A3C] p-4"
                  style={{ borderRadius: "0 12px 12px 0" }}
                >
                  <AlertCircle className="w-4 h-4 text-[#8C2A3C] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#8C2A3C] font-inter font-semibold text-xs uppercase tracking-wider mb-1">
                      Important Clinical Note
                    </p>
                    <p className="text-[#65554D] font-inter text-xs leading-relaxed">
                      {note}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="md:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none mt-6 lg:mt-0"
            >
              <div className="relative pb-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5] bg-[#F3ECE3]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                  {/* Warm vignette — bottom-up only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2D27]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating info / credential card */}
                <div className="absolute -bottom-2 left-4 right-4 sm:left-6 sm:right-auto sm:w-[240px] bg-white/95 backdrop-blur-md rounded-xl border border-[#3A2D27]/10 px-4 py-3.5 shadow-lg">
                  <p className="font-inter font-bold text-sm text-[#3A2D27] leading-snug">
                    {floatingTitle}
                  </p>
                  {floatingSubtitle && (
                    <p className="font-inter text-xs text-[#65554D] mt-0.5 leading-relaxed">
                      {floatingSubtitle}
                    </p>
                  )}
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
}