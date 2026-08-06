import type { Clue } from "@/lib/types";

export interface ZeroEvidenceItem extends Clue {
  description?: string;
}

/** The ghosts with a non-standard base/conditional speed — before the base-speed test is
 * actually run, 0-Evidence Mode defaults to assuming the ghost is one of these rather than
 * showing the full roster, since a truly standard-speed hunt hasn't been confirmed yet. Hantu is
 * included here too: it only reads as non-standard in a cold room with the breaker off (up to
 * ~2.7 m/s) — in a warm room its speed can sit close to the standard 1.7 m/s. */
export const BASE_SPEED_ITEM_ID = "steadyBaseSpeed";
export const BASE_SPEED_FAST_GHOSTS = ["deildegast", "deogen", "hantu", "moroi", "revenant", "thaye"];

export interface ZeroEvidenceStage {
  id: string;
  heading: string;
  items: ZeroEvidenceItem[];
}

/**
 * Interactive version of the "0-Evidence Walkthrough" guide (src/data/guides.ts) — each item is
 * a pass/fail test rather than free-text. Checking a box means "I ran this test and the ghost
 * passed it" (i.e. it didn't show the anomalous tell), which is what actually rules the
 * listed ghost(s) out. Reuses the same Clue `eliminate` semantics as src/data/clues.ts so both
 * feed the same evaluateGhost() logic in src/lib/filter.ts.
 */
