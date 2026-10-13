'use client';

import { Fragment } from "react";
import { Icons } from "@/lib/icons";

export type HeritageStep = string;

type Props = {
  id: string;
  number: string;
  headline: React.ReactNode;
  subline: string;
  body: string[];
  image: string;
  imageAlt: string;
  placecard: string;
  placecardNote: string;
  ctaLabel: string;
  ctaHref: string;
  tag?: string;
  steps?: HeritageStep[];
  kicker?: string;
};

export default function HeritageFeature({
  id,
  number,
  headline,
  subline,
  body,
  image,
  imageAlt,
  placecard,
  placecardNote,
  ctaLabel,
  ctaHref,
  tag,
  steps,
  kicker = "Story first. Product second.",
}: Props) {
  return (
    <section
      id={id}
      className="relative w-full bg-[#0D0D0D] py-24 md:py-36 overflow-hidden"
    >
      {/* Gold dust background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.5)_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left — editorial copy */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              The Editorial &middot; {number}
            </span>
          </div>

          <h2
            className="font-display text-white text-6xl md:text-7xl lg:text-[82px] leading-[0.9] tracking-wide mb-6"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            {headline}
          </h2>

          <p
            className="font-script text-[#D4AF37] text-xl md:text-2xl leading-tight mb-8 max-w-md"
            style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
          >
            {subline}
          </p>

          <div className="space-y-5 text-white/70 text-[15px] leading-[1.8] font-body max-w-xl">
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-8 text-[10px] tracking-[0.3em] text-white/40 font-ui uppercase">
            {kicker}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-3 bg-[#D4AF37] text-[#0D0D0D] px-7 py-4 text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-all duration-300"
            >
              {ctaLabel}
              <Icons.ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>

            {tag && (
              <span className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-white/50 font-ui uppercase border border-white/15 px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                {tag}
              </span>
            )}
          </div>
        </div>

        {/* Right — the object */}
        <div className="relative">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#1A1A1A]">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

            {/* Museum-style caption bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[9px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase mb-1">
                  Museum Reference &middot; {number}
                </p>
                <p
                  className="font-display text-white text-2xl md:text-3xl tracking-wide"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {placecard}
                </p>
              </div>
              <p className="text-white/60 text-[9px] tracking-[0.25em] font-ui uppercase text-right leading-tight">
                {placecardNote}
              </p>
            </div>
          </div>

          {/* Gold frame corners */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />
        </div>
      </div>

      {/* Progression rail */}
      {steps && steps.length > 0 && (
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 mt-16">
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-6">
              {steps.map((step, i) => (
                <Fragment key={step}>
                  <div className="flex items-center gap-3 px-5 py-3.5 border border-[#D4AF37]/30 bg-white/[0.02]">
                    <span
                      className="font-display text-[#D4AF37] text-xl leading-none"
                      style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/85 text-[10px] tracking-[0.25em] font-ui uppercase">
                      {step}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <Icons.ChevronRight
                      className="w-4 h-4 text-[#D4AF37]/60 shrink-0"
                      strokeWidth={1.5}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}