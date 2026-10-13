'use client';

import { Icons } from "@/lib/icons";

const reasons = [
  "They carry the names of players we grew up watching.",
  "The colours of teams we supported.",
  "The moments we still talk about.",
  "The memories we pass from one generation to the next.",
];

export default function WhyThrowback() {
  return (
    <section
      id="why-throwback"
      className="relative bg-[#0D4228] py-20 md:py-32 overflow-hidden"
    >
      {/* Aged paper grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left — statement */}
        <div className="text-left">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              The Manifesto
            </span>
          </div>

          <h2
            className="font-display text-white text-6xl md:text-7xl lg:text-[88px] leading-[0.9] tracking-[0.02em] mb-8"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            WHY{" "}
            <span className="text-[#FFD200]">THROWBACK?</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl leading-[1.7] font-body mb-8">
            Because some jerseys are more than clothing.
          </p>

          <div className="space-y-5 mb-9">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-5">
                <span
                  className="font-display text-[#FFD200] text-xl leading-none pt-1 w-8 shrink-0"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-body text-white/90 text-base md:text-lg leading-snug font-medium">
                  {reason}
                </h3>
              </div>
            ))}
          </div>

          <div className="mb-9 w-24 h-px bg-[#D4AF37]/60" />

          <p className="text-white/80 text-base md:text-lg leading-[1.7] font-body mb-5">
            We believe Zimbabwe&apos;s sporting heritage shouldn&apos;t simply
            live in photographs.
          </p>

          <p
            className="font-display text-[#FFD200] text-4xl md:text-5xl leading-none tracking-wide mb-10"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            IT SHOULD BE WORN.
          </p>

          <a
            href="#collection"
            className="group inline-flex items-center gap-3 bg-[#FFD200] text-[#0D4228] px-8 py-4 text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-all duration-300"
          >
            Enter the Archive
            <Icons.ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>

        {/* Right — logo plaque */}
        <div className="relative">
          <div className="relative border border-[#FFD200]/30 bg-white/70 backdrop-blur-[2px] p-10 md:p-14">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            <div className="relative flex flex-col items-center text-center">
              <img
                src="/images/logo-transparent.png"
                alt="Throwback Jersey — Zimbabwe Sporting Fanatics"
                className="w-full max-w-[320px] h-auto object-contain"
              />

              <div className="mt-8 w-16 h-px bg-[#D4AF37]/60" />

              <p
                className="mt-8 font-display text-[#0D0D0D] text-2xl md:text-3xl tracking-[0.12em]"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                ZIMBABWE SPORTING FANATICS
              </p>
              <p className="mt-2 text-[#444] text-[10px] tracking-[0.25em] font-ui uppercase">
                Throwback Jersey · Est. 2026
              </p>
            </div>
          </div>

          {/* Gold frame corners */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />

          {/* Rotated stamp */}
          <span className="absolute -top-5 -right-3 md:-right-6 rotate-6 border-2 border-[#FFD200]/80 text-[#FFD200] text-[9px] tracking-[0.3em] font-ui uppercase px-3 py-1.5 bg-[#0D4228]">
            More Than a Jersey
          </span>
        </div>
      </div>
    </section>
  );
}