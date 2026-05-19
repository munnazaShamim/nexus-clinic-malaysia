export const dynamic = "force-static";
import Products from "@/src/views/Products";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Medical-Grade Skincare Products in KL | Nexus Clinic",
  description: "Shop doctor-recommended medical-grade skincare products in KL. Formulated for acne, pigmentation, aging & sensitive skin. Available at Nexus Clinic.",
  alternates: {
    canonical: `${baseurl}/products`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Products locale={locale} />;
}
