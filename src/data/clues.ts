import type { Clue } from "@/lib/types";

/**
 * Behavioral tells & abilities, converted into toggles for Elimination Mode.
 * `keep` = only these ghosts can survive once active. `eliminate` = these ghosts are ruled out once active.
 * Derived 1:1 from noEvidenceTells/abilities in src/data/ghosts.ts.
 */
export const clues: Clue[] = [
  // Doors & objects
  { id: "doorHalfOpen", category: "Doors & Objects", label: "Left a door half-open (not fully open or closed)", eliminate: ["yurei"] },
  { id: "exteriorDoorInteract", category: "Doors & Objects", label: "Interacted with an exterior/exit door outside of a hunt or event", keep: ["yurei"] },
  { id: "doorSlamSanity", category: "Doors & Objects", label: "A door slammed shut and nearby sanity dropped suddenly", keep: ["yurei"] },
  { id: "saltUndisturbed", category: "Doors & Objects", label: "Walked straight through salt without disturbing it", keep: ["wraith"] },
  { id: "lightTurnedOn", category: "Doors & Objects", label: "Ghost itself turned a light switch or lamp ON", eliminate: ["mare"] },
  { id: "lightKilledInstantly", category: "Doors & Objects", label: "A light source got flipped back off moments after being turned on nearby", keep: ["mare"] },
  { id: "fingerprintsUnusual", category: "Doors & Objects", label: "Fingerprints found with an unusual number of fingers (6-fingered or doubled)", keep: ["obake"] },
  { id: "itemThrowFrenzy", category: "Doors & Objects", label: "Threw/levitated multiple items in rapid succession ('py bomb')", keep: ["poltergeist"] },
  { id: "footstepSkipped", category: "Doors & Objects", label: "A footstep sound was skipped during an event", keep: ["obake"] },

  // Power & elements
  { id: "breakerOn", category: "Power & Elements", label: "Ghost turned the breaker ON", eliminate: ["hantu"] },
  { id: "breakerOff", category: "Power & Elements", label: "Ghost turned the breaker OFF", eliminate: ["jinn"] },
  { id: "coldFastWarmSlow", category: "Power & Elements", label: "Hunted faster in a cold room, noticeably slower in a warm room", keep: ["hantu"] },
  { id: "fireLitBySelf", category: "Power & Elements", label: "Ghost lit a candle or fire source itself", eliminate: ["onryo"] },
  { id: "fireBlownRepeatedly", category: "Power & Elements", label: "Blew out a flame within ~20-30s of it being lit, or blew the same one out twice quickly", keep: ["onryo"] },
  { id: "electronicsWideRange", category: "Power & Elements", label: "Its heartbeat/detection sound carried out farther than usual (~15m)", keep: ["raiju"] },
  { id: "electronicsBoostedSpeed", category: "Power & Elements", label: "Sped up noticeably when nearby electronics were active", keep: ["raiju"] },
  { id: "jinnSanityDrain", category: "Power & Elements", label: "Sanity dropped sharply (~25%) just from being near it with the breaker on", keep: ["jinn"] },

  // Sound & sight
  { id: "banshWail", category: "Sound & Sight", label: "Heard a distinct 'wail' response on the parabolic mic / recorder", keep: ["banshee"] },
  { id: "spiritBoxBreath", category: "Sound & Sight", label: "Spirit Box within 1m got a unique breathing response", keep: ["deogen"] },
  { id: "spiritBoxCurse", category: "Sound & Sight", label: "A Spirit Box/parabolic/recorder response was immediately followed by a sanity curse (2x drain)", keep: ["moroi"] },
  { id: "doubleParabolic", category: "Sound & Sight", label: "Got two parabolic mic responses within 80 seconds of each other", keep: ["myling"] },
  { id: "shortHuntRange", category: "Sound & Sight", label: "Hunt footsteps/sounds went quiet much closer than usual (~12m)", keep: ["myling"] },
  { id: "loudHeartbeat", category: "Sound & Sight", label: "Heartbeat sound was unusually loud and bass-heavy", keep: ["raiju"] },
  { id: "fastBlinkHunt", category: "Sound & Sight", label: "Stayed visible for unusually long stretches during a hunt — barely blinked/flickered", keep: ["oni"] },
  { id: "slowBlinkHunt", category: "Sound & Sight", label: "Flickered invisible for unusually long stretches during a hunt (up to ~2s at a time)", keep: ["phantom"] },
  { id: "invisibleInMedia", category: "Sound & Sight", label: "Ghost was invisible in a photo/video, in any form or state (not just during a hunt)", keep: ["phantom"] },
  { id: "sanityDrainAura", category: "Sound & Sight", label: "Sanity drained steadily just from being near it during a hunt/event", keep: ["phantom"] },
  { id: "uvFadesFast", category: "Sound & Sight", label: "UV evidence faded about twice as fast as usual", keep: ["obake"] },

  // Movement & behavior
  { id: "neverLosesLOS", category: "Movement & Behavior", label: "Ghost always seems to have line of sight — can't be hidden from, only outrun", keep: ["deogen"] },
  { id: "slowsAsCloses", category: "Movement & Behavior", label: "Ghost's speed dropped the closer it got", keep: ["deogen"] },
  { id: "slowUntilSpotted", category: "Movement & Behavior", label: "Very slow (~1 m/s) until it got line of sight, then sped up sharply", keep: ["revenant"] },
  { id: "dualLocationInteract", category: "Movement & Behavior", label: "Ghost seemed to interact in two different spots at the same time", keep: ["thetwins"] },
  { id: "twinsSpeedAlternates", category: "Movement & Behavior", label: "Hunt speed alternated noticeably between a slow and a fast version across different hunts", keep: ["thetwins"] },
  { id: "teleportHeadHeightEmf", category: "Movement & Behavior", label: "Teleported to a player, left EMF at their feet, then walked back to its room", keep: ["wraith"] },
  { id: "neverMistyOrb", category: "Movement & Behavior", label: "Never triggered the misty-orb ghost event", keep: ["oni"] },
  { id: "inactiveWhilePlayerInRoom", category: "Movement & Behavior", label: "Never did events/hunts/interactions while a player was inside its room", keep: ["shade"] },
  { id: "neverSings", category: "Movement & Behavior", label: "Never performs Singing events", keep: ["shade"] },
  { id: "speedShiftAfterProvoke", category: "Movement & Behavior", label: "Got faster/more aggressive right after salt, incense, or a crucifix was used on it", keep: ["gallu"] },
  { id: "behaviorShiftMidGame", category: "Movement & Behavior", label: "Hunt speed, sanity trigger, or behavior seemed to completely change partway through the contract", keep: ["themimic"] },
  { id: "aggressionCycles2Min", category: "Movement & Behavior", label: "Aggression/speed clearly shifted roughly every 2 minutes", keep: ["obambo"] },
  { id: "agesOverTime", category: "Movement & Behavior", label: "Ghost seemed to get slower and less active as the contract went on", keep: ["thaye"] },
  { id: "talksBoostsActivity", category: "Movement & Behavior", label: "Got noticeably more hunt-happy while a player was talking in the same room as it", keep: ["yokai"] },
  { id: "shortDetectionRange", category: "Movement & Behavior", label: "Electronics/voice detection range seemed very short (close range only)", keep: ["yokai"] },
  { id: "singleTargetStalk", category: "Movement & Behavior", label: "Only ever seems to actively hunt/target one specific player", keep: ["banshee"] },
  { id: "hidingSpotEndsHunt", category: "Movement & Behavior", label: "Hunt ended instantly the moment it reached a player correctly using an official hiding spot (closet/locker)", keep: ["aswang"] },
  { id: "fastLosRampUp", category: "Movement & Behavior", label: "Line-of-sight speed ramp-up during a hunt was noticeably faster than normal (full sprint in well under 13s)", keep: ["aswang"] },
  { id: "fastStartNoRamp", category: "Movement & Behavior", label: "Hunted at a flat, very fast speed with no line-of-sight ramp-up, especially early in the contract", keep: ["deildegast"] },
  { id: "slowsWithObjectInteraction", category: "Movement & Behavior", label: "Hunt speed dropped noticeably after the team interacted with lots of objects around the house", keep: ["deildegast"] },
  { id: "blindIgnoresSight", category: "Movement & Behavior", label: "Walked right past a silent, crouched player in plain sight during a hunt", keep: ["kormos"] },
  { id: "soundHoming", category: "Movement & Behavior", label: "Homed in hard on noise from far beyond normal range, then visibly sped up once it heard something", keep: ["kormos"] },
  { id: "killThroughWalls", category: "Movement & Behavior", label: "Closed in and killed (or nearly killed) a player through a wall/door with no direct line to them", keep: ["kormos"] },

  // Special evidence & Ouija
  { id: "modelIsMale", category: "Special", label: "Ghost model is clearly male", eliminate: ["banshee", "dayan"] },
  { id: "roomChanged", category: "Special", label: "Ghost changed its favorite room mid-contract", eliminate: ["goryo"] },
  { id: "ouija90", category: "Special", label: "Ouija Board answered 90 or higher to 'how old are you?'", keep: ["thaye"] },
  { id: "mimicFourEvidence", category: "Special", label: "Ghost showed 4 different evidence types across the investigation (Spirit Box + UV + Freezing + Orbs)", keep: ["themimic"] },
  { id: "orbsUvSpiritNoFreezing", category: "Special", label: "Confirmed exactly Ghost Orbs + UV + Spirit Box evidence, and ruled out Freezing Temps", keep: ["kormos"] },
  { id: "dotsMonitorOnly", category: "Special", label: "DOTS showed up on a placed camera's monitor feed, but not through the camera's own viewfinder", keep: ["goryo"] },

  // Timing
  { id: "rehuntUnder25", category: "Timing", label: "Re-hunted less than 25 seconds after the previous hunt ended (no smudge used)", keep: ["demon"] },
  { id: "smudge60sDemon", category: "Timing", label: "Hunted again 60-89 seconds after being smudged (before the usual 90s)", keep: ["demon"] },
  { id: "smudge180sSpirit", category: "Timing", label: "Took about 3 minutes (180s) after being smudged before it could hunt again", keep: ["spirit"] },
  { id: "smudge7sMoroi", category: "Timing", label: "Smudge blinded it noticeably longer than usual (~7s instead of 5s)", keep: ["moroi"] },
  { id: "smudge4sGallu", category: "Timing", label: "Smudge blind was unusually short (~4s)", keep: ["gallu"] },
  { id: "smudgeTrapYurei", category: "Timing", label: "Smudging trapped the ghost in its favorite room for about 90 seconds", keep: ["yurei"] },
];

export const clueCategories = Array.from(new Set(clues.map((c) => c.category)));
