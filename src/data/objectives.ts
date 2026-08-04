export interface Objective {
  id: string;
  title: string;
  condition: string;
  how?: string;
  reward: string;
}

export const alwaysObjective: Objective = {
  id: "find-correct-ghost",
  title: "Find the correct ghost type",
  condition: "Select the correct ghost in the journal when the contract ends.",
  how: "Only completes at contract end; each player must personally select the right ghost — it isn't shared across the team.",
  reward: "$100 (small map) / $150 (medium) / $200 (large)",
};

export const objectivePool: Objective[] = [
  {
    id: "emf-reading-photo",
    title: "Capture a photo of any successful EMF reading",
    condition: "Photo of the EMF Reader at level 2+.",
    how: "Find the ghost's area, wait for it to interact with or throw an object, then scan that object with the EMF Reader and photograph the reading.",
    reward: "$25",
  },
  {
    id: "ghost-photo",
    title: "Capture a photo of the ghost",
    condition: "Photo Camera shot of the ghost during a ghost event, a hunt, or as a D.O.T.S. silhouette.",
    how: "Force a ghost event with the Monkey Paw, Music Box, or Summoning Circle, then snap the photo.",
    reward: "$25",
  },
  {
    id: "ghost-video",
    title: "Capture a video of the ghost",
    condition: "Video Camera footage of the ghost during a manifestation, hunt, or D.O.T.S. silhouette — handheld or via the truck feed.",
    how: "Much easier during a hunt since anything recorded auto-saves to the journal.",
    reward: "$25",
  },
  {
    id: "3-unique-photos",
    title: "Capture 3 unique photos with a Photo Camera",
    condition: "Three photos, each with a \"Unique\" stamp.",
    how: "Photograph the bone, an EMF reading, and the cursed possession — three easy, distinct categories.",
    reward: "$25",
  },
  {
    id: "3-unique-videos",
    title: "Capture 3 unique videos with a Video Camera",
    condition: "Three videos, each with a \"Unique\" stamp.",
    how: "Record disturbed Salt, a triggered Motion Sensor, and a moved Door.",
    reward: "$25",
  },
  {
    id: "2-unique-sounds",
    title: "Capture 2 unique paranormal sounds with a Sound Recorder",
    condition: "Two sounds, each with a \"Unique\" stamp.",
    how: "Record a burning Crucifix and a Firelight being blown out.",
    reward: "$25",
  },
  {
    id: "motion-sensor-detect",
    title: "Detect a ghost presence with a Motion Sensor",
    condition: "The ghost triggers a placed Motion Sensor.",
    how: "Place sensors in doorways/hallways the ghost roams, or in its favourite room.",
    reward: "$25",
  },
  {
    id: "crucifix-prevent-hunt",
    title: "Prevent the ghost from hunting with a Crucifix",
    condition: "The ghost attempts a hunt within a Crucifix's radius.",
    how: "Track the ghost (Parabolic Microphone or Motion Sensors/Salt) while holding a Crucifix; against a Demon, its range is +50% per tier.",
    reward: "$25",
  },
  {
    id: "witness-ghost-event",
    title: "Have a member of your team witness a ghost event",
    condition: "A ghost event triggers.",
    how: "Force one with Tarot Cards, the Music Box, Summoning Circle, or Monkey Paw — or lower average sanity and wait.",
    reward: "$25",
  },
  {
    id: "cleanse-incense",
    title: "Cleanse the area near the ghost using Incense",
    condition: "Light Incense near the ghost.",
    how: "Best done during a ghost event or hunt for accurate positioning.",
    reward: "$30",
  },
  {
    id: "repel-incense-chasing",
    title: "Repel the ghost with Incense while it's chasing someone",
    condition: "The ghost is stunned by Incense while it has line-of-sight on a player.",
    how: "Wait at a chokepoint (hallway/stairwell end), let the ghost close in, then light the Incense as it approaches.",
    reward: "$30",
  },
  {
    id: "blow-out-firelight",
    title: "Get the ghost to blow out a Firelight",
    condition: "The ghost extinguishes a Firelight.",
    how: "Place several lit Firelights in its favourite room/general area. Doesn't count fireplaces/candles/campfires — must be the equipment item.",
    reward: "$30",
  },
  {
    id: "escape-hunt",
    title: "Have a member of the team escape the ghost during a hunt",
    condition: "Everyone survives a hunt in which at least one player had line-of-sight with the ghost.",
    how: "Same chokepoint strategy as above — let the ghost see you, then break line-of-sight and hide.",
    reward: "$25",
  },
  {
    id: "sanity-below-25",
    title: "Get an average sanity below 25%",
    condition: "Team average sanity reads ≤25% at least once.",
    how: "Use cursed possessions like the Ouija Board or Summoning Circle to drop sanity quickly.",
    reward: "$25",
  },
  {
    id: "parabolic-detect-sound",
    title: "Detect a paranormal sound with a Parabolic Microphone",
    condition: "Pick up a paranormal sound (groan, laugh, talk, whisper, or a Banshee scream) with a held mic.",
    how: "Stand just outside the favourite room and aim it in, or point toward the ghost's known location during an event/hunt.",
    reward: "$25",
  },
];

