"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  MapPin,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Clock,
  Syringe,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages"
import { doctorMonitoredPricing } from '@/src/data/pricing';

// TypeScript interfaces
interface TrustBarItem {
  icon: string;
  title: string;
  subtitle: string;
}

interface ProgrammeItem {
  title: string;
  text: string;
}

interface RootCauseFactor {
  title: string;
  desc: string;
}

interface PatientProfile {
  title: string;
  desc: string;
}

interface Medication {
  name: string;
  desc: string;
}

interface StepItem {
  title: string;
  desc: string;
}

interface PricingItem {
  title: string;
  price: string;
}

interface ComparisonItem {
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

export default function DoctorMonitoredLanding({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "weightLoss/doctorMonitored");

  // Type-safe translation getters
  const trustBarItems = t("trustBar", { returnObjects: true }) as TrustBarItem[];
  const programmeItems = t("programmeAtGlance.items", { returnObjects: true }) as ProgrammeItem[];
  const rootCauseFactors = t("rootCauses.factors", { returnObjects: true }) as RootCauseFactor[];
  const patientProfiles = t("patientProfile.profiles", { returnObjects: true }) as PatientProfile[];
  const protectionItems = t("professionalGuidance.protectionItems", { returnObjects: true }) as string[];
  const medicationsList = t("medications.list", { returnObjects: true }) as Medication[];
  const stepByStepItems = t("stepByStep.steps", { returnObjects: true }) as StepItem[];
  const pricingItems = t("pricing.prices", { returnObjects: true }) as PricingItem[];
  const resultFactors = t("results.factors", { returnObjects: true }) as string[];
  const comparisons = t("results.comparisons", { returnObjects: true }) as ComparisonItem[];
  const whyNexusPoints = t("whyNexus.points", { returnObjects: true }) as string[];
  const faqs = t("faq.items", { returnObjects: true }) as FAQ[];

  // Icon mapping helper
  const getIconComponent = (iconName: string, className: string) => {
    const iconProps = { className, style: { color: "var(--color-wine)" } };
    switch (iconName) {
      case "Shield":
        return <Shield {...iconProps} />;
      case "Clock":
        return <Clock {...iconProps} />;
      case "Activity":
        return <Activity {...iconProps} />;
      case "MapPin":
        return <MapPin {...iconProps} />;
      default:
        return <Shield {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AllPagesHero
        badge={t("hero.badge")}
        title={t("hero.title")}
        highlight={t("hero.highlight")}
        description={t("hero.description")}
        details={t("hero.details")}
        note={t("hero.note")}
        image="/images/main/doctor-monitored-malaysia.webp"
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

      {/* Trust Bar Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 -mt-8 relative z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBarItems && trustBarItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="bg-glass backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-md">
                {getIconComponent(item.icon, "w-6 h-6 mx-auto mb-2")}
                <div className="font-inter font-medium text-brown text-sm">{item.title}</div>
                <div className="text-taupe text-xs">{item.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Programme At a Glance */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl text-brown mb-12 text-center"
            >
              {t("programmeAtGlance.title")}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programmeItems && programmeItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream rounded-3xl p-6 shadow-sm"
                >
                  <h3 className="font-georgia text-lg text-wine mb-2">{item.title}</h3>
                  <p className="font-inter text-brown/80 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Root Causes Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                {t("rootCauses.title")}
              </h2>

              <p className="font-inter text-brown/80">
                {t("rootCauses.description1")}
              </p>

              <p className="font-inter text-brown/80">
                {t("rootCauses.description2")}
              </p>

              <p className="font-inter text-brown/80">
                {t("rootCauses.description3")}{" "}
                <Link href="/weight-loss/coolsculpting-malaysia/" className="text-wine font-bold italic">
                  {t("rootCauses.coolsculptingLinkText")}
                </Link>{" "}
                {t("rootCauses.toAddressText")}
              </p>

              <div className="bg-light rounded-2xl p-6">
                <p className="font-inter text-brown">
                  {t("rootCauses.conclusion")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              {rootCauseFactors && rootCauseFactors.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-light rounded-2xl p-5 shadow-sm"
                >
                  <h3 className="font-georgia text-xl text-wine mb-2">{item.title}</h3>
                  <p className="font-inter text-brown/75 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Patient Profile Guide */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
            {t("patientProfile.title")}
          </h2>

          <p className="font-inter text-brown/80 mb-10 max-w-4xl">
            {t("patientProfile.description")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {patientProfiles && patientProfiles.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-georgia text-xl text-wine mb-3">{item.title}</h3>
                <p className="font-inter text-brown/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Risk Factors and Medications */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                {t("professionalGuidance.title")}
              </h2>

              <p className="font-inter text-brown/80">
                {t("professionalGuidance.description")}
              </p>

              <div className="bg-light rounded-3xl p-8">
                <h3 className="font-georgia text-2xl text-wine mb-4">
                  {t("professionalGuidance.protectionTitle")}
                </h3>
                <ul className="space-y-3">
                  {protectionItems && protectionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="font-inter text-brown/75">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-brown text-sm mt-8">
                  {t("professionalGuidance.linksPrefix")}{" "}
                  <Link href="/weight-loss/ozempic-malaysia/" className="text-wine font-bold italic">
                    {t("professionalGuidance.ozempicLinkText")}
                  </Link>
                  ,{" "}
                  <Link href="/weight-loss/mounjaro-malaysia/" className="text-wine font-bold italic">
                    {t("professionalGuidance.mounjaroLinkText")}
                  </Link>
                  , {t("professionalGuidance.andText")}{" "}
                  <Link href="/weight-loss/glp-1-programme-malaysia/" className="text-wine font-bold italic">
                    {t("professionalGuidance.glp1LinkText")}
                  </Link>{" "}
                  {t("professionalGuidance.onDedicatedPages")}
                </p>
              </div>

              <p className="text-sm text-taupe p-4 border-l-4 border-wine rounded-lg">
                {t("professionalGuidance.studyReference")}
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                {t("medications.title")}
              </h2>

              <p className="font-inter text-brown/80">
                {t("medications.description")}
              </p>

              <div className="grid gap-4">
                {medicationsList && medicationsList.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-light rounded-2xl p-5 flex items-start gap-4"
                  >
                    <Syringe className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <div>
                      <h3 className="font-georgia text-xl text-wine">{item.name}</h3>
                      <p className="font-inter text-brown/75 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bariatric Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto bg-cream rounded-3xl p-8">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              {t("bariatric.title")}
            </h2>
            <p className="font-inter text-brown/80 mb-4">
              {t("bariatric.description1")}
            </p>
            <p className="font-inter text-brown/80">
              {t("bariatric.description2")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Step by Step Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
            {t("stepByStep.title")}
            <span className="block text-wine text-xl mt-2">{t("stepByStep.highlight")}</span>
          </h2>

          <div className="space-y-8 mt-12">
            {stepByStepItems && stepByStepItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="bg-light rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-wine text-light w-12 h-12 rounded-full flex items-center justify-center font-georgia text-xl font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="font-inter text-brown/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Safety and Expectations */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              {t("safety.title")}
            </h2>

            <div className="bg-light rounded-3xl p-8 shadow-lg space-y-5">
              <p className="font-inter text-brown/80">
                {t("safety.description1")}
              </p>

              <p className="font-inter text-brown/80">
                {t("safety.description2")}
              </p>

              <div className="bg-rose/10 border-l-4 border-rose p-6 rounded-r-2xl">
                <p className="font-inter text-brown/80">
                  <span className="font-bold text-wine">
                    {t("safety.safetyNoteTitle")}
                  </span>{" "}
                  {t("safety.safetyNoteText")}
                </p>
              </div>

              <p className="font-inter text-brown/80">
                {t("safety.description3")}{" "}
                <Link href="/regenerative/hormone-test-malaysia/" className="text-wine font-bold italic">
                  {t("safety.hormoneTestLinkText")}
                </Link>{" "}
                {t("safety.toRuleOutText")}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results and Comparison */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
            {t("results.title")}
          </h2>

          <p className="font-inter text-brown/80 mb-8 text-lg">
            {t("results.description")}
          </p>

          <div className="space-y-6 max-w-4xl">
            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 rounded-2xl p-6"
            >
              <p className="font-inter text-brown">
                {t("results.studyText")}{" "}
                <span className="font-bold text-wine text-2xl">{t("results.studyPercentage")}</span>{" "}
                {t("results.studyComparison")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="font-inter font-medium text-brown">
                {t("results.factorsTitle")}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resultFactors && resultFactors.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-brown/70">
                    <ChevronRight className="w-4 h-4 text-wine" />
                    <span className="font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {comparisons && comparisons.map((item, index) => (
              <div key={index} className="bg-cream rounded-2xl p-6">
                <h3 className="font-georgia text-xl text-wine mb-3">{item.title}</h3>
                <p className="font-inter text-sm text-brown/70">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Nexus */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-8 text-center">
            {t("whyNexus.title")}
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-center">
            {whyNexusPoints && whyNexusPoints.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-light rounded-2xl p-6"
              >
                <p className="font-inter text-brown">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
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
                  { key: "programme", header: "Programme" },
                  { key: "duration", header: "Duration" },
                  { key: "price", header: "Price" },
                ]}
                data={doctorMonitoredPricing}
              title="Medical Weight Loss Clinic Pricing in Malaysia 2026: Transparent Costs at Nexus Clinic KL"
              subtitle="The cost of a medically supervised weight loss programme at Nexus Clinic KL depends on the protocol chosen, the medications prescribed, and the duration of your programme. All first consultations are complimentary. Blood tests and medications are priced transparently and itemised on your treatment plan before you commit. There are no hidden package fees. The table below reflects updated 2026 pricing as a reference. Patients combining weight loss programmes with fat freezing in Malaysia for body contouring may qualify for combined programme pricing. Your doctor will discuss all options during consultation."
              variant="detailed"
              fadeInUp={fadeInUp}
            />
          </motion.div>
        </section>
      {/* FAQ Section */}
      <FAQWithSchema data={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-georgia text-3xl md:text-4xl text-light mb-6">
              {t("cta.title")}
            </h2>

            <p className="font-inter text-cream text-lg mb-8">
              {t("cta.description")}
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us/"
              className="bg-light text-wine px-10 py-5 rounded-full font-inter font-medium text-lg hover:bg-cream transition-colors shadow-2xl inline-flex items-center gap-2"
            >
              {t("cta.buttonText")}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}