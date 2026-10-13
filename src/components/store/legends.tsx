'use client';

import { Icons } from "@/lib/icons";
import { legends, type Legend } from "./pages/legends-data";

export type { Legend };

export default function Legends() {
  const footballers = legends.filter((l) => l.sport === "football");
  const cricketers = legends.filter((l) => l.sport === "cricket");
  const rugbyPlayers = legends.filter((l) => l.sport === "rugby");
  // Running index across all sports so numbers stay unique (01–08)
  let runningIndex = 0;
  const footballStart = runningIndex;
  runningIndex += footballers.length;
  const cricketStart = runningIndex;
  runningIndex += cricketers.length;
  const rugbyStart = runningIndex;

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
        {/* Section header */}
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
            We don&apos;t just sell jerseys — we tell the stories of the
            sportsmen who ran, bled, and lifted a nation while wearing them.
            From football pitches, cricket grounds and rugby fields, every
            Throwback is a chapter in their book.
          </p>
        </div>

        {/* Football legends */}
        <div className="mb-12">
          <SportHeader
            label="Football"
            sub="The Beautiful Game · The Warriors"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {footballers.map((l, i) => (
              <LegendCard key={l.name} legend={l} index={footballStart + i} />
            ))}
          </div>
        </div>

        {/* Cricket legends */}
        <div className="mb-12">
          <SportHeader label="Cricket" sub="The Chevrons · A Cricketing Nation" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cricketers.map((l, i) => (
              <LegendCard key={l.name} legend={l} index={cricketStart + i} />
            ))}
          </div>
        </div>

        {/* Rugby legends */}
        <div>
          <SportHeader label="Rugby" sub="The Sables · Born to Scrummage" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rugbyPlayers.map((l, i) => (
              <LegendCard key={l.name} legend={l} index={rugbyStart + i} />
            ))}
          </div>
        </div>

        {/* Note about photos */}
        <p className="mt-12 text-center text-[#999] text-[10px] tracking-[0.2em] font-ui uppercase">
          8 of 10 legend cards use real photographs · Peter Ndlovu &amp; Moses Chunga use AI-generated artistic representations (no freely-licensed photos available) · Career facts sourced from Wikipedia, Cricbuzz, ESPN Cricinfo, Liverpool FC, Transfermarkt &amp; Pindula
        </p>
      </div>
    </section>
  );
}

function SportHeader({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#0D0D0D]/15">
      <div className="flex items-center gap-4">
        <span
          className="font-display text-[#0D0D0D] text-3xl md:text-4xl tracking-wide"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          {label.toUpperCase()}
        </span>
        <span className="hidden sm:inline text-[#666] text-[11px] tracking-[0.25em] font-ui uppercase">
          {sub}
        </span>
      </div>
      <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase font-semibold">
        Legends
      </span>
    </div>
  );
}

function LegendCard({ legend, index }: { legend: Legend; index: number }) {
  return (
    <article className="group relative bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all duration-300 lift overflow-hidden">
      {/* Portrait image */}
      <div className="relative aspect-square overflow-hidden bg-[#1A1A1A]">
        <img
          src={legend.image}
          alt={`Portrait of ${legend.name} — ${legend.role}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={legend.imagePosition ? { objectPosition: legend.imagePosition } : undefined}
        />
        {/* Subtle dark overlay at bottom for portrait legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />

        {/* Sport badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#D4AF37] text-[#0D0D0D] text-[9px] tracking-[0.25em] font-ui uppercase font-semibold">
          {legend.sport}
        </span>

        {/* Real photo badge (when applicable) */}
        {legend.realPhoto && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#319E49] text-white text-[8px] tracking-[0.25em] font-ui uppercase font-semibold flex items-center gap-1">
            <Icons.Star className="w-2.5 h-2.5 fill-white" />
            Real Photo
          </span>
        )}

        {/* Big number watermark (hidden when realPhoto to avoid overlap) */}
        {!legend.realPhoto && (
          <span
            className="absolute top-2 right-3 font-display text-white/30 text-[80px] leading-none select-none"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")}
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

        {/* Career highlights list */}
        <ul className="mt-4 space-y-1.5">
          {legend.highlights.map((h, i) => (
            <li
              key={i}
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
            {Array.from({ length: 5 }).map((_, i) => (
              <Icons.Star key={i} className="w-2.5 h-2.5 text-[#D4AF37] fill-[#D4AF37]" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
