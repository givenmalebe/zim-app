#!/usr/bin/env bash
# Regenerate all 8 product jerseys as CLEAN jerseys (no emblem at all on the chest).
# Then we'll overlay only the real TJ logo on top.

set -e
cd /home/z/my-project

# Common prompt suffix to ensure no AI emblems
SUFFIX="completely blank chest area with no emblem, no logo, no badge, no crest, no printed graphics on the chest. Plain solid color jersey fabric on chest. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view, no text, no branding"

z-ai image -p "Professional e-commerce product photography of a heather grey retro football jersey on invisible mannequin, Zimbabwe flag colors on collar and shoulders (green yellow red black stripes), $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-grey.png" -s 1024x1024 &
z-ai image -p "Professional e-commerce product photography of a forest green retro football jersey on invisible mannequin, yellow and red trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-green.png" -s 1024x1024 &
z-ai image -p "Professional e-commerce product photography of a carbon black retro football jersey on invisible mannequin, green yellow red trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-black.png" -s 1024x1024 &
z-ai image -p "Professional e-commerce product photography of a marigold yellow retro football jersey on invisible mannequin, green red black trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-yellow.png" -s 1024x1024 &

wait
echo "First batch done"

z-ai image -p "Professional e-commerce product photography of a crimson red retro football jersey on invisible mannequin, green yellow black trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-red.png" -s 1024x1024 &
z-ai image -p "Professional e-commerce product photography of a stadium white retro football jersey on invisible mannequin, green yellow red black trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-white.png" -s 1024x1024 &
z-ai image -p "Professional e-commerce product photography of a deep navy retro football jersey on invisible mannequin, green yellow red trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-navy.png" -s 1024x1024 &
z-ai image -p "Professional e-commerce product photography of a vintage maroon retro football jersey on invisible mannequin, green yellow black trim on collar and shoulders, $SUFFIX" -o "/home/z/my-project/public/images/product-jersey-maroon.png" -s 1024x1024 &

wait
echo "Second batch done"

# Also regenerate the close-up banner jersey (flat fabric with no emblem)
z-ai image -p "Close-up product photograph of a heather grey retro football jersey fabric on neutral white background. Plain jersey fabric with no emblem, no logo, no badge, no crest, no graphics on the chest. Zimbabwe flag colors on collar/shoulder (green yellow red black stripes). Premium cotton fabric texture visible, studio lighting" -o "/home/z/my-project/public/images/banner-jersey.png" -s 1024x1024

echo "All jerseys regenerated cleanly!"
