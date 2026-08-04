"use client";

import { WikiImage } from "@/components/shared/WikiImage";
import type { GameMap } from "@/data/maps";

interface MapCardProps {
  map: GameMap;
  onSelect: (map: GameMap) => void;
}

export function MapCard({ map, onSelect }: MapCardProps) {
  return (
    <button
      onClick={() => onSelect(map)}
      className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <WikiImage src={map.image} alt={map.name} wikiUrl={map.wikiUrl} className="h-28 w-full" />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
          {map.name}
        </h3>
      </div>
    </button>
  );
}
