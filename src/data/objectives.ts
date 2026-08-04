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
