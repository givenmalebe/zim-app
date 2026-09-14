'use client';

import { useState } from "react";
import { Icons } from "@/lib/icons";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  onAdd: (p: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  const [added, setAdded] = useState(false);
  const handle = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  // Sport badge color
  const sportColor =
    product.sport === "Football"
      ? "bg-[#319E49] text-white"
      : product.sport === "Cricket"
      ? "bg-[#BF211E] text-white"
      : "bg-[#0D0D0D] text-[#D4AF37]";

  // Era badge color
  const eraColor =
    product.era === "SIGNATURE"
      ? "bg-[#0D0D0D] text-[#D4AF37]"
      : product.era === "LIMITED"
      ? "bg-[#D4AF37] text-[#0D0D0D]"
      : "bg-white/90 text-[#0D0D0D]";

  return (
    <article className="group relative bg-white border border-black/[0.06] hover:border-[#D4AF37] transition-all duration-300 lift overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-[#F5F2EC] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.edition} ${product.sport} jersey in ${product.colorway} with ${product.team} crest`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Sport badge (top-left) */}
        <span
          className={`absolute top-3 left-3 px-3 py-1.5 text-[9px] tracking-[0.25em] font-ui uppercase font-semibold ${sportColor}`}
        >
          {product.sport}
        </span>

        {/* Era badge (top-right) */}
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-[9px] tracking-[0.25em] font-ui uppercase font-semibold ${eraColor}`}
        >
          {product.era}
        </span>

        {/* Product badge (signature/limited) */}
        {product.badge && (
          <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#0D0D0D]/80 backdrop-blur text-[#D4AF37] text-[9px] tracking-[0.25em] font-ui uppercase font-semibold border border-[#D4AF37]/40">
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
        <p className="mt-1 text-[10px] text-[#319E49] font-ui tracking-[0.2em] uppercase font-semibold">
          {product.team}
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
