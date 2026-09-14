#!/usr/bin/env python3
"""
Apply ONLY the real TJ logo to the freshly regenerated clean jerseys.
No patching needed — jerseys are now blank.
"""
import os
from PIL import Image

IMG_DIR = "/home/z/my-project/public/images"
LOGO = "/home/z/my-project/public/images/logo-transparent.png"

# (filename, logo_width_fraction, y_center_fraction)
JERSEYS = [
    ("product-jersey-grey.png",   0.30, 0.44),
    ("product-jersey-green.png",  0.30, 0.44),
    ("product-jersey-black.png",  0.30, 0.44),
    ("product-jersey-yellow.png", 0.30, 0.44),
    ("product-jersey-red.png",    0.30, 0.44),
    ("product-jersey-white.png",  0.30, 0.44),
    ("product-jersey-navy.png",   0.30, 0.44),
    ("product-jersey-maroon.png", 0.30, 0.44),
    ("banner-jersey.png",         0.32, 0.50),
    ("product-jersey-folded.png", 0.34, 0.50),
]


def apply_logo(filename: str, w_frac: float, y_frac: float) -> None:
    path = os.path.join(IMG_DIR, filename)
    base = Image.open(path).convert("RGBA")
    w, h = base.size

    logo = Image.open(LOGO).convert("RGBA")
    logo_w = int(w * w_frac)
    logo_h = int(logo_w * logo.height / logo.width)
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

    pos_x = (w - logo_w) // 2
    pos_y = int(h * y_frac) - (logo_h // 2)

    base.alpha_composite(logo, (pos_x, pos_y))
    final = base.convert("RGB")
    final.save(path, "PNG", optimize=True)
    print(f"✓ {filename}")


def main() -> None:
    for fn, wf, yf in JERSEYS:
        p = os.path.join(IMG_DIR, fn)
        if not os.path.exists(p):
            print(f"Skip (missing): {fn}")
            continue
        apply_logo(fn, wf, yf)
    print("\nDone — all jerseys now have ONLY the real TJ logo!")


if __name__ == "__main__":
    main()
