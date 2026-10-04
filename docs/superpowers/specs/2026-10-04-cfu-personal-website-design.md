# Dr. Cheng Fu — New Personal Academic Website (Astro) — Design Spec

- **Date:** 2026-10-04
- **Status:** Draft for review
- **Author:** Brainstorming session with Dr. Cheng Fu
- **Supersedes:** the existing academicpages/Jekyll site in `cfu1.github.io/`

## 1. Context

The current site is a fork of the academicpages / Minimal Mistakes Jekyll template,
hosted on GitHub Pages at `https://cfu1.github.io/`. The source is tracked in the nested
git repo `cfu1.github.io/` (`origin` = `cfu1/cfu1.github.io`, `upstream` = the
academicpages template). The local working copy is 32 commits behind `origin/master`
and 1 commit ahead. Content today: About, Publications, Talks, Teaching, Students, CV.

The owner is moving from the University of Zurich to a professorship at the College of
Information and Electrical Engineering, China Agricultural University, and is gradually
steering research toward agriculture.

The redesign must (from `readme.md`): adopt a Swiss International style, add lab /
research-unit members (graduate students, plus records of prior students at earlier
institutions), add a research-projects section, add conference papers, and allow
graphical abstracts on paper pages. Additional requirements gathered during
brainstorming: bilingual English + Chinese, and a worldwide visitor map on the homepage.

## 2. Goals

- Rebuild as a modern, maintainable static site (Astro) that keeps adding content as
  easy as adding a Markdown file.
- Swiss International visual language: light editorial, strict grid, hairline rules,
  grotesque type, monospace metadata.
- Full navigation: Home · Research · People · Projects · Publications · Talks · Teaching · CV.
- 5 research themes, each colour-coded; papers tagged by theme (Palette B, earthy).
- People as data: current members and alumni from prior institutions, with optional
  profile pages.
- Projects as data: funded work with list + detail pages.
- Graphical abstracts: thumbnail in listings, full-width hero on detail pages (optional
  per paper).
- Bilingual: English at `/`, Chinese at `/zh/`.
- A worldwide visitor map widget on the homepage.
- Preserve existing English URLs so Scholar links and bookmarks keep working.
- Deploy automatically to GitHub Pages.

## 3. Non-goals (v1)

- No CMS / browser-based content editing.
- No comments, no blog/news feed, no newsletter.
- No translation of published records (paper titles, venues, abstracts remain English).
- No SSR / server runtime; fully static output.
- No redesign of the CV into an interactive résumé beyond localized sections.

## 4. Decisions summary

| Topic | Decision |
|---|---|
| Location | New independent folder `personal_web/site/`; its contents become the `cfu1.github.io` repo root when the owner replaces the legacy folder |
| Framework | Astro (static), content collections with typed schemas |
| Styling | Hand-written CSS design tokens + scoped component styles (no Tailwind) |
| Fonts | Self-hosted Inter (grotesque) + IBM Plex Mono (labels/metadata) |
| Hosting | GitHub Pages via GitHub Actions, same repo `cfu1.github.io` |
| URL root | English at `/`, Chinese at `/zh/`; existing EN URLs preserved |
| Translation scope | UI + site pages translated; published records stay English |
| People | Collection + optional profile pages; current + alumni |
| Projects | Collection + detail pages |
| Graphical abstract | Listing thumbnail + detail hero, optional per paper |
| Theme colours | Palette B (earthy editorial) |
| Visitor map | Free third-party embed widget, homepage block, lazy-loaded |
| Migration source | Latest `origin/master` of `cfu1/cfu1.github.io` |

## 5. Architecture

Astro static site in a new, independent folder: `personal_web/site/`. It is built and
tested in isolation and does **not** modify the legacy `cfu1.github.io/` folder. When
the site is ready, the owner replaces the whole `cfu1.github.io/` folder/repo with the
contents of `site/`. Content lives in typed **content collections**; global/structured
bits live in TypeScript data modules.

