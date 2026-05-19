export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import { skinTreatmentsMetadata } from "@/src/config/skinTreatments";
import type { Metadata } from "next";
import { skinSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
// Import all components (create these files with minimal return)
import AcneTreatment from "@/src/views/skinTreatment/AcneTreatment";
import AcneScarTreatment from "@/src/views/skinTreatment/AcneScarTreatment";
import PigmentationTreatment from "@/src/views/skinTreatment/PigmentationTreatment";
import MelasmaTreatment from "@/src/views/skinTreatment/MelasmaTreatment";
import MoleRemoval from "@/src/views/skinTreatment/MoleRemoval";
// import Hydrafacial from "@/src/views/skinTreatment/Hydrafacial";
import PicoLaser from "@/src/views/skinTreatment/PicoLaser";
import DarkEyeCircleTreatment from "@/src/views/skinTreatment/DarkEyeCircleTreatment";
import SkinWhitening from "@/src/views/skinTreatment/SkinWhitening";
import EczemaTreatment from "@/src/views/skinTreatment/Eczema";
import KeloidTreatment from "@/src/views/skinTreatment/KeloidTreatment";
import RosaceaTreatment from "@/src/views/skinTreatment/RosaceaTreatment";
import LaserHairRemoval from "@/src/views/skinTreatment/LaserHairRemoval";
import TattooRemoval from "@/src/views/skinTreatment/TattooRemoval";
import Hydrafacial from "@/src/views/skinTreatment/Hrdrafracial";
import StretchMarkRemoval from "@/src/views/skinTreatment/StretchMarkTreatment";
import ChemicalPeelMalaysia from "@/src/views/skinTreatment/ChemicalPeelMalaysia";
import { notFound } from "next/navigation";

const components: Record<string, React.ComponentType<{ locale: string }>> = {
  AcneTreatment,
  AcneScarTreatment,
  PigmentationTreatment,
  MelasmaTreatment,
  MoleRemoval,
  Hydrafacial,
  PicoLaser,
  DarkEyeCircleTreatment,
  SkinWhitening,
  EczemaTreatment,
  KeloidTreatment,
  RosaceaTreatment,
  StretchMarkRemoval,
  LaserHairRemoval,
  TattooRemoval,
  ChemicalPeelMalaysia,
};

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of skinTreatmentsMetadata) {
      paths.push({ locale, slug: treatment.slug });
    }
  }
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = skinTreatmentsMetadata.find((t) => t.slug === slug);

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
  const url =
    locale === "en"
      ? `${baseUrl}/skin/${slug}`
      : `${baseUrl}/${locale}/skin/${slug}`;

  return {
    title: treatment.title,
    description: treatment.description,
    alternates: { canonical: url },
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url,
      siteName: "Nexus Clinic",
    },
  };
}

export default async function SkinTreatmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const schema = skinSchema(slug);
  const treatment = skinTreatmentsMetadata.find((t) => t.slug === slug);
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
