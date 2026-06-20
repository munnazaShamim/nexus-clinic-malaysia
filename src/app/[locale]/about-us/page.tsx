export const dynamic = "force-static";
import AboutUs from "@/src/views/About";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: { absolute: "About Nexus Clinic – Doctor-Led Aesthetic & Wellness Care in KL" },
  description: "Learn about Nexus Clinic in KL – a doctor-led medical aesthetic clinic offering personalised treatments for skin, hair, face and weight concerns.",
  alternates: {
    canonical: `${baseurl}/about-us`,
  },
  openGraph: {
    title: "About Nexus Clinic – Doctor-Led Aesthetic & Wellness Care in KL",
    description: "Learn about Nexus Clinic in KL – a doctor-led medical aesthetic clinic offering personalised treatments for skin, hair, face and weight concerns.",
    url: `${baseurl}/about-us`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nexus Clinic – Doctor-Led Aesthetic & Wellness Care in KL",
    description: "Learn about Nexus Clinic in KL – a doctor-led medical aesthetic clinic offering personalised treatments for skin, hair, face and weight concerns.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};
export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <AboutUs  />;
} 