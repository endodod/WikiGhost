export type MapSize = "small" | "medium" | "large";

export interface GameMap {
  id: string;
  name: string;
  size: MapSize;
  /** Real image URL, or omitted to show a placeholder that links out to the official wiki page. */
  image?: string;
  wikiUrl: string;
}

export const LIGHT_LIMITS: Record<MapSize, number> = {
  small: 9,
  medium: 8,
  large: 7,
};

export const SIZE_LABELS: Record<MapSize, string> = {
  small: "Small Maps",
  medium: "Medium Maps",
  large: "Large Maps",
};

export const SIZE_LABELS_SINGULAR: Record<MapSize, string> = {
  small: "Small Map",
  medium: "Medium Map",
  large: "Large Map",
};

export const maps: GameMap[] = [
  // --- Small ---
  {
    id: "tanglewood-drive",
    name: "6 Tanglewood Drive",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/c/cd/Rooms_Tanglewood.png/revision/latest/scale-to-width-down/2000?cb=20260304162818",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/6_Tanglewood_Drive",
  },
  {
    id: "edgefield-road",
    name: "42 Edgefield Road",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/8/8f/Rooms_Edgefield.png/revision/latest/scale-to-width-down/2000?cb=20251112081146",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/42_Edgefield_Road",
  },
  {
    id: "ridgeview-court",
    name: "10 Ridgeview Court",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/5/51/Rooms_Ridgeview.png/revision/latest/scale-to-width-down/2000?cb=20251112081251",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/10_Ridgeview_Court",
  },
  {
    id: "nells-diner",
    name: "Nell's Diner",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/b/bd/Rooms_Nells_Diner.png/revision/latest/scale-to-width-down/2000?cb=20260304165821",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Nell%27s_Diner",
  },
  {
    id: "grafton-farmhouse",
    name: "Grafton Farmhouse",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/3/37/Rooms_Grafton.png/revision/latest/scale-to-width-down/2000?cb=20260304164443",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Grafton_Farmhouse",
  },
  {
    id: "willow-street",
    name: "13 Willow Street",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/f/f6/Rooms_Willow.png/revision/latest/scale-to-width-down/2000?cb=20260721141136",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/13_Willow_Street",
  },
  {
    id: "camp-woodwind",
    name: "Camp Woodwind",
    size: "small",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/7/78/Rooms_Camp_Woodwind.png/revision/latest/scale-to-width-down/2000?cb=20260304161942",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Camp_Woodwind",
  },

  // --- Medium ---
  {
    id: "point-hope",
    name: "Point Hope",
    size: "medium",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/1/11/Rooms_Point_Hope.png/revision/latest/scale-to-width-down/2000?cb=20260304174758",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Point_Hope",
  },
  {
    id: "bleasdale-farmhouse",
    name: "Bleasdale Farmhouse",
    size: "medium",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/0/03/Rooms_Bleasdale.png/revision/latest/scale-to-width-down/2000?cb=20260304165159",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Bleasdale_Farmhouse",
  },
  {
    id: "sunny-meadows-restricted",
    name: "Sunny Meadows Restricted",
    size: "medium",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/b/b4/Rooms_SM_Restricted_Restricted.png/revision/latest/scale-to-width-down/2000?cb=20260802210415",
    wikiUrl:
      "https://phasmophobia.fandom.com/wiki/Sunny_Meadows_Mental_Institution#Sunny_Meadows_Mental_Institution_-_Restricted",
  },
  {
    id: "prison",
    name: "Prison",
    size: "medium",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/0/04/Rooms_Prison.png/revision/latest/scale-to-width-down/2000?cb=20251112081931",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Prison",
  },
  {
    id: "maple-lodge-campsite",
    name: "Maple Lodge Campsite",
    size: "medium",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/b/bc/Rooms_Maple_Lodge.png/revision/latest/scale-to-width-down/2000?cb=20260304171147",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Maple_Lodge_Campsite",
  },

  // --- Large ---
  {
    id: "brownstone-high-school",
    name: "Brownstone High School",
    size: "large",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/0/02/Rooms_Brownstone_High_School.png/revision/latest/scale-to-width-down/2000?cb=20251112082402",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Brownstone_High_School",
  },
  {
    id: "sunny-meadows",
    name: "Sunny Meadows (full/unrestricted)",
    size: "large",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/a/ae/Rooms_Sunny_Meadows.png/revision/latest/scale-to-width-down/2000?cb=20260802212553",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Sunny_Meadows_Mental_Institution",
  },
];

export function getMapById(id: string): GameMap | undefined {
  return maps.find((m) => m.id === id);
}

export interface RemovedMap {
  id: string;
  name: string;
  note: string;
  wikiUrl: string;
}

export const removedMaps: RemovedMap[] = [
  {
    id: "asylum",
    name: "Asylum",
    note: "Removed from the game; superseded by Sunny Meadows Mental Institution.",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Asylum",
  },
];
