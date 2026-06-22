"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  AlertCircle,
  CheckCircle2,
  Heart,
  MapPin,
  ChevronRight,
  Activity,
  Award,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages"
import { wegovyComparisonPricing } from '@/src/data/pricing';
import Link from "next/link";
export default function PageWegovyMalaysia({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "weightLoss/wegovy");

  const faqs = [
    {
      q: "Is Wegovy available in Malaysia and when did it launch?",
      a: "Wegovy received NPRA approval in Malaysia in April 2023 and became commercially available from January 2026 through licensed medical clinics after the global supply shortage eased.",
    },
    {
      q: "How does Wegovy differ from Ozempic if they contain the same molecule?",
      a: "Both contain semaglutide, but Wegovy uses a higher maintenance dose of 2.4 mg and is approved specifically for chronic weight management. Ozempic has a maximum dose of 1 mg and is primarily approved for type 2 diabetes management.",
    },
    {
      q: "Who is Wegovy most suitable for in Malaysia?",
      a: "Wegovy is commonly suited to patients whose main goal is weight management rather than diabetes control, especially those with BMI above 30 or above 27.5 with a weight-related comorbidity, and patients with cardiovascular risk who may benefit from its additional heart-protection data.",
    },
    {
      q: "What is the Wegovy price in Malaysia per month?",
      a: "As of 2026, one Wegovy pen usually costs between RM 1,100 and RM 1,600 depending on dose and clinic structure. At Nexus Clinic KL, monthly programme cost including doctor review commonly ranges from around RM 1,300 to RM 1,800.",
    },
    {
      q: "Does Wegovy protect against heart attacks and strokes?",
      a: "Yes. In the SELECT trial, semaglutide 2.4 mg reduced major adverse cardiovascular events by 20% in overweight or obese patients with established cardiovascular disease and no diabetes.",
    },
    {
      q: "How long does it take for Wegovy to start working?",
      a: "Most patients notice lower appetite within one to two weeks. Visible weight loss often starts around weeks three to six, and the strongest rate of reduction usually occurs between months two and five as the dose is titrated upward.",
    },
    {
      q: "Is Wegovy safe for patients with PCOS?",
      a: "Semaglutide has shown useful benefits in patients with PCOS, especially around insulin resistance, weight and metabolic markers. Suitability still depends on a full medical assessment.",
    },
    {
      q: "Can I switch from Ozempic to Wegovy?",
      a: "Yes. This is a common transition for patients who have plateaued at the Ozempic 1 mg ceiling or want to move to the full weight-management indication. The switch is doctor-managed and usually restarts from the Wegovy titration pathway.",
    },
    {
      q: "Will I regain weight after stopping Wegovy?",
      a: "Weight regain is common if semaglutide is stopped without a structured exit plan. This is why tapering, habit reinforcement and a written maintenance strategy are important.",
    },
    {
      q: "Why is a prescription and medical supervision required for Wegovy in Malaysia?",
      a: "Wegovy is prescription-only in Malaysia. It requires a doctor because eligibility, contraindications, medication interactions, titration and ongoing monitoring all need clinical supervision.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-wegovy1.webp",
      after: "/images/B&A-w/B&A-wegovy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-wegovy2.webp",
      after: "/images/B&A-w/B&A-wegovy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-wegovy3.webp",
      after: "/images/B&A-w/B&A-wegovy3.webp",
    },
  ];

  return (
    <>
      <main className="min-h-screen overflow-hidden">
        <AllPagesHero
          badge="Higher-Dose Semaglutide for Weight Management"
          title="Wegovy Malaysia Programme"
          highlight="Weight Loss and Heart Protection Under Doctor Supervision"
          description="Wegovy is the only weight loss injection in Malaysia approved specifically for chronic weight management and supported by landmark cardiovascular protection data."
          details="At Nexus Clinic KL, Wegovy is prescribed through a fully supervised doctor-led programme with screening, bloodwork, titration and monthly follow-up."
          note="Higher-dose semaglutide with weight-management approval, structured titration, and doctor-led oversight at Nexus Clinic Kuala Lumpur."
          image="/images/weight-loss/Wegovy Weight Loss Treatment.webp"
          imageAlt="Wegovy weight loss treatment in Kuala Lumpur"
          ctaText="Book Free Assessment"
          whatsappMessage="Hi, I'm interested in the Wegovy weight loss programme at Nexus Clinic KL. I'd like to book a consultation."
          floatingTitle="Wegovy Programme"
          floatingSubtitle="Doctor-supervised • Weekly injection • 20% CV risk reduction"
          staggerContainer={staggerContainer}
          fadeInLeft={fadeInLeft}
          fadeInRight={fadeInRight}
          fadeInUp={fadeInUp}
        />

        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" bg-cream"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, text: "Doctor-supervised" },
                { icon: Clock, text: "Weekly injection plan" },
                { icon: Heart, text: "20% CV risk reduction" },
                { icon: MapPin, text: "KLCC location" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 bg-glass backdrop-blur-sm p-3 rounded-xl border border-cream shadow-md"
                >
                  <div className="bg-cream p-2 rounded-full">
                    <item.icon className="w-4 h-4 text-wine" />
                  </div>
                  <span className="text-sm text-brown font-inter font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Treatment Overview */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy Weight Loss Programme at a Glance
              </h2>
              <p className="text-taupe font-inter text-lg">
                A higher-dose semaglutide programme built for chronic weight
                management, gradual titration and long-term monitoring.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Active Ingredient",
                  text: "Semaglutide 2.4 mg",
                },
                {
                  title: "Mechanism",
                  text: "GLP-1 receptor agonist with appetite and gastric-emptying effects",
                },
                {
                  title: "Expected Weight Loss",
                  text: "12 to 17% over 68 weeks",
                },
                {
                  title: "Cardiovascular Benefit",
                  text: "20% reduction in major cardiovascular events",
                },
                {
                  title: "Starting Dose",
                  text: "0.25 mg weekly for 4 weeks",
                },
                {
                  title: "Frequency",
                  text: "Once-weekly subcutaneous injection",
                },
                {
                  title: "Malaysia Status",
                  text: "NPRA-approved since April 2023, available from January 2026",
                },
                {
                  title: "Prescription",
                  text: "Doctor assessment, blood panel and prescription required",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="bg-light p-6 rounded-3xl shadow-lg"
                >
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brown font-inter text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What is Wegovy */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl md:text-5xl text-brown">
                  What makes Wegovy different from{" "}
                  <span className="text-wine">Ozempic?</span>
                </h2>

                <p className="text-brown font-inter text-lg">
                  Wegovy contains the same molecule as Ozempic, semaglutide, but
                  at more than double the maximum dose. 
                   <Link href="/weight-loss/glp-1-programme-malaysia/" className="text-wine font-bold italic">
                    full Ozempic weight loss programme page
                  </Link>{' '}
                  is primarily a
                  diabetes medication. Wegovy is specifically designed and
                  approved for chronic weight management.
                </p>

                <div className="bg-cream p-8 rounded-3xl border border-taupe/10">
                  <p className="font-inter text-brown italic">
                    <span className="font-bold text-wine">Why that matters:</span>{" "}
                    Wegovy delivers stronger appetite suppression, carries the
                    full weight-management indication, and is the only injectable
                    weight-loss medicine in Malaysia with specific evidence for
                    reducing heart attack and stroke risk in qualifying patients.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {[
                    "Wegovy reaches 2.4 mg weekly while Ozempic reaches 1 mg weekly.",
                    "Wegovy is approved for chronic weight management, not off-label use.",
                    "Wegovy carries the landmark SELECT trial cardiovascular data.",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-4 bg-glass rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                      <span className="font-inter text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-cream p-8 rounded-3xl">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    Wegovy vs Ozempic
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Wegovy: 12 to 17% expected average weight reduction",
                      "Ozempic: 10 to 15% average reduction at its lower ceiling",
                      "Wegovy: primary goal is weight management",
                      "Ozempic: primary goal is diabetes management",
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="text-brown font-inter">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-wine/5 p-8 rounded-3xl">
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    Heart protection advantage
                  </h3>
                  <p className="text-brown font-inter">
                    In patients with obesity and established cardiovascular
                    disease, semaglutide 2.4 mg reduced major adverse
                    cardiovascular events by 20% in the SELECT trial.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Who It Is For */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl md:text-5xl text-brown">
                  Who Wegovy is for{" "}
                  <span className="text-wine">(and who should avoid it)</span>
                </h2>

                <div className="space-y-4">
                  <h3 className="font-georgia text-2xl text-brown">
                    Wegovy may be appropriate for:
                  </h3>
                  <div className="bg-light p-6 rounded-2xl">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown font-inter">
                          BMI above 30
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown font-inter">
                          BMI above 27.5 with at least one weight-related comorbidity
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown font-inter">
                          Patients with cardiovascular disease who need both weight reduction and cardiac risk support
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown font-inter">
                          Patients who plateaued on Ozempic 1 mg and need a step-up semaglutide pathway
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-rose/10 p-6 rounded-2xl border-l-4 border-wine">
                  <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-wine" />
                    Wegovy is not for everyone
                  </h3>
                  <p className="text-brown font-inter">
                    Wegovy is contraindicated in patients with a personal or
                    family history of medullary thyroid carcinoma or MEN2.
                    Additional caution is needed for pregnancy planning,
                    pancreatitis history, active gallbladder disease and some
                    retinal or mood-related conditions.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose p-1 rounded-3xl">
                  <div className="bg-light p-8 rounded-3xl">
                    <h3 className="font-georgia text-2xl text-brown mb-6">
                      What Nexus Clinic KL assesses
                    </h3>
                    <div className="space-y-4">
                      {[
                        "BMI and waist circumference",
                        "Weight history and prior treatment attempts",
                        "Cardiovascular risk factors",
                        "Current medications and metabolic health",
                        "Suitability for titration and long-term follow-up",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-wine rounded-full" />
                          <span className="text-brown font-inter">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Wegovy vs Mounjaro */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy vs Mounjaro: which one fits better?
              </h2>
              <p className="text-taupe font-inter text-lg">
                Both are powerful injectable options, but they serve slightly
                different patient priorities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Choose Wegovy more often when:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Weight loss plus cardiovascular protection is a priority",
                    "You want a semaglutide step-up from Ozempic",
                    "You have moderate obesity and established cardiovascular risk",
                    "You want lower cost than Mounjaro in many cases",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Choose   <Link href="/weight-loss/mounjaro-malaysia/" className="text-wine font-bold italic">Mounjaro </Link> more often when:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Maximum weight-loss percentage is the primary goal",
                    "Starting weight is higher",
                    "Insulin resistance is more significant",
                    "You need a different mechanism after plateauing on semaglutide",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                What results can you realistically expect?
              </h2>
              <p className="text-taupe font-inter text-lg">
                Weight reduction is gradual, dose-dependent and strongly linked
                to consistency with follow-up and lifestyle structure.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                variants={scaleIn}
                className="bg-light p-8 rounded-3xl shadow-lg"
              >
                <div className="text-5xl font-georgia text-wine mb-4">
                  12-17%
                </div>
                <p className="text-brown font-inter">
                  Expected average body-weight reduction over 68 weeks in STEP
                  trials at Wegovy dosing.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-light p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Early timeline
                </h3>
                <p className="text-brown font-inter">
                  Many patients feel appetite reduction within the first one to
                  two weeks. Visible change often begins around weeks three to
                  six and becomes stronger through the middle titration phases.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-light p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  If treatment stops
                </h3>
                <p className="text-brown font-inter">
                  Clinical evidence shows that substantial weight regain can
                  happen after stopping semaglutide without an exit plan. This
                  is why tapering and maintenance planning matter.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Dosage Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div variants={fadeInUp} className="max-w-4xl mb-16">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy dosage timeline: what to expect at each phase
              </h2>
              <p className="text-taupe font-inter text-lg">
                Wegovy is titrated gradually from 0.25 mg to 2.4 mg over about
                16 to 20 weeks to minimise GI side effects while building the
                full appetite-suppression effect.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  title: "Phase 1",
                  desc: "Weeks 1 to 4 at 0.25 mg. Appetite begins reducing and GI effects are most likely here.",
                },
                {
                  title: "Phase 2",
                  desc: "Weeks 5 to 8 at 0.5 mg. Food cravings reduce and visible weight change often starts.",
                },
                {
                  title: "Phase 3",
                  desc: "Weeks 9 to 12 at 1.0 mg. Appetite suppression strengthens and blood pressure or glucose may begin improving.",
                },
                {
                  title: "Phase 4",
                  desc: "Weeks 13 to 16 at 1.7 mg. Peak rate of weight loss for many patients.",
                },
                {
                  title: "Phase 5",
                  desc: "Week 17+ at 2.4 mg. Maintenance dose with long-term weight and cardiovascular benefit focus.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-shadow"
                >
                  <div className="bg-wine text-light w-10 h-10 rounded-full flex items-center justify-center font-bold font-inter mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brown font-inter text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Journey at Nexus */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div variants={fadeInUp} className="max-w-3xl mb-16">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy at Nexus Clinic Kuala Lumpur: what your journey looks like
              </h2>
              <p className="text-taupe font-inter text-lg">
                The programme is structured around safety, metabolic monitoring,
                dose tolerance and long-term weight maintenance.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Step 1: Doctor consultation and eligibility assessment",
                    desc: "We review your health history, BMI, waist circumference, cardiovascular risk, medications and weight-loss history.",
                  },
                  {
                    title: "Step 2: Pre-treatment blood panel",
                    desc: "HbA1c, fasting glucose, liver, kidney, thyroid and lipid markers are checked before prescription.",
                  },
                  {
                    title: "Step 3: Prescription, injection training and personalised plan",
                    desc: "You receive a structured titration plan, injection guidance and dietary recommendations focused on protein-first eating.",
                  },
                  {
                    title: "Step 4: Monthly reviews and cardiovascular monitoring",
                    desc: "Weight, side effects, blood pressure, heart rate and metabolic progress are reviewed regularly.",
                  },
                  {
                    title: "Step 5: Exit strategy and maintenance planning",
                    desc: "Tapering or minimum-effective-dose planning is introduced for long-term stability.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="bg-light p-6 rounded-2xl hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-wine text-light w-10 h-10 rounded-full flex items-center justify-center font-bold font-inter">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-georgia text-xl text-brown mb-2">
                          {item.title}
                        </h3>
                        <p className="text-brown font-inter text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-rose/5 p-8 rounded-3xl">
                  <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                    <Activity className="w-6 h-6 text-wine" />
                    What the monthly review focuses on
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Weight trend",
                      "GI side effects",
                      "Blood pressure",
                      "Heart rate",
                      "Dose tolerance",
                      "Metabolic progress",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                        <span className="text-brown font-inter text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl">
                  <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-wine" />
                    Why this structure matters
                  </h3>
                  <p className="text-brown font-inter">
                    Proper titration and monitoring reduce dropout risk, improve
                    tolerability, and help patients build a plan that is more
                    sustainable after the active treatment phase.
                  </p>

                  <p className="text-sm text-taupe mt-8 border-l-4 rounded-lg border-wine p-4">
                    Lincoff AM et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. 
                    <a 
                      href="https://pubmed.ncbi.nlm.nih.gov/37952131/" 
                      target="_blank" 
                      rel="nofollow" 
                      className="text-wine font-bold italic"
                    >
                      The New England Journal of Medicine
                    </a>. 
                    2023;389(24):2221-2232. This landmark SELECT trial demonstrated that semaglutide 2.4 mg achieves a 20% relative risk reduction in major adverse cardiovascular events (MACE) in adults with overweight or obesity and established cardiovascular disease, independent of diabetes status.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Side Effects */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Side effects, safety and what to watch for
              </h2>
              <p className="text-taupe font-inter">
                The most common side effects are gastrointestinal and
                dose-dependent. They usually happen during early titration or
                after dose increases.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Common side effects
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Nausea",
                    "Vomiting",
                    "Diarrhoea",
                    "Constipation",
                    "Abdominal discomfort",
                    "Temporary GI upset",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-cream p-4 rounded-2xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-wine" />
                      <span className="text-brown font-inter text-sm">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-cream p-6 rounded-2xl">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Practical ways to reduce discomfort
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Eat smaller meals",
                      "Avoid very rich or high-fat foods",
                      "Stay hydrated",
                      "Use slower dose escalation when clinically appropriate",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="text-brown font-inter text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-rose/10 p-6 rounded-2xl border-l-4 border-wine">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    More serious risks that need monitoring
                  </h3>
                  <p className="text-brown font-inter">
                    Pancreatitis, acute gallbladder disease, retinal changes in
                    selected patients, thyroid-cancer contraindications, and
                    pregnancy-related safety restrictions all require doctor
                    oversight.
                  </p>
                </div>

                <div className="bg-wine/5 p-6 rounded-2xl">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Malaysia-specific safety note
                  </h3>
                  <p className="text-brown font-inter">
                    NPRA has highlighted aspiration risk with GLP-1 medicines
                    during general anaesthesia or deep sedation. If you are
                    planning surgery or a sedated procedure, your care team must
                    know in advance.
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-2xl">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Pregnancy planning
                  </h3>
                  <p className="text-brown font-inter">
                    Wegovy should not be used during pregnancy, and patients
                    planning pregnancy are typically advised to stop it at least
                    two months beforehand.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy vs Ozempic vs Mounjaro
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Wegovy vs Ozempic",
                  content:
                    "Both use semaglutide, but Wegovy is built and approved for chronic weight management at a higher dose, while Ozempic is primarily a diabetes medication.",
                },
                {
                  title: "Wegovy vs Mounjaro",
                  content:
                    "Mounjaro usually produces higher average weight-loss percentages, but Wegovy has the unique advantage of cardiovascular outcome data for heart-risk reduction.",
                },
                {
                  title: "Wegovy and body contouring",
                  content:
                    "Wegovy helps with overall weight reduction. If residual localised fat remains after medical weight loss, body contouring like fat freezing or CoolSculpting may become the next step.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-8 rounded-3xl shadow-lg"
                >
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    {item.title}
                  </h3>
                  <p className="text-brown font-inter">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 bg-white/50 rounded-3xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Areas patients often ask about
              </h3>
              <p className="text-brown font-inter mb-4">
                Wegovy supports whole-body fat reduction rather than spot
                reduction. Patients commonly ask about waistline, belly, thighs,
                arms, back fat and facial changes as weight comes down.
              </p>
              <p className="text-brown font-inter">
                  Patients who have completed significant weight loss with Wegovy and want to address residual localised fat deposits can explore our{' '}
                  <Link href="/weight-loss/coolsculpting-malaysia/" className="text-wine font-bold italic">
                    CoolSculpting Malaysia programme
                  </Link>{' '}
                  or our{' '}
                  <Link href="/weight-loss/fat-freezing-malaysia/" className="text-wine font-bold italic">
                    fat freezing treatment in KL
                  </Link>{' '}
                  as a body contouring step following medical weight loss.
              </p>
            </motion.div>
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
                  { key: "factor", header: "Factor" },
                  { key: "wegovy", header: "Wegovy (Semaglutide 2.4mg)" },
                  { key: "ozempic", header: "Ozempic (Semaglutide 0.25mg to 1mg)" },
                ]}
                data={wegovyComparisonPricing}
              title="Wegovy vs Ozempic Malaysia: Same Molecule, Completely Different Mission"
              subtitle="The most common question Malaysian patients ask when researching semaglutide is: if Wegovy and Ozempic both contain semaglutide, why is Wegovy more expensive and what is the actual difference? The answer has three parts: dose, primary approval, and cardiovascular indication. No Malaysian competitor clinic explains all three clearly in one place. The table below does."
              variant="detailed"
              fadeInUp={fadeInUp}
            />

            <p className="max-w-4xl mt-8 text-brown/50 text-sm mx-auto text-center">
              The practical implication is this. Patients using Ozempic 1 mg for weight loss are using a diabetes medication off-label at a dose below Wegovy's therapeutic ceiling for obesity. Wegovy at 2.4 mg delivers a stronger and more sustained appetite suppression effect, produces modestly better weight loss results, and carries the full weight management regulatory approval rather than an off-label prescription. For patients with cardiovascular disease, the SELECT trial cardiovascular benefit makes Wegovy the medically preferred choice over Ozempic for weight management, regardless of cost.
                Patients currently on Ozempic who want to understand the step-up process can review our full Ozempic weight loss programme page and discuss the transition at consultation.
            </p>
          </motion.div>
        </section>
        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* Final CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-wine to-rose relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/clinic/interior.webp')] opacity-10 mix-blend-overlay" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-light mb-6">
                Ready to start a doctor-led Wegovy programme?
              </h2>
              <p className="text-cream font-inter text-lg mb-8">
                If you want medically supervised Wegovy treatment in Kuala
                Lumpur, Nexus Clinic KL can guide you through screening,
                titration, monitoring and long-term maintenance planning.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us"
                className="bg-light text-wine px-10 py-5 rounded-full font-inter font-medium text-lg hover:bg-cream transition-colors shadow-2xl"
              >
                Book Free Assessment
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}