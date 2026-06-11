"use client";
import { MapPin } from "lucide-react";

const ServingAreasSection = ({ t }: { t: any }) => {
  const areas = (t("servingAreas.areas", { returnObjects: true }) as unknown as string[]) || [];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="animate-fade-in-up text-center">
          <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
            {t("servingAreas.subtitle")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-georgia text-brown mb-8">
            {t("servingAreas.title")}{" "}
            <span className="text-wine">
              {t("servingAreas.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-taupe leading-relaxed mb-6 max-w-3xl mx-auto">
            {t("servingAreas.paragraph1")}
          </p>
          <p className="text-lg text-taupe leading-relaxed mb-10 max-w-3xl mx-auto">
            {t("servingAreas.paragraph2")}
          </p>

          {/* Area Chips */}
          <ul className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {areas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-wine/15 text-sm text-brown font-medium"
              >
                <MapPin size={14} className="text-wine" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServingAreasSection;
