'use client';

import { Icons } from "@/lib/icons";

const stats = [
  { value: "12", label: "Grassroots Academies Supported" },
  { value: "1,500+", label: "Kits Donated to Township Teams" },
  { value: "8", label: "Mentor Programs Running Nationwide" },
  { value: "0%", label: "of Profits That Leave Zimbabwe" },
];

const programs = [
  {
    image: "/images/feature-brighter-futures.png",
    title: "Highfield Academy",
    location: "Harare",
    text: "A free Saturday academy for 120 boys and girls aged 8–14, run by former Warriors coaches. Each player receives a Throwback jersey, boots, and a meal every session.",
    metric: "120 kids · Every Saturday",
  },
  {
    image: "/images/lifestyle-boys-pitch.jpg",
    title: "Mpopoma Pitch Project",
    location: "Bulawayo",
    text: "We resurfaced two township pitches and donated 300 complete kits to the Mpopoma Junior League. The league now runs 16 teams across U12, U14, and U16.",
    metric: "300 kits · 16 teams · 2 pitches",
  },
  {
    image: "/images/feature-legendary-players.png",
    title: "Legends Mentorship",
    location: "Nationwide",
    text: "Past Warriors, Chevrons, and Sables players mentor 60 young athletes each year — covering sport, education, mental health, and life after the whistle.",
    metric: "60 mentees · 12 legends",
  },
  {
    image: "/images/feature-proud-nation.png",
    title: "Rural Kit Drive",
    location: "Mashonaland & Matabeleland",
    text: "Twice a year, our team drives to rural schools across Zimbabwe to deliver kits, balls, and coaching clinics. Every school we visit joins the Throwback family.",
    metric: "47 schools visited in 2024",
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
          EVERY JERSEY FUNDS A FUTURE
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
          Football is more than a game in Zimbabwe — it&apos;s a ladder. Every
          Throwback Jersey purchased helps fund grassroots academies, kit
          donations, and mentorship programs in townships across the country.
          The legacy you wear today becomes the future they live tomorrow.
        </p>
      </div>

      {/* Stats */}
      <section className="mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-8 md:p-10 text-center">
              <div
                className="font-display text-[#D4AF37] text-5xl md:text-6xl leading-none mb-2"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-[#0D0D0D] text-[10px] tracking-[0.25em] font-ui uppercase font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

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
            YOUR PURCHASE, YOUR IMPACT
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "You Buy a Jersey",
              text: "Every Throwback Jersey purchased contributes directly to our grassroots programs — no middlemen, no admin overhead.",
            },
            {
              step: "02",
              title: "We Fund Programs",
              text: "100% of profits stay in Zimbabwe, funding academies, kit drives, and mentorship for the next generation of Zimbabwean athletes.",
            },
            {
              step: "03",
              title: "They Wear the Legacy",
              text: "Young players receive kits, coaching, and mentorship — carrying the same badge their heroes wore on the world stage.",
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
          HELP US DO MORE
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-7 max-w-md mx-auto font-body leading-relaxed">
          Donate directly to our grassroots programs, or sponsor a young
          Zimbabwean athlete&apos;s season.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#D4AF37] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-all justify-center"
          >
            Donate Now
            <Icons.Heart className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-[#D4AF37] text-[#D4AF37] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all justify-center"
          >
            Sponsor an Athlete
            <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}
