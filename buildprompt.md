# Build Prompt: FindGhostFast — Phasmophobia Ghost Identification Web App

## 1. Project Summary

Build **FindGhostFast**, a fast, modern, single-page web app that helps Phasmophobia players identify which of the 27 ghost types they're facing, both as a **pure wiki reference** and as an **in-game elimination tool** used mid-match under time pressure.

Two core modes, one shared dataset:

1. **Wiki Mode** — browsable, searchable, sortable encyclopedia of all 27 ghosts with every mechanic, ability, and no-evidence tell.
2. **Elimination Mode ("Find My Ghost")** — an interactive checklist/filter tool. The player taps evidence found, observed hunt speed, sanity thresholds, and behavioral tells; the tool crosses out (visually strikes through, not just hides) ghosts that no longer match, live, in real time.

Target user: mid-game, phone or second monitor open, needs answers in under 10 seconds per tap. Prioritize speed, clarity, and zero friction over visual flourish — but should still look like a modern, designed product, not a spreadsheet.

## 2. Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Ghost data as a typed static JSON/TS module (no backend/database needed — all client-side, instant filtering)
- Deployable as a static site

## 3. Data Model

Define a `Ghost` type covering every attribute below. Use structured fields (enums/arrays), not prose blobs, so the elimination filter can query them programmatically.

```ts
interface Ghost {
  id: string;
  name: string;
  evidences: [Evidence, Evidence, Evidence]; // from the 7 evidence types
  hunt: {
    sanityThresholds: HuntSanityCondition[]; // supports conditional thresholds (see below)
    speeds: HuntSpeedCondition[]; // supports conditional/multi-state speeds
  };
  genderRestriction?: "female" | null;
  smudgeBehavior?: string; // blind duration / special smudge rules
  reHuntCooldown?: string; // default 90s (25s "quiet" wait between hunts is separate — see Demon)
  abilities: string[]; // free-form list of unique mechanics
  noEvidenceTells: string[]; // how to ID with zero evidence
  guaranteedEvidenceOnHighDifficulty?: Evidence; // Nightmare/Insanity forced evidence
  notes?: string;
}

type Evidence = "EMF5" | "UV" | "GhostOrbs" | "SpiritBox" | "GhostWriting" | "Freezing" | "DOTS";
```

Some ghosts (Dayan, Gallu, Hantu, Jinn, Mare, Moroi, Obambo, Raiju, Revenant, The Twins, Thaye, The Mimic) have **conditional/multi-state speed or sanity** — model these as arrays of `{condition: string, value: number}` so the UI can show "if X, then Y m/s" clearly instead of a single flattened number.

## 4. Full Ghost Dataset (source: current in-game mechanics, 27 ghosts)

For each ghost below: Evidence · Hunt Sanity · Hunt Speed(s) · Key Behaviors/Abilities · No-Evidence Tell(s). Use this as the seed data — every line item should become a filterable attribute.

