'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";

const contactInfo = [
  {
    icon: Icons.Heart,
    label: "Customer Care",
    value: "info@throwbackjersey.co.zw",
    sub: "We reply within 24 hours",
  },
  {
    icon: Icons.Flag,
    label: "Visit Us",
    value: "Store location to be updated",
    sub: "Mon–Fri, 9am–5pm CAT",
  },
  {
    icon: Icons.Star,
    label: "Call Us",
    value: "+263 77 941 2515",
    sub: "Mon–Fri, 9am–5pm CAT",
  },
];

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Within Zimbabwe: 2–4 business days. SADC region: 5–10 business days. Rest of world: 10–21 business days. All orders ship from Harare.",
  },
  {
    q: "What sizes are available?",
    a: "All jerseys come in sizes S to XXL. Each product page has a detailed size guide with chest, length, and sleeve measurements in centimetres.",
  },
  {
    q: "Are the jerseys authentic replicas?",
    a: "Each jersey is a Throwback Jersey recreation of an authentic Zimbabwe national team kit. Releases happen once licensing is in place — every entry in the Archive shows its current licensing status.",
  },
  {
    q: "What is your return policy?",
    a: "30-day returns on all unworn jerseys in original packaging. Heritage guaranteed, or your money back. Return shipping is free within Zimbabwe.",
  },
  {
    q: "How does my purchase help grassroots sport?",
    a: "Every jersey helps build the Throwback Legacy Fund, which will fund grassroots academies, kit donations, and mentorship programs across Zimbabwe. We'll publish exactly how much goes where, and who receives it, before a single jersey ships.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3500);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Contact Us
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          SAY HELLO
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
          Questions about a jersey? Want to partner with our grassroots
          programs? Press enquiry? Drop us a line — we read every message.
        </p>
      </div>

      {/* Contact info cards */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((c) => (
            <div
              key={c.label}
              className="bg-white border border-black/[0.06] p-8 text-center hover:border-[#D4AF37] transition-all lift"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mx-auto mb-5">
                <c.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[10px] tracking-[0.3em] text-[#999] font-ui uppercase mb-2">
                {c.label}
              </h3>
              <p className="text-[#0D0D0D] text-base font-ui font-semibold mb-1">{c.value}</p>
              <p className="text-[#777] text-xs font-body">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + FAQ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact form */}
        <section>
          <h2
            className="font-display text-[#0D0D0D] text-3xl md:text-4xl mb-6 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            SEND US A MESSAGE
          </h2>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#0D0D0D]/60 font-ui uppercase mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-black/15 text-[#0D0D0D] placeholder:text-[#999] text-sm font-ui focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#0D0D0D]/60 font-ui uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-black/15 text-[#0D0D0D] placeholder:text-[#999] text-sm font-ui focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] text-[#0D0D0D]/60 font-ui uppercase mb-2">
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-white border border-black/15 text-[#0D0D0D] placeholder:text-[#999] text-sm font-ui focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] text-[#0D0D0D]/60 font-ui uppercase mb-2">
                Message *
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 bg-white border border-black/15 text-[#0D0D0D] placeholder:text-[#999] text-sm font-ui focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className={`w-full py-4 text-[11px] tracking-[0.3em] font-ui uppercase font-semibold transition-all flex items-center justify-center gap-3 ${
                sent
                  ? "bg-[#319E49] text-white"
                  : "bg-[#0D0D0D] text-white hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
              }`}
            >
              {sent ? (
                <>
                  <Icons.Heart className="w-4 h-4" strokeWidth={1.5} />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <Icons.ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>
        </section>

        {/* FAQ */}
        <section>
          <h2
            className="font-display text-[#0D0D0D] text-3xl md:text-4xl mb-6 tracking-wide"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            FREQUENTLY ASKED
          </h2>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-black/[0.06] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/50 transition-colors"
                >
                  <span className="text-[#0D0D0D] text-sm font-ui font-semibold pr-4">
                    {f.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    {openFaq === i ? (
                      <Icons.Minus className="w-3 h-3" strokeWidth={2} />
                    ) : (
                      <Icons.Plus className="w-3 h-3" strokeWidth={2} />
                    )}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-[#555] text-sm leading-relaxed font-body">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-8 p-6 bg-[#0D0D0D]">
            <h3 className="text-white text-[11px] tracking-[0.3em] font-ui uppercase font-semibold mb-4">
              Follow the Legacy
            </h3>
            <div className="flex items-center gap-3">
              {[Icons.Instagram, Icons.Twitter, Icons.Facebook, Icons.Youtube].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#0D0D0D] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all"
                >
                  <Ic className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
