"use client";

import { WikiImage } from "@/components/shared/WikiImage";
import type { TosMap } from "@/data/tos/maps";
import { ImageOff } from "lucide-react";

interface MapCardProps {
  map: TosMap;
  onSelect: (map: TosMap) => void;
}

export function MapCard({ map, onSelect }: MapCardProps) {
  return (
    <button
      onClick={() => onSelect(map)}
      className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {map.image ? (
        <WikiImage src={map.image} alt={map.name} wikiUrl={map.wikiUrl} className="h-28 w-full" />
      ) : (
        // Plain (non-link) placeholder — WikiImage's no-image fallback renders an <a>, which
        // can't legally nest inside this <button>, so unconfirmed maps get a static icon instead.
        <div className="flex h-28 w-full items-center justify-center bg-surface-2 text-muted">
          <ImageOff className="size-6" />
        </div>
      )}
      <div className="flex flex-col gap-1 p-3">
        <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
          {map.name}
        </h3>
      </div>
    </button>
  );
}
