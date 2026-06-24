"use client";
import { motion } from "framer-motion";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import Whatsapp from "@/src/components/Whatsapp";
import AllPagesHero from "@/src/components/AllPagesHero";
import TableForPages from "@/src/components/TableForPages";
import { profhiloPricing } from '@/src/data/pricing';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Syringe, Heart, Shield, Sparkles, Droplet, Gem, Zap, Eye, ArrowUp, Droplets, Calendar, TrendingUp, Activity } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";

interface ProfhiloMalaysiaProps {
  locale: string;
}

export default function ProfhiloMalaysia({ locale }: ProfhiloMalaysiaProps) {
  const treatmentOverview = [
    { icon: Syringe, label: "Treatment Type", value: "Injectable skin remodelling treatment using stabilised hyaluronic acid" },
    { icon: Activity, label: "Common Areas", value: "Face, neck, décolletage and hands" },
    { icon: Clock, label: "Session Time", value: "15 to 30 minutes" },
    { icon: Heart, label: "Downtime", value: "Minimal, return to normal routine same day" },
  ];

  const protocolInfo = [
    { label: "Recommended Protocol", value: "2 sessions, 4 weeks apart" },
    { label: "When Results Start", value: "Hydration first, firmness builds over weeks" },
    { label: "Longevity", value: "6 to 9 months" },
    { label: "Suitable For", value: "Dull skin, fine lines, wrinkled skin, early laxity, dehydration, loss of bounce" },
  ];

  const profhiloBenefits = [
    {
      title: "Dull Skin",
      description: "When skin loses hydration at a deeper level, it also loses how it reflects light. Profhilo improves moisture from within, which brings back a fresher, more enhanced quality that surface products really cannot replicate.",
      icon: Sparkles
    },
    {
      title: "Fine Lines",
      description: "These are specifically the fine lines caused by dryness and thinning skin, not deep-set wrinkles. They get more visible with age and dehydration. Profhilo helps improve overall skin texture and softness, which makes these lines less noticeable over time.",
      icon: Eye
    },
    {
      title: "Loss of Skin Firmness",
      description: "When the skin on the cheeks, lower face or neck starts looking a little loose or less tight, Profhilo can help support skin looking firmer through its remodelling effect. It is not a lifting treatment, but it does address early laxity.",
      icon: TrendingUp
    },
    {
      title: "Wrinkled Skin",
      description: "Skin that feels thin, fragile, or papery, especially on the face, neck, and hands, responds well to Profhilo. These are also areas where traditional filler is not a favorable option, which makes Profhilo particularly useful here.",
      icon: Droplets
    },
    {
      title: "Early Ageing",
      description: "A lot of patients who choose Profhilo are not ready for filler or anything more intensive. It is often chosen earlier, when the goal is prevention. Maintaining skin quality and slowing down what is starting to change rather than correcting something significant.",
      icon: Calendar
    },
  ];

  const treatmentAreas = [
    { area: "Face", description: "For hydration, smoother texture and better skin quality overall. This is usually the first area patients ask about, since it's where dullness and tightness show up the most." },
    { area: "Neck", description: "For thin, wrinkled or ageing skin that lacks firmness. People often skip this area for years and then notice it ages faster than their face does." },
    { area: "Décolletage", description: "For fine lines and loss of smoothness in the chest area. Sun exposure tends to hit this spot harder than people realise, so it's often more dehydrated than expected." },
    { area: "Hands", description: "For ageing, dry or thinning skin where filler is not the right choice. Hands give away age quicker than most people think, and there's not much you can do about that with creams alone." },
  ];

  const comparisonData = [
    {
      type: "Profhilo",
      concerns: "tired-looking skin, loss of glow, fine lines, thin or wrinkled skin, early skin laxity, or poor overall skin texture",
      action: "Improves skin quality without changing anything structural",
    },
    {
      type: "Filler",
      concerns: "sunken cheeks, loss of lip volume, chin projection, jawline definition, or structural contouring",
      action: "Changes volume and shape",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Full Skin Assessment",
      desc: "The doctor looks at your skin texture, hydration levels, elasticity and laxity before anything else. Not every patient who asks for Profhilo is actually the correct candidate, and this is where that gets figured out honestly."
    },
    {
      step: "2",
      title: "Personalised Treatment Planning",
      desc: "The doctor decides whether Profhilo should be used alone or alongside something else. If your concern turns out to be volume loss rather than skin quality, you will be told that clearly before treatment starts. Nothing gets recommended without a reason."
    },
    {
      step: "3",
      title: "Injection Session",
      desc: "Profhilo is injected using specific anatomical points chosen for safe and even spread through the tissue. On the face, the core protocol is five injection points per side using the BAP technique. Each session takes between 15 and 30 minutes."
    },
    {
      step: "4",
      title: "Second Session",
      desc: "Most patients need a second session around four weeks after the first to complete the standard treatment course. One session alone does not give you the full result."
    },
    {
      step: "5",
      title: "Review and Results",
      desc: "Your skin is monitored over the following weeks as hydration and firmness continue building underneath. Full results are generally clear around eight weeks after the second session."
    },
  ];

  const priceFactors = [
    "Number of sessions needed: most patients start with two",
    "Treatment area: face, neck, hands and décolletage may vary in price",
    "Doctor experience: more experienced injectors generally charge more",
    "Product authenticity: genuine Profhilo from proper sources costs more",
    "Combination plans: some patients pair Profhilo with other treatments",
  ];

  const benefitsList = [
    "Improves skin hydration from within, not just on the surface",
    "Helps skin look smoother, fresher and more radiant",
    "Supports firmer-looking skin over time through collagen and elastin stimulation",
    "Softens fine lines caused by dryness and thinning",
    "Does not change facial shape or structure in any way",
    "Results look very natural because the skin just looks healthier",
    "Minimal downtime for most patients",
    "Can be used on the face, neck, hands and décolletage",
  ];

  const limitationsList = [
    "It is not a filler and does not replace lost facial volume",
    "It does not lift skin that has significantly sagged",
    "Results are not immediate the way filler is on the same day",
    "Most patients need two sessions for proper results, one is not enough",
    "Maintenance is required because results are not permanent",
    "Not suitable for every patient or every skin concern",
  ];

  const sideEffects = {
    common: [
      "Small raised bumps at the injection points, similar to mild mosquito bites",
      "Mild redness around the treated area",
      "Slight swelling that settles quickly",
      "Light bruising in some patients",
      "Tenderness for one to three days",
    ],
    rare: [
      "Infection",
      "Allergic or hypersensitivity reaction",
      "Prolonged lumpiness at injection points",
      "Vascular complications, uncommon but serious if they occur",
    ],
  };

  const aftercareInstructions = [
    "Do not press or massage the treated area unless your doctor tells you to",
    "Avoid intense exercise for 24 hours after treatment",
    "Skip alcohol for the first 24 hours if possible",
    "Avoid saunas, steam and strong heat for 24 to 48 hours",
    "Do not book facials or active skin treatments straight after",
    "Give the treatment time to settle before judging the result",
  ];

  const faqData = [
    { q: "How much does Profhilo cost in Malaysia?", a: "Generally between RM 2,000 and RM 3,500 per session. At Nexus Clinic KL, pricing is mentioned clearly before anything is confirmed with no hidden charges." },
    { q: "How many sessions do I need?", a: "Most patients start with two sessions spaced four weeks apart. After that, maintenance is typically every six to nine months." },
    { q: "How long do results last?", a: "Around six to nine months for most people. This varies based on age, lifestyle and how the skin responds." },
    { q: "Is Profhilo the same as filler?", a: "No. Profhilo improves skin quality, hydration and firmness. Filler adds volume and changes structure. They solve completely different problems." },
    { q: "Is it painful?", a: "Most patients find it very manageable. There is brief stinging at each injection point but the whole session is done in under 30 minutes. Numbing cream is available for patients if needed." },
    { q: "When will I see results?", a: "Better hydration and glow usually show within the first two weeks. Firming and texture improvement builds over the following month. Full results are generally clear around eight weeks after your second session." },
    { q: "Can Profhilo lift sagging skin?", a: "It can improve skin quality and mild laxity, but it is not a lifting treatment. More advanced sagging needs a different approach entirely." },
    { q: "Is there downtime?", a: "Minimal. Small bumps, light redness and occasional bruising can happen but these are temporary. Most patients are back to their normal routine the same day." },
    { q: "Who is not suitable for Profhilo?", a: "Suitability is decided by the doctor during consultation. Generally, injectable treatments may be avoided or postponed for people with active skin infections, certain medical conditions, pregnancy, or other factors that need assessing first." },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      <AllPagesHero
        badge="Non-Surgical Skin Remodelling"
        title="Profhilo Treatment in Malaysia "
        highlight=" Nexus Clinic KL"
        description="Improve skin hydration, firmness and glow with Profhilo in Malaysia. Nexus Clinic KL offers doctor-led Profhilo treatment for dull, thin and ageing skin."
        details="Your skin can look sleepy even when you are not. It starts feeling thinner. Fine lines show up more frequently. Makeup stops sitting right. The glow you used to have just vanishes off, and no matter what you put on your face, nothing seems to hold for long. That is usually the point where skincare on its own stops being enough. Profhilo is one of the treatments that comes up at this stage, and for good reason. But it also gets misunderstood a lot, so let us go through what it actually does, who it is for, and what to expect."
        note="Profhilo works by spreading under the skin to improve hydration, elasticity and overall skin texture."
        image="/images/face/Profhilo/Profhilo Malaysia.webp"
        imageAlt="Nexus Clinic Kuala Lumpur - Profhilo Treatment"
        ctaText="Book free consultation"
        ctaLink="/contact-us"
        whatsappMessage="Hi, I'm interested in Profhilo treatment at Nexus Clinic KL. I'd like to book a consultation."
        floatingTitle="✨ Skin Remodelling"
        floatingSubtitle="No filler • Natural glow"
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Profhilo Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Everything you need to know about this skin remodelling treatment</p>
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
              Speak to a Doctor About Profhilo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is Profhilo Section */}
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
                What Is Profhilo and <span className="text-wine italic">How It Works</span>
              </h2>
              <p className="text-brown font-inter">
                Profhilo is an injectable skin-remodeling treatment made from highly pure hyaluronic acid. What it does is spread
                through the tissue below the skin and improves the condition of the skin itself.
              </p>
              <p className="text-brown font-inter">
                It is often described as a bioremodeling treatment because the main point is not to fill a line or a hollow. It is
                to get the skin functioning better from within, improving hydration, texture and firmness over time. Results look real
                because your face still looks like your face, just healthier and more refreshed than before.
              </p>
              <p className="text-brown font-inter">
                The product is manufactured by IBSA in Switzerland using NAHYCO technology, a thermal bonding process that avoids the
                chemical cross-linking agents seen in traditional fillers. That is why the texture flows through tissue instead of holding
                a shape. It has been available since 2015 and caught on in Malaysia, especially because the results look like your own skin.
                Nobody asks what you did.
              </p>
              <div className="bg-cream p-5 rounded-xl border-l-4 border-wine">
                <p className="font-georgia italic text-brown">"Profhilo improves skin quality. Filler changes volume and shape."</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Profhilo/Profhilo Treatments.webp"
                  alt="Profhilo skin remodelling treatment"
                  fill
                  className="object-cover"
                />
              </div>
                <p className="text-brown/50 mt-8 text-sm italic border-l-4 rounded-lg border-wine p-4">
                  Clinical evidence supports the role of stabilised hyaluronic acid in skin rejuvenation. A <a href="https://pubmed.ncbi.nlm.nih.gov/23614718/" target="_blank" rel="noopener noreferrer nofollow" className="text-wine font-bold italic hover:underline">review by De Boulle K, Glogau R, Kono T, et al.</a> demonstrates that stabilised hyaluronic acid improves skin hydration, enhances elasticity, and contributes to dermal remodelling, supporting its use in injectable treatments such as Profhilo for improving overall skin quality and firmness.
                </p>
            </motion.div>
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
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">What Profhilo Helps Improve</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">At Nexus Clinic KL, Profhilo is used for patients who want to improve their skin without adding facial volume or changing how they look. Here is what it is generally used for:</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {profhiloBenefits.map((item, idx) => (
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
            <p className="text-center text-brown/50 mt-4">
              Profhilo improves skin hydration, elasticity, and overall radiance without changing facial volume. For patients with dull, dehydrated skin exacerbated by urban pollution and UV exposure, pairing Profhilo with regular <Link href="https://www.nexus-clinic.com/skin/hydrafacial-malaysia/" className="text-wine font-bold italic">HydraFacial in Malaysia</Link> can enhance surface glow and deep hydration. Those experiencing early signs of ageing around the eyes may also benefit from <Link href="https://www.nexus-clinic.com/face/under-eye-filler-malaysia/" className="text-wine font-bold italic">under eye filler in Malaysia</Link> to address structural hollowing while Profhilo improves surrounding skin quality.
            </p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Areas Commonly Treated With Profhilo</h2>
            <p className="text-taupe font-inter">For the face, the treatment is commonly delivered using the BAP technique</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-cream p-5 rounded-xl border border-taupe/20 text-center hover:shadow-md transition-shadow">
                <Droplet className="w-10 h-10 text-wine mx-auto mb-3" />
                <h3 className="font-georgia text-lg text-brown font-semibold mb-2">{area.area}</h3>
                <p className="text-taupe font-inter text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Profhilo vs Filler Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Profhilo vs Filler: Why People Get Confused</h2>
            <p className="text-taupe font-inter">These two are not the same thing and they do not solve the same problems. People mix them up often, even those who have already had one of them done.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {comparisonData.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className={`rounded-2xl p-6 ${idx === 0 ? 'bg-wine/5 border border-wine/20' : 'bg-rose/5 border border-rose/20'} hover:shadow-xl transition-shadow`}
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">{item.type}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-inter font-semibold text-brown">Choose if your main concern is:</span>
                    <p className="text-taupe mt-1">{item.concerns}</p>
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-brown">What it does:</span>
                    <p className="text-taupe mt-1">{item.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-5 bg-wine/5 rounded-xl text-center">
          <p className="text-center text-brown/50 mt-4">
            A lot of people who feel their skin looks flat and dull do not need filler at all. And some who think they just need a general skin refresh actually have volume loss that Profhilo will not fix. If the real concern is <Link href="https://www.nexus-clinic.com/face/cheek-filler-malaysia/" className="text-wine font-bold italic">sunken cheeks</Link>, <Link href="https://www.nexus-clinic.com/face/lip-filler-malaysia/" className="text-wine font-bold italic">loss of lip volume</Link>, <Link href="https://www.nexus-clinic.com/face/chin-filler-malaysia/" className="text-wine font-bold italic">chin projection</Link>, <Link href="https://www.nexus-clinic.com/face/jawline-filler-malaysia/" className="text-wine font-bold italic">jawline definition</Link>, or structural contouring, filler changes volume and shape — and that is a different treatment path entirely. This is exactly why a proper doctor assessment at our <Link href="https://www.nexus-clinic.com" className="text-wine font-bold italic">aesthetic clinic in Kuala Lumpur</Link> matters before anything gets booked.
          </p>
          </motion.div>
        </motion.div>
      </section>
      {/* Benefits & Limitations Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-wine" />
                Benefits of Profhilo
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
            
            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-wine" />
                Limitations of Profhilo
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
              This is why proper assessment matters. If the real issue is volume loss, hollowing or heaviness, another treatment may be more effective.
            </p>
          </motion.div>
        </motion.div>
      </section>
      {/* Nexus Clinic Difference Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/face/Profhilo/doctor-led.webp"
                  alt="Doctor-led Profhilo treatment at Nexus Clinic KL"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="space-y-6 order-1 md:order-2">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                Nexus Clinic KL | <span className="text-wine italic">Doctor-Led Profhilo Treatment</span> in Malaysia
              </h2>
              <p className="text-brown font-inter">
                Many clinics offer Profhilo in Kuala Lumpur. The product matters, but the assessment and injection technique 
                matter just as much.
              </p>
              <p className="text-brown font-inter font-semibold">What separates Nexus Clinic KL from other clinics:</p>
              <ul className="space-y-2">
                {[
                  "Doctor-led assessment before treatment",
                  "Personalised plan based on your skin quality and degree of ageing",
                  "Focus on natural improvement, not over-treatment",
                  "Suitable treatment combinations discussed honestly when needed",
                  "Full aftercare guidance and follow-up support",
                  "Authentic product used in a clinical setting",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-taupe font-inter text-sm">
                    <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brown font-inter text-sm italic">
                Profhilo should never be treated like a quick beauty add-on. It works best when the right patient is selected, 
                the right protocol is used, and expectations are set properly from the start.
              </p>
              <Link className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all"
                href="/contact-us/">
                Book Your Profhilo Consultation at Nexus Clinic KL
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Profhilo Procedure at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step — safe, precise, and personalized</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              Book Your Profhilo Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-taupe text-sm mt-3">15-30 minute sessions at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-light">
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
                { key: "areas", header: "Parts / Areas" },
                { key: "units", header: "Units / Session / Duration" },
                { key: "normalPrice", header: "Normal Price RM" },
                { key: "sellingPrice", header: "Selling Price RM" },
                { key: "promoPrice", header: "Promo Price" },
                { key: "package", header: "Standard Package" },
              ]}
              data={profhiloPricing}
              title="Profhilo Cost in Malaysia 2026"
              subtitle="Across Malaysia, Profhilo generally sits between RM 2,000 and RM 3,500 per session depending on the clinic, the doctor's experience, and the region being addressed."
              variant="detailed"
              fadeInUp={fadeInUp}
            />
        </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 max-w-5xl mx-auto text-center">
            <h3 className="font-georgia text-xl text-brown mb-3">Factors That Affect Your Profhilo Price</h3>
            <ul className="space-y-2">
              {priceFactors.map((factor, idx) => (
                <li key={idx} className="flex items-center gap-2 text-taupe text-center justify-center">
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown/50 font-inter text-sm">
                One thing worth knowing if you are shopping around: counterfeit HA products are a documented issue in Southeast Asia. Genuine Profhilo is manufactured by IBSA in Switzerland. If the pricing somewhere looks unusually low, ask to see the product packaging and batch number before agreeing to anything.
            </p>
          </motion.div>
          </motion.div>
          
      </section>


      {/* Side Effects & Aftercare Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Profhilo Side Effects and Aftercare</h2>
            <p className="text-taupe font-inter">Temporary, rare and usually mild</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl border border-taupe/10">
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
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl border border-taupe/10">
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
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 p-6 rounded-xl">
            <h3 className="font-georgia text-xl text-brown mb-4">Profhilo Aftercare Instructions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {aftercareInstructions.map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-wine mt-0.5 flex-shrink-0" />
                  <span className="text-taupe font-inter text-sm">{instruction}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-taupe text-sm mt-4 italic">
              Most small injection-point bumps settle quickly. Skin improvement continues to develop over the following weeks.
            </p>
          </motion.div>
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
              Book Profhilo in Kuala Lumpur at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If your skin looks dull, tired, thin or less firm than it used to, Profhilo may be the treatment that brings it back to life without changing your face.
            </p>
            <p className="text-cream/90 font-inter">
              No heavy look. No fake volume. No surgery. Just better skin quality, better hydration and a fresher version of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact-us/"
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Free Profhilo Consultation Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Whatsapp 
                message="Hi, I'd like to book a free consultation for Profhilo treatment at Nexus Clinic KL. Please let me know available slots."
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