'use client';

import { useEffect } from "react";
import { Icons } from "@/lib/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function PageModal({ open, onClose, title, eyebrow, children }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-[#FAF9F6]">
      {/* Top bar */}
      <div className="border-b border-black/10 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-transparent.png"
              alt="Throwback Jersey logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="hidden md:flex flex-col leading-tight">
              {eyebrow && (
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
                  {eyebrow}
                </span>
              )}
              <span
                className="text-white text-2xl font-display tracking-wide"
                style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
              >
                {title}
              </span>
            </div>
          </div>
          <button
            aria-label="Close page"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] tracking-[0.3em] font-ui uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
          >
            <Icons.X className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto bg-[#FAF9F6]">{children}</div>

      {/* Footer */}
      <div className="border-t border-black/10 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <p className="text-white/40 text-[10px] tracking-[0.25em] font-ui uppercase">
            Throwback Jersey · Wear the Legacy
          </p>
          <button
            onClick={onClose}
            className="text-[#D4AF37] text-[10px] tracking-[0.25em] font-ui uppercase hover:text-white transition-colors flex items-center gap-1"
          >
            <Icons.ArrowRight className="w-3 h-3 rotate-180" strokeWidth={1.5} />
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
