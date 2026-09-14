#!/usr/bin/env python3
"""
Apply the Throwback Jersey logo to:
1. Create a transparent version of the logo (remove white background)
2. Overlay the transparent logo on each product jersey image (on chest area)
3. Overlay the logo on the hero image and banner strip image
"""
import os
from PIL import Image, ImageFilter, ImageEnhance

SRC_LOGO = "/home/z/my-project/public/images/logo.jpg"
IMG_DIR = "/home/z/my-project/public/images"
TRANSPARENT_LOGO = "/home/z/my-project/public/images/logo-transparent.png"
WHITE_LOGO_PNG = "/home/z/my-project/public/images/logo-white.png"  # white version for dark backgrounds

# Jersey product images
JERSEY_IMAGES = [
    "product-jersey-grey.png",
    "product-jersey-green.png",
    "product-jersey-black.png",
    "product-jersey-yellow.png",
    "product-jersey-red.png",
    "product-jersey-white.png",
    "product-jersey-navy.png",
    "product-jersey-maroon.png",
    "product-jersey-folded.png",
    "banner-jersey.png",
]

# Hero + banner images that should also get the logo overlay
HERO_BANNER_IMAGES = ["hero-fan.png"]


def make_transparent_logo(src_path: str, out_path: str) -> Image.Image:
    """Convert white background to transparent."""
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # treat near-white pixels as transparent (with soft threshold)
        if r > 235 and g > 235 and b > 235:
            # full transparency for pure white
            new_data.append((255, 255, 255, 0))
        elif r > 215 and g > 215 and b > 215:
            # partial transparency for off-white edges
            alpha = int(255 * (1 - (min(r, g, b) - 215) / (235 - 215 + 1)))
            new_data.append((r, g, b, max(0, alpha)))
        else:
            new_data.append((r, g, b, 255))
    img.putdata(new_data)
    # smooth edges slightly
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img.save(out_path, "PNG")
    print(f"Transparent logo saved -> {out_path} ({img.size})")
    return img


def make_white_version(src_path: str, out_path: str) -> Image.Image:
    """Create an all-white version of the logo for dark backgrounds (like footer/header)."""
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # treat white background as transparent
        if r > 235 and g > 235 and b > 235:
            new_data.append((255, 255, 255, 0))
        else:
            # keep alpha, but make everything white
            # preserve detail by darkening alpha for darker original pixels
            luminance = 0.299 * r + 0.587 * g + 0.114 * b
            new_alpha = int(255 * (1 - luminance / 255))
            new_alpha = max(60, min(255, new_alpha + 100))
            new_data.append((255, 255, 255, new_alpha))
    img.putdata(new_data)
    img.save(out_path, "PNG")
    print(f"White version saved -> {out_path} ({img.size})")
    return img


def overlay_logo_on_jersey(
    base_path: str, logo: Image.Image, out_path: str, scale: float = 0.28, y_offset: float = 0.36
) -> None:
    """Overlay the logo on the chest area of a jersey image.

    scale: width of logo as a fraction of the base image width
    y_offset: vertical position (0 = top, 0.5 = middle, 1 = bottom) for the logo center
    """
    base = Image.open(base_path).convert("RGBA")
    w, h = base.size

    # Resize logo
    logo_w = int(w * scale)
    logo_ratio = logo.height / logo.width
    logo_h = int(logo_w * logo_ratio)
    resized_logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

    # Calculate position to center logo on chest
    pos_x = (w - logo_w) // 2
    pos_y = int(h * y_offset) - (logo_h // 2)

    # Compose
    base.alpha_composite(resized_logo, (pos_x, pos_y))
    # Convert back to RGB to keep PNG file size reasonable and preserve original format
    final = base.convert("RGB")
    final.save(out_path, "PNG", optimize=True)
    print(f"Logo applied -> {out_path}")


def overlay_logo_on_hero(
    base_path: str, logo: Image.Image, out_path: str, scale: float = 0.14
) -> None:
    """Overlay the logo on the hero image (small, top-left or centered)."""
    base = Image.open(base_path).convert("RGBA")
    w, h = base.size

    logo_w = int(w * scale)
    logo_ratio = logo.height / logo.width
    logo_h = int(logo_w * logo_ratio)
    resized_logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

    # Position: top-right corner with some padding
    pos_x = w - logo_w - int(w * 0.04)
    pos_y = int(h * 0.08)

    base.alpha_composite(resized_logo, (pos_x, pos_y))
    final = base.convert("RGB")
    final.save(out_path, "PNG", optimize=True)
    print(f"Logo applied to hero -> {out_path}")


# Patch ImageFilter import (used above as Filter.NONE placeholder)
from PIL import ImageFilter  # noqa: E402


def main() -> None:
    # 1. Make transparent logo
    transparent = make_transparent_logo(SRC_LOGO, TRANSPARENT_LOGO)

    # 2. Make all-white version for dark backgrounds
    white_logo = make_white_version(SRC_LOGO, WHITE_LOGO_PNG)

    # 3. Overlay transparent logo on each jersey
    for j in JERSEY_IMAGES:
        p = os.path.join(IMG_DIR, j)
        if not os.path.exists(p):
            print(f"Skip (missing): {p}")
            continue
        overlay_logo_on_jersey(p, transparent, p, scale=0.30, y_offset=0.42)

    # 4. Overlay logo on hero (small, corner placement)
    for h_img in HERO_BANNER_IMAGES:
        p = os.path.join(IMG_DIR, h_img)
        if not os.path.exists(p):
            print(f"Skip (missing): {p}")
            continue
        overlay_logo_on_hero(p, white_logo, p, scale=0.10)

    print("\nAll done!")


if __name__ == "__main__":
    main()
