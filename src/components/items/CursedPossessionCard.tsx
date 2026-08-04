"use client";

import { WikiImage } from "@/components/shared/WikiImage";
import type { CursedPossession } from "@/data/items";

interface CursedPossessionCardProps {
  item: CursedPossession;
  onSelect: (item: CursedPossession) => void;
}

export function CursedPossessionCard({ item, onSelect }: CursedPossessionCardProps) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <WikiImage src={item.image} alt={item.name} wikiUrl={item.wikiUrl} className="h-28 w-full" />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
          {item.name}
        </h3>
      </div>
    </button>
  );
}
