import { CalendarClock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { preEventTimeline, scheduleDays } from "@/data/content"

function Timeline({ items }: { items: readonly { when: string; title: string; detail: string }[] }) {
  return (
    <ol className="relative space-y-6 border-l-2 border-orange-200 pl-6">
      {items.map((d) => (
        <li key={d.when + d.title} className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
          <div className="text-xs font-bold uppercase tracking-wide text-primary">{d.when}</div>
          <div className="mt-1 font-semibold">{d.title}</div>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
        </li>
      ))}
    </ol>
  )
}

export function Schedule() {
  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <h3 className="mb-6 text-xl font-bold tracking-tight">Thu – Mon, adapted from Georgian HackON</h3>
        <Timeline items={scheduleDays} />
      </div>
      <div className="lg:col-span-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CalendarClock className="h-5 w-5 text-primary" /> Before the weekend — organiser timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline items={preEventTimeline} />
          </CardContent>
        </Card>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Mentor desks run all weekend: Beckn-onix, ABDM sandbox, Bhashini keys, Open
          Data help, and an Ethics desk for sensitive-data questions.
        </p>
      </div>
    </div>
  )
}
