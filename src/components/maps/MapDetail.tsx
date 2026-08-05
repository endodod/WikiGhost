"use client";

import { DetailModal } from "@/components/shared/DetailModal";
import { WikiImage } from "@/components/shared/WikiImage";
import { LIGHT_LIMITS, SIZE_LABELS_SINGULAR, type GameMap } from "@/data/maps";
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
      size="xl"
      headerExtra={
        <>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <span className="text-muted">
              Size <span className="font-medium text-foreground">{SIZE_LABELS_SINGULAR[map.size]}</span>
            </span>
            <span className="text-muted">
              Light limit <span className="font-mono font-medium text-foreground">{LIGHT_LIMITS[map.size]}</span>
            </span>
          </div>
          <a
            href={map.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View on the official wiki"
            className="shrink-0 rounded-full p-1.5 text-muted transition hover:bg-surface-2 hover:text-foreground"
          >
            <ExternalLink className="size-4" />
          </a>
        </>
      }
    >
      <WikiImage
        src={map.image}
        alt={map.name}
        wikiUrl={map.wikiUrl}
        fit="contain"
        zoomable
        className="h-[65vh] w-full rounded-lg"
      />
    </DetailModal>
  );
}
