'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import { legends } from "./legends-data";

const sportFilters = ["ALL", "Football", "Cricket", "Rugby"] as const;

export default function LegendsPage() {
  const [active, setActive] = useState<(typeof sportFilters)[number]>("ALL");

  const filtered =
    active === "ALL" ? legends : legends.filter((l) => l.sport === active.toLowerCase());

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            The Legends
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          THOSE WHO WORE THE BADGE
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
            We don&apos;t just sell jerseys — we tell the stories of the
            sportsmen who ran, bled, and lifted a nation while wearing them.
            From football pitches, cricket grounds and rugby fields, every
            Throwback is a chapter in their book.
          </p>
      </div>

      {/* Sport filter */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {sportFilters.map((sport) => {
          const count =
            sport === "ALL"
              ? legends.length
              : legends.filter((l) => l.sport === sport.toLowerCase()).length;
          return (
            <button
              key={sport}
              onClick={() => setActive(sport)}
              className={`px-5 py-2 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 flex items-center gap-2 ${
                active === sport
                  ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                  : "bg-transparent text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#0D0D0D]"
              }`}
            >
              {sport}
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-sm ${
                  active === sport
                    ? "bg-white/20 text-white"
                    : "bg-[#0D0D0D]/10 text-[#0D0D0D]/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legends grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((legend, i) => (
          <article
            key={legend.name}
            className="group relative bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all duration-300 lift overflow-hidden"
          >
            {/* Portrait image */}
            <div className="relative aspect-square overflow-hidden bg-[#1A1A1A]">
              <img
                src={legend.image}
                alt={`Portrait of ${legend.name} — ${legend.role}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />

              {/* Sport badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#D4AF37] text-[#0D0D0D] text-[9px] tracking-[0.25em] font-ui uppercase font-semibold">
                {legend.sport}
              </span>

              {/* Real photo badge */}
              {legend.realPhoto && (
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#319E49] text-white text-[8px] tracking-[0.25em] font-ui uppercase font-semibold flex items-center gap-1">
                  <Icons.Star className="w-2.5 h-2.5 fill-white" />
                  Real Photo
                </span>
              )}

              {/* Big number watermark */}
              {!legend.realPhoto && (
                <span
                  className="absolute top-2 right-3 font-display text-white/30 text-[80px] leading-none select-none"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}

              {/* Name on image */}
              <div className="absolute bottom-3 left-3 right-3">
                <h3
                  className="font-display text-white text-2xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {legend.name.toUpperCase()}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-[10px] tracking-[0.2em] text-[#999] font-ui uppercase mb-3">
                {legend.role}
              </p>
              <ul className="mt-4 space-y-1.5">
                {legend.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[11px] text-[#555] font-body leading-snug"
                  >
                    <Icons.Star className="w-2.5 h-2.5 text-[#D4AF37] fill-[#D4AF37] mt-1 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-black/[0.06]">
                <span className="text-[10px] tracking-[0.25em] text-[#0D0D0D]/60 font-ui uppercase">
                  {legend.era}
                </span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Icons.Star key={idx} className="w-2.5 h-2.5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Note */}
      <p className="mt-12 text-center text-[#999] text-[10px] tracking-[0.2em] font-ui uppercase">
        6 of 8 legend cards use real photographs from Wikimedia Commons · Career facts sourced from Wikipedia, Cricbuzz, ESPN Cricinfo, Liverpool FC, Transfermarkt &amp; Pindula
      </p>
    </div>
  );
}
