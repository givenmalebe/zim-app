#!/usr/bin/env python3
"""Square-crop the real Mtawarira photo to fit the legend card layout."""
from PIL import Image

SRC = "/home/z/my-project/public/images/legend-tendai-mtawarira-real.jpg"
OUT = "/home/z/my-project/public/images/legend-tendai-mtawarira.png"

img = Image.open(SRC).convert("RGB")
w, h = img.size
print(f"Original: {w}x{h}")

# Square crop from the top (preserves the player, who is the focus)
side = min(w, h)
left = (w - side) // 2
top = 0  # start from top so we keep the player's head/body
right = left + side
bottom = top + side
crop = img.crop((left, top, right, bottom))

# Resize to 1024x1024 for consistency with other legend portraits
crop = crop.resize((1024, 1024), Image.LANCZOS)
crop.save(OUT, "PNG", optimize=True)
print(f"Saved square crop -> {OUT} ({crop.size})")
