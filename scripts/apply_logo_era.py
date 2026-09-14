#!/usr/bin/env python3
"""Apply TJ logo to the 8 era-specific jerseys."""
import os
from PIL import Image

IMG_DIR = "/home/z/my-project/public/images"
LOGO = "/home/z/my-project/public/images/logo-transparent.png"

JERSEYS = [
    ("product-jersey-1980-1.png", 0.28, 0.42),
    ("product-jersey-1985-1.png", 0.28, 0.42),
    ("product-jersey-1990-1.png", 0.30, 0.42),
    ("product-jersey-1992-1.png", 0.28, 0.42),
    ("product-jersey-2002-1.png", 0.28, 0.42),
    ("product-jersey-2004-1.png", 0.28, 0.42),
    ("product-jersey-signature.png", 0.28, 0.42),
    ("product-jersey-limited.png", 0.28, 0.42),
]

for fn, wf, yf in JERSEYS:
    path = os.path.join(IMG_DIR, fn)
    base = Image.open(path).convert("RGBA")
    w, h = base.size
    logo = Image.open(LOGO).convert("RGBA")
    logo_w = int(w * wf)
    logo_h = int(logo_w * logo.height / logo.width)
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)
    pos_x = (w - logo_w) // 2
    pos_y = int(h * yf) - (logo_h // 2)
    base.alpha_composite(logo, (pos_x, pos_y))
    final = base.convert("RGB")
    final.save(path, "PNG", optimize=True)
    print(f"✓ {fn}")

print("\nAll era-specific jerseys now have the TJ logo!")
