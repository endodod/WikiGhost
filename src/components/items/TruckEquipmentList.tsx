import type { TruckItem } from "@/data/items";
import { ExternalLink } from "lucide-react";

export function TruckEquipmentList({ items }: { items: TruckItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-0.5 rounded-lg border border-surface-border bg-surface p-3 transition hover:border-accent/40 hover:bg-surface-2"
        >
          <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            {item.name}
            <ExternalLink className="size-3 text-muted" />
          </span>
          <span className="text-xs text-muted">{item.function}</span>
        </a>
      ))}
    </div>
  );
}
