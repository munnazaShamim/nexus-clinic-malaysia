export const dynamic = "force-static";
import RegenerativeHub from "@/src/views/regenerative/RegenerativeHub";
import { Metadata } from "next";
import { regenerativeSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: " Regenerative Treatments in KL | Skin & Hair Repair",
    description: "Boost collagen and repair skin with regenerative treatments in KL like PRP and exosomes. Doctor-led solutions for long-term rejuvenation.",
    alternates: buildAlternates(locale, "/regenerative/"),
  };
}

export default function RegenerativePage() {
  const schema = regenerativeSchema('regenerative');
  return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RegenerativeHub />
    </>
  );
}
