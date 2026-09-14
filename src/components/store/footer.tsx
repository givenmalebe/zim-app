'use client';

import { Icons } from "@/lib/icons";
import { navItems } from "@/lib/products";

const shopLinks = [
  "All Jerseys",
  "Signature Editions",
  "Limited Drops",
  "Vintage Restorations",
  "Gift Cards",
];

const supportLinks = [
  "Shipping & Returns",
  "Size Guide",
  "Track Order",
  "FAQs",
  "Contact Us",
];

const aboutLinks = [
  "Our Story",
  "Legends Project",
  "Impact",
  "Journal",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] text-white border-t border-white/10">
      {/* Top gold hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <img
              src="/images/logo-transparent.png"
              alt="Throwback Jersey logo"
              className="h-20 w-auto object-contain mb-5"
            />
            <p className="mt-1 text-white/55 text-sm leading-[1.7] font-body max-w-xs">
              Heritage jerseys stitched from Zimbabwe&apos;s proudest sporting
              moments. Wear the legacy — pass it on.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              {[Icons.Instagram, Icons.Twitter, Icons.Facebook, Icons.Youtube].map(
                (Ic, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social link"
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#0D0D0D] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <Ic className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                )
              )}
            </div>

            {/* Zimbabwe flag swatch */}
            <div className="mt-7 flex items-center gap-2">
              <span className="h-2 w-8 bg-[#319E49]" />
              <span className="h-2 w-8 bg-[#FFD100]" />
              <span className="h-2 w-8 bg-[#BF211E]" />
              <span className="h-2 w-8 bg-[#000000] border border-white/20" />
              <span className="ml-2 text-[10px] tracking-[0.3em] text-white/40 font-ui uppercase">
                ZW
              </span>
            </div>
          </div>

          {/* Nav columns */}
          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Navigate" links={navItems} />
          <FooterColumn title="Support" links={supportLinks} />
          <FooterColumn title="About" links={aboutLinks} />
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-ui tracking-[0.18em] uppercase">
            © {new Date().getFullYear()} Throwback Jersey · All Rights Reserved
          </p>
          <div className="flex items-center gap-5 text-white/40 text-[10px] tracking-[0.25em] font-ui uppercase">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Accessibility</a>
          </div>
        </div>

        {/* Big watermark */}
        <div className="mt-14 select-none pointer-events-none">
          <h3
            className="font-display text-white/[0.04] text-center text-[clamp(60px,12vw,180px)] leading-none tracking-[0.06em]"
            style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
          >
            THROWBACK JERSEY
          </h3>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-white text-[11px] tracking-[0.3em] font-ui uppercase font-semibold mb-5">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-white/55 text-sm font-body hover:text-[#D4AF37] transition-colors capitalize"
            >
              {l.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
