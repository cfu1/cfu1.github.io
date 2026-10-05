# Graphical Abstracts for Journal Papers — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show a Swiss-style "template A" graphical-abstract hero on the detail page of the 13 journal papers where Dr. Fu is first or corresponding author.

**Architecture:** A rendered Astro component (no image files). A data module maps paper slug → `{ takeaway, keywords, schematic }`; a `Schematic.astro` renders one of nine inline-SVG motifs in the theme colour; `GraphicalAbstract.astro` composes template A; `PublicationDetail.astro` renders it as a hero when an entry exists.

**Tech Stack:** Astro 5, TypeScript, existing design tokens (`--theme-<id>`, `--font-mono`, spacing steps). Verification = `npm run check` + `npm run build` (no test framework).

**Spec:** `site/docs/superpowers/specs/2026-10-04-graphical-abstracts-design.md`.

**Project root:** all commands run from `C:\Users\kland\Dropbox\工作申请\personal_web\site`.

---

## File structure

```
src/data/graphicalAbstracts.ts        # CREATE  slug -> {takeaway, keywords, schematic}
src/components/Schematic.astro        # CREATE  inline-SVG motif library (9 ids)
src/components/GraphicalAbstract.astro# CREATE  template-A card
src/components/PublicationDetail.astro# MODIFY  render hero when entry exists
src/styles/global.css                 # MODIFY  .gabstract* styles
```

---

### Task 1: Data module `graphicalAbstracts.ts`

**Files:**
- Create: `src/data/graphicalAbstracts.ts`

- [ ] **Step 1: Create the file with all 13 entries**

```ts
export type SchematicId =
  | 'buildings'
  | 'map-scale'
  | 'network'
  | 'trajectory'
  | 'raster-grid'
  | 'land-cover'
  | 'solar-field'
  | 'dashboard'
  | 'gan';

export interface GraphicalAbstract {
  takeaway: string;
  keywords: string[];
  schematic: SchematicId;
}

export const graphicalAbstracts: Record<string, GraphicalAbstract> = {
  '2018-7-27-ceus-fu-etal': {
    takeaway: 'Linguistic signatures in social media reveal spatiotemporal urban activities.',
    keywords: ['urban activities', 'social media', 'linguistic signatures'],
    schematic: 'network',
  },
  '2019-12-11-rs-fu-song-stewart': {
    takeaway: 'Activity data combined with long-term remote sensing maps urban land-use change.',
    keywords: ['land use', 'remote sensing', 'activity data'],
    schematic: 'land-cover',
  },
  '2020-6-16-ijgis-fu-huang-weibel': {
    takeaway: 'Quadtree geographic context simplifies GPS trajectories while preserving shape.',
    keywords: ['GPS', 'trajectory simplification', 'quadtree'],
    schematic: 'trajectory',
  },
  '2022-1-31-ceus-bruehwiler-etal': {
    takeaway: 'Trajectories, driving events and geographic context predict individual car-accident risk.',
    keywords: ['car-accident risk', 'trajectories', 'driving events'],
    schematic: 'trajectory',
  },
  '2023-1-24-gsis-zhao-etal': {
    takeaway: 'Survey-based modeling reveals urban–rural gaps in daily mobility during COVID-19.',
    keywords: ['COVID-19', 'daily mobility', 'urban–rural', 'China'],
    schematic: 'trajectory',
  },
  '2023-4-11-cagis-conrow-etal': {
    takeaway: 'A conceptual framework for dashboards that make big mobility data usable.',
    keywords: ['dashboards', 'big mobility data', 'visual analytics'],
    schematic: 'dashboard',
  },
  '2023-09-11-re-he-etal': {
    takeaway: 'Large-scale solar-PV projects measurably reduced poverty across Chinese counties.',
    keywords: ['photovoltaic', 'poverty reduction', 'renewable energy'],
    schematic: 'solar-field',
  },
  '2023-11-14-cagis-fu-etal': {
    takeaway: 'Data model and training-set size, not architecture, drive deep-learning building generalization.',
    keywords: ['building generalization', 'deep learning', 'data model'],
    schematic: 'buildings',
  },
  '2024-06-20-ijgis-fu-etal': {
    takeaway: 'Explainable AI shows a ResU-Net learns building boundaries, not interiors.',
    keywords: ['map generalization', 'XAI', 'deep learning', 'U-Net'],
    schematic: 'buildings',
  },
  '2024-12-01-zhou-fu-weibel': {
    takeaway: 'A spatially-aware generative network generalizes building shapes while preserving context.',
    keywords: ['GAN', 'building generalization', 'image maps'],
    schematic: 'gan',
  },
  '2025-6-17-he-fu-ye': {
    takeaway: 'Solar photovoltaic projects lifted households out of poverty in Huoshan County.',
    keywords: ['photovoltaic', 'poverty alleviation', 'China'],
    schematic: 'solar-field',
  },
  '2026-02-18-ijgis-zhou-etal': {
    takeaway: 'A research agenda for GeoAI in multi-scale cartographic map generalization.',
    keywords: ['GeoAI', 'map generalization', 'multi-scale cartography'],
    schematic: 'map-scale',
  },
  '2026-07-10-jgsa-han-etal': {
    takeaway: 'Modelling move segments, not just stops, improves place-location detection.',
    keywords: ['place detection', 'move segments', 'trajectories'],
    schematic: 'trajectory',
  },
};
```