```
site/
  astro.config.mjs        # site, trailingSlash, i18n, sitemap
  package.json
  src/
    pages/                # EN routes (/, /research/, /people/, /projects/, ...)
      zh/                 # ZH routes (/zh/...)
    content/              # publications, people, projects, talks, teaching
    content.config.ts     # Zod schemas per collection
    components/           # SiteHeader, SiteFooter, PaperEntry, ThemeTag, ...
    layouts/              # BaseLayout (+ hreflang), Prose
    styles/               # tokens.css, global.css
    i18n/                 # en.ts, zh.ts, helpers (t, getLangFromUrl, getAltPath)
    data/                 # site.ts, researchAreas.ts, cv.ts, navigation.ts
    assets/               # images referenced by content (graphical abstracts, photos)
  public/                 # files/, favicon, robots.txt
  docs/superpowers/specs/ # this spec
```

### Sub-approach considered

- **A. Content collections (chosen)** — one Markdown file per record, Zod-validated
  frontmatter; adding content = adding a file.
- B. Astro + headless CMS — rejected: extra auth/build dependency for little benefit.
- C. Collections + Astro DB — rejected: overkill for a static personal site.

## 6. Information architecture & URLs

Navigation (localized labels): **Home · Research · People · Projects · Publications ·
Talks · Teaching · CV**. Alumni is a sub-page of People. No lab brand; it is Dr. Fu's
personal academic site with a People section.

| Page | EN URL | ZH URL | Notes |
|---|---|---|---|
| Home | `/` | `/zh/` | About + highlights + visitor map |
| Research | `/research/` | `/zh/research/` | The 5 themes |
| People | `/people/` | `/zh/people/` | Current members |
| Alumni | `/people/alumni/` | `/zh/people/alumni/` | Former students by year/institution |
| Projects | `/projects/` | `/zh/projects/` | List, grouped ongoing/completed |
| Project detail | `/projects/<slug>` | `/zh/projects/<slug>` | |
| Publications | `/publications/` | `/zh/publications/` | Filter by type and theme |
| Paper detail | `/publications/<slug>` | `/zh/publications/<slug>` | Graphical abstract hero |
| Talks | `/talks/` | `/zh/talks/` | |
| Talk detail | `/talks/<slug>` | `/zh/talks/<slug>` | |
| Teaching | `/teaching/` | `/zh/teaching/` | |
| Teaching detail | `/teaching/<slug>` | `/zh/teaching/<slug>` | |
| CV | `/cv/` | `/zh/cv/` | |

**Redirect stubs (static HTML redirects)** for paths that change:
`/students/` & `/students.html` → `/people/`; `/about/` & `/about.html` → `/`;
`/resume` → `/cv/`; `/portfolio/` → `/`. English publication/talk/teaching URLs are
unchanged.

## 7. Internationalization

- `astro.config.mjs`: `i18n: { defaultLocale: 'en', locales: ['en', 'zh'],
  routing: { prefixDefaultLocale: false } }`.
- UI strings: `src/i18n/en.ts` and `src/i18n/zh.ts`, accessed via `t(key, lang)`.
  Helpers: `getLangFromUrl(url)`, `getAltPath(url)` (counterpart language URL).
- Header language toggle (EN | 中文) linking to the counterpart page.
- `<html lang>` set per locale; `<link rel="alternate" hreflang="en|zh|x-default">`
  emitted in `BaseLayout`.
- Pages are localized Astro templates using the dictionary; structured records use
  `translationKey` + `lang` when a translated counterpart exists and are otherwise
  English-only.
- Translated: nav, buttons, section intros, Home, Research theme names/blurbs, People &
  Alumni copy, Projects (title/summary/body), CV. Person bios optional per person.
- Not translated: publication/talk/teaching records.

## 8. Data model

### 8.1 Global data modules (`src/data/`)

`site.ts` — name, title, employer, location, email, and links (Google Scholar, ORCID,
LinkedIn, GitHub, ResearchGate).

`researchAreas.ts` — the 5 themes. Palette B colours:

