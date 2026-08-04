"use client";

import { WikiImage } from "@/components/shared/WikiImage";
import type { EquipmentItem } from "@/data/items";

interface EquipmentCardProps {
  item: EquipmentItem;
  onSelect: (item: EquipmentItem) => void;
}

export function EquipmentCard({ item, onSelect }: EquipmentCardProps) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="h-28 w-full bg-surface-2 p-2">
        <WikiImage src={item.image} alt={item.name} wikiUrl={item.wikiUrl} fit="contain" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-1 p-3">
        <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
          {item.name}
        </h3>
        <p className="text-xs text-muted">{item.tiers ? `${item.tiers.length} tiers` : "No tier breakdown"}</p>
      </div>
    </button>
  );
}
