export type Evidence =
  | "EMF5"
  | "UV"
  | "GhostOrbs"
  | "SpiritBox"
  | "GhostWriting"
  | "Freezing"
  | "DOTS";

export const EVIDENCE_TYPES: Evidence[] = [
  "EMF5",
  "UV",
  "GhostOrbs",
  "SpiritBox",
  "GhostWriting",
  "Freezing",
  "DOTS",
];

export interface HuntSanityCondition {
  condition: string;
  value: number; // sanity % threshold — ghost may hunt at or below this value
}

export interface HuntSpeedCondition {
  condition: string;
  value: number; // m/s
}

export type GenderRestriction = "female" | null;

export interface Ghost {
  id: string;
  name: string;
  /** Every ghost has 3 true evidences, except The Mimic, which can also present a 4th (Ghost Orbs) via its ability. */
  evidences: Evidence[];
  hunt: {
    sanityThresholds: HuntSanityCondition[];
    speeds: HuntSpeedCondition[];
  };
  genderRestriction?: GenderRestriction;
  smudgeBehavior?: string;
  reHuntCooldown?: string;
  abilities: string[];
  /** Ranked easiest/fastest first — the best ways to identify this ghost without evidence tools. */
  noEvidenceTells: string[];
  guaranteedEvidenceOnHighDifficulty?: Evidence;
  /** Exactly the top 3 ways to identify this ghost, mixing tells and behavior — used by the compact Find My Ghost detail view. */
  topIdentifiers: string[];
}

/** How many evidence types the current contract's difficulty actually shows (0-3). */
export type EvidenceCount = 0 | 1 | 2 | 3;

export const EVIDENCE_COUNTS: EvidenceCount[] = [0, 1, 2, 3];

export type SpeedBucket = "slow" | "normal" | "fast";

export const SPEED_BUCKETS: {
  id: SpeedBucket;
  label: string;
  min: number;
  max: number;
}[] = [
  { id: "slow", label: "Slow", min: 0, max: 1.49 },
  { id: "normal", label: "Normal", min: 1.5, max: 1.99 },
  { id: "fast", label: "Fast", min: 2.0, max: 99 },
];

export interface Clue {
  id: string;
  label: string;
  category: string;
  /** If set, only ghosts in this list can survive this clue being active. */
  keep?: string[];
  /** If set, ghosts in this list are eliminated when this clue is active. */
  eliminate?: string[];
}
