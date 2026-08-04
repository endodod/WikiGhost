import { Ghost } from "lucide-react";
import type { GameKey } from "@/components/shared/GameSelector";

const LABELS: Record<GameKey, string> = {
  phasmophobia: "Phasmophobia",
  abnormality: "Abnormality",
  "other-side": "The Other Side",
};

export function GameComingSoon({ game }: { game: GameKey }) {
  const label = LABELS[game];
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-3 px-4 py-16 text-center sm:px-6">
      <div className="flex size-14 items-center justify-center rounded-2xl border border-surface-border bg-surface">
        <Ghost className="size-6 text-muted" />
      </div>
      <h2 className="text-lg font-semibold text-foreground">{label}</h2>
      <p className="max-w-sm text-sm text-muted">
        Wiki and tools for {label} are coming soon — this page will fill in the same way the Phasmophobia section did.
      </p>
      <span className="mt-1 rounded-full border border-surface-border bg-surface-2 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
        Coming soon
      </span>
    </div>
  );
}
