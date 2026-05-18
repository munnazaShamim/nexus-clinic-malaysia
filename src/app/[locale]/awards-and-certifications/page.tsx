import AwardsCertificate from "@/src/views/AwardsCertificate";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Awards & Certifications | Nexus Clinic Award-Winning Aesthetic Clinic Malaysia",
    description: "Nexus Clinic Kuala Lumpur receives Allergan Gold Award 2022, Platinum Award 2024, CoolSculpting Club 200 & Sculptra Star Injector Award 2025.",
    alternates: buildAlternates(locale, "/awards-and-certifications/"),
  };
}

export default function Page() {
  return <AwardsCertificate />;
}
