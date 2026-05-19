import PageFractionalLaser from "@/src/views/PageFractionalLaser";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Fractional Laser Resurfacing in KL for Scar & Wrinkle Repair | Nexus Clinic",
  description: "Treat acne scars, wrinkles & large pores with fractional laser resurfacing in KL. Doctor-led care for smoother, younger-looking skin",
  alternates: {
    canonical: `${baseurl}/fraqtional-laser-resurfacing`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageFractionalLaser />;
}
