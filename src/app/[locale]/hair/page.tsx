export const dynamic = "force-static";
import HairHub from '@/src/views/hairTreatment/HairHub';
import { Metadata } from "next";
import { hairSchema } from "@/src/lib/loadSchema";
import Script from "next/script";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: " Hair Loss Treatment in KL for Stronger Hair | Nexus",
  description: "Treat hair loss with PRP, mesotherapy & doctor-led solutions in KL. Restore thicker, healthier hair with personalised treatment plans.",
  alternates: {
    canonical: `${baseurl}/hair`,
  },
};
export default async function HairPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
    const schema = hairSchema('hair');
    return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HairHub locale={locale} />
    </>
  );
}       