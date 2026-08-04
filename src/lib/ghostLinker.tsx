import { ghosts } from "@/data/ghosts";
import type { ReactNode } from "react";

/** Names guide text uses that don't match a ghost's full `name` exactly. */
const GHOST_NAME_ALIASES: { pattern: string; id: string }[] = [
  { pattern: "Mimic", id: "themimic" },
  { pattern: "Twins", id: "thetwins" },
];

const GHOST_MATCHES = [...ghosts.map((g) => ({ pattern: g.name, id: g.id })), ...GHOST_NAME_ALIASES].sort(
  (a, b) => b.pattern.length - a.pattern.length
);

const GHOST_ID_BY_NAME = new Map(GHOST_MATCHES.map((m) => [m.pattern, m.id]));

/** Excludes "Box" so "Spirit Box" (the item) doesn't get read as the Spirit ghost. */
const GHOST_NAME_REGEX = new RegExp(
  `\\b(${GHOST_MATCHES.map((m) => m.pattern).join("|")})\\b(?!\\s+Box)`,
  "g"
);

function linkifyGhostNames(text: string, onGhostClick: (ghostId: string) => void, keyPrefix: string): ReactNode {
  const segments = text.split(GHOST_NAME_REGEX);
  if (segments.length === 1) return text;
  return segments.map((seg, i) => {
    const id = GHOST_ID_BY_NAME.get(seg);
    if (id) {
      return (
        <button
          key={`${keyPrefix}-${i}`}
          type="button"
          onClick={() => onGhostClick(id)}
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          {seg}
        </button>
      );
    }
    return seg ? <span key={`${keyPrefix}-${i}`}>{seg}</span> : null;
  });
}

/**
 * Like markdownLite's renderInline (handles **bold** / *italic*), but also turns every
 * mention of a ghost's name into a button that jumps to its Ghost Wiki entry.
 */
export function renderGuideText(text: string, onGhostClick: (ghostId: string) => void): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {linkifyGhostNames(part.slice(2, -2), onGhostClick, String(i))}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{linkifyGhostNames(part.slice(1, -1), onGhostClick, String(i))}</em>;
    }
    return <span key={i}>{linkifyGhostNames(part, onGhostClick, String(i))}</span>;
  });
}
