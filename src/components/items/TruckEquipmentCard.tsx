"use client";

import { WikiImage } from "@/components/shared/WikiImage";
import type { TruckItem } from "@/data/items";

interface TruckEquipmentCardProps {
  item: TruckItem;
  onSelect: (item: TruckItem) => void;
}

export function TruckEquipmentCard({ item, onSelect }: TruckEquipmentCardProps) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="h-28 w-full bg-surface-2 p-2">
        <WikiImage src={item.image} alt={item.name} wikiUrl={item.wikiUrl} fit="contain" className="h-full w-full" />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
          {item.name}
        </h3>
      </div>
    </button>
  );
}
