'use client';

import { Icons } from "@/lib/icons";
import type { Product } from "@/lib/products";

export type CartItem = Product & { qty: number };

type Props = {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CartDrawer({
  open,
  onClose,
  items,
  onInc,
  onDec,
  onRemove,
}: Props) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 80 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
        <aside
          className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#0D0D0D] border-l border-[#D4AF37]/30 flex flex-col transition-transform duration-400 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
                Your Bag
              </span>
              <h3
                className="font-display text-white text-2xl mt-1"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {items.length === 0
                  ? "EMPTY"
                  : `${items.reduce((s, i) => s + i.qty, 0)} ITEM${
                      items.reduce((s, i) => s + i.qty, 0) > 1 ? "S" : ""
                    }`}
              </h3>
            </div>
            <button
              aria-label="Close cart"
              onClick={onClose}
              className="text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              <Icons.X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-4">
                <Icons.ShoppingBag
                  className="w-12 h-12 text-white/15"
                  strokeWidth={1}
                />
                <p className="text-white/60 text-sm font-body max-w-[220px]">
                  Your bag is empty. Time to find your story.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
                >
                  Browse Collection
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-white/5">
                {items.map((it) => (
                  <li key={it.id} className="p-5 flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F2EC] overflow-hidden shrink-0">
                      <img
                        src={it.image}
                        alt={it.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="font-display text-white text-lg leading-tight truncate">
                            {it.name}
                          </h4>
                          <p className="text-[10px] tracking-[0.2em] text-white/40 font-ui uppercase mt-0.5">
                            {it.edition} · {it.colorway}
                          </p>
                        </div>
                        <button
                          aria-label="Remove"
                          onClick={() => onRemove(it.id)}
                          className="text-white/40 hover:text-[#D4AF37] transition-colors"
                        >
                          <Icons.X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-white/15">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => onDec(it.id)}
                            className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-[#D4AF37] transition-colors"
                          >
                            <Icons.Minus className="w-3 h-3" strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-white text-xs font-ui">
                            {it.qty}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => onInc(it.id)}
                            className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-[#D4AF37] transition-colors"
                          >
                            <Icons.Plus className="w-3 h-3" strokeWidth={2} />
                          </button>
                        </div>
                        <span className="text-[#D4AF37] font-ui font-semibold text-sm">
                          ${(it.price * it.qty).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/10 p-6 space-y-3">
              <div className="flex items-center justify-between text-white/60 text-xs font-ui tracking-[0.1em]">
                <span>SUBTOTAL</span>
                <span>${subtotal.toFixed(0)} USD</span>
              </div>
              <div className="flex items-center justify-between text-white/60 text-xs font-ui tracking-[0.1em]">
                <span>SHIPPING</span>
                <span>{shipping === 0 ? "Free" : `$${shipping} USD`}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between text-white text-base font-ui font-semibold">
                <span className="tracking-[0.15em]">TOTAL</span>
                <span className="text-[#D4AF37]">${total.toFixed(0)} USD</span>
              </div>
              <button className="mt-3 w-full py-4 bg-[#D4AF37] text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold hover:bg-white transition-colors flex items-center justify-center gap-3">
                Checkout
                <Icons.ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <p className="text-center text-white/30 text-[10px] tracking-[0.2em] font-ui uppercase">
                Secure encrypted checkout
              </p>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
