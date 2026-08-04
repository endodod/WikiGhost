export interface EquipmentTier {
  tier: "I" | "II" | "III";
  stats: string;
  /** Omitted where the source data doesn't list an unlock level/price (e.g. UV Light's tier table). */
  unlock?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: "starter" | "optional";
  /** Real image URL, or omitted to show a placeholder that links out to the official wiki page. */
  image?: string;
  wikiUrl: string;
  tiers?: EquipmentTier[];
  /** Extra clarifying note shown above the tier table (e.g. UV Light's charge-time correction). */
  note?: string;
  /** May contain **bold** spans. */
  bestPick: string;
}

export interface TruckItem {
  id: string;
  name: string;
  function: string;
  /** Real image URL, or omitted to show a placeholder that links out to the official wiki page. */
  image?: string;
  wikiUrl: string;
}

export interface CursedPossessionSection {
  heading: string;
  body?: string;
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface CursedPossession {
  id: string;
  name: string;
  image: string;
  wikiUrl: string;
  sections: CursedPossessionSection[];
}

export const equipment: EquipmentItem[] = [
  // --- Starter Equipment ---
  {
    id: "dots-projector",
    name: "D.O.T.S. Projector",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/2/23/DOTS090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153113",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/D.O.T.S._Projector",
    tiers: [
      { tier: "I", stats: "Narrow spotlight, 5m range, handheld", unlock: "Default" },
      { tier: "II", stats: "Area light, 2.5m range, placeable", unlock: "Lvl 27 – $3,000" },
      { tier: "III", stats: "Wide spotlight, 7m range, placeable, actively scans", unlock: "Lvl 49 – $3,000" },
    ],
    bestPick:
      "**Tier III.** It trades the T1's \"point it and hope\" handheld beam for a placeable unit with the widest coverage (7m) that scans the room on its own — you can drop it in the suspected ghost room and walk away instead of babysitting it. T2's narrow 2.5m range makes it the weakest of the three despite being placeable; skip straight from T1 to T3 if funds allow.",
  },
  {
    id: "emf-reader",
    name: "EMF Reader",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/8/80/EMF090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153132",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/EMF_Reader",
    tiers: [
      { tier: "I", stats: "1.7m range, low accuracy", unlock: "Default" },
      { tier: "II", stats: "1.7m range, high accuracy, audio indicator", unlock: "Lvl 18 – $3,000" },
      {
        tier: "III",
        stats: "3.5m range, high accuracy, audio indicator, display screen, distance + directional indicator",
        unlock: "Lvl 46 – $4,500",
      },
    ],
    bestPick:
      "**Tier III.** Same accuracy as T2 but literally double the range, plus a screen and directional indicator that tells you which way to walk to close in on the signal — huge on larger maps. T2 is only worth grabbing as a cheap interim step before saving for T3.",
  },
  {
    id: "flashlight",
    name: "Flashlight",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/a/ae/Flash090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153231",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Flashlight",
    tiers: [
      { tier: "I", stats: "Narrow spotlight, low intensity", unlock: "Default" },
      { tier: "II", stats: "Narrow spotlight, medium intensity", unlock: "Lvl 18 – $3,000" },
      { tier: "III", stats: "Wide spotlight, high intensity", unlock: "Lvl 34 – $3,000" },
    ],
    bestPick:
      "**Tier III** for general use — wide beam lights up a whole room instead of a pinprick, which matters a lot for spotting UV prints, salt disturbances, and ghost silhouettes at range. Some players keep a T1 in reserve since a dimmer, narrower beam is marginally less likely to spook a shy ghost, but for most contracts T3 is the correct buy.",
  },
  {
    id: "ghost-writing-book",
    name: "Ghost Writing Book",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/8/84/WritingBook090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153804",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Ghost_Writing_Book",
    tiers: [
      { tier: "I", stats: "3m range, low interaction rate", unlock: "Default" },
      { tier: "II", stats: "4m range, medium interaction rate", unlock: "Lvl 23 – $3,000" },
      { tier: "III", stats: "5m range, high interaction rate", unlock: "Lvl 55 – $3,000" },
    ],
    bestPick:
      "**Tier III.** Both range and interaction rate scale together, so there's no trade-off here — T3 is a straight upgrade and meaningfully cuts down how long you sit around waiting for the ghost to write.",
  },
  {
    id: "spirit-box",
    name: "Spirit Box",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/f/f5/SpiritBox090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153600",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Spirit_Box",
    tiers: [
      { tier: "I", stats: "3m range, low audio quality, low response rate", unlock: "Default" },
      {
        tier: "II",
        stats: "4m range, medium audio quality, medium response rate, display screen",
        unlock: "Lvl 23 – $3,000",
      },
      { tier: "III", stats: "5m range, high audio quality, high response rate", unlock: "Lvl 46 – $3,000" },
    ],
    bestPick:
      "**Tier III.** Higher response rate means more usable answers per minute spent asking questions, and the clearer audio quality removes the ambiguity that causes teams to argue over what the ghost actually said. Straight upgrade, no real downside.",
  },
  {
    id: "thermometer",
    name: "Thermometer",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/9/9b/Thermometer090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153622",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Thermometer",
    tiers: [
      { tier: "I", stats: "Medium accuracy, low sample speed, non-electronic", unlock: "Default" },
      {
        tier: "II",
        stats: "High accuracy, medium sample speed, becomes electronic (hold to scan)",
        unlock: "Lvl 27 – $3,000",
      },
      { tier: "III", stats: "High accuracy, high sample speed", unlock: "Lvl 65 – $3,000" },
    ],
    bestPick:
      "**Tier III** for speed of narrowing down the ghost room. Worth noting: because T2/T3 are electronic, the ghost can sense them being actively used (unlike T1) — some players deliberately keep a T1 around specifically because it's non-electronic and safe to leave running during a hunt.",
  },
  {
    id: "uv-light",
    name: "UV Light",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/5/56/UV090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153714",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/UV_Light",
    note: "There's no \"battery recharge\" mechanic on the UV Light. What it actually has is **UV charge time** — since the Ultraviolet rework, shining the light on a print doesn't just reveal it, it also \"charges\" it; the print then stays visible for a short while *after* you put the light away, which is what you actually need to line up a photo. Charge time is how long you have to hold the light on the print before it's charged enough to photograph. This is confirmed directly by Kinetic Games' own Development Preview #11 devlog, not just the wiki.",
    tiers: [
      {
        tier: "I",
        stats: "Glowstick — non-electronic, area light. ~10s UV charge time. Snap to activate; lasts ~60s before dimming, can be shaken for extra life. Not detected as \"electronic\" by the ghost.",
        unlock: "Default",
      },
      {
        tier: "II",
        stats: "UV Flashlight — narrow spotlight, electronic. ~5s UV charge time. Brighter and longer range than T1, much faster charge than the Glowstick.",
      },
      {
        tier: "III",
        stats: "UV Light Pro — wide spotlight, electronic. ~1.5s UV charge time. Widest beam, fastest charge of the three.",
      },
    ],
    bestPick:
      "**Tier II is genuinely strong for precision work** — its narrow beam concentrates light on a single door handle or light switch, and a ~5-second charge time means you're rarely standing around waiting. **Tier III** is the fastest to charge (~1.5s) and has the widest spread, which is better for sweeping a whole room or hallway for footprint trails quickly. Tier I's real advantage isn't speed at all — it's that the Glowstick isn't electronic, so it's safe to drop and leave running during a hunt without the ghost sensing it, and solo players like being able to leave it charging a print hands-free.",
  },
  {
    id: "video-camera",
    name: "Video Camera",
    category: "starter",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/f/f9/VideoCamera090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153739",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Video_Camera",
    tiers: [
      { tier: "I", stats: "Low image quality, high paranormal interference", unlock: "Default" },
      { tier: "II", stats: "Medium image quality, medium interference", unlock: "Lvl 27 – $3,000" },
      { tier: "III", stats: "High image quality, low interference", unlock: "Lvl 49 – $3,000" },
    ],
    bestPick:
      "**Tier III.** Lower paranormal interference means cleaner footage (and Ghost Orb spotting) even when the ghost is active nearby, and the image quality difference is very noticeable when reviewing footage on the truck monitor.",
  },

  // --- Optional Equipment ---
  {
    id: "crucifix",
    name: "Crucifix",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/0/0c/Crucifix090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153055",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Crucifix",
    tiers: [
      { tier: "I", stats: "3m range, 2 uses", unlock: "Lvl 7" },
      { tier: "II", stats: "4m range, 2 uses", unlock: "Lvl 34 – $4,000" },
      { tier: "III", stats: "4m range, 2 uses, prevents one Cursed Hunt", unlock: "Lvl 80 – $20,000" },
    ],
    bestPick:
      "**Tier III** if you can afford it — the extra meter of range over T1 already matters, but the standout feature is that T3 can stop a *cursed hunt* (from Tarot's Death card, a broken Ouija Board, etc.), which T1/T2 cannot do at all. Expensive, but it's the only crucifix tier with that property.",
  },
  {
    id: "firelight",
    name: "Firelight",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/2/26/FireLight090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153154",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Firelight",
    tiers: [
      { tier: "I", stats: "2m range, 3 min duration, 33% sanity-drain reduction nearby", unlock: "Lvl 12" },
      { tier: "II", stats: "2m range, 5 min duration, 50% sanity-drain reduction", unlock: "Lvl 37 – $3,000" },
      {
        tier: "III",
        stats: "2m range, 66% sanity-drain reduction, waterproof, reusable",
        unlock: "Lvl 75 – $10,000",
      },
    ],
    bestPick:
      "**Tier III.** It's the only tier that's waterproof (matters on Maple Lodge/Camp Woodwind in rain) and not consumed after burning out, plus it gives the strongest sanity-drain buffer of the three.",
  },
  {
    id: "head-gear",
    name: "Head Gear",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/8/87/HeadGear090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153251",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Head_Gear",
    tiers: [
      { tier: "I", stats: "Helmet camera — video feed to the truck computer", unlock: "Lvl 13" },
      {
        tier: "II",
        stats: "LED flashlight — low-intensity, narrow beam, doesn't take an inventory slot",
        unlock: "Lvl 42 – $10,000",
      },
      {
        tier: "III",
        stats: "Night-vision goggles — see in the dark at the cost of moderate visual distortion",
        unlock: "Lvl 80 – $10,000",
      },
    ],
    bestPick:
      "Not a strict tier ladder — pick per role. T1 is great for whoever's staying near the ghost room so the team can watch a live POV feed from the truck. T2 is a solid quality-of-life pick that frees up your hand slot for evidence gear while still lighting your way. T3 is the strongest for solo exploration in total darkness, but the visual distortion makes precise evidence photography harder — many players avoid it for that reason.",
  },
  {
    id: "igniter",
    name: "Igniter",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/4/4f/Igniter090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153311",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Igniter",
    tiers: [
      { tier: "I", stats: "10s duration, 10 uses per igniter", unlock: "Lvl 12" },
      { tier: "II", stats: "5 min duration", unlock: "Lvl 37 – $500" },
      { tier: "III", stats: "10 min duration, waterproof", unlock: "Lvl 52 – $750" },
    ],
    bestPick:
      "**Tier III** for cheap — only $750 to upgrade and it removes the two biggest annoyances (running out mid-lighting-session, and being useless in the rain on outdoor maps).",
  },
  {
    id: "incense",
    name: "Incense",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/0/0b/Incense090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153330",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Incense",
    tiers: [
      { tier: "I", stats: "3m range, 5s duration", unlock: "Lvl 14" },
      { tier: "II", stats: "4m range, 6s duration, slows the ghost during a hunt", unlock: "Lvl 37 – $3,500" },
      { tier: "III", stats: "5m range, 7s duration, halts the ghost during a hunt", unlock: "Lvl 80 – $15,000" },
    ],
    bestPick:
      "**Tier III** is a huge defensive upgrade — stopping the ghost dead instead of just slowing it is often the difference between escaping a hunt and dying. Pricey, but arguably the single best defensive item upgrade in the game once unlocked.",
  },
  {
    id: "motion-sensor",
    name: "Motion Sensor",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/5/57/MotionSensor090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153410",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Motion_Sensor",
    tiers: [
      { tier: "I", stats: "Line-shaped detection zone, light indicator only", unlock: "Lvl 3" },
      { tier: "II", stats: "Line + cone detection zone, light + audio indicator", unlock: "Lvl 42 – $2,500" },
      {
        tier: "III",
        stats: "Circular (360°) detection zone, actively scans, light + audio indicator",
        unlock: "Lvl 70 – $8,000",
      },
    ],
    bestPick:
      "**Tier III.** A 360° detection radius vs. a straight line is a massive practical difference — you can cover a whole room from one placement instead of needing to guess a walking path.",
  },
  {
    id: "parabolic-microphone",
    name: "Parabolic Microphone",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/3/35/Parabolic090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153429",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Parabolic_Microphone",
    tiers: [
      { tier: "I", stats: "20m range", unlock: "Lvl 5" },
      { tier: "II", stats: "30m range, display screen", unlock: "Lvl 32 – $3,000" },
      { tier: "III", stats: "30m range, display screen, distance + directional indicator", unlock: "Lvl 70 – $5,000" },
    ],
    bestPick:
      "**Tier III.** Same 30m range as T2, but the directional/distance indicator turns \"I heard something somewhere\" into \"walk that way, it's getting louder\" — very useful for pinpointing a roaming ghost on big maps.",
  },
  {
    id: "photo-camera",
    name: "Photo Camera",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/5/58/PhotoCamera090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153455",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Photo_Camera",
    tiers: [
      { tier: "I", stats: "High time between photos (slow)", unlock: "Lvl 2" },
      { tier: "II", stats: "Medium time between photos, display screen", unlock: "Lvl 23 – $3,000" },
      { tier: "III", stats: "Low time between photos (fast)", unlock: "Lvl 55 – $5,000" },
    ],
    bestPick:
      "**Tier III.** Faster shot-to-shot time is directly useful for Perfect Investigation runs where you're trying to bank several unique photos quickly during a short ghost event.",
  },
  {
    id: "salt",
    name: "Salt",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/a/a0/Salt090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153524",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Salt",
    tiers: [
      { tier: "I", stats: "2 uses per bag", unlock: "Lvl 8" },
      { tier: "II", stats: "3 uses per bag", unlock: "Lvl 39 – $2,500" },
      {
        tier: "III",
        stats: "3 uses per bag, slows the ghost if it walks through during a hunt",
        unlock: "Lvl 65 – $5,000",
      },
    ],
    bestPick:
      "**Tier III.** Same use count as T2 but adds a real defensive slow effect on top — no reason to stop at T2 once T3 is affordable.",
  },
  {
    id: "sanity-medication",
    name: "Sanity Medication",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/1/1d/Med090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153348",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Sanity_Medication",
    tiers: [
      { tier: "I", stats: "~38s to fully restore sanity", unlock: "Lvl 14" },
      { tier: "II", stats: "~28s restore time", unlock: "Lvl 39 – $2,000" },
      { tier: "III", stats: "~10s restore time, plus a short sprint boost", unlock: "Lvl 75 – $5,000" },
    ],
    bestPick:
      "**Tier III**, easily — a near-instant restore plus a sprint buff is strictly better and relatively cheap to unlock.",
  },
  {
    id: "sound-recorder",
    name: "Sound Recorder",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/4/43/SoundRecorder_T3.png/revision/latest/scale-to-width-down/500?cb=20250704193014",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Sound_Recorder",
    tiers: [
      { tier: "I", stats: "3m range, electronic", unlock: "Lvl 4" },
      { tier: "II", stats: "5m range, display screen, electronic", unlock: "Lvl 39" },
      {
        tier: "III",
        stats: "5m range, display screen, distance + directional indicator, electronic",
        unlock: "Lvl 60",
      },
    ],
    bestPick:
      "**Tier III.** Same 5m range as T2, but adds a distance and directional indicator that turns the sound meter into something you can actually navigate by — very close to how the Parabolic Mic's top tier works.",
  },
  {
    id: "sound-sensor",
    name: "Sound Sensor",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/0/0f/SoundSensor090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153542",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Sound_Sensor",
    tiers: [
      { tier: "I", stats: "Circular detection, 5m/10m range rings", unlock: "Lvl 10" },
      { tier: "II", stats: "Circular detection, 5m/10m/15m range rings", unlock: "Lvl 32 – $3,000" },
      {
        tier: "III",
        stats: "Circle + cone + side detection shapes, 5m/10m/15m",
        unlock: "Lvl 52 – $1,500",
      },
    ],
    bestPick:
      "**Tier III** — cheapest upgrade path of any item (only $1,500 for the T2→T3 jump) and it adds directional detection shapes on top of the T2 range, so there's no reason not to max it.",
  },
  {
    id: "tripod",
    name: "Tripod",
    category: "optional",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/7/7c/Tripod090_T3.png/revision/latest/scale-to-width-down/500?cb=20230822153642",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Tripod",
    tiers: [
      { tier: "I", stats: "Placeable, medium knockdown chance", unlock: "Lvl 9" },
      { tier: "II", stats: "Placeable, rotation control, medium knockdown chance", unlock: "Lvl 34 – $5,000" },
      { tier: "III", stats: "Placeable, rotation control, low knockdown chance", unlock: "Lvl 60 – $3,000" },
    ],
    bestPick:
      "**Tier III.** Lower knockdown chance protects your mounted Video Camera from being thrown by the ghost, and it's the cheapest of the three upgrade steps.",
  },
];

export const truckEquipment: TruckItem[] = [
  {
    id: "computer",
    name: "Computer",
    function: "View onsite Video Camera feeds.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/0/02/Computer.png/revision/latest/scale-to-width-down/500?cb=20250627163211",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Computer",
  },
  {
    id: "objective-board",
    name: "Objective Board",
    function: "Displays the 4 objectives for the contract.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/7/7f/ObjectiveBoard.png/revision/latest/scale-to-width-down/500?cb=20250627175457",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Objective_Board",
  },
  {
    id: "sanity-monitor",
    name: "Sanity Monitor",
    function: "Real-time sanity readout for every player.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/b/b9/Sanity_monitor_0.6.png/revision/latest/scale-to-width-down/500?cb=20220411120049",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Sanity_Monitor",
  },
  {
    id: "setup-timer",
    name: "Setup Timer",
    function: "Counts down the setup phase before the ghost can hunt.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/8/8d/SetupTimer.png/revision/latest/scale-to-width-down/500?cb=20250627162053",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Setup_Timer",
  },
  {
    id: "site-activity-monitor",
    name: "Site Activity Monitor",
    function: "Shows a spike whenever the ghost acts — high spikes = events/hunts.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/8/80/Site_activity_monitor_0.6.png/revision/latest/scale-to-width-down/500?cb=20220408034106",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Site_Activity_Monitor",
  },
  {
    id: "site-map",
    name: "Site Map",
    function: "Overview map of the investigation location.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/1/13/Site_map_0.6.png/revision/latest/scale-to-width-down/500?cb=20220408034152",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Site_Map",
  },
  {
    id: "sound-monitor",
    name: "Sound Monitor",
    function: "Connects to placed Sound Sensors.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/5/5a/Sound_monitor_0.6.png/revision/latest/scale-to-width-down/500?cb=20220408034224",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Sound_Monitor",
  },
  {
    id: "watch",
    name: "Watch",
    function: "Worn item — shows time and sanity. No tiers.",
    image: "https://static.wikia.nocookie.net/phasmophobia/images/0/02/WatchModel.png/revision/latest/scale-to-width-down/500?cb=20260506171700",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Watch",
  },
];

export const consumablesNote =
  "Consumable items (must be rebought after use, regardless of tier unless noted): Crucifix (all tiers), Firelight (T1–T2 only — T3 is reusable), Igniter (T1–T2 only — T3 is reusable), Incense (all tiers), Sanity Medication (all tiers), Salt (all tiers).";

export const cursedPossessions: CursedPossession[] = [
  {
    id: "music-box",
    name: "Music Box",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/5/5f/Music_box_display.jpg/revision/latest/scale-to-width-down/600?cb=20230131144318",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Music_Box",
    sections: [
      {
        heading: "Effect",
        body: "If the ghost is within roughly 5m of an active Music Box, it becomes visible in full form and walks toward it. Reaching the box, walking for 5 seconds, or the box being dropped ends the event and starts a cursed hunt.",
      },
      {
        heading: "Sanity cost",
        body: "Being within ~2.5m of an active box drains sanity at roughly 2.5%/second — step back once it's playing.",
      },
      {
        heading: "Risk",
        body: "One-time use — it breaks after the event ends, and that break is always a cursed hunt, so have an escape route ready before turning it on.",
      },
    ],
  },
  {
    id: "ouija-board",
    name: "Ouija Board",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/2/2f/Ouija_Board_New.png/revision/latest/scale-to-width-down/600?cb=20211210172553",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Ouija_Board",
    sections: [
      {
        heading: "Effect",
        body: "Toggle it on, then ask a question out loud (or via the text UI). ~67% chance the board answers by spelling a response with the planchette; ~33% chance it fails, flickers the room's lights, turns off, and drains a large chunk of sanity.",
      },
      {
        heading: "Sanity cost",
        body: "A successful answer still costs 5–10% sanity (unless the ghost is a Demon, which loses no sanity on success — a handy identification trick). A failed question costs a much larger chunk (historically around 40%).",
      },
      {
        heading: "Breaking it",
        body: "Reaching 0% sanity while it's active, or letting sanity run out mid-question, breaks the board and triggers a cursed hunt.",
      },
      {
        heading: "Question categories",
        body: "Say any natural phrasing of these — the game matches on intent, not exact wording:",
        bullets: [
          "**Victim questions** — who the ghost killed: \"Who did you kill?\" / \"Who is your victim?\" / \"Who did you murder?\" / \"Who died?\"",
          "**Age questions** — the ghost's age: \"How old are you?\" / \"What is your age?\" / \"Are you old?\" / \"Are you young?\"",
          "**Death questions** — how long it's been dead: \"How long have you been dead?\" / \"How many years ago did you die?\" / \"When did you die?\"",
          "**Room/occupancy questions** — how many people/ghosts are present: \"How many people are here?\" / \"Are you alone?\" / \"Are we alone?\" / \"Who is here?\"",
          "**Location questions** — the ghost's current room: \"Where are you?\" / \"What is your favorite room?\" / \"Are you close?\" / \"Are you near?\"",
        ],
      },
    ],
  },
  {
    id: "haunted-mirror",
    name: "Haunted Mirror",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/7/7b/Cursed_Mirror.jpg/revision/latest/scale-to-width-down/600?cb=20220303041525",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Haunted_Mirror",
    sections: [
      { heading: "Effect", body: "Raise it to peer directly into the Ghost Room from wherever you are." },
      {
        heading: "Sanity cost",
        body: "7.5% per second held up, or a flat 20% minimum — even a split-second peek costs the full 20%.",
      },
      {
        heading: "Breaking it",
        body: "Activating it below 20% sanity, or hitting 0% while looking, cracks the mirror and triggers a cursed hunt; once broken it can't be used again that contract.",
      },
    ],
  },
  {
    id: "summoning-circle",
    name: "Summoning Circle",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/d/de/Sc_new1.jpg/revision/latest/scale-to-width-down/600?cb=20231230161505",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Summoning_Circle",
    sections: [
      {
        heading: "Effect",
        body: "Light all 5 candles with an Igniter or lit Firelight (Secondary Use). The ghost teleports to the circle, appears in full form for 5 seconds — great for a guaranteed ghost photo/video — then a cursed hunt begins on the spot.",
      },
      {
        heading: "Sanity cost",
        body: "Roughly 16% per candle lit, so lighting all 5 costs a large chunk of team sanity before the hunt even starts.",
      },
      {
        heading: "Risk",
        body: "Immovable — you commit to a location. Have your hiding spot picked before you light the last candle.",
      },
    ],
  },
  {
    id: "tarot-cards",
    name: "Tarot Cards",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/a/a7/Tarot_Cards.png/revision/latest/scale-to-width-down/600?cb=20211210181436",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Tarot_Cards",
    sections: [
      {
        heading: "How it works",
        body: "A deck of 10 randomly generated cards, each independently drawn (so duplicates are possible, and not every card type is guaranteed to appear in a given deck). Drawing during a hunt always pulls The Fool (100%), so never draw mid-hunt.",
      },
      {
        heading: "Cards",
        table: {
          headers: ["Card", "Effect", "Draw chance"],
          rows: [
            ["The Tower", "Doubles all potential ghost activity for 20 seconds.", "20%"],
            ["The Wheel of Fortune", "±25% sanity, 50/50 gain or loss.", "20%"],
            [
              "The Fool",
              "Mimics another random card's draw, then reveals as The Fool with no effect applied. Guaranteed during hunts.",
              "17% (100% in hunts)",
            ],
            ["The Devil", "Triggers a ghost event targeting the nearest player.", "10%"],
            ["Death", "Triggers an immediate cursed hunt.", "10%"],
            [
              "The Hermit",
              "Forces the ghost to its favourite room and disables roaming for 1 minute (doesn't block hunts/events while trapped).",
              "10%",
            ],
            ["The Sun", "Sets the drawer's sanity to 100%.", "5%"],
            ["The Moon", "Sets the drawer's sanity to 0%.", "5%"],
            [
              "The High Priestess",
              "Revives the first dead player (or the next to die, if none are dead yet). Doesn't stack.",
              "2%",
            ],
            ["The Hanged Man", "Instantly kills the drawer. Doesn't burn up like other cards.", "1%"],
          ],
        },
      },
      {
        heading: "Best use",
        body: "Photograph the deck before drawing (it disappears once exhausted). There's roughly a 35% chance a full 10-card deck contains no Death card at all, so it's the only cursed possession not guaranteed to force a hunt — don't rely on it if you specifically need one.",
      },
    ],
  },
  {
    id: "voodoo-doll",
    name: "Voodoo Doll",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/e/e2/Voodoo_Doll_New.jpg/revision/latest/scale-to-width-down/600?cb=20211210173413",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Voodoo_Doll",
    sections: [
      {
        heading: "Effect",
        body: "Has 10 pins; each use pushes a random pin in, forcing the ghost to perform an interaction (throwing an object, touching a door, leaving EMF/UV evidence — but not Ghost Writing or extinguishing fire).",
      },
      { heading: "Sanity cost", body: "5% per normal pin." },
      {
        heading: "The heart pin",
        body: "One specific pin drains 10% sanity instead and immediately triggers a cursed hunt.",
      },
      {
        heading: "At 0% sanity",
        body: "Using the doll pushes in all remaining pins at once (which can throw multiple objects simultaneously — don't mistake this for Poltergeist behavior) and forces a cursed hunt regardless of whether the heart pin was already used.",
      },
    ],
  },
  {
    id: "monkey-paw",
    name: "Monkey Paw",
    image:
      "https://static.wikia.nocookie.net/phasmophobia/images/c/cc/Monkey_Paw.png/revision/latest/scale-to-width-down/600?cb=20230228154004",
    wikiUrl: "https://phasmophobia.fandom.com/wiki/Monkey_Paw",
    sections: [
      {
        heading: "How it works",
        body: "Grant a wish by voice or text UI; every wish helps in some way but always carries a penalty. One finger curls per wish granted — once all fingers are curled, it's spent. Total wishes available per contract depends on your difficulty reward multiplier: 5 wishes below 2x, 4 wishes at 2–2.99x, 3 wishes at 3x+.",
      },
      {
        heading: "Wishes",
        table: {
          headers: ["Wish", "Effect", "Penalty"],
          rows: [
            ["\"I wish for Sanity\"", "Sets all players' sanity to 50%.", "Increases sanity drain rate by 50% of its current value; ghost may relocate rooms."],
            ["\"I wish to be safe\"", "Reveals the nearest hiding spot.", "The room's light goes out, your flashlight/voice position is revealed to the ghost, which can then sense you at any range."],
            ["\"I wish to leave\"", "Unlocks all doors.", "You're slowed for 5 seconds, need another 5 to recover speed, vision reduced throughout."],
            ["\"I wish to see the ghost\"", "Ghost appears near you for 5 seconds.", "Vision darkens, exits lock, and a hunt starts."],
            ["\"I wish for activity\"", "Doubles ghost activity for 2 minutes.", "Permanently breaks the fuse box and locks exits for 2 minutes."],
            ["\"I wish to trap the ghost\"", "Traps the ghost in its room for 1 minute (can't hunt/use abilities/roam).", "Locks your current room's doors too; a hunt starts once it's freed, with a 25% lower chance of exit doors opening."],
            ["\"I wish for life\"", "Revives a dead teammate.", "50% chance the wisher (or a random living teammate) dies instead."],
            ["\"I wish for knowledge\"", "Removes one incorrect evidence type from the journal.", "Vision/hearing drop sharply and a hunt starts right next to you."],
            ["\"I wish for [weather]\" (sun/rain/clear/snow)", "Changes the outdoor weather.", "25% sanity loss."],
            ["\"I wish for anything\"", "Triggers a random wish from the list.", "You get that wish's penalty too."],
          ],
        },
      },
      {
        heading: "Worth knowing",
        body: "All cursed possession photos count toward Photo Camera media rewards (up to $7/7 XP per unique capture) — always worth photographing whatever spawns before using it up.",
      },
    ],
  },
];

export function getEquipmentById(id: string): EquipmentItem | undefined {
  return equipment.find((e) => e.id === id);
}

export function getCursedPossessionById(id: string): CursedPossession | undefined {
  return cursedPossessions.find((c) => c.id === id);
}
