export const dynamic = "force-static";
import { routing } from "@/src/i18n/routing";
import GalleryPage from "@/src/views/SliderGallery";
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
    title: "Treatment Results Gallery – Before & After | Nexus Clinic KL",
    description: "View real before and after results from Nexus Clinic KL. See skin, hair, face and weight loss transformations. Doctor-led care you can trust.",
    alternates: buildAlternates(locale, "/gallery/"),
  };
}

export async function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({ locale }));
}

const Page = () => {
  return <GalleryPage />;
};

export default Page;
