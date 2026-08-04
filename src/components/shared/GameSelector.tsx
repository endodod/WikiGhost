"use client";

import { cn } from "@/lib/cn";

export type GameKey = "phasmophobia" | "abnormality" | "other-side";

const GAMES: { id: GameKey; label: string }[] = [
  { id: "phasmophobia", label: "Phasmophobia" },
  { id: "abnormality", label: "Abnormality" },
  { id: "other-side", label: "The Other Side" },
];

interface GameSelectorProps {
  value: GameKey;
  onChange: (game: GameKey) => void;
}

export function GameSelector({ value, onChange }: GameSelectorProps) {
  return (
    <div className="flex shrink-0 items-center gap-0.5 rounded-full border border-surface-border bg-surface-2 p-0.5">
      {GAMES.map((g) => (
        <button
          key={g.id}
          onClick={() => onChange(g.id)}
          title={g.id === "phasmophobia" ? g.label : `${g.label} — coming soon`}
          className={cn(
            "shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold transition",
            value === g.id ? "bg-accent-strong text-white" : "text-muted hover:text-foreground"
          )}
        >
          {g.label}
        </button>
      ))}
    </div>
  );
}
