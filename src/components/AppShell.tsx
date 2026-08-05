"use client";

import { EliminateView } from "@/components/eliminate/EliminateView";
import { GuidesView } from "@/components/guides/GuidesView";
import { ItemsView } from "@/components/items/ItemsView";
import { MapsView } from "@/components/maps/MapsView";
import { ObjectivesView } from "@/components/objectives/ObjectivesView";
import { GameComingSoon } from "@/components/shared/GameComingSoon";
import { GameSelector, type GameKey } from "@/components/shared/GameSelector";
import { GameShell, type GameTab } from "@/components/shared/GameShell";
import { EvidenceWikiView as TosEvidenceWikiView } from "@/components/tos/EvidenceWikiView";
import { FindGhostView as TosFindGhostView } from "@/components/tos/FindGhostView";
import { GuidesView as TosGuidesView } from "@/components/tos/GuidesView";
import { ItemsView as TosItemsView } from "@/components/tos/ItemsView";
import { MapsView as TosMapsView } from "@/components/tos/MapsView";
import { WikiView as TosWikiView } from "@/components/tos/WikiView";
import { WikiView } from "@/components/wiki/WikiView";
import { useUrlParams } from "@/lib/useUrlParams";
import { BookOpen, ClipboardList, Fingerprint, Ghost, ListChecks, Map, Package } from "lucide-react";
import { useEffect } from "react";

const GAME_KEYS: GameKey[] = ["phasmophobia", "abnormality", "other-side"];

/** Each tab's own "detail view" selection param(s) — cleared when a *different* tab
 * is active so switching tabs and back doesn't reopen a stale detail view. `guide`
 * and `chapter` are deliberately not here: remembering guide position is a feature. */
const TAB_SELECTION_PARAMS: Record<string, string[]> = {
  find: ["fghost", "tfghost"],
  wiki: ["wghost", "tghost"],
  items: ["item", "truck", "cursed"],
  maps: ["map", "tmap"],
};

const PHASMOPHOBIA_TABS: GameTab[] = [
  { id: "find", label: "Find My Ghost", shortLabel: "Find", icon: ListChecks, content: <EliminateView /> },
  { id: "wiki", label: "Ghost Wiki", shortLabel: "Ghosts", icon: Ghost, content: <WikiView /> },
  { id: "items", label: "Item Wiki", shortLabel: "Items", icon: Package, content: <ItemsView /> },
  { id: "maps", label: "Map Wiki", shortLabel: "Maps", icon: Map, content: <MapsView /> },
  { id: "objectives", label: "Objectives Wiki", shortLabel: "Goals", icon: ClipboardList, content: <ObjectivesView /> },
  { id: "guides", label: "Guides", shortLabel: "Guides", icon: BookOpen, content: <GuidesView /> },
];

/** No "Objectives" tab — TOS's objectives pool is largely unconfirmed; Contracts
 * (Identify/Cleanse) live in Guides instead. */
const OTHER_SIDE_TABS: GameTab[] = [
  { id: "find", label: "Find My Ghost", shortLabel: "Find", icon: ListChecks, content: <TosFindGhostView /> },
  { id: "wiki", label: "Ghost Wiki", shortLabel: "Ghosts", icon: Ghost, content: <TosWikiView /> },
  { id: "items", label: "Item Wiki", shortLabel: "Items", icon: Package, content: <TosItemsView /> },
  { id: "evidence", label: "Evidence Wiki", shortLabel: "Evidence", icon: Fingerprint, content: <TosEvidenceWikiView /> },
  { id: "maps", label: "Map Wiki", shortLabel: "Maps", icon: Map, content: <TosMapsView /> },
  { id: "guides", label: "Guides", shortLabel: "Guides", icon: BookOpen, content: <TosGuidesView /> },
];

export function AppShell() {
  // Every navbar/game switch is a distinct, back-button-undoable history entry (see
  // useUrlParams) — same mechanism cross-tab "jump" links (a ghost from a guide, etc.)
  // use to set `tab` + their own selection param together as a single step.
  const { values, hydrated, push, replace } = useUrlParams(["tab", "game"]);
  const activeTabId = values.tab ?? "find";
  const activeGame = (GAME_KEYS as string[]).includes(values.game ?? "")
    ? (values.game as GameKey)
    : "phasmophobia";

  useEffect(() => {
    // Before the real URL has synced, `activeTabId` is the pre-sync "find" placeholder,
    // not necessarily the actual tab — acting on it here would wipe out a deep-linked
    // detail param (e.g. ?tab=wiki&wghost=banshee) before it ever gets read.
    if (!hydrated) return;
    const staleKeys = Object.entries(TAB_SELECTION_PARAMS)
      .filter(([tabId]) => tabId !== activeTabId)
      .flatMap(([, keys]) => keys);
    if (staleKeys.some((key) => new URLSearchParams(window.location.search).has(key))) {
      replace(Object.fromEntries(staleKeys.map((key) => [key, null])));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabId, hydrated]);

  const TABS = activeGame === "other-side" ? OTHER_SIDE_TABS : PHASMOPHOBIA_TABS;

  return (
    <GameShell
      tabs={TABS}
      activeId={activeTabId}
      onActiveIdChange={(id) => push({ tab: id })}
      headerEnd={<GameSelector value={activeGame} onChange={(game) => push({ game })} />}
      content={activeGame === "abnormality" ? <GameComingSoon game={activeGame} /> : undefined}
    />
  );
}
