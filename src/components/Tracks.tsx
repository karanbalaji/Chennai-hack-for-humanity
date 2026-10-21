import type { ComponentType, ReactNode } from "react"
import {
  AlertTriangle,
  Briefcase,
  Bus,
  CloudRainWind,
  Database,
  HeartPulse,
  Lightbulb,
  Network,
  ShieldCheck,
  ThermometerSun,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { crossTrackRules, tracks } from "@/data/content"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  CloudRainWind,
  ThermometerSun,
  Bus,
  Briefcase,
  HeartPulse,
  Users,
}

const evidenceLinkCls =
  "rounded-sm px-0.5 -mx-0.5 font-semibold text-foreground underline decoration-primary/60 underline-offset-2 hover:text-primary hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

/** Render a track evidence line with its cited numbers linked to the research page. */
function renderEvidence(text: string, links?: { text: string; slug: string }[]): ReactNode {
  if (!links?.length) return text
  const out: ReactNode[] = []
  let rest = text
  let key = 0
  while (rest) {
    let bestIdx = -1
    let best: { text: string; slug: string } | undefined
    for (const l of links) {
      const i = rest.indexOf(l.text)
      if (i >= 0 && (bestIdx < 0 || i < bestIdx)) {
        bestIdx = i
        best = l
      }
    }
    if (bestIdx < 0 || !best) {
      out.push(rest)
      break
    }
    if (bestIdx > 0) out.push(rest.slice(0, bestIdx))
    out.push(
      <a key={key++} href={`#/research/${best.slug}`} className={evidenceLinkCls}>
        {best.text}
      </a>,
    )
    rest = rest.slice(bestIdx + best.text.length)
  }
  return out
}

function Chips({ items, variant = "secondary" }: { items: string[]; variant?: "secondary" | "outline" }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((i) => (
        <Badge key={i} variant={variant} className="whitespace-normal text-left font-medium">
          {i}
        </Badge>
      ))}
    </div>
  )
}

export function Tracks() {
  return (
    <div>
      <Tabs defaultValue={tracks[0].id} className="w-full">
        <TabsList className="flex h-auto w-full flex-nowrap justify-start gap-1 overflow-x-auto bg-zinc-100 p-1.5 sm:flex-wrap sm:overflow-x-visible">
          {tracks.map((t) => {
            const Icon = iconMap[t.icon] ?? Lightbulb
            return (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="min-h-[44px] shrink-0 gap-1.5 rounded-md px-3 py-2"
              >
                <Icon className="h-4 w-4" />
                <span>{t.number}. {t.shortTitle}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {tracks.map((t) => {
          const Icon = iconMap[t.icon] ?? Lightbulb
          return (
            <TabsContent key={t.id} value={t.id} className="mt-6">
              <Card className="rounded-2xl">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Track {t.number} · {t.tagline}
                      </div>
                      <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{t.title}</h3>
                      <p className="mt-2 text-sm font-medium text-zinc-700">
                        For: {t.beneficiaries}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">The problem, with evidence: </span>
                    {renderEvidence(t.evidence, t.evidenceLinks)}
                  </p>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                        <Database className="h-4 w-4 text-primary" /> Open datasets
                      </h4>
                      <Chips items={t.datasets} />
                    </div>
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                        <Network className="h-4 w-4 text-primary" /> Protocol / framework
                      </h4>
                      <Chips items={t.protocol} variant="outline" />
                    </div>
                  </div>

                  <h4 className="mb-3 mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                    <Lightbulb className="h-4 w-4 text-primary" /> Six project briefs — buildable in a weekend
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {t.ideas.map((idea, i) => (
                      <div key={idea.name} className="rounded-xl border bg-zinc-50/60 p-4">
                        <div className="text-xs font-bold text-primary">{t.number}.{i + 1}</div>
                        <div className="mt-1 font-semibold leading-snug">{idea.name}</div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{idea.detail}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Statement owners to recruit: </span>
                    {t.owners}
                  </p>

                  {t.guardrail ? (
                    <div className="mt-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                      <p>{t.guardrail}</p>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>

      <Card className="mt-8 rounded-2xl border-primary/30">
        <CardContent className="p-6">
          <h3 className="flex items-center gap-2 font-bold">
            <ShieldCheck className="h-5 w-5 text-primary" /> Cross-track rules — every team, every track
          </h3>
          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
            {crossTrackRules.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {r}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
