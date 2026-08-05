"use client";

import { MapCard } from "@/components/tos/MapCard";
import { MapDetail } from "@/components/tos/MapDetail";
import { SIZE_LABELS, getTosMapById, tosMaps, type TosMapSize } from "@/data/tos/maps";
import { useUrlParams } from "@/lib/useUrlParams";
import { useMemo } from "react";

const SIZE_ORDER: TosMapSize[] = ["small", "medium", "large", "unknown"];

export function MapsView() {
  const { values, push } = useUrlParams(["tmap"]);
  const selected = values.tmap ? getTosMapById(values.tmap) ?? null : null;

  const bySize = useMemo(
    () => SIZE_ORDER.map((size) => ({ size, items: tosMaps.filter((m) => m.size === size) })),
    []
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Map Wiki</h1>
        <p className="text-sm text-muted">
          8 of 9 confirmed maps, named and pictured (the 9th isn&rsquo;t identified in any accessible source yet).
          Open a map to switch between its floor plan, the ghost model Iblis shapeshifts into there, and its
          Ethereal Artifact pair for Cleanse contracts — all zoomable. Map floor-plan images are sourced from
          zero-network — pls dont sue me.
        </p>
      </div>

      {bySize.map(({ size, items }) =>
        items.length === 0 ? null : (
          <div key={size} className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{SIZE_LABELS[size]}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((map) => (
                <MapCard key={map.id} map={map} onSelect={(m) => push({ tmap: m.id })} />
              ))}
            </div>
          </div>
        )
      )}

      {selected && <MapDetail map={selected} onClose={() => window.history.back()} />}
    </div>
  );
}
