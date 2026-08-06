import type { Ghost } from "@/lib/types";

export const ghosts: Ghost[] = [
  {
    id: "aswang",
    name: "Aswang",
    evidences: ["Freezing", "GhostWriting", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "No line of sight", value: 1.53 },
        {
          condition:
            "Sustained line of sight (accelerates ~1.5x faster than normal, reaching max in ~8.7s instead of ~13s)",
          value: 2.53,
        },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Base hunt speed (1.53 m/s) is actually slower than the 1.7 m/s default — all its danger comes from a line-of-sight acceleration that ramps 1.5x faster than normal, reaching its 2.53 m/s max in about 8.7s instead of ~13s",
      "A hunt ends instantly the moment it reaches a player who is correctly using an official hiding spot (closet, locker, cabinet) — that player cannot be killed",
    ],
    noEvidenceTells: [
      "Its line-of-sight speed ramp-up is visibly faster than normal during a hunt — reaches full sprint in under 9 seconds instead of the usual ~13",
      "Getting cornered by it in an official hiding spot (closet, locker) doesn't kill you — the hunt ends instantly the moment it arrives, and luring it there with incense doubles as a safe, fast identification test",
    ],
    topIdentifiers: [
      "Reaches full hunt sprint in under 9s of sustained line of sight (vs ~13s normal) — the fastest ramp-up in the game",
      "Cornering it at an official hiding spot ends the hunt instantly instead of killing you — bait it there with incense to confirm safely",
      "Base chase speed is actually below average (1.53 m/s) — all the danger comes from the ramp, not the start",
    ],
  },
  {
    id: "banshee",
    name: "Banshee",
    evidences: ["UV", "GhostOrbs", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    genderRestriction: "female",
    reHuntCooldown: "90s (default)",
    abilities: [
      "Picks one target at contract start and stalks only them (the host is the 2nd pick if not chosen first)",
      "About two-thirds of the time it roams, it paths directly toward its target instead of wandering randomly",
      "Cannot cross floors without an EMF trigger from its target",
      "Hunts based on its target's individual sanity, not the team average",
      "Favors Singing events, and drains 15% sanity (not the usual 10%) when one hits its target",
    ],
    noEvidenceTells: [
      "Only ever hunts/targets one specific player the entire contract — it reassigns only if that player dies or leaves",
      "Parabolic mic / recorder has a 33% chance of a distinct 'banshee wail' instead of a normal response",
      "Hunts off its target's own sanity, not team average — it can stay dormant with the team low, or hunt with the team high, purely based on that one player (multiplayer only, needs comparing sanity readings over time)",
    ],
    topIdentifiers: [
      "Only ever hunts one player the whole contract — reassigns only if that player dies or leaves",
      "33% chance of a distinct wail on parabolic mic / recorder instead of a normal response",
      "Roams directly toward its target about two-thirds of the time instead of wandering randomly",
    ],
  },
  {
    id: "dayan",
    name: "Dayan",
    evidences: ["EMF5", "GhostOrbs", "SpiritBox"],
    hunt: {
      sanityThresholds: [
        { condition: "Target walking, ghost near", value: 65 },
        { condition: "Target still, ghost near", value: 45 },
        { condition: "All players far from ghost", value: 50 },
      ],
      speeds: [
        { condition: "Target walking, ghost near", value: 2.25 },
        { condition: "Target still, ghost near", value: 1.2 },
        { condition: "All players far from ghost", value: 1.7 },
      ],
    },
    genderRestriction: "female",
    reHuntCooldown: "90s (default)",
    abilities: [
      "Hunt sanity and speed both lock to a fixed value based on whether the nearest player is moving or standing still",
      "Has no other distinguishing quirk beyond that movement-reactive speed lock and its fixed female model — the thinnest tell set in the game",
    ],
    noEvidenceTells: [
      "Freeze in place near it during a hunt — a dramatic, obvious slowdown to about 1.2 m/s confirms Dayan (it locks to different fixed speeds depending on whether the nearest player is moving or still, not gender)",
    ],
    topIdentifiers: [
      "Always a female ghost model/name — the fastest passive check",
      "Freezes to a crawl (~1.2 m/s) whenever the nearest player stands still during a hunt, and speeds up when they move",
      "Beyond gender and that movement-reactive speed lock, it has no other quirk — thinnest tell set in the game",
    ],
  },
  {
    id: "deildegast",
    name: "Deildegast",
    evidences: ["EMF5", "GhostWriting", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "No objects interacted with since its last hunt", value: 3.0 },
        { condition: "After ~26-30 unique objects interacted with", value: 0.4 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Never gets a line-of-sight speed boost — its hunt speed is set entirely by how many unique objects have been interacted with since its last hunt",
      "Speed drops by 0.1 m/s for every unique interactable object (plates, switches, toys, etc. — not player equipment) that any player, living or dead, interacts with, down to a floor of about 0.4 m/s after 26-30 interactions — comfortably outrunnable at that point",
      "Speed resets to its full 3.0 m/s after every hunt ends, and also when a crucifix burns",
    ],
    noEvidenceTells: [
      "Hunts extremely fast with no ramp-up (3.0 m/s) very early in a contract, before much has been touched — then noticeably slower on later hunts once the house has been disturbed",
      "Deliberately interacting with a spread of unrelated objects (light switches, plates, drawers) between hunts visibly grinds its next hunt speed down — even eliminated players can still contribute",
    ],
    topIdentifiers: [
      "Hunts extremely fast with no ramp-up (3.0 m/s) very early in a contract, before much has been touched",
      "Noticeably slower on later hunts as objects get interacted with — floor of about 0.4 m/s after ~26-30 unique interactions",
      "Deliberately interacting with unrelated objects between hunts visibly grinds its next hunt speed down — even eliminated players can still contribute",
    ],
  },
  {
    id: "demon",
    name: "Demon",
    evidences: ["UV", "GhostWriting", "Freezing"],
    hunt: {
      sanityThresholds: [
        { condition: "Normal threshold", value: 70 },
        { condition: "Via ability, can hunt at any sanity", value: 100 },
      ],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    smudgeBehavior: "Only needs 60s after a smudge before it can hunt again (others need 90s).",
    reHuntCooldown: "20s after previous hunt/crucifix use (others wait 25s)",
    abilities: [
      "Can trigger a hunt at any sanity level via its own ability — its baseline (non-ability) hunt threshold is actually higher than normal at 70%, so it's the ability, not the base threshold, that makes it dangerous",
      "Crucifix effective range is +50% per crucifix tier — its one real weakness",
    ],
    noEvidenceTells: [
      "Re-hunts as little as 20–24s after its previous hunt ends — no other ghost can hunt again that fast (normal minimum is 25s)",
      "Hunts again just 60–89s after being smudged, well inside the 90s window every other ghost is protected for",
    ],
    topIdentifiers: [
      "Re-hunts as little as 20–24s after its previous hunt ends — no other ghost can hunt again that fast",
      "Hunts again just 60–89s after being smudged, well inside the 90s window every other ghost is protected for",
      "Crucifix effective range is +50% per tier against it — its one real weakness",
    ],
  },
  {
    id: "deogen",
    name: "Deogen",
    evidences: ["SpiritBox", "GhostWriting", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 40 }],
      speeds: [
        { condition: "Far from target", value: 3.0 },
        { condition: "Very close to target", value: 0.4 },
      ],
    },
    reHuntCooldown: "90s (default)",
    guaranteedEvidenceOnHighDifficulty: "SpiritBox",
    abilities: [
      "Always has line of sight on its target — cannot be hidden from, only outrun or looped around obstacles",
      "Speed inverts with distance: fast far away, crawls to a near-stop up close — never gets a separate line-of-sight speed boost, since this distance curve is the whole mechanic",
    ],
    noEvidenceTells: [
      "Rushes in fast from a distance, then visibly crawls to a near-stop right before reaching you (~3.0 m/s far → ~0.4 m/s close) — hiding doesn't stop it, only outrunning or looping around obstacles does",
      "Spirit Box within 1m has a 33% chance of a unique breathing response instead of a normal reply",
    ],
    topIdentifiers: [
      "Speed curve inverts with distance: ~3.0 m/s far away, crawling to ~0.4 m/s right on top of you",
      "Always has line of sight on its target — hiding doesn't stop it, only outrunning or looping around obstacles does",
      "Spirit Box within 1m has a 33% chance of a unique breathing response instead of a normal reply",
    ],
  },
  {
    id: "gallu",
    name: "Gallu",
    evidences: ["EMF5", "UV", "SpiritBox"],
    hunt: {
      sanityThresholds: [
        { condition: "Normal state", value: 50 },
        { condition: "Enraged (after salt/incense/crucifix)", value: 60 },
        { condition: "Weakened (after a hunt ends)", value: 40 },
      ],
      speeds: [
        { condition: "Normal state", value: 1.7 },
        { condition: "Enraged (after salt/incense/crucifix)", value: 1.96 },
        { condition: "Weakened (after a hunt ends)", value: 1.36 },
      ],
    },
    smudgeBehavior:
      "Smudge-blind duration changes with state: 4s while Enraged, 5s while Normal, 6s while Weakened.",
    reHuntCooldown: "90s (default)",
    abilities: [
      "Three-state cycle: Normal → Enraged (triggered by salt/incense/crucifix, won't disturb salt, crucifix range −2m) → Weakened (after hunt ends, crucifix range +1m, disturbs salt normally) → back to Normal",
      "State transitions aren't instant: 2s to shift into Enraged, 3s to shift into Weakened",
    ],
    noEvidenceTells: [
      "Speed and aggression noticeably jump right after salt, incense, or a crucifix is used on it, or calm down right after a hunt ends",
      "Won't disturb salt while Enraged, but disturbs it normally once Weakened — the only ghost whose salt behavior changes mid-contract",
    ],
    topIdentifiers: [
      "Speed and aggression noticeably spike right after salt, incense, or a crucifix is used on it (Enraged state)",
      "Calms down right after a hunt ends (Weakened state) — visibly slower and less sanity-hungry",
      "Won't disturb salt while Enraged, but disturbs it normally once Weakened — the only ghost whose salt behavior changes mid-contract",
    ],
  },
  {
    id: "goryo",
    name: "Goryo",
    evidences: ["EMF5", "UV", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    guaranteedEvidenceOnHighDifficulty: "DOTS",
    abilities: ["Cannot change its favorite room for the entire contract"],
    noEvidenceTells: [
      "D.O.T.S. only shows up when viewed through a placed video camera's monitor feed — it won't register through the camera's own viewfinder or with nobody watching the monitor",
      "A confirmed favorite-room change during the contract rules this ghost out",
    ],
    topIdentifiers: [
      "D.O.T.S. only shows up through a placed camera's monitor feed — the viewfinder alone won't show it",
      "Never changes its favorite room for the whole contract — a confirmed room change rules it out",
      "No other distinguishing quirk beyond those two — one of the hardest ghosts to zero-evidence ID",
    ],
  },
  {
    id: "hantu",
    name: "Hantu",
    evidences: ["UV", "GhostOrbs", "Freezing"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "Cold room", value: 2.7 },
        { condition: "Warm room", value: 1.4 },
      ],
    },
    reHuntCooldown: "90s (default)",
    guaranteedEvidenceOnHighDifficulty: "Freezing",
    abilities: [
      "More likely to turn the breaker off, and can never turn it back on",
      "No line-of-sight speed boost — speed is purely room-temperature based",
    ],
    noEvidenceTells: [
      "Hunts noticeably faster in cold rooms (up to 2.7 m/s) and slower in warm ones (down to 1.4 m/s) — the only ghost with a straight temperature-based speed scale",
      "Visible freezing breath during a hunt specifically when the breaker is off or broken",
    ],
    topIdentifiers: [
      "Hunts noticeably faster in cold rooms (up to 2.7 m/s) and slower in warm ones (down to 1.4 m/s) — the only ghost with a straight temperature-based speed scale",
      "Visible freezing breath during a hunt specifically when the breaker is off or broken",
      "More likely to turn the breaker off, and can never turn it back on",
    ],
  },
  {
    id: "jinn",
    name: "Jinn",
    evidences: ["EMF5", "UV", "Freezing"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "Breaker on, target >3m away and in line of sight", value: 2.5 },
        { condition: "Breaker off", value: 1.7 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Cannot turn the breaker off under any circumstance — its entire kit is neutralized once the power is already off",
      "Drains target sanity by 25% within 3m/same room while the breaker is on, leaving an EMF2/5 reading at the fuse box with no one touching it",
    ],
    noEvidenceTells: [
      "Speed snaps straight to a fixed 2.5 m/s the instant it has line of sight on a target more than 3m away, but only while the breaker is on — with the breaker off or a target within 3m, it's a normal 1.7 m/s",
      "An EMF2/5 reading appears at the fuse box itself with nobody interacting with it while the power is on, paired with a sudden, unexplained sanity drop nearby — its sanity-drain ability",
    ],
    topIdentifiers: [
      "Speed snaps straight to a fixed 2.5 m/s the instant it has line of sight on a target more than 3m away, but only while the breaker is on",
      "An EMF2/5 reading appears at the fuse box itself with nobody interacting with it while the power is on, paired with a sudden sanity drop nearby",
      "Cannot turn the breaker off — with the power already out, its whole kit is neutralized",
    ],
  },
  {
    id: "kormos",
    name: "Kormos",
    evidences: ["GhostOrbs", "UV", "SpiritBox"],
    hunt: {
      sanityThresholds: [
        { condition: "Normal", value: 50 },
        { condition: "A player sprints in its room", value: 70 },
      ],
      speeds: [
        { condition: "Searching, no sound detected", value: 1.7 },
        { condition: "Moving toward a detected sound", value: 2.21 },
        { condition: "Closing in on a located player", value: 3.65 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Completely blind during hunts — line of sight means nothing to it, it tracks entirely by sound",
      "Detects footsteps and noise from far beyond normal range: ~10m crouched, ~15m walking, ~30m sprinting, on the same floor",
      "Can kill a player the instant it closes to within 1.5m of them, even through walls, doors, and furniture",
      "Cannot perform mist-form or chase-style ghost events",
    ],
    noEvidenceTells: [
      "Completely ignores players it can see but hasn't heard — staying crouched and silent lets you walk right past it mid-hunt",
      "Homes in hard on any noise (footsteps, sprinting, dropped items) from well beyond normal detection range, visibly speeding up once it's heard something",
      "Shares its exact evidence set (Ghost Orbs, UV, Spirit Box) with The Mimic's apparent evidence — a Freezing reading confirms The Mimic instead, since Kormos never has Freezing",
    ],
    topIdentifiers: [
      "Completely ignores players it can see but hasn't heard — stay crouched and silent to walk right past it mid-hunt",
      "Homes in hard on any noise from well beyond normal detection range, visibly speeding up once it's heard something",
      "Shares Ghost Orbs/UV/Spirit Box with The Mimic — a Freezing reading confirms Mimic instead, since Kormos never has Freezing",
    ],
  },
  {
    id: "mare",
    name: "Mare",
    evidences: ["SpiritBox", "GhostOrbs", "GhostWriting"],
    hunt: {
      sanityThresholds: [
        { condition: "Lights off in its room", value: 60 },
        { condition: "Lights on in its room (busted lights always count as on)", value: 40 },
      ],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Wanders more with lights on; favors light-burst events",
      "Cannot turn ON any light source (switches, lamps, TVs, monitors) — can only turn them off",
      "Elevated chance to flip a light switch back off within 4m of it, moments after a player turns it on",
      "Busted lights still count as 'on' for its hunt-sanity threshold, same as working ones",
    ],
    noEvidenceTells: [
      "Never turns a light source on itself — if the ghost turns a light ON, it isn't Mare",
      "Has an elevated chance to flip a light switch back off within 4m of it, moments after a player turns it on — one occurrence could be chance, but it happening repeatedly near the ghost is a strong tell",
    ],
    topIdentifiers: [
      "Never turns a light source on itself — if the ghost turns a light ON, it isn't Mare",
      "Elevated chance to flip a light switch back off within 4m, moments after a player turns it on",
      "Hunts more easily in the dark (≤60% sanity) than with lights on (≤40%) — busted lights still count as 'on'",
    ],
  },
  {
    id: "moroi",
    name: "Moroi",
    evidences: ["SpiritBox", "GhostWriting", "Freezing"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "Above 45% sanity", value: 1.5 },
        { condition: "At 0% sanity", value: 2.25 },
      ],
    },
    smudgeBehavior: "Smudge-blinds for 7s instead of the usual 5s.",
    reHuntCooldown: "90s (default)",
    guaranteedEvidenceOnHighDifficulty: "SpiritBox",
    abilities: [
      "Any heard Spirit Box, parabolic, or recorder response curses that player: 2x sanity drain, cured only with sanity medication — the faster drain from a curse can spiral it into one of the fastest ghosts in the game, since its speed caps at 2.25 m/s near 0% sanity versus 1.5 m/s above 45%",
    ],
    noEvidenceTells: [
      "Smudge-blinds for 7 seconds instead of the usual 5 — an easy, cheap timed test",
      "Hearing any Spirit Box, parabolic, or recorder response instantly curses that player — sanity drains twice as fast until cured with sanity medication",
    ],
    topIdentifiers: [
      "Smudge-blinds for 7 seconds instead of the usual 5 — a cheap, fast timed test",
      "Any heard Spirit Box, parabolic, or recorder response instantly curses that player — 2x sanity drain until cured",
      "Speed caps out at 2.25 m/s near 0% sanity (vs 1.5 m/s above 45%) — a curse's faster drain can spiral it into one of the fastest ghosts in the game",
    ],
  },
  {
    id: "myling",
    name: "Myling",
    evidences: ["EMF5", "UV", "GhostWriting"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Hunt sounds are only audible up to 12m away (vs the normal 20m)",
      "Parabolic responses occur every 64–127s (vs the normal 80–127s)",
    ],
    noEvidenceTells: [
      "Parabolic mic / recorder responses come every 64–127s instead of the normal 80–127s — noticeably more frequent pings if you're actively testing it",
      "During a hunt, its footsteps and sounds go quiet within 12m instead of the normal 20m — it can be right on top of you and still sound distant",
    ],
    topIdentifiers: [
      "Hunt footsteps and vocals go quiet within 12m instead of the normal ~20m — it can be right on top of you and still sound distant",
      "Parabolic mic / recorder responses come every 64–127s instead of the normal 80–127s — noticeably more frequent",
      "No other distinguishing quirk beyond its reduced hunt-audio range and slightly faster parabolic timing",
    ],
  },
  {
    id: "obake",
    name: "Obake",
    evidences: ["EMF5", "UV", "GhostOrbs"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    guaranteedEvidenceOnHighDifficulty: "UV",
    abilities: [
      "Leaves unique fingerprints: 6-fingered on doors/windows/coolers, doubled on light switches, 5-fingered on keyboards/cell doors",
      "Only a 75% chance to leave any UV fingerprint at all, and existing UV fades in about half the usual time",
      "Shapeshifts its model during hunts on a fixed visibility-cycle schedule",
      "Chance to skip a footstep sound during events, and a reduced chance to leave a footprint after stepping in salt",
      "Can occasionally halve the remaining time on every fingerprint currently on the map at once",
    ],
    noEvidenceTells: [
      "Only a 75% chance to leave UV fingerprints at all on an interaction (vs 100% for other ghosts) — an interaction with nothing left behind is a strong hint",
      "About a 1-in-6 chance for a fingerprint to look wrong: 6 fingers instead of 5, a doubled print on switches, or 5 prints instead of 4 on keyboards",
      "UV evidence fades in about half the usual time (~1 minute instead of ~2)",
    ],
    topIdentifiers: [
      "Only a 75% chance to leave UV fingerprints at all on an interaction (vs 100% for other ghosts) — an interaction with nothing left behind is a strong hint",
      "About a 1-in-6 chance for a fingerprint to look wrong: 6 fingers instead of 5, a doubled print on switches, or 5 prints instead of 4 on keyboards",
      "UV evidence fades about twice as fast as normal, and it can occasionally halve every fingerprint's remaining time on the map at once",
    ],
  },
  {
    id: "obambo",
    name: "Obambo",
    evidences: ["GhostWriting", "UV", "DOTS"],
    hunt: {
      sanityThresholds: [
        { condition: "Aggressive state", value: 65 },
        { condition: "Calm state", value: 10 },
      ],
      speeds: [
        { condition: "Aggressive state", value: 1.96 },
        { condition: "Calm state", value: 1.45 },
      ],
    },
    reHuntCooldown: "90s (default); hunts started in the Aggressive state are 20% shorter",
    abilities: [
      "Starts every contract in the Calm state, then switches about 1 minute after the exit door is first opened, and every 2 minutes after that",
      "Can switch state mid-hunt — a hunt that started in the Aggressive state keeps its 20%-shorter duration even if it switches to Calm partway through",
    ],
    noEvidenceTells: [
      "Speed and hunt aggression clearly shift between two states roughly every 2 minutes: Aggressive (~1.96 m/s, hunts ≤65% sanity, hunts 20% shorter) and Calm (~1.45 m/s, hunts ≤10% sanity)",
      "Can switch state mid-hunt — a hunt that suddenly speeds up or slows down partway through is a strong sign",
    ],
    topIdentifiers: [
      "Speed and aggression clearly shift between two states roughly every 2 minutes: Aggressive (~1.96 m/s) and Calm (~1.45 m/s)",
      "Can switch state mid-hunt — a hunt that suddenly speeds up or slows down partway through is a strong sign",
      "Starts every contract Calm, first switching about 1 minute after the exit door is opened",
    ],
  },
  {
    id: "oni",
    name: "Oni",
    evidences: ["EMF5", "Freezing", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Most active around multiple players at once",
      "About a 2/3 chance to fully manifest in physical form rather than shadow/translucent form during hunts and events — a strong lean, not an absolute rule",
      "Never triggers the misty-orb ghost event",
      "Events that hit a player drain 20% sanity instead of the usual 10%",
    ],
    noEvidenceTells: [
      "Stays visible for longer stretches during a hunt and blinks less than other ghosts — it's actually easier to see mid-chase, not flickerier",
      "Never triggers the misty-orb ghost event — seeing that event rules Oni out",
    ],
    topIdentifiers: [
      "Stays visible for longer stretches during a hunt and blinks less than other ghosts — easier to see mid-chase, not flickerier",
      "Never triggers the misty-orb ghost event — seeing that event rules Oni out",
      "Most active with multiple players nearby at once; events that connect drain 20% sanity instead of the usual 10%",
    ],
  },
  {
    id: "onryo",
    name: "Onryo",
    evidences: ["SpiritBox", "GhostOrbs", "Freezing"],
    hunt: {
      sanityThresholds: [
        { condition: "Normal", value: 60 },
        { condition: "Within 4m of a lit firelight", value: 40 },
        { condition: "Via ability, can hunt at any sanity", value: 100 },
      ],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Builds up a hidden 3-flame counter each time it extinguishes a flame; on the 3rd it force-triggers a hunt at any sanity — unless another lit flame is within 4m, which it blows out instead (acting like a crucifix) and resets the counter",
      "Cannot light fire sources itself",
      "A nearby lit flame effectively acts like a crucifix, dropping its hunt threshold from ≤60% to ≤40% within 4m",
    ],
    noEvidenceTells: [
      "Never lights a fire source itself — if the ghost lights a flame, it isn't Onryo",
      "Blows out any flame within 30s of it first being lit, or within 20s of any relighting — even a Tier I match, which only burns 10s and no other ghost can catch in time",
    ],
    topIdentifiers: [
      "Never lights a fire source itself — if the ghost lights a flame, it isn't Onryo",
      "Blows out any flame within 30s of being lit (or 20s of relighting) — even outlasts a 10s-burning Tier I match",
      "A nearby lit flame acts like a crucifix on it, prioritizing blowing the flame out over hunting when one's within 4m",
    ],
  },
  {
    id: "phantom",
    name: "Phantom",
    evidences: ["SpiritBox", "UV", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Heartbeat-range aura drains 0.5% sanity/sec during hunts and events",
      "Roam ability can leave a stray EMF2 reading at head height near a random player",
      "Never appears in photos or video, in any form or state",
    ],
    noEvidenceTells: [
      "Never appears in photos or video, in any form or state — a successful capture just shows no ghost model at all (it still counts as a valid ghost photo)",
      "Longer invisible flicker during hunts than other ghosts (up to ~1.9s per cycle, vs under 1s normally) — harder to glimpse mid-chase",
    ],
    topIdentifiers: [
      "Never appears in photos or video, in any form or state — a successful capture just shows no ghost model at all (still counts as a valid photo)",
      "Longer invisible flicker during hunts than other ghosts (up to ~1.9s per cycle, vs under 1s normally) — harder to glimpse mid-chase",
      "Roam ability can leave a stray EMF2 reading at head height near a random player",
    ],
  },
  {
    id: "poltergeist",
    name: "Poltergeist",
    evidences: ["SpiritBox", "UV", "GhostWriting"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "100% chance to throw an item every 0.5s during a hunt (vs a 50% chance for other ghosts), with more force and distance",
      "Can throw every interactable item in range all at once outside of a hunt ('py-bomb'), draining ~2% sanity per item thrown",
      "Needs loose interactable objects nearby to use its signature ability — an empty room neutralizes it, though it can still hunt normally",
    ],
    noEvidenceTells: [
      "Always throws an item every 0.5s during a hunt (100% chance, vs a 50% chance for other ghosts), often with far more force and distance",
      "Can throw every interactable item in range all at once outside of a hunt ('py-bomb') — watch for a sudden pile of objects thrown together instead of one at a time",
    ],
    topIdentifiers: [
      "Always throws an item every 0.5s during a hunt (100% chance, vs a 50% chance for other ghosts), often with far more force and distance",
      "Can throw every interactable item in range all at once outside of a hunt ('py-bomb') — watch for a sudden pile of objects thrown together",
      "Needs loose interactable objects nearby for its ability — an empty room neutralizes it, though it can still hunt normally",
    ],
  },
  {
    id: "raiju",
    name: "Raiju",
    evidences: ["EMF5", "GhostOrbs", "DOTS"],
    hunt: {
      sanityThresholds: [
        { condition: "Normal", value: 50 },
        { condition: "Nearby electronics are on", value: 65 },
      ],
      speeds: [
        { condition: "No active electronics nearby", value: 1.7 },
        { condition: "Electronics active nearby", value: 2.5 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Speed snaps to a fixed 2.5 m/s whenever active electronics are within range (6m small maps / 8m medium / 10m large), overriding the usual line-of-sight speed-up",
      "Heartbeat/detection audio carries out to 15m, farther than the normal 10m for other ghosts",
      "Electronics-proximity effects apply to most placed/held/dropped powered equipment, but not to motion sensors, sound sensors, or thrown DOTS projectors",
    ],
    noEvidenceTells: [
      "Speed snaps to a fixed 2.5 m/s whenever active electronics are nearby (6m on small maps, 8m medium, 10m large) — watch for a sudden jump rather than a gradual line-of-sight speed-up",
      "Distinct bass-boosted, 'crunchy' heartbeat sound during hunts",
    ],
    topIdentifiers: [
      "Speed snaps to a fixed 2.5 m/s whenever active electronics are nearby (6m small maps, 8m medium, 10m large) — a sudden jump, not a gradual ramp-up",
      "Distinct bass-boosted, 'crunchy' heartbeat sound during hunts, audible out to 15m instead of the usual 10m",
      "Turning off nearby active electronics (including your own flashlight) should stop the speed snap — motion/sound sensors and DOTS don't count",
    ],
  },
  {
    id: "revenant",
    name: "Revenant",
    evidences: ["GhostOrbs", "GhostWriting", "Freezing"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "No line of sight / no nearby players detected", value: 1.0 },
        { condition: "Has line of sight on a player or detects their electronics/radio", value: 3.0 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Speed jumps instantly, with no gradual ramp-up, the moment it sees, hears, or detects a player's nearby electronics",
      "Slows back down gradually over ~2.7s once it loses track of a player, rather than snapping back to 1 m/s instantly",
    ],
    noEvidenceTells: [
      "Nearly instant speed swing — crawls at ~1 m/s while it hasn't noticed anyone, then snaps straight to ~3 m/s the moment it sees, hears, or detects nearby electronics from a player, with no gradual ramp-up like other ghosts",
    ],
    topIdentifiers: [
      "Crawls at ~1 m/s while it hasn't noticed anyone, then snaps straight to ~3 m/s the moment it sees, hears, or detects nearby electronics, with no gradual ramp-up",
      "Slows back down gradually over ~2.7s once it loses track of a player, instead of snapping back to 1 m/s instantly",
      "A steady 'normal' 1.7 m/s reading throughout a hunt rules it out immediately — it's always at one extreme or the other",
    ],
  },
  {
    id: "shade",
    name: "Shade",
    evidences: ["EMF5", "GhostWriting", "Freezing"],
    hunt: {
      sanityThresholds: [{ condition: "Always (lowest threshold in the game)", value: 35 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Elevated (not exclusive) chance to appear as a shadow figure, especially during Music Box, Summoning Circle, or Monkey Paw events — treat a shadow sighting as a supporting clue, not a hard confirmation",
      "Cannot do Singing events; does more events at lower sanity",
      "Cannot perform events/hunts/EMF2-3-5 interactions (including ghost writing or blowing out fire lights) while a player is in its room",
    ],
    noEvidenceTells: [
      "Won't hunt, do events, or interact with anything while a player is in its current room — it's the most passive ghost in the game, so watch for it stalling out whenever someone's nearby, then acting the moment they leave",
      "Never performs Singing ghost events — the only ghost that can't",
    ],
    topIdentifiers: [
      "Won't hunt, do events, or interact with anything while a player is in its current room — the most passive ghost in the game",
      "Never performs Singing ghost events — the only ghost that can't",
      "Lowest hunt-sanity threshold in the game at ≤35% — rarely hunts unless sanity is already critical",
    ],
  },
  {
    id: "spirit",
    name: "Spirit",
    evidences: ["EMF5", "SpiritBox", "GhostWriting"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    smudgeBehavior: "Smudging forces a 180s (3 min) wait before it can hunt again, vs. 90s for other ghosts.",
    reHuntCooldown: "90s (default)",
    abilities: [
      "Behaves exactly like a 'default' ghost in every other respect — no ability or quirk beyond the extended smudge cooldown",
    ],
    noEvidenceTells: [
      "Took about 3 minutes (180s) after being smudged before it could hunt again, instead of the usual 90s — its only distinguishing mechanic, so it's worth spending a smudge stick to check",
    ],
    topIdentifiers: [
      "Takes ~180s (3 min) after being smudged before it can hunt again, instead of the usual 90s — its one defining tell",
      "Otherwise behaves exactly like a default ghost — no other quirk exists",
      "If every zero-evidence test comes back neutral, it's likely Spirit by elimination — one of the hardest ghosts to confirm directly",
    ],
  },
  {
    id: "thaye",
    name: "Thaye",
    evidences: ["GhostOrbs", "GhostWriting", "DOTS"],
    hunt: {
      sanityThresholds: [
        { condition: "Youngest state", value: 75 },
        { condition: "Oldest state", value: 15 },
      ],
      speeds: [
        { condition: "Youngest state", value: 2.75 },
        { condition: "Oldest state", value: 1.0 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Ages every 1–2 minutes while a player is in its room or within 3m of it (otherwise waits 30s and retries), starting about 1 minute after the exit door is first opened",
      "Never gets a line-of-sight hunt-speed boost, unlike most ghosts",
      "Ghost-event success chance shrinks with age, tapering off almost entirely after about 9 age-ups",
    ],
    noEvidenceTells: [
      "Ouija Board 'How old are you?' — its reported age keeps climbing with no upper cap as it ages, so an implausibly old answer (or one that changes between two sessions) confirms Thaye",
      "Hunt speed and aggression visibly wind down over a long contract as it ages — starts fast and dangerous (~2.75 m/s, hunts ≤75% sanity) and ends slow and passive (~1 m/s, hunts ≤15% sanity)",
    ],
    topIdentifiers: [
      "Ouija Board 'How old are you?' — its reported age climbs with no upper cap as it ages; an implausibly old or increasing answer confirms Thaye",
      "Hunt speed and aggression visibly wind down over a long contract — starts fast (~2.75 m/s, ≤75% sanity), ends slow (~1 m/s, ≤15% sanity)",
      "Ghost-event success chance shrinks with age too, tapering off almost entirely after about 9 age-ups",
    ],
  },
  {
    id: "themimic",
    name: "The Mimic",
    evidences: ["SpiritBox", "UV", "Freezing", "GhostOrbs"],
    hunt: {
      sanityThresholds: [{ condition: "Copied from another ghost", value: 50 }],
      speeds: [{ condition: "Copied from another ghost", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    guaranteedEvidenceOnHighDifficulty: "GhostOrbs",
    abilities: [
      "True evidence is Spirit Box, UV, and Freezing; Ghost Orbs is always the 4th, bonus evidence produced by its ability — even on Nightmare, Insanity, or custom zero-evidence games",
      "Copies a random other ghost's hunt speed, hunt sanity, and non-evidence-linked abilities every 30–120s, only swapping between hunts/events — it starts each contract with no copied ability until its first swap, about 1 minute after the exit door is first opened",
      "Can only copy abilities tied to evidence types it actually has — it can flash Obake-style fingerprints, but can never do a Goryo-style DOTS-only-on-camera trick",
    ],
    noEvidenceTells: [
      "Its ability always produces an extra fake Ghost Orb on top of its 3 real evidences — seeing Spirit Box + UV + Orbs together (or 4 apparent evidence types at all) is only possible with The Mimic, even on Nightmare, Insanity, or custom zero-evidence games",
      "Hunt speed, sanity threshold, and behavior noticeably change partway through the contract as it copies a different random ghost every 30–120s (its own evidence types never change, only its behavior)",
    ],
    topIdentifiers: [
      "Always produces an extra fake Ghost Orb via camera on top of its 3 real evidences — 4 apparent evidence types (or Spirit Box + UV + Orbs together) is only possible with The Mimic, even on zero-evidence difficulties",
      "Hunt speed, sanity threshold, and behavior noticeably change partway through the contract as it copies a random other ghost every 30–120s",
      "True evidence is Spirit Box/UV/Freezing — Ghost Orbs is always the bonus 4th, and it never swaps mid-hunt or mid-event",
    ],
  },
  {
    id: "thetwins",
    name: "The Twins",
    evidences: ["EMF5", "SpiritBox", "Freezing"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [
        { condition: "Slow Twin (50% chance per hunt)", value: 1.5 },
        { condition: "Fast Twin (50% chance per hunt)", value: 1.9 },
      ],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Each hunt randomly rolls Slow Twin or Fast Twin, 50/50",
      "Can interact at two locations simultaneously: a standard radius (2.12m / 4.24m on large maps) and an extended radius (8.48m / 16.97m on large maps) — creating the illusion of two ghosts. Only the standard-radius location can show Freezing or Spirit Box evidence; the extended-range one only ever shows EMF5",
      "Rolls a crucifix check at its current spot before deciding slow/fast; if fast, it then teleports to its last extended-range interaction spot to start the hunt — meaning a crucifix protecting that teleport spot won't block the hunt",
      "Only one entity — hunts still follow the standard 25s inter-hunt cooldown like any ghost",
    ],
    noEvidenceTells: [
      "Ouija Board 'How many ghosts are present?' always answers '1' despite acting like two — a fast, cheap confirmation",
      "Interacts at two separate locations within 1–2 seconds of each other, creating the illusion of two ghosts — only the closer/standard-radius spot can show Freezing or Spirit Box evidence, the far one only ever shows EMF5",
      "Hunt speed alternates between a Slow Twin (~1.5 m/s) and a Fast Twin (~1.9 m/s), rolled 50/50 each hunt — comparing multiple hunts confirms it",
    ],
    topIdentifiers: [
      "Ouija Board 'How many ghosts are present?' always answers '1' despite acting like two — a fast, cheap confirmation",
      "Interacts at two separate locations within 1–2 seconds of each other — only the closer/standard-radius spot can show Freezing or Spirit Box, the far one only ever shows EMF5",
      "Hunt speed alternates between a Slow Twin (~1.5 m/s) and a Fast Twin (~1.9 m/s), rolled 50/50 each hunt — comparing multiple hunts confirms it",
    ],
  },
  {
    id: "wraith",
    name: "Wraith",
    evidences: ["EMF5", "SpiritBox", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "Randomly teleports to a player between hunts, leaving an EMF2 reading (33% chance of EMF5) at that player's feet with no build-up or trail leading to it",
      "Completely immune to salt, including Tier III — never disturbs it, even walking straight through",
    ],
    noEvidenceTells: [
      "Never disturbs a salt pile, even walking straight through it — completely immune, not just unlikely",
      "Random EMF2 reading (33% chance of EMF5) appears at a player's feet with no build-up or trail leading to it — its between-hunts teleport",
    ],
    topIdentifiers: [
      "Never disturbs a salt pile, even walking straight through it — completely immune, not just unlikely",
      "Random EMF2 reading (33% chance of EMF5) appears at a player's feet with no build-up or trail leading to it — its between-hunts teleport",
      "Salt disturbance during a hunt instantly rules out Wraith — it's the single cleanest elimination test in the game",
    ],
  },
  {
    id: "yokai",
    name: "Yokai",
    evidences: ["SpiritBox", "GhostOrbs", "DOTS"],
    hunt: {
      sanityThresholds: [
        { condition: "Normal", value: 50 },
        { condition: "A player is talking in its room", value: 80 },
      ],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    reHuntCooldown: "90s (default)",
    abilities: [
      "More event-active around talking players",
      "Its short detection range only affects hearing/electronics-sensing — line-of-sight tracking during a hunt works normally",
    ],
    noEvidenceTells: [
      "Detection range for voices and active electronics during a hunt is only 2.5m (vs ~7.5–9m for other ghosts) — it can be right next to a running radio or a talking player and not react, unless they're in its line of sight",
      "Gets noticeably more hunt-happy when a player is talking in the same room as it (hunt threshold rises from 50% to 80% sanity)",
      "Banshee can show a similar unusual-range quirk if you're not its target — don't confuse the two",
    ],
    topIdentifiers: [
      "Detection range for voices/active electronics during a hunt is only ~2.5m (vs ~7.5–9m normal) — can be next to a running radio and not react unless it also has line of sight",
      "Gets noticeably more hunt-happy when a player talks in its room — threshold rises from ≤50% to ≤80% sanity",
      "Its short range only affects hearing/electronics — line-of-sight tracking works normally, so don't confuse it with a similar Banshee non-target quirk",
    ],
  },
  {
    id: "yurei",
    name: "Yurei",
    evidences: ["GhostOrbs", "Freezing", "DOTS"],
    hunt: {
      sanityThresholds: [{ condition: "Always", value: 50 }],
      speeds: [{ condition: "Always", value: 1.7 }],
    },
    smudgeBehavior: "Smudging traps it in its favorite room for 90s (it can't give DOTS evidence during that time).",
    reHuntCooldown: "90s (default)",
    abilities: [
      "Every door it interacts with ends up either fully open or fully closed, never partially — a half-open door rules it out",
      "Only ghost that can fully close a door, including the exit/exterior door, outside of a hunt or event",
      "Its door-close ability comes bundled with an instant ~15% sanity drop to anyone within ~7.5m, with no creak or slam sound",
    ],
    noEvidenceTells: [
      "Fully closes the exterior/exit door on its own, outside of any hunt or event — the only ghost that can interact with doors this way at all",
      "Every door it touches ends up either fully open or fully closed, never partially — a door left half-open rules Yurei out",
      "Its door-close ability comes with an instant ~15% sanity drop to anyone within ~7.5m, with no creak or slam sound",
    ],
    topIdentifiers: [
      "Fully closes the exterior/exit door on its own, outside of any hunt or event — the only ghost that interacts with doors like this at all",
      "Every door it touches ends up either fully open or fully closed, never partially — a door left half-open rules Yurei out",
      "Its door-close ability comes bundled with an instant ~15% sanity drop within ~7.5m, with no creak or slam sound",
    ],
  },
];

export function getGhostById(id: string): Ghost | undefined {
  return ghosts.find((g) => g.id === id);
}