1. **Banshee** — UV, Orbs, DOTS. Hunts ≤50% sanity. Speed 1.7 m/s. Picks one target at contract start and stalks only them (host is 2nd pick if not 1st); 66% chance to roam toward target, can't cross floors without an EMF trigger from target; favors Singing events; **female model/name only**. Tell: parabolic mic/sound recorder — 33% chance of a distinct "banshee wail."
2. **Dayan** — EMF5, Orbs, Spirit Box. Sanity: 65% (target walking, near), 45% (target still, near), 50% (all players far). Speed: 2.25 m/s / 1.2 m/s / 1.7 m/s matching those states. **Female model/name only**. Tell: entirely speed-pattern based (test proximity + movement).
3. **Demon** — UV, Orbs, Freezing. Can hunt at *any* sanity via its ability; normal threshold 70%. Speed 1.7 m/s. Crucifix range +50%/tier. Tell: only ghost that can re-hunt 20s after previous hunt/crucifix use (others wait 25s); only needs 60s after a smudge (others need 90s).
4. **Deogen** — Spirit Box, Ghost Writing, DOTS. Hunts ≤40% sanity. Speed inverts with distance: 3.0 m/s far → slows to 0.4 m/s as it closes in. Always has line of sight — cannot be hidden from, only outrun/looped. Tell: spirit box within 1m has 33% chance of a unique breathing response; Spirit Box is forced evidence on Nightmare/Insanity.
5. **Gallu** — EMF5, UV, Spirit Box. Three-state cycle: Normal (50% sanity, 1.7 m/s) → Enraged (60%, 1.96 m/s, triggered by salt/incense/crucifix, smudge-blind only 4s, crucifix range −2m, won't disturb salt) → Weakened (40%, 1.36 m/s, after hunt ends, smudge-blind 6s, crucifix range +1m, disturbs salt normally) → back to Normal.
6. **Goryo** — EMF5, UV, DOTS (DOTS only visible via video camera with nobody in the room). Hunts ≤50%. Speed 1.7 m/s. Cannot change favorite room — a room change rules it out. Tell: DOTS trigger more often than any other ghost; guaranteed on Nightmare/Insanity.
7. **Hantu** — UV, Orbs, Freezing. Hunts ≤50%. Speed 2.7 m/s in cold rooms, 1.4 m/s in warm rooms; no line-of-sight speedup. More likely to turn breaker off, cannot turn it on. Tell: visible freezing breath during hunts when breaker is off/broken; Freezing forced-evidence on Nightmare/Insanity.
8. **Jinn** — EMF5, UV, Freezing. Hunts ≤50%. Speed 2.5 m/s (breaker on, target >3m away, in LOS) vs 1.7 m/s (breaker off). Cannot turn the breaker off. Drains target sanity by 25% within 3m/same room while breaker's on, leaving EMF2/5 at the breaker.
9. **Mare** — Spirit Box, Orbs, Ghost Writing. Hunts ≤60% if lights off in its room, ≤40% if lights on (busted lights always count as 60%). Speed 1.7 m/s. Wanders more with lights on; favors light-burst events; cannot turn ON any light source (switches, lamps, TVs, monitors). Ability: instantly kills a light switch/lamp turned on within 4m — even mid-event.
10. **Moroi** — Spirit Box, Ghost Writing, Freezing. Hunts ≤50%. Speed 1.5 m/s above 45% sanity, up to 2.25 m/s at 0% sanity. Ability: any heard Spirit Box/parabolic/recorder response curses that player — 2x sanity drain, cured only with sanity medication. Tell: smudge-blinds for 7s instead of 5s; Spirit Box forced on Nightmare/Insanity.
11. **Myling** — EMF5, UV, Ghost Writing. Hunts ≤50%. Speed 1.7 m/s. Hunt sounds only audible to 12m (vs normal 20m). Tell: parabolic responses every 64–128s (vs normal 80–128s) — two responses within 80s of each other means Myling.
12. **Obake** — EMF5, UV, Orbs. Hunts ≤50%. Speed 1.7 m/s. Leaves unique fingerprints (6-fingered on doors/windows/coolers, double on light switches, 5-fingered on keyboards/cell doors); 25% chance to leave no UV at all, and UV fades 2x faster. Shapeshifts model during hunts at fixed blink counts (12/27/39/54/62/80/105/120/132). 25% chance to skip a footstep during events. UV forced on Nightmare/Insanity.
13. **Obambo** — Ghost Writing, UV, DOTS. Two states: Aggressive (65% sanity, 1.96 m/s, hunts 20% shorter) and Calm (10% sanity, 1.45 m/s). Switches every 2 minutes, timer starts at the halfway point of Calm when the front door is opened; can switch state mid-hunt.
14. **Oni** — EMF5, Freezing, DOTS. Hunts ≤50%. Speed 1.7 m/s. Most active around multiple players; only does physical-form events (never shadow/misfired), more likely to fully manifest; events drain 20% sanity instead of 10%. Tell: blinks noticeably faster/more often during hunts.
15. **Onryo** — Spirit Box, Orbs, Freezing. Can hunt at any sanity via its ability; otherwise 60% normal / 40% near a lit firelight. Speed 1.7 m/s. Tries to hunt after extinguishing every 3rd flame — unless another lit flame is within 4m, which it blows out instead (acts like a crucifix) and cancels the hunt trigger. Cannot light fire sources. Tell: only ghost that can blow out any firelight within 30s of first being lit, re-blow the same light within 20s, blow a tier 1/2 light within 20s of lighting, or blow out a lighter within 20s of activation.
16. **Phantom** — Spirit Box, UV, DOTS. Hunts ≤50%. Speed 1.7 m/s. Heartbeat-range drains 0.5% sanity/sec during hunts and events. Roam ability leaves EMF2 at head height at the roamed-to spot. Invisible in ghost photos/videos except the hunting-ghost video. Tell: slower, longer-gapped blinking during hunts vs. normal ghosts.
17. **Poltergeist** — Spirit Box, UV, Ghost Writing. Hunts ≤50%. Speed 1.7 m/s. Throws items every 0.5s during hunts, more forcefully; higher interact/throw chance and further throws even outside hunts. Ability ("py bomb"): multi-item interaction, −2% sanity per item, four variants (throw / levitate+throw / levitate+drop / levitate+throw-at-player).
18. **Raiju** — EMF5, Orbs, DOTS. Hunts ≤50% normally, ≤65% if nearby electronics are on. Speed 1.7 m/s (no active electronics nearby) vs 2.5 m/s (electronics active nearby). Larger electronics disturbance range (15m vs 10m). Tell: notably louder, bass-heavy heartbeat.
19. **Revenant** — Orbs, Ghost Writing, Freezing. Hunts ≤50%. Speed 1 m/s with no line of sight/no nearby players detected, jumping to 3 m/s once it has LOS on a player or detects their electronics/radio.
20. **Shade** — EMF5, Ghost Writing, Freezing. Hunts ≤35% (lowest threshold in the game). Speed 1.7 m/s. Only ghost that can appear as the shadow model during Music Box/Summoning Circle/Monkey Paw events; cannot do Singing events; does more events at lower sanity. Cannot perform events/hunts/EMF2-3-5 interactions (including ghost writing, blowing out fire lights) while a player is in its room — watch for it stepping out first.
21. **Spirit** — EMF5, Spirit Box, Ghost Writing. Hunts ≤50%. Speed 1.7 m/s. Single defining mechanic: smudging forces a 180s (3 min) wait before it can hunt again, vs. 90s for other ghosts.
22. **Thaye** — Orbs, Ghost Writing, DOTS. Ages every 1–2 minutes only if a player is in its room (otherwise waits 30s and retries). Youngest state: 75% sanity threshold, 2.75 m/s. Oldest state: 15% sanity, 1 m/s. No line-of-sight speedup at any age; more active young. Tell: Ouija Board "how old are you?" — only ghost that can answer 90+.
23. **The Mimic** — Spirit Box, UV, Freezing (its true evidence). Ability spawns a Ghost Orb in its favorite room, so it can present 4 evidences — the only ghost that can show the Spirit Box + UV + Orbs combo. Copies a random other ghost's hunt speed, hunt sanity, and abilities/behaviors every 30–120s.
24. **The Twins** — EMF5, Spirit Box, Freezing. Hunts ≤50%. Each hunt randomly rolls Slow Twin (1.5 m/s) or Fast Twin (1.9 m/s), 50/50. Can interact at two locations simultaneously: standard radius (2.12m / 4.24m on large maps) and an extended radius (8.48m / 16.97m on large maps) — creating the illusion of two ghosts. Does a crucifix check at its current spot before rolling slow/fast; if fast, it teleports near its last extended-range interaction to start the hunt.
25. **Wraith** — EMF5, Spirit Box, DOTS. Hunts ≤50%. Speed 1.7 m/s. Teleports to a random player, leaving EMF2/5 at head height, then walks back to its favorite room. Tell: never disturbs salt, even walking through it.
26. **Yokai** — Spirit Box, Orbs, DOTS. Hunts ≤50% normally, ≤80% if a player is talking in its room. Speed 1.7 m/s. More event-active around talking players. Tell: drastically reduced detection range (2.5m vs. 7.5m for electronics/9m for voice) — test with a radio from a distance (exception: Banshee if you're not its target).
27. **Yurei** — Orbs, Freezing, DOTS. Hunts ≤50%. Speed 1.7 m/s. Smudging traps it in its favorite room for 90s (can't give DOTS evidence during that time). Must fully open or fully close any door it interacts with — a half-open door rules it out. Only ghost that can interact with exterior/exit doors outside of a hunt or event. Ability: can slam a door and drop nearby sanity 15%.

## 5. Wiki Mode — Requirements

- Grid/list of all 27 ghosts with portrait-style card (name, evidence icons, base speed, base hunt sanity).
- Full detail page/panel per ghost showing every field above in clearly labeled sections: **Evidence**, **Hunt Sanity Conditions**, **Hunt Speed Conditions**, **Behaviors & Abilities**, **No-Evidence Tells**, **High-Difficulty Forced Evidence**, **Special Rules** (gender lock, smudge/re-hunt exceptions, etc.).
- **Sortable/filterable table view**: sort by name, speed (min/max), hunt sanity threshold, evidence type, re-hunt cooldown, smudge-blind duration.
- Search bar (fuzzy match by name or ability keyword, e.g. searching "salt" surfaces Gallu, Wraith).
- Evidence-type filter chips (EMF5, UV, Orbs, Spirit Box, Ghost Writing, Freezing, DOTS) to instantly narrow the grid to ghosts that can show that evidence.

## 6. Elimination Mode ("Find My Ghost") — Requirements

This is the core mid-game tool. Behavior:

- Start with all 27 ghosts shown as active cards/rows.
- Interactive input groups, each tap immediately re-filters:
  - **Evidence found** (toggle up to 3 of the 7 types — supports Nightmare/Insanity partial-evidence mode where the player only has 1–2 evidence, factoring in forced/guaranteed evidence per ghost).
  - **Observed hunt speed** (numeric/slider or "slow / normal / fast / very fast" buckets, mapped to the conditional speed data).
  - **Observed hunt sanity trigger point** (if known).
  - **Behavioral tells checklist** — plain-language toggles pulled from `noEvidenceTells` and `abilities`, e.g.: "Ghost model is male" (crosses out Banshee, Dayan), "Turned breaker ON" (crosses out Hantu, Jinn), "Walked through salt undisturbed" (crosses out Wraith… confirms candidates), "Door left half-open" (crosses out Yurei), "Smudged and it hunted again before 90s" (crosses out Spirit/Moroi consideration), "Re-hunted <25s after last hunt/no smudge" (isolates Demon), etc. Generate this full toggle list from every tell in the dataset above — do not omit any.
  - **Special conditions**: difficulty level (affects whether "no evidence shown" is meaningful and which evidence is forced), room-change observed, gender of model observed.
- **Crossed-out state, not hidden**: ghosts eliminated by the player's inputs get a visible strikethrough/greyed-out treatment and move to a collapsed "Ruled Out" section — never disappear outright, so the player can see *why* something was eliminated and undo a wrong tap.
- Remaining/likely candidates are visually promoted (highlighted, larger, or top of list), ranked by how many active clues they still satisfy.
- One-tap "Reset" to clear all filters and start a new contract.
- Persist state in memory only for the current session (no login, no backend — a page refresh is an acceptable reset, matching how a contract resets).

## 7. Navigation & UX

- Two clearly labeled top-level modes ("Wiki" and "Find My Ghost") with instant, no-reload switching.
- Mobile-first layout — assume most use is on a phone or second monitor while playing.
- Sticky/persistent filter bar in Elimination Mode so the player never has to scroll back up mid-game.
- Fast: no loading spinners, everything client-side and instant.
- Dark, low-light-friendly theme (players are often in a dark room) — but still a deliberate, modern design system (not default black-on-white), with clear typography hierarchy and good contrast for glanceable reading.

## 8. Visual Design Direction

- Modern, atmospheric but legible — avoid gimmicky horror-theme clutter that hurts scannability under time pressure.
- Evidence types get consistent icon + color coding used everywhere (cards, filters, tables) for instant recognition.
- Crossed-out ghosts use a clear strikethrough + desaturation treatment, not just opacity, so it reads at a glance.