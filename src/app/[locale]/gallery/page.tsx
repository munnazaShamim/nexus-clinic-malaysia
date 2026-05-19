export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import GalleryPage from "@/src/views/SliderGallery";
import React from "react";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Treatment Results Gallery – Before & After | Nexus Clinic KL",
  description: "View real before and after results from Nexus Clinic KL. See skin, hair, face and weight loss transformations. Doctor-led care you can trust.",
  alternates: {
    canonical: `${baseurl}/gallery`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

const Page = () => {
  return <GalleryPage />;
};

export default Page;