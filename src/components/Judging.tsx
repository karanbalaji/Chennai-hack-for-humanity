import { Ban, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { hardGates, judgingCriteria, prizes } from "@/data/content"

export function Judging() {
  const max = Math.max(...judgingCriteria.map((c) => c.weight))
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 lg:col-span-3">
        {judgingCriteria.map((c) => (
          <div key={c.name}>
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">{c.name}</div>
              <div className="text-lg font-extrabold text-primary">{c.weight}%</div>
            </div>
            <Progress value={(c.weight / max) * 100} className="mt-2 h-3" />
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
          </div>
        ))}
        <p className="text-sm text-muted-foreground">
          Adapted from Georgian HackON 2026 (30% Open Data, 25% Sponsor Tech Fit, 25%
          Working Demo, 10% UX, 10% Wow): “Sponsor Tech Fit” becomes Open Protocol /
          Open-Source Fit, the demo weight funds a Beneficiary Validation score, and
          problem understanding follows the Smart India Hackathon lesson — curated,
          owner-backed problem statements beat open-ended “build anything for good”.
        </p>
      </div>
      <div className="space-y-4 lg:col-span-2">
        <Card className="rounded-2xl border-destructive/30 bg-red-50/60">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Ban className="h-5 w-5 text-destructive" /> Hard gates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {hardGates.map((g) => (
                <li key={g}>
                  <Badge variant="destructive" className="whitespace-normal text-left font-medium">
                    {g}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="h-5 w-5 text-primary" /> Prizes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {prizes.map((p) => (
              <div key={p.place}>
                <div className="font-semibold">{p.place}</div>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
