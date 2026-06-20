export const dynamic = "force-static";
import Consultation from "@/src/views/Consultation"
import { Metadata } from "next";
const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"


export const metadata: Metadata = {
  title: { absolute: "Free Consultation at Nexus Clinic KL | Book Your Assessment" },
  description: "Book a free consultation at Nexus Clinic KL. Doctor-led assessment and personalised treatment plans for skin, hair, face and weight concerns. Book today.",
  alternates: {
    canonical: `${baseurl}/consultation`,
  },
  openGraph: {
    title: "Free Consultation at Nexus Clinic KL | Book Your Assessment",
    description: "Book a free consultation at Nexus Clinic KL. Doctor-led assessment and personalised treatment plans for skin, hair, face and weight concerns.",
    url: `${baseurl}/consultation`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Consultation at Nexus Clinic KL | Book Your Assessment",
    description: "Book a free consultation at Nexus Clinic KL. Doctor-led assessment and personalised treatment plans for skin, hair, face and weight concerns.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};

export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <Consultation  />;
}   