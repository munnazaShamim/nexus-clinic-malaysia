export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import { DoctorsSection } from "@/src/components/DoctorSection";
import React from "react";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: { absolute: "Our Doctors in KL – Experienced Aesthetic Doctors | Nexus Clinic" },
  description: "Meet our doctor-led team in KL. Experienced aesthetic doctors specialising in skin, hair, face and weight treatments. Book a consultation today.",
  alternates: {
    canonical: `${baseurl}/doctors`,
  },
  openGraph: {
    title: "Our Doctors in KL – Experienced Aesthetic Doctors | Nexus Clinic",
    description: "Meet our doctor-led team in KL. Experienced aesthetic doctors specialising in skin, hair, face and weight treatments. Book a consultation today.",
    url: `${baseurl}/doctors`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic Doctors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Doctors in KL – Experienced Aesthetic Doctors | Nexus Clinic",
    description: "Meet our doctor-led team in KL. Experienced aesthetic doctors specialising in skin, hair, face and weight treatments. Book a consultation today.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

const Page = () => {
  return <DoctorsSection />;
};

export default Page;