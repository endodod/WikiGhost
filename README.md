# Phasmowiki

Phasmowiki is a fast, single-page reference and elimination tool for **Phasmophobia**. It's built to be used *while you're playing* — deep-linkable URLs, back-button-aware navigation, keyboard-light interactions, and a "Find My Ghost" tool that narrows down the culprit as you feed it evidence, sanity, speed, and behavioral tells.

The app is statically exported (`output: "export"`), so the whole site is pre-rendered HTML/JS with no server required at runtime.

## Features

### Find My Ghost (elimination tool)
The home tab. A live elimination workflow for identifying the ghost in a contract:

- Toggle each of the 7 evidence types as **found** or **ruled out**, with a selector for how many evidence types the contract's difficulty actually shows (0–3, for high-difficulty/no-evidence runs)
- **Sanity filter** — enter an observed sanity reading to eliminate ghosts whose hunt threshold doesn't match
- **Speed filter** — bucket the ghost's movement speed as slow/normal/fast
- **Speed Finder tool** — a stopwatch-style helper for timing ghost movement to narrow candidates by exact speed
- **Tells checklist** — toggle observed clues/behaviors (e.g. specific hunt conditions, smudge behavior) which keep or eliminate ghosts per clue
- Manual highlight/cross-out on individual candidates for tells the tool doesn't model
- A **Next Step panel** suggesting the most useful next evidence/test to run given current candidates
- Click any remaining candidate to open its full detail view, or jump straight to it in the Ghost Wiki

### Ghost Wiki
Reference and searchable table/card view for all 30 ghosts, including:
- The 3 true evidence types (and The Mimic's ability to fake a 4th)
- Hunt sanity thresholds and hunt speed conditions
- Gender restriction, smudge behavior, re-hunt cooldown
- Abilities and ranked no-evidence-tool identification tells
- A "top 3 identifiers" summary used by the compact elimination-tool detail view

### Item Wiki
- **Starter and optional equipment** with tier (I/II/III) stats, unlock info, and a recommended "best pick" tier
- **Truck items** and their function
- **Cursed possessions**, each with its own structured breakdown (sections, bullet lists, and tables as needed)

### Map Wiki
Reference cards/details for all 15 maps, from small houses through Sunny Meadows (restricted and full) and the Prison/Asylum-scale maps.

### Objectives Wiki
Reference for contract objectives.

### Guides
Longer-form strategy walkthroughs with step-by-step chapters, e.g.:
- **Zero-Evidence Investigation Walkthrough** — an 18-step process (base speed → Jinn test → salt → LOS acceleration → blink pattern → model → throw force → ghost-specific checks → orb check → smudge test → etc.) for identifying a ghost with no evidence tools
- **Perfect Investigation** — how to correctly identify the ghost, complete all 3 optional objectives, find the Bone, and fill the journal with only Unique media (with per-equipment shot-count breakdowns and room-sweep strategy)

Ghost names inside guide text are auto-linked to their wiki entries.

### Game selector
A game switcher in the header for Phasmophobia and two other titles (Abnormality, The Other Side) that are wired up as "coming soon" placeholders, so the app can grow beyond a single game later.

### Navigation model
All tab switches, game switches, and detail-view selections (a selected ghost, item, map, or guide chapter) are synced to the URL query string via a custom history-backed hook ([useUrlParams](src/lib/useUrlParams.ts)). This means:
- Every state is deep-linkable/shareable
- Browser back/forward steps through your navigation naturally
- Cross-tab "jump" links (e.g. opening a ghost from inside a guide) set the destination tab and selection as a single history step
- Switching away from a tab clears that tab's stale selection param so returning to it doesn't reopen an old detail view — except guide position, which is intentionally remembered

## Tech stack

- [Next.js 16](https://nextjs.org/) (static export, App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- [lucide-react](https://lucide.dev/) for icons

> **Note:** This repo pins a pre-release/breaking version of Next.js. Check `node_modules/next/dist/docs/` for the APIs and conventions actually in use before assuming anything matches the public Next.js docs you may already know.

## Project structure

```
src/
  app/                    Next.js App Router entry (layout, page, global styles)
  components/
    AppShell.tsx          Top-level tab/game routing, wired to the URL
    eliminate/            Find My Ghost tool (filters, speed finder, tells, results)
    wiki/                 Ghost Wiki (table/card views, detail view)
    items/                Item Wiki (equipment, truck items, cursed possessions)
    maps/                 Map Wiki
    objectives/           Objectives Wiki
    guides/               Strategy guides
    shared/                Reusable UI: search, badges, modals, game shell/selector, etc.
  data/                   Static content: ghosts, items, maps, objectives, guides, clues, evidence
  lib/                    Types, filtering/elimination logic, search, URL-param hook, misc utilities
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static production export (outputs to `out/`) |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Data model

All game content lives in plain TypeScript objects under [src/data/](src/data), typed against the shared definitions in [src/lib/types.ts](src/lib/types.ts) — there is no backend or database. The elimination logic that powers Find My Ghost lives in [src/lib/filter.ts](src/lib/filter.ts), which evaluates every ghost against the current evidence/sanity/speed/clue state and returns a verdict per candidate.

To add or edit game content (a ghost, map, item, objective, or guide), edit the corresponding file in `src/data/` — the UI reads directly from these arrays.
