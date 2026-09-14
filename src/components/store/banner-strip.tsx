'use client';

export default function BannerStrip() {
  return (
    <section className="relative w-full bg-[#0D0D0D] overflow-hidden">
      {/* Section label */}
      <div className="text-center pt-12 pb-5">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-[#D4AF37]" />
          <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Heritage Strip
          </span>
          <span className="h-px w-10 bg-[#D4AF37]" />
        </div>
      </div>

      {/* Full-width banner image from the reference screenshot */}
      <div className="relative w-full border-y border-white/10">
        <img
          src="/images/banner-strip-reference.png"
          alt="Heritage strip: vintage players, Great Zimbabwe ruins, throwback jersey close-up, and a crowd holding a sign that reads Zimbabwe Always A Nation Of Winners"
          className="block w-full h-auto object-cover"
        />
        {/* Dark gradient overlay to blend with surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-[#0D0D0D]/70 pointer-events-none" />
      </div>

      {/* Bottom caption row */}
      <div className="text-center py-6">
        <p className="text-white/40 text-[10px] tracking-[0.3em] font-ui uppercase">
          Players · Ruins · Craftsmanship · Crowds
        </p>
      </div>
    </section>
  );
}