export interface PerfectInvestigationMedia {
  device: string;
  need: number;
  items: string[];
}

export const perfectInvestigation = {
  summary:
    "To land the full Perfect Investigation bonus (extra cash + 50 XP), you need all four of the following in the same contract:",
  requirements: [
    "Correctly identify the ghost in the journal.",
    "Complete all 3 of the optional objectives (not just the mandatory \"find the ghost\").",
    "Find and collect the Bone — every contract has exactly one; check garages, basements, and attics first. Picking it up and photographing it are two separate things — do both.",
    "Fill the journal with only Unique media: 5 Unique photos, 5 Unique videos, 3 Unique sounds.",
  ],
  uniqueNote:
    "\"Unique\" means the first-ever capture of that specific evidence category in the contract — a second photo of the same category registers as a \"Duplicate\" and won't count toward the Perfect Investigation.",
  mediaBreakdown: [
    {
      device: "Photo Camera",
      need: 5,
      items: [
        "The Ghost (during an event/hunt) — best single-value shot",
        "The Bone",
        "The cursed possession that spawned",
        "A UV Fingerprint or Footprint",
        "An EMF Level 5 reading on the reader",
        "Ghost Writing in the book",
        "A burned Crucifix",
        "A Dead Body (if a teammate has died)",
        "An object mid-levitation (\"Interaction\")",
      ],
    },
    {
      device: "Video Camera",
      need: 5,
      items: [
        "The Ghost manifesting or hunting (biggest reward)",
        "Disturbed Salt",
        "A Door moving on its own",
        "Ghost Orbs",
        "A Motion Sensor being triggered",
        "A light flickering or exploding",
        "Ghost Writing in progress",
        "A burned Crucifix",
      ],
    },
    {
      device: "Sound Recorder",
      need: 3,
      items: [
        "A Spirit Box response",
        "A paranormal sound (groan/laugh/talk/whisper/scream)",
        "A burning Crucifix",
        "An EMF Level 5 reading",
        "Ghost Writing being written",
      ],
    },
  ] as PerfectInvestigationMedia[],
  runOrder: [
    "Do initial EMF/Spirit Box/DOTS sweeps to find the favourite room and lock in evidence.",
    "Grab the easy, low-risk Unique photo/video/sound trio (bone, cursed possession, EMF reading) before doing anything risky.",
    "Force a ghost event (Tarot Cards / Music Box / Summoning Circle / low sanity) to bank the Ghost photo, Ghost video, and a paranormal sound in one go.",
    "Set up a Crucifix + Incense combo near a chokepoint to knock out \"prevent a hunt,\" \"cleanse with incense,\" \"repel with incense,\" and \"escape a hunt\" objectives together if they're in the pool.",
    "Sweep remaining Video/Sound categories (salt, doors, motion sensor, Spirit Box) opportunistically while doing the above.",
    "Double-check the journal tab before ending the contract — a full grid of Unique media, all objectives ticked, correct ghost circled, and the bone in your inventory.",
  ],
};
