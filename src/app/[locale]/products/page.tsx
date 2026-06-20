export const dynamic = "force-static";
import Products from "@/src/views/Products";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: { absolute: "Medical-Grade Skincare Products in KL | Nexus Clinic" },
  description: "Shop doctor-recommended medical-grade skincare products in KL. Formulated for acne, pigmentation, aging & sensitive skin. Available at Nexus Clinic.",
  alternates: {
    canonical: `${baseurl}/products`,
  },
  openGraph: {
    title: "Medical-Grade Skincare Products in KL | Nexus Clinic",
    description: "Shop doctor-recommended medical-grade skincare products in KL. Formulated for acne, pigmentation, aging & sensitive skin. Available at Nexus Clinic.",
    url: `${baseurl}/products`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical-Grade Skincare Products in KL | Nexus Clinic",
    description: "Shop doctor-recommended medical-grade skincare products in KL. Formulated for acne, pigmentation, aging & sensitive skin. Available at Nexus Clinic.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Products locale={locale} />;
}
