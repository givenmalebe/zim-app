'use client';

import { Icons } from "@/lib/icons";

const programs = [
  {
    image: "/images/feature-brighter-futures.png",
    title: "Soccer Academy",
    location: "Highfield, Harare",
    text: "A free Saturday academy for 120 boys and girls aged 8–14, run by former Warriors coaches. Each player receives a Throwback jersey, boots, and a meal every session.",
    metric: "120 kids · Every Saturday",
  },
  {
    image: "/images/academy-cricket.svg",
    title: "Cricket Academy",
    location: "Highfield, Harare",
    text: "An open-access academy for young cricketers aged 10–17, coached by former Chevrons players. Training, kit, and match-day mentorship are provided at no cost.",
    metric: "100 kids · Weekly nets",
  },
  {
    image: "/images/academy-rugby.svg",
    title: "Rugby Academy",
    location: "Bulawayo",
    text: "A structured pathway for aspiring Sables, focused on schools rugby in Bulawayo and Matabeleland — boots, S&C sessions, and elite coaching for every player who joins.",
    metric: "80 kids · 2 provinces",
  },
];

export default function ImpactPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Our Impact
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          EVERY JERSEY HELPS BUILD WHAT COMES NEXT
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
          We&apos;re building the Throwback Legacy Fund to turn every jersey into
          grassroots academies, kit donations, and mentorship for the next
          generation. The model is being finalised &mdash; and when it launches,
          we&apos;ll publish exactly how much goes where, and who receives it.
        </p>
      </div>

      {/* Programs */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            On the ground
          </span>
          <h2
            className="font-display text-[#0D0D0D] text-4xl md:text-5xl mt-3 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            OUR PROGRAMS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <article
              key={p.title}
              className="bg-white border border-black/[0.06] overflow-hidden hover:border-[#D4AF37] transition-all lift"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase font-semibold">
                    {p.location}
                  </span>
                </div>
                <h3
                  className="font-display text-[#0D0D0D] text-3xl mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {p.title.toUpperCase()}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed font-body mb-4">{p.text}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-black/[0.06]">
                  <Icons.Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-[10px] tracking-[0.2em] text-[#0D0D0D]/70 font-ui uppercase">
                    {p.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            How it works
          </span>
          <h2
            className="font-display text-[#0D0D0D] text-4xl md:text-5xl mt-3 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            THE THROWBACK LEGACY FUND
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "You Buy a Jersey",
              text: "Every Throwback Jersey purchased contributes directly to the Legacy Fund — no middlemen, no admin overhead. Details are being finalised.",
            },
            {
              step: "02",
              title: "The Fund Gets Built",
              text: "The Throwback Legacy Fund is being finalised now, and we'll publish exactly how much goes where, and who receives it — before a single jersey ships.",
            },
            {
              step: "03",
              title: "They Build the Legacy",
              text: "Funds will support academies, kit drives, and mentorship for the next generation — carrying the same badge their heroes wore on the world stage.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-white border border-black/[0.06] p-8 hover:border-[#D4AF37] transition-all lift relative overflow-hidden"
            >
              <span
                className="absolute -top-3 right-4 font-display text-[#D4AF37]/15 text-[110px] leading-none select-none"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {s.step}
              </span>
              <div className="relative">
                <h3
                  className="font-display text-[#0D0D0D] text-2xl mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
                >
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed font-body">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-[#0D0D0D] p-10 md:p-14 text-center">
        <h2
          className="font-display text-white text-3xl md:text-5xl mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          THE LEGACY FUND IS COMING
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-7 max-w-md mx-auto font-body leading-relaxed">
          We&apos;re finalising the Throwback Legacy Fund now. When it
          launches, every detail — how much, where it goes, who receives it
          — will be published on this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#D4AF37] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-all justify-center"
          >
            Contact Us
            <Icons.ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}
