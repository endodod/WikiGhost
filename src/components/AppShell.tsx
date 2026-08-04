"use client";

import { EliminateView } from "@/components/eliminate/EliminateView";
import { GuidesView } from "@/components/guides/GuidesView";
import { ItemsView } from "@/components/items/ItemsView";
import { MapsView } from "@/components/maps/MapsView";
import { ObjectivesView } from "@/components/objectives/ObjectivesView";
import { GameShell, type GameTab } from "@/components/shared/GameShell";
import { WikiView } from "@/components/wiki/WikiView";
import { BookOpen, ClipboardList, Ghost, ListChecks, Map, Package } from "lucide-react";

const TABS: GameTab[] = [
  { id: "find", label: "Find My Ghost", icon: ListChecks, content: <EliminateView /> },
  { id: "wiki", label: "Ghost Wiki", icon: Ghost, content: <WikiView /> },
  { id: "guides", label: "Guides", icon: BookOpen, content: <GuidesView /> },
  { id: "items", label: "Item Wiki", icon: Package, content: <ItemsView /> },
  { id: "maps", label: "Map Wiki", icon: Map, content: <MapsView /> },
  { id: "objectives", label: "Objectives Wiki", icon: ClipboardList, content: <ObjectivesView /> },
];

export function AppShell() {
  return <GameShell tabs={TABS} defaultTabId="find" />;
}
