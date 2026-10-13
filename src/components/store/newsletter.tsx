'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";

const perks = [
  {
    icon: Icons.Truck,
    title: "Free Shipping",
    sub: "On every order over US$80 — nationwide.",
  },
  {
    icon: Icons.RefreshCcw,
    title: "30-Day Returns",
    sub: "Heritage guaranteed, or your money back.",
  },
  {
    icon: Icons.Lock,
    title: "Secure Checkout",
    sub: "Encrypted payments. Always protected.",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <section className="relative bg-[#0D0D0D] py-20 md:py-28 overflow-hidden">
      {/* Decorative gold radial */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.7),transparent_60%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Perks row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-20">
          {perks.map((p) => (
            <div
              key={p.title}
              className="bg-[#0D0D0D] p-8 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] font-ui uppercase font-semibold mb-1">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-body">
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
              The Legacy List
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>

          <h2
            className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-5"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            JOIN THE{" "}
            <span className="text-[#D4AF37]">LEGACY</span>
          </h2>

          <p className="text-white/70 text-[15px] leading-[1.7] font-body mb-4 max-w-xl mx-auto">
            Be the first to know when the next piece of Zimbabwean sporting
            history comes back to life.
          </p>

          <p className="text-[#D4AF37]/90 text-[10px] tracking-[0.25em] font-ui uppercase mb-9">
            New drops · Archive discoveries · Player stories · Limited editions
          </p>

          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-white/25 text-white placeholder:text-white/40 px-5 py-4 text-sm font-ui tracking-[0.05em] focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button
              type="submit"
              className={`px-6 py-4 text-[11px] tracking-[0.3em] font-ui uppercase transition-all duration-300 ${
                done
                  ? "bg-[#319E49] text-white"
                  : "bg-[#D4AF37] text-[#0D0D0D] hover:bg-white"
              }`}
            >
              {done ? "Welcome to the family" : "Join the Legacy"}
            </button>
          </form>

          <p className="mt-5 text-white/40 text-[10px] tracking-[0.2em] font-ui uppercase">
            By subscribing you agree to receive heritage emails from Throwback Jersey
          </p>
        </div>
      </div>
    </section>
  );
}
