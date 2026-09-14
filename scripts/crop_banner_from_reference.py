#!/usr/bin/env python3
"""
Crop the second section ("THE PAST LIVES ON" banner strip) from the
user's original reference screenshot and use it as the banner image
in the website's second section.

The reference is 1214x1295. The second section spans y=0.46 to y=0.64
(approximately).
"""
from PIL import Image, ImageFilter, ImageEnhance

SRC = "/home/z/my-project/upload/WhatsApp Image 2026-09-14 at 11.33.36.jpeg"
OUT = "/home/z/my-project/public/images/banner-strip-reference.png"

img = Image.open(SRC).convert("RGBA")
w, h = img.size
print(f"Original: {w}x{h}")

# Crop the second section
# y from 0.46 to 0.66 of total height (a bit of padding to capture full section)
top = int(h * 0.46)
bottom = int(h * 0.66)
crop = img.crop((0, top, w, bottom))
cw, ch = crop.size
print(f"Crop: {cw}x{ch}")

# The crop still has the "THE PAST LIVES ON" text baked in (which is fine —
# that's the section title). But we want to remove the "Heritage Strip" eyebrow
# at the top and "Players · Ruins..." caption at the bottom (if visible).

# Apply a slight darkening to match the website's dark aesthetic
overlay = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
for y in range(ch):
    for x in range(cw):
        # Subtle darkening: 25% opacity black overlay
        overlay.putpixel((x, y), (0, 0, 0, 60))
crop.alpha_composite(overlay)

# Save
final = crop.convert("RGB")
final.save(OUT, "PNG", optimize=True)
print(f"Saved banner strip from reference -> {OUT} ({final.size})")
