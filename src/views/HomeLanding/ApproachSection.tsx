"use client";
import { Sparkles, Activity, MessagesSquare } from "lucide-react";

interface ApproachItem {
  title: string;
  desc: string;
}

const icons = [Sparkles, Activity, MessagesSquare];

const ApproachSection = ({ t }: { t: any }) => {
  const items = (t("approach.items", { returnObjects: true }) as unknown as ApproachItem[]) || [];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="animate-fade-in-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
            {t("approach.subtitle")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-georgia text-brown mb-6">
            {t("approach.title")}{" "}
            <span className="text-wine">
              {t("approach.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-taupe leading-relaxed">
            {t("approach.description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white border border-taupe/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-wine" />
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-taupe leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
