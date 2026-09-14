#!/usr/bin/env bash
# Regenerate 8 product jerseys with AUTHENTIC Zimbabwe sports team crests.
# Football: Zimbabwe Bird (Hungwe) crest
# Cricket: Lion's head crest
# Rugby: Sable antelope crest
# NO TJ logo will be applied afterward — these are authentic replicas.

set -e
cd /home/z/my-project

echo "=== 1980s Football (ZIFA Zimbabwe Bird crest) ==="

z-ai image -p "Authentic vintage 1980s Zimbabwe national football team jersey (Warriors), retro 1980 cotton construction, loose boxy fit, V-neck collar with green yellow red black horizontal Zimbabwe flag stripe trim on collar and cuffs, plain white base fabric with simple bold horizontal color bands across the chest. Center chest features the authentic ZIFA Zimbabwe Football Association crest: a yellow gold Zimbabwe Bird (Hungwe) perched on a woven basket, with a red five-pointed star above and 'ZIFA' text below in a small shield badge. Authentic retro football kit aesthetic, 1980s vintage. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-1980-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 1985 Zimbabwe national football team away jersey (Warriors), retro 1980s cotton construction, loose fit, crew neck collar, forest green base with yellow and red piping trim on collar and sleeves. Center chest features the authentic ZIFA Zimbabwe Football Association crest: a yellow gold Zimbabwe Bird (Hungwe) perched on a woven basket with a red star above, in a small shield badge. Authentic 1980s retro football kit aesthetic. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-1985-1.png" -s 1024x1024 &

wait
echo "=== 1980s done ==="
sleep 8

echo "=== 1990s Football (ZIFA crest) ==="

z-ai image -p "Authentic vintage 1990s Zimbabwe national football team jersey (Warriors), retro 1990s polyester construction, polo collar with button placket, marigold yellow base with sublimated geometric triangle pattern in green red black. Center chest features the authentic ZIFA Zimbabwe Football Association crest: a yellow gold Zimbabwe Bird (Hungwe) perched on a woven basket with a red star above, in a small shield badge. Retro 90s sportswear aesthetic. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-1990-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 1992 Zimbabwe national football team away jersey (Warriors), retro 1990s polyester construction, V-neck with green yellow red trim, carbon black base with sublimated zigzag pattern in green yellow red on shoulders. Center chest features the authentic ZIFA Zimbabwe Football Association crest: a yellow gold Zimbabwe Bird (Hungwe) perched on a woven basket with a red star above, in a small shield badge. Retro 90s sportswear aesthetic. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-1992-1.png" -s 1024x1024 &

wait
echo "=== 1990s done ==="
sleep 8

echo "=== 2000s Cricket (Zimbabwe Cricket lion crest) ==="

z-ai image -p "Authentic vintage 2002 Zimbabwe national cricket team ODI jersey, retro early 2000s technical polyester construction, slim athletic fit, modern collar with zip, crimson red base with green yellow black side panels and modern sublimated graphic print. Center chest features the authentic Zimbabwe Cricket team crest: a stylized lion's head in gold and red on a green shield with 'ZIMBABWE CRICKET' text below. Technical sportswear aesthetic. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-2002-1.png" -s 1024x1024 &

sleep 3

z-ai image -p "Authentic vintage 2004 Zimbabwe national cricket team ODI jersey, retro 2000s technical polyester construction, slim fit, round neck with green yellow red trim, deep navy base with sublimated side stripe graphic in green yellow red. Center chest features the authentic Zimbabwe Cricket team crest: a stylized lion's head in gold and red on a green shield with 'ZIMBABWE CRICKET' text below. Modern 2000s sportswear aesthetic. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-2004-1.png" -s 1024x1024 &

wait
echo "=== 2000s done ==="
sleep 8

echo "=== Signature + Limited (Rugby Sables + Cricket) ==="

z-ai image -p "Premium signature edition Zimbabwe national rugby union team jersey (Sables), cream off-white base with gold metallic thread accents on collar and cuffs, green yellow red black Zimbabwe flag trim, premium heavyweight fabric, luxury heritage sportswear aesthetic, special edition. Center chest features the authentic Zimbabwe Rugby Union Sables crest: a leaping sable antelope in gold and black on a shield with 'SABLES' text below. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-signature.png" -s 1024x1024 &

sleep 3

z-ai image -p "Limited edition Zimbabwe national cricket team test jersey, vintage maroon base with green yellow black Zimbabwe flag trim on collar and shoulders, premium heavyweight fabric with subtle tonal pattern, heritage limited edition aesthetic. Center chest features the authentic Zimbabwe Cricket team crest: a stylized lion's head in gold and red on a green shield with 'ZIMBABWE CRICKET' text below. Clean white background, studio lighting, e-commerce product shot, premium quality, full front view" -o "/home/z/my-project/public/images/product-jersey-limited.png" -s 1024x1024 &

wait
echo "=== Signature + Limited done ==="

echo ""
echo "========================================="
echo "All 8 jerseys regenerated with authentic sports team crests!"
echo "(Football: ZIFA Zimbabwe Bird, Cricket: Lion crest, Rugby: Sables antelope)"
echo "NO TJ logo applied — these are authentic replicas."
echo "========================================="
ls -la /home/z/my-project/public/images/product-jersey-*.png | grep -E "1980|1985|1990|1992|2002|2004|signature|limited"
