"use client";

import { DetailModal } from "@/components/shared/DetailModal";
import { WikiImage } from "@/components/shared/WikiImage";
import { SIZE_LABELS, type TosMap } from "@/data/tos/maps";
import { cn } from "@/lib/cn";
import { ExternalLink, Ghost, Map as MapIcon, Sparkles } from "lucide-react";
import { useState } from "react";

interface MapDetailProps {
  map: TosMap;
  onClose: () => void;
}

type ViewMode = "map" | "ghost" | "artifacts";

/** Fixed regardless of which tab is active, so switching between Map/Ghost Model/Artifacts
 * never resizes the modal or requires scrolling. */
const MEDIA_HEIGHT = "h-[56vh]";

export function MapDetail({ map, onClose }: MapDetailProps) {
  const [view, setView] = useState<ViewMode>("map");
  const [activeVariant, setActiveVariant] = useState(0);

  const mapImage = map.imageVariants?.[activeVariant]?.image ?? map.image;
  const activeImage = view === "ghost" ? map.residentGhostModelImage : mapImage;
  const hasArtifacts = Boolean(map.artifactPair);

  return (
    <DetailModal
      title={map.name}
      onClose={onClose}
      size="xl"
      headerExtra={
        <>
          {map.confirmed && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              <span className="text-muted">
                Size <span className="font-medium text-foreground">{SIZE_LABELS[map.size].replace(" Maps", "")}</span>
              </span>
              {map.artifactPair && (
                <span className="text-muted">
                  Artifacts{" "}
                  <span className="font-medium text-foreground">
                    {map.artifactPair[0]} &amp; {map.artifactPair[1]}
                  </span>
                </span>
              )}
            </div>
          )}
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
      {!map.confirmed ? (
        <p className="py-8 text-center text-sm text-muted">
          Confirmed to exist (9 of 9 maps in the community map picker), but not named in any accessible source yet
          — check the fandom wiki&rsquo;s Locations page or the TOS Discord&rsquo;s #trainer-help channel.
        </p>
      ) : (
        <>
          {(map.residentGhostModelImage || hasArtifacts) && (
            <div className="mb-2 flex flex-wrap gap-1.5">
              <button
                onClick={() => setView("map")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition",
                  view === "map"
                    ? "bg-accent-strong text-white ring-accent-strong"
                    : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
                )}
              >
                <MapIcon className="size-3.5" />
                Map
              </button>
              {map.residentGhostModelImage && (
                <button
                  onClick={() => setView("ghost")}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition",
                    view === "ghost"
                      ? "bg-accent-strong text-white ring-accent-strong"
                      : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
                  )}
                >
                  <Ghost className="size-3.5" />
                  Ghost Model{map.residentGhostModel ? ` (${map.residentGhostModel})` : ""}
                </button>
              )}
              {hasArtifacts && (
                <button
                  onClick={() => setView("artifacts")}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition",
                    view === "artifacts"
                      ? "bg-accent-strong text-white ring-accent-strong"
                      : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
                  )}
                >
                  <Sparkles className="size-3.5" />
                  Artifacts
                </button>
              )}
            </div>
          )}

          {view === "artifacts" && map.artifactPair ? (
            <div className={cn("flex flex-wrap items-center justify-center gap-6", MEDIA_HEIGHT)}>
              {map.artifactPair.map((name, i) => (
                <div key={name} className="flex flex-col items-center gap-1.5">
                  <WikiImage
                    src={map.artifactImages?.[i]}
                    alt={name}
                    wikiUrl={map.wikiUrl}
                    fit="contain"
                    zoomable
                    hint={false}
                    className="size-48 rounded-lg bg-surface-2 p-3 sm:size-56"
                  />
                  <p className="text-center text-sm font-medium text-foreground">{name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={cn("flex flex-col", MEDIA_HEIGHT)}>
              <WikiImage
                key={activeImage}
                src={activeImage}
                alt={view === "ghost" ? (map.residentGhostModel ?? map.name) : map.name}
                wikiUrl={map.wikiUrl}
                fit="contain"
                zoomable
                className="min-h-0 w-full flex-1 rounded-lg"
              />

              {view === "map" && map.imageVariants && (
                <div className="mt-2 flex shrink-0 flex-wrap gap-1.5">
                  {map.imageVariants.map((variant, i) => (
                    <button
                      key={variant.label}
                      onClick={() => setActiveVariant(i)}
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-medium ring-1 transition",
                        i === activeVariant
                          ? "bg-accent-strong text-white ring-accent-strong"
                          : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
                      )}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </DetailModal>
  );
}
