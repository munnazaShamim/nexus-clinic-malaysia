"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import { newestPricing } from '@/src/data/pricing';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity, Leaf, Award, Waves, Sun, Wind } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface NewestMalaysiaProps {
  locale: string;
}

export default function NewestMalaysia({ locale }: NewestMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "PN-HPT polynucleotide skin booster with hyaluronic acid" },
    { icon: Activity, label: "Common Helps With", value: "Hydration, elasticity, radiance, collagen support, regeneration" },
    { icon: Clock, label: "Session Time", value: "20 to 45 minutes" },
    { icon: Heart, label: "Downtime", value: "Low, mild temporary redness or swelling" },
  ];

  const protocolInfo = [
    { label: "Recommended Sessions", value: "3 to 4 sessions" },
    { label: "Results Duration", value: "Up to 12 months" },
    { label: "Common Areas", value: "Face, neck, décolleté, under-eyes, hands" },
    { label: "Suitable For", value: "Dull skin, dehydration, reduced elasticity, early ageing" },
  ];

  const newestBenefits = [
    {
      title: "Dehydrated Skin",
      description: "Malaysia's heat, humidity, UV exposure and air conditioning create a dehydration cycle that topical moisturisers cannot really break. The hyaluronic acid in NEWEST works from inside the dermis, which is where hydration actually needs to be restored for the skin to look and feel different.",
      icon: Droplets
    },
    {
      title: "Reduced Elasticity",
      description: "When skin starts losing its bounce and firmness, that is elastin breaking down faster than the skin can replace it. NEWEST supports fibroblast activity which helps the skin rebuild that elastin over the course of treatment. It is not immediate but it is real.",
      icon: TrendingUp
    },
    {
      title: "Dull and Tired-Looking Skin",
      description: "A lot of skin dullness comes from poor skin quality at the dermal level, not from the surface. When the skin has better hydration and stronger internal support, it reflects light differently. That is where the glow comes from and why patients notice it fairly early into the treatment course.",
      icon: Sun
    },
    {
      title: "Early Ageing and Fine Lines",
      description: "These are the fine lines caused by thinning skin and collagen loss, not deep-set folds. As collagen rebuilds over the treatment course, texture improves and these lines soften. It takes time but the change is coming from the right place.",
      icon: Leaf
    },
    {
      title: "Crepey or Fragile Skin",
      description: "Skin that feels thin or papery, especially on the neck, under-eyes, décolletage and hands, responds well to polynucleotides because the repair mechanism targets the structural cause rather than just masking it. These are also areas where filler is not a useful option, which makes NEWEST particularly suited here.",
      icon: Wind
    },
    {
      title: "Under-Eye Area",
      description: "One of the more practical applications. The skin under the eyes is thin and delicate, and NEWEST improves the quality of that skin without adding volume. It is not an under-eye filler. It is about making that skin stronger, more hydrated and less crepey.",
      icon: Eye
    },
  ];

  const treatmentAreas = [
    { area: "Face", description: "Hydration, glow, elasticity and general skin quality improvement" },
    { area: "Neck", description: "Thin, crepey or less elastic skin that needs structural support" },
    { area: "Under-Eyes", description: "Improving skin quality in the delicate under-eye area without filler volume" },
    { area: "Décolletage", description: "Crepey or sun-damaged looking skin on the chest" },
    { area: "Hands", description: "Ageing or thinning skin where filler is not appropriate" },
  ];

  const comparisonData = [
    {
      type: "NEWEST",
      concerns: "dehydrated skin, dull or flat complexion, reduced elasticity, early ageing, crepey skin, fragile skin texture, or wanting natural improvement without structural change",
      action: "Improves skin quality",
    },
    {
      type: "Filler",
      concerns: "lip volume, cheek projection, chin definition or any structural change to your face",
      action: "Adds volume and creates shape",
    },
    {
      type: "Simple Skin Booster",
      concerns: "mild hydration, early-stage maintenance, or a lighter treatment approach without the regenerative component",
      action: "Adds basic hydration",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "The doctor reviews your skin hydration, elasticity, texture, radiance and treatment history. Not every patient who asks for NEWEST is the right candidate for it, and this is where that gets sorted out properly."
    },
    {
      step: "2",
      title: "Personalised Treatment Plan",
      desc: "The doctor decides whether NEWEST is appropriate and how many sessions make sense for your skin condition. If something else would work better for your concern, that will come up here before anything is booked."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "NEWEST is injected using an intradermal skin-booster technique across the planned areas. Each session takes between 20 and 45 minutes depending on the areas being treated."
    },
    {
      step: "4",
      title: "Early Recovery",
      desc: "Small raised bumps at the injection points are normal and look similar to mild mosquito bites. Mild redness and some slight swelling can happen. These settle within 24 to 48 hours."
    },
    {
      step: "5",
      title: "Gradual Improvement",
      desc: "Hydration and glow tend to show earlier, usually within the first two weeks. Elasticity, texture and collagen-related improvements build over the full treatment course and continue developing for several weeks after."
    },
    {
      step: "6",
      title: "Maintenance",
      desc: "After the initial course, maintenance sessions every six months keep the results sustained. How often depends on age, skin condition and how the skin responds."
    },
  ];

  const pricingTiers = [
    { treatment: "Per session", volume: "Single session", price: "Price varies by clinic and treatment area" },
    { treatment: "Recommended treatment course", volume: "3 to 4 sessions", price: "Confirmed after consultation" },
    { treatment: "Maintenance", volume: "Based on skin response", price: "Discussed during follow-up" },
  ];

  const priceFactors = [
    "Number of sessions needed based on your skin condition",
    "Areas being treated: face only is different from adding neck, under-eyes, hands or décolletage",
    "Amount of product used and complexity of the injection plan",
    "Whether NEWEST is being used alone or as part of a broader treatment plan",
    "Injector experience and clinic setting",
  ];

  const benefitsList = [
    "Improves skin hydration from within the dermis, not just on the surface",
    "Supports fibroblast activity, which helps the skin produce collagen and elastin again",
    "Restores skin elasticity and rigidity over the treatment course",
    "Improves skin texture, density and how the skin reflects light",
    "Softens fine lines caused by collagen loss and skin thinning",
    "Works on delicate areas like the under-eyes, neck and hands where filler is not appropriate",
    "Results look natural because the skin is improving its own quality",
    "Low downtime for most patients",
    "Suitable for all skin types including Asian skin",
  ];

  const limitationsList = [
    "It is not a contouring filler and will not reshape the lips, chin, cheeks or jawline",
    "Results build gradually, especially for collagen and elastin improvement",
    "A course of 3 to 4 sessions is needed for proper results, one session is not enough",
    "Maintenance is required to sustain results long-term",
    "It will not lift skin that has significantly sagged",
    "Not suitable during pregnancy or breastfeeding",
  ];

  const sideEffects = {
    common: [
      "Small raised bumps at the injection points, similar to mosquito bites",
      "Mild redness around the treated area",
      "Slight swelling that settles within a day or two",
      "Light bruising in some patients",
      "Temporary tenderness at injection sites",
    ],
    rare: [
      "Infection",
      "Prolonged lumps at injection points",
      "Allergic reaction",
      "Vascular complications, which are uncommon but need proper medical management if they occur",
    ],
  };

  const aftercareInstructions = [
    "Do not rub or press the treated area unless your doctor tells you to",
    "Avoid intense exercise for the first 24 hours",
    "Skip saunas, steam and strong heat for 24 to 48 hours",
    "Avoid alcohol for the first day if possible",
    "Do not book facials or active skin treatments immediately after",
    "Keep follow-up appointments if doing a full treatment course",
    "Give the treatment time to work before forming any opinion on the result",
  ];

  const faqData = [
    { q: "What is NEWEST treatment?", a: "NEWEST is a polynucleotide injectable skin booster made by Mastelli that supports skin hydration, elasticity, fibroblast activity, collagen stimulation and overall skin rejuvenation. It combines PN-HPT with hyaluronic acid and mannitol." },
    { q: "Is NEWEST a filler?", a: "No. NEWEST improves skin quality from within. It does not add volume, reshape the face or create structural change. It is a regenerative skin booster, not a contouring filler." },
    { q: "What is the difference between NEWEST and Plinest?", a: "Both are made by Mastelli using PN-HPT technology. Plinest is pure polynucleotide for deep regenerative repair. NEWEST adds hyaluronic acid and mannitol, making it better suited for patients who want both repair and visible hydration in the same session." },
    { q: "How many sessions do I need?", a: "A course of 3 to 4 sessions spaced 2 to 4 weeks apart is the standard. The exact plan depends on your skin condition and the areas being treated." },
    { q: "How long do results last?", a: "Results from a completed course typically last 6 to 12 months depending on age, lifestyle and how the skin responds. Maintenance every 6 months keeps the improvement sustained." },
    { q: "Is it painful?", a: "Mild stinging at each injection point. The whole session is done in under 45 minutes and most patients find it very manageable. Numbing cream is available if needed." },
    { q: "Is NEWEST good for under-eyes and neck?", a: "Yes. These are among the most common treatment areas. The polynucleotide formula works well in delicate, thin skin areas where filler is not suitable." },
    { q: "Is NEWEST the same as Rejuran or Profhilo?", a: "No. They are different products with different formulas and different mechanisms. There is some overlap in the broader skin-rejuvenation space but they are not interchangeable." },
    { q: "Is there downtime?", a: "Very little. Small bumps, mild redness and light bruising can happen on the day but these are temporary. Most patients are back to their normal routine the same day." },
    { q: "Who is not suitable for NEWEST?", a: "Patients who are pregnant, breastfeeding, or have an active skin infection in the treatment area. Suitability is always confirmed by the doctor at consultation." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Polynucleotide Skin Booster"
        title="NEWEST | Polynucleotide Skin Booster Treatment "
        highlight=" Nexus Clinic KL"
        description="Improve skin hydration, elasticity, glow and overall skin quality with NEWEST in Malaysia. Nexus Clinic KL offers doctor-led NEWEST polynucleotide treatment for smoother, firmer and healthier-looking skin."
        details="Your skin can start feeling different long before it looks obviously older. It gets drier. A bit thinner. Fine lines don't bounce back the way they used to. Makeup stops sitting smoothly on your face. The glow fades and the skin starts looking flat or tired, even on days when you've slept well and eaten properly. That's usually the point where your skincare routine stops being enough, not because you're using the wrong products, but because the problem is happening at a level products cannot reach. NEWEST works at that level."
        note="NEWEST is a PN-HPT injectable skin booster that supports fibroblast activity, collagen renewal, hydration and elasticity. It is enhanced with hyaluronic acid for stronger hydration and plumper skin texture. It is not a filler and does not change your facial structure."
        image="/images/face/Newest/Newest Treatment malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - NEWEST Skin Booster Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in NEWEST skin booster at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="Hydration + Regeneration"
        floatingSubtitle="Natural glow • Long-lasting"
        staggerContainer={staggerContainer}
        fadeInLeft={fadeInLeft}
        fadeInRight={fadeInRight}
        fadeInUp={fadeInUp}
      />

      {/* Treatment at a Glance Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">NEWEST Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this polynucleotide skin booster</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatmentOverview.map((item, idx) => (
              <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {protocolInfo.map((item, idx) => (
                <div key={idx}>
                  <p className="font-inter text-sm text-taupe">{item.label}</p>
                  <p className="font-georgia text-brown font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Speak to a Doctor About NEWEST
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is NEWEST Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                What Is NEWEST and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                NEWEST is an injectable skin booster made by Mastelli, an Italian pharmaceutical company. It is not a filler,
                it does not add volume to your cheeks, it does not reshape your face, and it does not give you that heavy,
                overdone look that puts a lot of people off aesthetic treatments.
                What sets it apart from a basic skin booster is the formula. NEWEST combines three things that work together:
                </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Newest/areas for newest.webp"
                  alt="NEWEST polynucleotide skin booster treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h3 className="font-georgia font-bold text-wine">PN-HPT (Polynucleotide Highly Purified Technology)</h3>
              <p className="text-brown font-inter">
                This is the main ingredient and the reason NEWEST is categorised differently from a regular hydration injectable. Polynucleotides are DNA fragments extracted from Italian trout using Mastelli's patented purification process. The HPT process removes all proteins and contaminants, leaving only the active DNA chains. When these are injected into the skin, they signal your fibroblasts, which are the cells responsible for producing collagen and elastin, to become active again. Over time the skin starts rebuilding what it has been losing
              </p>
              <h3 className="font-georgia font-bold text-wine">Hyaluronic Acid</h3>
              <p className="text-brown font-inter">
                Unlike Plinest which uses pure polynucleotides, NEWEST adds non-cross-linked hyaluronic acid to the formula. HA draws and holds moisture in the skin. But the more interesting part is that clinical data shows combining HA with PN-HPT increases fibroblast-stimulating activity by 20 percent. They make each other more effective, not just in parallel but because of each other
              </p>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <h3 className="font-georgia font-bold text-wine">Mannitol</h3>
              <p className="text-brown font-inter">
                An antioxidant that slows the breakdown of hyaluronic acid after injection, by around 30 percent according to clinical data. This means the treatment stays active in the skin longer, which matters a lot for the regeneration process to actually complete.
              </p>
              <p className="text-brown/50 mt-8 text-sm italic border-l-4 rounded-lg border-wine p-4">
                Clinical evidence supports the role of polynucleotides in skin regeneration. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11311621/" target="_blank" rel="noopener noreferrer nofollow" className="text-wine font-bold italic hover:underline">2024 review by Lee KWA et al.</a> demonstrated that polynucleotides improve skin texture, enhance elasticity, stimulate collagen production, and support overall skin rejuvenation, aligning with their role in regenerative injectable skin treatments.
              </p>
            </motion.div>
          </div>

        <p className="text-center text-sm text-brown/50 mt-8">
          NEWEST restores skin hydration, elasticity, and radiance through polynucleotide regeneration. For patients with age-related volume loss in the midface, <Link href="https://www.nexus-clinic.com/face/sculptra-malaysia/" className="text-wine font-bold italic">Sculptra Malaysia</Link> offers deeper collagen stimulation. Those with hollow under-eyes may also benefit from <Link href="https://www.nexus-clinic.com/face/under-eye-filler-malaysia/" className="text-wine font-bold italic">under eye filler Malaysia</Link> combined with NEWEST.
        </p>
        </motion.div>
      </section>

      {/* What NEWEST Helps Improve Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What NEWEST Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, NEWEST is used for patients whose concern is skin quality, not structure or volume. Here is what it genuinely helps with:</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newestBenefits.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-light p-6 rounded-xl shadow-md border border-taupe/10 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{item.title}</h3>
                <p className="text-taupe font-inter">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
              href="/contact-us/">
              Book a Consultation to See If NEWEST Matches Your Skin Goals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With NEWEST</h2>
            <p className="text-taupe font-inter">Skin quality improvement across multiple zones</p>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {treatmentAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-4 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Award className="w-8 h-8 text-wine mx-auto mb-2" />
                <h3 className="font-georgia text-md text-brown font-semibold mb-1">{area.area}</h3>
                <p className="text-taupe font-inter text-xs">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">NEWEST vs Filler vs Skin Booster</h2>
            <p className="text-taupe font-inter">These three get confused a lot. Here is the honest difference:</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {comparisonData.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`rounded-2xl p-6 ${
                  idx === 0 ? 'bg-wine/5 border border-wine/20' : 
                  idx === 1 ? 'bg-rose/5 border border-rose/20' : 
                  'bg-gold/5 border border-gold/20'
                } hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.type}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-inter font-semibold text-brown">Choose if your main concern is:</span>
                    <p className="text-taupe mt-1 text-sm">{item.concerns}</p>
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-brown">What it does:</span>
                    <p className="text-taupe mt-1 text-sm">{item.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-5 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter">
               NEWEST works gradually on skin quality rather than adding volume. Patients needing texture refinement and scar reduction can explore <Link href="/skin/acne-scar-treatment-malaysia/" className="text-wine font-bold italic">acne scar treatment Malaysia</Link>. Those with uneven pigmentation alongside dehydration may pair NEWEST with <Link href="/skin/melasma-treatment-malaysia/" className="text-wine font-bold italic">melasma treatment Malaysia</Link>.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The NEWEST Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — regenerative skin hydration</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {procedureSteps.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-md text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2"
              href="/contact-us/">
              Book Your NEWEST Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">20-45 minute sessions at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-7xl"
        >
            <TableForPages
              columns={[
                { key: "treatment", header: "Treatment" },
                { key: "product", header: "Product / Option" },
                { key: "areas", header: "Parts / Areas" },
                { key: "units", header: "Units / Session / Duration" },
                { key: "normalPrice", header: "Normal Price RM" },
                { key: "sellingPrice", header: "Selling Price RM" },
                { key: "package", header: "Standard Package" },
              ]}
              data={newestPricing}
              title="NEWEST Cost in Malaysia 2026"
              subtitle="For context, polynucleotide skin boosters in Malaysia generally range from RM 1,500 to RM 3,500 per session depending on the product, clinic and doctor. NEWEST at Nexus sits well below that range without compromising on product quality. It is a genuine Mastelli-manufactured treatment made in Italy.For context, polynucleotide skin boosters in Malaysia generally range from RM 1,500 to RM 3,500 per session depending on the product, clinic and doctor. NEWEST at Nexus sits well below that range without compromising on product quality. It is a genuine Mastelli-manufactured treatment made in Italy."
              variant="detailed"
              fadeInUp={fadeInUp}
            />

          <motion.div variants={fadeInUp} className="mt-8 max-w-5xl mx-auto">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your NEWEST Price</h3>
            <ul className="space-y-2">
              {priceFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <span className="text-wine">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
              <p className="text-brown/50 font-inter text-sm">
                NEWEST requires 3 to 4 sessions for optimal results. Patients seeking maintenance can add <Link href="/skin/laser-hair-removal-malaysia/" className="text-wine font-bold italic">laser hair removal Malaysia</Link> for facial grooming. Those with persistent redness or sensitivity may also review <Link href="/skin/rosacea-treatment-malaysia/" className="text-wine font-bold italic">rosacea treatment Malaysia</Link> alongside their skin booster plan.
              </p>
            </motion.div>
          </motion.div>
          
        
        </motion.div>
      </section>

      {/* Benefits & Limitations Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-wine" />
                Benefits of NEWEST
              </h3>
              <ul className="space-y-2">
                {benefitsList.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Limitations of NEWEST
              </h3>
              <ul className="space-y-2">
                {limitationsList.map((limitation, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              If the real concern is volume loss or structural change, NEWEST alone will not give you the result you are expecting. The doctor at Nexus Clinic will tell you this clearly at consultation.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">NEWEST Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">Temporary, rare and usually mild</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-wine" />
                Common Temporary Effects
              </h3>
              <ul className="space-y-2">
                {sideEffects.common.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Rare Risks
              </h3>
              <ul className="space-y-2">
                {sideEffects.rare.map((effect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <span className="text-wine text-lg">⚠️</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
              <p className="text-taupe font-inter text-xs mt-3 italic">
                These are uncommon. A proper doctor assessment and clinical setting significantly reduce these risks.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">NEWEST Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              The improvement builds over weeks, not days, especially for the collagen and elastin changes. Early judgement is not fair to the treatment.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-light overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-wine" />
                <span className="font-inter text-sm font-semibold text-wine tracking-wide">
                  Trusted Excellence
                </span>
              </div>
              
              <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown leading-tight">
                Award-Winning Injectors <br />
                <span className="text-wine italic">at Nexus Clinic KL</span>
              </h2>
              
              <p className="text-brown font-inter text-lg leading-relaxed">
                You came here wanting to look like yourself, just refreshed. At Nexus Clinic KL, our award-winning 
                aesthetic doctors specialise in results that are noticed but never obvious. Better skin, natural 
                balance, and a face that simply looks well-rested.
              </p>
              
              <p className="text-taupe font-inter">
                Every treatment plan is personalised to your skin concerns, facial features and aesthetic goals. 
                Using advanced regenerative treatments and precise injection techniques, we help you achieve 
                facial harmony without the overdone look.
              </p>
              
              {/* Award Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Award, text: "Best Injector Award Winner" },
                  { icon: Syringe, text: "Advanced Injectable & Regenerative Expertise" },
                  { icon: Calendar, text: "Helping Patients Achieve Their Facial Goals Since 2021" },
                  { icon: Shield, text: "LCP Certified Aesthetic Doctors" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-cream/50 p-3 rounded-xl">
                    <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-wine" />
                    </div>
                    <span className="font-inter text-sm font-medium text-brown">{feature.text}</span>
                  </div>
                ))}
              </div>
              
                <Link
                  href="/doctors/"
                  className="bg-wine text-light px-6 py-3 rounded-full font-inter font-semibold hover:bg-wine/80 transition-all shadow-lg inline-flex items-center justify-center gap-2 group"
                >
                  Meet Our Doctors
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              
            </motion.div>
            
            {/* Right Image */}
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[1/1]">
                <Image
                  src="/images/awards/N6.webp"
                  alt="Nexus Clinic KL Award-Winning Aesthetic Doctors Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-wine/10 rounded-full -z-10 hidden lg:block" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/10 rounded-full -z-10 hidden lg:block" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
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
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Book NEWEST in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks dry, dull, weaker or less elastic than before, NEWEST may be the treatment that helps bring back a fresher, more hydrated and healthier-looking version of your skin from within.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy filler look. No fake change. No unnecessary volume. Just better skin quality, stronger hydration support and a more refined result that still looks like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free NEWEST Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for NEWEST skin booster at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available this week | Located at Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}