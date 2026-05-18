export const dynamic = "force-static";
import SkinHub from "@/src/views/skinTreatment/SkinHub";
import { Metadata } from "next";
import { skinSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Skin Treatments in KL for Clear, Healthy Skin",
    description: "Treat acne, scars, pigmentation & dull skin with advanced laser and medical treatments in KL. Safe, effective and personalised care.",
    alternates: buildAlternates(locale, "/skin/"),
  };
}

export default function SkinTreatmentPage() {
  const schema = skinSchema('skin');
  return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SkinHub />
    </>
  );
}
