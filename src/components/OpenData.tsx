import { AlertTriangle, ExternalLink, PackageOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { datasetRows } from "@/data/content"

export function OpenData() {
  return (
    <div>
      <div className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
        <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0" />
        <div>
          <div className="font-bold">The #1 mobility data risk: no verified public Chennai GTFS feed</div>
          <p className="mt-1 text-sm leading-relaxed">
            Research found no public GTFS or GTFS-Realtime feed for Chennai MTC / CMRL.
            Absence in research is not proof none exists — organisers will ask CUMTA /
            MTC / CMRL directly. Until a data-sharing letter exists, nobody promises
            “live MTC GPS”. The mobility track builds on an organiser-assembled static
            GTFS plus a mock GTFS-RT server.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border bg-card">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Source</th>
              <th className="px-4 py-3 font-semibold">What hackers get</th>
              <th className="px-4 py-3 font-semibold">Format</th>
              <th className="px-4 py-3 font-semibold">API / access</th>
              <th className="px-4 py-3 font-semibold">Licence</th>
              <th className="px-4 py-3 font-semibold">Caveats</th>
            </tr>
          </thead>
          <tbody>
            {datasetRows.map((d) => (
              <tr key={d.source} className="border-t align-top">
                <td className="px-4 py-3">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-1 font-semibold text-primary hover:underline"
                  >
                    {d.source} <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  </a>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{d.what}</td>
                <td className="px-4 py-3 whitespace-nowrap">{d.format}</td>
                <td className="px-4 py-3 text-muted-foreground">{d.api}</td>
                <td className="px-4 py-3 text-muted-foreground">{d.licence}</td>
                <td className="px-4 py-3 text-muted-foreground">{d.caveat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="mt-6 rounded-2xl border-primary/30 bg-accent">
        <CardContent className="flex gap-4 p-6">
          <PackageOpen className="mt-1 h-8 w-8 shrink-0 text-primary" />
          <div>
            <h3 className="font-bold text-accent-foreground">The remedy: the Chennai Hack Pack</h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-accent-foreground/90">
              The golden rule for organisers is <strong>pre-mirror everything</strong>. Two weeks
              before the event, teams get a frozen pack: cleaned OpenCity KML → GeoJSON,
              pre-snapshotted IMD / WRD tables with timestamps, sample Sentinel scenes, an
              organiser-built static GTFS + mock GTFS-RT server, ABDM synthetic patients,
              and Bhashini keys already tested. Live APIs are a bonus — never the plan.
              Teams should not spend day 1 fighting portals.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
