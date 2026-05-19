import HomePageNexus from "@/src/views/HomePage";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Aesthetic Clinic Kuala Lumpur (KL) | Doctor-Led Skin & Weight Loss Treatments",
  description: "Doctor-led aesthetic clinic in Kuala Lumpur with certified injectors and natural-looking results for skin & weight loss.",
  alternates: {
    canonical: `${baseurl}`,
  },
};

export function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <HomePageNexus locale={locale} />;
}