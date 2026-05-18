export const dynamic = "force-static";
import { faceSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import FaceHub from "@/src/views/faceTreatment/FaceHub";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Face Treatments in KL for Natural Results | Nexus",
    description: "Enhance facial features with Botox, fillers & lifting treatments in KL. Doctor-led care for natural, balanced and refined results.",
    alternates: buildAlternates(locale, "/face/"),
  };
}

export default function FacePage() {
  const schema = faceSchema('face');

  return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FaceHub />
    </>
  );
}