export const zeroEvidenceStages: ZeroEvidenceStage[] = [
  {
    id: "base-speed",
    heading: "Base Speed",
    items: [
      {
        id: BASE_SPEED_ITEM_ID,
        category: "Base Speed",
        label: "Hunted at a steady ~1.7 m/s — never visibly slow or fast",
        description:
          "Rules out every ghost with a non-standard base speed: Deogen (inverts near/far), Moroi (speeds up as sanity drops), Revenant (1.0 undetected / 3.0 detected), Deildegast (fast on a fresh hunt, slows as objects get used), Thaye (fast early, slows with age), and — only in a cold room with the breaker off — Hantu (scales up to ~2.7 m/s the colder it gets; in a warm room it can read close to 1.7 m/s too).",
        eliminate: BASE_SPEED_FAST_GHOSTS,
      },
    ],
  },
  {
    id: "conditional-speed",
    heading: "Conditional Speed",
    items: [
      {
        id: "noElectronicsSpeedup",
        category: "Conditional Speed",
        label: "No speed-up while holding or standing near active electronics",
        description: "Raiju jumps to ~2.5 m/s only near active electronics, including gear in your own hands.",
        eliminate: ["raiju"],
      },
      {
        id: "noStandstillSlowdown",
        category: "Conditional Speed",
        label: "Didn't visibly slow to a crawl the instant you stood still after breaking line of sight",
        description:
          "Dayan locks to a fixed speed based on whether the nearest player is moving (2.25 m/s) or standing still (1.2 m/s), regardless of how long it's held sight.",
        eliminate: ["dayan"],
      },
    ],
  },
  {
    id: "los-ramp-1",
    heading: "Line-of-Sight Ramp-Up I",
    items: [
      {
        id: "noJinnSnap",
        category: "Line-of-Sight Ramp-Up",
        label: "No fixed 2.5 m/s snap when it's more than 3m away, in its line of sight, with the breaker on",
        description: "Jinn snaps straight to a fixed 2.5 m/s under exactly those three conditions at once; otherwise it hunts at a normal 1.7 m/s.",
        eliminate: ["jinn"],
      },
      {
        id: "didRampOnLos",
        category: "Line-of-Sight Ramp-Up",
        label: "Did accelerate under sustained line of sight — didn't hold one flat speed the whole chase",
        description: "Hantu never gets a line-of-sight speed boost; its speed is set purely by room temperature.",
        eliminate: ["hantu"],
      },
    ],
  },
  {
    id: "los-ramp-2",
    heading: "Line-of-Sight Ramp-Up II",
    items: [
      {
        id: "rampNotEarly",
        category: "Line-of-Sight Ramp-Up",
        label: "Ramp-up to full chase speed took the usual ~13 seconds, not under 9",
        description: "Aswang ramps to max speed abnormally early, maxing out in under 9 seconds.",
        eliminate: ["aswang"],
      },
    ],
  },
  {
    id: "salt",
    heading: "Salt",
    items: [
      {
        id: "saltDisturbed",
        category: "Salt",
        label: "Salt was disturbed at least once, cleanly",
        description: "Wraith is the only ghost that never disturbs salt — no footprint, no slowdown.",
        eliminate: ["wraith"],
      },
      {
        id: "enragedSaltDisturbed",
        category: "Salt",
        label: "Still disturbed a second patch of salt after provoking it into Enraged (salt/incense/crucifix)",
        description: "Gallu stops disturbing salt specifically while Enraged. Wait ~2s after provoking it before testing.",
        eliminate: ["gallu"],
      },
    ],
  },
  {
    id: "visual-1",
    heading: "Visual Tells I",
    items: [
      {
        id: "normalBlinkPattern",
        category: "Visual Tells",
        label: "Blink pattern looked normal — no unusually long invisible gaps, no unusually long visible stretches",
        description: "Phantom blinks slower with longer invisible gaps; Oni blinks less often and stays visible longer.",
        eliminate: ["phantom", "oni"],
      },
      {
        id: "modelNeverSwapped",
        category: "Visual Tells",
        label: "Model stayed the same for the whole hunt (assuming it ran long enough)",
        description: "Obake is the only ghost that swaps its model mid-hunt, on a fixed blink-count schedule.",
        eliminate: ["obake"],
      },
    ],
  },
  {
    id: "visual-2",
    heading: "Visual Tells II",
    items: [
      {
        id: "notFemaleModel",
        category: "Visual Tells",
        label: "Ghost model is clearly male, or otherwise not one of the 4 female-only models",
        description: "Dayan and Banshee are the only two gender-restricted (female) ghosts.",
        eliminate: ["dayan", "banshee"],
      },
    ],
  },
  {
    id: "throw-force",
    heading: "Throw Force",
    items: [
      {
        id: "throwsNormal",
        category: "Throw Force",
        label: "Objects were thrown or interacted with normally — not every ~0.5s, not with unusual force",
        description: "Poltergeist throws items far more often and with noticeably more force than any other ghost.",
        eliminate: ["poltergeist"],
      },
    ],
  },
  {
    id: "detection-range-1",
    heading: "Detection Range I",
    items: [
      {
        id: "audibleBeyond12m",
        category: "Detection Range",
        label: "Hunt footsteps/vocals were still audible well beyond ~12m",
        description:
          "Myling's hunt-audio range cuts off around 12m instead of ~20m. Drop a flashlight at a fixed spot beforehand — electronics flicker within ~10m of the ghost, close enough to double as a range marker.",
        eliminate: ["myling"],
      },
      {
        id: "reactedBeyond2_5m",
        category: "Detection Range",
        label: "It reacted to an electronic switched on from beyond ~2.5m away during a hunt",
        description: "Yokai's electronics detection range during a hunt drops to ~2.5m, versus the normal 7.5–9m.",
        eliminate: ["yokai"],
      },
    ],
  },
  {
    id: "detection-range-2",
    heading: "Detection Range II",
    items: [
      {
        id: "noBlindTracking",
        category: "Detection Range",
        label: "Didn't beeline for a silent, crouched player from far beyond normal range",
        description: "Kormos is blind during hunts and tracks by sound alone, from up to ~30m while you're sprinting, even through walls.",
        eliminate: ["kormos"],
      },
    ],
  },
  {
    id: "active-room-1",
    heading: "Active Room Tests I",
    items: [
      {
        id: "crucifixBurnedFlameStayedLit",
        category: "Active Room Tests",
        label: "A crucifix burned during a blocked hunt attempt while a lit flame in the same room stayed lit",
        description: "Onryo prioritizes blowing out a nearby lit flame over triggering a hunt.",
        eliminate: ["onryo"],
      },
      {
        id: "huntedWithPlayerInRoom",
        category: "Active Room Tests",
        label: "It hunted (or ran an event) while a player was physically inside its favorite room",
        description:
          "Shade can't hunt, run events, or do most interactions while sharing a room with a player. On small maps it can step just outside to interact — don't rule it out on a borderline case.",
        eliminate: ["shade"],
      },
    ],
  },
  {
    id: "active-room-2",
    heading: "Active Room Tests II",
    items: [
      {
        id: "noExtraOrb",
        category: "Active Room Tests",
        label: "No extra ghost orb appeared in its favorite room, outside its normal evidence",
        description: "The Mimic's ability spawns a bonus orb even on zero/low-evidence difficulties.",
        eliminate: ["themimic"],
      },
      {
        id: "litRoomNoThrow",
        category: "Active Room Tests",
        label: "Never interacted with or threw an object while the room was fully lit",
        description: "Poltergeist is the only ghost that can interact with objects in a fully lit room.",
        eliminate: ["poltergeist"],
      },
    ],
  },
  {
    id: "smudge-1",
    heading: "Smudge Test I",
    items: [
      {
        id: "noFastReHunt",
        category: "Smudge Test",
        label: "Never re-hunted less than 25 seconds after the previous hunt ended",
        description: "Every ghost but Demon needs at least 25s between hunts; Demon can go as low as ~20s. No smudge needed for this one.",
        eliminate: ["demon"],
      },
      {
        id: "smudgeOver90s",
        category: "Smudge Test",
        label: "After a smudge, it took the normal ~90 seconds (or longer) before hunting again",
        description: "Demon only needs ~60 seconds after a smudge.",
        eliminate: ["demon"],
      },
    ],
  },
  {
    id: "smudge-2",
    heading: "Smudge Test II",
    items: [
      {
        id: "smudgeUnder180s",
        category: "Smudge Test",
        label: "After a smudge, it hunted again well before 180 seconds (3 minutes)",
        description: "Spirit needs a full 180 seconds after a smudge before it can hunt again.",
        eliminate: ["spirit"],
      },
    ],
  },
  {
    id: "speed-over-time-1",
    heading: "Speed Over Time I",
    items: [
      {
        id: "noTwinsAlternation",
        category: "Speed Over Time",
        label: "Hunt speed stayed consistent across repeated hunts, no visible alternation",
        description: "Twins randomly roll one of two fixed hunt speeds (~1.5 or ~1.9 m/s) each time.",
        eliminate: ["thetwins"],
      },
      {
        id: "noObamboCycle",
        category: "Speed Over Time",
        label: "No aggression or speed shift roughly every 2 minutes",
        description: "Obambo alternates Aggressive (~1.96 m/s) and Calm (~1.45 m/s) states, and can flip mid-hunt.",
        eliminate: ["obambo"],
      },
    ],
  },
  {
    id: "speed-over-time-2",
    heading: "Speed Over Time II",
    items: [
      {
        id: "noGalluStateShift",
        category: "Speed Over Time",
        label: "No speed-up right after salt/incense/crucifix, and no slowdown right after a hunt ends",
        description: "Gallu cycles Normal (1.7) → Enraged (1.96) → Weakened (1.36) → Normal.",
        eliminate: ["gallu"],
      },
    ],
  },
  {
    id: "stragglers-1",
    heading: "Stragglers I",
    items: [
      {
        id: "noHalfOpenDoor",
        category: "Stragglers",
        label: "Never left a door half-open — every door it touched ended up fully open or fully closed",
        description:
          "Yurei physically can't leave a door half-open. No door in its room? Fall back on whether it gets trapped there for ~90s after a smudge.",
        eliminate: ["yurei"],
      },
      {
        id: "noSingleTargetStalk",
        category: "Stragglers",
        label: "Didn't consistently roam toward one specific player over the others",
        description: "Banshee stalks one chosen target rather than roaming generally.",
        eliminate: ["banshee"],
      },
    ],
  },
  {
    id: "stragglers-2",
    heading: "Stragglers II",
    items: [
      {
        id: "lightTurnedOnBySelf",
        category: "Stragglers",
        label: "Caught it turning a light source ON by itself",
        description: "Mare can never turn a light ON, only off.",
        eliminate: ["mare"],
      },
      {
        id: "favoriteRoomChanged",
        category: "Stragglers",
        label: "Its favorite room changed at some point during the contract",
        description: "Goryo never changes its favorite room for the whole contract.",
        eliminate: ["goryo"],
      },
    ],
  },
];

