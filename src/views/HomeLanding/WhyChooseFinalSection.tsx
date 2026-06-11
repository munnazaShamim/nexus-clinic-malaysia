"use client";
import Link from "next/link";
import {
  Award,
  Stethoscope,
  Heart,
  Activity,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface FinalItem {
  title: string;
  desc: string;
}

const icons = [Award, Stethoscope, Heart, Activity, Sparkles, MapPin];

const WhyChooseFinalSection = ({ t }: { t: any }) => {
  const items = (t("whyChooseFinal.items", { returnObjects: true }) as unknown as FinalItem[]) || [];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="animate-fade-in-up text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
            {t("whyChooseFinal.subtitle")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-georgia text-brown">
            {t("whyChooseFinal.title")}{" "}
            <span className="text-wine">
              {t("whyChooseFinal.titleHighlight")}
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-taupe/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-wine" />
                </div>
                <div>
                  <h3 className="font-georgia text-lg text-brown mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <a
            href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/"
            className="px-6 py-3 rounded-full bg-green text-white text-sm font-medium hover:bg-green/90 transition shadow-md text-center inline-flex items-center justify-center gap-2"
          >
            Book Consultation
            <ArrowRight size={16} />
          </a>
          <Link
            href="/consultation/"
            className="px-6 py-3 rounded-full border border-wine text-wine text-sm font-medium hover:bg-wine hover:text-white transition text-center"
          >
            Speak to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFinalSection;
