'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import { products, eraFilters, sportFilters, type Product } from "@/lib/products";
import ProductCard from "./product-card";

type Props = {
  onAddToCart: (p: Product) => void;
  onViewAll: () => void;
};

export default function Collection({ onAddToCart, onViewAll }: Props) {
  const [activeEra, setActiveEra] = useState<(typeof eraFilters)[number]>("ALL");
  const [activeSport, setActiveSport] = useState<(typeof sportFilters)[number]>("ALL");

  const filtered = products.filter((p) => {
    const eraOk = activeEra === "ALL" || p.era === activeEra;
    const sportOk = activeSport === "ALL" || p.sport === activeSport;
    return eraOk && sportOk;
  });

  // On the homepage, show max 8 — rest are in the full catalog
  const homepagePreview = filtered.slice(0, 8);
  const hiddenCount = filtered.length - homepagePreview.length;

  return (
    <section id="collection" className="relative bg-[#FAF9F6] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
                The Collection
              </span>
            </div>
            <h2
              className="font-display text-[#0D0D0D] text-5xl md:text-6xl lg:text-7xl leading-[0.95]"
              style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
            >
              WEAR THE LEGACY
            </h2>
            <p className="mt-5 max-w-md text-[#555] text-[15px] leading-[1.7] font-body">
              Authentic Zimbabwe throwback jerseys across three codes — Warriors
              football, Chevrons cricket and Sables rugby. Each jersey carries
              its original team crest: the ZIFA Zimbabwe Bird, the Zimbabwe
              Cricket lion, or the Sables antelope.
            </p>
          </div>
        </div>

        {/* Sport filter chips */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] text-[#0D0D0D]/50 font-ui uppercase mr-2">
            Sport:
          </span>
          {sportFilters.map((sport) => {
            const count =
              sport === "ALL"
                ? products.length
                : products.filter((p) => p.sport === sport).length;
            return (
              <button
                key={sport}
                onClick={() => setActiveSport(sport)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 flex items-center gap-2 ${
                  activeSport === sport
                    ? "bg-[#319E49] text-white border-[#319E49]"
                    : "bg-transparent text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#0D0D0D]"
                }`}
              >
                {sport}
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-sm ${
                    activeSport === sport
                      ? "bg-white/20 text-white"
                      : "bg-[#0D0D0D]/10 text-[#0D0D0D]/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Era filter chips */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] text-[#0D0D0D]/50 font-ui uppercase mr-2">
            Era:
          </span>
          {eraFilters.map((era) => {
            const count =
              era === "ALL"
                ? products.length
                : products.filter((p) => p.era === era).length;
            return (
              <button
                key={era}
                onClick={() => setActiveEra(era)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 flex items-center gap-2 ${
                  activeEra === era
                    ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                    : "bg-transparent text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#0D0D0D]"
                }`}
              >
                {era}
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-sm ${
                    activeEra === era
                      ? "bg-white/20 text-white"
                      : "bg-[#0D0D0D]/10 text-[#0D0D0D]/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[10px] tracking-[0.25em] text-[#0D0D0D]/50 font-ui uppercase">
            Showing {homepagePreview.length} of {filtered.length} jerseys
            {hiddenCount > 0 && (
              <span className="ml-2 text-[#D4AF37]">+{hiddenCount} more in catalog</span>
            )}
          </div>
        </div>

        {/* Product grid */}
        {homepagePreview.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#999] text-sm font-body">
              No jerseys match your filters. Try a different combination.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homepagePreview.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
            ))}
          </div>
        )}

        {/* View all */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0D0D0D] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase hover:bg-[#0D0D0D] hover:text-white transition-all duration-300"
          >
            View All {products.length} Jerseys
            <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
