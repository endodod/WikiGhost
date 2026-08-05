export type TosMapSize = "small" | "medium" | "large" | "unknown";

export interface TosMap {
  id: string;
  name: string;
  size: TosMapSize;
  /** false for the 2 maps confirmed to exist but not named in any accessible source. */
  confirmed: boolean;
  /** Card thumbnail + default detail-view image. */
  image?: string;
  /** Extra map-section variants (e.g. Abaddon's East/West split) — shown as a switcher in the detail view alongside `image`. */
  imageVariants?: { label: string; image: string }[];
  /** The model Iblis shapeshifts into on this map. */
  residentGhostModel?: string;
  residentGhostModelImage?: string;
  /** Ethereal Artifact pair found on this map during Cleanse contracts, where known. */
  artifactPair?: [string, string];
  /** Images for the artifact pair, aligned with `artifactPair` by index. */
  artifactImages?: [string, string];
  wikiUrl: string;
}

export const SIZE_LABELS: Record<TosMapSize, string> = {
  small: "Small Maps",
  medium: "Medium Maps",
  large: "Large Maps",
  unknown: "Unidentified Maps",
};

const LOCATIONS_WIKI_URL = "https://theotherside-game.fandom.com/wiki/Locations";

/**
 * 8 of the 9 confirmed maps (per the community map-picker tool showing "9 of 9 maps"), named on
 * the fandom wiki's "Locations" page — Abaddon Hallows East and West are separate contract
 * locations there, each with their own team size/reward/breaker room, not just view angles of
 * one map. The 9th, still-unidentified map is left out entirely for now rather than shown as a
 * placeholder card. Ethereal Artifact pairs cross-checked against theotherguide.co.uk and
 * community write-ups.
 */
export const tosMaps: TosMap[] = [
  {
    id: "ravenwood-lane",
    name: "12 Ravenwood Lane",
    size: "small",
    confirmed: true,
    image: "/images/tos/maps/ravenwood-lane.webp",
    residentGhostModel: "Gary",
    residentGhostModelImage: "/images/tos/ghost-models/gary.webp",
    artifactPair: ["Venetian masks", "Juggling balls"],
    artifactImages: ["/images/tos/artifacts/venetian-masks.webp", "/images/tos/artifacts/juggling-balls.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "cedar-street",
    name: "1205 Cedar Street",
    size: "small",
    confirmed: true,
    image: "/images/tos/maps/cedar-street.webp",
    residentGhostModel: "Jebediah",
    residentGhostModelImage: "/images/tos/ghost-models/jebediah.webp",
    artifactPair: ["Bullet boxes", "Alcohol bottles"],
    artifactImages: ["/images/tos/artifacts/bullet-boxes.webp", "/images/tos/artifacts/alcohol-bottles.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "aspen-heights",
    name: "317 Aspen Heights",
    size: "small",
    confirmed: true,
    image: "/images/tos/maps/aspen-heights.webp",
    residentGhostModel: "Jennifer",
    residentGhostModelImage: "/images/tos/ghost-models/jennifer.webp",
    artifactPair: ["Shackles", "Locks"],
    artifactImages: ["/images/tos/artifacts/shackles.webp", "/images/tos/artifacts/locks.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "abaddon-hallows-west",
    name: "Abaddon Hallows West",
    size: "small",
    confirmed: true,
    image: "/images/tos/maps/abaddon-hallows-west.webp",
    residentGhostModel: "Abigail",
    residentGhostModelImage: "/images/tos/ghost-models/abigail.webp",
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "st-josephs-orphanage",
    name: "St. Joseph's Orphanage",
    size: "medium",
    confirmed: true,
    image: "/images/tos/maps/st-josephs-orphanage.webp",
    // Fandom lists both Henry and Abigail as possible Iblis shapeshift models here.
    residentGhostModel: "Henry",
    residentGhostModelImage: "/images/tos/ghost-models/henry.webp",
    artifactPair: ["Teddies", "Bunny plushies"],
    artifactImages: ["/images/tos/artifacts/teddies.webp", "/images/tos/artifacts/bunny-plushies.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "stone-manor-plantation",
    name: "Stone Manor Plantation",
    size: "large",
    confirmed: true,
    image: "/images/tos/maps/stone-manor-plantation.webp",
    residentGhostModel: "Victoria",
    residentGhostModelImage: "/images/tos/ghost-models/victoria.webp",
    artifactPair: ["Jewelry boxes", "Purple diaries"],
    artifactImages: ["/images/tos/artifacts/jewelry-boxes.webp", "/images/tos/artifacts/purple-diaries.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "summerhill-psychiatric",
    name: "Summerhill Psychiatric Institution",
    size: "large",
    confirmed: true,
    image: "/images/tos/maps/summerhill-psychiatric.webp",
    residentGhostModel: "Stevie",
    residentGhostModelImage: "/images/tos/ghost-models/stevie.webp",
    artifactPair: ["Skulls", "Hand drills"],
    artifactImages: ["/images/tos/artifacts/skulls.webp", "/images/tos/artifacts/hand-drills.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
  {
    id: "abaddon-hallows-east",
    name: "Abaddon Hallows East",
    size: "large",
    confirmed: true,
    image: "/images/tos/maps/abaddon-hallows-east-full.webp",
    imageVariants: [
      { label: "Full", image: "/images/tos/maps/abaddon-hallows-east-full.webp" },
      { label: "Partial", image: "/images/tos/maps/abaddon-hallows-east-partial.webp" },
    ],
    residentGhostModel: "Abigail",
    residentGhostModelImage: "/images/tos/ghost-models/abigail.webp",
    artifactPair: ["Torn pages", "Satanic books"],
    artifactImages: ["/images/tos/artifacts/torn-pages.webp", "/images/tos/artifacts/satanic-books.webp"],
    wikiUrl: LOCATIONS_WIKI_URL,
  },
];

export function getTosMapById(id: string): TosMap | undefined {
  return tosMaps.find((m) => m.id === id);
}
