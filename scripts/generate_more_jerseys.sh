#!/usr/bin/env bash
# Generate 8 MORE jerseys across football, cricket, and rugby.
# Each carries its authentic team crest (ZIFA Bird, ZC Lion, Sables Antelope).
# NO TJ logo overlay.

set -e
cd /home/z/my-project

# Common crest descriptions
ZIFA="authentic ZIFA Zimbabwe Football Association crest: a yellow gold Zimbabwe Bird (Hungwe) perched on a woven basket with a red five-pointed star above, in a small shield badge"
ZC="authentic Zimbabwe Cricket team crest: a stylized lion's head in gold and red on a green shield with 'ZIMBABWE CRICKET' text below"
SABLES="authentic Zimbabwe Rugby Union Sables crest: a leaping sable antelope in gold and black on a shield with 'SABLES' text below"

SUFFIX="Center chest features the crest. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view"

echo "=== Batch 1: 1980s Football + 1980s Cricket ==="

z-ai image -p "Authentic vintage 1982 Zimbabwe national football team home jersey (Warriors), retro 1980s cotton construction, loose boxy fit, V-neck collar, marigold yellow base with bold green and red horizontal color bands across the chest, green and red piping on cuffs. $SUFFIX the $ZIFA. Authentic retro football kit aesthetic, 1980s vintage." -o "/home/z/my-project/public/images/product-jersey-1982-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 1987 Zimbabwe national cricket team test jersey (Chevrons), retro 1980s cream wool cricket sweater with V-neck, ribbed cuffs and waistband in green yellow red Zimbabwe flag colors, traditional cable-knit pattern. $SUFFIX the $ZC. Authentic 1980s vintage cricket kit aesthetic." -o "/home/z/my-project/public/images/product-jersey-1987-1.png" -s 1024x1024 &

wait
echo "=== Batch 1 done ==="
sleep 8

echo "=== Batch 2: 1990s Cricket + 1990s Rugby ==="

z-ai image -p "Authentic vintage 1995 Zimbabwe national cricket team ODI jersey (Chevrons), retro 1990s polyester construction, polo collar with button placket, white base with sublimated green yellow red zigzag pattern across chest and shoulders, retro 90s sportswear aesthetic. $SUFFIX the $ZC." -o "/home/z/my-project/public/images/product-jersey-1995-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 1991 Zimbabwe national rugby union team jersey (Sables), retro 1990s cotton rugby shirt construction, sturdy collar with green yellow red black Zimbabwe flag stripe trim, white base with thick green horizontal hoop across the chest, traditional rugby shirt aesthetic. $SUFFIX the $SABLES. Retro 1990s rugby kit." -o "/home/z/my-project/public/images/product-jersey-1991-1.png" -s 1024x1024 &

wait
echo "=== Batch 2 done ==="
sleep 8

echo "=== Batch 3: 2000s Football + 2000s Rugby ==="

z-ai image -p "Authentic vintage 2006 Zimbabwe national football team home jersey (Warriors), retro 2000s technical polyester construction, slim athletic fit, round neck with green yellow red trim, forest green base with sublimated tonal side stripe graphic, modern 2000s sportswear aesthetic. $SUFFIX the $ZIFA." -o "/home/z/my-project/public/images/product-jersey-2006-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 2008 Zimbabwe national rugby union team away jersey (Sables), retro 2000s technical polyester rugby construction, sturdy collar, carbon black base with green yellow red side panels, modern rugby shirt aesthetic. $SUFFIX the $SABLES. Retro 2000s rugby kit." -o "/home/z/my-project/public/images/product-jersey-2008-1.png" -s 1024x1024 &

wait
echo "=== Batch 3 done ==="
sleep 8

echo "=== Batch 4: Signature Cricket + Limited Football ==="

z-ai image -p "Premium signature edition Zimbabwe national cricket team jersey (Chevrons), off-white cream base with gold metallic thread accents on collar and cuffs, green yellow red black Zimbabwe flag trim, premium heavyweight fabric, luxury heritage sportswear aesthetic, special edition. $SUFFIX the $ZC." -o "/home/z/my-project/public/images/product-jersey-signature-cricket.png" -s 1024x1024 &

sleep 3

z-ai image -p "Limited edition Zimbabwe national football team jersey (Warriors), vintage maroon base with green yellow black Zimbabwe flag trim on collar and shoulders, premium heavyweight fabric with subtle tonal pattern, heritage limited edition aesthetic, numbered edition. $SUFFIX the $ZIFA." -o "/home/z/my-project/public/images/product-jersey-limited-football.png" -s 1024x1024 &

wait
echo "=== Batch 4 done ==="

echo ""
echo "========================================="
echo "All 8 new jerseys generated with authentic crests!"
echo "========================================="
ls -la /home/z/my-project/public/images/product-jersey-1982-1.png /home/z/my-project/public/images/product-jersey-1987-1.png /home/z/my-project/public/images/product-jersey-1995-1.png /home/z/my-project/public/images/product-jersey-1991-1.png /home/z/my-project/public/images/product-jersey-2006-1.png /home/z/my-project/public/images/product-jersey-2008-1.png /home/z/my-project/public/images/product-jersey-signature-cricket.png /home/z/my-project/public/images/product-jersey-limited-football.png
