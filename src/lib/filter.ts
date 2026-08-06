import { clues } from "@/data/clues";
import {
  baseSpeedDefaultClue,
  zeroEvidenceConfirmTells,
  zeroEvidenceItems,
} from "@/data/zeroEvidenceChecklist";
import {
  SPEED_BUCKETS,
  type Evidence,
  type EvidenceCount,
  type Ghost,
  type SpeedBucket,
} from "@/lib/types";

// Behavioral tells and 0-Evidence checklist items share the same `Clue` shape and the same
// `activeClueIds` slot in EliminationState, so all of these are resolved from one combined lookup.
const allClues = [...clues, ...zeroEvidenceItems, ...zeroEvidenceConfirmTells, baseSpeedDefaultClue];

export interface EliminationState {
  foundEvidence: Evidence[];
  ruledOutEvidence: Evidence[];
  speedBucket: SpeedBucket | null;
  sanityObserved: number | null;
  activeClueIds: string[];
  /** How many evidence types this contract's difficulty shows (0-3). */
  givenEvidenceCount: EvidenceCount;
}

export const initialEliminationState: EliminationState = {
  foundEvidence: [],
  ruledOutEvidence: [],
  speedBucket: null,
  sanityObserved: null,
  activeClueIds: [],
  givenEvidenceCount: 3,
};

export interface GhostVerdict {
  ghost: Ghost;
  eliminated: boolean;
  reasons: string[];
  matchScore: number;
}

export function evaluateGhost(ghost: Ghost, state: EliminationState): GhostVerdict {
  const reasons: string[] = [];
  let matchScore = 0;

  // Found evidence must be a subset of the ghost's evidence.
  for (const ev of state.foundEvidence) {
    if (ghost.evidences.includes(ev)) {
      matchScore += 1;
    } else {
      reasons.push(`Doesn't have ${ev} evidence`);
    }
  }

  // Ruled-out evidence is only reliable proof of absence when all 3 evidence types are
  // shown this contract. Below that, crossing out a type just means it wasn't among the
  // few shown — it doesn't mean the ghost lacks it — UNLESS that type is guaranteed to
  // show regardless of difficulty (e.g. UV for Obake, Ghost Orbs for The Mimic).
  if (state.givenEvidenceCount === 3) {
    for (const ev of state.ruledOutEvidence) {
      if (ghost.evidences.includes(ev)) {
        reasons.push(`Has ${ev}, which was ruled out`);
      }
    }
  } else if (
    ghost.guaranteedEvidenceOnHighDifficulty &&
    state.ruledOutEvidence.includes(ghost.guaranteedEvidenceOnHighDifficulty)
  ) {
    reasons.push(
      `${ghost.guaranteedEvidenceOnHighDifficulty} always shows regardless of difficulty, but was ruled out`
    );
  }

  // Forced/guaranteed evidence on reduced difficulty: if every shown evidence slot is
  // already filled by found evidence and the guaranteed evidence isn't among them, rule out.
  if (
    state.givenEvidenceCount > 0 &&
    state.givenEvidenceCount < 3 &&
    ghost.guaranteedEvidenceOnHighDifficulty
  ) {
    if (
      state.foundEvidence.length >= state.givenEvidenceCount &&
      !state.foundEvidence.includes(ghost.guaranteedEvidenceOnHighDifficulty)
    ) {
      reasons.push(
        `${ghost.guaranteedEvidenceOnHighDifficulty} is guaranteed on this difficulty but wasn't found`
      );
    }
  }

  // Hunt speed bucket: at least one of the ghost's speed conditions must fall in range.
  if (state.speedBucket) {
    const bucket = SPEED_BUCKETS.find((b) => b.id === state.speedBucket)!;
    const matches = ghost.hunt.speeds.some(
      (s) => s.value >= bucket.min && s.value <= bucket.max
    );
    if (matches) {
      matchScore += 1;
    } else {
      reasons.push(`Hunt speed never falls in the "${bucket.label}" range`);
    }
  }

  // Hunt sanity: a threshold hunted at X% means the ghost's true threshold is >= X.
  if (state.sanityObserved !== null) {
    const matches = ghost.hunt.sanityThresholds.some(
      (t) => t.value >= state.sanityObserved!
    );
    if (matches) {
      matchScore += 1;
    } else {
      reasons.push(`Never hunts as low as ${state.sanityObserved}% sanity`);
    }
  }

  // Behavioral clue toggles.
  for (const clueId of state.activeClueIds) {
    const clue = allClues.find((c) => c.id === clueId);
    if (!clue) continue;
    if (clue.eliminate?.includes(ghost.id)) {
      reasons.push(clue.label);
    }
    if (clue.keep) {
      if (clue.keep.includes(ghost.id)) {
        matchScore += 2;
      } else {
        reasons.push(`Doesn't match: "${clue.label}"`);
      }
    }
  }

  return { ghost, eliminated: reasons.length > 0, reasons, matchScore };
}

export function evaluateAll(ghosts: Ghost[], state: EliminationState): GhostVerdict[] {
  return ghosts
    .map((g) => evaluateGhost(g, state))
    .sort((a, b) => {
      if (a.eliminated !== b.eliminated) return a.eliminated ? 1 : -1;
      return b.matchScore - a.matchScore;
    });
}

export function hasActiveFilters(state: EliminationState): boolean {
  // baseSpeedDefaultClue is injected automatically in 0-Evidence Mode rather than user-toggled,
  // so it shouldn't make Reset All look active when nothing else has actually been touched.
  const activeClueIds = state.activeClueIds.filter((id) => id !== baseSpeedDefaultClue.id);
  return (
    state.foundEvidence.length > 0 ||
    state.ruledOutEvidence.length > 0 ||
    state.speedBucket !== null ||
    state.sanityObserved !== null ||
    activeClueIds.length > 0
  );
}
