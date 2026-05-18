"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Calendar,
  Timer,
  CheckCircle2,
  Star,
  ChevronDown,
  Zap,
  Shield,
  Heart,
  Target,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import FAQWithSchema from "../components/FAQWithSchema";
import BeforeAfterFaceSection from "../components/BeforeAfterFace";
import { useTranslations } from "next-intl";

const statIcons = [Target, Clock, Calendar, Timer];
const concernIcons = [Sparkles, Heart, Shield, Target];

const PageFractionalLaser = () => {
  const t = useTranslations("fractionalLaser");

  const treatmentStats = (t.raw("stats") as Array<{ label: string; value: string }>).map(
    (stat, idx) => ({ ...stat, icon: statIcons[idx] ?? Target })
  );
  const benefits = t.raw("benefits.items") as Array<{ title: string; desc: string }>;
  const skinConcerns = (t.raw("concerns.items") as Array<{ title: string }>).map(
    (item, idx) => ({ ...item, icon: concernIcons[idx] ?? Sparkles })
  );
  const processItems = t.raw("process.items") as Array<{ step: string; title: string; desc: string }>;
  const testimonials = t.raw("testimonials.items") as Array<{ name: string; text: string }>;
  const faqs = t.raw("faq") as Array<{ q: string; a: string }>;

  return (
    <>
      <main className="min-h-screen bg-cream font-inter overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-br from-brown via-wine to-rose overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cream rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-taupe rounded-full blur-3xl" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-md rounded-full text-brown text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-6xl lg:text-7xl text-light leading-tight mb-6"
            >
              {t("hero.titleLine1")}
              <span className="block text-cream/80 mt-2">{t("hero.titleLine2")}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-cream text-brown font-semibold rounded-full hover:bg-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t("hero.primaryCta")}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cream/50 text-cream font-semibold rounded-full hover:bg-cream/10 transition-all duration-300">
                {t("hero.secondaryCta")}
              </button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 flex flex-wrap justify-center gap-8 text-cream/80"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{t("hero.clients")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>{t("hero.since")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                <span>{t("hero.rated")}</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cream/60" />
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-24 bg-light">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  {t("what.eyebrow")}
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-4 mb-6 leading-tight">
                  {t("what.title")}
                </h2>
                <div className="space-y-4 text-taupe leading-relaxed">
                  <p>{t("what.para1")}</p>
                  <p>{t("what.para2")}</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-wine" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown">{t("what.goldTitle")}</p>
                    <p className="text-taupe text-sm">
                      {t("what.goldSubtitle")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square bg-linear-to-br from-rose/30 to-wine/20 rounded-3xl p-8">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80')] rounded-2xl shadow-2xl flex items-center justify-center"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-taupe/20 rounded-full blur-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Stats */}
        <section className="py-16 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {treatmentStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-light p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border border-taupe/10"
                >
                  <div className="w-14 h-14 mx-auto bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-7 h-7 text-wine" />
                  </div>
                  <p className="text-taupe text-sm mb-1">{stat.label}</p>
                  <p className="font-semibold text-brown text-lg">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-brown">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-rose font-medium tracking-wider uppercase text-sm"
              >
                {t("benefits.eyebrow")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-5xl text-light mt-4"
              >
                {t("benefits.title")}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-glass backdrop-blur-sm p-8 rounded-2xl border border-light/10 hover:border-rose/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wine rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-light" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-light text-xl mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-cream/70">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skin Concerns */}
        <section className="py-24 bg-light">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                {t("concerns.eyebrow")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-5xl text-brown mt-4 mb-6"
              >
                {t("concerns.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                {t("concerns.subtitle")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {skinConcerns.map((concern, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative bg-cream p-8 rounded-3xl text-center hover:bg-wine transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto bg-wine/10 group-hover:bg-light/20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-500">
                      <concern.icon className="w-8 h-8 text-wine group-hover:text-light transition-colors duration-500" />
                    </div>
                    <h3 className="font-semibold text-brown group-hover:text-light transition-colors duration-500">
                      {concern.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Before After */}
        <BeforeAfterFaceSection />

        {/* Process Section */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.span
                  variants={fadeInUp}
                  className="text-wine font-medium tracking-wider uppercase text-sm"
                >
                  {t("process.eyebrow")}
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-3xl md:text-5xl text-brown mt-4"
                >
                  {t("process.title")}
                </motion.h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {processItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative"
                  >
                    <div className="bg-light p-8 rounded-3xl h-full border border-taupe/10 hover:border-wine/20 transition-colors duration-300">
                      <span className="font-georgia text-6xl text-wine/20">
                        {item.step}
                      </span>
                      <h3 className="font-semibold text-brown text-xl mt-4 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-taupe">{item.desc}</p>
                    </div>
                    {index < processItems.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-wine/30" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-linear-to-br from-wine to-rose">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.span
                  variants={fadeInUp}
                  className="text-cream/80 font-medium tracking-wider uppercase text-sm"
                >
                  {t("testimonials.eyebrow")}
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-3xl md:text-5xl text-light mt-4"
                >
                  {t("testimonials.title")}
                </motion.h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-glass backdrop-blur-md p-8 rounded-3xl border border-light/20"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-cream fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-light/90 mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-light/20 rounded-full flex items-center justify-center">
                        <span className="text-light font-semibold">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <span className="font-medium text-light">
                        {testimonial.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQWithSchema data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-brown">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-5xl text-light mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto"
            >
              {t("cta.description")}
            </motion.p>
            <motion.button
              variants={fadeInUp}
              className="px-10 py-4 bg-wine text-light font-semibold rounded-full hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t("cta.button")}
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PageFractionalLaser;