export const zeroEvidenceItems: ZeroEvidenceItem[] = zeroEvidenceStages.flatMap((s) => s.items);

/**
 * Synthetic clue active only while `steadyBaseSpeed` hasn't been checked yet — until the base
 * speed test is actually run, the roster narrows to just the non-standard-speed ghosts instead
 * of showing all 30, since "not yet tested" isn't the same as "confirmed standard." EliminateView
 * injects this id into activeClueIds by default and drops it the moment steadyBaseSpeed is
 * checked (at which point that item's own `eliminate` takes over instead), or the moment an
 * Instant Confirm is checked (which overrides this default outright).
 */
export const baseSpeedDefaultClue: ZeroEvidenceItem = {
  id: "baseSpeedDefault",
  category: "Base Speed",
  label: "Base speed not yet tested — defaulting to the non-standard-speed ghosts",
  keep: BASE_SPEED_FAST_GHOSTS,
};

/**
 * Rare, highly-specific tells that confirm one ghost outright rather than ruling others out —
 * the `keep` counterpart to the elimination checklist above. Checking one of these eliminates
 * every ghost except the one named, via the same `clue.keep` handling in evaluateGhost().
 * Deliberately a curated shortlist, not exhaustive — these are the tells worth actively hunting
 * for, not the full behavioral-tells roster (that's still in Behavioral Tells outside this mode).
 */
