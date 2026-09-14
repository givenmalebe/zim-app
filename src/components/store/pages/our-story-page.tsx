'use client';

import { Icons } from "@/lib/icons";

const timeline = [
  {
    year: "1980",
    title: "Independence",
    text: "Zimbabwe is born. A new flag, a new anthem, a new national team — the Warriors take the pitch for the first time as a free nation.",
  },
  {
    year: "1992",
    title: "AFCON Debut",
    text: "Peter Ndlovu becomes the first African to play in the English Premier League, captaining the Warriors to their first AFCON qualification.",
  },
  {
    year: "2004",
    title: "COSAFA Glory",
    text: "Zimbabwe wins the COSAFA Castle Cup for the first time, cementing their place as a Southern African football powerhouse.",
  },
  {
    year: "2019",
    title: "AFCON Return",
    text: "After 11 years away, the Warriors return to AFCON — rekindling a nation's passion for the beautiful game.",
  },
  {
    year: "2024",
    title: "Throwback Jersey is born",
    text: "Founded in Harare with a single mission: to honour the legends, the moments, and the fans who kept the dream alive.",
  },
];

const values = [
  {
    icon: Icons.Flag,
    title: "Heritage",
    text: "Every jersey we make carries the colours of Zimbabwe — green for the land, yellow for the minerals, red for the blood, black for the people.",
  },
  {
    icon: Icons.Users,
    title: "Unity",
    text: "Sport unites Zimbabweans across language, region, and tribe. We exist to amplify that unity, one jersey at a time.",
  },
  {
    icon: Icons.Heart,
    title: "Pride",
    text: "Wearing a Throwback is a declaration: I remember. I was there. I carry the legacy forward.",
  },
  {
    icon: Icons.Star,
    title: "Craft",
    text: "Each jersey is cut, stitched, and finished to honour the era it represents — from 1980s cotton to 2000s technical polyester.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Our Story
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          ROOTED IN A NATION
          <br />
          BUILT ON PASSION
        </h1>
        <p
          className="font-script text-[#D4AF37] text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
        >
          Different Generations. Same Passion.
        </p>
      </div>

      {/* Origin */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2
            className="font-display text-[#0D0D0D] text-3xl md:text-4xl mb-5 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            WHERE IT STARTED
          </h2>
          <div className="space-y-4 text-[#444] text-[15px] leading-[1.8] font-body">
            <p>
              Throwback Jersey was born from a simple belief — that Zimbabwe&apos;s
              sporting heritage deserves to be remembered, celebrated, and worn
              with pride. We honour the legends, the teams, the moments, and
              the fans who kept the dream alive.
            </p>
            <p>
              Every jersey tells a story. Every story keeps the legacy going —
              stitched in green, gold, red, and the unbreakable black of a
              nation that refuses to be forgotten.
            </p>
            <p>
              We started in 2024 in Harare, with one mission: to bring the
              unforgettable moments of Zimbabwean sport back to life. From the
              Independence-era cotton kits of the 1980s, through the bold 90s
              sublimations, to the technical 2000s cuts — we recreate the
              jerseys that defined a nation.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/images/our-story-boy.png"
              alt="Young Zimbabwean boy looking upward with Zimbabwe flag colors painted on his cheek"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 max-w-[240px] bg-[#0D0D0D] p-5 shadow-xl">
            <p
              className="font-script text-[#D4AF37] text-xl leading-tight"
              style={{ fontFamily: "var(--font-pacifico), Pacifico, cursive" }}
            >
              The next generation
              <br />
              carries it forward.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            What we stand for
          </span>
          <h2
            className="font-display text-[#0D0D0D] text-4xl md:text-5xl mt-3 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            OUR VALUES
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-black/[0.06] p-7 hover:border-[#D4AF37] transition-all lift"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-5">
                <v.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-[#0D0D0D] text-2xl mb-2 tracking-wide"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}>
                {v.title.toUpperCase()}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed font-body">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            A nation&apos;s journey
          </span>
          <h2
            className="font-display text-[#0D0D0D] text-4xl md:text-5xl mt-3 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            THE TIMELINE
          </h2>
        </div>
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={item.year} className="relative pl-16 md:pl-0">
              {/* Dot */}
              <div className="absolute left-5 md:left-[calc(50%-10px)] top-2 w-5 h-5 rounded-full bg-[#D4AF37] border-4 border-[#FAF9F6] z-10" />
              <div
                className={`md:w-1/2 md:px-12 ${
                  i % 2 === 0 ? "md:ml-0 md:text-right" : "md:ml-auto"
                }`}
              >
                <span className="font-display text-[#D4AF37] text-5xl block leading-none"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}>
                  {item.year}
                </span>
                <h3 className="font-display text-[#0D0D0D] text-2xl mt-1 tracking-wide"
                  style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}>
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-[#555] text-sm mt-2 font-body leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0D0D] p-10 md:p-14 text-center">
        <h2
          className="font-display text-white text-3xl md:text-5xl mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          JOIN THE LEGACY
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-7 max-w-md mx-auto font-body leading-relaxed">
          Every jersey you wear becomes a chapter in this story. Find yours.
        </p>
        <a
          href="#collection"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-all"
        >
          Explore the Collection
          <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </a>
      </section>
    </div>
  );
}
