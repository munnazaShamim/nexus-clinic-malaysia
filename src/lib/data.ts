// ─────────────────────────────────────────────────────────────
// Nexus Clinic Malaysia — Gallery Data
// Proper image names, alt text, and category grouping
// ─────────────────────────────────────────────────────────────

export type GalleryCategory =
  | "All"
  | "Skin"
  | "Hair"
  | "Regenerative"
  | "Weight Loss"
  | "Body Treatment"
  | "Anti-Ageing";

export interface GalleryItem {
  id: number;
  category: Exclude<GalleryCategory, "All">;
  title: string;
  altBefore: string;
  altAfter: string;
  beforeSrc: string;
  afterSrc: string;
  treatment: string;
  sessions: number;
  durationWeeks: string;
  sessionsN: string;
  tag?: string; // e.g. "Most Popular", "New"
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Skin",
  "Hair",
  "Regenerative",
  "Weight Loss",
  "Body Treatment",
  "Anti-Ageing",
];

export const galleryItems: GalleryItem[] = [
  // ── Skin ────────────────────────────────────────────
  {
    id: 1,
    category: "Skin",
    title: "Melasma Reduction:  Even-Tone Cheeks",
    treatment: "PicoSure Laser + Vitamin C Drip",
    altBefore:
      "Patient before melasma treatment showing brown patches on cheeks and forehead at Nexus Clinic Malaysia",
    altAfter:
      "Patient after 4 sessions of PicoSure laser at Nexus Clinic Malaysia — visible reduction in melasma and brighter skin tone",
    beforeSrc: "/images/B&A-skin/B&A-melasma-treatment1.webp",
    afterSrc: "/images/B&A-skin/B&A-melasma-treatment1.webp",
    sessions: 4,
    sessionsN: "4-6",
    durationWeeks: "8-10 Weeks",
    tag: "Most Popular",
  },
  {
    id: 2,
    category: "Skin",
    title: "Benign Mole Removal",
    treatment: "Q-Switch ND:YAG Laser",
    altBefore:
      "Patient before Q-Switch laser showing multiple freckles and sun spots across the full face",
    altAfter:
      "Patient after 3 sessions of Q-Switch ND:YAG laser at Nexus Clinic — significant reduction in freckles with even skin tone",
    beforeSrc: "/images/B&A-skin/B&A-mole-removal1.webp",
    afterSrc: "/images/B&A-skin/B&A-mole-removal1.webp",
    sessions: 1,
    sessionsN: "1",
    durationWeeks: "1-3 Weeks healing",
  },
  {
    id: 3,
    category: "Skin",
    title: "Pigmentation & Sun Spot Reduction: Full Face",
    treatment: " Fractional CO₂ Laser + Brightening Peel",
    altBefore:
      "Patient before treatment showing post-inflammatory hyperSkin marks from previous acne lesions",
    altAfter:
      "Patient after fractional CO₂ and brightening peel at Nexus Clinic — dark marks faded and skin texture improved",
    beforeSrc: "/images/B&A-skin/B&A-pico-laser1.webp",
    afterSrc: "/images/B&A-skin/B&A-pico-laser1.webp",
    sessions: 5,
    sessionsN: "4-6",
    durationWeeks: "8-12 Weeks",
  },

  // ── Hair ─────────────────────────────────────────────
  {
    id: 4,
    category: "Hair",
    title: "FUE Hair Transplant: Natural Density Results",
    treatment: "FUE Hair Transplant + Optional PRP Support",
    altBefore:
      "Patient before FUE hair transplant showing thinning hair and visible scalp in the donor area at the back of the head",
    altAfter:
      "Patient after FUE hair transplant at Nexus Clinic Malaysia — hair smoothed and skin texture refined",
    beforeSrc: "/images/B&A-hair/B&A-hair-transplant-men.webp",
    afterSrc: "/images/B&A-hair/B&A-hair-transplant-men.webp",
    sessions: 1,
    tag: "Most Popular",
    sessionsN: "1",
    durationWeeks: "6–12 months full results",
  },
  {
    id: 5,
    category: "Hair",
    title: "Hair Loss Reduction & Density Improvement: Scalp",
    treatment: "Mesotherapy + Topical Hair Growth Therapy (Minoxidil)",
    altBefore:
      "Patient before mesotherapy showing thinning hair and visible scalp across the crown area",
    altAfter:
      "Patient after 4 sessions of mesotherapy and minoxidil at Nexus Clinic — improved hair density and reduced scalp visibility",
    beforeSrc: "/images/B&A-hair/B&A-mesotherapy-hair-loss1.webp",
    afterSrc: "/images/B&A-hair/B&A-mesotherapy-hair-loss1.webp",
    sessions: 4,
    sessionsN: "4-6",
    durationWeeks: "6–10 Weeks",
  },
  {
    id: 6,
    category: "Hair",
    title: " PRP Hair Treatment: Crown & Top Density Restoration",
    treatment: "PRP Therapy + Low-Level Laser Therapy",
    altBefore:
      "Patient before PRP hair treatment showing thinning hair and visible scalp across the crown area",
    altAfter:
      "Patient after PRP therapy and low-level laser therapy at Nexus Clinic — improved hair density and reduced scalp visibility",
    beforeSrc: "/images/B&A-hair/B&A-prp-hair-treatment1.webp",
    afterSrc: "/images/B&A-hair/B&A-prp-hair-treatment1.webp",
    sessions: 5,
    sessionsN: "4-6",
    durationWeeks: "12–16 Weeks",
    tag: "New",
  },

  // ── Regenerative ─────────────────────────────────────────
  {
    id: 7,
    category: "Regenerative",
    title: "Freckles & Pigmentation Reduction: Full Face",
    treatment: "Nano-Infusion + Advanced Skin Brightening Therapy",
    altBefore:
      "Patient before nano-infusion and glutathione drip at Nexus Clinic — dull complexion with uneven skin tone",
    altAfter:
      "Patient after nano-infusion and glutathione drip at Nexus Clinic — radiant, luminous complexion achieved",
    beforeSrc: "/images/B&A-regenerative/B&A-anti-aging-therapy1.webp",
    afterSrc: "/images/B&A-regenerative/B&A-anti-aging-therapy1.webp",
    sessions: 3,
    sessionsN: "3-5",
    durationWeeks: "4–8 Weeks",
  },
  {
    id: 8,
    category: "Regenerative",
    title: "Skin Rejuvenation & Pigmentation Reduction: Full Face",
    treatment: "Adipose-Derived Stem Cell Therapy + PRP Therapy",
    altBefore:
      "Patient before adipose-derived stem cell therapy showing fine lines and wrinkles on neck and décolletage",
    altAfter:
      " Patient after adipose-derived stem cell therapy and PRP at Nexus Clinic — rejuvenated skin with improved texture and tone on neck and décolletage",
    beforeSrc: "/images/B&A-regenerative/B&A-stem-cell-therapy1.webp",
    afterSrc: "/images/B&A-regenerative/B&A-stem-cell-therapy1.webp",
    sessions: 2,
    sessionsN: "2-4",
    durationWeeks: "8–12 Weeks",
  },

  // ── Weight Loss ────────────────────────────────────────
  {
    id: 9,
    category: "Weight Loss",
    title: " CoolSculpting Elite: Abdominal Fat Reduction",
    treatment: "CoolSculpting Elite + RF Skin Tightening",
    altBefore:
      "Patient before CoolSculpting showing excess submental fat (double chin) and skin laxity around the jawline",
    altAfter:
      "Patient after CoolSculpting Elite at Nexus Clinic — well-defined jawline and balanced chin projection",
    beforeSrc: "/images/B&A-w/B&A-coolsculpting1.webp",
    afterSrc: "/images/B&A-w/B&A-coolsculpting1.webp",
    sessions: 2,
    sessionsN: "1-3",
    durationWeeks: "8–12 Weeks results",
    tag: "Most Popular",
  },
  {
    id: 10,
    category: "Weight Loss",
    title: "Medical Weight Loss Program: Full Body Fat Reduction",
    treatment: "Appetite Control Therapy (Duromine-Based Program)",
    altBefore:
      "Patient before duromine injection showing excess abdominal fat and skin laxity around the midsection",
    altAfter:
      "Patient after duromine injection and PRP therapy at Nexus Clinic — reduced abdominal fat and improved skin tone",
    beforeSrc: "/images/B&A-w/B&A-duromine1.webp",
    afterSrc: "/images/B&A-w/B&A-duromine1.webp",
    sessions: 1,
    sessionsN: "1",
    durationWeeks: " 8–16 Weeks program",
    tag: "New",
  },
];