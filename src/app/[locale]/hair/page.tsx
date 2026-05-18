export const dynamic = "force-static";
import HairHub from "@/src/views/hairTreatment/HairHub";
import { Metadata } from "next";
import { hairSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: " Hair Loss Treatment in KL for Stronger Hair | Nexus",
    description: "Treat hair loss with PRP, mesotherapy & doctor-led solutions in KL. Restore thicker, healthier hair with personalised treatment plans.",
    alternates: buildAlternates(locale, "/hair/"),
  };
}

export default function HairPage() {
  const schema = hairSchema('hair');
  return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HairHub />
    </>
  );
}
