'use client';

import { Icons } from "@/lib/icons";

const discoverLinks = ["Our Story", "The Archive", "Legends", "Journal"];

const collectionLinks = ["Football", "Cricket", "Rugby", "Limited Editions"];

const legacyLinks = ["Our Impact", "Share Your Story", "Partners"];

const helpLinks = ["Shipping", "Returns", "Size Guide", "Contact"];

export default function Footer({
  onNavigate,
}: {
  onNavigate?: (label: string) => void;
}) {
  return (
    <footer className="relative bg-[#0D0D0D] text-white border-t border-white/10">
      {/* Top gold hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-2xl rounded-full" />
              <img
                src="/images/logo-transparent.png"
                alt="Throwback Jersey logo"
                className="relative h-28 md:h-32 w-auto object-contain mb-6 drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
              />
            </div>
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
          <FooterColumn title="Discover" links={discoverLinks} onNavigate={onNavigate} />
          <FooterColumn title="Collection" links={collectionLinks} onNavigate={onNavigate} />
          <FooterColumn title="The Legacy" links={legacyLinks} onNavigate={onNavigate} />
          <FooterColumn title="Help" links={helpLinks} onNavigate={onNavigate} />
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
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: string[];
  onNavigate?: (label: string) => void;
}) {
  return (
    <div>
      <h4 className="text-white text-[11px] tracking-[0.3em] font-ui uppercase font-semibold mb-5">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <button
              onClick={() => onNavigate?.(l)}
              className="text-left text-white/55 text-sm font-body hover:text-[#D4AF37] transition-colors capitalize"
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
