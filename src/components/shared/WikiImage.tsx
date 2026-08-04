"use client";

import { ExternalLink, ImageOff } from "lucide-react";
import { useState } from "react";

interface WikiImageProps {
  src?: string;
  alt: string;
  wikiUrl: string;
  className?: string;
  /** "cover" crops to fill (default, good for scenic photos); "contain" letterboxes so the whole subject stays visible (good for item/map diagrams). */
  fit?: "cover" | "contain";
}

/**
 * Renders a real image when one is available; otherwise (or on load failure) falls back to a
 * placeholder that links out to the official wiki page instead of showing a broken image.
 */
export function WikiImage({ src, alt, wikiUrl, className = "", fit = "cover" }: WikiImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <a
        href={wikiUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        title="View on the official wiki"
        className={`flex flex-col items-center justify-center gap-1.5 bg-surface-2 text-muted transition hover:text-foreground ${className}`}
      >
        <ImageOff className="size-6" />
        <span className="flex items-center gap-1 text-[11px] font-medium">
          View on wiki
          <ExternalLink className="size-3" />
        </span>
      </a>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export site, no image optimization pipeline
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`bg-surface-2 ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}
