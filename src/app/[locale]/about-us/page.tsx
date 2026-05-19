export const dynamic = "force-static";
import AboutUs from "@/src/views/About";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "About Nexus Clinic – Doctor-Led Aesthetic & Wellness Care in KL",
  description: "Learn about Nexus Clinic in KL – a doctor-led medical aesthetic clinic offering personalised treatments for skin, hair, face and weight concerns.  ",
  alternates: {
    canonical: `${baseurl}/about-us`,
  },
};
export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <AboutUs  />;
} 