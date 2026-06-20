import PageFractionalLaser from "@/src/views/PageFractionalLaser";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: { absolute: "Fractional Laser Resurfacing in KL for Scar & Wrinkle Repair | Nexus Clinic" },
  description: "Treat acne scars, wrinkles & large pores with fractional laser resurfacing in KL. Doctor-led care for smoother, younger-looking skin.",
  alternates: {
    canonical: `${baseurl}/fraqtional-laser-resurfacing`,
  },
  openGraph: {
    title: "Fractional Laser Resurfacing in KL for Scar & Wrinkle Repair | Nexus Clinic",
    description: "Treat acne scars, wrinkles & large pores with fractional laser resurfacing in KL. Doctor-led care for smoother, younger-looking skin.",
    url: `${baseurl}/fraqtional-laser-resurfacing`,
    siteName: "Nexus Clinic",
    type: "website",
    images: [{ url: `${baseurl}/logo.png`, width: 1200, height: 630, alt: "Nexus Clinic Fractional Laser" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Laser Resurfacing in KL for Scar & Wrinkle Repair | Nexus Clinic",
    description: "Treat acne scars, wrinkles & large pores with fractional laser resurfacing in KL. Doctor-led care for smoother, younger-looking skin.",
    images: [`${baseurl}/logo.png`],
  },
  robots: { index: true, follow: true },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageFractionalLaser />;
}
