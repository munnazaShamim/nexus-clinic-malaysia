import { Metadata } from "next";
import content from "@/src/locales/en/doctors/drPreethaNair.json";
import DrPreethaNairPage from "./DrPreethaNairPage";
import { buildAlternates, BASE_URL } from "@/src/lib/seo";

const DOCTOR_PATH = `/doctors/${content.meta.slug}/`;
const DOCTOR_URL = `${BASE_URL}${DOCTOR_PATH}`;

// Schema Markup - Single Physician + MedicalBusiness association
const physicianSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${DOCTOR_URL}#physician`,
      "name": content.doctor.name,
      "honorificPrefix": "Dr.",
      "jobTitle": "Aesthetic & Weight Loss Doctor",
      "url": DOCTOR_URL,
      "image": `${BASE_URL}${content.doctor.photo}`,
      "description": content.meta.description,
      "worksFor": {
        "@id": `${BASE_URL}/#medicalbusiness`
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": content.credentials.university,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": content.credentials.country
        }
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": content.credentials.degree,
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": content.credentials.university
        }
      },
      "medicalSpecialty": [
        "Aesthetic Medicine",
        "Weight Management",
        "Skin Rejuvenation",
        "Non-Surgical Anti-Aging"
      ],
      "knowsAbout": [
        "Botox",
        "Sculptra",
        "Weight Loss Management",
        "Dermal Fillers",
        "Anti Aging",
        "Ozempic",
        "Mounjaro",
        "Regenerative Aesthetics",
        "Profhilo",
        "Rejuran",
        "Pico Laser",
        "CoolSculpting"
      ],
      "sameAs": []
    },
    {
      "@type": ["MedicalBusiness", "MedicalClinic"],
      "@id": `${BASE_URL}/#medicalbusiness`,
      "name": "Nexus Clinic Malaysia",
      "url": BASE_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuala Lumpur",
        "addressCountry": "Malaysia"
      }
    }
  ]
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: `${content.meta.mainKeyword}, ${content.meta.secondaryKeywords}`,
    alternates: buildAlternates(locale, DOCTOR_PATH),
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: DOCTOR_URL,
      type: "profile",
      images: [
        {
          url: `${BASE_URL}${content.doctor.photo}`,
          alt: content.meta.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [`${BASE_URL}${content.doctor.photo}`],
    },    
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
        <DrPreethaNairPage  />
    </>
  );
}