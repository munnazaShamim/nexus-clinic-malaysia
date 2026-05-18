export const dynamic = "force-static";
import AboutUs from "@/src/views/About";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "About Nexus Clinic – Doctor-Led Aesthetic & Wellness Care in KL",
    description: "Learn about Nexus Clinic in KL – a doctor-led medical aesthetic clinic offering personalised treatments for skin, hair, face and weight concerns.  ",
    alternates: buildAlternates(locale, "/about-us/"),
  };
}

export default function Page() {
  return <AboutUs />;
}
