import AwardsCertificate from "@/src/views/AwardsCertificate"
import { Metadata } from "next";
const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"


export const metadata: Metadata = {
  title: { absolute: "Awards & Certifications | Nexus Clinic Award-Winning Aesthetic Clinic Malaysia" },
  description: "Nexus Clinic Kuala Lumpur receives Allergan Gold Award 2022, Platinum Award 2024, CoolSculpting Club 200 & Sculptra Star Injector Award 2025.",
  alternates: {
    canonical: `${baseurl}/awards-and-certifications/`,
  },
  openGraph: {
    title: "Awards & Certifications | Nexus Clinic Award-Winning Aesthetic Clinic Malaysia",
    description: "Nexus Clinic Kuala Lumpur receives Allergan Gold Award 2022, Platinum Award 2024, CoolSculpting Club 200 & Sculptra Star Injector Award 2025.",
    url: `${baseurl}/awards-and-certifications/`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic Awards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Certifications | Nexus Clinic Award-Winning Aesthetic Clinic Malaysia",
    description: "Nexus Clinic Kuala Lumpur receives Allergan Gold Award 2022, Platinum Award 2024, CoolSculpting Club 200 & Sculptra Star Injector Award 2025.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};

export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <AwardsCertificate   locale={locale} />;
}   