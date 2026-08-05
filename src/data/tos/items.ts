import type { TosEvidence } from "@/lib/tos/types";

export interface TosEvidenceEquipment {
  id: string;
  name: string;
  evidence: TosEvidence;
  priceLabel: string;
  note: string;
  /** Real image URL, or omitted to show a placeholder that links out to the wiki page instead. */
  image?: string;
  wikiUrl: string;
}

export interface TosOtherEquipment {
  id: string;
  name: string;
  /** "blessed" — the game's own protective equipment slot (wards off hunts, calms heart rate). "carry" — starter/storage
   * logistics rather than an investigative tool. Everything else is investigative/utility gear. */
  category: "blessed" | "utility" | "carry";
  priceLabel: string;
  note: string;
  /** Real image URL, or omitted to show a placeholder that links out to the wiki page instead. */
  image?: string;
  wikiUrl: string;
}

export interface TosTruckScreen {
  id: string;
  name: string;
  description: string;
}

const EVIDENCE_ITEMS_WIKI_URL = "https://theotherside-game.fandom.com/wiki/Evidence_items";
const BLESSED_ITEMS_WIKI_URL = "https://theotherside-game.fandom.com/wiki/Blessed_items";
const EQUIPMENT_WIKI_URL = "https://theotherside-game.fandom.com/wiki/Equipment";

/** Priced, evidence-linked gear — 2-3 distinctly named models per evidence type instead of a T1/T2/T3 ladder.
 * Prices confirmed directly from in-game shop screenshots. */
