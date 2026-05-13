"use client";

import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  Shield,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  Users,
  Scissors,
  Heart,
  Zap,
  CheckCircle2,
  Star,
  Activity,
  Calendar,
  TrendingUp,
  Dumbbell,
  Pill,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import TableForPages from "@/src/components/TableForPages"
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import Link from "next/link";

// Define TypeScript interfaces for the translation structure
interface Benefit {
  title: string;
  desc: string;
}

interface TreatmentArea {
  name: string;
  suitabilityText: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface WhyNexusPoint {
  title: string;
  desc: string;
}

interface PricingItem {
  area: string;
  range: string;
}

interface Competitor {
  name: string;
  highlight: string;
}

interface GuidePoint {
  title: string;
  desc: string;
}

const CoolSculptingLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "weightLoss/coolsculpting");

  // Type-safe translation getters
  const benefits = t("benefits", { returnObjects: true }) as Benefit[];
  const treatmentAreas = t("treatmentAreas.areas", { returnObjects: true }) as TreatmentArea[];
  const faqs = t("faq.items", { returnObjects: true }) as FAQ[];
  const processSteps = t("processTimeline.steps", { returnObjects: true }) as ProcessStep[];
  const whyNexusPoints = t("whyNexus.points", { returnObjects: true }) as WhyNexusPoint[];
  const pricingItems = t("pricing.prices", { returnObjects: true }) as PricingItem[];
  const competitors = t("comparison.competitors", { returnObjects: true }) as Competitor[];
  const guidePoints = t("comparison.guidePoints", { returnObjects: true }) as GuidePoint[];
  const howItWorksSteps = t("howItWorks.steps", { returnObjects: true }) as string[];
  const commonAreasList = t("pricing.commonAreas.list", { returnObjects: true }) as string[];

  const stats = [
    {
      value: "20-25%",
      label: t("whyNexus.stats.fatReduction"),
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      value: "35-60",
      label: t("whyNexus.stats.minutesPerArea"),
      icon: <Clock className="w-5 h-5" />,
    },
    {
      value: "8-12",
      label: t("whyNexus.stats.weeksToResults"),
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      value: "17M+",
      label: t("whyNexus.stats.treatmentsWorldwide"),
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-coolsculpting1.webp",
      after: "/images/B&A-w/B&A-coolsculpting1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-coolsculpting2.webp",
      after: "/images/B&A-w/B&A-coolsculpting2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-coolsculpting3.webp",
      after: "/images/B&A-w/B&A-coolsculpting3.webp",
    },
  ];

  // Icon mapping for benefits
  const benefitIcons = [
    <Scissors key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Clock key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Target key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Shield key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
  ];

  // Icon mapping for treatment areas
  const treatmentAreaIcons = [
    <Activity key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Heart key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Dumbbell key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Pill key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <MapPin key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    <Target key="icon" className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
  ];

  // Icon mapping for why nexus points
  const whyNexusIcons = [
    <Heart key="icon" className="w-5 h-5" />,
    <Target key="icon" className="w-5 h-5" />,
    <Sparkles key="icon" className="w-5 h-5" />,
    <Users key="icon" className="w-5 h-5" />,
  ];

  return (
    <>
      <main
        className="min-h-screen overflow-hidden"
        style={{
          backgroundColor: "var(--color-light)",
          fontFamily: "var(--font-inter)",
        }}
      >
        <AllPagesHero
          badge={t("hero.badge")}
          title={t("hero.title")}
          highlight={t("hero.highlight")}
          description={t("hero.description")}
          details={t("hero.details")}
          note={t("hero.note")}
          image="/images/main/coolsculpting.webp"
          imageAlt={t("hero.imageAlt")}
          ctaText={t("hero.ctaText")}
          whatsappMessage={t("hero.whatsappMessage")}
          floatingTitle={t("hero.floatingTitle")}
          floatingSubtitle={t("hero.floatingSubtitle")}
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />

        {/* Why Choose CoolSculpting */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("overview.title")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  {t("overview.highlight")}
                </span>
              </h2>
              <p className="text-lg text-taupe">
                {t("overview.description")}
              </p>
              <p className="text-lg text-taupe">
                {t("overview.descriptionExtended")}{" "}
                <Link href="/weight-loss/coolsculpting-malaysia/" className="text-wine font-bold italic">
                  {t("overview.bodyContouringLinkText")}
                </Link>
                . {t("overview.visibleResultsText")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits && benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-2xl text-center group cursor-pointer"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-glass)" }}
                  >
                    {benefitIcons[index]}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-taupe text-center max-w-2xl mx-auto mt-8">
              {t("overview.studyReference")}
            </p>
          </div>
        </motion.section>

        {/* Follow-up Intro Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="space-y-6 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("stubbornFat.title")}
                <br />
                <span className="text-wine font-bold italic">
                  {t("stubbornFat.highlight")}
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                {t("stubbornFat.description")}
              </p>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                {t("stubbornFat.description2")}
              </p>
              <p className="text-center">
                {t("stubbornFat.footerNote")}{" "}
                <Link href="/weight-loss/glp-1-programme-malaysia/" className="text-wine font-bold italic">
                  {t("stubbornFat.glp1LinkText")}
                </Link>{" "}
                {t("stubbornFat.orText")}{" "}
                <Link href="/weight-loss/glp-1-programme-malaysia/" className="text-wine font-bold italic">
                  {t("stubbornFat.mounjaroLinkText")}
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "white" }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full"
              style={{ backgroundColor: "var(--color-wine)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
              style={{ backgroundColor: "var(--color-rose)" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("howItWorks.title")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  {t("howItWorks.highlight")}
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  {t("howItWorks.description")}
                </p>

                <div className="space-y-4">
                  {howItWorksSteps && howItWorksSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <CheckCircle2
                        className="w-6 h-6 shrink-0"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <ThermometerSnowflake
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("howItWorks.controlledCooling")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <Activity
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("howItWorks.crystallisation")}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <Zap
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("howItWorks.naturalClearance")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <Sparkles
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("howItWorks.naturalContour")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Areas */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("treatmentAreas.title")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  {t("treatmentAreas.highlight")}
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                {t("treatmentAreas.description")}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {treatmentAreas && treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl text-center cursor-pointer group"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="text-4xl flex justify-center mb-3 group-hover:scale-110 transition-transform">
                    {treatmentAreaIcons[index]}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {area.suitabilityText}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 rounded-3xl text-center"
              style={{ backgroundColor: "var(--color-rose)", color: "white" }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {t("treatmentAreas.ctaBox.title")}
              </h3>
              <p className="mb-6">
                {t("treatmentAreas.ctaBox.description")}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="px-8 py-3 rounded-full bg-white font-semibold inline-block"
                style={{ color: "var(--color-wine)" }}
              >
                {t("treatmentAreas.ctaBox.buttonText")}
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Nexus Clinic */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  {t("whyNexus.title")}
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    {t("whyNexus.highlight")}
                  </span>
                </h2>

                <div className="space-y-4">
                  {whyNexusPoints && whyNexusPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-rose)",
                          color: "white",
                        }}
                      >
                        {whyNexusIcons[index]}
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "var(--color-brown)" }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "var(--color-taupe)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        5000+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.stats.procedures")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        35 min
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.stats.cycleTime")}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        17M+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.stats.globalTreatments")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        0
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.stats.downtime")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Process Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("processTimeline.title")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  {t("processTimeline.highlight")}
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps && processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-2xl"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: "var(--color-wine)", opacity: 0.3 }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ChevronRight
                        className="w-6 h-6"
                        style={{ color: "var(--color-taupe)" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("comparison.title")}
                <br />
                <span className="text-wine font-bold italic">
                  {t("comparison.highlight")}
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("comparison.treatmentPathways")}
                </h3>
                <div className="space-y-3">
                  {competitors && competitors.map((clinic, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl flex items-center justify-between"
                      style={{ backgroundColor: "white" }}
                    >
                      <span style={{ color: "var(--color-brown)" }}>
                        {clinic.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {clinic.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("comparison.guideTitle")}
                </h3>
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <ul className="space-y-4">
                    {guidePoints && guidePoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 shrink-0 mt-1" />
                        <div>
                          <strong>{point.title}</strong>
                          <p className="text-sm opacity-90">
                            {point.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <p className="text-center mt-12" style={{ color: "var(--color-taupe)" }}>
              {t("comparison.footerNote")}{" "}
              <Link href="/weight-loss/fat-freezing-malaysia/" className="text-wine font-bold italic">
                {t("comparison.fatFreezingLinkText")}
              </Link>
            </p>
          </div>
        </motion.section>
         {/* Pricing */}

        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <TableForPages 
                columns={[
                  { key: "treatment", header: "Treatment System" },
                  { key: "applicator", header: "Applicator / Option" },
                  { key: "area", header: "Parts / Areas" },
                  { key: "duration", header: "Duration" },
                  { key: "normalPrice", header: "Normal Price" },
                  { key: "sellingPrice", header: "Selling Price" },
                  { key: "promoPrice", header: "Promo Price" },
                  { key: "notes", header: "Notes" },
                ]}
                data={[
                  {
                    treatment: "Coolsculpting Petite",
                    applicator: "Fit",
                    area: "Under Arm / inner thighs",
                    duration: "35 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Petite",
                    applicator: "Core",
                    area: "Lower & upper abdomen / banana roll",
                    duration: "35 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Petite",
                    applicator: "Curve ++",
                    area: "Flanks / muffin top / bra buldge / axillary puff",
                    duration: "35 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Advantage",
                    applicator: "Fit",
                    area: "Under Arm / inner thighs",
                    duration: "35 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Advantage",
                    applicator: "Core",
                    area: "Lower & upper abdomen / banana roll",
                    duration: "35 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Advantage",
                    applicator: "Curve ++",
                    area: "Flanks / muffin top / bra buldge / axillary puff",
                    duration: "35 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Legacy",
                    applicator: "Coolsculpting Mini",
                    area: "Double chin",
                    duration: "45 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                  {
                    treatment: "Coolsculpting Legacy",
                    applicator: "Coolsculpting Smooth",
                    area: "Outer Thighs",
                    duration: "1 hour & 15 minutes",
                    normalPrice: "RM2500 per applicator",
                    sellingPrice: "Depending on the promo of the month",
                    promoPrice: "RM1500",
                    notes: "Price shown on parent Coolsculpting row",
                  },
                ]}
              title="CoolSculpting Malaysia Pricing Guide"
              subtitle=""
              variant="detailed"
              fadeInUp={fadeInUp}
            />
          </motion.div>
        </section>
        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* Final CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div variants={fadeInUp} className="space-y-6">
              <ThermometerSnowflake className="w-16 h-16 mx-auto opacity-75" />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-georgia)" }}
              >
                {t("cta.title")}
                <br />
                {t("cta.highlight")}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {t("cta.description")}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="px-12 py-4 rounded-full bg-white font-semibold text-lg inline-flex items-center gap-2 mx-auto"
                style={{ color: "var(--color-wine)" }}
              >
                {t("cta.buttonText")}
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm opacity-75">
                {t("cta.disclaimer")}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default CoolSculptingLanding;