import { alwaysObjective, objectivePool, perfectInvestigation } from "@/data/objectives";
import { CheckCircle2, Star } from "lucide-react";

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{title}</h2>
      {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
    </div>
  );
}

export function ObjectivesView() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-4 sm:px-6">
      <div className="rounded-xl border border-surface-border bg-surface p-4 text-xs text-muted">
        <p>
          Every contract has 4 objectives: &ldquo;Find the correct ghost type&rdquo; is always present, plus 3 more
          chosen at random from the pool below. Objectives are optional (skipping them just forfeits money/XP) and
          can be done in any order — some need equipment beyond the starter loadout.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Always Present" />
        <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-foreground">{alwaysObjective.title}</h3>
            <p className="text-sm text-foreground/90">{alwaysObjective.condition}</p>
            {alwaysObjective.how && <p className="text-xs text-muted">{alwaysObjective.how}</p>}
            <span className="mt-1 w-fit rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent">
              {alwaysObjective.reward}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Random Pool" subtitle="3 of these are picked per contract." />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {objectivePool.map((obj) => (
            <div key={obj.id} className="flex flex-col gap-1.5 rounded-xl border border-surface-border bg-surface p-3.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-foreground">{obj.title}</h3>
                <span className="shrink-0 rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold text-muted ring-1 ring-surface-border">
                  {obj.reward}
                </span>
              </div>
              <p className="text-sm text-foreground/90">{obj.condition}</p>
              {obj.how && <p className="text-xs text-muted">{obj.how}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-accent/30 bg-accent/5 p-4">
        <div className="flex items-center gap-2">
          <Star className="size-4 text-accent" />
          <h2 className="text-sm font-bold uppercase tracking-wide text-accent">Perfect Investigation</h2>
        </div>

        <p className="text-sm text-foreground/90">{perfectInvestigation.summary}</p>
        <ol className="list-decimal space-y-1.5 pl-4 text-sm text-foreground/90">
          {perfectInvestigation.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
        <p className="text-xs text-muted">{perfectInvestigation.uniqueNote}</p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {perfectInvestigation.mediaBreakdown.map((device) => (
            <div key={device.device} className="flex flex-col gap-2 rounded-lg border border-surface-border bg-surface p-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground">
                {device.device} <span className="text-muted">— need {device.need} Unique</span>
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-xs text-foreground/90">
                {device.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground">Practical Run Order</h3>
          <ol className="list-decimal space-y-1.5 pl-4 text-sm text-foreground/90">
            {perfectInvestigation.runOrder.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
