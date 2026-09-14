'use client';

import { Icons } from "@/lib/icons";

export default function OurStory() {
  return (
    <section id="our-story" className="relative bg-[#F5F2EC] py-20 md:py-28 overflow-hidden">
      {/* Subtle paper grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - Text */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              Our Story
            </span>
          </div>

          <h2
            className="font-display text-[#0D0D0D] text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-7"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            ROOTED IN A NATION
            <br />
            BUILT ON{" "}
            <span className="text-[#D4AF37]">PASSION</span>
          </h2>

          <div className="space-y-5 text-[#444] text-[15px] leading-[1.75] font-body max-w-[520px]">
            <p>
              Throwback Jersey was born from a simple belief — that Zimbabwe&apos;s
              sporting heritage deserves to be remembered, celebrated and worn
              with pride. Every stitch carries the echoes of dusty township
              pitches, of net-bulging finals, of generations that gave everything
              for the badge.
            </p>
            <p>
              We honour the legends, the teams, the moments, and the fans who
              kept the dream alive. Every jersey tells a story. Every story
              keeps the legacy going — stitched in green, gold, red and the
              unbreakable black of a nation that refuses to be forgotten.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 bg-[#0D0D0D] text-white px-7 py-4 text-[11px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
            >
              Our Story
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D4AF37] group-hover:text-[#0D0D0D]" strokeWidth={1.5} />
            </a>
            <div className="flex items-center gap-2 text-[#666] text-xs font-ui tracking-[0.2em] uppercase">
              <Icons.Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              Est. 2024 · Harare
            </div>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/our-story-boy.png"
              alt="Young Zimbabwean boy looking upward with Zimbabwean flag colors painted on his cheek"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating quote */}
          <div className="absolute -bottom-7 -left-3 sm:-left-7 max-w-[280px] bg-[#0D0D0D] p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
            <p
              className="font-script text-[#D4AF37] text-2xl leading-tight mb-1"
              style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
            >
              Different Generations.
            </p>
            <p
              className="font-script text-white text-2xl leading-tight"
              style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
            >
              Same Passion.
            </p>
            <div className="mt-3 h-px w-16 bg-[#D4AF37]/60" />
            <p className="mt-3 text-white/60 text-[10px] tracking-[0.25em] font-ui uppercase">
              — The Throwback Promise
            </p>
          </div>

          {/* Decorative gold line */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
