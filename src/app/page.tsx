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
import PageModal from "@/components/store/page-modal";
import OurStoryPage from "@/components/store/pages/our-story-page";
import ImpactPage from "@/components/store/pages/impact-page";
import JournalPage from "@/components/store/pages/journal-page";
import ContactPage from "@/components/store/pages/contact-page";
import LegendsPage from "@/components/store/pages/legends-page";
import type { Product } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";

type PageKey = "OUR STORY" | "COLLECTIONS" | "LEGENDS" | "IMPACT" | "JOURNAL" | "CONTACT" | null;

const pageMeta: Record<Exclude<PageKey, null>, { eyebrow: string; title: string }> = {
  "OUR STORY": { eyebrow: "About the brand", title: "Our Story" },
  "COLLECTIONS": { eyebrow: "Full catalog", title: "All Jerseys" },
  "LEGENDS": { eyebrow: "Hall of fame", title: "The Legends" },
  "IMPACT": { eyebrow: "Grassroots & community", title: "Our Impact" },
  "JOURNAL": { eyebrow: "Stories from the pitch", title: "The Journal" },
  "CONTACT": { eyebrow: "Get in touch", title: "Contact Us" },
};

export default function Home() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState<PageKey>(null);
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

  const handleNav = useCallback((item: string) => {
    if (item === "COLLECTIONS") {
      setCatalogOpen(true);
    } else {
      setPageOpen(item as PageKey);
    }
  }, []);

  // Render the appropriate page content inside the page modal
  const renderPage = () => {
    if (!pageOpen) return null;
    switch (pageOpen) {
      case "OUR STORY":
        return <OurStoryPage />;
      case "LEGENDS":
        return <LegendsPage />;
      case "IMPACT":
        return <ImpactPage />;
      case "JOURNAL":
        return <JournalPage />;
      case "CONTACT":
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D]">
      <Header
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onNavClick={handleNav}
      />

      <main className="flex-1">
        <Hero onWatchStory={() => setPageOpen("OUR STORY")} />
        <Marquee />
        <BannerStrip />
        <OurStory onOpenStory={() => setPageOpen("OUR STORY")} />
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

      {/* Page modal for nav items (Our Story, Legends, Impact, Journal, Contact) */}
      <PageModal
        open={pageOpen !== null && pageOpen !== "COLLECTIONS"}
        onClose={() => setPageOpen(null)}
        eyebrow={pageOpen && pageOpen !== "COLLECTIONS" ? pageMeta[pageOpen].eyebrow : ""}
        title={pageOpen && pageOpen !== "COLLECTIONS" ? pageMeta[pageOpen].title : ""}
      >
        {renderPage()}
      </PageModal>

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
