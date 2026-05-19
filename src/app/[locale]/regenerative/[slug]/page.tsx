export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import type { Metadata } from "next";

import { regenerativeTreatmentsMetadata } from "@/src/config/regenerativeTreatments";
import Testosterone from "@/src/views/regenerative/Testosterone";
import EDTreatment from "@/src/views/regenerative/EDTreatment";
import HormoneReplacement from "@/src/views/regenerative/HormoneReplacement";
import PCOSTreatment from "@/src/views/regenerative/PCOSTreatment";
import Hypothyroidism from "@/src/views/regenerative/Hypothyroidism";
import StemCell from "@/src/views/regenerative/StemCell";
import AntiAging from "@/src/views/regenerative/AntiAging";
import HormoneTest from "@/src/views/regenerative/HormoneTest";
import Monopause from "@/src/views/regenerative/Monopause";
import PShotMalaysia from "@/src/views/regenerative/PShotMalaysia";
import OShotMalaysia from "@/src/views/regenerative/OShotMalaysia";
import ShockwaveTheraphy from "@/src/views/regenerative/ShockwaveTheraphy";
import { notFound } from "next/navigation";
import { regenerativeSchema } from "@/src/lib/loadSchema";
import Script from "next/script";

const components: Record<string, React.ComponentType<{ locale: string }>> = {
  Testosterone,
  EDTreatment,
  HormoneReplacement,
  PCOSTreatment,
  Hypothyroidism,
  StemCell,
  AntiAging,
  HormoneTest,
  Monopause,
  PShotMalaysia,
  OShotMalaysia,
  ShockwaveTheraphy,
};

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of regenerativeTreatmentsMetadata) {
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
  const treatment = regenerativeTreatmentsMetadata.find(t => t.slug === slug);
  
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
    ? `${baseUrl}/regenerative/${slug}` 
    : `${baseUrl}/${locale}/regenerative/${slug}`;

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

export default async function RegenerativeTreatmentPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  const schema = regenerativeSchema(slug);
  const treatment = regenerativeTreatmentsMetadata.find(t => t.slug === slug);
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