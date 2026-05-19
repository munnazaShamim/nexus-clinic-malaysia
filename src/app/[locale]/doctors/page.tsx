export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import PageProfileDoctor from "@/src/views/HomeLanding/PageDoctors";
import React from "react";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Our Doctors in KL – Experienced Aesthetic Doctors | Nexus Clinic",
  description: "Meet our doctor-led team in KL. Experienced aesthetic doctors specialising in skin, hair, face and weight treatments. Book a consultation today.",
  alternates: {
    canonical: `${baseurl}/doctors`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

const Page = () => {
  return <PageProfileDoctor />;
};

export default Page;