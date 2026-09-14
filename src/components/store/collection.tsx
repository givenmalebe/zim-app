'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import { products, eraFilters, type Product } from "@/lib/products";

type Props = {
  onAddToCart: (p: Product) => void;
};

export default function Collection({ onAddToCart }: Props) {
  const [active, setActive] = useState<(typeof eraFilters)[number]>("ALL");

  const filtered =
    active === "ALL"
      ? products
      : products.filter((p) => p.era === active);

  return (
    <section id="collection" className="relative bg-[#FAF9F6] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
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
              Authentic Zimbabwe throwback jerseys, era by era. From the
              Independence-era cotton kits of the 1980s, through the bold 90s
              sublimations, to the technical 2000s cuts — plus our premium
              Signature and numbered Limited editions.
            </p>
          </div>
        </div>

        {/* Era filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {eraFilters.map((era) => {
            const count =
              era === "ALL"
                ? products.length
                : products.filter((p) => p.era === era).length;
            return (
              <button
                key={era}
                onClick={() => setActive(era)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 flex items-center gap-2 ${
                  active === era
                    ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                    : "bg-transparent text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#0D0D0D]"
                }`}
              >
                {era}
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-sm ${
                    active === era
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

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-14 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0D0D0D] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase hover:bg-[#0D0D0D] hover:text-white transition-all duration-300"
          >
            View All Jerseys
            <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) {
  const [added, setAdded] = useState(false);
  const handle = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  // Era badge color
  const eraColor =
    product.era === "SIGNATURE"
      ? "bg-[#0D0D0D] text-[#D4AF37]"
      : product.era === "LIMITED"
      ? "bg-[#BF211E] text-white"
      : "bg-[#0D0D0D] text-white";

  return (
    <article className="group relative bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all duration-300 lift overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-[#F5F2EC] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.edition} throwback jersey in ${product.colorway}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Era badge (top-left) */}
        <span
          className={`absolute top-3 left-3 px-3 py-1.5 text-[9px] tracking-[0.25em] font-ui uppercase font-semibold ${eraColor}`}
        >
          {product.era}
        </span>

        {/* Product badge (top-right) */}
        {product.badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#D4AF37] text-[#0D0D0D] text-[9px] tracking-[0.25em] font-ui uppercase font-semibold">
            {product.badge}
          </span>
        )}

        <button
          aria-label="Quick add"
          onClick={handle}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur text-[#0D0D0D] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0D0D0D] translate-y-2 group-hover:translate-y-0"
        >
          <Icons.Plus className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>

      {/* Info */}
      <div className="p-5 border-t border-black/[0.06]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] tracking-[0.25em] text-[#999] font-ui uppercase">
            {product.edition}
          </span>
          <div className="flex items-center gap-1 text-[#D4AF37]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icons.Star key={i} className="w-2.5 h-2.5 fill-[#D4AF37]" />
            ))}
          </div>
        </div>
        <h3 className="font-display text-[#0D0D0D] text-2xl leading-tight tracking-wide">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-[#777] font-ui tracking-[0.1em] uppercase">
          {product.colorway}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#0D0D0D] font-semibold text-lg font-ui">
            ${product.price}
            <span className="text-xs text-[#999] font-normal ml-1">USD</span>
          </span>
          <button
            onClick={handle}
            className={`text-[10px] tracking-[0.25em] font-ui uppercase px-3 py-2 transition-all ${
              added
                ? "bg-[#319E49] text-white"
                : "bg-[#0D0D0D] text-white hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
            }`}
          >
            {added ? "Added" : "Add to Bag"}
          </button>
        </div>
      </div>
    </article>
  );
}
