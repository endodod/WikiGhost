"use client";

import { ExternalLink, ImageOff, RotateCcw, ZoomIn } from "lucide-react";
import { useRef, useState, type MouseEvent as ReactMouseEvent, type WheelEvent as ReactWheelEvent } from "react";

interface WikiImageProps {
  src?: string;
  alt: string;
  wikiUrl: string;
  className?: string;
  /** "cover" crops to fill (default, good for scenic photos); "contain" letterboxes so the whole subject stays visible (good for item/map diagrams). */
  fit?: "cover" | "contain";
  /** When true, the image supports scroll-wheel zoom and click-drag panning instead of being static. */
  zoomable?: boolean;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;

/**
 * Renders a real image when one is available; otherwise (or on load failure) falls back to a
 * placeholder that links out to the official wiki page instead of showing a broken image.
 */
export function WikiImage({ src, alt, wikiUrl, className = "", fit = "cover", zoomable = false }: WikiImageProps) {
  const [failed, setFailed] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragState = useRef<{ startX: number; startY: number; startPosX: number; startPosY: number } | null>(null);

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

  if (!zoomable) {
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

  function clampScale(s: number) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));
  }

  function handleWheel(e: ReactWheelEvent<HTMLDivElement>) {
    e.preventDefault();
    setScale((s) => {
      const next = clampScale(s - e.deltaY * 0.0015 * s);
      if (next <= MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  }

  function handleMouseDown(e: ReactMouseEvent<HTMLImageElement>) {
    if (scale <= MIN_SCALE) return;
    e.preventDefault();
    dragState.current = { startX: e.clientX, startY: e.clientY, startPosX: pos.x, startPosY: pos.y };
    setDragging(true);
  }

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (!dragging || !dragState.current) return;
    const { startX, startY, startPosX, startPosY } = dragState.current;
    setPos({ x: startPosX + (e.clientX - startX), y: startPosY + (e.clientY - startY) });
  }

  function endDrag() {
    setDragging(false);
    dragState.current = null;
  }

  function resetZoom() {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }

  return (
    <div
      className={`relative overflow-hidden bg-surface-2 ${className}`}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export site, no image optimization pipeline */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        onError={() => setFailed(true)}
        onMouseDown={handleMouseDown}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transformOrigin: "center center" }}
        className={`h-full w-full select-none ${fit === "contain" ? "object-contain" : "object-cover"} ${
          scale > MIN_SCALE ? (dragging ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
      />
      <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1.5">
        {scale > MIN_SCALE && (
          <button
            onClick={resetZoom}
            className="pointer-events-auto flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-black/80"
          >
            <RotateCcw className="size-3" />
            Reset
          </button>
        )}
        <span className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white">
          <ZoomIn className="size-3" />
          Scroll to zoom · drag to pan
        </span>
      </div>
    </div>
  );
}
