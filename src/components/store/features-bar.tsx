'use client';

import { Icons } from "@/lib/icons";
import { features } from "@/lib/products";

const iconMap = {
  trophy: Icons.Trophy,
  people: Icons.Users,
  flag: Icons.Flag,
  heart: Icons.Heart,
} as const;

export default function FeaturesBar() {
  return (
    <section className="relative bg-[#0D0D0D] py-20 md:py-24 overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              Why We Exist
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2
            className="mt-5 text-white text-4xl md:text-5xl lg:text-6xl font-display tracking-[0.06em]"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            MORE THAN MERCHANDISE
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {features.map((f) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <div
                key={f.title}
                className="group bg-[#0D0D0D] p-8 md:p-10 text-center hover:bg-[#161616] transition-colors duration-300"
              >
                <div className="mx-auto mb-6 w-14 h-14 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0D] transition-all duration-300">
                  {Icon && <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0D0D0D] transition-colors" strokeWidth={1.5} />}
                </div>
                <h3 className="text-white text-[13px] tracking-[0.22em] font-ui uppercase font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-white/50 text-xs tracking-[0.18em] font-ui uppercase">
                  {f.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom brush stroke accent */}
        <div className="relative mt-16 flex items-center justify-center">
          <div className="brush-stroke h-2 w-72 md:w-96 rounded-full" />
          <span
            className="absolute font-script text-[#0D0D0D] text-3xl md:text-4xl mix-blend-normal"
            style={{
              fontFamily: "var(--font-pacifico), Pacifico, cursive",
              textShadow: "0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Wear the Legacy
          </span>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
    </section>
  );
}
