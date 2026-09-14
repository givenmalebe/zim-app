'use client';

import { Icons } from "@/lib/icons";

const legends = [
  {
    name: "Peter Ndlovu",
    role: "Warriors Captain · 1992–2010",
    quote:
      "When you put on that jersey, you carry the dreams of every kid kicking a ball on a dusty street.",
    era: "1990s — 2000s",
  },
  {
    name: "Moses Chunga",
    role: "Midfield Maestro",
    quote:
      "The badge is heavier than it looks. That weight is the love of a nation.",
    era: "1980s — 1990s",
  },
  {
    name: "Benjani Mwaruwari",
    role: "Striker · 25 Goals for Zimbabwe",
    quote:
      "We didn't play for the salary. We played so the next generation would believe.",
    era: "2000s — 2010s",
  },
];

export default function Legends() {
  return (
    <section
      id="legends"
      className="relative bg-[#F5F2EC] py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              The Legends
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2
            className="mt-5 font-display text-[#0D0D0D] text-5xl md:text-6xl lg:text-7xl leading-[0.95]"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            THOSE WHO WORE THE BADGE
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-[#555] text-[15px] leading-[1.7] font-body">
            We don&apos;t just sell jerseys — we tell the stories of the men who
            ran, bled, and lifted a nation while wearing them. Every Throwback is
            a chapter in their book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {legends.map((l, i) => (
            <article
              key={l.name}
              className="group relative bg-white border border-black/[0.06] p-8 hover:border-[#D4AF37] transition-all duration-300 lift"
            >
              {/* Big number */}
              <span
                className="absolute -top-3 right-5 font-display text-[#D4AF37]/15 text-[110px] leading-none select-none"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="w-12 h-px bg-[#D4AF37] mb-6" />
                <h3
                  className="font-display text-[#0D0D0D] text-3xl leading-tight"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {l.name}
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-[#999] font-ui uppercase mt-2">
                  {l.role}
                </p>

                <blockquote className="mt-6 text-[#444] text-[15px] leading-[1.7] font-body italic relative pl-5 border-l-2 border-[#D4AF37]/40">
                  &ldquo;{l.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center justify-between pt-5 border-t border-black/[0.06]">
                  <span className="text-[10px] tracking-[0.25em] text-[#0D0D0D]/60 font-ui uppercase">
                    {l.era}
                  </span>
                  <Icons.Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
