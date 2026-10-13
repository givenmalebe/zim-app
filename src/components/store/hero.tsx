'use client';

import { Icons } from "@/lib/icons";

export default function Hero({ onWatchStory }: { onWatchStory: () => void }) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background image — landscape hero photo, cover on all viewports */}
      <div className="absolute inset-0">
        {/* Mobile: entire photo shown unzoomed (object-contain), so it fits like the desktop view */}
        <img
          src="/images/hero-bg.jpeg"
          alt="MORE THAN A JERSEY — Zimbabwean sporting heritage"
          className="md:hidden absolute inset-0 w-full h-full object-contain object-center"
        />
        {/* Desktop: full-bleed cover */}
        <img
          src="/images/hero-bg.jpeg"
          alt="MORE THAN A JERSEY — Zimbabwean sporting heritage"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom"
        />

        {/* Mobile: bottom-up gradient across the text area so the headline stays legible */}
        <div className="md:hidden absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent" />
        {/* Desktop: left-to-right gradient as before */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        {/* Bottom-to-top gradient for section transition (both) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        {/* Subtle top vignette for header legibility */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
      </div>

      {/* Vertical words - right side (desktop only) */}
      <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex-col items-end gap-4 z-20">
        <span
          className="font-script text-white/95 text-2xl leading-none"
          style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
        >
          Wear
        </span>
        <span
          className="font-script text-[#D4AF37] text-3xl leading-none drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)]"
          style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
        >
          the Legacy
        </span>
        <div className="flex flex-col gap-2 mt-6 border-l border-[#D4AF37]/40 pl-4">
          {["PEOPLE", "PASSION", "HERITAGE", "ZIMBABWE", "FOREVER"].map((w) => (
            <span
              key={w}
              className="text-[10px] tracking-[0.3em] text-white/70 font-ui uppercase text-right"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-[100svh] flex items-end md:items-center px-6 lg:px-10 max-w-[1440px] mx-auto pt-28 pb-12 md:pb-16">
        <div className="max-w-[640px] animate-fade-in-up w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-white/85 font-ui uppercase">
              Zimbabwean Sporting Fanatics
            </span>
          </div>

          <h1 className="font-display leading-[0.92] mb-5">
            <span
              className="block text-white text-[56px] xs:text-[64px] sm:text-[88px] lg:text-[112px]"
              style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
            >
              MORE THAN A
            </span>
            <span
              className="block text-white text-[72px] xs:text-[80px] sm:text-[110px] lg:text-[148px] -mt-2"
              style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
            >
              JERSEY
            </span>
          </h1>

          <p
            className="font-script text-white text-3xl sm:text-4xl mb-7 -ml-1"
            style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
          >
            It&apos;s <span className="underline decoration-[#D4AF37] decoration-2 underline-offset-4">Our</span> Story.
          </p>

          <p className="text-white/85 text-[15px] sm:text-base leading-[1.7] max-w-[480px] font-body mb-9">
            From the dusty pitches to the nation&apos;s biggest stages, Zimbabwean
            sport has always been about more than a game. It&apos;s about
            resilience. It&apos;s about unity. It&apos;s about a nation that never
            stops believing. Throwback Jersey brings those unforgettable moments
            back to life — so you can wear the legacy.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] text-[11px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
            >
              Explore the Collection
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <button
              onClick={onWatchStory}
              className="group inline-flex items-center gap-3 text-white text-[11px] tracking-[0.3em] font-ui uppercase hover:text-[#D4AF37] transition-colors"
            >
              <span className="w-9 h-9 rounded-full border border-white/60 group-hover:border-[#D4AF37] flex items-center justify-center transition-colors">
                <Icons.Play className="w-3 h-3 fill-current" />
              </span>
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] text-white/60 font-ui uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/80 to-transparent" />
      </div>
    </section>
  );
}
