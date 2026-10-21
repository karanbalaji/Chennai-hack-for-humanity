import { useState } from "react"
import { CheckCircle2, ClipboardList } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { rules, submissionChecklist } from "@/data/content"
import { cn } from "@/lib/utils"

export function Rules() {
  const [done, setDone] = useState<Set<number>>(new Set())
  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  const pct = Math.round((done.size / submissionChecklist.length) * 100)

  return (
    <div id="rules" className="grid gap-8 lg:grid-cols-2">
      <div>
        <ol className="space-y-4">
          {rules.map((r, i) => (
            <li key={r} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{r}</p>
            </li>
          ))}
        </ol>
      </div>
      <Card className="rounded-2xl h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ClipboardList className="h-5 w-5 text-primary" /> Submission readiness check
          </CardTitle>
          <div className="flex items-center gap-3 pt-1">
            <Progress value={pct} className="h-2.5 flex-1" />
            <span className="text-sm font-bold text-primary">{pct}% ready</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {submissionChecklist.map((item, i) => {
            const checked = done.has(i)
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked}
                className={cn(
                  "flex w-full gap-3 rounded-xl border p-4 text-left transition-colors",
                  checked ? "border-primary/40 bg-accent" : "hover:bg-zinc-50"
                )}
              >
                <CheckCircle2
                  className={cn("mt-0.5 h-5 w-5 shrink-0", checked ? "text-primary" : "text-zinc-300")}
                />
                <span>
                  <span className="block text-sm font-semibold">{item.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </span>
                </span>
              </button>
            )
          })}
          {pct === 100 ? (
            <p className="pt-1 text-sm font-semibold text-primary">
              Awesome — your team has completed every checklist requirement and is ready to submit before the Sunday deadline.
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}
