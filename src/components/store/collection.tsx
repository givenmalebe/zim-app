'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import { products, type Product } from "@/lib/products";

type Props = {
  onAddToCart: (p: Product) => void;
};

const filters = ["ALL", "1980s", "1990s", "2000s", "SIGNATURE", "LIMITED"];

export default function Collection({ onAddToCart }: Props) {
  const [active, setActive] = useState("ALL");

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
              Every jersey in our collection is cut, stitched and finished to
              honour the moments that defined a nation. Pick your era. Pick your
              story.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] font-ui uppercase border transition-all duration-300 ${
                  active === f
                    ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                    : "bg-transparent text-[#0D0D0D] border-[#0D0D0D]/20 hover:border-[#0D0D0D]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
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

  return (
    <article className="group relative bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all duration-300 lift overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-[#F5F2EC] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.edition} throwback jersey in ${product.colorway}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#0D0D0D] text-[#D4AF37] text-[9px] tracking-[0.25em] font-ui uppercase px-3 py-1.5">
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
