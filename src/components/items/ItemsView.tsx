"use client";

import { CursedPossessionCard } from "@/components/items/CursedPossessionCard";
import { CursedPossessionDetail } from "@/components/items/CursedPossessionDetail";
import { EquipmentCard } from "@/components/items/EquipmentCard";
import { EquipmentDetail } from "@/components/items/EquipmentDetail";
import { TruckEquipmentList } from "@/components/items/TruckEquipmentList";
import { consumablesNote, cursedPossessions, equipment, truckEquipment, type CursedPossession, type EquipmentItem } from "@/data/items";
import { useMemo, useState } from "react";

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{title}</h2>
      {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
    </div>
  );
}

export function ItemsView() {
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [selectedCursed, setSelectedCursed] = useState<CursedPossession | null>(null);

  const starter = useMemo(() => equipment.filter((e) => e.category === "starter"), []);
  const optional = useMemo(() => equipment.filter((e) => e.category === "optional"), []);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-2 rounded-xl border border-surface-border bg-surface p-4 text-xs text-muted">
        <p>
          Tier stats come from the Ascension-update rework and community-tested values. Kinetic Games occasionally
          rebalances individual items in later patches — treat exact numbers as close to current rather than gospel.
        </p>
        <p>
          Most tier images aren&rsquo;t hosted here yet — click through to the official wiki page for pictures where
          a card shows a placeholder.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Starter Equipment" subtitle="Always available from level 1, no purchase required." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {starter.map((item) => (
            <EquipmentCard key={item.id} item={item} onSelect={setSelectedEquipment} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Optional Equipment" subtitle="Unlocked by level, purchased with in-game cash." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {optional.map((item) => (
            <EquipmentCard key={item.id} item={item} onSelect={setSelectedEquipment} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Truck Equipment" subtitle="Stationary monitors in the van — always present, no tiers." />
        <TruckEquipmentList items={truckEquipment} />
        <p className="text-xs text-muted">{consumablesNote}</p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading
          title="Cursed Possessions"
          subtitle="One randomly spawns per contract on normal difficulties — using one risks a cursed hunt."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cursedPossessions.map((item) => (
            <CursedPossessionCard key={item.id} item={item} onSelect={setSelectedCursed} />
          ))}
        </div>
      </div>

      {selectedEquipment && (
        <EquipmentDetail item={selectedEquipment} onClose={() => setSelectedEquipment(null)} />
      )}
      {selectedCursed && (
        <CursedPossessionDetail item={selectedCursed} onClose={() => setSelectedCursed(null)} />
      )}
    </div>
  );
}
