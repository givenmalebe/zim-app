# FANATICS COOLER Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `FANATICS COOLER` nav item that opens its own page, populated with 7 product images and 5 collection groups extracted from `public/Cooler Corner - Copy.pptx`.

**Architecture:** A single insert into the existing `navItems` array drives both the desktop nav and the mobile drawer, because `header.tsx` maps over that one array in array order for both. A new static presentational component renders the 5 collection groups inside the existing `PageModal`, wired through the same `PageKey` / `pageMeta` / `renderPage()` path the five existing nav pages already use.

**Tech Stack:** Next.js 16 (`output: "export"`, static), React 19, TypeScript, Tailwind CSS v4, `python-pptx` (build-time asset extraction only — not a runtime dependency).

## Global Constraints

- Design authority: `docs/superpowers/specs/2026-10-16-fanatics-cooler-page-design.md`
- Brand colours are fixed: background `#0D0D0D`, gold accent `#D4AF37`, modal body `#FAF9F6`, body text `#555`
- Display font stack is fixed: `var(--font-bebas), Bebas Neue, sans-serif` via inline `style` on the element — not a Tailwind class
- `navItems` is rendered by two call sites in `header.tsx` (desktop `hidden lg:flex` nav, mobile drawer nav). Never edit `header.tsx` to change nav order.
- This page is **showcase only**. No cart wiring, no prices, no SKUs, no `onAddToCart` prop.
- The deck's `BUSINESS DEVELOPMENT` watermark, its `CONFIDENTIAL & PROPRIETARY` slide, and the `Presented by: Malvern Mhlanga` credit must NOT appear anywhere in the output.
- This repo has **no test runner** (`package.json` defines no `test` script). Verification is manual: build, grep generated output, then deploy and check.
- Do NOT fix the pre-existing `return彼此的;` defect at `src/app/page.tsx:105`. It is out of scope.
- Do NOT commit `.firebase/`, `out/`, or `.next/` (already gitignored).

---

### Task 1: Extract the 7 product images from the pptx

**Files:**
- Read: `public/Cooler Corner - Copy.pptx` (source, never modified)
- Create: `public/images/cooler/dream-team-fanatics-green.png`
- Create: `public/images/cooler/zimbabwe-dream-team.png`
- Create: `public/images/cooler/dream-team-bottle.png`
- Create: `public/images/cooler/zim-cricket-fanatic.png`
- Create: `public/images/cooler/caps-united-fanatics.png`
- Create: `public/images/cooler/highlanders-fc-100-years.png`
- Create: `public/images/cooler/collection-lineup.png`

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: 7 PNG files at `/images/cooler/<name>.png`, served from the site root. Later tasks reference these exact paths.

- [ ] **Step 1: Verify the source pptx is present and is the expected file**

Run:
```powershell
Get-Item "public\Cooler Corner - Copy.pptx" | Select-Object Name, Length
```
Expected: `Name` is `Cooler Corner - Copy.pptx`, `Length` is `11596799`.

- [ ] **Step 2: Ensure python-pptx is available**

Run:
```powershell
cmd /c "python -c ""import pptx; print(pptx.__version__)"""
```
Expected: prints a version like `1.0.2`. If it raises `ModuleNotFoundError`, run `cmd /c "python -m pip install python-pptx --quiet"` first and re-run.

- [ ] **Step 3: Write the extraction script**

Create `scripts/extract_cooler_images.py` with exactly this content:

