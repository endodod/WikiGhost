"use client";

import { CursedPossessionCard } from "@/components/items/CursedPossessionCard";
import { CursedPossessionDetail } from "@/components/items/CursedPossessionDetail";
import { EquipmentCard } from "@/components/items/EquipmentCard";
import { EquipmentDetail } from "@/components/items/EquipmentDetail";
import { TruckEquipmentCard } from "@/components/items/TruckEquipmentCard";
import { TruckEquipmentDetail } from "@/components/items/TruckEquipmentDetail";
import {
  consumablesNote,
  cursedPossessions,
  equipment,
  getCursedPossessionById,
  getEquipmentById,
  getTruckEquipmentById,
  truckEquipment,
} from "@/data/items";
import { useUrlParams } from "@/lib/useUrlParams";
import { useMemo } from "react";

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{title}</h2>
      {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
    </div>
  );
}

export function ItemsView() {
  const { values, push } = useUrlParams(["item", "truck", "cursed"]);
  const selectedEquipment = values.item ? getEquipmentById(values.item) ?? null : null;
  const selectedTruck = values.truck ? getTruckEquipmentById(values.truck) ?? null : null;
  const selectedCursed = values.cursed ? getCursedPossessionById(values.cursed) ?? null : null;

  const starter = useMemo(() => equipment.filter((e) => e.category === "starter"), []);
  const optional = useMemo(() => equipment.filter((e) => e.category === "optional"), []);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Item Wiki</h1>
        <p className="text-sm text-muted">
          Tier stats come from the Ascension-update rework and community-tested values. Kinetic Games occasionally
          rebalances individual items in later patches — treat exact numbers as close to current rather than gospel.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Starter Equipment" subtitle="Always available from level 1, no purchase required." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {starter.map((item) => (
            <EquipmentCard key={item.id} item={item} onSelect={(e) => push({ item: e.id })} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Optional Equipment" subtitle="Unlocked by level, purchased with in-game cash." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {optional.map((item) => (
            <EquipmentCard key={item.id} item={item} onSelect={(e) => push({ item: e.id })} />
          ))}
        </div>
        <p className="text-xs text-muted">{consumablesNote}</p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Truck Equipment" subtitle="Stationary monitors in the van — always present, no tiers." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {truckEquipment.map((item) => (
            <TruckEquipmentCard key={item.id} item={item} onSelect={(t) => push({ truck: t.id })} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading
          title="Cursed Possessions"
          subtitle="One randomly spawns per contract on normal difficulties — using one risks a cursed hunt."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cursedPossessions.map((item) => (
            <CursedPossessionCard key={item.id} item={item} onSelect={(c) => push({ cursed: c.id })} />
          ))}
        </div>
      </div>

      {selectedEquipment && (
        <EquipmentDetail item={selectedEquipment} onClose={() => window.history.back()} />
      )}
      {selectedTruck && (
        <TruckEquipmentDetail item={selectedTruck} onClose={() => window.history.back()} />
      )}
      {selectedCursed && (
        <CursedPossessionDetail item={selectedCursed} onClose={() => window.history.back()} />
      )}
    </div>
  );
}
