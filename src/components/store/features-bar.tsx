'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import { features } from "@/lib/products";

const iconMap = {
  trophy: Icons.Trophy,
  people: Icons.Users,
  flag: Icons.Flag,
  heart: Icons.Heart,
} as const;

type FeatureData = {
  image: string;
  era: string;
  headline: string;
  description: string;
  highlights: string[];
};

const featureData: Record<string, FeatureData> = {
  trophy: {
    image: "/images/feature-iconic-moments.png",
    era: "1980 — Present",
    headline: "Moments etched into the nation's memory",
    description:
      "From the dusty township pitches to the roar of the National Sports Stadium, Zimbabwean football has produced moments that refuse to be forgotten. Each goal, each save, each unlikely victory lives on in the hearts of those who witnessed it — and in the jerseys that witnessed it with them.",
    highlights: [
      "1980 — Independence Cup, first match as a free nation",
      "1992 — Warriors qualify for AFCON",
      "2004 — First COSAFA Castle Cup triumph",
      "2019 — AFCON return after 11 years",
    ],
  },
  people: {
    image: "/images/feature-legendary-players.png",
    era: "Legends Forever",
    headline: "The men who wore the badge before you",
    description:
      "They ran, they bled, they lifted a nation. From the unsung heroes of the township leagues to the icons who wore the captain's armband on the world stage — Throwback Jersey honours the players whose names still echo in stadium songs and family stories.",
    highlights: [
      "Peter 'Nsukuzonke' Ndlovu — Captain, 100 caps",
      "Moses Chunga — The Midfield Maestro",
      "Benjani Mwaruwari — 25 international goals",
      "Energy Murambadoro — The Wall of Gwanda",
    ],
  },
  flag: {
    image: "/images/feature-proud-nation.png",
    era: "Since 1980",
    headline: "A flag stitched into every jersey",
    description:
      "Green for the land, yellow for the minerals, red for the blood of those who fought for it, black for the heritage. Every Throwback Jersey carries the colours of Zimbabwe — not as decoration, but as a reminder of what it means to belong to a nation that never stops believing.",
    highlights: [
      "Independence: 18 April 1980",
      "National bird: The Hungwe (Zimbabwe Bird)",
      "National colours: Green, Yellow, Red, Black",
      "Motto: Unity, Freedom, Work",
    ],
  },
  heart: {
    image: "/images/feature-brighter-futures.png",
    era: "The Next Generation",
    headline: "Every jersey funds a future",
    description:
      "Football is more than a game in Zimbabwe — it's a ladder. Every Throwback Jersey purchased helps fund grassroots academies, kit donations, and mentorship programs in townships across the country. The legacy you wear today becomes the future they live tomorrow.",
    highlights: [
      "12 grassroots academies supported",
      "1,500+ kits donated to township teams",
      "8 mentor programs running nationwide",
      "0% of profits leave Zimbabwe",
    ],
  },
};

export default function FeaturesBar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
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
            <p className="mt-3 text-white/45 text-[11px] tracking-[0.25em] font-ui uppercase">
              Hover to preview · Click to explore
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {features.map((f) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              const data = featureData[f.icon];
              const isHovered = hovered === f.icon;

              return (
                <button
                  key={f.title}
                  onMouseEnter={() => setHovered(f.icon)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setOpen(f.icon)}
                  className="group relative bg-[#0D0D0D] p-8 md:p-10 text-center hover:bg-[#161616] transition-colors duration-300 cursor-pointer overflow-visible"
                >
                  <div className="mx-auto mb-6 w-14 h-14 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0D] transition-all duration-300">
                    {Icon && (
                      <Icon
                        className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0D0D0D] transition-colors"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <h3 className="text-white text-[13px] tracking-[0.22em] font-ui uppercase font-semibold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-xs tracking-[0.18em] font-ui uppercase">
                    {f.subtitle}
                  </p>

                  {/* Hover hint */}
                  <div
                    className={`mt-4 inline-flex items-center gap-1 text-[9px] tracking-[0.25em] font-ui uppercase transition-all duration-300 ${
                      isHovered ? "text-[#D4AF37] opacity-100" : "text-white/30 opacity-0"
                    }`}
                  >
                    View
                    <Icons.ChevronRight className="w-3 h-3" strokeWidth={1.5} />
                  </div>

                  {/* Hover popout preview */}
                  <div
                    className={`absolute z-30 left-1/2 -translate-x-1/2 -translate-y-4 transition-all duration-300 pointer-events-none ${
                      isHovered
                        ? "opacity-100 -translate-y-6"
                        : "opacity-0 translate-y-0"
                    }`}
                    style={{ top: "100%" }}
                  >
                    <div className="relative w-56 bg-[#1A1A1A] border border-[#D4AF37]/40 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9)] overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        {data && (
                          <img
                            src={data.image}
                            alt={`Old Zimbabwe photograph — ${f.title}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-3 text-left">
                        <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-ui uppercase block mb-1">
                          {data?.era}
                        </span>
                        <p className="text-white/85 text-[11px] leading-snug font-body line-clamp-2">
                          {data?.headline}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
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

      {/* Modal for clicked feature */}
      {open && (
        <FeatureModal
          icon={open}
          data={featureData[open]}
          feature={features.find((f) => f.icon === open)!}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}

function FeatureModal({
  icon,
  data,
  feature,
  onClose,
}: {
  icon: string;
  data: FeatureData;
  feature: { icon: string; title: string; subtitle: string };
  onClose: () => void;
}) {
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#0D0D0D] border border-[#D4AF37]/30 max-w-5xl w-full max-h-[92vh] overflow-y-auto no-scrollbar shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        {/* Close button */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0D0D0D] hover:border-[#D4AF37] transition-all"
        >
          <Icons.X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <img
            src={data.image}
            alt={`Old Zimbabwe photograph — ${feature.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-transparent" />

          {/* Icon badge */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[#D4AF37] bg-[#0D0D0D]/80 backdrop-blur flex items-center justify-center">
              {Icon && <Icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
            </div>
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase block mb-1">
                {data.era}
              </span>
              <h3
                className="text-white text-3xl md:text-5xl font-display tracking-wide"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {feature.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              {feature.subtitle}
            </span>
          </div>

          <h4
            className="text-white text-2xl md:text-4xl font-display tracking-wide mb-5 leading-tight"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            {data.headline.toUpperCase()}
          </h4>

          <p className="text-white/70 text-[15px] leading-[1.8] font-body max-w-3xl mb-8">
            {data.description}
          </p>

          {/* Highlights list */}
          <div className="border-t border-white/10 pt-6">
            <h5 className="text-[11px] tracking-[0.3em] text-white/50 font-ui uppercase mb-4">
              Highlights
            </h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/[0.06] transition-all"
                >
                  <span className="font-display text-[#D4AF37]/60 text-2xl leading-none w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/80 text-sm font-body leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/40 text-xs font-ui tracking-[0.2em] uppercase">
              <Icons.Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              Throwback Jersey · Heritage Archive
            </div>
            <a
              href="#collection"
              onClick={onClose}
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#D4AF37] text-[#0D0D0D] text-[10px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-colors"
            >
              Shop the Legacy
              <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
