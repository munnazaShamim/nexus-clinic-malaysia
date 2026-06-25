"use client";
import dynamic from "next/dynamic";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import HeroSection from "@/src/views/HomeLanding/HeroSection";
import WhyChooseSection from "@/src/views/HomeLanding/WhyChooseSection";
import ServicesSection from "@/src/views/HomeLanding/ServicesSection";
import "@/src/lib/animations.css";

// Below-fold sections are code-split so their JS is not parsed on initial load.
// This directly reduces TBT and TTI on mobile.
const TestimonialsSection = dynamic(
  () => import("@/src/views/HomeLanding/TestimonialsSection")
);

// GoogleReviews makes a client-side API call and runs requestAnimationFrame;
// ssr:false avoids hydration overhead and keeps it out of the initial bundle.
const GoogleReviews = dynamic(
  () => import("@/src/views/HomeLanding/GoogleReviews"),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("@/src/views/HomeLanding/ContactSection")
);

const FAQWithSchema = dynamic(
  () => import("@/src/components/FAQWithSchema")
);

export default function HomePageNexus({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "home");
  const faqData = t("faq.items", { returnObjects: true }) as Array<{q: string; a: string}>;

  return (
    <div className="min-h-screen overflow-hidden bg-cream font-inter">
      <HeroSection t={t} />
      <WhyChooseSection t={t} />
      <ServicesSection t={t} />
      <TestimonialsSection t={t} />
      <GoogleReviews />
      <ContactSection t={t} />
      <FAQWithSchema data={faqData} />
    </div>
  );
}
