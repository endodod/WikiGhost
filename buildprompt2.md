# Verified Ghost/Entity Identification Dataset: Ghost Watchers, Ghost Exile & Abnormality

## TL;DR
- All three are Phasmophobia-style co-op ghost hunters built on a **3-evidence identification core**, but each layers a distinct second axis on top: Ghost Watchers adds **Age + Mood** (7 tools total), Ghost Exile adds a **ritual/exorcism type tied to ghost identity** (10-11 evidence types, "more than 20 types of ghosts"), and Abnormality is the simplest (7 evidence types, 16 documented ghosts).
- **Documentation confidence is uneven**: Ghost Watchers has the most mature docs (active official wiki.gg with per-ghost pages + a Fandom stub, though sources disagree on total ghost count — 8 vs 24 vs 20). Ghost Exile's Fandom wiki has clean per-ghost evidence/trait pages but no per-ghost signature numbers. Abnormality has NO wiki — the only structured source is a single community Steam guide that self-identifies as incomplete and predates a major 2025 rework.
- Treat all data as version-bound: Ghost Exile and Abnormality remain in Early Access with sources explicitly flagged outdated (Ghost Exile guide = v1.4.2 / 2024; Abnormality guide = Nov 2024, superseded by a "biggest update" rework); Ghost Watchers has since had its **1.0 full release on July 24, 2025**, so even its 2022-era stubs may lag current content.

## Key Findings

**Disambiguation (Abnormality):** The correct game is Abnormality, Steam app **2541890**, an online co-op ghost-hunting horror game, NOT the SCP-style facility-management game (Lobotomy Corporation) that shares the name. Confirmed via the Steam store page and SteamSpy for app 2541890, both describing "a realistic co-op ghost-hunting horror game where you investigate abandoned, restricted locations, gather evidence, identify the ghost, and survive the hunt." All Abnormality data below is from this app only.

**Structural comparison:**
| Axis | Ghost Watchers | Ghost Exile | Abnormality |
|---|---|---|---|
| Core ID | 3 type-evidences (temp, EMF, footprints) + notebook | 3 of 10-11 evidences | 3 of 7 evidences |
| 2nd axis | Age (4) + Mood (4) | Ritual type (tied to ghost) | none (traits only) |
| Tools | 7 evidence tools | 10-11 evidence types | 7 evidences + support items |
| Ghost count | 8 / 24 / 20 (sources conflict) | "more than 20" (+Ronove) | 16 documented / 20 claimed |
| Sanity term | Mood system | Sanity | Anxiety |

---

## Details

### GAME 1 — GHOST WATCHERS (Renderise)