- [ ] **Step 2: Type-check**

Run: `npm run check`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/graphicalAbstracts.ts
git commit -m "feat: add graphical-abstract data for first/corresponding-author journal papers"
```

---

### Task 2: `Schematic.astro` SVG library

**Files:**
- Create: `src/components/Schematic.astro`

- [ ] **Step 1: Create the component**

```astro
---
import type { SchematicId } from '../data/graphicalAbstracts';

interface Props { id: SchematicId; }
const { id } = Astro.props;
---
<svg
  viewBox="0 0 120 80"
  role="img"
  aria-hidden="true"
  fill="none"
  stroke="currentColor"
  stroke-width="2.5"
  stroke-linejoin="round"
  stroke-linecap="round"
  style="display:block;width:100%;height:auto"
>
  {id === 'buildings' && (
    <>
      <rect x="8" y="30" width="24" height="24" />
      <rect x="36" y="22" width="20" height="20" stroke-width="4.5" />
      <rect x="60" y="30" width="28" height="24" />
      <rect x="20" y="58" width="16" height="14" />
      <rect x="52" y="56" width="30" height="16" />
    </>
  )}
  {id === 'map-scale' && (
    <>
      <rect x="10" y="14" width="70" height="52" />
      <rect x="22" y="24" width="46" height="32" stroke-width="1.5" opacity="0.6" />
      <rect x="32" y="32" width="26" height="16" stroke-width="4.5" />
      <line x1="92" y1="18" x2="92" y2="62" />
      <line x1="87" y1="18" x2="97" y2="18" />
      <line x1="87" y1="62" x2="97" y2="62" />
    </>
  )}
  {id === 'network' && (
    <>
      <line x1="20" y1="20" x2="60" y2="40" />
      <line x1="60" y1="40" x2="100" y2="18" />
      <line x1="60" y1="40" x2="40" y2="66" />
      <line x1="60" y1="40" x2="95" y2="60" />
      <circle cx="20" cy="20" r="6" />
      <circle cx="100" cy="18" r="6" />
      <circle cx="40" cy="66" r="6" />
      <circle cx="95" cy="60" r="6" />
      <circle cx="60" cy="40" r="8" stroke-width="4.5" />
    </>
  )}
  {id === 'trajectory' && (
    <>
      <polyline points="8,60 30,30 52,52 76,18 100,40 112,26" />
      <circle cx="30" cy="30" r="4" fill="currentColor" stroke="none" />
      <circle cx="76" cy="18" r="4" fill="currentColor" stroke="none" />
    </>
  )}
  {id === 'raster-grid' && (
    <>
      <rect x="10" y="18" width="30" height="20" />
      <rect x="45" y="18" width="30" height="20" />
      <rect x="80" y="18" width="30" height="20" />
      <rect x="10" y="44" width="30" height="20" />
      <rect x="45" y="44" width="30" height="20" stroke-width="4.5" />
      <rect x="80" y="44" width="30" height="20" />
    </>
  )}
  {id === 'land-cover' && (
    <>
      <rect x="8" y="16" width="40" height="28" />
      <rect x="52" y="16" width="28" height="28" />
      <rect x="84" y="16" width="28" height="28" />
      <rect x="8" y="48" width="30" height="24" />
      <rect x="42" y="48" width="38" height="24" />
      <rect x="84" y="48" width="28" height="24" />
    </>
  )}
  {id === 'solar-field' && (
    <>
      <circle cx="96" cy="16" r="8" />
      <line x1="96" y1="2" x2="96" y2="0" />
      <line x1="110" y1="16" x2="118" y2="16" />
      <line x1="106" y1="6" x2="112" y2="2" />
      <rect x="14" y="34" width="26" height="18" />
      <rect x="46" y="34" width="26" height="18" />
      <rect x="14" y="58" width="58" height="14" />
    </>
  )}
  {id === 'dashboard' && (
    <>
      <rect x="10" y="14" width="100" height="52" />
      <rect x="20" y="44" width="10" height="16" fill="currentColor" stroke="none" />
      <rect x="36" y="34" width="10" height="26" fill="currentColor" stroke="none" />
      <rect x="52" y="40" width="10" height="20" fill="currentColor" stroke="none" />
      <polyline points="72,50 82,36 92,44 102,26" />
    </>
  )}
  {id === 'gan' && (
    <>
      <rect x="12" y="26" width="36" height="28" />
      <rect x="72" y="26" width="36" height="28" stroke-width="4.5" />
      <line x1="52" y1="40" x2="68" y2="40" />
      <polygon points="66,35 73,40 66,45" fill="currentColor" stroke="none" />
    </>
  )}
