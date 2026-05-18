"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/src/lib/animations";
import AllPagesHero from "@/src/components/AllPagesHero";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import { useTranslations } from "next-intl";

const awardImages = [
  "/images/awards/N1.webp",
  "/images/awards/N2.webp",
  "/images/awards/N3.webp",
  "/images/awards/N4.webp",
  "/images/awards/N5.webp",
  "/images/awards/N6.webp",
  "/images/awards/N7.webp",
];

export default function AwardsCertificates() {
  const t = useTranslations("awardsCertificate");

  const awards = t.raw("awards") as Array<{
    title: string;
    year: string;
    category: string;
    description: string;
  }>;

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge={t("hero.badge")}
        title={t("hero.title")}
        highlight={t("hero.highlight")}
        description={t("hero.description")}
        details={t("hero.details")}
        note={t("hero.note")}
        image="/images/awards/award.webp"
        imageAlt={t("hero.imageAlt")}
        ctaText={t("hero.ctaText")}
        ctaLink="/contact-us"
        whatsappMessage={t("hero.whatsappMessage")}
        floatingTitle={t("hero.floatingTitle")}
        floatingSubtitle={t("hero.floatingSubtitle")}
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Awards Grid Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              {t("section.title")}
            </h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">
              {t("section.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-light rounded-2xl overflow-hidden border border-taupe/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-110 bg-wine/5 overflow-hidden">
                  <Image
                    src={awardImages[idx] ?? awardImages[0]}
                    alt={award.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-wine/10 rounded-full text-xs font-inter text-wine font-semibold">
                      {award.year}
                    </span>
                    <span className="text-xs font-inter text-taupe/70">
                      {award.category}
                    </span>
                  </div>
                  <h3 className="font-georgia text-lg text-brown font-bold leading-tight mb-3">
                    {award.title}
                  </h3>
                  <p className="text-taupe font-inter text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {t("cta.button")}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp
                message={t("cta.whatsappMessage")}
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              {t("cta.footnote")}
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