export const tosEvidenceEquipment: TosEvidenceEquipment[] = [
  {
    id: "emf-v-generic",
    name: "EMF-V Generic",
    evidence: "EMF",
    priceLabel: "$34.99",
    note: "Budget option.",
    image: "/images/tos/items/emf-v-generic.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "kii-emf-detector",
    name: "KII EMF Detector",
    evidence: "EMF",
    priceLabel: "$69.99",
    note: "The only EMF reader with audio feedback.",
    image: "/images/tos/items/kii-emf-detector.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "dpt-1000x-thermometer",
    name: "DPT-1000X Thermometer",
    evidence: "Freezing",
    priceLabel: "$34.99",
    note: "Takes time to settle on a reading.",
    image: "/images/tos/items/dpt-1000x-thermometer.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "gt-13x-laser-thermometer",
    name: "GT-13X Laser Thermometer",
    evidence: "Freezing",
    priceLabel: "$69.99",
    note: "Instant readings at range.",
    image: "/images/tos/items/gt-13x-laser-thermometer.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "r2-remote-temp-sensor",
    name: "R2 Remote Temperature Sensor",
    evidence: "Freezing",
    priceLabel: "$89.99",
    note: "Placeable, faster updates than handheld thermometers.",
    image: "/images/tos/items/r2-remote-temp-sensor.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "analog-geiger-counter",
    name: "Analog Geiger Counter",
    evidence: "Radiation",
    priceLabel: "$49.99",
    note: "Budget radiation reader with an analog needle display.",
    image: "/images/tos/items/analog-geiger-counter.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "sg-2000-geiger-counter",
    name: "SG-2000 Geiger Counter",
    evidence: "Radiation",
    priceLabel: "$79.99",
    note: "Digital display, measures CPM directly.",
    image: "/images/tos/items/sg-2000-geiger-counter.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "uv-glowstick",
    name: "UV Glowstick",
    evidence: "UV",
    priceLabel: "$14.99",
    note: "Disposable, single-use.",
    image: "/images/tos/items/uv-glowstick.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "uv-13x-led-flashlight",
    name: "UV-13X LED Flashlight",
    evidence: "UV",
    priceLabel: "$54.99",
    note: "Reusable, wider beam than the glowstick.",
    image: "/images/tos/items/uv-13x-led-flashlight.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "blank-book",
    name: "Blank Book",
    evidence: "Writing",
    priceLabel: "$49.99",
    note: "Place near ghost activity.",
    image: "/images/tos/items/blank-book.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "drawing-easel",
    name: "Drawing Easel",
    evidence: "Writing",
    priceLabel: "$149.99",
    note: "Larger surface area than the book.",
    image: "/images/tos/items/drawing-easel.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "sb7-spirit-box",
    name: "SB7 Spirit Box",
    evidence: "Audio",
    priceLabel: "$49.99",
    note: "Radio-frequency sweeps for real-time back-and-forth.",
    image: "/images/tos/items/sb7-spirit-box.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
  {
    id: "infrasound-receiver",
    name: "Infrasound Receiver",
    evidence: "Audio",
    priceLabel: "$149.99",
    note: "Must be placed in the favourite room; records audio for replay later.",
    image: "/images/tos/items/infrasound-receiver.webp",
    wikiUrl: EVIDENCE_ITEMS_WIKI_URL,
  },
];

export const emfFalsePositiveNote =
  "A reading of 20+ mG (max/red light) is EMF Level 5. If a FLX-POD is active nearby, it produces a false EMF 4 reading that should be discounted — but if you still get a red/20+ reading despite that, it's real (strong enough to override the false signal).";

/** Prices confirmed directly from in-game shop screenshots. */
export const tosOtherEquipment: TosOtherEquipment[] = [
  {
    id: "phantomcalm-xr",
    name: "PhantomCalm XR Anxiety Medication",
    category: "blessed",
    priceLabel: "$49.99",
    note: "Reduces heart-rate/panic buildup.",
    image: "/images/tos/items/phantomcalm-xr.webp",
    wikiUrl: BLESSED_ITEMS_WIKI_URL,
  },
  {
    id: "obsidian-shield",
    name: "Obsidian Shield (Black Candle)",
    category: "blessed",
    priceLabel: "$89.99",
    note: "Candle-based Blessed-slot protection item.",
    image: "/images/tos/items/obsidian-shield.webp",
    wikiUrl: BLESSED_ITEMS_WIKI_URL,
  },
  {
    id: "holy-water-sprayer",
    name: "Holy Water Sprayer",
    category: "blessed",
    priceLabel: "$49.99",
    note: "2 uses per bottle — disorients a hunting ghost mid-hunt.",
    image: "/images/tos/items/holy-water-sprayer.webp",
    wikiUrl: BLESSED_ITEMS_WIKI_URL,
  },
  {
    id: "sanctified-cross",
    name: "Sanctified Cross",
    category: "utility",
    priceLabel: "$79.99",
    note: "Place in the suspected favourite room — flips upside down if correct.",
    image: "/images/tos/items/sanctified-cross.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "led-headlamp",
    name: "LED Headlamp",
    category: "utility",
    priceLabel: "$29.99",
    note: "Hands-free light with its own equipment slot.",
    image: "/images/tos/items/led-headlamp.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "generic-flashlight",
    name: "Generic Flashlight",
    category: "utility",
    priceLabel: "$9.99",
    note: "Basic illumination — redundant with the phone's flashlight.",
    image: "/images/tos/items/generic-flashlight.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "lighter",
    name: "Lighter",
    category: "utility",
    priceLabel: "$9.99",
    note: "Lights candles/incense.",
    image: "/images/tos/items/lighter.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "small-storage-container",
    name: "Small Storage Container",
    category: "carry",
    priceLabel: "$99.99",
    note: "Extra carry capacity — must be empty to transfer between inventories.",
    image: "/images/tos/items/small-storage-container.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "flx-pod",
    name: "FLX-POD",
    category: "utility",
    priceLabel: "$49.99",
    note: "The REM-Pod equivalent — beeps louder near ghost activity.",
    image: "/images/tos/items/flx-pod.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "old-candle",
    name: "Old Candle",
    category: "utility",
    priceLabel: "$14.99",
    note: "Misc/starter tool — ghost interaction bait.",
    image: "/images/tos/items/old-candle.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "sentinel-m4",
    name: "Sentinel M4 Motion Sensor",
    category: "utility",
    priceLabel: "$74.99",
    note: "Motion detection sensor.",
    image: "/images/tos/items/sentinel-m4.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "tacticool-lt-7p",
    name: "Tacticool LT-7P",
    category: "utility",
    priceLabel: "$49.99",
    note: "Function unconfirmed — likely another flashlight/light model.",
    image: "/images/tos/items/tacticool-lt-7p.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "ethereal-artifact-locator",
    name: "Ethereal Artifact Locator (E.A.L.)",
    category: "utility",
    priceLabel: "$49.99",
    note: "Glows brighter and pulses near Ethereal Artifacts — Cleanse mode only.",
    image: "/images/tos/items/ethereal-artifact-locator.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
  {
    id: "loaner-package",
    name: "Loaner Package",
    category: "carry",
    priceLabel: "$0.00",
    note: "Free starter kit — a small fee is deducted post-mission.",
    image: "/images/tos/items/loaner-package.webp",
    wikiUrl: EQUIPMENT_WIKI_URL,
  },
];

export const tosTruckScreens: TosTruckScreen[] = [
  {
    id: "left-screen",
    name: "Left Screen",
    description: "Ghost name and its Spirit Box response behaviour, plus optional objectives and exorcism/Cleanse requirements.",
  },
  {
    id: "middle-screen",
    name: "Middle Screen",
    description: "Live camera feed, if tripod cameras were purchased and placed.",
  },
  {
    id: "right-screen",
    name: "Right Screen",
    description: "Sanity/heart-rate monitor.",
  },
];

export const carryLimitNote =
  "Carry limit: 4 items per trip from the equipment stash, plus 1 \"voluminous\" item (e.g. the Infrasound Receiver) that doesn't count against the 4. A Small Storage Container or repeat trips to the truck are needed for bigger loadouts.";

export const starterLoadoutNote =
  "Recommended starter loadout (solo/duo, small maps): EMF-V Generic + DPT-1000X Thermometer + UV Glowstick + Blank Book — under $135, covers 4 of 6 evidence types.";

export const truckStructureNote =
  "The truck/tent has 3 screens (below). Unlike Phasmophobia, there's no Cursed Possessions equivalent — Cleanse mode's Ethereal Artifacts are a different mechanic: hidden objects you search for, not player-usable risk items.";

export function getTosEvidenceEquipmentById(id: string): TosEvidenceEquipment | undefined {
  return tosEvidenceEquipment.find((e) => e.id === id);
}

export function getTosOtherEquipmentById(id: string): TosOtherEquipment | undefined {
  return tosOtherEquipment.find((e) => e.id === id);
}
