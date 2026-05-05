import { faceTreatmentsMetadata } from "@/src/config/faceTreatments";
import { hairTreatmentsMetadata } from "@/src/config/hairTreatments";
import { skinTreatmentsMetadata } from "@/src/config/skinTreatments";
import { regenerativeTreatmentsMetadata } from "@/src/config/regenerativeTreatments";
import { weightlossTreatmentsMetadata } from "@/src/config/weightlossTreatments";

const buildSlugMap = () => {
  const map: Record<string, string> = {};

  const addToMap = (items: { slug: string }[], category: string) => {
    items.forEach((item) => {
      map[item.slug] = `/${category}/${item.slug}`;
    });
  };

  addToMap(faceTreatmentsMetadata, "face");
  addToMap(hairTreatmentsMetadata, "hair");
  addToMap(skinTreatmentsMetadata, "skin");
  addToMap(regenerativeTreatmentsMetadata, "regenerative");
  addToMap(weightlossTreatmentsMetadata, "weight-loss");

  return map;
};

export const slugMap = buildSlugMap();