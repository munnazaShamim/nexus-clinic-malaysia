// Plain data file — no "use client" — safe to import in server components

export const doctors = [
  {
    id: 1,
    slug: "preetha-nair",
    name: "Dr. Preetha Nair",
    title: "Aesthetic Medical Doctor | Advocate for Natural Beauty",
    photo: "/images/doctors/dr-preetha-nair.webp",
    photoLandscape: "/images/doctors/dr-preetha-nair-landscape.webp",
    specialisation: "Non-Invasive Treatments & Personalized Skincare",
    qualifications: [
      "Expertise in Non-Invasive Treatments",
      "Specialist in Personalized Skincare Solutions",
    ],
    awards: [] as string[],
    bio: "Dr. Preetha Nair is a skilled Aesthetic Medical Doctor based in Kuala Lumpur, Malaysia. She believes in a holistic approach to aesthetic medicine, tailoring every treatment to suit individual needs. Her gentle techniques and attention to detail ensure patient comfort and satisfaction.",
    instagram: "#",
    linkedin: "#",
    rating: 5,
  },
  {
    id: 2,
    slug: "ashvinia-bala",
    name: "Dr. Ashvinia Bala",
    title: "Aesthetic Medical Doctor | Advocate for Wellness & Sustainability",
    photo: "/images/doctors/dr-ashvinia-bala.webp",
    photoLandscape: "/images/doctors/dr-ashvinia-bala-landscape.webp",
    specialisation: "General Medicine & Aesthetic Treatments",
    qualifications: [
      "Expertise in General Medicine",
      "Specialized in Aesthetic Treatments",
    ],
    awards: [] as string[],
    bio: "Dr. Ashvinia Bala is a dedicated Aesthetic Medical Doctor based in Kuala Lumpur, Malaysia, affiliated with Nexus Clinic. Known for her meticulous approach, she tailors diagnostics and treatment plans to help individuals look and feel their best. Passionate about healthy living, environmental sustainability, baking cakes, and caring for dogs.",
    instagram: "https://instagram.com/ashvinia_bala",
    linkedin: "https://linkedin.com/in/dr-ashvinia-bala",
    rating: 5,
  },
  {
    id: 3,
    slug: "anum-jawed",
    name: "Phr. Anum Jawed",
    title: "Pharm-D, MPhil – Pharmaceutics | Clinical Pharmacist",
    photo: "/images/doctors/phr-anum-jawed.webp",
    photoLandscape: "/images/doctors/phr-anum-jawed-landscape.webp",
    specialisation: "Drug Formulation & Medication Therapy Management",
    qualifications: [
      "Pharm-D: International Islamic University Malaysia (IIUM)",
      "MPhil in Pharmaceutics: University of Malaya (UM), Malaysia",
      "Member of Malaysian Pharmaceutical Society (MPS)",
      "Member of Academy of Pharmacy Malaysia (APM)",
    ],
    awards: [] as string[],
    bio: "Phr. Anum Jawed is a dedicated pharmacist with specialized expertise in Pharmaceutics. With extensive experience in pharmaceutical research and clinical practice, she is passionate about optimizing medication formulations and improving patient care. She plays a crucial role in ensuring patients receive safe and effective medication therapy.",
    instagram: "#",
    linkedin: "https://linkedin.com/in/dr-anum",
    rating: 5,
  },
];

export type DoctorProfile = (typeof doctors)[0];