</svg>
```

- [ ] **Step 2: Type-check**

Run: `npm run check`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Schematic.astro
git commit -m "feat: add inline-SVG schematic library for graphical abstracts"
```

---

### Task 3: `GraphicalAbstract.astro` (template A) + styles

**Files:**
- Create: `src/components/GraphicalAbstract.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create the component**

```astro
---
import type { Publication } from '../data/publications';
import type { GraphicalAbstract } from '../data/graphicalAbstracts';
import { researchAreas } from '../data/researchAreas';
import { type Lang } from '../i18n/utils';
import Schematic from './Schematic.astro';

interface Props {
  paper: Publication;
  entry: GraphicalAbstract;
  lang: Lang;
}
const { paper, entry, lang } = Astro.props;
const area = researchAreas.find((a) => a.id === paper.theme);
---
<figure class="gabstract" style={`--ga-color:var(--theme-${paper.theme})`}>
  <div class="gabstract__panel">
    <span class="gabstract__theme">{area?.label[lang] ?? ''}</span>
    <div class="gabstract__schematic"><Schematic id={entry.schematic} /></div>
  </div>
  <div class="gabstract__body">
    <p class="gabstract__takeaway">{entry.takeaway}</p>
    <div class="gabstract__foot">
      <span>{entry.keywords.join(' · ')}</span>
      <span>{paper.venue} · {paper.year}</span>
    </div>
  </div>
