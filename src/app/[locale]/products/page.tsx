export const dynamic = "force-static";
import Products from "@/src/views/Products";
import { routing } from "@/src/i18n/routing";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Medical-Grade Skincare Products in KL | Nexus Clinic",
    description: "Shop doctor-recommended medical-grade skincare products in KL. Formulated for acne, pigmentation, aging & sensitive skin. Available at Nexus Clinic.",
    alternates: buildAlternates(locale, "/products/"),
  };
}

export async function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({ locale }));
}

export default function Page() {
  return <Products />;
}
