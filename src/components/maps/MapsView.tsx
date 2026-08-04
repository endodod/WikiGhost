"use client";

import { MapCard } from "@/components/maps/MapCard";
import { MapDetail } from "@/components/maps/MapDetail";
import { LIGHT_LIMITS, SIZE_LABELS, maps, removedMaps, type GameMap, type MapSize } from "@/data/maps";
import { useMemo, useState } from "react";

const SIZE_ORDER: MapSize[] = ["small", "medium", "large"];

export function MapsView() {
  const [selected, setSelected] = useState<GameMap | null>(null);

  const bySize = useMemo(() => {
    return SIZE_ORDER.map((size) => ({
      size,
      items: maps.filter((m) => m.size === size),
    }));
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-4 sm:px-6">
      <div className="rounded-xl border border-surface-border bg-surface p-4 text-xs text-muted">
        <p>
          Phasmophobia currently has 14 maps: 7 small, 5 medium, 2 large. Each map has a randomized weather type, a
          fixed light limit, and its own set of rooms with one designated Ghost Room. Exceeding a map&rsquo;s light
          limit trips the fuse box.
        </p>
      </div>

      {bySize.map(({ size, items }) => (
        <div key={size} className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{SIZE_LABELS[size]}</h2>
            <p className="text-xs text-muted">Light limit: {LIGHT_LIMITS[size]}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((map) => (
              <MapCard key={map.id} map={map} onSelect={setSelected} />
            ))}
          </div>
        </div>
      ))}

      {removedMaps.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Removed Maps</h2>
          <div className="flex flex-col gap-2">
            {removedMaps.map((m) => (
              <a
                key={m.id}
                href={m.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-0.5 rounded-lg border border-surface-border bg-surface/60 p-3 opacity-70 transition hover:opacity-100"
              >
                <span className="text-sm font-semibold text-foreground">{m.name}</span>
                <span className="text-xs text-muted">{m.note}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {selected && <MapDetail map={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
