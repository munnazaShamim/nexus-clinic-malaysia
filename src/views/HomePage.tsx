import { getTranslations } from "next-intl/server";
import HeroSection from '@/src/views/HomeLanding/HeroSection';
import WhyChooseSection from "@/src/views/HomeLanding/WhyChooseSection";
import ServicesSection from "@/src/views/HomeLanding/ServicesSection";
import TestimonialsSection from "@/src/views/HomeLanding/TestimonialsSection";
import GoogleReviews from "@/src/views/HomeLanding/GoogleReviews";
import ContactSection from "@/src/views/HomeLanding/ContactSection";
import FAQWithSchema from "@/src/components/FAQWithSchema";
import "@/src/lib/animations.css";

export default async function HomePageNexus() {
  const t = await getTranslations("home");
  // t.raw lets us pull the nested array for the FAQ schema component.
  const faqData = t.raw("faq.items") as Array<{ q: string; a: string }>;

  return (
    <div className="min-h-screen overflow-hidden bg-cream font-inter">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <TestimonialsSection />
      <GoogleReviews />
      <ContactSection />
      <FAQWithSchema data={faqData} />
    </div>
  );
}
