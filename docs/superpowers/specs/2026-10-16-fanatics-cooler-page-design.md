# FANATICS COOLER Page — Design

Date: 2026-10-16
Status: Approved

## Goal

Add a `FANATICS COOLER` navigation item that opens its own page, built from the
content of `public/Cooler Corner - Copy.pptx`.

Requirements from the request:

1. Navigation item sits **beside COLLECTIONS** on desktop.
2. Navigation item sits **below COLLECTIONS** on mobile.
3. The page has **its own content**, sourced from the pptx.

## Source material

`Cooler Corner - Copy.pptx` is 7 slides, 11.6 MB, 20x11.25 in. It contains a
`BUSINESS DEVELOPMENT` text box at 494.9pt spanning -9.1in to 29in on every
slide. That is a **watermark**, not content.

Substantive content is 5 collection groups holding 7 product images
(1254x1254 px PNG, white backgrounds), all of which were extracted and visually
inspected.

### Deliberate exclusions

The deck also carries a `CONFIDENTIAL & PROPRIETARY` slide ("may not be copied,
reproduced, distributed, disclosed or commercially exploited without prior
written permission") and a `Presented by: Malvern Mhlanga` credit on each slide.

**These are excluded from the page.** They are deck furniture aimed at external
recipients of a business-development pitch. Only the product photography and
product names are used. The watermark and disclaimer are not rendered.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Layout | Grouped by the deck's own collections | User-selected; preserves the source structure |
| Nav ordering | Single insert into `navItems` | Both navs render one array in one order, so one edit satisfies both requirements |
| White image backgrounds on cream page | `mix-blend-multiply` | User-selected; dissolves white into `#FAF9F6` with no card chrome |
| Cart integration | None — showcase only | No prices or SKUs were supplied; matches the Lookbook pattern |

## Assets

Extract 7 PNGs from the pptx into `public/images/cooler/`.

| File | Slide | Product |
|---|---|---|
| `dream-team-fanatics-green.png` | 3, img 1 | The Dream Team Fanatics — green/cream, bird crest |
| `zimbabwe-dream-team.png` | 3, img 2 | Zimbabwe Dream Team Fanatics — black/red/gold |
| `dream-team-bottle.png` | 4 | Dream Team water bottle — gold/red/black |
| `zim-cricket-fanatic.png` | 5 | Zim Cricket Fanatic — green |
| `caps-united-fanatics.png` | 6, img 1 | Caps United Fanatics — green |
| `highlanders-fc-100-years.png` | 6, img 2 | Highlanders FC — 100 Years 1926-2026, Siyinqaba |
| `collection-lineup.png` | 7 | Three-up lineup contact sheet |

Extraction is done with `python-pptx`, writing each `PICTURE` shape's blob.
Image order within a slide must be preserved by indexing per slide, not by
global counter, or the second image on slides 3 and 6 overwrites the first.

## Navigation

`src/lib/products.ts` — insert `"FANATICS COOLER"` immediately after
`"COLLECTIONS"` in `navItems` (currently line 240).

No change to `src/components/store/header.tsx`. Both the desktop nav (line 71)
and the mobile drawer (line 143) map over `navItems` in array order, so a single
insert yields the required desktop and mobile positions simultaneously.

## Page component

New file `src/components/store/pages/fanatics-cooler-page.tsx`.

Content is a module-level array of 5 groups in deck order:

1. THE DREAM TEAM COLLECTION — 2 images
2. WATER BOTTLES — 1 image
3. CRICKET FANATICS — 1 image
4. CLUB FANATICS — 2 images
5. THE COLLECTION — 1 image (the three-up lineup)

### Styling

`PageModal` renders its body on `bg-[#FAF9F6]` (cream) inside a dark top bar,
so this page uses **dark text on cream** — the inverse of the dark in-page
sections. Follow `legends-page.tsx` as the reference.

- Container: `max-w-[1280px] mx-auto px-6 lg:px-10 py-16`
- Group eyebrow: `text-[11px] tracking-[0.3em] text-[#D4AF37] font-ui uppercase`
  flanked by `h-px w-8 bg-[#D4AF37]` rules
- Group heading: `font-display`, `var(--font-bebas), Bebas Neue, sans-serif`
- Body copy: `text-[#555] text-[15px] leading-[1.7] font-body`
- Product image: `mix-blend-multiply` so the white source background dissolves
  into the cream page

The lineup image is wider than square (1402x1122) and is rendered full-width
rather than in the square grid.

### State

None. No filters, no cart, no interactivity. A static presentation component.

## Wiring

`src/app/page.tsx`, three edits:

1. Extend the `PageKey` union (line 28) with `"FANATICS COOLER"`.
2. Add a `pageMeta` entry (line 30) supplying `eyebrow` and `title`.
3. Add a `case` to the `renderPage()` switch (line 111) returning
   `<FanaticsCoolerPage />`.

`handleNav` (line 85) needs no change: it routes anything that is not
`"COLLECTIONS"` to `setPageOpen`, and `PageModal`'s `open` prop at line 173 is
already `pageOpen !== null && pageOpen !== "COLLECTIONS"`.

## Error handling

No network calls, no user input, no async work. The only failure mode is a
missing asset, which surfaces as a broken image — same as every other image on
the site. Nothing to handle.

## Testing

The repo has no test runner configured (`package.json` defines no `test` script),
so verification is manual:

1. `npx next build` completes and emits `out/`.
2. `out/index.html` contains the `FANATICS COOLER` nav label and the 7 new image
   paths.
3. `mix-blend-multiply` appears in the generated CSS.
4. Clicking the nav item on desktop opens the page with all 5 groups.
5. On mobile the drawer shows it directly below COLLECTIONS.
6. The page renders correctly inside the cream `PageModal` with no white boxes.

## Out of scope

- Cart integration, pricing, SKUs.
- The deck's watermark, disclaimer, and "Presented by" credit.
- Fixing the pre-existing `return彼此的;` defect at `src/app/page.tsx:105`, which
  is unrelated to this feature. Reported separately.