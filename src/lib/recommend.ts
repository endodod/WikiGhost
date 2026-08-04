import { clues } from "@/data/clues";
import type { EvidenceState } from "@/components/eliminate/EvidenceToggleGroup";
import { EVIDENCE_META } from "@/data/evidence";
import {
  EVIDENCE_TYPES,
  type Clue,
  type Evidence,
  type EvidenceCount,
  type Ghost,
  type SpeedBucket,
} from "@/lib/types";

/**
 * "Find My Ghost" next-step advisor.
 *
 * Same staged philosophy as a zero-evidence speedrun walkthrough (read the
 * first hunt for max free information, then active room setups, then
 * consumable/timing tests, then Ouija-tier last resorts) — but computed live
 * off whichever ghosts are still in play and the actual `clues` catalog,
 * instead of a fixed script. New ghosts/clues added to the data files are
 * picked up automatically with no changes needed here.
 */

export type RecommendationTier =
  | "evidence"
  | "hunt-read"
  | "active-test"
  | "timing"
  | "special";

const TIER_LABEL: Record<RecommendationTier, string> = {
  evidence: "Check evidence",
  "hunt-read": "Watch the next hunt",
  "active-test": "Set up a room test",
  timing: "Time a cooldown",
  special: "Long-shot / research test",
};

const TIER_ORDER: RecommendationTier[] = [
  "evidence",
  "hunt-read",
  "active-test",
  "timing",
  "special",
];

export interface Recommendation {
  tier: RecommendationTier;
  tierLabel: string;
  title: string;
  detail: string;
  /** How many of the currently-remaining candidates this could rule out. */
  splits: number;
  remaining: number;
  /** Set only when this step is a "keep"-type tell for exactly one still-live ghost — i.e. the test actually confirms that specific ghost, not just a general narrowing signal. */
  targetGhostId?: string;
}

/** Preferred check order for equally-informative evidence tips (cheapest/fastest tools first). */
const EVIDENCE_TIP_ORDER: Evidence[] = [
  "GhostOrbs",
  "Freezing",
  "UV",
  "SpiritBox",
  "EMF5",
  "DOTS",
  "GhostWriting",
];

const PASSIVE_CATEGORIES = new Set(["Movement & Behavior", "Sound & Sight"]);
const ACTIVE_CATEGORIES = new Set(["Power & Elements", "Doors & Objects"]);

function clueSplits(clue: Clue, remainingIds: Set<string>): number {
  let n = 0;
  for (const id of remainingIds) {
    if (clue.eliminate?.includes(id)) n++;
    else if (clue.keep && !clue.keep.includes(id)) n++;
  }
  return n;
}

function tierForClue(clue: Clue): RecommendationTier {
  if (PASSIVE_CATEGORIES.has(clue.category)) return "hunt-read";
  if (ACTIVE_CATEGORIES.has(clue.category)) return "active-test";
  if (clue.category === "Timing") return "timing";
  return "special";
}

export interface RecommendInput {
  ghosts: Ghost[];
  evidenceStates: Record<Evidence, EvidenceState>;
  givenEvidenceCount: EvidenceCount;
  speedBucket: SpeedBucket | null;
  sanityObserved: number | null;
  activeClueIds: string[];
}

