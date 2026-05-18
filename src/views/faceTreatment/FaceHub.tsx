"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslations } from "next-intl";

// Structural data (slugs, image paths, hard-coded URLs) stays in the component —
// JSON holds only translated copy. The arrays line up by index with the
// "treatments.items" and "concerns.items" arrays in face.json.
const treatmentSlugs = [
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
];

const concernLinks = [
  "/face/botox-malaysia/",
  "/face/cheek-filler-malaysia/",
  "/face/tear-trough-filler-malaysia/",
  "/face/jawline-filler-malaysia/",
  "/face/chin-filler-malaysia/",
  "/face/nose-thread-lift-malaysia/",
  "/face/lip-filler-malaysia/",
  "/face/skin-booster-malaysia/",
  "/face/nose-filler-malaysia/",
  "/face/botox-malaysia/",
  "/face/cheek-filler-malaysia/",
  "/face/dermal-filler-malaysia/",
];

interface TreatmentCopy {
  name: string;
  description: string;
}

interface ConcernCopy {
  concern: string;
  treatment: string;
}

interface TrustItem {
  title: string;
  subtitle: string;
}

interface FaqItem {
  q: string;
  a: string;
}

export default function FaceHub() {
  const t = useTranslations("face.face");

  const trustItems = t.raw("trust.items") as TrustItem[];
  const treatmentsCopy = t.raw("treatments.items") as TreatmentCopy[];
  const concernsCopy = t.raw("concerns.items") as ConcernCopy[];
  const checklist = t.raw("approach.checklist") as string[];
  const faqData = t.raw("faq.items") as FaqItem[];

  const treatments = treatmentsCopy.map((copy, i) => ({
    ...copy,
    ...treatmentSlugs[i],
  }));

  const concernMapping = concernsCopy.map((copy, i) => ({
    ...copy,
    link: concernLinks[i],
  }));

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 md:py-28">
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

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-wine font-georgia mt-4"
          >
            {t("hero.subtitle")}
          </motion.h2>

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

          <motion.p
            variants={fadeInUp}
            className="text-sm text-taupe font-inter mt-4"
          >
            {t("hero.noCommit")}
          </motion.p>
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
              {[Award, Clock, Shield, MapPin].map((Icon, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-wine" />
                  </div>
                  <p className="font-inter font-semibold text-brown text-sm">{trustItems[i]?.title}</p>
                  <p className="font-inter text-taupe text-xs">{trustItems[i]?.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{t("intro.title")}</h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-taupe font-inter leading-relaxed mb-6">
            {t("intro.para1")}
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-brown font-inter leading-relaxed">
            {t("intro.para2")}
          </motion.p>
        </motion.div>
      </section>

      {/* Face Treatments Grid */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{t("treatments.title")}</h2>
            <p className="text-taupe font-inter mt-2">{t("treatments.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream pb-6 rounded-xl border border-taupe/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-60 overflow-hidden bg-wine/5 rounded-xl mb-4">
                  <Image
                    src={treatment.imageUrl}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-georgia text-xl text-brown mb-2 px-6">{treatment.name}</h3>
                <p className="text-taupe font-inter text-sm mb-4 px-6">{treatment.description}</p>
                <Link href={`/face/${treatment.slug}/`}>
                  <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold text-sm hover:gap-3 transition-all px-6">
                    {t("treatments.viewDetails")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Concern Mapping Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{t("concerns.title")}</h2>
            <p className="text-taupe font-inter mt-2">{t("concerns.subtitle")}</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">{t("concerns.tableHead.concern")}</th>
                  <th className="p-4 text-left font-georgia">{t("concerns.tableHead.treatment")}</th>
                  <th className="p-4 text-left font-georgia">{t("concerns.tableHead.start")}</th>
                </tr>
              </thead>
              <tbody>
                {concernMapping.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 text-taupe font-inter">{item.concern}</td>
                    <td className="p-4 text-brown font-inter font-medium">{item.treatment}</td>
                    <td className="p-4">
                      <Link href={item.link}>
                        <button className="text-wine font-inter text-sm hover:font-bold transition-all">
                          {t("concerns.viewLink")}
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{t("approach.title")}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <p className="text-taupe font-inter leading-relaxed mb-6">{t("approach.para1")}</p>
              <p className="text-brown font-inter leading-relaxed">{t("approach.para2")}</p>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <ul className="space-y-3">
                {checklist.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown font-inter text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <FAQWithSchema data={faqData} />

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
            <h2 className="font-georgia text-3xl md:text-5xl text-light">{t("cta.title")}</h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">{t("cta.description")}</p>
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
              <Whatsapp message={t("cta.whatsappMessage")} variant="light" />
            </div>
            <p className="text-cream/80 font-inter text-sm">{t("cta.limitedSlots")}</p>
            <p className="text-cream/60 font-inter text-xs">{t("cta.serving")}</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
