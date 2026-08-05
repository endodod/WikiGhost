"use client";

import { TosEvidenceBadge } from "@/components/tos/TosEvidenceBadge";
import { WikiImage } from "@/components/shared/WikiImage";
import {
  carryLimitNote,
  emfFalsePositiveNote,
  starterLoadoutNote,
  tosEvidenceEquipment,
  tosOtherEquipment,
  tosTruckScreens,
  truckStructureNote,
  type TosOtherEquipment,
} from "@/data/tos/items";
import { TOS_EVIDENCE_TYPES } from "@/lib/tos/types";
import { useMemo } from "react";

/** Item-Wiki-only display order — Freezing and UV swapped from the shared TOS_EVIDENCE_TYPES order
 * (which stays untouched so Find My Ghost's evidence toggles aren't affected). */
const EVIDENCE_EQUIPMENT_ORDER = TOS_EVIDENCE_TYPES.map((ev) => (ev === "Freezing" ? "UV" : ev === "UV" ? "Freezing" : ev));

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{title}</h2>
      {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
    </div>
  );
}

/** Fixed-height card used by every "Other Equipment" style section (Blessed, Other, Starter &
 * Storage) — line-clamped title/note so every card is the same size regardless of how long its
 * name or note text runs, instead of a ragged grid. */
function OtherEquipmentCard({ item }: { item: TosOtherEquipment }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-surface-border bg-surface">
      <WikiImage src={item.image} alt={item.name} wikiUrl={item.wikiUrl} fit="contain" className="h-16 w-full shrink-0 bg-surface-2 p-1.5" />
      <div className="flex min-h-[92px] flex-col gap-1 p-2.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-xs font-semibold text-foreground">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold text-muted ring-1 ring-surface-border">
            {item.priceLabel}
          </span>
        </div>
        <p className="line-clamp-3 text-[11px] text-foreground/80">{item.note}</p>
      </div>
    </div>
  );
}

export function ItemsView() {
  const blessed = useMemo(() => tosOtherEquipment.filter((e) => e.category === "blessed"), []);
  const utility = useMemo(() => tosOtherEquipment.filter((e) => e.category === "utility"), []);
  const carry = useMemo(() => tosOtherEquipment.filter((e) => e.category === "carry"), []);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Item Wiki</h1>
        <p className="text-sm text-muted">
          The Other Side doesn&rsquo;t use a T1/T2/T3 upgrade-tier system per item. Instead, each evidence type has
          2-3 distinctly named, separately priced models (budget vs. standard vs. premium), each with its own
          tradeoffs.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Evidence Equipment" subtitle="Grouped by the evidence type each model reads." />
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {EVIDENCE_EQUIPMENT_ORDER.map((ev) => {
            const models = tosEvidenceEquipment.filter((e) => e.evidence === ev);
            if (models.length === 0) return null;
            return (
              <div key={ev} className="flex flex-col gap-2 rounded-xl border border-surface-border bg-surface p-3">
                <TosEvidenceBadge evidence={ev} />
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {models.map((item) => (
                    <div key={item.id} className="flex h-full gap-2 rounded-lg border border-surface-border bg-surface-2 p-2.5">
                      <WikiImage
                        src={item.image}
                        alt={item.name}
                        wikiUrl={item.wikiUrl}
                        fit="contain"
                        className="h-12 w-12 shrink-0 rounded-md"
                      />
                      <div className="min-h-[64px] min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="line-clamp-2 text-xs font-semibold text-foreground">{item.name}</h3>
                          <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-[11px] font-semibold text-muted ring-1 ring-surface-border">
                            {item.priceLabel}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-[11px] text-foreground/80">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted">{emfFalsePositiveNote}</p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading
          title="Blessed Items"
          subtitle="The game's protective equipment slot — wards off hunts, calms heart rate, or disorients the ghost."
        />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {blessed.map((item) => (
            <OtherEquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Other Equipment" subtitle="Investigative, utility, and starter gear." />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {utility.map((item) => (
            <OtherEquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Starter & Storage" subtitle="Getting equipped and carrying more than 4 items." />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {carry.map((item) => (
            <OtherEquipmentCard key={item.id} item={item} />
          ))}
        </div>
        <p className="text-xs text-muted">{carryLimitNote}</p>
        <p className="text-xs text-muted">{starterLoadoutNote}</p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Truck / Tent Equipment" subtitle={truckStructureNote} />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {tosTruckScreens.map((screen) => (
            <div key={screen.id} className="flex flex-col gap-1 rounded-xl border border-surface-border bg-surface p-2.5">
              <h3 className="text-xs font-semibold text-foreground">{screen.name}</h3>
              <p className="text-[11px] text-foreground/80">{screen.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
