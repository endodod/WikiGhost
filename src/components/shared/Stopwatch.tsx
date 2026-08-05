"use client";

import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** A small start/pause/reset stopwatch — stacked below the Speed Finder tool. */
export function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setMs((cur) => cur + 100), 100);
    return () => window.clearInterval(id);
  }, [running]);

  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-surface-border bg-surface-2/50 px-2.5 py-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">Stopwatch</span>
      <div className="flex items-center gap-1">
        <span className="font-mono text-sm font-semibold tabular-nums text-foreground/90">{formatTime(ms)}</span>
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
  );
}
