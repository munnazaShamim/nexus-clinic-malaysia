export const dynamic = "force-static";
import ContactUs from "@/src/views/ContactUs";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: { absolute: "Contact Nexus Clinic KL | Call, WhatsApp or Visit Us" },
  description: "Contact Nexus Clinic KL at Wisma UOA 2, Kuala Lumpur. Call, WhatsApp or visit us for aesthetic, skin, hair and weight loss treatments. Book your free consultation.",
  alternates: {
    canonical: `${baseurl}/contact-us`,
  },
  openGraph: {
    title: "Contact Nexus Clinic KL | Call, WhatsApp or Visit Us",
    description: "Contact Nexus Clinic KL at Wisma UOA 2, Kuala Lumpur. Call, WhatsApp or visit us for aesthetic, skin, hair and weight loss treatments.",
    url: `${baseurl}/contact-us`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nexus Clinic KL | Call, WhatsApp or Visit Us",
    description: "Contact Nexus Clinic KL at Wisma UOA 2, Kuala Lumpur. Call, WhatsApp or visit us for aesthetic, skin, hair and weight loss treatments.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};

export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <ContactUs  />;
}       