"use client";

import { EliminateView } from "@/components/eliminate/EliminateView";
import { GuidesView } from "@/components/guides/GuidesView";
import { ItemsView } from "@/components/items/ItemsView";
import { MapsView } from "@/components/maps/MapsView";
import { ObjectivesView } from "@/components/objectives/ObjectivesView";
import { GameComingSoon } from "@/components/shared/GameComingSoon";
import { GameSelector, type GameKey } from "@/components/shared/GameSelector";
import { GameShell, type GameTab } from "@/components/shared/GameShell";
import { WikiView } from "@/components/wiki/WikiView";
import { useUrlParams } from "@/lib/useUrlParams";
import { BookOpen, ClipboardList, Ghost, ListChecks, Map, Package } from "lucide-react";
import { useEffect } from "react";

const GAME_KEYS: GameKey[] = ["phasmophobia", "abnormality", "other-side"];

/** Each tab's own "detail view" selection param(s) — cleared when a *different* tab
 * is active so switching tabs and back doesn't reopen a stale detail view. `guide`
 * and `chapter` are deliberately not here: remembering guide position is a feature. */
const TAB_SELECTION_PARAMS: Record<string, string[]> = {
  find: ["fghost"],
  wiki: ["wghost"],
  items: ["item", "truck", "cursed"],
  maps: ["map"],
};

export function AppShell() {
  // Every navbar/game switch is a distinct, back-button-undoable history entry (see
  // useUrlParams) — same mechanism cross-tab "jump" links (a ghost from a guide, etc.)
  // use to set `tab` + their own selection param together as a single step.
  const { values, push, replace } = useUrlParams(["tab", "game"]);
  const activeTabId = values.tab ?? "find";
  const activeGame = (GAME_KEYS as string[]).includes(values.game ?? "")
    ? (values.game as GameKey)
    : "phasmophobia";

  useEffect(() => {
    const staleKeys = Object.entries(TAB_SELECTION_PARAMS)
      .filter(([tabId]) => tabId !== activeTabId)
      .flatMap(([, keys]) => keys);
    if (staleKeys.some((key) => new URLSearchParams(window.location.search).has(key))) {
      replace(Object.fromEntries(staleKeys.map((key) => [key, null])));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabId]);

  const TABS: GameTab[] = [
    { id: "find", label: "Find My Ghost", icon: ListChecks, content: <EliminateView /> },
    { id: "wiki", label: "Ghost Wiki", icon: Ghost, content: <WikiView /> },
    { id: "items", label: "Item Wiki", icon: Package, content: <ItemsView /> },
    { id: "maps", label: "Map Wiki", icon: Map, content: <MapsView /> },
    { id: "objectives", label: "Objectives Wiki", icon: ClipboardList, content: <ObjectivesView /> },
    { id: "guides", label: "Guides", icon: BookOpen, content: <GuidesView /> },
  ];

  return (
    <GameShell
      tabs={TABS}
      activeId={activeTabId}
      onActiveIdChange={(id) => push({ tab: id })}
      headerEnd={<GameSelector value={activeGame} onChange={(game) => push({ game })} />}
      content={activeGame !== "phasmophobia" ? <GameComingSoon game={activeGame} /> : undefined}
    />
  );
}
