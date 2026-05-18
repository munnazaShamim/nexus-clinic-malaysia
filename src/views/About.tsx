"use client";
import { motion } from "framer-motion";
import SocialIcons from "@/src/components/SocialIcons";
import {
  Sparkles,
  MapPin,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  Target,
  Phone,
  Quote,
  Smile,
  Building2,
  BadgeCheck,
  Briefcase,
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
import { useTranslations } from "next-intl";

const coreValueIcons = [Heart, Shield, Target, Sparkles];
const approachIcons = [BadgeCheck, Target, Heart, Sparkles, Clock, Shield];
const doctorImages = [
  "/images/main/Dr.-Aris-Image.webp",
  "/images/main/Dr.-Preetha-Image.webp",
  "/images/main/Dr-Ashvinia-bala.webp",
];

export default function AboutUs() {
  const t = useTranslations("about");

  const stats = t.raw("stats") as Array<{ value: string; label: string; sublabel: string }>;
  const coreValues = t.raw("values.items") as Array<{ title: string; description: string }>;
  const doctors = t.raw("doctors.items") as Array<{
    name: string;
    role: string;
    specialty: string;
    experience: string;
    bio: string;
  }>;
  const approachItems = t.raw("approach.items") as Array<{ title: string; description: string }>;
  const milestones = t.raw("milestones.items") as Array<{
    year: string;
    title: string;
    description: string;
  }>;
  const testimonials = t.raw("testimonials.items") as Array<{
    quote: string;
    author: string;
    location: string;
  }>;

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />

        <div className="absolute top-20 right-10 w-72 h-72 bg-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />

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
            {t("hero.titleLine1")}
            <span className="text-wine block">{t("hero.titleLine2")}</span>
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
            <Link href="/doctors/">
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

      {/* Stats Banner */}
      <section className="py-12 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-georgia text-light font-bold">{stat.value}</p>
                <p className="text-cream/80 font-inter text-sm mt-1">{stat.label}</p>
                <p className="text-cream/60 font-inter text-xs">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
                {t("story.eyebrow")}
              </span>
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                {t("story.title")}
              </h2>
              <div className="space-y-4 text-taupe font-inter leading-relaxed">
                <p>{t("story.para1")}</p>
                <p>{t("story.para2")}</p>
                <p>{t("story.para3")}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/clinic/interior.webp"
                  alt={t("story.imageAlt")}
                  width={200}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cream rounded-2xl p-4 shadow-xl border border-taupe/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-wine" />
                  </div>
                  <div>
                    <p className="font-georgia text-brown font-semibold">{t("story.happyBadge")}</p>
                    <p className="text-taupe text-sm font-inter">{t("story.happySub")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Philosophy / Core Values */}
      <section className="py-24 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              {t("values.eyebrow")}
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {t("values.title")}
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = coreValueIcons[idx] ?? Heart;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-light p-6 rounded-2xl shadow-md border border-taupe/10 text-center"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wine">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">{value.title}</h3>
                  <p className="text-taupe font-inter text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              {t("doctors.eyebrow")}
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {t("doctors.title")}
            </h2>
            <p className="text-taupe font-inter mt-4 max-w-2xl mx-auto">
              {t("doctors.subtitle")}
            </p>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-cream rounded-2xl overflow-hidden shadow-lg border border-taupe/10"
              >
                <div className="aspect-square bg-brown/10 relative overflow-hidden">
                  <Image
                    src={doctorImages[idx] ?? doctorImages[0]}
                    alt={doctor.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-georgia text-xl text-brown">{doctor.name}</h3>
                  <p className="text-wine font-inter text-sm font-semibold mt-1">{doctor.role}</p>
                  <p className="text-taupe font-inter text-xs mt-2">{doctor.specialty}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Briefcase className="w-3 h-3 text-taupe" />
                    <span className="text-taupe font-inter text-xs">{doctor.experience}</span>
                  </div>
                  <p className="text-taupe font-inter text-sm mt-3 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/doctors/">
              <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
                {t("doctors.viewAll")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Approach / What Makes Us Different */}
      <section className="py-24 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">{t("approach.title")}</h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4 mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-6">
              {approachItems.slice(0, 3).map((item, idx) => {
                const Icon = approachIcons[idx] ?? BadgeCheck;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-georgia text-lg text-brown">{item.title}</h3>
                      <p className="text-taupe font-inter text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              {approachItems.slice(3, 6).map((item, idx) => {
                const Icon = approachIcons[idx + 3] ?? BadgeCheck;
                return (
                  <div key={idx + 3} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-georgia text-lg text-brown">{item.title}</h3>
                      <p className="text-taupe font-inter text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Clinic Journey / Milestones */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              {t("milestones.eyebrow")}
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {t("milestones.title")}
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-wine/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:px-8">
                    <div className={`bg-cream p-6 rounded-2xl shadow-md border border-taupe/10 ${
                      idx % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                      <div className="inline-block px-3 py-1 bg-wine/10 rounded-full text-wine font-georgia font-semibold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="font-georgia text-xl text-brown mb-2">{milestone.title}</h3>
                      <p className="text-taupe font-inter text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wine rounded-full hidden md:block" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clinic Location & Facilities */}
      <section className="py-24 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
                {t("location.eyebrow")}
              </span>
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                {t("location.title")}
              </h2>
              <div className="space-y-4 text-taupe font-inter leading-relaxed">
                <p>{t("location.para1")}</p>
                <p>{t("location.para2")}</p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter">{t("location.address")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter">{t("location.hours")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter">{t("location.phone")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/clinic/medical.webp"
                    alt={t("location.altReception")}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image
                    src="/images/clinic/consultation2.webp"
                    alt={t("location.altTreatment")}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/clinic/consultation.webp"
                    alt={t("location.altConsultation")}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image
                    src="/images/clinic/medical.webp"
                    alt={t("location.altWaiting")}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-light rounded-xl p-4 shadow-xl border border-taupe/10">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-wine" />
                  <span className="text-brown font-inter font-medium">{t("location.badge")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              {t("testimonials.eyebrow")}
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              {t("testimonials.title")}
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream p-6 rounded-2xl border border-taupe/10"
              >
                <Quote className="w-8 h-8 text-wine/30 mb-4" />
                <p className="text-taupe font-inter leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <Smile className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="font-georgia text-brown font-semibold">{testimonial.author}</p>
                    <p className="text-taupe text-xs font-inter">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-wine">
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
              <Link href="/consultation/">
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
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Brand Content */}
      <section className="py-12 px-4 bg-brown">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <p className="text-cream/70 font-inter text-sm leading-relaxed">
            {t("footerBrand")}
          </p>
          <div className="flex justify-center mt-6">
            <SocialIcons variant="dark" iconSize={20} showTooltip={true} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
