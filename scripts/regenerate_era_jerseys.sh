#!/usr/bin/env bash
# Regenerate 8 product jerseys as authentic era-specific vintage Zimbabwe jerseys.
# All have blank chests (no AI emblems) — TJ logo will be applied afterward.
# Process 2 at a time to avoid 429 rate limits.

set -e
cd /home/z/my-project

BLANK_SUFFIX="completely blank chest area with NO emblem, NO logo, NO badge, NO crest, NO printed graphics, NO patches, NO numbers, NO sponsor text. Plain solid jersey fabric on the entire chest. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view, no text, no branding of any kind"

echo "=== 1980s batch ==="

z-ai image -p "Authentic vintage 1980s Zimbabwe national football team jersey, retro 1980 cotton construction, loose boxy fit, V-neck collar with green yellow red black horizontal Zimbabwe flag stripe trim on collar and cuffs, plain white base fabric with simple bold horizontal color bands across the chest. Heavyweight cotton look, retro sports kit aesthetic, 1980s vintage football shirt style. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-1980-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 1985 Zimbabwe national football team away jersey, retro 1980s cotton construction, loose fit, crew neck collar, forest green base with yellow and red piping trim on collar and sleeves, retro sports kit aesthetic, 1980s vintage football shirt. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-1985-1.png" -s 1024x1024 &

wait
echo "=== 1980s done ==="
sleep 8

echo "=== 1990s batch ==="

z-ai image -p "Authentic vintage 1990s Zimbabwe national football team jersey, retro 1990s polyester construction, slightly fitted, polo collar with button placket, marigold yellow base with sublimated geometric triangle pattern in green red black, retro 90s sportswear aesthetic. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-1990-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 1992 Zimbabwe national football team jersey, retro 1990s polyester construction, V-neck with green yellow red trim, carbon black base with sublimated zigzag pattern in green yellow red on shoulders, retro 90s sportswear aesthetic, vintage 1990s football shirt. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-1992-1.png" -s 1024x1024 &

wait
echo "=== 1990s done ==="
sleep 8

echo "=== 2000s batch ==="

z-ai image -p "Authentic vintage 2002 Zimbabwe national football team jersey, retro early 2000s technical polyester construction, slim athletic fit, modern collar with zip, crimson red base with green yellow black side panels and modern sublimated graphic print, technical sportswear aesthetic. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-2002-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 2004 Zimbabwe national football team jersey, retro 2000s technical polyester construction, slim fit, round neck with green yellow red trim, deep navy base with sublimated side stripe graphic in green yellow red, modern 2000s sportswear aesthetic. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-2004-1.png" -s 1024x1024 &

wait
echo "=== 2000s done ==="
sleep 8

echo "=== Signature + Limited batch ==="

z-ai image -p "Premium signature edition Zimbabwe football jersey, cream off-white base with gold metallic thread accents on collar and cuffs, green yellow red black Zimbabwe flag trim, premium heavyweight fabric, luxury heritage sportswear aesthetic, special edition. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-signature.png" -s 1024x1024 &

sleep 3

z-ai image -p "Limited edition Zimbabwe football jersey, vintage maroon base with green yellow black Zimbabwe flag trim on collar and shoulders, premium heavyweight fabric with subtle tonal pattern, heritage limited edition aesthetic. $BLANK_SUFFIX" -o "/home/z/my-project/public/images/product-jersey-limited.png" -s 1024x1024 &

wait
echo "=== Signature + Limited done ==="

echo ""
echo "========================================="
echo "All 8 era-specific jerseys regenerated!"
echo "========================================="
ls -la /home/z/my-project/public/images/product-jersey-*.png | grep -E "1980|1985|1990|1992|2002|2004|signature|limited"
