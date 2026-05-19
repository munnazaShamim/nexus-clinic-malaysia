export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import type { Metadata } from "next";
import { hairTreatmentsMetadata } from "@/src/config/hairTreatments";
import HairTransplant from "@/src/views/hairTreatment/HairTransplant";
import FUEHairTransplant from "@/src/views/hairTreatment/FUEHairTransplant";
import PRPHair from "@/src/views/hairTreatment/PRPHair";
import HairLossTreatment from "@/src/views/hairTreatment/HairLossTreatment";
import BeardTreatment from "@/src/views/hairTreatment/BeardTreatment";
import HairMesotherapy from "@/src/views/hairTreatment/HairMesotherapy";
import ExosomeHair from "@/src/views/hairTreatment/ExosomeHair";
import MinoxidilTreatment from "@/src/views/hairTreatment/MinoxidilTreatment";
import Finasteride from "@/src/views/hairTreatment/Finasteride";
import AlopeciaArea from "@/src/views/hairTreatment/AlopeciaArea";
import { notFound } from "next/navigation";
import { hairSchema } from "@/src/lib/loadSchema";
import Script from "next/script";

const components: Record<string, React.ComponentType<{ locale: string }>> = {
  HairTransplant,
  FUEHairTransplant,
  PRPHair,
  HairLossTreatment,
  BeardTreatment,
  HairMesotherapy,
  ExosomeHair,
  MinoxidilTreatment,
  Finasteride,
  AlopeciaArea,
};

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of hairTreatmentsMetadata) {
      paths.push({ locale, slug: treatment.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = hairTreatmentsMetadata.find(t => t.slug === slug);
  
  if (!treatment) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  const baseUrl = process.env.BASE_URL|| "https://www.nexus-clinic.com";
  const url = locale === 'en' 
    ? `${baseUrl}/hair/${slug}` 
    : `${baseUrl}/${locale}/hair/${slug}`;

  return {
    title: treatment.title,
    description: treatment.description,
    alternates: { canonical: url },
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url,
      siteName: 'Nexus Clinic',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HairTreatmentPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
    const schema = hairSchema(slug);
    if (!schema) notFound();
  
  const treatment = hairTreatmentsMetadata.find(t => t.slug === slug);
  if (!treatment) notFound();
  
  const Component = components[treatment.component];
   if (!Component) notFound();
   return (
    <>
      <Script
        id="ServicesSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Component locale={locale} />
    </>
  );
}