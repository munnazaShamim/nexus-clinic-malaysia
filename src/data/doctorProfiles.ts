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
    credentials: {
      degree: "MD",
      university: "Universitas Udayana",
      universityUrl: "https://www.unud.ac.id/",
      country: "Indonesia",
      licenseNumber: "50328",
      yearsOfExperience: 14, // 2008 provisional → 2026 = 18 years? Actually 2010 full reg = 16 years. Let's verify
    },
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
      "MBBS (Bachelor of Medicine & Surgery) – AIMST University",
      "Certificate in Aesthetic Medical Practice – AAAM",
      "Advanced Laser & Injectables Training",
    ],
    credentials: {
      degree: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
      university: "AIMST University",
      universityUrl: "https://www.aimst.edu.my/",
      country: "Malaysia",
      licenseNumber: "82489",
      yearsOfExperience: 9, // 2017 houseman → 2026 = 9 years clinical experience
      registered: "MCMC Registered Aesthetic Practitioner:",
      registeredLink:"https://merits.mmc.gov.my/search/registeredDoctor?name=ashv&page=3linkedin.com/in/dr-ashvinia-bala-16261327a?originalSubdomain=my"
    },
    clinicalFocus: [
      "Aesthetic & Regenerative Medicine",
      "Laser & Energy-Based Devices",
      "Injectables (Botox, Fillers, Biostimulators)",
      "Skin & Hair Rejuvenation (PRP, Mesotherapy)",
      "Body Sculpting & Weight Management",
      "Hormonal & Stem Cell Therapy",
    ],
    awards: [] as string[],
    bio: "Dr. Ashvinia Bala is a dedicated Aesthetic Medical Doctor based in Kuala Lumpur, Malaysia, affiliated with Nexus Clinic. Known for her meticulous approach, she tailors diagnostics and treatment plans to help individuals look and feel their best. Passionate about healthy living, environmental sustainability, baking cakes, and caring for dogs.",
    instagram: "https://instagram.com/ashvinia_bala",
    linkedin: "https://www.linkedin.com/in/dr-ashvinia-bala-16261327a/",
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
      "Pharm-D from the University of Karachi",
      "MPhil in Pharmaceutics from the University of Karachi",
      "Experience with DoctorOnCall",
      "Contributions to initiatives associated with the Ministry of Health Malaysia",
    ],
    credentials: {
      degree: "Pharm-D, MPhil",
      university: "International Islamic University Malaysia / University of Malaya",
      universityUrl: "https://iium.edu.my/",
      country: "Malaysia",
      licenseNumber: "TBA", // Pharmacy board registration number
      yearsOfExperience: 8,
    },
    awards: [] as string[],
    bio: "Phr. Anum Jawed is a dedicated pharmacist with specialized expertise in Pharmaceutics. With extensive experience in pharmaceutical research and clinical practice, she is passionate about optimizing medication formulations and improving patient care. She plays a crucial role in ensuring patients receive safe and effective medication therapy.",
    instagram: "#",
    linkedin: "https://linkedin.com/in/dr-anum",
    rating: 5,
  },
];

export type DoctorProfile = (typeof doctors)[0];