</figure>
```

- [ ] **Step 2: Append styles to `src/styles/global.css`**

```css
.gabstract { display: grid; grid-template-columns: minmax(180px, 30%) 1fr; border: 1px solid var(--rule); background: var(--bg); margin: 0 0 var(--space-5); }
.gabstract__panel { background: var(--ga-color); color: #fff; padding: var(--space-4); display: flex; flex-direction: column; justify-content: space-between; gap: var(--space-4); min-height: 190px; }
.gabstract__theme { font-family: var(--font-mono); font-size: var(--step--1); letter-spacing: 0.12em; text-transform: uppercase; line-height: 1.5; }
.gabstract__schematic { width: 100%; max-width: 150px; }
.gabstract__body { padding: var(--space-4) var(--space-5); display: flex; flex-direction: column; gap: var(--space-4); }
.gabstract__takeaway { font-size: var(--step-2); font-weight: 700; letter-spacing: -0.02em; line-height: 1.12; margin: 0; }
.gabstract__foot { margin-top: auto; display: flex; justify-content: space-between; gap: var(--space-3); flex-wrap: wrap; font-family: var(--font-mono); font-size: var(--step--1); color: var(--muted); }
@media (max-width: 640px) {
  .gabstract { grid-template-columns: 1fr; }
  .gabstract__panel { flex-direction: row; align-items: center; justify-content: flex-start; min-height: 0; }
  .gabstract__schematic { max-width: 96px; }
}
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: succeeds (component unused so far, but compiles).

- [ ] **Step 4: Commit**

```bash
git add src/components/GraphicalAbstract.astro src/styles/global.css
git commit -m "feat: add template-A graphical-abstract card component and styles"
```

---

### Task 4: Render the hero on the paper detail page

**Files:**
- Modify: `src/components/PublicationDetail.astro`

- [ ] **Step 1: Add imports and lookup**

In the frontmatter, after `import { useTranslations, type Lang } from '../i18n/utils';`, add:

```ts
import GraphicalAbstract from './GraphicalAbstract.astro';
import { graphicalAbstracts } from '../data/graphicalAbstracts';
```

After `const area = researchAreas.find((a) => a.id === pub.theme);`, add:

```ts
const ga = graphicalAbstracts[pub.slug];
```

- [ ] **Step 2: Render the hero**

Replace this block:

```astro
    {area && (
      <p>
        <span class="theme-tag" style={`color:var(--theme-${pub.theme})`}>{area.label[lang]}</span>
      </p>
    )}
    <hr class="rule" />
```

with:

```astro
    {area && (
      <p>
        <span class="theme-tag" style={`color:var(--theme-${pub.theme})`}>{area.label[lang]}</span>
      </p>
    )}
    {ga && <GraphicalAbstract paper={pub} entry={ga} lang={lang} />}
    <hr class="rule" />
```

- [ ] **Step 3: Build and spot-check**

Run: `npm run build`
Expected: succeeds. Then confirm:
- `dist/publications/2024-06-20-ijgis-fu-etal/index.html` contains `class="gabstract"`
- `dist/publications/2026-04-01-jgsa-senn-etal/index.html` (Senn is first author) does **not** contain `gabstract`

- [ ] **Step 4: Commit**

```bash
git add src/components/PublicationDetail.astro
git commit -m "feat: show graphical abstract on first/corresponding-author paper pages"
```

---

### Task 5: Full verification

- [ ] **Step 1: Check + build**

Run: `npm run check; npm run build`
Expected: 0 errors; build completes.

- [ ] **Step 2: Confirm exactly the 13 pages render the hero**

Run (PowerShell, from the `site` folder):

```powershell
$slugs = @(
  '2018-7-27-ceus-fu-etal','2019-12-11-rs-fu-song-stewart','2020-6-16-ijgis-fu-huang-weibel',
  '2022-1-31-ceus-bruehwiler-etal','2023-1-24-gsis-zhao-etal','2023-4-11-cagis-conrow-etal',
  '2023-09-11-re-he-etal','2023-11-14-cagis-fu-etal','2024-06-20-ijgis-fu-etal',
  '2024-12-01-zhou-fu-weibel','2025-6-17-he-fu-ye','2026-02-18-ijgis-zhou-etal','2026-07-10-jgsa-han-etal'
)
foreach ($s in $slugs) {
  $hit = Select-String -Path "dist/publications/$s/index.html" -Pattern 'class="gabstract"' -Quiet
  "$s : $hit"
}
```

Expected: all 13 `True`.

- [ ] **Step 3: Confirm no other paper has a hero**

```powershell
(Select-String -Path "dist/publications/*/index.html" -Pattern 'class="gabstract"' | Select-Object -ExpandProperty Path | Sort-Object -Unique).Count
```

Expected: `13`.

- [ ] **Step 4: Manual visual check**

Open `http://localhost:4321/publications/2024-06-20-ijgis-fu-etal` and its `/zh/` counterpart; confirm the card renders, is responsive, and the theme colour matches.

---

## Self-review notes

- Spec §2 (13 papers) covered by Task 1 data + Task 4 gating. Spec §3–§6 (component, data, schematics, placement) covered by Tasks 1–4. Spec §7 (content sourcing) reflected in the Task-1 takeaways (owner reviews). Spec §9 (verification) covered by Task 5.
- No image files are created (spec §3, §8). Conference papers are not touched (spec §2).
- Takeaways/keywords are English; theme label is bilingual via `researchAreas` (spec §4).
