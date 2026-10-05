# Graphical Abstracts for Journal Papers — Design Spec

- **Date:** 2026-10-04
- **Status:** Draft for review
- **Feature owner:** Dr. Cheng Fu
- **Related:** `2026-10-04-cfu-personal-website-design.md` (site design spec)

## 1. Goal

Add a graphical abstract to the detail page of each journal paper where Dr. Fu is the
**first or corresponding author**, to give those papers a stronger, more scannable visual
summary. Conference papers are explicitly out of scope.

## 2. Scope — papers included (13)

Journals only, where Fu is first (`Fu, C., …`) or corresponding (`Fu, C.*, …`):

| # | slug | Fu role |
|---|------|---------|
| 1 | `2026-07-10-jgsa-han-etal` | corresponding |
| 2 | `2026-02-18-ijgis-zhou-etal` | corresponding |
| 3 | `2025-6-17-he-fu-ye` | corresponding |
| 4 | `2024-12-01-zhou-fu-weibel` | corresponding |
| 5 | `2024-06-20-ijgis-fu-etal` | first |
| 6 | `2023-11-14-cagis-fu-etal` | first |
| 7 | `2023-09-11-re-he-etal` | corresponding |
| 8 | `2023-4-11-cagis-conrow-etal` | corresponding |
| 9 | `2023-1-24-gsis-zhao-etal` | corresponding |
| 10 | `2022-1-31-ceus-bruehwiler-etal` | corresponding |
| 11 | `2020-6-16-ijgis-fu-huang-weibel` | first |
| 12 | `2019-12-11-rs-fu-song-stewart` | first |
| 13 | `2018-7-27-ceus-fu-etal` | first |

## 3. Approach

- The graphical abstract is a **rendered Astro component**, not an image file. This keeps
  the site asset-free, crisp at any size, and guaranteed consistent.
- Visual: **template A — colour panel** (chosen in brainstorming). A solid theme-colour
  left panel with the theme name and a small schematic; the one-line takeaway and citation
  sit on the right.
- Placement: **hero at the top of the paper detail page**, shown only when the paper has an
  entry. The listings stay purely typographic.

## 4. Data model

New file `src/data/graphicalAbstracts.ts`:

```ts
export type SchematicId =
  | 'buildings' | 'map-scale' | 'network' | 'trajectory' | 'raster-grid'
  | 'land-cover' | 'solar-field' | 'dashboard' | 'gan';

export interface GraphicalAbstract {
  takeaway: string;      // <= ~14 words, English
  keywords: string[];    // 3-4 keywords, English
  schematic: SchematicId;
}

export const graphicalAbstracts: Record<string, GraphicalAbstract> = {
  '2024-06-20-ijgis-fu-etal': {
    takeaway: 'Explainable AI shows a ResU-Net learns building boundaries, not interiors.',
    keywords: ['map generalization', 'XAI', 'deep learning', 'U-Net'],
    schematic: 'buildings',
  },
  // ...one entry per slug in §2
};
```

- Keyed by the publication slug; papers without an entry render no hero.
- Takeaways, keywords and schematics are English (papers are English). The theme name in
  the panel is bilingual, pulled from `researchAreas[theme].label[lang]`.

## 5. Component

New `src/components/GraphicalAbstract.astro`, props `{ paper: Publication; entry: GraphicalAbstract; lang: Lang }`.

Template A layout (16:9 on desktop):

```
┌────────────────┬───────────────────────────────────────────────┐
│  THEME COLOUR  │  One-line takeaway (large, ~2 lines)          │
│  (left panel)  │                                               │
│  theme name    │                                               │
│  + schematic   │  Fu, Zhou, Xin & Weibel · IJGIS 2024          │
└────────────────┴───────────────────────────────────────────────┘
```

- Left panel ~32% width, background `var(--theme-<id>)`, theme name in mono uppercase,
  schematic SVG drawn in white.
- Right side: takeaway set large (displayish), keywords as a mono row, citation line muted.
- Responsive: below ~640px the panel becomes a top strip (theme name + schematic inline)
  and the takeaway stacks beneath.

## 6. Schematic library

~8–9 small inline-SVG motifs, each drawn in the current theme colour (via `currentColor`
or an explicit stroke), chosen per paper by topic:

- `buildings` — building footprints, one highlighted (map generalization / simplification)
- `map-scale` — nested map frames / scale bars (generalization data set, cartography)
- `network` — nodes and edges (graph embedding, GCN, road network)
- `trajectory` — polyline with points (GPS trajectories, mobility)
- `raster-grid` — grid cells with a highlighted cell (raster / U-Net / image maps)
- `land-cover` — land-cover patchwork / satellite tile (remote sensing, fire/greening)
- `solar-field` — panels + sun (photovoltaic / poverty)
- `dashboard` — bars / map panel (mobility dashboards)
- `gan` — two opposing blocks (generative models)

## 7. Content sourcing

For each of the 13 papers: extract the abstract from the corresponding PDF in
`科研文档和记录\发表论文`, then write a ≤ ~14-word takeaway and 3–4 keywords, and assign a
schematic. The owner reviews the takeaways before they are finalised.

## 8. Non-goals

- No graphical abstracts for conference papers or for journals where Fu is neither first
  nor corresponding author.
- No standalone image files / OG share images in this pass (can be added in the polish
  phase if wanted).
- Takeaways stay in English (papers are English); only the theme name is bilingual.

## 9. Verification

- `npm run check` clean and `npm run build` succeeds.
- Exactly the 13 detail pages listed in §2 show a graphical-abstract hero; no other paper
  detail page does.
- Both locales render (EN + ZH), responsive at mobile width.
- Manual review of the 13 takeaways for accuracy.

## 10. Open questions

- None blocking. Optional later: OG/share image export; extend to co-authored papers.
