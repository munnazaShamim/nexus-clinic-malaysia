export const dynamic = "force-static";
import Consultation from "@/src/views/Consultation";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Free Consultation in KL | Nexus Clinic",
    description: "Book a free consultation in KL with Nexus Clinic. Get doctor-led assessment and personalised treatment plans for skin, hair and weight concerns.",
    alternates: buildAlternates(locale, "/consultation/"),
  };
}

export default function Page() {
  return <Consultation />;
}