```python
"""Extract Cooler Corner product images from the source deck.

Indexing is per-slide (p1, p2, ...) on purpose. A global counter makes the
second PICTURE shape on slides 3 and 6 overwrite the first, because both would
resolve to the same filename.
"""

import os
import sys

from pptx import Presentation

SOURCE = "public/Cooler Corner - Copy.pptx"
DEST = "public/images/cooler"

# slide number -> output filename, in shape order within that slide
NAMES = {
    (3, 1): "dream-team-fanatics-green.png",
    (3, 2): "zimbabwe-dream-team.png",
    (4, 1): "dream-team-bottle.png",
    (5, 1): "zim-cricket-fanatic.png",
    (6, 1): "caps-united-fanatics.png",
    (6, 2): "highlanders-fc-100-years.png",
    (7, 1): "collection-lineup.png",
}


def main() -> int:
    prs = Presentation(SOURCE)
    os.makedirs(DEST, exist_ok=True)

    for slide_no, slide in enumerate(prs.slides, 1):
        index = [0]

        def walk(shapes):
            for shape in shapes:
                if shape.shape_type == 6:  # GROUP
                    walk(shape.shapes)
                    continue
                if shape.shape_type != 13:  # not a PICTURE
                    continue
                index[0] += 1
                key = (slide_no, index[0])
                if key not in NAMES:
                    continue
                target = os.path.join(DEST, NAMES[key])
                with open(target, "wb") as handle:
                    handle.write(shape.image.blob)
                print(
                    "slide %d img %d -> %s (%d bytes)"
                    % (slide_no, index[0], target, os.path.getsize(target))
                )

        walk(slide.shapes)

    missing = [name for name in NAMES.values()
               if not os.path.exists(os.path.join(DEST, name))]
    if missing:
        print("MISSING: %s" % ", ".join(missing))
        return 1

    print("OK - all %d images written to %s" % (len(NAMES), DEST))
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

- [ ] **Step 4: Run the extraction**

Run:
```powershell
cmd /c "python scripts\extract_cooler_images.py"
```
Expected: 7 `slide ... -> ...` lines, then `OK - all 7 images written to public/images/cooler`. If it prints `MISSING:`, the deck's shape count for that slide differs from the spec — stop and report rather than renaming files to force a match.

- [ ] **Step 5: Verify all 7 files exist with non-trivial sizes**

Run:
```powershell
Get-ChildItem "public\images\cooler" | Select-Object Name, Length | Format-Table -AutoSize
```
Expected: exactly 7 `.png` files. Total size should be roughly 11 MB (the source deck is 11,596,799 bytes and these are its images essentially uncompressed). Any file at 0 bytes means the blob write failed.

- [ ] **Step 6: Visually confirm the two-image slides are not duplicates**

Open `public/images/cooler/dream-team-fanatics-green.png` and `public/images/cooler/zimbabwe-dream-team.png`, then `caps-united-fanatics.png` and `highlanders-fc-100-years.png`.

Expected per the spec:
- `dream-team-fanatics-green.png` — green/cream cooler, Zimbabwe bird crest, "THE DREAM TEAM FANATICS"
- `zimbabwe-dream-team.png` — black/red/gold cooler, "ZIMBABWE DREAM TEAM FANATICS"
- `caps-united-fanatics.png` — green cooler, "CAPS UNITED FANATICS"
- `highlanders-fc-100-years.png` — black/white cooler, "HIGHLANDERS FOOTBALL CLUB 100 YEARS 1926-2026 SIYINQABA"

If any pair are identical, the per-slide indexing is broken — fix the script before continuing.

- [ ] **Step 7: Confirm the banned strings are absent from the images**

These are baked into pixels, not text, so this checks the deck had no extractable text we accidentally carried over. Run:
```powershell
cmd /c "python scripts\extract_cooler_images.py" | Select-String "BUSINESS|CONFIDENTIAL|Malvern"
```
Expected: no output.

- [ ] **Step 8: Commit the extracted assets**

```powershell
git add scripts/extract_cooler_images.py public/images/cooler
git commit -m "Extract 7 Cooler Corner product images from source deck"
```

---

### Task 2: Add FANATICS COOLER to the navigation array

**Files:**
- Modify: `src/lib/products.ts:237-246` (the `navItems` array)

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: `navItems: string[]` containing `"FANATICS COOLER"` at index 3, immediately after `"COLLECTIONS"`. Both nav call sites in `header.tsx` pick this up with no change to that file.

- [ ] **Step 1: Confirm the current array shape before editing**

Run:
```powershell
Get-Content "src\lib\products.ts" | Select-Object -Skip 236 -First 10
```
Expected: the `export const navItems = [` declaration followed by the 7 quoted strings `HOME`, `OUR STORY`, `COLLECTIONS`, `LEGENDS`, `IMPACT`, `JOURNAL`, `CONTACT`.

- [ ] **Step 2: Insert the new item after COLLECTIONS**

Change:
```ts
export const navItems = [
  "HOME",
  "OUR STORY",
  "COLLECTIONS",
  "LEGENDS",
```
to:
```ts
export const navItems = [
  "HOME",
  "OUR STORY",
  "COLLECTIONS",
  "FANATICS COOLER",
  "LEGENDS",
```

- [ ] **Step 3: Verify the new array order**

Run:
```powershell
Select-String -Path "src\lib\products.ts" -Pattern '"HOME"|"OUR STORY"|"COLLECTIONS"|"FANATICS COOLER"|"LEGENDS"' | Where-Object { $_.LineNumber -ge 237 -and $_.LineNumber -le 247 } | ForEach-Object { "$($_.LineNumber): $($_.Line.Trim())" }
```
Expected, in this exact order by line number:
```
238: "HOME",
239: "OUR STORY",
240: "COLLECTIONS",
241: "FANATICS COOLER",
242: "LEGENDS",
```
`FANATICS COOLER` must sit directly below `COLLECTIONS`. That single position is what puts it beside COLLECTIONS in the desktop nav and below it in the mobile drawer, because `header.tsx` renders this array in order in both places.

- [ ] **Step 4: Confirm header.tsx was NOT modified**

Run:
```powershell
git status --porcelain src/components/store/header.tsx
```
Expected: no output (file unchanged).

- [ ] **Step 5: Commit**

```powershell
git add src/lib/products.ts
git commit -m "Add FANATICS COOLER to navigation after COLLECTIONS"
```

---

### Task 3: Build the FanaticsCoolerPage component

**Files:**
- Create: `src/components/store/pages/fanatics-cooler-page.tsx`
- Reference (do not modify): `src/components/store/pages/legends-page.tsx`

**Interfaces:**
- Consumes: the 7 image paths produced by Task 1 — `/images/cooler/dream-team-fanatics-green.png`, `/images/cooler/zimbabwe-dream-team.png`, `/images/cooler/dream-team-bottle.png`, `/images/cooler/zim-cricket-fanatic.png`, `/images/cooler/caps-united-fanatics.png`, `/images/cooler/highlanders-fc-100-years.png`, `/images/cooler/collection-lineup.png`
- Produces: a default-exported `function FanaticsCoolerPage()` taking no props and returning JSX. Imported by Task 4 as `import FanaticsCoolerPage from "@/components/store/pages/fanatics-cooler-page";`

- [ ] **Step 1: Create the component file**

Write `src/components/store/pages/fanatics-cooler-page.tsx` with exactly this content:

```tsx
'use client';

type Product = {
  src: string;
  alt: string;
  name: string;
  detail: string;
};

type Group = {
  title: string;
  products: Product[];
};

const groups: Group[] = [
  {
    title: "The Dream Team Collection",
    products: [
      {
        src: "/images/cooler/dream-team-fanatics-green.png",
        alt: "Green and cream cooler box with the Zimbabwe bird crest and gold trim, branded The Dream Team Fanatics",
        name: "The Dream Team Fanatics",
        detail: "Zimbabwe green and cream body, bird crest, five-star detail",
      },
      {
        src: "/images/cooler/zimbabwe-dream-team.png",
        alt: "Black cooler box with red and gold diagonal stripes and the gold Zimbabwe bird, branded Zimbabwe Dream Team Fanatics",
        name: "Zimbabwe Dream Team Fanatics",
        detail: "Black base, flag stripes, gold crest and lettering",
      },
    ],
  },
  {
    title: "Water Bottles",
    products: [
      {
        src: "/images/cooler/dream-team-bottle.png",
        alt: "Water bottle in gold, red and black vertical panels with a carry loop, branded Dream Team",
        name: "Dream Team Bottle",
        detail: "Gold, red and black panels, five-star branding, carry loop",
      },
    ],
  },
  {
    title: "Cricket Fanatics",
    products: [
      {
        src: "/images/cooler/zim-cricket-fanatic.png",
        alt: "Dark green cooler box with sweeping gold, red and black stripes and the ZIM cricket logo, branded Zim Cricket Fanatic",
        name: "Zim Cricket Fanatic",
        detail: "Dark green base, ZIM crest, sweeping flag stripes",
      },
    ],
  },
  {
    title: "Club Fanatics",
    products: [
      {
        src: "/images/cooler/caps-united-fanatics.png",
        alt: "Dark green cooler box with gold trim and the Caps United club crest, branded Caps United Fanatics",
        name: "Caps United Fanatics",
        detail: "Dark green base, club shield, gold detailing",
      },
      {
        src: "/images/cooler/highlanders-fc-100-years.png",
        alt: "Black and white cooler box with the circular Highlanders Football Club centenary crest reading 100 Years 1926 to 2026 Siyinqaba",
        name: "Highlanders FC — 100 Years",
        detail: "Black and white base, 1926–2026 centenary crest",
      },
    ],
  },
  {
    title: "The Collection",
    products: [
      {
        src: "/images/cooler/collection-lineup.png",
        alt: "Three coolers side by side: cream Caps United Fanatics, navy Dream Team Fanatics with trophy artwork, and black Zim Cricket Fanatic",
        name: "The Collection",
        detail: "The full cooler lineup in one look",
      },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group text-center">
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.src}
          alt={product.alt}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <h3
        className="mt-5 font-display text-[#0D0D0D] text-2xl md:text-3xl tracking-wide"
        style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
      >
        {product.name.toUpperCase()}
      </h3>
      <div className="mx-auto mt-2 h-px w-10 bg-[#D4AF37]/80" />
      <p className="mt-3 text-[#555] text-[14px] leading-[1.6] font-body">
        {product.detail}
      </p>
    </article>
  );
}

export default function FanaticsCoolerPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      {/* Intro */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
            Cooler Corner
          </span>
          <span className="h-px w-8 bg-[#D4AF37]" />
        </div>
        <h1
          className="font-display text-[#0D0D0D] text-5xl md:text-7xl leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-bebas), Bebas Neue, sans-serif" }}
        >
          FANATICS COOLER
        </h1>
        <p className="text-[#555] text-[15px] md:text-base leading-[1.7] font-body max-w-2xl mx-auto">
          Built for the matchday. Every cooler carries the colours, crests and
          names of the sides we grew up watching — the same legacy we wear,
          packed to take anywhere.
        </p>
      </div>

      {/* Groups */}
      <div className="space-y-20">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase">
                  {group.title}
                </span>
                <span className="h-px w-8 bg-[#D4AF37]" />
              </div>
            </div>

            {/* The lineup image is 1402x1122 - wider than square, so it spans full width. */}
            {group.title === "The Collection" ? (
              <div className="max-w-4xl mx-auto">
                <img
                  src={group.products[0].src}
                  alt={group.products[0].alt}
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto">
                {group.products.map((product) => (
                  <ProductCard key={product.src} product={product} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the component compiles in isolation**

Run:
```powershell
cmd /c "npx tsc --noEmit --jsx preserve --esModuleInterop --skipLibCheck --moduleResolution bundler --module esnext --target es2020 src\components\store\pages\fanatics-cooler-page.tsx" 2>&1
```
Expected: no output. If TypeScript reports errors about project-level config or JSX runtime, ignore only errors that mention `--jsx`/`--moduleResolution` flags; any error about `Product`, `Group`, `groups`, or `ProductCard` is real and must be fixed.

- [ ] **Step 3: Verify no banned strings leaked into the component**

Run:
```powershell
Select-String -Path "src\components\store\pages\fanatics-cooler-page.tsx" -Pattern "BUSINESS DEVELOPMENT|CONFIDENTIAL|PROPRIETARY|Malvern"
```
Expected: no output.

- [ ] **Step 4: Verify the lineup special-case is keyed correctly**

Run:
```powershell
Select-String -Path "src\components\store\pages\fanatics-cooler-page.tsx" -Pattern 'group.title === "The Collection"'
```
Expected: exactly one match. The lineup PNG is 1402x1122, not square, so it must not go through the `aspect-square` grid cell or it will be cropped.

- [ ] **Step 5: Commit**

```powershell
git add src/components/store/pages/fanatics-cooler-page.tsx
git commit -m "Add FanaticsCoolerPage component with 5 collection groups"
```

---

### Task 4: Wire the page into the router

**Files:**
- Modify: `src/app/page.tsx:17` (import), `:28` (`PageKey` union), `:30-37` (`pageMeta`), `:111-127` (`renderPage()` switch)

**Interfaces:**
- Consumes: `FanaticsCoolerPage` from Task 3.
- Produces: `"FANATICS COOLER"` as a valid `PageKey`. `handleNav` and the `PageModal` `open` prop need no change — verify this rather than editing them.

- [ ] **Step 1: Add the import**

Change line 17's neighbourhood from:
```tsx
import ContactPage from "@/components/store/pages/contact-page";
import LegendsPage from "@/components/store/pages/legends-page";
```
to:
```tsx
import ContactPage from "@/components/store/pages/contact-page";
import LegendsPage from "@/components/store/pages/legends-page";
import FanaticsCoolerPage from "@/components/store/pages/fanatics-cooler-page";
```

- [ ] **Step 2: Extend the PageKey union**

Change line 28 from:
```tsx
type PageKey = "OUR STORY" | "COLLECTIONS" | "LEGENDS" | "IMPACT" | "JOURNAL" | "CONTACT" | null;
```
to:
```tsx
type PageKey = "OUR STORY" | "COLLECTIONS" | "FANATICS COOLER" | "LEGENDS" | "IMPACT" | "JOURNAL" | "CONTACT" | null;
```

- [ ] **Step 3: Add the pageMeta entry**

In the `pageMeta` record, change the `"COLLECTIONS"` line to:
```tsx
  "COLLECTIONS": { eyebrow: "The Archive", title: "Full Archive" },
  "FANATICS COOLER": { eyebrow: "Cooler Corner", title: "Fanatics Cooler" },
```
The `pageMeta` record is typed `Record<Exclude<PageKey, null>, ...>`. If this entry is missing, every access at the `PageModal` call site fails at runtime, so it is not optional.

- [ ] **Step 4: Add the renderPage case**

In the `renderPage()` switch, change:
```tsx
      case "CONTACT":
        return <ContactPage />;
```
to:
```tsx
      case "CONTACT":
        return <ContactPage />;
      case "FANATICS COOLER":
        return <FanaticsCoolerPage />;
```

- [ ] **Step 5: Confirm handleNav needs no change**

Run:
```powershell
Get-Content "src\app\page.tsx" | Select-Object -Skip 86 -First 10
```
Expected: `handleNav` special-cases only `"COLLECTIONS"` (opening the catalogue modal) and sends everything else to `setPageOpen(item as PageKey)`. Because `"FANATICS COOLER"` is now in the `PageKey` union, the cast is valid and the `else` branch already routes it correctly. Make no edit here.

- [ ] **Step 6: Confirm the PageModal open condition still holds**

Run:
```powershell
Select-String -Path "src\app\page.tsx" -Pattern 'open=\{pageOpen !== null'
```
Expected: one match reading `open={pageOpen !== null && pageOpen !== "COLLECTIONS"}`. This excludes only the catalogue key, so `"FANATICS COOLER"` opens the page modal. Make no edit here.

- [ ] **Step 7: Build and confirm the feature is in the output**

Run:
```powershell
cmd /c "npx next build" 2>&1 | Select-Object -Last 12
```
Expected: build completes, routes table shows `/` and `/_not-found` as static. No errors.

- [ ] **Step 8: Verify the nav label and all 7 image paths are in the generated HTML**

Run:
```powershell
$html = Get-Content -Raw "out\index.html"
"FANATICS COOLER label : " + ($html -match 'FANATICS COOLER')
foreach ($n in 'dream-team-fanatics-green','zimbabwe-dream-team','dream-team-bottle','zim-cricket-fanatic','caps-united-fanatics','highlanders-fc-100-years','collection-lineup') {
  "/images/cooler/$n.png : " + ($html -match [regex]::Escape("/images/cooler/$n.png"))
}
```
Expected: all eight lines `True`.

- [ ] **Step 9: Verify mix-blend-multiply made it into the CSS**

Run:
```powershell
$css = (Get-ChildItem -Recurse -Filter "*.css" "out\_next" | Select-Object -First 1)
$t = Get-Content -Raw $css.FullName
"mix-blend-multiply : " + ($t -match '\.mix-blend-multiply\{mix-blend-mode:multiply\}')
```
Expected: `True`. If `False`, Tailwind did not scan the new component — check the file is inside the `content` globs and rebuild.

- [ ] **Step 10: Confirm the extracted PNGs were copied into the build**

Run:
```powershell
(Get-ChildItem "out\images\cooler" -Filter *.png).Count
```
Expected: `7`.

- [ ] **Step 11: Commit**

```powershell
git add src/app/page.tsx
git commit -m "Wire FANATICS COOLER into PageKey, pageMeta and renderPage"
```

---

### Task 5: Deploy and verify in production

**Files:** none modified.

**Interfaces:**
- Consumes: everything from Tasks 1-4.
- Produces: a live page at `https://wear-the-legacy-1.web.app`.

- [ ] **Step 1: Deploy hosting**

Run:
```powershell
cmd /c "echo Y| npx --yes firebase-tools@latest deploy --only hosting --project wear-the-legacy-1" 2>&1 | Select-String 'upload complete|version finalized|release complete|Deploy complete|Error'
```
Expected: all four success lines. If it fails with `Failed to make request to https://upload-firebasehosting.googleapis.com`, that is the known transient transport failure — re-run the identical command rather than changing anything.

- [ ] **Step 2: Verify the live page serves the feature**

Run:
```powershell
$r = Invoke-WebRequest "https://wear-the-legacy-1.web.app/" -UseBasicParsing -TimeoutSec 60
"STATUS      : " + $r.StatusCode
"label       : " + ($r.Content -match 'FANATICS COOLER')
"banned text : " + ($r.Content -match 'CONFIDENTIAL|BUSINESS DEVELOPMENT|Malvern')
```
Expected: `STATUS : 200`, `label : True`, `banned text : False`.

- [ ] **Step 3: Verify all 7 cooler images resolve on the live CDN**

Run:
```powershell
foreach ($n in 'dream-team-fanatics-green','zimbabwe-dream-team','dream-team-bottle','zim-cricket-fanatic','caps-united-fanatics','highlanders-fc-100-years','collection-lineup') {
  $u = "https://wear-the-legacy-1.web.app/images/cooler/$n.png"
  try { $r = Invoke-WebRequest $u -UseBasicParsing -TimeoutSec 45; "{0,-30} {1} {2,9}B" -f $n, $r.StatusCode, $r.RawContentLength }
  catch { "{0,-30} FAILED" -f $n }
}
```
Expected: all seven `200` with a byte count above 100000. The images must also carry the `immutable` cache header configured in `firebase.json` for `/images/**`.

- [ ] **Step 4: Push to GitHub**

```powershell
git push
```
Expected: push completes and `git status -sb` shows `## main...origin/main` with no divergence.