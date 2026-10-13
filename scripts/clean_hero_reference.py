#!/usr/bin/env python3
"""
Final clean: fully opaque dark overlay on text regions (left 40%, right 20%, top 10%),
with only the center window (x=40%-80%) showing the photo at reduced opacity.
"""
from PIL import Image, ImageFilter

SRC = "/home/z/my-project/upload/WhatsApp Image 2026-09-14 at 11.33.36.jpeg"
OUT = "/home/z/my-project/public/images/hero-fan.png"

img = Image.open(SRC).convert("RGBA")
w, h = img.size

# 1. Crop the hero section (top 48%)
hero = img.crop((0, 0, w, int(h * 0.48)))
hw, hh = hero.size
print(f"Hero: {hw}x{hh}")

# 2. Create a fully opaque dark overlay
overlay = Image.new("RGBA", (hw, hh), (0, 0, 0, 0))

# Paint everything fully opaque dark (charcoal)
for y in range(hh):
    for x in range(hw):
        overlay.putpixel((x, y), (8, 8, 12, 255))

# 3. Cut a window in the center to reveal the photo
# Window: x=38% to 78%, y=12% to 95%
# (avoids left text, right vertical text, top nav, bottom transition)
win_left = int(hw * 0.38)
win_right = int(hw * 0.78)
win_top = int(hh * 0.12)
win_bottom = int(hh * 0.95)

# Feather distance (in pixels) for soft edges
feather_x = int(hw * 0.06)  # 6% of width
feather_y = int(hh * 0.05)  # 5% of height

for y in range(hh):
    for x in range(hw):
        # Check if inside window
        if win_left <= x <= win_right and win_top <= y <= win_bottom:
            # Calculate feather distances from each edge
            d_left = (x - win_left) / max(1, feather_x)
            d_right = (win_right - x) / max(1, feather_x)
            d_top = (y - win_top) / max(1, feather_y)
            d_bottom = (win_bottom - y) / max(1, feather_y)
            
            # Minimum feather distance (closest edge)
            min_d = min(d_left, d_right, d_top, d_bottom)
            
            if min_d >= 1:
                # Fully inside window — alpha 170 (photo visible but dark)
                alpha = 170
            elif min_d > 0:
                # Feather zone — interpolate from 170 to 255
                alpha = int(170 + (255 - 170) * (1 - min_d))
            else:
                alpha = 255
            
            overlay.putpixel((x, y), (8, 8, 12, alpha))

# 4. Composite
hero.alpha_composite(overlay)

# 5. Warm golden tint
warmth = Image.new("RGBA", (hw, hh), (60, 35, 0, 30))
hero.alpha_composite(warmth)

# 6. Slight blur
hero = hero.filter(ImageFilter.GaussianBlur(radius=1.0))

# 7. Save
final = hero.convert("RGB")
final.save(OUT, "PNG", optimize=True)
print(f"Final cleaned hero -> {OUT} ({final.size})")
