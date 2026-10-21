import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { problemCards, solvabilityRows, type Solvability } from "@/data/content"
import { cn } from "@/lib/utils"

const filters: ("All" | Solvability)[] = ["All", "High", "Medium-High", "Medium"]

const levelStyles: Record<Solvability, string> = {
  High: "bg-emerald-100 text-emerald-900 border-emerald-200",
  "Medium-High": "bg-amber-100 text-amber-900 border-amber-200",
  Medium: "bg-zinc-100 text-zinc-700 border-zinc-200",
}

export function Problems() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const rows = solvabilityRows.filter((r) => filter === "All" || r.level === filter)

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problemCards.map((p) => (
          <Card key={p.title} className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <div className="text-sm font-bold text-primary">{p.stat}</div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-zinc-400">{p.source}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="rounded-2xl border-primary/30 bg-accent">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">The pattern underneath</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-accent-foreground">
              The most hackathon-solvable problems are information, coordination,
              discovery, early-warning, reporting and matching problems. The least
              solvable in a weekend are infrastructure problems. Hacks should not
              pretend to fix those — they should make the people affected by them
              safer, better informed, or better organised.
            </p>
          </CardContent>
        </Card>
      </div>

      <h3 className="mt-12 text-xl font-bold tracking-tight">
        Solvability ranking — build this, don&apos;t promise that
      </h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        All 14 problem areas from the research, ranked by what a team can actually
        ship in 48–72 hours. Filter by solvability:
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            size="sm"
            className="h-11 px-4"
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f)}
          >
            {f === "All" ? "All 14" : f}
          </Button>
        ))}
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Problem</th>
              <th className="px-4 py-3 font-semibold">Weekend-solvable slice — build this</th>
              <th className="px-4 py-3 font-semibold">Infrastructure-heavy — do not promise</th>
              <th className="px-4 py-3 font-semibold">Solvability</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.problem} className="border-t align-top">
                <td className="px-4 py-3 font-semibold">{r.problem}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.buildThis}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.doNotPromise}</td>
                <td className="px-4 py-3">
                  <Badge variant="outline" className={cn(levelStyles[r.level])}>
                    {r.level}
                  </Badge>
                  {r.note ? <div className="mt-1 text-xs text-muted-foreground">({r.note})</div> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">No problem areas at this level.</p>
      ) : null}
    </div>
  )
}
