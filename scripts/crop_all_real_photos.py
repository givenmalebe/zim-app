#!/usr/bin/env python3
"""Square-crop all real legend photos and save as the canonical legend-*.png files."""
import os
from PIL import Image

REAL_PHOTOS = [
    "andy-flower",
    "benjani",
    "bruce-grobbelaar",
    "grant-flower",
    "heath-streak",
    "tendai-mtawarira",
]

IMG_DIR = "/home/z/my-project/public/images"

for slug in REAL_PHOTOS:
    src = os.path.join(IMG_DIR, f"legend-{slug}-real.jpg")
    if not os.path.exists(src):
        print(f"  Skip (missing): {slug}")
        continue

    img = Image.open(src).convert("RGB")
    w, h = img.size

    # Square crop centered on the subject
    # For portrait images, crop from the top (to keep head/face)
    # For landscape images, crop centered
    side = min(w, h)
    left = (w - side) // 2
    if h > w:
        # Portrait: crop from top to keep face
        top = 0
    else:
        # Landscape: center vertically
        top = (h - side) // 2
    right = left + side
    bottom = top + side
    crop = img.crop((left, top, right, bottom))

    # Resize to 1024x1024 for consistency
    crop = crop.resize((1024, 1024), Image.LANCZOS)

    out = os.path.join(IMG_DIR, f"legend-{slug}.png")
    crop.save(out, "PNG", optimize=True)
    print(f"✓ {slug}: {w}x{h} → 1024x1024 → {out}")

print("\nDone! All available real photos cropped and saved.")
