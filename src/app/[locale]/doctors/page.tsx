export const dynamic = "force-static";
import { routing } from "@/src/i18n/routing";
import PageProfileDoctor from "@/src/views/HomeLanding/PageDoctors";
import React from "react";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Our Doctors in KL – Experienced Aesthetic Doctors | Nexus Clinic",
    description: "Meet our doctor-led team in KL. Experienced aesthetic doctors specialising in skin, hair, face and weight treatments. Book a consultation today.",
    alternates: buildAlternates(locale, "/doctors/"),
  };
}

export async function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({ locale }));
}

const Page = () => {
  return <PageProfileDoctor />;
};

export default Page;
