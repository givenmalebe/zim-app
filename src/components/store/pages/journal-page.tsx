'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";

const articles = [
  {
    id: "j1",
    title: "The Day the Warriors Marched into AFCON",
    excerpt:
      "It was 2004. Eleven years of waiting ended in Tunis. We revisit the match that brought Zimbabwe back to the continent's biggest stage — through the eyes of the fans who were there.",
    category: "Football",
    date: "12 Aug 2024",
    readTime: "8 min",
    image: "/images/feature-iconic-moments.png",
    featured: true,
  },
  {
    id: "j2",
    title: "Andy Flower's 232* — The Innings That Defied India",
    excerpt:
      "On a dusty Delhi pitch in 1995, Zimbabwe's wicketkeeper-batsman played the innings of a lifetime. We unpack the technique, the temperament, and the moment.",
    category: "Cricket",
    date: "28 Jul 2024",
    readTime: "6 min",
    image: "/images/legend-andy-flower.png",
  },
  {
    id: "j3",
    title: "Bruce Grobbelaar: From Bulawayo to Anfield",
    excerpt:
      "Before he was the Liverpool showman with the wobbly legs, he was a kid from Bulawayo with a glove and a dream. The journey that took Zimbabwean football global.",
    category: "Football",
    date: "15 Jul 2024",
    readTime: "10 min",
    image: "/images/legend-bruce-grobbelaar.png",
  },
  {
    id: "j4",
    title: "Heath Streak and the Fast Bowler's Burden",
    excerpt:
      "216 wickets. 65 Tests. A nation's bowling attack on one man's shoulders. We examine the legacy of Zimbabwe's greatest ever fast bowler.",
    category: "Cricket",
    date: "02 Jul 2024",
    readTime: "7 min",
    image: "/images/legend-heath-streak.png",
  },
  {
    id: "j5",
    title: "The Sables at the 1987 Rugby World Cup",
    excerpt:
      "Zimbabwe was the first African nation to play at a Rugby World Cup. We remember the pioneers who carried the Sables badge onto the world stage.",
    category: "Rugby",
    date: "20 Jun 2024",
    readTime: "9 min",
    image: "/images/feature-legendary-players.png",
  },
  {
    id: "j6",
    title: "Moses Chunga's 46-Goal Season — A Record That Won't Die",
    excerpt:
      "In 1986, a midfielder scored 46 goals in a single season. Almost 40 years later, no one has come close. The story of the Razorman.",
    category: "Football",
    date: "08 Jun 2024",
    readTime: "5 min",
    image: "/images/legend-moses-chunga.png",
  },
];

const categories = ["ALL", "Football", "Cricket", "Rugby"];

export default function JournalPage() {
  const [active, setActive] = useState("ALL");
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);
  const filtered =
    active === "ALL" ? rest : rest.filter((a) => a.category === active);

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            The Journal
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          STORIES FROM THE PITCH
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
          Long-form stories, oral histories, and deep dives into the moments,
          players, and kits that shaped Zimbabwean sport. New articles every
          week.
        </p>
      </div>

      {/* Featured article */}
      <article className="mb-16 group cursor-pointer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all overflow-hidden">
          <div className="aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#1A1A1A]">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 bg-[#D4AF37] text-[#0D0D0D] text-[9px] tracking-[0.25em] font-ui uppercase font-semibold">
                Featured
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#999] font-ui uppercase">
                {featured.category}
              </span>
            </div>
            <h2
              className="font-display text-[#0D0D0D] text-3xl md:text-5xl leading-tight mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
            >
              {featured.title.toUpperCase()}
            </h2>
            <p className="text-[#555] text-sm md:text-base leading-relaxed font-body mb-6">
              {featured.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#999] font-ui uppercase">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#999]" />
                <span>{featured.readTime} read</span>
              </div>
              <button className="group/btn inline-flex items-center gap-2 text-[#0D0D0D] text-[10px] tracking-[0.3em] font-ui uppercase font-semibold hover:text-[#D4AF37] transition-colors">
                Read
                <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] text-[#0D0D0D]/50 font-ui uppercase mr-2">
          Category:
        </span>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 ${
              active === c
                ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                : "bg-transparent text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#0D0D0D]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <article
            key={a.id}
            className="group cursor-pointer bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all lift overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-ui uppercase font-semibold">
                  {a.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#999]" />
                <span className="text-[10px] tracking-[0.2em] text-[#999] font-ui uppercase">
                  {a.readTime}
                </span>
              </div>
              <h3
                className="font-display text-[#0D0D0D] text-2xl leading-tight mb-3 tracking-wide"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {a.title.toUpperCase()}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed font-body mb-4 line-clamp-3">
                {a.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                <span className="text-[10px] tracking-[0.2em] text-[#999] font-ui uppercase">
                  {a.date}
                </span>
                <button className="text-[#0D0D0D] text-[10px] tracking-[0.3em] font-ui uppercase font-semibold group-hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  Read
                  <Icons.ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <section className="mt-16 bg-[#0D0D0D] p-10 md:p-14 text-center">
        <h2
          className="font-display text-white text-3xl md:text-5xl mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          NEVER MISS A STORY
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-7 max-w-md mx-auto font-body leading-relaxed">
          Get the latest from the Journal — new articles, oral histories, and
          deep dives delivered to your inbox every week.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-all"
        >
          Subscribe to the Journal
          <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </a>
      </section>
    </div>
  );
}
