'use client';

const bannerImages = [
  {
    src: "/images/banner-players.png",
    alt: "Three Zimbabwean football players in striped jerseys celebrating together",
  },
  {
    src: "/images/lifestyle-two-men-brick.jpg",
    alt: "Two men wearing Throwback Jersey apparel with TJ logo on the chest, against a brick wall",
  },
  {
    src: "/images/banner-jersey.png",
    alt: "Close-up of grey throwback jersey with Zimbabwe flag trim and TJ crest",
  },
  {
    src: "/images/banner-crowd.png",
    alt: "Vintage photograph of Zimbabwean football crowd with a sign that reads Zimbabwe Always A Nation Of Winners",
  },
];

export default function BannerStrip() {
  return (
    <section className="relative w-full bg-[#0D0D0D] py-0 overflow-hidden">
      {/* Section label */}
      <div className="text-center pt-14 pb-6">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-[#D4AF37]" />
          <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Heritage Strip
          </span>
          <span className="h-px w-10 bg-[#D4AF37]" />
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-white/10">
          {bannerImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
            </div>
          ))}
        </div>

        {/* Center overlay headline */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-6">
            <h2
              className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.18em] font-display drop-shadow-[0_2px_30px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
            >
              THE PAST LIVES ON
            </h2>
            <div className="mt-3 mx-auto h-px w-32 bg-[#D4AF37]" />
            <p className="mt-4 text-white/80 text-xs sm:text-sm tracking-[0.25em] font-ui uppercase">
              Stitched into every jersey we make
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <p className="text-white/40 text-[10px] tracking-[0.3em] font-ui uppercase">
          Players · Wearers · Craftsmanship · Crowds
        </p>
      </div>
    </section>
  );
}
