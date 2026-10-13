'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import { products, eraFilters, sportFilters, type Product } from "@/lib/products";
import ProductCard from "./product-card";

type Props = {
  open: boolean;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
};

export default function CatalogModal({ open, onClose, onAddToCart }: Props) {
  const [activeEra, setActiveEra] = useState<(typeof eraFilters)[number]>("ALL");
  const [activeSport, setActiveSport] = useState<(typeof sportFilters)[number]>("ALL");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const eraOk = activeEra === "ALL" || p.era === activeEra;
    const sportOk = activeSport === "ALL" || p.sport === activeSport;
    const q = query.trim().toLowerCase();
    const queryOk =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.team.toLowerCase().includes(q) ||
      p.colorway.toLowerCase().includes(q) ||
      p.sport.toLowerCase().includes(q);
    return eraOk && sportOk && queryOk;
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-[#0D0D0D]">
      {/* Top bar */}
      <div className="border-b border-white/10 bg-[#0D0D0D]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-transparent.png"
              alt="Throwback Jersey logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.3em] text-white font-ui uppercase">
                The Archive
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-ui uppercase">
                {products.length} Archive Entries
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/15">
            <Icons.Search className="w-4 h-4 text-white/40" strokeWidth={1.5} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the archive, teams, colors..."
              className="flex-1 bg-transparent text-white text-sm placeholder:text-white/40 focus:outline-none font-ui"
            />
            {query && (
              <button
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="text-white/40 hover:text-[#D4AF37]"
              >
                <Icons.X className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            )}
          </div>

          <button
            aria-label="Close catalog"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
          >
            <Icons.X className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-white/10 bg-[#0D0D0D]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 space-y-3">
          {/* Sport filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[9px] tracking-[0.3em] text-white/40 font-ui uppercase mr-2">
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
                  className={`px-3 py-1.5 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 flex items-center gap-2 ${
                    activeSport === sport
                      ? "bg-[#319E49] text-white border-[#319E49]"
                      : "bg-transparent text-white border-white/15 hover:border-white/40"
                  }`}
                >
                  {sport}
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-sm ${
                      activeSport === sport
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Era filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[9px] tracking-[0.3em] text-white/40 font-ui uppercase mr-2">
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
                  className={`px-3 py-1.5 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 flex items-center gap-2 ${
                    activeEra === era
                      ? "bg-[#D4AF37] text-[#0D0D0D] border-[#D4AF37]"
                      : "bg-transparent text-white border-white/15 hover:border-white/40"
                  }`}
                >
                  {era}
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-sm ${
                      activeEra === era
                        ? "bg-black/20 text-[#0D0D0D]"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto bg-[#0D0D0D]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
          {/* Result count */}
          <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
            <div className="text-[10px] tracking-[0.25em] text-white/50 font-ui uppercase">
              Showing {filtered.length} of {products.length} archive entries
            </div>
            {(activeEra !== "ALL" || activeSport !== "ALL" || query) && (
              <button
                onClick={() => {
                  setActiveEra("ALL");
                  setActiveSport("ALL");
                  setQuery("");
                }}
                className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-ui uppercase hover:text-white transition-colors flex items-center gap-1"
              >
                <Icons.X className="w-3 h-3" strokeWidth={1.5} />
                Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <Icons.Search className="w-12 h-12 text-white/15 mx-auto mb-4" strokeWidth={1} />
              <p className="text-white/60 text-sm font-body max-w-md mx-auto">
                No archive entries match your filters. Try a different combination.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-[#0D0D0D]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <p className="text-white/40 text-[10px] tracking-[0.25em] font-ui uppercase">
            Throwback Jersey · Wear the Legacy
          </p>
          <p className="text-white/40 text-[10px] tracking-[0.25em] font-ui uppercase">
            Heritage archive · Jerseys documented, licences in progress
          </p>
        </div>
      </div>
    </div>
  );
}
