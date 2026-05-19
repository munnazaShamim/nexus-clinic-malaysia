export const dynamic = "force-static";
import RegenerativeHub from '@/src/views/regenerative/RegenerativeHub'
import { Metadata } from "next";
import { regenerativeSchema } from "@/src/lib/loadSchema";
import Script from "next/script";


const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: " Regenerative Treatments in KL | Skin & Hair Repair",
  description: "Boost collagen and repair skin with regenerative treatments in KL like PRP and exosomes. Doctor-led solutions for long-term rejuvenation.",
  alternates: {
    canonical: `${baseurl}/regenerative`,
  },
};
export default async function RegenerativePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
    const schema = regenerativeSchema('regenerative');
    return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RegenerativeHub locale={locale} />
    </>
  );
}       