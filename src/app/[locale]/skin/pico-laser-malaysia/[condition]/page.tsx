export const dynamic = "force-static";
import { languages } from "@/src/i18n/settings";
import {
  picoLaserConditions,
  picoLaserConditionSlugs,
} from "@/src/config/picoLaserConditions";
import type { Metadata } from "next";
import { picoLaserConditionSchema } from "@/src/lib/loadSchema";
import Script from "next/script";
import { notFound } from "next/navigation";
import PicoConditionLanding from "@/src/views/skinTreatment/PicoConditionLanding";

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const condition of picoLaserConditionSlugs) {
      paths.push({ locale, condition });
    }
  }
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; condition: string }>;
}): Promise<Metadata> {
  const { locale, condition } = await params;
  const content = picoLaserConditions[condition];

  if (!content) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const baseUrl =
    process.env.BASE_URL || "https://www.nexus-clinic.com";
  const url =
    locale === "en"
      ? `${baseUrl}/skin/pico-laser-malaysia/${condition}`
      : `${baseUrl}/${locale}/skin/pico-laser-malaysia/${condition}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      siteName: "Nexus Clinic",
    },
  };
}

export default async function PicoLaserConditionPage({
  params,
}: {
  params: Promise<{ locale: string; condition: string }>;
}) {
  const { locale, condition } = await params;
  const content = picoLaserConditions[condition];
  if (!content) notFound();

  const schema = picoLaserConditionSchema(condition);

  return (
    <>
      {schema && (
        <Script
          id="PicoLaserConditionSchema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <PicoConditionLanding locale={locale} condition={condition} />
    </>
  );
}
