"use client";

import { cn } from "@/lib/cn";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export interface StopwatchThreshold {
  label: string;
  /** Cumulative cutoff from 0, e.g. Demon's 60s smudge cooldown, then Normal's 90s. */
  seconds: number;
}

interface StopwatchProps {
  label?: string;
  /** Official reference cutoffs (e.g. re-hunt/smudge cooldowns), sorted ascending. When set, the
   * timer counts down through them in order — first the time left until the earliest cutoff,
   * then the time left in the next segment, and so on — instead of counting elapsed time up. */
  thresholds?: StopwatchThreshold[];
}

/** A small start/pause/reset stopwatch — stacked below the Speed Finder tool. With `thresholds`,
 * it becomes a segmented countdown through each cutoff in turn (Demon, then Normal, then Spirit)
 * rather than a plain elapsed-time clock. */
export function Stopwatch({ label = "Stopwatch", thresholds }: StopwatchProps) {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setMs((cur) => cur + 100), 100);
    return () => window.clearInterval(id);
  }, [running]);

  const sorted = thresholds ? [...thresholds].sort((a, b) => a.seconds - b.seconds) : [];
  const hasThresholds = sorted.length > 0;
  const elapsedSeconds = ms / 1000;

  let segmentIndex = sorted.findIndex((t) => elapsedSeconds < t.seconds);
  const cleared = hasThresholds && segmentIndex === -1;
  if (segmentIndex === -1) segmentIndex = sorted.length - 1;
  const remainingInSegment = hasThresholds ? Math.max(0, sorted[segmentIndex].seconds - elapsedSeconds) : 0;

  return (
    <div className="flex w-full flex-col gap-1.5 rounded-lg border border-surface-border bg-surface-2/50 px-2.5 py-1.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">{label}</span>
          {hasThresholds && (
            <span className="text-[10px] font-medium text-accent-strong">
              {cleared ? "Cleared" : `${sorted[segmentIndex].label} window`}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <span className="font-mono text-sm font-semibold tabular-nums text-foreground/90">
            {formatTime(hasThresholds ? (cleared ? 0 : remainingInSegment * 1000) : ms)}
          </span>
          <button
            onClick={() => setRunning((r) => !r)}
            title={running ? "Pause" : "Start"}
            className="flex size-7 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-foreground"
          >
            {running ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setMs(0);
            }}
            disabled={ms === 0 && !running}
            title="Reset"
            className="flex size-7 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw className="size-3.5" />
          </button>
        </div>
      </div>

      {hasThresholds && (
        <div className="flex flex-wrap gap-1">
          {sorted.map((t) => {
            const reached = elapsedSeconds >= t.seconds;
            return (
              <span
                key={t.label}
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-medium ring-1 transition",
                  reached
                    ? "bg-accent-strong/20 text-accent-strong ring-accent-strong/50"
                    : "text-muted ring-surface-border"
                )}
              >
                {t.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
