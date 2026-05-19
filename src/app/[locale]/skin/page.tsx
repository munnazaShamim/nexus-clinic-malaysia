export const dynamic = "force-static";
import SkinHub from '@/src/views/skinTreatment/SkinHub'
import { Metadata } from "next";
import { skinSchema } from "@/src/lib/loadSchema";
import Script from "next/script";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Skin Treatments in KL for Clear, Healthy Skin",
  description: "Treat acne, scars, pigmentation & dull skin with advanced laser and medical treatments in KL. Safe, effective and personalised care.",
  alternates: {
    canonical: `${baseurl}/skin`,
  },
};
export default async function SkinTreatmentPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
    const { locale } = await params;
    const schema = skinSchema('skin');
    return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SkinHub locale={locale} />
    </>
  );
}   
