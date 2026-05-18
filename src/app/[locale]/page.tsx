import HomePageNexus from "@/src/views/HomePage";
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
    title: "Aesthetic Clinic Kuala Lumpur (KL) | Doctor-Led Skin & Weight Loss Treatments",
    description: "Doctor-led aesthetic clinic in Kuala Lumpur with certified injectors and natural-looking results for skin & weight loss.",
    alternates: buildAlternates(locale, "/"),
  };
}

export function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({ locale }));
}

export default function Page() {
  return <HomePageNexus />;
}
