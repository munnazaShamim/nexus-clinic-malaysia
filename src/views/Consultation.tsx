"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

const trustIcons = [Award, Clock, Shield, MapPin];

type CategoryKey = "face" | "skin" | "hair" | "weightLoss" | "regenerative";

const categoryStructure: Array<{
  key: CategoryKey;
  slug: string;
  imageSrc: string;
  treatments: Array<{ slug: string; imageUrl: string }>;
}> = [
  {
    key: "face",
    slug: "face",
    imageSrc: "/images/face/Cheek Filler.jpeg",
    treatments: [
      { slug: "botox-malaysia", imageUrl: "/images/face/botox-malaysia.webp" },
      { slug: "cheek-filler-malaysia", imageUrl: "/images/face/Cheek Filler Treatment.webp" },
      { slug: "chin-filler-malaysia", imageUrl: "/images/face/Chin Dermal Filler.webp" },
      { slug: "dermal-filler-malaysia", imageUrl: "/images/face/dermal-filler.webp" },
      { slug: "jawline-filler-malaysia", imageUrl: "/images/face/Jawline Filler.webp" },
      { slug: "lip-filler-malaysia", imageUrl: "/images/face/Lip Filler.webp" },
      { slug: "nose-filler-malaysia", imageUrl: "/images/face/Nose Filler Treatment.webp" },
      { slug: "nose-thread-lift-malaysia", imageUrl: "/images/face/Nose Thread Lift.webp" },
      { slug: "skin-booster-malaysia", imageUrl: "/images/face/Skin Booster Treatment.webp" },
      { slug: "tear-trough-filler-malaysia", imageUrl: "/images/face/Tear Trough Filler.webp" },
      { slug: "under-eye-filler-malaysia", imageUrl: "/images/face/Under Eye Filler.webp" },
    ],
  },
  {
    key: "skin",
    slug: "skin",
    imageSrc: "/images/skin/pigmentation-treatment.webp",
    treatments: [
      { slug: "acne-treatment-malaysia", imageUrl: "/images/skin/acne-treatment.webp" },
      { slug: "acne-scar-treatment-malaysia", imageUrl: "/images/skin/acne-scar-treatment.webp" },
      { slug: "pigmentation-treatment-malaysia", imageUrl: "/images/skin/pigmentation-treatment.webp" },
      { slug: "melasma-treatment-malaysia", imageUrl: "/images/skin/melasma-treatment.webp" },
      { slug: "mole-removal-malaysia", imageUrl: "/images/skin/mole-removal.webp" },
      { slug: "hydrafacial-malaysia", imageUrl: "/images/skin/hydrafacial.webp" },
      { slug: "pico-laser-malaysia", imageUrl: "/images/skin/pico-laser.webp" },
      { slug: "dark-eye-circle-treatment-malaysia", imageUrl: "/images/skin/dark-eye-circle-treatment.webp" },
      { slug: "skin-whitening-treatment-malaysia", imageUrl: "/images/skin/skin-whitening-treatment.webp" },
      { slug: "eczema-treatment-malaysia", imageUrl: "/images/skin/eczema-treatment.webp" },
      { slug: "keloid-treatment-malaysia", imageUrl: "/images/skin/keloid-treatment.webp" },
      { slug: "rosacea-treatment-malaysia", imageUrl: "/images/skin/rosacea-treatment.webp" },
      { slug: "stretch-mark-removal-malaysia", imageUrl: "/images/skin/stretch-mark.webp" },
      { slug: "laser-hair-removal-malaysia", imageUrl: "/images/skin/laser-hair-removal.webp" },
      { slug: "tattoo-removal-malaysia", imageUrl: "/images/skin/tattoo-removal.webp" },
    ],
  },
  {
    key: "hair",
    slug: "hair",
    imageSrc: "/images/treatment/hair-restoration.webp",
    treatments: [
      { slug: "hair-transplant-malaysia", imageUrl: "/images/hair/hair-transpalnt.webp" },
      { slug: "fue-hair-transplant-malaysia", imageUrl: "/images/hair/fue-hair-transplant.webp" },
      { slug: "prp-hair-treatment-malaysia", imageUrl: "/images/hair/prp-hair-treatment.webp" },
      { slug: "hair-loss-treatment-malaysia", imageUrl: "/images/hair/hair-loss-treatment.webp" },
      { slug: "beard-transplant-malaysia", imageUrl: "/images/hair/beard-transplant.webp" },
      { slug: "mesotherapy-hair-loss-malaysia", imageUrl: "/images/hair/mesotherapy-hair-loss.webp" },
      { slug: "exosome-hair-treatment-malaysia", imageUrl: "/images/hair/exesome-hair-treatment.webp" },
      { slug: "minoxidil-treatment-malaysia", imageUrl: "/images/hair/minoxidil-treatment.webp" },
      { slug: "finasteride-treatment-malaysia", imageUrl: "/images/hair/hair-transpalnt.webp" },
    ],
  },
  {
    key: "weightLoss",
    slug: "weight-loss",
    imageSrc: "/images/treatment/hero-ozempic.webp",
    treatments: [
      { slug: "ozempic-malaysia", imageUrl: "/images/weight-loss/Ozempic Weight Loss Treatment.webp" },
      { slug: "wegovy-malaysia", imageUrl: "/images/weight-loss/Wegovy Weight Loss Treatment.webp" },
      { slug: "mounjaro-malaysia", imageUrl: "/images/weight-loss/Mounjaro Weight Loss Treatment.webp" },
      { slug: "duromine-malaysia", imageUrl: "/images/weight-loss/Duromine Weight Loss Treatment.webp" },
      { slug: "doctor-monitored-weight-loss-malaysia", imageUrl: "/images/weight-loss/Nexus Doctor Monitored Weight Loss.webp" },
      { slug: "hcg-programme-malaysia", imageUrl: "/images/weight-loss/HCG Weight Loss Program Treatment.webp" },
      { slug: "fat-freezing-malaysia", imageUrl: "/images/weight-loss/Fat Freezing Treatment.webp" },
      { slug: "coolsculpting-malaysia", imageUrl: "/images/weight-loss/CoolSculpting Treatment.webp" },
      { slug: "glp-1-programme-malaysia", imageUrl: "/images/weight-loss/GLP-1 Injection Treatment.webp" },
      { slug: "zepbound-malaysia", imageUrl: "/images/weight-loss/ZepBound Weight Loss Treatment.webp" },
      { slug: "iv-drip-malaysia", imageUrl: "/images/weight-loss/IV Drip for Weight Loss Treatment.webp" },
    ],
  },
  {
    key: "regenerative",
    slug: "regenerative",
    imageSrc: "/images/regenerative/mysenchymal-stem-cell.webp",
    treatments: [
      { slug: "testosterone-therapy-malaysia", imageUrl: "/images/regenerative/testosterone-therapy.webp" },
      { slug: "ed-treatment-malaysia", imageUrl: "/images/regenerative/ed-treatment.webp" },
      { slug: "hormone-replacement-therapy-malaysia", imageUrl: "/images/regenerative/hormone-replacement.webp" },
      { slug: "pcos-treatment-malaysia", imageUrl: "/images/regenerative/pcos-treatment.webp" },
      { slug: "hypothyroidism-treatment-malaysia", imageUrl: "/images/regenerative/hypothyroidism-treatment.webp" },
      { slug: "stem-cell-therapy-malaysia", imageUrl: "/images/regenerative/stem-cell-therapy.webp" },
      { slug: "anti-aging-therapy-malaysia", imageUrl: "/images/regenerative/anti-aging-therapy.webp" },
      { slug: "hormone-test-malaysia", imageUrl: "/images/regenerative/hormone-test.webp" },
      { slug: "menopause-hormone-replacement-malaysia", imageUrl: "/images/regenerative/menopause-hormone.webp" },
      { slug: "p-shot-malaysia", imageUrl: "/images/regenerative/p-shot.webp" },
      { slug: "o-shot-malaysia", imageUrl: "/images/regenerative/o-shot.webp" },
      { slug: "shockwave-therapy-malaysia", imageUrl: "/images/regenerative/shockwave-therapy.webp" },
    ],
  },
];

