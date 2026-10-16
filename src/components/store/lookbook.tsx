'use client';

import { useState } from "react";
import { lifestyleImages } from "@/lib/products";
import { Icons } from "@/lib/icons";

const streetwearSamples = [
  {
    src: "/WhatsApp Image 2026-09-23 at 12.08.53.jpeg",
    alt: "Streetwear sample one",
  },
  {
    src: "/WhatsApp Image 2026-09-23 at 12.08.54.jpeg",
    alt: "Streetwear sample two",
  },
  {
    src: "/WhatsApp Image 2026-09-23 at 12.08.54 (1).jpeg",
    alt: "Streetwear sample three",
  },
  {
    src: "/WhatsApp Image 2026-09-23 at 12.08.54 (2).jpeg",
    alt: "Streetwear sample four",
  },
  {
    src: "/WhatsApp Image 2026-09-23 at 12.08.55.jpeg",
    alt: "Streetwear sample five",
  },
];

export default function Lookbook() {
  const [hero, ...rest] = lifestyleImages;
  const [streetwearOpen, setStreetwearOpen] = useState(false);

  return (
    <section
      id="lookbook"
      className="relative bg-[#0D0D0D] py-20 md:py-28 overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              Lookbook
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2
            className="mt-5 text-white text-5xl md:text-6xl lg:text-7xl font-display tracking-[0.04em] leading-[0.95]"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            WEAR THE LEGACY
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-[15px] leading-[1.7] font-body">
            From the archives to the streets, the legacy isn't trapped in the
            past — it's alive on the pitches, cricket grounds, city roads, and
            stadium match days where new memories are created.
          </p>

          {/* Lookbook categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-white/45 text-[9px] tracking-[0.25em] font-ui uppercase">
            {[
              "Young Supporters",
              "Older Supporters",
              "Families",
              "Football Pitches",
              "Cricket Grounds",
              "Match Days",
              "Casual Lifestyle",
            ].map((cat, i) => (
              <span key={cat} className="flex items-center gap-3">
                <span>{cat}</span>
                {i < 6 && <span className="w-1 h-1 rounded-full bg-[#D4AF37]/60" />}
              </span>
            ))}
          </div>
        </div>

        {/* Featured image */}
        <div className="hidden md:block relative mb-6 group overflow-hidden bg-[#0D0D0D]">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={hero.src}
              alt={hero.alt}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase block mb-1">
                  Featured
                </span>
                <h3
                  className="font-display text-white text-3xl md:text-4xl tracking-wide"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {hero.caption.toUpperCase()}
                </h3>
              </div>
              <button className="group/btn inline-flex items-center gap-2 px-5 py-3 bg-[#D4AF37] text-[#0D0D0D] text-[10px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-colors">
                Shop the Look
                <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid of lifestyle images */}
        <div className="flex justify-center gap-4 md:gap-6">
          {rest.map((img, i) => (
            <article
              key={i}
              className="group relative overflow-hidden w-full max-w-lg"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i === 0 ? "aspect-square sm:aspect-[4/5]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* TJ shield mini-mark */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm border border-[#D4AF37]/40">
                  <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase font-semibold">
                    TJ · 2026
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute top-[60%] -translate-y-1/2 left-0 right-0 p-5">
                  <h4
                    className="font-display text-white text-xl md:text-2xl leading-tight tracking-wide"
                    style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                  >
                    {img.caption.toUpperCase()}
                  </h4>
                  <div className="mt-2 h-px w-10 bg-[#D4AF37]/80" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setStreetwearOpen(true)}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] text-[11px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 cursor-pointer"
          >
            FIND YOUR STREET WEAR
            <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Streetwear gallery modal */}
      {streetwearOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setStreetwearOpen(false)}
          />
          <div className="relative bg-[#0D0D0D] border border-[#D4AF37]/30 max-w-5xl w-full max-h-[92vh] overflow-y-auto no-scrollbar shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
            <button
              aria-label="Close"
              onClick={() => setStreetwearOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0D0D0D] hover:border-[#D4AF37] transition-all"
            >
              <Icons.X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
                  Streetwear
                </span>
              </div>
              <h3
                className="text-white text-3xl md:text-4xl font-display tracking-wide mb-8"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                FIND YOUR STREET WEAR
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {streetwearSamples.map((s) => (
                  <div
                    key={s.src}
                    className="group relative aspect-[4/5] overflow-hidden bg-[#0D0D0D] border border-white/5"
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
    </section>
  );
}
