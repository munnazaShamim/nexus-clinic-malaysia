"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import {
  ChevronRight,
  Star,
  Shield,
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Award,
  Users,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import Image from "next/image";
import FAQWithSchema from "@/src/components/FAQWithSchema";
function DecorLine({ className = "" }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`h-px bg-linear-to-r from-transparent via-wine to-transparent ${className}`}
    />
  );
}

function TreatmentCard({ t: treatment, bodyWeight, learnMore }: { t: (typeof treatmentsDef)[0] & { badge: string; subtitle: string; description: string; tag: string; loss: string }; bodyWeight: string; learnMore: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group rounded-2xl overflow-hidden border border-taupe/20 bg-light cursor-pointer"
    >
      <div className={`h-1 w-full bg-linear-to-r ${treatment.linear}`} />

      <div className="p-7 flex flex-col gap-4">
        <span className="self-start text-xs font-semibold tracking-widest uppercase text-wine bg-wine/10 px-3 py-1 rounded-full">
          {treatment.badge}
        </span>

        <div>
          <h3 className="font-georgia text-2xl text-brown leading-tight">
            {treatment.name}
          </h3>
          <p className="text-taupe text-sm mt-1">{treatment.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <TrendingDown size={14} className="text-wine" />
          <span className="text-xs text-wine font-semibold">
            {treatment.loss} {bodyWeight}
          </span>
        </div>

        <p className="text-brown/70 text-sm leading-relaxed">{treatment.description}</p>

        <DecorLine />

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-taupe mb-1">{treatment.tag}</p>
            <p className="font-georgia text-xl text-brown">{treatment.price}</p>
          </div>
          <motion.a
            href={treatment.href}
            target="_blank"
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-1 text-xs font-semibold text-wine hover:text-brown transition-colors"
          >
            {learnMore} <ArrowRight size={13} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
const phone = "60168245699";
const createWhatsAppLink = (productName: string) => {
  const message = `Hi Nexus Clinic, I'm interested in ${productName}. Could you please share the price, availability, and how I can purchase it?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const treatmentsDef = [
  {
    id: 1,
    name: "Mounjaro",
    price: "RM 1,980",
    href: createWhatsAppLink("Mounjaro"),
    linear: "from-wine to-brown",
  },
  {
    id: 2,
    name: "Ozempic",
    price: "RM 1,800",
    href: createWhatsAppLink("Ozempic"),
    linear: "from-taupe to-wine",
  },
  {
    id: 3,
    name: "Wegovy",
    price: "RM 1,288",
    href: createWhatsAppLink("Wegovy"),
    linear: "from-rose to-brown",
  },
  {
    id: 4,
    name: "Saxenda",
    price: "RM 600",
    href: createWhatsAppLink("Saxenda"),
    linear: "from-brown to-taupe",
  },
];

function StatCard({
  stat,
}: {
  stat: { value: string; label: string; icon: any };
  i: number;
}) {
  const Icon = stat.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center text-center gap-3 p-6"
    >
      <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center">
        <Icon size={20} className="text-wine" />
      </div>
      <span className="font-georgia text-4xl text-light">{stat.value}</span>
      <span className="text-taupe text-sm tracking-wide">{stat.label}</span>
    </motion.div>
  );
}


export default function Products({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "products");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const treatments = [
    {
      ...treatmentsDef[0],
      badge: t("treatments.t1Badge"),
      subtitle: t("treatments.t1Subtitle"),
      description: t("treatments.t1Desc"),
      tag: t("treatments.t1Tag"),
      loss: t("treatments.t1Loss"),
    },
    {
      ...treatmentsDef[1],
      badge: t("treatments.t2Badge"),
      subtitle: t("treatments.t2Subtitle"),
      description: t("treatments.t2Desc"),
      tag: t("treatments.t2Tag"),
      loss: t("treatments.t2Loss"),
    },
    {
      ...treatmentsDef[2],
      badge: t("treatments.t3Badge"),
      subtitle: t("treatments.t3Subtitle"),
      description: t("treatments.t3Desc"),
      tag: t("treatments.t3Tag"),
      loss: t("treatments.t3Loss"),
    },
    {
      ...treatmentsDef[3],
      badge: t("treatments.t4Badge"),
      subtitle: t("treatments.t4Subtitle"),
      description: t("treatments.t4Desc"),
      tag: t("treatments.t4Tag"),
      loss: t("treatments.t4Loss"),
    },
  ];

  const stats = [
    { value: t("stats.s1Value"), label: t("stats.s1Label"), icon: Award },
    { value: t("stats.s2Value"), label: t("stats.s2Label"), icon: Users },
    { value: t("stats.s3Value"), label: t("stats.s3Label"), icon: Star },
    { value: t("stats.s4Value"), label: t("stats.s4Label"), icon: Shield },
  ];

  const steps = [
    { num: t("howItWorks.s1Num"), title: t("howItWorks.s1Title"), desc: t("howItWorks.s1Desc") },
    { num: t("howItWorks.s2Num"), title: t("howItWorks.s2Title"), desc: t("howItWorks.s2Desc") },
    { num: t("howItWorks.s3Num"), title: t("howItWorks.s3Title"), desc: t("howItWorks.s3Desc") },
    { num: t("howItWorks.s4Num"), title: t("howItWorks.s4Title"), desc: t("howItWorks.s4Desc") },
  ];

  const faqdata = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const whyPoints = [
    t("hero.w1"),
    t("hero.w2"),
    t("hero.w3"),
    t("hero.w4"),
    t("hero.w5"),
  ];

  return (
    <>
      <main className="bg-light font-inter text-brown overflow-x-hidden">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{
            background: "linear-linear(135deg,brown0%,wine60%,rose100%)",
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Large decorative circle */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute -right-32 -top-32 w-150 h-150 rounded-full border border-light"
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
            className="absolute -right-16 -top-16 w-100 h-100 rounded-full border border-light"
          />

          {/* Floating pill shapes */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-12 w-14 h-14 rounded-full bg-light/10 backdrop-blur-sm border border-light/20"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-24 w-8 h-8 rounded-full bg-rose/30"
          />

          {/* Announcement bar */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute top-0 left-0 right-0 bg-light hidden backdrop-blur-sm border-b border-light/10 py-2.5 text-center"
          >
            <p className="text-cream/80 text-xs tracking-widest">
              ✦ &nbsp; {t("hero.announcement")} &nbsp;
              <a
                href="https://wa.link/q64h1l"
                className="underline text-light font-semibold"
              >
                {t("hero.whatsapp")}
              </a>
              &nbsp; ✦
            </p>
          </motion.div>

          {/* Hero content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-20"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              {/* Left */}
              <div className="flex-1 text-center lg:text-left">
                <motion.p
                  variants={fadeInUp}
                  className="text-taupe text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2 justify-center lg:justify-start"
                >
                  <Sparkles size={12} className="text-rose" />
                  {t("hero.badge")}
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl sm:text-6xl lg:text-7xl text-taupe leading-[1.05] mb-8"
                >
                  {t("hero.title1")} <span className="italic text-rose">{t("hero.title2")}</span>
                  <br />
                  {t("hero.title3")}
                  <br />
                  <span className="italic">{t("hero.title4")}</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-wine/70 text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
                >
                  {t("hero.desc")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="https://wa.link/q64h1l"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 bg-light text-brown px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-white transition-colors"
                  >
                    <Phone size={15} />
                    {t("hero.cta1")}
                  </motion.a>
                  <motion.a
                    href="#treatments"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 border border-brown/30 text-brown px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-colors"
                  >
                    {t("hero.cta2")} <ChevronRight size={15} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right — floating card */}
              <motion.div
                variants={fadeInRight}
                className="shrink-0 w-full max-w-xs"
              >
                <div className="bg-linear-to-br from-wine/10 to-rose/10 backdrop-blur-md rounded-3xl border border-light/15 p-7 space-y-5">
                  <p className="text-wine text-xs uppercase tracking-widest">
                    {t("hero.whyTitle")}
                  </p>
                  {whyPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={15} className="text-rose shrink-0" />
                      <span className="text-wine/85 text-sm">{point}</span>
                    </motion.div>
                  ))}

                  <div className="pt-2 border-t border-light/10">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                          <Image
                            className="border-2 border-rose rounded-full"
                            src="/images/profile1.webp"
                            alt="p1"
                            width={50}
                            height={50}
                            />
                          <Image
                            className="border-2 border-rose rounded-full"
                            src="/images/profile2.webp"
                            alt="p2"
                            width={50}
                            height={50}
                            />
                          <Image
                            className="border-2 border-rose rounded-full"
                            src="/images/profile3.webp"
                            alt="p3"
                            width={50}
                            height={50}
                            />
                          <Image
                            className="border-2 border-rose rounded-full"
                            src="/images/profile4.webp"
                            alt="p4"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <p className="text-cream/70 text-xs leading-tight">
                        {t("hero.patients")}
                        <br />
                        <span className="text-rose">{t("hero.trustNexus")}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 80L1440 80L1440 20C1200 70 800 -10 480 30C240 60 0 20 0 20L0 80Z"
                fill="rgba(255,255,255,0.1)"
              />
            </svg>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="bg-brown py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-taupe/10"
          >
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} i={i} />
            ))}
          </motion.div>
        </section>

        {/* ── INTRO TAGLINE ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-xs tracking-[0.3em] uppercase mb-6"
            >
              {t("intro.badge")}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl sm:text-5xl text-brown leading-tight mb-6"
            >
              {t("intro.title1")}<br />
              <span className="italic text-wine">
                {t("intro.title2")}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe leading-relaxed max-w-2xl mx-auto"
            >
              {t("intro.desc")}
            </motion.p>
          </motion.div>
        </section>

        {/* ── TREATMENTS ───────────────────────────────────────────────────── */}
        <section id="treatments" className="pb-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-14 text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase mb-4"
              >
                {t("treatments.badge")}
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-brown"
              >
                {t("treatments.title")}
              </motion.h2>
            </motion.div>

            <DecorLine className="mb-14" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {treatments.map((item) => (
                <TreatmentCard key={item.id} t={item} bodyWeight={t("treatments.bodyWeight")} learnMore={t("treatments.learnMore")} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-brown relative overflow-hidden">
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-wine/20 pointer-events-none" />
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-wine/10 pointer-events-none" />

          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase mb-4"
              >
                {t("howItWorks.badge")}
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-light"
              >
                {t("howItWorks.title")}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative flex flex-col gap-4"
                >
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-linear-to-r from-wine/40 to-transparent z-0" />
                  )}
                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-wine/30 bg-wine/10 flex items-center justify-center">
                    <span className="font-georgia text-2xl text-rose">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-georgia text-lg text-light">{s.title}</h3>
                  <p className="text-taupe text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
          <FAQWithSchema data={faqdata}/>

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-wine">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-linear(135deg,brown0%,wine100%)",
            }}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-light/10" />
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-light/08" />

            <div className="relative z-10 p-12 lg:p-20 text-center flex flex-col items-center gap-8">
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase"
              >
                {t("cta.badge")}
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl sm:text-5xl text-light leading-tight"
              >
                {t("cta.title1")}
                <br />
                <span className="italic text-rose">{t("cta.title2")}</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-cream/70 max-w-md leading-relaxed"
              >
                {t("cta.desc")}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="https://wa.link/q64h1l"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-light text-brown px-9 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-white transition-colors"
                >
                  <Phone size={15} />
                  {t("cta.button")}
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4 text-cream/60 text-xs"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> {t("cta.address")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> {t("cta.hours")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={12} /> {t("cta.phone")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
