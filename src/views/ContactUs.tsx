"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CLINIC_ADDRESS = "LG 10, Lower Ground Floor, Wisma UOA 2, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia";
const CLINIC_PHONE = "+0167025699";
const CLINIC_EMAIL = "contact@nexus-clinic.com";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;

export default function ContactUs() {
  const t = useTranslations("contactUs");

  const visitDetails = t.raw("contactInfo.visit.details") as string[];
  const hoursDetails = t.raw("contactInfo.hours.details") as string[];
  const faqData = t.raw("faq.items") as Array<{ q: string; a: string }>;

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("contactInfo.visit.title"),
      details: visitDetails,
      action: {
        text: t("contactInfo.visit.action"),
        link: MAPS_URL,
        external: true,
      },
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contactInfo.call.title"),
      details: [`${t("contactInfo.call.detail")}${CLINIC_PHONE}`],
      action: { text: t("contactInfo.call.action"), link: `tel:${CLINIC_PHONE}`, external: false },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contactInfo.email.title"),
      details: [CLINIC_EMAIL],
      action: { text: t("contactInfo.email.action"), link: `mailto:${CLINIC_EMAIL}`, external: false },
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("contactInfo.hours.title"),
      details: hoursDetails,
      action: null,
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 md:py-28">
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
            {t("hero.title")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-light -mt-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream p-6 rounded-2xl border border-taupe/10 shadow-md text-center"
              >
                <div className="w-14 h-14 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wine">
                  {info.icon}
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-taupe font-inter text-sm">{detail}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action.link}
                    target={info.action.external ? "_blank" : undefined}
                    rel={info.action.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-wine font-inter text-sm mt-4 hover:gap-2 transition-all"
                  >
                    {info.action.text}
                    <ChevronRight className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-6">{t("map.title")}</h2>

              <div className="rounded-2xl overflow-hidden shadow-lg mb-6 group">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                  <Image
                    src="/images/map.webp"
                    alt={t("map.imageAlt")}
                    fill
                    className="w-full h-[180px] sm:h-[200px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="bg-cream rounded-2xl p-6 mb-6">
                <h3 className="font-georgia text-lg text-brown mb-4">{t("map.locationTitle")}</h3>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-taupe font-inter text-sm mb-4 hover:text-wine transition-colors"
                >
                  {CLINIC_ADDRESS}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-wine font-inter text-sm hover:gap-3 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  {t("map.openInMaps")}
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="">
                <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-2">{t("form.title")}</h2>
                <p className="text-taupe font-inter text-sm mb-6">
                  {t("form.subtitle")}
                </p>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/UKxErVKYDJqN3CowpP09"
                  style={{ width: '100%', height: '738px', border: 'none', borderRadius: '12px' }}
                  id="inline-UKxErVKYDJqN3CowpP09"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Calender Form Neuxs v2"
                  data-height="738"
                  data-layout-iframe-id="inline-UKxErVKYDJqN3CowpP09"
                  data-form-id="UKxErVKYDJqN3CowpP09"
                  title={t("form.iframeTitle")}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
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
              <Whatsapp message={t("cta.whatsappMessage")} variant="light" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
