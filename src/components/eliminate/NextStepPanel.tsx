"use client";

import type { EvidenceState } from "@/components/eliminate/EvidenceToggleGroup";
import {
  getDeadEndSummary,
  getNextStepRecommendations,
  isNotoriouslyHard,
  type Recommendation,
} from "@/lib/recommend";
import { EVIDENCE_TYPES, type Evidence, type EvidenceCount, type Ghost, type SpeedBucket } from "@/lib/types";
import { Compass, Target, Skull } from "lucide-react";
import { useMemo } from "react";

interface NextStepPanelProps {
  remaining: Ghost[];
  evidenceStates: Record<Evidence, EvidenceState>;
  givenEvidenceCount: EvidenceCount;
  speedBucket: SpeedBucket | null;
  sanityObserved: number | null;
  activeClueIds: string[];
}

const TIER_STYLES: Record<Recommendation["tier"], string> = {
  evidence: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
  "hunt-read": "text-sky-400 bg-sky-400/10 ring-sky-400/30",
  "active-test": "text-amber-400 bg-amber-400/10 ring-amber-400/30",
  timing: "text-violet-400 bg-violet-400/10 ring-violet-400/30",
  special: "text-rose-400 bg-rose-400/10 ring-rose-400/30",
};

export function NextStepPanel({
  remaining,
  evidenceStates,
  givenEvidenceCount,
  speedBucket,
  sanityObserved,
  activeClueIds,
}: NextStepPanelProps) {
  const recommendations = useMemo(
    () =>
      getNextStepRecommendations(
        {
          ghosts: remaining,
          evidenceStates,
          givenEvidenceCount,
          speedBucket,
          sanityObserved,
          activeClueIds,
        },
        1
      ),
    [remaining, evidenceStates, givenEvidenceCount, speedBucket, sanityObserved, activeClueIds]
  );

  if (remaining.length === 0) return null;

  if (remaining.length === 1) {
    const ghost = remaining[0];
    return (
      <div className="flex items-start gap-3 rounded-xl border border-accent bg-accent/10 p-4">
        <Target className="mt-0.5 size-5 shrink-0 text-accent" />
        <div>
          <p className="text-sm font-semibold text-foreground">
            Down to one: {ghost.name}
          </p>
          <p className="mt-0.5 text-xs text-muted">
            Every active clue is consistent with only this ghost. Confirm with a Ouija Board or
            crucifix burn if you want certainty before engaging.
          </p>
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    const { hardTells } = getDeadEndSummary(remaining);
    const anyNotorious = remaining.some((g) => isNotoriouslyHard(g.id));
    return (
      <div className="flex items-start gap-3 rounded-xl border border-surface-border bg-surface p-4">
        <Skull className="mt-0.5 size-5 shrink-0 text-muted" />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-foreground">
            No more clean tests — {remaining.length} candidates left
          </p>
          <p className="text-xs text-muted">
            {anyNotorious
              ? "You've landed on ghosts the community broadly agrees are hardest to pin down without direct confirmation. What's left is close to a coin flip — pick one and treat it as an educated guess."
              : "None of the remaining behavioral tells distinguish between these candidates further. Try a Ouija Board question, a crucifix burn, or just commit to a guess."}
          </p>
          <ul className="flex flex-col gap-1 text-xs text-muted">
            {hardTells.map(({ ghost, tell }) => (
              <li key={ghost.id}>
                <span className="font-medium text-foreground/90">{ghost.name}:</span> {tell}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const top = recommendations[0];
  // Only meaningful when the top step is itself a test "for" one specific still-live ghost
  // (a "keep" clue) — not just whichever ghost currently has the highest match score, which
  // could be a totally different ghost than what the recommended test actually checks.
  const stepGhost = top.targetGhostId ? remaining.find((g) => g.id === top.targetGhostId) : undefined;
  const foundCount = EVIDENCE_TYPES.filter((ev) => evidenceStates[ev] === "found").length;
  const subtitle = stepGhost
    ? `Check for ${stepGhost.name}`
    : top.tier === "evidence"
    ? foundCount === 0
      ? "Gather evidence"
      : "More evidence"
    : "Narrow it down";
  // The clue engine already surfaced this ghost's best tell as the main step, so offer its
  // next-best tells here instead of repeating the same one.
  const specialBehaviorTells = stepGhost?.noEvidenceTells.slice(1, 3) ?? [];

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-surface-border bg-surface p-4">
      <div className="flex items-center gap-2">
        <Compass className="size-4 text-accent" />
        <h2 className="text-sm font-semibold text-foreground">Next Step</h2>
        <span className="text-[11px] font-semibold text-accent">{subtitle}</span>
      </div>

      <div className="flex flex-col gap-1.5 rounded-lg border border-accent/40 bg-accent/5 p-3">
        <span
          className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${TIER_STYLES[top.tier]}`}
        >
          {top.tierLabel}
        </span>
        <p className="text-sm font-medium text-foreground">{top.title}</p>
        <p className="text-xs text-muted">{top.detail}</p>
      </div>

      {stepGhost && specialBehaviorTells.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
            Also worth trying on {stepGhost.name}
          </span>
          <ul className="flex flex-col gap-1.5">
            {specialBehaviorTells.map((tell, i) => (
              <li key={i} className="text-xs text-foreground/90">
                {tell}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