export default function TreatmentsHubPage() {
  const t = useTranslations("consultation");
  const [, setScrollPositions] = useState<Record<string, number>>({});

  const scrollSlider = (categorySlug: string, direction: "left" | "right"): void => {
    const container = document.getElementById(`slider-${categorySlug}`);
    if (container) {
      const scrollAmount = 340;
      const newScrollLeft = direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      setScrollPositions((prev) => ({ ...prev, [categorySlug]: newScrollLeft }));
    }
  };

  const trustItems = t.raw("trust.items") as Array<{ title: string; subtitle: string }>;
  const whyUsItems = t.raw("whyUs.items") as Array<{ title: string; description: string }>;

  return (
    <div className="w-full bg-light overflow-hidden">
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-5xl relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mx-auto mb-6">
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Whatsapp message={t("hero.whatsappMessage")} variant="light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {trustItems.map((item, idx) => {
                const Icon = trustIcons[idx] ?? Award;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-wine" />
                    </div>
                    <p className="font-inter font-semibold text-brown text-sm">{item.title}</p>
                    <p className="font-inter text-taupe text-xs">{item.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Treatments by Category */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          {categoryStructure.map((category, idx) => {
            const categoryName = t(`categories.${category.key}.name`);
            const categoryDescription = t(`categories.${category.key}.description`);
            const treatments = t.raw(`categories.${category.key}.treatments`) as Array<{ name: string; description: string }>;

            return (
              <motion.div
                key={category.slug}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mb-24 last:mb-0"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <motion.div variants={fadeInLeft} className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent z-10" />
                    <Image
                      src={category.imageSrc}
                      alt={categoryName}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div variants={fadeInRight}>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="font-georgia text-3xl md:text-4xl text-brown">{categoryName}</h2>
                    </div>
                    <p className="text-taupe font-inter text-lg leading-relaxed mb-6">
                      {categoryDescription}
                    </p>
                    <Link href={`/${category.slug}/`}>
                      <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold border-b border-wine/30 hover:border-wine transition-all pb-1">
                        {t("viewAll", { category: categoryName })}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </motion.div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => scrollSlider(category.slug, "left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-light/90 hover:bg-wine text-wine hover:text-light rounded-full p-2 shadow-lg transition-all duration-300 -ml-3 md:-ml-4 border border-taupe/20"
                    aria-label={t("card.prevAria")}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    id={`slider-${category.slug}`}
                    className="overflow-x-auto scroll-smooth pb-6"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    <style jsx>{`
                      div[id^="slider-"]::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    <div className="flex gap-6 md:gap-8" style={{ minWidth: "min-content" }}>
                      {category.treatments.map((meta, tIdx) => {
                        const treatment = treatments[tIdx] ?? { name: meta.slug, description: "" };
                        return (
                          <motion.div
                            key={meta.slug}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="w-[280px] md:w-[320px] flex-shrink-0 bg-light rounded-xl border border-taupe/10 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                          >
                            <Link href={`/${category.slug}/${meta.slug}/`} className="block h-full">
                              <div className="h-48 relative overflow-hidden bg-wine/5">
                                <Image
                                  src={meta.imageUrl || category.imageSrc}
                                  alt={treatment.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    (e.target as HTMLImageElement).src = category.imageSrc;
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="p-5">
                                <h3 className="font-georgia text-lg text-brown mb-2 line-clamp-1">{treatment.name}</h3>
                                <p className="text-taupe font-inter text-sm mb-4 line-clamp-2">{treatment.description}</p>
                                <div className="inline-flex items-center gap-1 text-wine font-inter text-sm font-medium group-hover:gap-2 transition-all">
                                  {t("card.learnMore")}
                                  <ArrowRight className="w-3 h-3" />
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => scrollSlider(category.slug, "right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-light/90 hover:bg-wine text-wine hover:text-light rounded-full p-2 shadow-lg transition-all duration-300 -mr-3 md:-mr-4 border border-taupe/20"
                    aria-label={t("card.nextAria")}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Nexus Clinic */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{t("whyUs.title")}</h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-4">
              {whyUsItems.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-1">{item.title}</h3>
                    <p className="text-taupe font-inter">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              {whyUsItems.slice(3, 6).map((item, idx) => (
                <div key={idx + 3} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-wine shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-1">{item.title}</h3>
                    <p className="text-taupe font-inter">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
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
              <Link href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Whatsapp
                message={t("cta.whatsappMessage")}
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              {t("cta.limitedSlots")}
            </p>
            <p className="text-cream/60 font-inter text-xs">
              {t("cta.serving")}
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
