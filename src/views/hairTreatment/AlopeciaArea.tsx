"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Whatsapp from "@/src/components/Whatsapp";
import {
  ChevronRight,
  AlertCircle,
  Calendar,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import Link from "next/link";

// Complete FAQ data with all questions from content
const faqData = [
  {
    q: "What is the best treatment for alopecia areata in Malaysia?",
    a: "The best treatment depends on the size, location and activity of the bald patch. Small patches are often treated with corticosteroid injections or topical steroid treatment. Some patients may also benefit from PRP or minoxidil support. Nexus Clinic KL offers doctor-led assessment to determine the most suitable approach for your specific condition.",
  },
  {
    q: "Can hydrocortisone cream regrow hair?",
    a: "Hydrocortisone cream is not a direct hair growth product. It may help reduce inflammation in selected scalp conditions, but it does not work like minoxidil. It should only be used when the cause of hair loss is suitable for steroid-based treatment. Using hydrocortisone without proper diagnosis can delay appropriate care.",
  },
  {
    q: "Is hydrocortisone cream good for alopecia areata?",
    a: "It may help in mild or selected cases, but many alopecia areata patients need stronger treatment such as corticosteroid injections or prescription-strength topical therapy. A doctor should assess the patch first before any steroid-based treatment is started.",
  },
  {
    q: "What causes round bald patches on the scalp?",
    a: "Round bald patches are commonly linked to alopecia areata, but they can also be caused by fungal infection, inflammation or scarring hair loss. Diagnosis is important before starting treatment to avoid using the wrong creams or delaying proper care.",
  },
  {
    q: "Can alopecia areata be cured permanently?",
    a: "Alopecia areata can improve, but it may come back. Treatment aims to control immune activity, support regrowth and reduce the risk of worsening patches. Regular follow-up and early intervention when new patches appear offer the best long-term outcome.",
  },
  {
    q: "How fast does hair grow back after treatment?",
    a: "Some patients see early regrowth within weeks. In responsive cases, visible regrowth may appear within 6 to 12 weeks, but results vary. Factors affecting regrowth include patch size, duration of hair loss, and individual immune response.",
  },
  {
    q: "Are steroid injections for hair loss painful?",
    a: "Most patients tolerate them well. The injections are small and placed directly into the bald patch. Mild discomfort or tenderness may happen temporarily. The procedure typically takes 10 to 15 minutes depending on the number and size of patches.",
  },
  {
    q: "Can alopecia areata spread?",
    a: "Yes, it can spread in some patients. Early assessment is important, especially if new patches are appearing. Prompt treatment of active patches may help limit spread and improve regrowth potential.",
  },
  {
    q: "Is alopecia areata caused by stress?",
    a: "Stress may trigger or worsen alopecia areata in some people, but it is not the only cause. It is mainly linked to immune activity around the hair follicles. Other factors include genetics and underlying autoimmune conditions.",
  },
  {
    q: "Can PRP treat alopecia areata?",
    a: "PRP may support scalp healing and hair regrowth in selected cases, but it is not always the first treatment for active alopecia areata. It may be used as part of a combination plan alongside steroid-based treatment for patients with overlapping thinning concerns.",
  },
  {
    q: "Can I use minoxidil with hydrocortisone?",
    a: "Only under medical guidance. Minoxidil and steroid creams work differently, and using them together depends on the diagnosis and scalp condition. A doctor should assess your scalp before combining these treatments.",
  },
  {
    q: "When should I see a doctor for patchy hair loss?",
    a: "You should see a doctor if you notice sudden bald patches, spreading hair loss, itchy or inflamed scalp, beard patches, eyebrow hair loss or no improvement after trying over-the-counter products. Early assessment offers the best chance for regrowth.",
  },
];

interface AlopeciaAreaProps {
  locale: string;
}

export default function AlopeciaArea  ({ locale} : AlopeciaAreaProps) {

//   const { t } = useTranslation(locale, "hair/alopeciaArea");

  return (
    <div className="min-h-screen bg-light font-inter overflow-x-hidden">
      {/* Hero Section */}
      <AllPagesHero
        badge="Nexus Clinic Kuala Lumpur"
        title="Treat Alopecia Areata in Malaysia"
        highlight="Restore Hair & Confidence"
        description="Sudden bald patches are not normal hair loss. You may wake up one day and notice a round patch on your scalp. No warning. No slow thinning. Just missing hair."
        details="Alopecia areata is not ordinary hair thinning. It is a condition where the immune system attacks the hair follicles. The hair falls out in patches, but the follicle may still be alive. That means regrowth may still be possible with the right treatment. At Nexus Clinic Kuala Lumpur, treatment starts with diagnosis first. We check whether your hair loss is really alopecia areata, scalp inflammation, fungal infection, stress-related shedding, male or female pattern hair loss, or another condition. The goal is simple. Find the cause. Calm the scalp. Support regrowth. Avoid guessing with the wrong creams."
        note="Not all hair loss is alopecia areata. Hydrocortisone cream and other steroid-based treatments may help in selected inflammatory scalp conditions, but they are not general hair growth products. Always confirm the diagnosis before starting treatment."
        image="/images/hair/Alopecia Areata Treatment .jpeg"
        imageAlt="Alopecia areata treatment at Nexus Clinic Kuala Lumpur showing scalp assessment and patchy hair loss"
        ctaText="Book Hair Loss Consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I want to know more about your alopecia areata treatment services"
        floatingTitle="✨ Alopecia Areata Treatment"
        floatingSubtitle="Diagnosis first • Targeted care"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Alopecia Areata Treatment Overview Table */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <TableForPages
            columns={[
              { key: "category", header: "Treatment Area", className: "font-semibold" },
              { key: "details", header: "Details" },
            ]}
            data={[
              { category: "Condition", details: "Alopecia areata, patchy hair loss, bald spots" },
              { category: "Common Signs", details: "Round bald patches, sudden hair fall, scalp patches, beard patches" },
              { category: "Main Cause", details: "Immune-related inflammation around hair follicles" },
              { category: "Treatment Options", details: "Corticosteroid injections, topical steroid creams, hydrocortisone-based care, PRP, minoxidil support" },
              { category: "Session Time", details: "10 to 30 minutes, depending on treatment" },
              { category: "Downtime", details: "Minimal" },
              { category: "Results Timeline", details: "Regrowth may appear within 6 to 12 weeks in responsive cases" },
              { category: "Best For", details: "Early or limited patchy hair loss" },
              { category: "Clinic Approach", details: "Diagnosis first, then personalised treatment" },
            ]}
            title="Alopecia Areata Treatment Overview"
            subtitle="Everything you need to know at a glance."
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-4 px-0"
          />
        </div>
      </motion.section>

      {/* What Is Alopecia Areata Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-white to-cream p-8 md:p-12 rounded-3xl border border-taupe/20"
          >
            <h2 className="font-georgia text-3xl text-brown mb-6">
              What Is Alopecia Areata?
            </h2>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              Alopecia areata is a type of hair loss where the body's immune system attacks the hair follicles.
              It usually appears as round or oval bald patches on the scalp. Some patients notice one small patch. Others may develop multiple patches.
            </p>
            <p className="text-lg text-brown/80 leading-relaxed mb-4">
              It can also affect the beard area, eyebrows, eyelashes, and other hair-bearing areas.
              The hair can fall out quickly. This is why many patients feel shocked when they first notice it.
            </p>
            <p className="text-lg text-brown/80 leading-relaxed">
              The good news is that alopecia areata does not always mean permanent hair loss. In many cases, the follicle is still present. Treatment aims to reduce inflammation and help the follicle restart growth.
            </p>
            <div className="flex justify-center mt-6">
              <motion.a
                href="/contact-us/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Hair Loss Assessment
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Patchy Hair Loss Problem Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            The Patchy Hair Loss Problem Most Patients Get Wrong
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 leading-relaxed mb-4">
            Most patients think every type of hair loss needs the same treatment.
            That is not true.
          </motion.p>
          <div className="bg-cream p-6 rounded-xl mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Minoxidil may help pattern thinning.</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">PRP may support weak follicles.</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">Hair transplant may help permanent bald areas.</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-wine mt-1" /><span className="text-brown">But alopecia areata needs a different plan.</span></li>
            </ul>
          </div>
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 leading-relaxed mb-4">
            If the immune system is attacking the follicle, simply applying ordinary hair oil or shampoo will not solve the problem.
            And if the bald patch is caused by fungus, infection or scarring alopecia, steroid cream may make the problem worse.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 leading-relaxed font-medium">
            This is why diagnosis matters. At Nexus Clinic KL, we first identify what type of hair loss you have before recommending any treatment.
          </motion.p>
        </div>
      </motion.section>

      {/* Common Signs Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div>
          <Image 
            src="/images/hair/Alopecia Areata Treatment.webp" 
            alt="Alopecia areata signs and symptoms showing patchy hair loss on the scalp"
            width={1200} 
            height={800}
            className="rounded-2xl mb-8 object-cover w-full h-auto" 
           />
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            Common Signs of Alopecia Areata
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "One or more round bald patches",
              "Sudden hair loss in one area",
              "Smooth bald spots on the scalp",
              "Patchy beard hair loss",
              "Hair falling out without pain",
              "Short broken hairs around the patch",
              "Bald patches that appear within days or weeks",
              "Recurrent patches that come and go",
            ].map((sign, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                <span className="text-brown">{sign}</span>
              </div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="text-brown/80 mt-6 italic">
            Some patients also notice mild itching or tingling before the hair falls out, but many have no symptoms at all.
          </motion.p>
        </div>
      </motion.section>

      {/* Who Benefits Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Who Benefits Most from Alopecia Areata Treatment?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Small bald patches on the scalp",
              "Early-stage patchy hair loss",
              "Beard alopecia",
              "Eyebrow patch hair loss",
              "Alopecia areata that is spreading slowly",
              "Hair loss linked to scalp inflammation",
              "Patients who want diagnosis before trying creams",
              "Patients who used pharmacy products but saw no improvement",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                <span className="text-brown">{item}</span>
              </div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="text-brown/80 mt-6">
            The earlier the condition is assessed, the easier it is to choose the right treatment path.
          </motion.p>
        </div>
      </motion.section>

      {/* Treatment Options Section - Detailed */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8"
          >
            Alopecia Areata Treatment Options at Nexus Clinic KL
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-brown/80 mb-8">
            There is no single treatment that works for every patient.
            Your treatment depends on the size of the patch, how long it has been present, whether the condition is active, and whether there is scalp inflammation.
          </motion.p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-3">1. Corticosteroid Injections for Alopecia Areata</h3>
              <p className="text-brown/80">Corticosteroid injections are commonly used for small patches of alopecia areata. The medicine is placed directly into the affected bald patch. The aim is to calm the immune activity around the follicle and help hair regrowth restart.</p>
              <p className="text-brown/80 mt-2">This option is usually considered for small bald patches, recent alopecia areata, localised scalp patches, beard patch hair loss, and patients who need targeted treatment. Treatment may need to be repeated every few weeks depending on response.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-3">2. Hydrocortisone Cream for Hair Loss: When It Helps</h3>
              <p className="text-brown/80 font-medium">Hydrocortisone cream is not a hair growth cream. This is important.</p>
              <p className="text-brown/80 mt-2">Hydrocortisone is a mild steroid cream. It may help when hair loss is linked to inflammation, irritation, eczema-like scalp problems or mild immune-related activity. It does not work like minoxidil. It does not directly force hair growth. It does not treat every type of hair loss.</p>
              <p className="text-brown/80 mt-2">Hydrocortisone-based treatment may be considered when the scalp is red or inflamed, there is itching with hair loss, the bald patch has irritation around it, a doctor suspects inflammatory scalp activity, or the patient needs a mild topical steroid option.</p>
              <p className="text-brown/80 mt-2 font-medium">But it should not be used blindly. If the scalp problem is fungal, infected or wrongly diagnosed, steroid cream can hide symptoms and delay proper treatment.</p>
              <p className="text-brown/80 mt-2 italic">That is why Nexus Clinic recommends doctor-led assessment before using hydrocortisone cream for hair loss.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-3">3. Stronger Topical Steroid Treatment</h3>
              <p className="text-brown/80">Some patients need stronger topical steroid treatment than hydrocortisone. This depends on severity of alopecia areata, location of the bald patch, scalp sensitivity, age of the patient, previous treatment history, and risk of side effects.</p>
              <p className="text-brown/80 mt-2">The doctor will decide the correct strength, amount and duration. Steroid creams should not be used as a daily long-term product unless instructed.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-3">4. PRP Hair Treatment Support</h3>
              <p className="text-brown/80">PRP hair treatment may be used alongside other treatments in selected hair loss cases. PRP uses growth factors from your own blood to support weak follicles and improve scalp healing. It is not the same as steroid treatment, but it may help improve the scalp environment.</p>
              <p className="text-brown/80 mt-2">PRP may be useful when alopecia areata overlaps with general hair thinning or weak follicle activity.</p>
              <Link href="/hair/prp-hair-treatment-malaysia/" className="text-wine font-medium italic hover:underline">Learn more about PRP hair treatment in Malaysia →</Link>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-georgia text-xl text-wine mb-3">5. Minoxidil Support</h3>
              <p className="text-brown/80">Minoxidil may be recommended in some cases to support regrowth. It is commonly used for pattern hair loss, but doctors may also use it as support in selected alopecia areata cases.</p>
              <p className="text-brown/80 mt-2">Minoxidil does not treat the immune cause directly. It supports the growth phase of hair.</p>
              <Link href="/hair/minoxidil-treatment-malaysia/" className="text-wine font-medium italic hover:underline">Learn more about minoxidil treatment in Malaysia →</Link>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <motion.a
              href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Find Your Treatment Plan
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Hydrocortisone vs Minoxidil vs PRP Table */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <TableForPages
            columns={[
              { key: "treatment", header: "Treatment", className: "font-semibold" },
              { key: "bestFor", header: "Best For" },
              { key: "howItWorks", header: "How It Works" },
              { key: "limitation", header: "Limitation" },
            ]}
            data={[
              { treatment: "Hydrocortisone Cream", bestFor: "Mild inflammation, irritation, selected scalp conditions", howItWorks: "Reduces inflammation", limitation: "Not a direct hair growth product" },
              { treatment: "Corticosteroid Injection", bestFor: "Small alopecia areata patches", howItWorks: "Calms immune activity around follicles", limitation: "Needs doctor-administered treatment" },
              { treatment: "Minoxidil", bestFor: "Pattern thinning and growth support", howItWorks: "Helps prolong hair growth phase", limitation: "Does not treat immune attack" },
              { treatment: "PRP Hair Treatment", bestFor: "Weak follicles, thinning support, scalp recovery", howItWorks: "Uses growth factors to support follicles", limitation: "May need multiple sessions" },
              { treatment: "Hair Transplant", bestFor: "Permanent bald areas", howItWorks: "Moves hair follicles surgically", limitation: "Not suitable for active alopecia patches" },
            ]}
            title="Hydrocortisone Cream vs Minoxidil vs PRP for Hair Loss"
            subtitle="Understanding the differences helps you choose the right treatment path"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-4 px-0"
          />
        </div>
      </motion.section>

      {/* Why Diagnosis Comes Before Cream */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Why Diagnosis Comes Before Cream
          </motion.h2>
          <div className="space-y-4">
            <p className="text-brown/80">A hair loss cream can only work if it matches the cause. That is why many people waste months trying the wrong product.</p>
            <div className="grid md:grid-cols-2 gap-3 bg-white p-6 rounded-xl">
              <div className="space-y-2">
                <p className="text-brown">• A smooth bald patch may be alopecia areata.</p>
                <p className="text-brown">• An itchy patch may be dermatitis.</p>
                <p className="text-brown">• A flaky patch may be fungal.</p>
              </div>
              <div className="space-y-2">
                <p className="text-brown">• A widening part line may be female pattern hair loss.</p>
                <p className="text-brown">• A receding hairline may be male pattern baldness.</p>
                <p className="text-brown">• Heavy shedding may be stress, hormones, iron deficiency or illness.</p>
              </div>
            </div>
            <p className="text-brown/80 font-medium">They all need different treatment.</p>
            <p className="text-brown/80">At Nexus Clinic KL, we do not treat every hair loss case the same way. We check the pattern, scalp condition, symptoms and history before recommending treatment.</p>
          </div>
        </div>
      </motion.section>

      {/* Alopecia Areata vs Other Hair Loss Types Table */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <TableForPages
            columns={[
              { key: "type", header: "Hair Loss Type", className: "font-semibold" },
              { key: "appearance", header: "Appearance" },
              { key: "cause", header: "Common Cause" },
              { key: "treatment", header: "Best Treatment Direction" },
            ]}
            data={[
              { type: "Alopecia Areata", appearance: "Round bald patches", cause: "Immune activity", treatment: "Corticosteroid treatment, topical care, support therapy" },
              { type: "Male Pattern Hair Loss", appearance: "Receding hairline, crown thinning", cause: "Genetics and hormones", treatment: "Minoxidil, finasteride, PRP, transplant" },
              { type: "Female Pattern Hair Loss", appearance: "Widening part line, diffuse thinning", cause: "Hormones, genetics, age", treatment: "Minoxidil, PRP, medical evaluation" },
              { type: "Telogen Effluvium", appearance: "Sudden shedding all over", cause: "Stress, illness, diet, hormones", treatment: "Treat trigger, nutrition, scalp support" },
              { type: "Fungal Scalp Infection", appearance: "Flaking, itching, broken hairs", cause: "Infection", treatment: "Antifungal treatment" },
              { type: "Scarring Alopecia", appearance: "Permanent patches, shiny scalp", cause: "Inflammatory damage", treatment: "Early medical control" },
            ]}
            title="Alopecia Areata vs Other Hair Loss Types"
            subtitle="Understanding the differences helps you choose the right treatment path"
            variant="detailed"
            fadeInUp={fadeInUp}
            className="py-4 px-0"
          />
        </div>
      </motion.section>

      {/* Why Choose Nexus Clinic */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Why Choose Nexus Clinic Kuala Lumpur?
          </motion.h2>
          <p className="text-brown/80 mb-6">There are many hair loss treatments in Malaysia. The problem is not lack of options. The problem is choosing the right one.</p>
          <p className="text-brown/80 mb-6">At Nexus Clinic KL, your treatment is planned after proper assessment. We focus on finding the cause of hair loss before recommending creams, injections or advanced treatments.</p>
          <div className="grid md:grid-cols-2 gap-3 bg-white p-6 rounded-xl">
            {[
              "Doctor-led hair loss consultation",
              "Diagnosis-first approach",
              "Treatment for patchy hair loss and scalp inflammation",
              "Steroid-based treatment when clinically suitable",
              "Hydrocortisone and topical options used with guidance",
              "PRP and minoxidil support available if needed",
              "Treatment plans for both men and women",
              "Clear aftercare instructions",
              "Located in Kuala Lumpur with established aesthetic and medical care",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                <span className="text-brown">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Treatment Process */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8 text-center"
          >
            The Alopecia Areata Treatment Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Scalp and Hair Assessment", desc: "The doctor checks your scalp, bald patches, hair density, inflammation and symptoms." },
              { step: "02", title: "Diagnosis and Treatment Planning", desc: "Your hair loss type is identified. The doctor explains which treatment options are suitable." },
              { step: "03", title: "Personalised Treatment", desc: "May include injections, creams, PRP, minoxidil or combination care." },
              { step: "04", title: "Progress Review", desc: "Your response is monitored, and treatment is adjusted if needed." },
            ].map((item) => (
              <div key={item.step} className="bg-cream p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-wine text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-georgia text-lg text-brown mb-2">{item.title}</h3>
                <p className="text-taupe text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How Long Does Regrowth Take */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            How Long Does Alopecia Areata Take to Regrow?
          </motion.h2>
          <p className="text-brown/80 mb-4">Hair regrowth is different for every patient.</p>
          <p className="text-brown/80 mb-4">Some patients see early regrowth within a few weeks. Others may need several months. In responsive cases treated with corticosteroid injections, regrowth may appear within around 3 months.</p>
          <div className="bg-white p-6 rounded-xl">
            <p className="font-medium text-brown mb-2">Results depend on:</p>
            <div className="grid md:grid-cols-3 gap-2">
              {["Size of the bald patch", "How long the patch has been present", "Whether the condition is still active", "Patient age", "Immune activity", "Treatment response", "Scalp health"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-wine rounded-full"></div>
                  <span className="text-taupe text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-brown/80 mt-4 italic">Alopecia areata can also return after improvement. That is why follow-up care is important.</p>
        </div>
      </motion.section>

      {/* Price Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <TableForPages
            columns={[
              { key: "treatment", header: "Treatment Option" },
              { key: "price", header: "Estimated Pricing Note" },
            ]}
            data={[
              { treatment: "Hair Loss Consultation", price: "Depends on doctor assessment" },
              { treatment: "Hydrocortisone or Topical Cream", price: "Depends on prescription and product type" },
              { treatment: "Corticosteroid Injection", price: "Depends on patch size and number of areas" },
              { treatment: "PRP Hair Treatment", price: "Depends on package and sessions" },
              { treatment: "Combination Treatment", price: "Depends on diagnosis and plan" },
            ]}
            title="Alopecia Areata Treatment Price in Malaysia"
            subtitle="The cost depends on the treatment used and the number of sessions required. A proper quote can only be given after checking the scalp and confirming the cause of hair loss."
            variant="compact"
            fadeInUp={fadeInUp}
            className="py-4 px-0"
          />
          <div className="flex justify-center mt-6">
            <motion.a
              href="/contact-us/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine hover:bg-wine/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Get Personalised Quote
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Side Effects and Safety */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Side Effects and Safety
          </motion.h2>
          <p className="text-brown/80 mb-6">Steroid-based treatments are useful when prescribed correctly, but they must be used carefully.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">Possible Side Effects</h3>
              <ul className="space-y-2 text-taupe">
                <li>• Mild redness</li>
                <li>• Temporary tenderness</li>
                <li>• Skin thinning if overused</li>
                <li>• Scalp irritation</li>
                <li>• Small dents in the skin after injection</li>
                <li>• Colour change in treated area</li>
                <li>• Worsening infection if diagnosis is wrong</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-georgia text-xl text-brown mb-3">Safety Note</h3>
              <p className="text-taupe">Most risks can be reduced when treatment is done under medical guidance. Never use steroid creams without a proper diagnosis, as they can mask underlying conditions and delay appropriate treatment.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Aftercare Instructions */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-6"
          >
            Aftercare Instructions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Avoid scratching the treated area",
              "Avoid harsh scalp products",
              "Do not apply random creams without approval",
              "Keep the scalp clean",
              "Avoid aggressive hair treatments",
              "Follow the prescribed cream amount and duration",
              "Return for review if the patch spreads",
              "Take progress photos every few weeks",
              "Do not stop or change prescribed treatment without speaking to the clinic",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                <span className="text-brown">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQWithSchema data={faqData} />

      {/* Final CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-br from-wine to-rose"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl text-white mb-6"
          >
            Book Alopecia Areata Consultation at Nexus Clinic Kuala Lumpur
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/90 text-lg mb-8">
            Do not guess with hair loss creams. A bald patch needs proper diagnosis first. Hydrocortisone cream may help in selected inflammatory cases, but it is not the answer for every type of hair loss. The right treatment depends on what is happening under the scalp.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-white/90 text-lg mb-8">
            At Nexus Clinic KL, we assess your hair loss, identify the cause and recommend a treatment plan built around your condition.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-wine hover:bg-white/90 px-8 py-3 rounded-full font-medium shadow-lg flex items-center gap-2"
              href="/contact-us/"
            >
              <Calendar className="w-4 h-4" />
              Book Your Hair Loss Consultation Today
            </motion.a>
            <Whatsapp message="Hi, I want to know more about your alopecia areata treatment services" variant="light"/>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/70 text-sm mt-6">
            Located at Wisma UOA II, Jalan Pinang, KLCC • Serving patients across Kuala Lumpur and Malaysia
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};
