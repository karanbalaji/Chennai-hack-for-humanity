import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { risks } from "@/data/content"

const notVerified = [
  "GCC portal content — the chennaicorporation.gov.in root returned a default server page during research; confirm current service / grievance URLs (and any developer API) directly before printing a handbook.",
  "data.tn.gov.in and bhashini.gov.in homepages could not be fetched live in the research run — descriptions rely on OGD updates, re3data, PIB and secondary analyses. Confirm developer / ULCA and TNOGD URLs live.",
  "No public Chennai GTFS / GTFS-RT feed was verified. Absence here is not proof none exists (e.g. an unpublicised CUMTA feed) — ask CUMTA / MTC / CMRL directly.",
  "The 2026 NFHS figures for TN obesity / diabetes / caesarean rates, and the six-month TN road-accident totals (secondary summary), need checking against the official PDFs before use in event materials.",
  "No robust Chennai artist-livelihood statistics were found — Track 6 therefore proposes infrastructure for artists, without sized claims.",
]

export function Risks() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {risks.map((r, i) => (
          <Card key={r.title} className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-start gap-2 text-base">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {i + 1}. {r.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="rounded-2xl border-dashed">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Not yet verified — said plainly</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
              {notVerified.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
