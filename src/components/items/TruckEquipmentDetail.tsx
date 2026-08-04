"use client";

import { DetailModal, DetailSection } from "@/components/shared/DetailModal";
import { WikiImage } from "@/components/shared/WikiImage";
import type { TruckItem } from "@/data/items";
import { ExternalLink } from "lucide-react";

interface TruckEquipmentDetailProps {
  item: TruckItem;
  onClose: () => void;
}

export function TruckEquipmentDetail({ item, onClose }: TruckEquipmentDetailProps) {
  return (
    <DetailModal
      title={item.name}
      onClose={onClose}
      headerExtra={
        <a
          href={item.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View on the official wiki"
          className="rounded-full p-1.5 text-muted transition hover:bg-surface-2 hover:text-foreground"
        >
          <ExternalLink className="size-4" />
        </a>
      }
    >
      <div className="mb-1 h-56 w-full rounded-lg bg-surface-2 p-4">
        <WikiImage
          src={item.image}
          alt={item.name}
          wikiUrl={item.wikiUrl}
          fit="contain"
          className="h-full w-full rounded-lg"
        />
      </div>

      <DetailSection title="Function">
        <p className="text-sm text-foreground/90">{item.function}</p>
      </DetailSection>
    </DetailModal>
  );
}