| id | label (EN) | colour |
|---|---|---|
| `mobility-health` | Human mobility & health | `#3B5BA5` |
| `generalization-geoai` | Cartographic generalization & GeoAI | `#C0492F` |
| `place-giscience` | Place modeling & GIScience | `#7A4A6B` |
| `urban-analytics` | Urban analytics & big data | `#C08A2E` |
| `agri-environment` | Agricultural & environmental spatial systems | `#5E7A3A` |

Each area also carries `label_zh`, `desc_en`, `desc_zh`, `order`. Agriculture is the
forward-looking focus and may be ordered/promoted high on the homepage.

`cv.ts` — localized sections: education, positions, awards, service & leadership,
grant review, program committees, memberships.

`navigation.ts` — localized nav items.

### 8.2 Collections (`src/content/`, Zod schemas in `content.config.ts`)

**publications**

```yaml
---
title: "Reasoning cartographic knowledge in deep learning-based map generalization with explainable AI"
authors: ["Fu, C.", "Zhou, Z.Y.", "Xin, Y.N.", "Weibel, R."]
venue: "International Journal of Geographical Information Science"
year: 2024
date: 2024-06-20
type: journal                 # journal | conference | academic
theme: generalization-geoai   # one of the 5 theme ids
doi: "10.1080/13658816.2024.2369535"
paperurl: "https://doi.org/10.1080/13658816.2024.2369535"
pdf: ""                       # optional
code: ""                      # optional
data: ""                      # optional
graphicalAbstract: "./graphical-abstract.png"   # optional, co-located asset
citation: "Fu, C., Zhou, Z.Y., Xin, Y.N., & Weibel, R. (2024). ..."
featured: false
relatedProjects: []
lang: en
---
## Abstract
...
```

**people**

```yaml
---
name: "Changyu Han"
role: phd                     # pi | postdoc | phd | msc | visiting | alumni
status: current               # current | alumni
startYear: 2022
endYear:                      # required when status = alumni
affiliation: ""               # e.g. "University of Zurich" for alumni
thesisTitle: "..."
advisors: ["Cheng Fu"]
currentPosition: ""           # required when status = alumni
photo: "./changyu.jpg"        # optional
email: ""
links: { scholar: "", orcid: "", website: "", github: "" }
bio_en: ""
bio_zh: ""                    # optional
order: 1
lang: en
---
```

**projects**

```yaml
---
translationKey: "agri-remote-sensing"   # links EN/ZH counterparts
lang: en
title: "..."
title_zh: "..."
funder: "NSFC"
period: "2024–2027"
role: "PI"
status: ongoing                # ongoing | completed
theme: agri-environment
team: ["changyu-han"]          # references people slugs
partners: []
summary: "..."
summary_zh: "..."
graphicalAbstract: "./fig.png"
figures: []
links: { website: "" }
relatedPublications: ["2024-06-20-ijgis-fu-etal"]
---
Project body (Markdown). A parallel `lang: zh` file holds the Chinese body.
```

**talks** / **teaching** — same fields as today (title, type, venue, location, date,
plus optional links). English only.

## 9. Design system

- **Colour tokens:** ink `#111`, background `#fff`, muted `#666`, rule `#E2E2E2`.
  Theme colour used only as a thin rule, small uppercase tag, and detail-page tag —
  never as a large fill. Five theme colours per §8.1.
- **Type:** Inter for text and display; IBM Plex Mono for labels, numbers, metadata.
  Type scale for display / h2 / h3 / body / caption; ~72ch measure for prose.
- **Layout:** page max-width ~1200px, 12-column grid, generous whitespace, hairline
  rules, numbered section headers (`01–05`), uppercase mono section labels.
- **Components:** `SiteHeader` (nav + language toggle), `SiteFooter`, `SectionHeader`,
  `ThemeTag`, `PaperEntry` (rule + theme tag + graphical-abstract thumbnail),
  `PersonCard`/`PersonRow`, `ProjectCard`, `VisitorMap`, `Prose`. Graphical-abstract
  images are content assets optimized with Astro `<Image>`.

## 10. Visitor map

- A compact **Visitors** block near the bottom of the homepage (both locales), using a
  free third-party world-map widget (candidate providers: MapMyVisitors, RevolverMaps).
