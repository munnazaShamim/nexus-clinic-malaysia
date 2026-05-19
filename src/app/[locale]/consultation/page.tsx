export const dynamic = "force-static";
import Consultation from "@/src/views/Consultation"
import { Metadata } from "next";
const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"


export const metadata: Metadata = {
  title: "Free Consultation in KL | Nexus Clinic",
  description: "Book a free consultation in KL with Nexus Clinic. Get doctor-led assessment and personalised treatment plans for skin, hair and weight concerns.",
  alternates: {
    canonical: `${baseurl}/consultation`,
  },
};

export default async function Page({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <Consultation  />;
}   