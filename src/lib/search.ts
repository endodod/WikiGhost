import type { Ghost } from "@/lib/types";

function searchBlob(ghost: Ghost): string {
  return [
    ghost.name,
    ...ghost.abilities,
    ...ghost.noEvidenceTells,
    ...ghost.topIdentifiers,
    ghost.smudgeBehavior ?? "",
    ...ghost.hunt.sanityThresholds.map((t) => t.condition),
    ...ghost.hunt.speeds.map((s) => s.condition),
  ]
    .join(" ")
    .toLowerCase();
}

export function searchGhosts(ghosts: Ghost[], query: string): Ghost[] {
  const q = query.trim().toLowerCase();
  if (!q) return ghosts;
  return ghosts.filter((g) => searchBlob(g).includes(q));
}
