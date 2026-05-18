import PageFractionalLaser from "@/src/views/PageFractionalLaser";
import { routing } from "@/src/i18n/routing";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Fractional Laser Resurfacing in KL for Scar & Wrinkle Repair | Nexus Clinic",
    description: "Treat acne scars, wrinkles & large pores with fractional laser resurfacing in KL. Doctor-led care for smoother, younger-looking skin",
    alternates: buildAlternates(locale, "/fraqtional-laser-resurfacing/"),
  };
}

export async function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({ locale }));
}

export default function Page() {
  return <PageFractionalLaser />;
}
