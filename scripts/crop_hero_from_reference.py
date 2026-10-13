#!/usr/bin/env python3
"""
Extract the clean photo portion from the reference screenshot.
The reference has text on the left (headline/body) and right (vertical text).
The actual photo (fan + flag) is in the center-right area.

Strategy: Crop the center-right portion of the hero section,
then blur/cover any remaining text fragments.
"""
from PIL import Image, ImageFilter, ImageEnhance
import os

SRC = "/home/z/my-project/upload/WhatsApp Image 2026-09-14 at 11.33.36.jpeg"
OUT_FULL = "/home/z/my-project/public/images/hero-fan.png"
OUT_RIGHT = "/home/z/my-project/public/images/hero-fan-right.png"

img = Image.open(SRC)
w, h = img.size
print(f"Original: {w}x{h}")

# 1. Full hero crop (top 50%) — includes text but we'll overlay dark gradient
hero_full = img.crop((0, 0, w, int(h * 0.50)))
# Resize to wider aspect ratio for hero use (stretch horizontally is fine since we use object-cover)
hero_full.save(OUT_FULL, "PNG", optimize=True)
print(f"Full hero: {hero_full.size} -> {OUT_FULL}")

# 2. Right-side crop — just the fan + flag, minimal text
# Crop from 40% to 95% horizontally, top 5% to 48% vertically
# This captures the fan silhouette and flag without most of the text
right_crop = img.crop((
    int(w * 0.35),  # left: skip left-side headline text
    int(h * 0.02),  # top: just below nav
    int(w * 0.98),  # right: skip far-right vertical text edge
    int(h * 0.48),  # bottom: above section transition
))
right_crop.save(OUT_RIGHT, "PNG", optimize=True)
print(f"Right hero: {right_crop.size} -> {OUT_RIGHT}")

# 3. Also create a "centered" version that's just the flag + fan
# This is the cleanest crop — center of the hero, above the headline
center_crop = img.crop((
    int(w * 0.20),
    int(h * 0.02),
    int(w * 0.95),
    int(h * 0.35),
))
center_crop.save("/home/z/my-project/public/images/hero-fan-center.png", "PNG", optimize=True)
print(f"Center hero: {center_crop.size} -> /home/z/my-project/public/images/hero-fan-center.png")
