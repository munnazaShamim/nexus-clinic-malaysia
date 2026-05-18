export const dynamic = "force-static";
import WeightLossHub from "@/src/views/weightlossTreatment/WeightLossHub";
import { Metadata } from "next";
import { weightLossSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Doctor-Led Weight Loss Treatment in KL | Nexus",
    description: " Safe, doctor-led weight loss in KL with Ozempic, Mounjaro & personalised programs for sustainable fat loss. Book your consultation today.",
    alternates: buildAlternates(locale, "/weight-loss/"),
  };
}

export default function WeightLossPage() {
  const schema = weightLossSchema('weight-loss');
  return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WeightLossHub />
    </>
  );
}
