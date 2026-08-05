"use client";

import { EvidenceCountInput } from "@/components/tos/EvidenceCountInput";
import { GhostCard } from "@/components/tos/GhostCard";
import { GhostDetail } from "@/components/tos/GhostDetail";
import { Stopwatch } from "@/components/shared/Stopwatch";
import { StatFilter } from "@/components/tos/StatFilter";
import { TosEvidenceToggleGroup, type TosEvidenceState } from "@/components/tos/TosEvidenceToggleGroup";
import { TosSpeedFinderTool } from "@/components/tos/TosSpeedFinderTool";
import { getTosGhostById, tosGhosts } from "@/data/tos/ghosts";
import { cn } from "@/lib/cn";
import { evaluateAllTosGhosts } from "@/lib/tos/filter";
import { TOS_EVIDENCE_TYPES, type TosEvidence, type TosInteraction } from "@/lib/tos/types";
import { useUrlParams } from "@/lib/useUrlParams";
import { ChevronDown, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const initialTosEvidenceStates: Record<TosEvidence, TosEvidenceState> = Object.fromEntries(
  TOS_EVIDENCE_TYPES.map((ev) => [ev, "unknown"])
) as Record<TosEvidence, TosEvidenceState>;

const CANDLES_OPTIONS = [
  { value: true, label: "Blows Out" },
  { value: false, label: "Never Touches" },
];

const FLX_POD_OPTIONS = [
  { value: true, label: "Turns Off" },
  { value: false, label: "Never Interacts" },
];

const INTERACTION_OPTIONS: { value: TosInteraction; label: string }[] = [
  { value: "both", label: "On & Off" },
  { value: "on-only", label: "On Only" },
  { value: "off-only", label: "Off Only" },
  { value: "none", label: "Never" },
];

const SPEED_OPTIONS = [
  { value: 2.42, label: "2.42 m/s" },
  { value: 2.6, label: "2.60 m/s" },
];

const LOS_SPEED_OPTIONS = [
  { value: 2, label: "2.00 m/s" },
  { value: 2.5, label: "2.50 m/s" },
  { value: 2.7, label: "2.70 m/s" },
  { value: 3.1, label: "3.10 m/s" },
];

const HOLY_WATER_OPTIONS = [
  { value: 3, label: "3s" },
  { value: 5, label: "5s" },
];

const COOLDOWN_OPTIONS = [
  { value: 40, label: "40s" },
  { value: 60, label: "60s" },
  { value: 90, label: "90s" },
];

export function FindGhostView() {
  const [realCount, setRealCount] = useState(3);
  const [fakeCount, setFakeCount] = useState(0);
  const [evidenceStates, setEvidenceStates] = useState(initialTosEvidenceStates);
  const [candles, setCandles] = useState<boolean | null>(null);
  const [flxPod, setFlxPod] = useState<boolean | null>(null);
  const [lights, setLights] = useState<TosInteraction | null>(null);
  const [radio, setRadio] = useState<TosInteraction | null>(null);
  const [speed, setSpeed] = useState<number | null>(null);
  const [losSpeed, setLosSpeed] = useState<number | null>(null);
  const [holyWater, setHolyWater] = useState<number | null>(null);
  const [cooldown, setCooldown] = useState<number | null>(null);
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const [crossedOutIds, setCrossedOutIds] = useState<string[]>([]);
  const [speedFinderResetKey, setSpeedFinderResetKey] = useState(0);
  // Mobile-only: lets the evidence/filters panel be tucked away to free up screen space
  // for the result grid. Always expanded on desktop, regardless of this state.
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [showRuledOut, setShowRuledOut] = useState(false);
  const { values, push } = useUrlParams(["tfghost"]);
  const openGhost = values.tfghost ? getTosGhostById(values.tfghost) ?? null : null;

  const totalShown = realCount + fakeCount;
  const needsFullSet = fakeCount > 0;

  const selected = useMemo(
    () => TOS_EVIDENCE_TYPES.filter((ev) => evidenceStates[ev] === "found"),
    [evidenceStates]
  );
  const ruledOutEvidence = useMemo(
    () => TOS_EVIDENCE_TYPES.filter((ev) => evidenceStates[ev] === "ruledOut"),
    [evidenceStates]
  );

  const statFiltersActive =
    candles !== null ||
    flxPod !== null ||
    lights !== null ||
    radio !== null ||
    speed !== null ||
    losSpeed !== null ||
    holyWater !== null ||
    cooldown !== null;
  const filtersActive =
    selected.length > 0 ||
    ruledOutEvidence.length > 0 ||
    statFiltersActive ||
    highlightedIds.length > 0 ||
    crossedOutIds.length > 0;
  // Shown on the collapsed mobile panel header so it's clear filters are still applied.
  const panelActiveCount =
    selected.length +
    ruledOutEvidence.length +
    [candles, flxPod, lights, radio, speed, losSpeed, holyWater, cooldown].filter((v) => v !== null).length;

  function changeRealCount(n: number) {
    setRealCount(n);
    setFakeCount((f) => Math.min(f, 3 - n));
  }

  function changeFakeCount(n: number) {
    setFakeCount(n);
    setRealCount((r) => Math.min(r, 3 - n));
  }

  function toggleFoundEvidence(ev: TosEvidence) {
    setEvidenceStates((cur) => ({ ...cur, [ev]: cur[ev] === "found" ? "unknown" : "found" }));
  }

  function toggleRuledOutEvidence(ev: TosEvidence) {
    setEvidenceStates((cur) => ({ ...cur, [ev]: cur[ev] === "ruledOut" ? "unknown" : "ruledOut" }));
  }

  function toggleHighlight(id: string) {
    setHighlightedIds((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]));
    setCrossedOutIds((cur) => cur.filter((c) => c !== id));
  }

  function toggleCrossOut(id: string) {
    setCrossedOutIds((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]));
    setHighlightedIds((cur) => cur.filter((c) => c !== id));
  }

  function resetAll() {
    setEvidenceStates(initialTosEvidenceStates);
    setCandles(null);
    setFlxPod(null);
    setLights(null);
    setRadio(null);
    setSpeed(null);
    setLosSpeed(null);
    setHolyWater(null);
    setCooldown(null);
    setHighlightedIds([]);
    setCrossedOutIds([]);
    setSpeedFinderResetKey((k) => k + 1);
  }

  const evidenceCandidates = useMemo(() => {
    if (selected.length === 0) return tosGhosts;
    if (!needsFullSet) {
      return tosGhosts.filter((g) => selected.every((ev) => g.evidence.includes(ev)));
    }
    if (selected.length < totalShown) return null; // not enough info yet for the real/fake math
    return tosGhosts.filter((g) => selected.filter((ev) => g.evidence.includes(ev)).length >= realCount);
  }, [selected, needsFullSet, totalShown, realCount]);

  const verdicts = useMemo(() => {
    if (evidenceCandidates === null) return null;
    return evaluateAllTosGhosts(tosGhosts, {
      selected,
      ruledOut: ruledOutEvidence,
      realCount,
      fakeCount,
      candles,
      flxPod,
      lights,
      radio,
      speed,
      losSpeed,
      holyWater,
      cooldown,
    });
  }, [
    evidenceCandidates,
    selected,
    ruledOutEvidence,
    realCount,
    fakeCount,
    candles,
    flxPod,
    lights,
    radio,
    speed,
    losSpeed,
    holyWater,
    cooldown,
  ]);

  const visibleCandidates = useMemo(
    () => verdicts?.filter((v) => !v.eliminated).map((v) => v.ghost) ?? [],
    [verdicts]
  );
  const ruledOutGhosts = useMemo(() => verdicts?.filter((v) => v.eliminated) ?? [], [verdicts]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Find My Ghost</h1>
        <p className="text-sm text-muted">
          Set how many real and fake evidence readings your difficulty gives, toggle the evidence you&rsquo;ve
          confirmed, and add any behavioral or hunt stat readings you&rsquo;ve observed to narrow down the culprit.
        </p>
      </div>

      <div className="rounded-xl border border-surface-border bg-surface p-4">
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="flex min-h-9 w-full items-center justify-between gap-2 sm:hidden"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            Evidence &amp; Filters
            {panelActiveCount > 0 && (
              <span className="rounded-full bg-accent-strong px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {panelActiveCount}
              </span>
            )}
          </span>
          <ChevronDown
            className={cn("size-4 text-muted transition-transform", filtersOpen && "rotate-180")}
          />
        </button>

        <div
          className={cn(
            "mt-3 flex-col gap-4 sm:mt-0 sm:flex lg:flex-row lg:items-stretch lg:gap-6",
            filtersOpen ? "flex" : "hidden"
          )}
        >
          <div className="flex flex-col gap-3 lg:flex-1">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <EvidenceCountInput label="Real" value={realCount} onChange={changeRealCount} />
              <EvidenceCountInput label="Fake" value={fakeCount} onChange={changeFakeCount} />
            </div>
            <p className="text-xs text-muted">
              {!needsFullSet
                ? `${realCount} real evidence, 0 false — every reading you toggle must belong to the ghost's true evidence set.`
                : `${realCount} real evidence, ${fakeCount} false — select all ${totalShown} readings you found, then any ghost sharing at least ${realCount} of them with your selection is still a candidate.`}
            </p>

            <TosEvidenceToggleGroup
              states={evidenceStates}
              onToggleFound={toggleFoundEvidence}
              onToggleRuledOut={toggleRuledOutEvidence}
            />

            <div className="flex flex-col gap-4 border-t border-surface-border pt-3">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-evenly">
                <div className="sm:shrink-0">
                  <StatFilter label="Candles" options={CANDLES_OPTIONS} value={candles} onChange={setCandles} />
                </div>
                <div className="sm:shrink-0">
                  <StatFilter label="FLX-POD" options={FLX_POD_OPTIONS} value={flxPod} onChange={setFlxPod} />
                </div>
                <div className="sm:shrink-0">
                  <StatFilter
                    label="Hunt Cooldown"
                    options={COOLDOWN_OPTIONS}
                    value={cooldown}
                    onChange={setCooldown}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-evenly">
                <div className="sm:shrink-0">
                  <StatFilter label="Lights" options={INTERACTION_OPTIONS} value={lights} onChange={setLights} />
                </div>
                <div className="sm:shrink-0">
                  <StatFilter label="Radio" options={INTERACTION_OPTIONS} value={radio} onChange={setRadio} />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-evenly">
                <div className="sm:shrink-0">
                  <StatFilter
                    label="Line-of-Sight Speed"
                    options={LOS_SPEED_OPTIONS}
                    value={losSpeed}
                    onChange={setLosSpeed}
                  />
                </div>
                <div className="sm:shrink-0">
                  <StatFilter label="Base Speed" options={SPEED_OPTIONS} value={speed} onChange={setSpeed} />
                </div>
                <div className="sm:shrink-0">
                  <StatFilter
                    label="Holy Water Stun"
                    options={HOLY_WATER_OPTIONS}
                    value={holyWater}
                    onChange={setHolyWater}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:w-72 lg:shrink-0 lg:items-stretch lg:border-l lg:border-surface-border lg:pl-6">
            <div className="order-1 w-full sm:order-2">
              <TosSpeedFinderTool
                key={speedFinderResetKey}
                candidates={verdicts ? visibleCandidates : tosGhosts}
                onHighlightMatches={setHighlightedIds}
              />
            </div>

            <div className="order-1 w-full sm:order-2">
              <Stopwatch />
            </div>

            <button
              onClick={resetAll}
              disabled={!filtersActive}
              title="Resets every filter and highlight across the whole tool"
              className={cn(
                "order-2 flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition sm:order-1 sm:min-h-0 sm:py-1.5",
                filtersActive
                  ? "border-surface-border bg-surface-2 text-foreground hover:border-red-500/40 hover:text-red-400"
                  : "cursor-not-allowed border-surface-border text-muted/50"
              )}
            >
              <RotateCcw className="size-3.5" />
              Reset All
            </button>
          </div>
        </div>
      </div>

      {needsFullSet && selected.length > 0 && selected.length < totalShown ? (
        <p className="py-8 text-center text-sm text-muted">
          Select all {totalShown} evidence readings you found to narrow candidates with {fakeCount} fake evidence in
          the mix.
        </p>
      ) : (
        <>
          <p className="text-xs text-muted">
            {visibleCandidates.length} of {tosGhosts.length} ghosts match
          </p>
          {visibleCandidates.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted">No ghosts match this combination — double-check your readings.</p>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCandidates.map((ghost) => (
                <GhostCard
                  key={ghost.id}
                  ghost={ghost}
                  highlighted={highlightedIds.includes(ghost.id)}
                  crossedOut={crossedOutIds.includes(ghost.id)}
                  onToggleHighlight={() => toggleHighlight(ghost.id)}
                  onToggleCrossOut={() => toggleCrossOut(ghost.id)}
                  onSelect={(g) => push({ tfghost: g.id })}
                />
              ))}
            </div>
          )}

          {ruledOutGhosts.length > 0 && (
            <div>
              <button
                onClick={() => setShowRuledOut((s) => !s)}
                className="flex w-full items-center justify-between rounded-lg border border-surface-border bg-surface-2/50 px-3 py-2 text-sm font-medium text-muted transition hover:text-foreground"
              >
                Ruled Out ({ruledOutGhosts.length})
                <ChevronDown className={cn("size-4 transition-transform", showRuledOut && "rotate-180")} />
              </button>
              {showRuledOut && (
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {ruledOutGhosts.map((v) => (
                    <GhostCard
                      key={v.ghost.id}
                      ghost={v.ghost}
                      reasons={v.reasons}
                      highlighted={highlightedIds.includes(v.ghost.id)}
                      crossedOut={crossedOutIds.includes(v.ghost.id)}
                      onToggleHighlight={() => toggleHighlight(v.ghost.id)}
                      onToggleCrossOut={() => toggleCrossOut(v.ghost.id)}
                      onSelect={(g) => push({ tfghost: g.id })}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}

      {openGhost && <GhostDetail ghost={openGhost} onClose={() => window.history.back()} />}
    </div>
  );
}
