'use client';

const words = [
  "WEAR THE LEGACY",
  "ZIMBABWE FOREVER",
  "STITCHED WITH PRIDE",
  "FROM DUSTY PITCHES",
  "TO NATIONAL GLORY",
  "RESILIENCE · UNITY · PRIDE",
];

export default function Marquee() {
  return (
    <div className="relative bg-[#D4AF37] py-3 overflow-hidden border-y border-[#0D0D0D]/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[#0D0D0D] text-[11px] tracking-[0.3em] font-ui uppercase font-semibold mx-6"
          >
            {w}
            <span className="ml-12 inline-block w-1.5 h-1.5 rounded-full bg-[#0D0D0D]/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
