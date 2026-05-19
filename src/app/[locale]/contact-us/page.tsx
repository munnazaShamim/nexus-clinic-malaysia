export const dynamic = "force-static";
import ContactUs from "@/src/views/ContactUs";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Contact Nexus Clinic – Get in Touch in KL | Nexus",
  description: "Reach Nexus Clinic in KL for doctor-led aesthetic treatments. Call, email or visit us. Book your free consultation today.",
  alternates: {
    canonical: `${baseurl}/contact-us`,
  },
};

export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <ContactUs  />;
}       