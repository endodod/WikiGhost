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
import { BookOpen, ClipboardList, Ghost, ListChecks, Map, Package } from "lucide-react";
import { useState } from "react";

export function AppShell() {
  const [activeGame, setActiveGame] = useState<GameKey>("phasmophobia");
  const [activeTabId, setActiveTabId] = useState("find");
  const [wikiFocusGhostId, setWikiFocusGhostId] = useState<string | null>(null);

  function openGhostInWiki(ghostId: string) {
    setWikiFocusGhostId(ghostId);
    setActiveTabId("wiki");
  }

  const TABS: GameTab[] = [
    { id: "find", label: "Find My Ghost", icon: ListChecks, content: <EliminateView onViewInWiki={openGhostInWiki} /> },
    {
      id: "wiki",
      label: "Ghost Wiki",
      icon: Ghost,
      content: (
        <WikiView focusGhostId={wikiFocusGhostId} onFocusHandled={() => setWikiFocusGhostId(null)} />
      ),
    },
    { id: "items", label: "Item Wiki", icon: Package, content: <ItemsView /> },
    { id: "maps", label: "Map Wiki", icon: Map, content: <MapsView /> },
    { id: "objectives", label: "Objectives Wiki", icon: ClipboardList, content: <ObjectivesView /> },
    { id: "guides", label: "Guides", icon: BookOpen, content: <GuidesView /> },
  ];

  return (
    <GameShell
      tabs={TABS}
      activeId={activeTabId}
      onActiveIdChange={setActiveTabId}
      headerEnd={<GameSelector value={activeGame} onChange={setActiveGame} />}
      content={activeGame !== "phasmophobia" ? <GameComingSoon game={activeGame} /> : undefined}
    />
  );
}
