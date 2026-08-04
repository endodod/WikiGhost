"use client";

import { EvidenceCountSelector } from "@/components/eliminate/EvidenceCountSelector";
import { EvidenceToggleGroup, type EvidenceState } from "@/components/eliminate/EvidenceToggleGroup";
import { GhostDetail } from "@/components/wiki/GhostDetail";
import { NextStepPanel } from "@/components/eliminate/NextStepPanel";
import { ResultList } from "@/components/eliminate/ResultList";
import { SanityFilter } from "@/components/eliminate/SanityFilter";
import { SpeedFilter } from "@/components/eliminate/SpeedFilter";
import { SpeedFinderTool } from "@/components/eliminate/SpeedFinderTool";
import { TellsChecklist } from "@/components/eliminate/TellsChecklist";
import { getGhostById, ghosts } from "@/data/ghosts";
import { cn } from "@/lib/cn";
import { evaluateAll, hasActiveFilters, type EliminationState } from "@/lib/filter";
import {
  EVIDENCE_TYPES,
  type Evidence,
  type EvidenceCount,
  type SpeedBucket,
} from "@/lib/types";
import { useUrlParams } from "@/lib/useUrlParams";
import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const initialEvidenceStates: Record<Evidence, EvidenceState> = Object.fromEntries(
  EVIDENCE_TYPES.map((ev) => [ev, "unknown"])
) as Record<Evidence, EvidenceState>;

export function EliminateView() {
  const [evidenceStates, setEvidenceStates] = useState(initialEvidenceStates);
  const [givenEvidenceCount, setGivenEvidenceCount] = useState<EvidenceCount>(3);
  const [speedBucket, setSpeedBucket] = useState<SpeedBucket | null>(null);
  const [sanityObserved, setSanityObserved] = useState<number | null>(null);
  const [activeClueIds, setActiveClueIds] = useState<string[]>([]);
  const { values, push } = useUrlParams(["fghost"]);
  const selectedGhost = values.fghost ? getGhostById(values.fghost) ?? null : null;
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const [crossedOutIds, setCrossedOutIds] = useState<string[]>([]);
  const [speedFinderResetKey, setSpeedFinderResetKey] = useState(0);

  const foundCount = Object.values(evidenceStates).filter((s) => s === "found").length;

  const state: EliminationState = useMemo(
    () => ({
      foundEvidence: EVIDENCE_TYPES.filter((ev) => evidenceStates[ev] === "found"),
      ruledOutEvidence: EVIDENCE_TYPES.filter((ev) => evidenceStates[ev] === "ruledOut"),
      speedBucket,
      sanityObserved,
      activeClueIds,
      givenEvidenceCount,
    }),
    [evidenceStates, speedBucket, sanityObserved, activeClueIds, givenEvidenceCount]
  );

  const verdicts = useMemo(() => evaluateAll(ghosts, state), [state]);
  const filtersActive =
    hasActiveFilters(state) || highlightedIds.length > 0 || crossedOutIds.length > 0;

  const remainingCandidates = useMemo(
    () =>
      verdicts
        .filter((v) => !v.eliminated && !crossedOutIds.includes(v.ghost.id))
        .map((v) => v.ghost),
    [verdicts, crossedOutIds]
  );

  function toggleFoundEvidence(ev: Evidence) {
    setEvidenceStates((cur) => {
      if (cur[ev] === "found") return { ...cur, [ev]: "unknown" };
      if (foundCount >= givenEvidenceCount) return cur; // no more evidence slots to fill
      return { ...cur, [ev]: "found" };
    });
  }

  function toggleRuledOutEvidence(ev: Evidence) {
    setEvidenceStates((cur) => ({
      ...cur,
      [ev]: cur[ev] === "ruledOut" ? "unknown" : "ruledOut",
    }));
  }

  function toggleClue(id: string) {
    setActiveClueIds((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]));
  }

  function toggleHighlight(id: string) {
    setHighlightedIds((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]));
    setCrossedOutIds((cur) => cur.filter((c) => c !== id));
  }

  function applySpeedMatches(ids: string[]) {
    setHighlightedIds(ids);
  }

  function toggleCrossOut(id: string) {
    setCrossedOutIds((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]));
    setHighlightedIds((cur) => cur.filter((c) => c !== id));
  }

  function reset() {
    setEvidenceStates(initialEvidenceStates);
    setSpeedBucket(null);
    setSanityObserved(null);
    setActiveClueIds([]);
    setHighlightedIds([]);
    setCrossedOutIds([]);
    setSpeedFinderResetKey((k) => k + 1);
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold text-foreground">Find My Ghost</h1>
          <p className="text-sm text-muted">
            Toggle the evidence you&rsquo;ve found or ruled out, add sanity/speed readings and tells, and narrow down
            the culprit.
          </p>
        </div>
      </div>

      <div>
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-4 rounded-xl border border-surface-border bg-surface p-4 lg:flex-row lg:items-stretch lg:gap-6">
            <div className="flex flex-col gap-3 lg:flex-1">
              <EvidenceCountSelector value={givenEvidenceCount} onChange={setGivenEvidenceCount} />

              <EvidenceToggleGroup
                states={evidenceStates}
                onToggleFound={toggleFoundEvidence}
                onToggleRuledOut={toggleRuledOutEvidence}
              />

              <div className="flex flex-col gap-3 border-t border-surface-border pt-3">
                <SanityFilter value={sanityObserved} onChange={setSanityObserved} />
                <SpeedFilter value={speedBucket} onChange={setSpeedBucket} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 lg:w-72 lg:shrink-0 lg:items-stretch lg:border-l lg:border-surface-border lg:pl-6">
              <button
                onClick={reset}
                disabled={!filtersActive}
                title="Resets every filter, tell, and highlight across the whole tool"
                className={cn(
                  "flex shrink-0 items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition",
                  filtersActive
                    ? "border-surface-border bg-surface-2 text-foreground hover:border-red-500/40 hover:text-red-400"
                    : "cursor-not-allowed border-surface-border text-muted/50"
                )}
              >
                <RotateCcw className="size-3.5" />
                Reset All
              </button>

              <SpeedFinderTool
                key={speedFinderResetKey}
                candidates={remainingCandidates}
                onHighlightMatches={applySpeedMatches}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-5 lg:w-80 lg:shrink-0">
            <NextStepPanel
              remaining={remainingCandidates}
              evidenceStates={evidenceStates}
              givenEvidenceCount={givenEvidenceCount}
              speedBucket={speedBucket}
              sanityObserved={sanityObserved}
              activeClueIds={activeClueIds}
            />

            <TellsChecklist activeIds={activeClueIds} onToggle={toggleClue} />
          </div>

          <div className="min-w-0 flex-1">
            <ResultList
              verdicts={verdicts}
              highlightedIds={highlightedIds}
              crossedOutIds={crossedOutIds}
              onSelectGhost={(ghost) => push({ fghost: ghost.id })}
              onToggleHighlight={toggleHighlight}
              onToggleCrossOut={toggleCrossOut}
            />
          </div>
        </div>
      </div>

      {selectedGhost && (
        <GhostDetail
          ghost={selectedGhost}
          onClose={() => window.history.back()}
          variant="compact"
          onViewInWiki={() => push({ tab: "wiki", wghost: selectedGhost.id, fghost: null })}
        />
      )}
    </div>
  );
}
