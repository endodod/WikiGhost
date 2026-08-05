"use client";

import { bpmToSpeed } from "@/lib/speedAudio";
import type { TosGhost } from "@/lib/tos/types";
import { RotateCcw, Target, Timer } from "lucide-react";
import { useMemo, useState } from "react";

interface TosSpeedFinderToolProps {
  /** Currently matching candidates — only these can be highlighted as matches. */
  candidates: TosGhost[];
  onHighlightMatches: (ids: string[]) => void;
}

/** Tap along with the ghost's footsteps; taps more than 2.5s apart start a fresh session. */
const TAP_TIMEOUT_MS = 2500;
const MAX_TAPS = 8;

function matchTolerance(speedMs: number): number {
  return Math.max(0.2, speedMs * 0.15);
}

/** Mirrors Phasmophobia's SpeedFinderTool — TOS ghosts only expose a single base speed and
 * line-of-sight speed (no multi-stage hunt speeds), so a tapped estimate is matched against both. */
export function TosSpeedFinderTool({ candidates, onHighlightMatches }: TosSpeedFinderToolProps) {
  const [taps, setTaps] = useState<number[]>([]);
  const [applied, setApplied] = useState(false);

  const estimate = useMemo(() => {
    if (taps.length < 2) return null;
    const intervals = taps.slice(1).map((t, i) => t - taps[i]);
    const sorted = [...intervals].sort((a, b) => a - b);
    const medianMs = sorted[Math.floor(sorted.length / 2)];
    if (medianMs <= 0) return null;
    const bpm = 60000 / medianMs;
    return { bpm, speed: bpmToSpeed(bpm) };
  }, [taps]);

  const matches = useMemo(() => {
    if (!estimate) return [];
    const tol = matchTolerance(estimate.speed);
    return candidates.filter(
      (g) => Math.abs(g.speed - estimate.speed) <= tol || Math.abs(g.losSpeed - estimate.speed) <= tol
    );
  }, [estimate, candidates]);

  function handleTap() {
    const now = Date.now();
    setApplied(false);
    setTaps((cur) => {
      const last = cur[cur.length - 1];
      const fresh = last !== undefined && now - last > TAP_TIMEOUT_MS ? [] : cur;
      return [...fresh, now].slice(-MAX_TAPS);
    });
  }

  function handleReset() {
    setTaps([]);
    setApplied(false);
    onHighlightMatches([]);
  }

  function handleApply() {
    onHighlightMatches(matches.map((g) => g.id));
    setApplied(true);
  }

  return (
    <div className="flex w-full flex-1 flex-col">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        Ghost Speed Finder
      </span>
      <div className="flex flex-1 flex-col gap-2 rounded-lg border border-surface-border bg-surface-2/50 p-2.5">
        <div className="flex items-center gap-2">
          <button
            onClick={handleTap}
            className="flex min-h-11 items-center gap-1.5 rounded-full bg-accent-strong px-4 py-2 text-xs font-semibold text-white transition select-none hover:opacity-90 active:scale-95 sm:min-h-0 sm:px-3 sm:py-1.5"
          >
            <Timer className="size-3.5" />
            Tap to Footsteps
          </button>
          <button
            onClick={handleReset}
            disabled={taps.length === 0}
            title="Reset taps"
            className="flex size-9 shrink-0 items-center justify-center rounded-full p-1.5 text-muted transition hover:bg-surface hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 sm:size-7"
          >
            <RotateCcw className="size-3.5" />
          </button>
        </div>

        {estimate ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="text-foreground/90">
              <span className="font-mono font-semibold">{estimate.bpm.toFixed(0)}</span> BPM ≈{" "}
              <span className="font-mono font-semibold">{estimate.speed.toFixed(2)}</span> m/s
            </span>
            <button
              onClick={handleApply}
              className="flex min-h-8 items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1.5 text-[11px] font-semibold text-accent transition hover:bg-accent/25 sm:min-h-0 sm:py-1"
            >
              <Target className="size-3" />
              Highlight {matches.length} match{matches.length === 1 ? "" : "es"}
            </button>
            {applied && <span className="text-[11px] text-muted">Applied</span>}
          </div>
        ) : (
          <p className="text-[11px] text-muted">
            Tap in rhythm with its footsteps — needs at least 2 taps to estimate a speed.
          </p>
        )}
      </div>
    </div>
  );
}
