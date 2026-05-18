export const dynamic = "force-static";
import ContactUs from "@/src/views/ContactUs";
import { Metadata } from "next";
import { buildAlternates } from "@/src/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Contact Nexus Clinic – Get in Touch in KL | Nexus",
    description: "Reach Nexus Clinic in KL for doctor-led aesthetic treatments. Call, email or visit us. Book your free consultation today.",
    alternates: buildAlternates(locale, "/contact-us/"),
  };
}

export default function Page() {
  return <ContactUs />;
}
