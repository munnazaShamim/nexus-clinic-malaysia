"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/src/data/doctorProfiles";

const MedicalTeamSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
                {t("medicalTeam.subtitle")}
              </span>
              <h2 className="text-3xl lg:text-5xl font-georgia text-brown">
                {t("medicalTeam.title")}{" "}
                <span className="text-wine">
                  {t("medicalTeam.titleHighlight")}
                </span>
              </h2>
            </div>
            <p className="max-w-md mt-6 lg:mt-0 text-taupe">
              {t("medicalTeam.description")}
            </p>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {doctors.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-taupe/10 flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-cream">
                <Image
                  src={doctor.photo}
                  alt={`Portrait of ${doctor.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-georgia text-xl text-brown">
                  {doctor.name}
                </h3>
                <p className="text-sm text-wine font-medium">
                  {doctor.specialisation}
                </p>
                <p className="text-sm text-taupe leading-relaxed line-clamp-3">
                  {doctor.bio}
                </p>
                <span className="flex items-center gap-2 text-sm text-wine font-medium mt-2 group-hover:gap-3 transition-all">
                  View Profile
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/doctors/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-wine text-wine text-sm font-medium hover:bg-wine hover:text-white transition shadow-sm"
          >
            {t("medicalTeam.cta")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MedicalTeamSection;
