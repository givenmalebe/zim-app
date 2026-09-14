'use client';

import { lifestyleImages } from "@/lib/products";
import { Icons } from "@/lib/icons";

export default function Lookbook() {
  const [hero, ...rest] = lifestyleImages;

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
            WORN WITH PRIDE
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-[15px] leading-[1.7] font-body">
            Real people. Real moments. The TJ shield lives on every chest —
            stitched into every jersey, jacket and tee we make. This is what
            wearing the legacy looks like in the wild.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative mb-6 group overflow-hidden">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={hero.src}
              alt={hero.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {rest.map((img, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
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
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
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
          <a
            href="#collection"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] text-[11px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
          >
            Find Your Jersey
            <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
    </section>
  );
}
