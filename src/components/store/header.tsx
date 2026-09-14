'use client';

import { useEffect, useState } from "react";
import { Icons } from "@/lib/icons";
import { navItems } from "@/lib/products";

export default function Header({
  cartCount,
  onCartClick,
}: {
  cartCount: number;
  onCartClick: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-gradient-to-b from-black/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
          {/* Logo + Tagline */}
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src="/images/logo-transparent.png"
              alt="Throwback Jersey logo"
              className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-transform group-hover:scale-[1.03] origin-left"
            />
            <span className="hidden md:block h-8 w-px bg-[#D4AF37]/60" />
            <span className="hidden md:flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.3em] text-white font-ui uppercase">
                Wear the Legacy
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#D4AF37]/80 font-ui uppercase mt-0.5">
                Est. 2026
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-[11px] tracking-[0.18em] font-ui uppercase transition-all relative py-1 ${
                  active === item
                    ? "text-[#D4AF37]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 mx-auto h-px bg-[#D4AF37] transition-all ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-white/90 hover:text-[#D4AF37] transition-colors"
            >
              <Icons.Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              onClick={onCartClick}
              className="relative text-white/90 hover:text-[#D4AF37] transition-colors"
            >
              <Icons.ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#0D0D0D] text-[10px] font-bold rounded-full w-[16px] h-[16px] flex items-center justify-center font-ui">
                {cartCount}
              </span>
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white"
            >
              <Icons.Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[78%] max-w-sm bg-[#0D0D0D] border-l border-[#D4AF37]/30 p-7 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <img
                src="/images/logo-transparent.png"
                alt="Throwback Jersey logo"
                className="h-16 w-auto object-contain"
              />
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-[#D4AF37]"
              >
                <Icons.X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setMobileOpen(false);
                  }}
                  className={`text-left text-sm tracking-[0.18em] font-ui uppercase py-3 border-b border-white/5 ${
                    active === item ? "text-[#D4AF37]" : "text-white/85"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-8 text-white/40 text-xs font-ui tracking-[0.2em] uppercase">
              Wear the Legacy
            </div>
          </div>
        </div>
      )}
    </>
  );
}