**Release/version context:** Released July 28, 2022 in Steam Early Access, and per the official Ghost Watchers Wiki it had its **full 1.0 release on July 24, 2025** (confirmed by the Steam store listing's "Release Date: Jul 24, 2025"). The official wiki is ghostwatchers.wiki.gg (active, per-ghost pages, self-described "official"). A separate Fandom wiki (ghost-watchers.fandom.com) is older and only documents 8 ghosts.

**Ghost-count discrepancy (flag):**
- Fandom wiki: "This is a list of 8 different ghost types in Ghost Watchers."
- Official wiki.gg ("Types of Ghosts"): "There are currently 24 different types of ghosts. They differ in their behavior and clues and are assigned to different ranks" — organized in 4 ranks of 6.
- Steam store page: "20 types of unique ghosts - the souls of people and strange creatures, as well as several types of demons."
I treat the official wiki.gg 24-by-rank list as current; the Fandom "8" is an outdated stub and the Steam "20" is marketing copy likely lagging content updates.

**Identification system:** 3 determinations — Type, Age, Mood — via 7 evidence tools:
- **Type:** Thermometer (temperature band), EMF sensor (EMF 3 / EMF 5 / EMF Red 3), Footprints (revealed via UV; bloodstains / baby / pentagram / none — pentagram footprints currently unused, baby prints look like large human prints), and Notebook/Cubes (ghost draws a type-specific doodle; young/child ghosts use Children's Cubes instead of the notebook).
- **Age (4: young / middle / older / ancient):** Particle Counter (100-500 or 500-1000) + Ouija Board (side-to-side / random / none). Age grants cumulative abilities: young = drag items off floor; middle = sudden appearance in front of players; older = repel stationary protective objects (e.g., withering light, plasma absorber); ancient = throw thrown protective objects back. In roughly half of cases the Ouija board alone determines age; only the "side to side" result needs the particle counter to disambiguate.
- **Mood (4: calm / concerned / aggressive / haunting):** Radio (growling / crying / groaning etc.) + Voodoo Doll (raises it / throws it / no interaction). Mood governs activity and aggression level.

**Roster by rank (official wiki.gg):**
- **Rank I** (all players): Poltergeist, Gallows, Child, Drowned, Darkness, JiangShi.
- **Rank II** (lvl 10+): Vampire, Demon, Puppet, Dream Devourer, Nun, Kuchisake Onna.
- **Rank III** (lvl 20+; all have **Mimicry**): Babadook, Krampus, Ghoul, Wendigo, Clown, Bloody Countess.
- **Rank IV** (lvl 30+; all have **Mind Steal**): Iron Maiden, Black Death (files: "Plague"), Mummy, Mad Doctor, Yellow King, Witch.

Rank determines the minimum player level to encounter the ghost (in a party only the highest level counts) and the number of weakening steps. Type also fixes each ghost's resistance lists — Protects (green, full effect), Protects-and-irritates (white, shorter effect), Doesn't-protect (red) — which depend only on type, not age/mood.

**Per-ghost verified data (partial — the official wiki uses a Ghost infobox template with temperature/EMF/footprints/notebook fields):**
- **The Child (Rank I):** Temperature "Very cold (−20..−10)", EMF 3, footprint = foot print, notebook = doodles (cross); uses Children's Cubes instead of the notebook; the temperature "never changes" tell is unique to The Child. Cameras listed as its ectoplasm detector. (Source: wiki.gg Template:Ghost sample + community guides.)
- **Demon / Vampire / JiangShi:** cannot be young or average age; always interact with the Ouija board in some way; cannot produce the 100-500 particle-counter reading. Demon additionally cannot be calm or concerned, always growls over the radio, and either ignores or throws the voodoo doll. A thermometer reading ~47°C narrows to Demon or Vampire per community guide.
- Higher-rank behavioral tells (community guide, "OUT OF DATE AS OF MARCH 2026"): Iron Maiden spawns iron-capsule traps that reset two weakening steps if the ghost enters one; Ghoul summons a crow that caws 15 times then flies to and kills the nearest player (only kills those in sound range >6s; countered by motion sensor); JiangShi plays a music box that deals 5 damage per step while music plays; Rank III Mimicry = imitates a player during a hunt; Rank IV Mind Steal = transports a player to "the ghost's mind" to find their body and flee.

**Secondary axes:** Age and Mood (above), plus a **weakening ritual** unlocked only after Type + Age + Mood are all determined — an ordered list of protective/ritual items specific to the ghost.

**Documentation confidence — Ghost Watchers: HIGH but fragmented.** Official wiki.gg is active with individual dated ghost pages (e.g., Black Death and the Advanced Ouija Board both noted "in the game since December 08, 2023"). However, the exact per-ghost temperature/EMF/footprint/notebook signature values are not consolidated in one public table (they live in each ghost's infobox); the Fandom wiki is a stub (8 ghosts), and one major Steam guide is self-marked "OUT OF DATE AS OF MARCH 2026." Per-ghost signature tables should be confirmed page-by-page against the 1.0 build.

---

### GAME 2 — GHOST EXILE (LostOneTeam)

**Version context:** Early Access. The most-cited structured source, the "In-Depth Ghost Exile Guide [1.4.2]" (Steam, by Singularity's Bitch/Cave17Plays), was posted Sep 5 2022, last updated Jul 23 2024, and covers up to v1.4.2. The Fandom wiki (ghost-exile.fandom.com) has clean per-ghost pages. Ronove is a newer ghost absent from the older guides. The Steam store page still advertises only "10 proofs and more than 20 types of ghosts," lagging the 11 evidences / Ronove content in the wiki.

**Identification system:** each ghost = a unique combination of 3 of these evidence types (per the guide and the phasmocalc calculator): **EMF 5, Freezing Temperatures, Ghost Orbs, Ghost Writing, Haze, Infrared Motion Sensor, Laser Projection, PEK 3, Spirit Box Response, Traces of Ectoplasm (fingerprints), Voice Recorder Response.** Steam marketing says "10 proofs"; the guide/calculator enumerate 11. Tool→evidence mapping resembles Phasmophobia: Laser Grid = DOTS/laser-grid, Traces of Ectoplasm = UV fingerprints/handprints, PEK Machine = spectrum scanner (PEK 3 is the evidence level; all ghosts give PEK 1/2, only PEK-3 ghosts give level 3), plus TWO distinct audio evidences — a Spirit Box AND a separate Voice Recorder. Freezing confirmed at ≤ −5°C (23°F); 0°C = "maybe." Evidence is marked in a Notebook/research book; with 2 of 3 found, an "exclude incorrect evidence" option advises what to seek.

**Verified per-ghost evidence combinations (Fandom wiki, via lead + subagent verification):**
| Ghost | Evidence 1 | Evidence 2 | Evidence 3 |
|---|---|---|---|
| Amonjaku | Laser Projection | Freezing Temperatures | Haze |
| Caoineag | Spirit Box Response | Ghost Orb | Haze |
| Dibbuk | Voice Recorder Response | Infrared Motion Sensor | Haze |
| Djinn | Ghost Writing | EMF 5 | Freezing Temperatures |
| Doppler | Haze | Infrared Motion Sensor | PEK 3 |
| Kijo | Spirit Box Response | EMF 5 | Haze |
| Mara | Voice Recorder Response | Infrared Motion Sensor | Traces of Ectoplasm |
| Mogwai | Voice Recorder Response | Laser Projection | Freezing Temperatures |
| Mononoke | Voice Recorder Response | EMF 5 | Spirit Box Response |
| Myling | Voice Recorder Response | EMF 5 | Freezing Temperatures |
| Obake | Ghost Writing | Infrared Motion Sensor | Traces of Ectoplasm |
| Oni | Spirit Box Response | Infrared Motion Sensor | Haze |
| Onryo | Ghost Writing | EMF 5 | Laser Projection |
| Piru | Freezing Temperatures | Traces of Ectoplasm | Ghost Orb |
| Pishachi | Unknown / Not found | Unknown / Not found | Unknown / Not found |
| Poltergeist | Ghost Writing | Freezing Temperatures | Haze |
| Reiki | Ghost Writing | Laser Projection | Traces of Ectoplasm |
| Revenant | Voice Recorder Response | Traces of Ectoplasm | Ghost Orb |
| Shinigami | PEK 3 | Spirit Box Response | Ghost Orb |
| Shiryo | Laser Projection | Voice Recorder Response | Traces of Ectoplasm |
| Ronove (newer) | Spirit Box Response | Voice Recorder Response | Traces of Ectoplasm |

**Verified unique traits (Fandom wiki, verbatim where quoted):**
- **Djinn:** "becomes extremely active and dangerous when lights are turned on"; dependent on electricity, turns on the power panel.
- **Onryo:** whispers strongly affect sanity; "can start whispering if the hunter takes its passport."
- **Shinigami:** "Attacks more often if there is someone near a dead body. Changes its favorite room to one where somebody died."
- **Revenant:** "Hunt frequency increases if there is a crucifix near the ghost. Immune to incense." (Guide confirms incense does NOT work on Revenant.)
- **Kijo:** "Hunts more often and has a chance to start a hunt after being photographed"; per a Steam patch note, also worsens your vision when you look at it.
- **Piru:** "Rarely wanders from their favorite room. Ghost events and attacks are more frequent if the hunter is inside their favorite room. Slams the door shut behind the hunter in its favorite room more frequently than others."
- **Obake:** "Gets weaker under the effect of Astaroth's seal — hunt frequency decreases. Has a small chance to destroy the seal on first try. Can also stray far away from its favorite room."
- **Caoineag:** "Only one player can hear Caoineag's whisper, and they will be the only one affected by it."
- **Amonjaku:** "Sanity Drain, Frequent Attacks" (demon that provokes evil; significantly lowers sanity).
- **Doppler:** "Its activity level increases with each missing unit of the overall sanity level. You can see two Hazes."
- **Myling:** "Frequently whispers with amplified effect. Very frequent interaction with doors. Its whisper can make you drop an item you are holding in your hands."
- **Mara:** "Turns off the power panel. It can also turn off the projector. Attacks less often in light."
- **Mogwai:** "Attacks more often if a room is cold. Can produce abnormally low temperatures."
- **Mononoke:** "Increased power and frequency of interacting with objects and doors. Can open and slam doors."
- **Reiki:** "Attacks more frequently if Exile ritual has started and will extinguish all candles on a seal when it starts to hunt."
- **Shiryo:** "Can start an attack only if one hunter is near it."
- **Dibbuk:** "Hunts more often if the overall sanity level of hunters who are in the house is below 50%. When the overall sanity reaches 50%, the Dibbuk will start the hunt."
- **Ronove:** "Feeds on souls, and the more it consumes, the more powerful it gets. Can turn off devices at any time."
- **Oni & Poltergeist:** no "Unique Trait" line present on their wiki pages (Description + Evidences only) — marked Unknown / Not found for trait.
- **Pishachi:** page could not be verified via available tools (evidence AND trait Unknown / Not found). Community/Steam sources describe it as a deceptive "fake/extra-evidence" ghost, but this is not confirmed on the Fandom page and is not treated as verified.

**Secondary axis — Ritual / Exile type (tied to ghost identity):** after ID, players find the ghost's **passport** (its name) and perform the one correct ritual (using the Book of Exile). Five rituals each cover a fixed ghost group:
- **Rite of Astalor** (Sigil of Zeth, 3 Ritual Candles, Rune of Othala): Djinn, Doppler, Myling, Revenant.
- **Great Rite of Anaberon** (Sigil of Anaberon, 5 Ritual Candles, Doll): Mogwai, Mara, Pishachi, Reiki.
- **Rite of Anak** (Sigil of Zeth, 4 Ritual Candles, Bone): Caoineag, Oni, Shiryo, Shinigami.
- **Sacred Rite of Derot** (Sigil of Ameth, 3 Ritual Candles, Skull): Amonjaku, Kijo, Obake, Piru, Poltergeist.
- **Ancient Rite of Hisogal** (Sigil of Ameth, 4 Ritual Candles, Rune of Othala + Rune of Berkano): Onryo, Mononoke, Poltergeist, Dibbuk.
**Discrepancy flag:** Poltergeist appears in TWO ritual groups (Derot and Hisogal) across guide sections/versions — reported both rather than resolved. An older outdated guide also lists "Renove" (likely an early spelling of Ronove) under the Hisogal group.

**Hunt/sanity mechanics:** Sanity is the trigger for hunts; it drains faster in the dark and near certain ghosts, and from using the Ouija board. Sanity Pills = +30% each (up to 4, max 120, single-player). Urns = +40% team-wide (need a lighter). Hunt speed and ghost line-of-sight scale with difficulty (Madman fastest, Beginner slowest — exact m/s not published). Countermeasures: Crucifix (2 charges, can end a hunt early; ghost may knock it away), Incense (deters — ineffective vs Revenant), Sigil of Astaroth (reduces hunt chance; if broken by a hunt, slows the ghost 30% for 30s), Sigil of Baphomet (increases activity/evidence), Sigil of Dzhar'uerak (traps ghost ~10s at a choke point), hiding cabinets, and the Rover companion (Collector/Defender AI). Ghost Events (staring, door-slam, apparitions, fake hunts) cannot harm the player.

**Documentation confidence — Ghost Exile: MEDIUM-HIGH.** Fandom wiki gives clean 3-evidence combos + unique traits per ghost, cross-corroborated by the phasmocalc "Ghost Exile Calculator" (20-ghost list) and the in-depth Steam guide. Gaps: no published per-ghost numeric signatures (game uses binary present/absent evidence, not value bands); Pishachi's page unverified; the main Steam guide is v1.4.2 (2024) and predates Ronove; the wiki does not state an explicit total ghost count (its "67 pages" counter is article count, not ghosts).

---

### GAME 3 — ABNORMALITY (app 2541890)

**Version context:** Early Access, targeting full release 2026, with an Exorcism Mode planned for 2026 (and Thief/Survival modes teased). The ONLY structured community source is "Abnormality- A short guide" by Sephaya (Steam), posted Nov 4 2024, updated Nov 13 2024 — and a July 2025 commenter plus the developer both reference a subsequent "biggest update"/rework (reworked tablet with evidence marking/timers/camera feeds/photo gallery, full UI redesign). The guide's specifics therefore predate current content. Steam claims "20 different ghost types"; the guide documents 16.

**Identification system:** each ghost = a unique set of **3 of 7 evidences** (the in-game Ghost Wiki, searchable by full ghost name, shows a Strength, a Weakness, and the 3 required evidences per ghost). Evidence types: **EMF 5, Laser Grid, Freezing Temperature, UV Light (handprints on opened doors), Spirit Box, Ghost Writing, Ghost Orbs.** There is NO separate "sanity" stat — it is called **Anxiety** (higher anxiety → more ghost activity/anger). Night vision is always available at no cost, cannot be disabled by the ghost, and every evidence is visible with it on. Two free spoken prompts — "Hello" and "How did you die?" — make the ghost answer to reveal its location but do NOT count as Spirit Box evidence. The **Dowsing Rod** (one-time use; ask "Show me the way") points to the ghost room. The **EVP Radio** works ONLY for the Banshee. The ghost room settles to below ~10-11°C (only the ghost room drops under 10°C), and can reach freezing.

**Verified per-ghost evidence combinations (Sephaya Steam guide, 16 of a claimed 20 ghosts):**
| Ghost | Evidence 1 | Evidence 2 | Evidence 3 | Notable trait / behavioral tell | Crucifix works? |
|---|---|---|---|---|---|
| Demon | EMF 5 | Spirit Box | Freezing | Can hunt anytime; short breaks between hunts; "always angry" | Yes |
| Poltergeist | EMF 5 | UV Light | Ghost Writing | Extremely active with many events | Unknown |
| Wisp | EMF 5 | Ghost Orbs | Laser Grid | — | Unknown |
| Jumbee | EMF 5 | Spirit Box | Laser Grid | — | Yes |
| Phantome | EMF 5 | UV Light | Ghost Orbs | — | Unknown |
| Kikimora | EMF 5 | Freezing | UV Light | — | Yes |
| Duppy | EMF 5 | Freezing | Ghost Writing | Angered by rude phrases (e.g. "Go to hell") | Unknown |
| Landvaettir | Spirit Box | Freezing | Ghost Writing | — | No |
| Apparition | Spirit Box | Freezing | UV Light | Pretty short hunts | Unknown |
| Banshee | Spirit Box | UV Light | Laser Grid | Interacts with the EVP Radio (unique confirmation) | No |
| Dybbuk | Spirit Box | UV Light | Ghost Writing | — | Yes |
| Eidolon | Spirit Box | Ghost Writing | Laser Grid | — | Unknown |
| Boggart | Spirit Box | Ghost Orbs | Laser Grid | — | No |
| Shade | Freezing | UV Light | Ghost Orbs | More active / earlier hunts when you are alone | No |
| Wraith | Freezing | Ghost Orbs | Laser Grid | — | Unknown |
| Genius Loci | Ghost Writing | Ghost Orbs | Laser Grid | — | No |

The 4 ghosts making up the claimed total of 20 are **Unknown / Not found** in any structured source.

**Hunt/anxiety mechanics:** three hunt triggers — (1) the Anxiety meter (higher anxiety → more active/angry ghost); (2) a hidden Anger meter (rises with ghost type, activity level, and anxiety until the ghost hunts); (3) special behaviors (Duppy angered by insults; the Dowsing Rod lowers your anxiety but raises the ghost's anger; Demon is always angry). During a hunt, vision flickers and you must hide in a brown closet or behind furniture; the ghost reacts to sight and speech. Smudge grants a few seconds of invisibility but contact still kills. Crucifix stops some (not all) ghosts mid-hunt, held on your person or placed to be walked over. Anxiety Pills: +20 each (up to 4), and may calm the ghost slightly. Difficulty sets starting anxiety/sanity: **Starter** (full sanity, ×1 money), **Average** (80, ×2), **Skilled** (50, ×3), **Overkill** (0 sanity, no hiding closets, ×4). Maps documented: Willow Creek Cottage, Rookridge Hollow, Mystical Manor, Crazy Clown Carnival, Grimwater Tunnels (Steam also lists a chapel, motel, sewers/carnival and a blizzard map).

**Documentation confidence — Abnormality: LOW.** No wiki exists. The single structured guide is explicitly hedged by its author ("I am not all-knowing... sorry if there are things that might not be right"; non-native English), documents only 16 of the 20 claimed ghosts, leaves many crucifix/behavior cells "Unknown," and predates the major 2025 rework. The in-game Ghost Wiki is the authoritative source but is not publicly transcribed. Treat this table as a v2024 snapshot requiring re-verification against the current build.

---

## Recommendations
1. **Seed the web app in confidence tiers.** Ship the Ghost Exile and Abnormality evidence-combination tables first — both use a clean binary 3-evidence structure that maps directly to JSON. Tag every Abnormality row with `sourceVersion: "2024-11 (pre-rework)"` and `confidence: "low"`, and mark the 4 undocumented Abnormality ghosts and Ghost Exile's Pishachi as `"Unknown / Not found"` rather than inventing values.
2. **Do NOT force a uniform schema — reflect each game's real structure.** Suggested shapes: Ghost Watchers `{name, rank, mimicry?/mindSteal?, temperature, emf, footprints, notebook, ectoplasmDetector, ageConstraints, moodConstraints, resistances{protects,irritates,noEffect}}`; Ghost Exile `{name, evidence[3], uniqueTrait, ritual, ritualItems[]}`; Abnormality `{name, evidence[3], trait, crucifixWorks}`.
3. **Re-verify specific gaps before publishing numbers.** For Ghost Watchers per-ghost temperature/EMF/footprint/notebook bands, open each ghost's wiki.gg infobox individually (automated fetch of wiki.gg was bot-blocked here). For Ghost Exile, manually view `ghost-exile.fandom.com/wiki/Pishachi` and confirm Oni/Poltergeist genuinely lack a Unique Trait. For Abnormality, re-scrape the in-game Ghost Wiki against the current build to reconcile 16 vs 20 and fill Unknowns and crucifix cells.
4. **Benchmarks/thresholds that invalidate the data:** any Ghost Exile patch adding ghosts past Ronove or changing evidence counts; the Abnormality "biggest update" rework (new tablet-based evidence marking); and Ghost Watchers content added after its July 24 2025 1.0 launch. Re-check each game's Steam patch notes before every data refresh.

## Caveats
- **Ghost counts conflict in every game** (GW: 8 / 24 / 20; GE: "10 proofs" vs 11 evidences, "more than 20" ghosts + Ronove; Abnormality: 16 documented vs 20 claimed) — both figures are reported rather than silently resolved.
- **No borrowed Phasmophobia numbers** were applied. Where a game lacks published values (e.g., Ghost Exile hunt speeds in m/s, Ghost Watchers exact per-ghost signature bands beyond The Child, Abnormality precise anxiety thresholds), fields are marked Unknown / Not found.
- **Automated wiki fetching was blocked** for ghostwatchers.wiki.gg (bot detection) and ghost-exile.fandom.com (HTTP 402); their data was reconstructed from verbatim search-result snippets of those exact pages, cross-checked against community guides and the phasmocalc calculator. Per-ghost Ghost Watchers signature tables in particular should be confirmed page-by-page before production use.
- **The Poltergeist double-listing** in Ghost Exile rituals and the **"Renove"/Ronove** spelling variance are unresolved source discrepancies, flagged above.
- Community "no-evidence" behavioral tells (Abnormality Banshee/EVP-radio, Shade-when-alone, Duppy-insults; Ghost Exile Revenant/incense, Kijo/photograph) come from guides reflecting individual player experience and may not be fully authoritative or current.