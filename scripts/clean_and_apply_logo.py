#!/usr/bin/env python3
"""
Generate clean jersey product images (no AI emblem) and overlay the real TJ logo.

Approach:
1. For each existing jersey image, we'll cover the center area where the AI emblem sits
   with a patch matching the jersey color (so we don't need to regenerate images).
2. Then overlay the real TJ logo on top of the patched area.

This is faster than regenerating all 8 jerseys and keeps consistency.
"""
import os
from PIL import Image, ImageFilter, ImageEnhance

IMG_DIR = "/home/z/my-project/public/images"
LOGO = "/home/z/my-project/public/images/logo-transparent.png"

# (filename, jersey_color_rgb, patch_size_fraction_of_width, patch_y_center_fraction)
JERSEYS = [
    ("product-jersey-grey.png",   (210, 210, 210), 0.42, 0.42),
    ("product-jersey-green.png",  (50, 110, 70),   0.42, 0.42),
    ("product-jersey-black.png",  (35, 35, 35),    0.42, 0.42),
    ("product-jersey-yellow.png", (220, 180, 50),  0.42, 0.42),
    ("product-jersey-red.png",    (150, 40, 40),   0.42, 0.42),
    ("product-jersey-white.png",  (245, 245, 245), 0.42, 0.42),
    ("product-jersey-navy.png",   (35, 50, 90),    0.42, 0.42),
    ("product-jersey-maroon.png", (90, 30, 30),    0.42, 0.42),
    ("banner-jersey.png",         (210, 210, 210), 0.32, 0.50),
    ("product-jersey-folded.png", (210, 210, 210), 0.35, 0.50),
]


def patch_and_overlay(filename: str, color: tuple, patch_w_frac: float, y_frac: float) -> None:
    path = os.path.join(IMG_DIR, filename)
    img = Image.open(path).convert("RGBA")
    w, h = img.size

    # 1. Create a soft elliptical patch matching the jersey color to cover the AI emblem.
    # We use an ellipse to blend more naturally with the chest area.
    patch_w = int(w * patch_w_frac)
    patch_h = int(patch_w * 1.15)  # slightly taller
    patch = Image.new("RGBA", (patch_w, patch_h), (0, 0, 0, 0))

    # Draw an ellipse with a subtle gradient (more opaque in center, soft edges)
    cx, cy = patch_w // 2, patch_h // 2
    max_r = min(cx, cy)
    for y in range(patch_h):
        for x in range(patch_w):
            dx = (x - cx) / cx
            dy = (y - cy) / cy
            d = (dx * dx + dy * dy) ** 0.5
            if d < 1.0:
                # alpha falls off near edges
                alpha = int(255 * min(1.0, (1.0 - d) * 1.3))
                # add a little noise for fabric-like texture
                noise = ((x * 7 + y * 13) % 17) - 8
                r = max(0, min(255, color[0] + noise))
                g = max(0, min(255, color[1] + noise))
                b = max(0, min(255, color[2] + noise))
                patch.putpixel((x, y), (r, g, b, alpha))

    # Slight blur on patch edges
    patch = patch.filter(ImageFilter.GaussianBlur(radius=4))

    # 2. Position patch centered on chest
    pos_x = (w - patch_w) // 2
    pos_y = int(h * y_frac) - (patch_h // 2)

    # 3. Composite patch onto the jersey
    img.alpha_composite(patch, (pos_x, pos_y))

    # 4. Load and resize the real TJ logo
    logo = Image.open(LOGO).convert("RGBA")
    logo_w = int(w * 0.30)  # logo width as 30% of jersey width
    logo_ratio = logo.height / logo.width
    logo_h = int(logo_w * logo_ratio)
    resized_logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

    # 5. Position logo centered on chest
    logo_x = (w - logo_w) // 2
    logo_y = int(h * y_frac) - (logo_h // 2)

    # 6. Composite logo on top
    img.alpha_composite(resized_logo, (logo_x, logo_y))

    # 7. Convert to RGB and save (overwrite original)
    final = img.convert("RGB")
    final.save(path, "PNG", optimize=True)
    print(f"Cleaned + applied logo -> {filename}")


def main() -> None:
    for filename, color, patch_frac, y_frac in JERSEYS:
        path = os.path.join(IMG_DIR, filename)
        if not os.path.exists(path):
            print(f"Skip (missing): {filename}")
            continue
        patch_and_overlay(filename, color, patch_frac, y_frac)
    print("\nAll jerseys cleaned and re-applied with the real TJ logo!")


if __name__ == "__main__":
    main()
