'use client';

type Product = {
  src: string;
  alt: string;
  name: string;
  detail: string;
};

type Group = {
  title: string;
  products: Product[];
};

const groups: Group[] = [
  {
    title: "The Dream Team Collection",
    products: [
      {
        src: "/images/cooler/dream-team-fanatics-green.png",
        alt: "Green and cream cooler box with the Zimbabwe bird crest and gold trim, branded The Dream Team Fanatics",
        name: "The Dream Team Fanatics",
        detail: "Zimbabwe green and cream body, bird crest, five-star detail",
      },
      {
        src: "/images/cooler/zimbabwe-dream-team.png",
        alt: "Black cooler box with red and gold diagonal stripes and the gold Zimbabwe bird, branded Zimbabwe Dream Team Fanatics",
        name: "Zimbabwe Dream Team Fanatics",
        detail: "Black base, flag stripes, gold crest and lettering",
      },
    ],
  },
  {
    title: "Water Bottles",
    products: [
      {
        src: "/images/cooler/dream-team-bottle.png",
        alt: "Water bottle in gold, red and black vertical panels with a carry loop, branded Dream Team",
        name: "Dream Team Bottle",
        detail: "Gold, red and black panels, five-star branding, carry loop",
      },
    ],
  },
  {
    title: "Cricket Fanatics",
    products: [
      {
        src: "/images/cooler/zim-cricket-fanatic.png",
        alt: "Dark green cooler box with sweeping gold, red and black stripes and the ZIM cricket logo, branded Zim Cricket Fanatic",
        name: "Zim Cricket Fanatic",
        detail: "Dark green base, ZIM crest, sweeping flag stripes",
      },
    ],
  },
  {
    title: "Club Fanatics",
    products: [
      {
        src: "/images/cooler/caps-united-fanatics.png",
        alt: "Dark green cooler box with gold trim and the Caps United club crest, branded Caps United Fanatics",
        name: "Caps United Fanatics",
        detail: "Dark green base, club shield, gold detailing",
      },
      {
        src: "/images/cooler/highlanders-fc-100-years.png",
        alt: "Black and white cooler box with the circular Highlanders Football Club centenary crest reading 100 Years 1926 to 2026 Siyinqaba",
        name: "Highlanders FC — 100 Years",
        detail: "Black and white base, 1926–2026 centenary crest",
      },
    ],
  },
  {
    title: "The Collection",
    products: [
      {
        src: "/images/cooler/collection-lineup.png",
        alt: "Three coolers side by side: cream Caps United Fanatics, navy Dream Team Fanatics with trophy artwork, and black Zim Cricket Fanatic",
        name: "The Collection",
        detail: "The full cooler lineup in one look",
      },
    ],
  },
];

const LINEUP_GROUP = "The Collection";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group text-center">
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.src}
          alt={product.alt}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <h3
        className="mt-5 font-display text-[#0D0D0D] text-2xl md:text-3xl tracking-wide"
        style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
      >
        {product.name.toUpperCase()}
      </h3>
      <div className="mx-auto mt-2 h-px w-10 bg-[#D4AF37]/80" />
      <p className="mt-3 text-[#555] text-[14px] leading-[1.6] font-body">
        {product.detail}
      </p>
    </article>
  );
}

export default function FanaticsCoolerPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Intro */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Cooler Corner
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          FANATICS COOLER
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
          Built for the matchday. Every cooler carries the colours, crests and
          names of the sides we grew up watching — the same legacy we wear,
          packed to take anywhere.
        </p>
      </div>

      {/* Groups */}
      <div className="space-y-20">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
                  {group.title}
                </span>
                <span className="h-px w-8 bg-[#D4AF37]" />
              </div>
            </div>

            {group.title === LINEUP_GROUP ? (
              /* 1402x1122 - wider than square, so it spans full width. */
              <div className="max-w-4xl mx-auto">
                <img
                  src={group.products[0].src}
                  alt={group.products[0].alt}
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto">
                {group.products.map((product) => (
                  <ProductCard key={product.src} product={product} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}