export function getNextStepRecommendations(
  { ghosts, evidenceStates, givenEvidenceCount, speedBucket, sanityObserved, activeClueIds }: RecommendInput,
  maxResults = 3
): Recommendation[] {
  const remaining = ghosts;
  const remainingIds = new Set(remaining.map((g) => g.id));
  const total = remaining.length;
  if (total <= 1) return [];

  const recs: Recommendation[] = [];

  // --- Evidence checks ---
  const foundCount = EVIDENCE_TYPES.filter((ev) => evidenceStates[ev] === "found").length;
  const canFindMoreEvidence = foundCount < givenEvidenceCount;
  for (const ev of EVIDENCE_TIP_ORDER) {
    if (evidenceStates[ev] !== "unknown") continue;
    if (!canFindMoreEvidence) continue; // all evidence slots for this difficulty are already filled
    const hasCount = remaining.filter((g) => g.evidences.includes(ev)).length;
    const lacksCount = total - hasCount;
    if (hasCount === 0 || lacksCount === 0) continue; // wouldn't split anything
    recs.push({
      tier: "evidence",
      tierLabel: TIER_LABEL.evidence,
      title: `Test for ${EVIDENCE_META[ev].label}`,
      detail: `${hasCount} of ${total} remaining ghost${total === 1 ? "" : "s"} show this evidence, ${lacksCount} don't — resolves either way.`,
      // Fixed check-order priority (not information value) — evidence types are recommended
      // in the same practical sequence every time, earliest in EVIDENCE_TIP_ORDER first.
      splits: EVIDENCE_TIP_ORDER.length - EVIDENCE_TIP_ORDER.indexOf(ev),
      remaining: total,
    });
  }

  // --- Observed hunt speed (only worth suggesting if not yet logged) ---
  if (speedBucket === null) {
    const flaggable = remaining.filter((g) =>
      g.hunt.speeds.some((s) => s.value < 1.5 || s.value >= 2.0)
    ).length;
    if (flaggable > 0) {
      recs.push({
        tier: "hunt-read",
        tierLabel: TIER_LABEL["hunt-read"],
        title: "Clock the hunt speed",
        detail: `${flaggable} of ${total} remaining ghosts have a non-standard base or conditional speed — an off-normal speed during the next hunt narrows things fast.`,
        splits: flaggable,
        remaining: total,
      });
    }
  }

  // --- Observed hunt sanity threshold ---
  if (sanityObserved === null) {
    const flaggable = remaining.filter((g) =>
      g.hunt.sanityThresholds.some((t) => Math.abs(t.value - 50) > 10)
    ).length;
    if (flaggable > 0) {
      recs.push({
        tier: "hunt-read",
        tierLabel: TIER_LABEL["hunt-read"],
        title: "Note the sanity % when it hunts",
        detail: `${flaggable} of ${total} remaining ghosts hunt at an unusual sanity threshold rather than the default 50%.`,
        splits: flaggable,
        remaining: total,
      });
    }
  }

  // --- Behavioral clues, grouped into stages by category ---
  for (const clue of clues) {
    if (activeClueIds.includes(clue.id)) continue;
    // A "keep" clue whose target ghost(s) are already eliminated isn't a real test — a
    // negative result is already guaranteed, so it can't discriminate among what's left.
    if (clue.keep && !clue.keep.some((id) => remainingIds.has(id))) continue;
    const splits = clueSplits(clue, remainingIds);
    if (splits === 0) continue; // no remaining ghost is affected by this clue right now
    // Only attribute this tip to a single ghost if it's a "keep" clue with exactly one
    // still-live candidate it could confirm — otherwise it's a general narrowing signal,
    // not a test "for" any one specific ghost.
    const liveKeepIds = clue.keep?.filter((id) => remainingIds.has(id));
    recs.push({
      tier: tierForClue(clue),
      tierLabel: TIER_LABEL[tierForClue(clue)],
      title: clue.label,
      detail: `Confirming this would rule out ${splits} of ${total} remaining ghost${total === 1 ? "" : "s"}.`,
      splits,
      remaining: total,
      targetGhostId: liveKeepIds?.length === 1 ? liveKeepIds[0] : undefined,
    });
  }

  recs.sort((a, b) => {
    const tierDiff = TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier);
    if (tierDiff !== 0) return tierDiff;
    return b.splits - a.splits;
  });

  return recs.slice(0, maxResults);
}

/** Ghosts community consensus flags as hardest to pin down without direct evidence confirmation. */
const NOTORIOUSLY_HARD_IDS = new Set(["mare", "demon", "goryo", "yurei", "spirit", "shade", "dayan"]);

export interface DeadEndSummary {
  ghosts: Ghost[];
  hardTells: { ghost: Ghost; tell: string }[];
}

/** Called when no recommendation can narrow things further — mirrors the "Unholy Trinity" endgame note. */
export function getDeadEndSummary(remaining: Ghost[]): DeadEndSummary {
  const hardTells = remaining.map((g) => ({
    ghost: g,
    tell: g.noEvidenceTells[0] ?? g.abilities[0] ?? "No further passive tell documented — this one may come down to a guess.",
  }));
  return { ghosts: remaining, hardTells };
}

export function isNotoriouslyHard(ghostId: string): boolean {
  return NOTORIOUSLY_HARD_IDS.has(ghostId);
}
