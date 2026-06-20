import HomePageNexus from "@/src/views/HomePage";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: { absolute: "Aesthetic Clinic Kuala Lumpur | Doctor-Led Skin, Hair & Weight Loss Treatments" },
  description: "Doctor-led aesthetic clinic in Kuala Lumpur. Certified injectors offering Botox, fillers, laser, PRP, hair loss and medical weight loss treatments. Book your free consultation at Nexus Clinic KL.",
  alternates: {
    canonical: `${baseurl}`,
  },
  openGraph: {
    title: "Aesthetic Clinic Kuala Lumpur | Doctor-Led Skin, Hair & Weight Loss Treatments",
    description: "Doctor-led aesthetic clinic in Kuala Lumpur. Certified injectors offering Botox, fillers, laser, PRP, hair loss and medical weight loss treatments at Nexus Clinic KL.",
    url: `${baseurl}`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic KL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Clinic Kuala Lumpur | Doctor-Led Skin, Hair & Weight Loss Treatments",
    description: "Doctor-led aesthetic clinic in Kuala Lumpur. Certified injectors offering Botox, fillers, laser, PRP, hair loss and medical weight loss treatments at Nexus Clinic KL.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
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