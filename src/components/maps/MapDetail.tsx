"use client";

import { DetailModal, DetailSection } from "@/components/shared/DetailModal";
import { WikiImage } from "@/components/shared/WikiImage";
import { LIGHT_LIMITS, SIZE_LABELS, type GameMap } from "@/data/maps";
import { ExternalLink } from "lucide-react";

interface MapDetailProps {
  map: GameMap;
  onClose: () => void;
}

export function MapDetail({ map, onClose }: MapDetailProps) {
  return (
    <DetailModal
      title={map.name}
      onClose={onClose}
      headerExtra={
        <a
          href={map.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View on the official wiki"
          className="rounded-full p-1.5 text-muted transition hover:bg-surface-2 hover:text-foreground"
        >
          <ExternalLink className="size-4" />
        </a>
      }
    >
      <WikiImage src={map.image} alt={map.name} wikiUrl={map.wikiUrl} className="mb-1 h-56 w-full rounded-lg" />

      <DetailSection title="Overview">
        <ul className="space-y-1 text-sm text-foreground/90">
          <li className="flex justify-between gap-3">
            <span className="text-muted">Size</span>
            <span className="font-medium">{SIZE_LABELS[map.size]}</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="text-muted">Light limit</span>
            <span className="font-mono font-medium">{LIGHT_LIMITS[map.size]}</span>
          </li>
        </ul>
      </DetailSection>
    </DetailModal>
  );
}
