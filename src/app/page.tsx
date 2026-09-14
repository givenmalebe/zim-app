'use client';

import { useCallback, useState } from "react";
import Header from "@/components/store/header";
import Hero from "@/components/store/hero";
import Marquee from "@/components/store/marquee";
import BannerStrip from "@/components/store/banner-strip";
import OurStory from "@/components/store/our-story";
import FeaturesBar from "@/components/store/features-bar";
import Collection from "@/components/store/collection";
import Legends from "@/components/store/legends";
import Lookbook from "@/components/store/lookbook";
import Newsletter from "@/components/store/newsletter";
import Footer from "@/components/store/footer";
import CartDrawer, { type CartItem } from "@/components/store/cart-drawer";
import CatalogModal from "@/components/store/catalog-modal";
import type { Product } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const { toast } = useToast();

  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  const handleAdd = useCallback(
    (p: Product) => {
      setItems((prev) => {
        const found = prev.find((i) => i.id === p.id);
        if (found) {
          return prev.map((i) =>
            i.id === p.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return [...prev, { ...p, qty: 1 }];
      });
      toast({
        title: "Added to bag",
        description: `${p.name} · ${p.edition} · ${p.colorway}`,
      });
    },
    [toast]
  );

  const handleInc = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  }, []);

  const handleDec = useCallback((id: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const handleRemove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D]">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <BannerStrip />
        <OurStory />
        <FeaturesBar />
        <Collection
          onAddToCart={handleAdd}
          onViewAll={() => setCatalogOpen(true)}
        />
        <Lookbook />
        <Legends />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onInc={handleInc}
        onDec={handleDec}
        onRemove={handleRemove}
      />

      <CatalogModal
        open={catalogOpen}
        onClose={() => setCatalogOpen(false)}
        onAddToCart={handleAdd}
      />

      {/* Floating cart trigger (mobile only - desktop uses header cart icon) */}
      <button
        aria-label="Open cart"
        onClick={() => setCartOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-[#0D0D0D] w-14 h-14 rounded-full shadow-[0_12px_30px_-6px_rgba(212,175,55,0.6)] flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#0D0D0D] text-[#D4AF37] text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center font-ui">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