- Lazy-loaded inside a fixed-size container to avoid layout shift.
- Provider isolated behind one `VisitorMap` component so it can be swapped without
  touching pages.
- **Risk:** some widgets are slow or blocked from mainland China. Mitigation: test
  reachability to a Chinese audience; if it fails to load, hide the block via the
  component (no broken layout).

## 11. Migration

- **Source of truth:** latest `origin/master` of `cfu1/cfu1.github.io`. Migration reads
  from a fetched copy of that repo into the independent `site/` folder; the local legacy
  `cfu1.github.io/` working copy is left untouched. Reconcile the local diverged commit
  and the two newer local publication files when fetching.
- A one-off Node script (run from `site/`) converts the legacy `_publications/`,
  `_talks/`, `_teaching/` frontmatter to Astro collection files under `site/src/content/`
  (mapping `pubtype` → `type`; inferring `theme` — default `generalization-geoai` for the
  existing corpus, flagged for manual review; leaving `graphicalAbstract` empty).
- `_pages/students.md` (hand-maintained prose) and `_pages/cv.md` are converted by hand
  into `people` entries and `cv.ts` data.
- `_pages/about.md`, `_config.yml` author/social values migrate into `site.ts` and the
  homepage.
- The legacy Jekyll files (`_includes/`, `_layouts/`, `_sass/`, `_data/`, `_pages/`,
  `Gemfile`, `_config*.yml`, Jekyll collections) are not carried into `site/`; they
  disappear when the owner replaces the whole `cfu1.github.io/` folder.

## 12. Build & deployment

- The project lives in the independent `personal_web/site/` folder. The owner replaces
  the legacy `cfu1.github.io/` repo root with the folder's contents; the project is
  authored so that, once in place, it builds and deploys from the repo root.
- `astro.config.mjs`: `site: 'https://cfu1.github.io'`, `base: '/'`,
  `trailingSlash: 'ignore'`, `@astrojs/sitemap`.
- Deploy via a GitHub Actions workflow (Pages source = GitHub Actions) that runs
  `npm ci && npm run build` and publishes `dist/` on push to `master`; the workflow ships
  inside `site/` so it is active as soon as the folder becomes the repo root.
- `.gitignore` adds `node_modules/`, `dist/`, `.astro/`.
- Local workflow: `npm install` → `npm run dev` (`localhost:4321`) → `npm run build`
  → `npm run preview`.
- `Gemfile.lock` / Jekyll dependencies are no longer used.

## 13. Verification

- `npm run build` completes clean; `astro check` passes.
- Spot-check that preserved English URLs resolve (seeded list: home, `/cv/`,
  a sample publication, talk, teaching entry) and that redirect stubs work
  (`/students/` → `/people/`, `/about/` → `/`).
- Manual check of both locales, the language toggle, and `hreflang` tags.
- Confirm the visitor-map block loads (and hides cleanly when blocked).
- Responsive check at mobile / tablet / desktop widths.
- No test framework; a clean build plus these manual checks is the verification bar.

## 14. Phasing

1. **Foundation** — create the independent `site/` folder, scaffold Astro there, design
   tokens + BaseLayout / SiteHeader / SiteFooter, i18n wiring (EN + ZH), homepage
   skeleton, GitHub Actions deploy; migrate About + CV.
2. **Publications + themes + graphical abstracts** — schemas, theme colours, listing +
   detail, thumbnail + hero; migrate publications; preserve URLs.
3. **Talks + Teaching** — migrate, pages, URLs.
4. **People** — current + Alumni + profiles; migrate students.
5. **Projects** — list + detail; homepage featured projects.
6. **Polish** — redirect stubs, sitemap/SEO + `hreflang`, image optimization,
   visitor-map block, accessibility and performance pass.

## 15. Risks & open questions

- Visitor-widget reachability from mainland China; provider choice deferred to Phase 6.
- Reconciling the diverged `master` and confirming which local commits to keep.
- Large existing corpus needs manual `theme` tagging during migration.
- Self-hosted fonts add build assets; keep to one grotesque + one mono.