export const zeroEvidenceConfirmTells: ZeroEvidenceItem[] = [
  {
    id: "confirmOniNoMistyEvent",
    category: "Instant Confirms",
    label: "Never triggers the misty-orb ghost event, no matter how long you watch",
    description: "Oni is the only ghost that can't trigger this event at all.",
    keep: ["oni"],
  },
  {
    id: "confirmMareLightKilled",
    category: "Instant Confirms",
    label: "A light source got flipped back off moments after being turned on nearby",
    description: "Mare can never turn a light ON, and has an elevated chance to flip one back off within seconds of a player turning it on.",
    keep: ["mare"],
  },
  {
    id: "confirmPhantomInvisibleInMedia",
    category: "Instant Confirms",
    label: "Was invisible in a photo or video, in any form or state",
    description: "Not just during a hunt — Phantom can fail to appear in captured media at any time.",
    keep: ["phantom"],
  },
  {
    id: "confirmTwinsDualLocation",
    category: "Instant Confirms",
    label: "Seemed to interact in two different spots of the house at the same time",
    keep: ["thetwins"],
  },
  {
    id: "confirmWraithTeleportFootprint",
    category: "Instant Confirms",
    label: "Teleported to a player, left EMF at their feet, then walked back to its room",
    keep: ["wraith"],
  },
  {
    id: "confirmBansheeWail",
    category: "Instant Confirms",
    label: "Got a distinct 'wail' response on the parabolic mic or recorder",
    keep: ["banshee"],
  },
  {
    id: "confirmYureiSmudgeTrap",
    category: "Instant Confirms",
    label: "Smudging trapped it in its favorite room for about 90 seconds",
    keep: ["yurei"],
  },
  {
    id: "confirmShadeNeverActiveInRoom",
    category: "Instant Confirms",
    label: "Never did events, hunts, or interactions while a player was inside its room",
    keep: ["shade"],
  },
];
