import { ArrowRight, BookOpen, CalendarDays, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { heroStats, threeTests } from "@/data/content"

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-orange-50 via-amber-50/60 to-background"
      />
      <div className="container relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Badge className="mb-4" variant="secondary">
            Chennai, Tamil Nadu · A build-and-give-back hackathon
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hack for <span className="text-primary">Humanity</span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-zinc-700 sm:text-2xl">
            Build for Chennai. Give it back to Chennai.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            This is not a government-services hackathon. It is any problem technology can
            help solve in a weekend, for a real Chennai person or group — flood-prone
            households, fisherfolk, street vendors, gig and domestic workers, small
            businesses, first-generation students, elderly people living alone, persons
            with disabilities, neighbourhood communities, NGOs, local artists, and the
            people who feed and rescue the city&apos;s street animals.
          </p>
          <p className="mt-3 text-sm font-medium text-zinc-600" lang="ta">
            சென்னைக்காக உருவாக்குங்கள் — Build in Tamil + English, voice-first where it matters.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" asChild>
              <a href="#tracks">
                Explore the 6 tracks <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#schedule">
                <CalendarDays className="mr-1 h-4 w-4" /> Thu–Mon schedule
              </a>
            </Button>
          </div>
          <p className="mt-5">
            <a
              href="#/research"
              className="inline-flex min-h-[2.75rem] items-center gap-1 rounded-sm text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <BookOpen className="h-4 w-4" /> Read the research behind the tracks
              <ArrowRight className="h-4 w-4" />
            </a>
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((s) => (
            <Card key={s.label} className="rounded-2xl bg-white/80">
              <CardContent className="p-5">
                <div className="text-2xl font-extrabold tracking-tight text-primary">
                  <a
                    href={`#/research/${s.researchSlug}`}
                    aria-label={`${s.value} — read the research: ${s.label}`}
                    className="rounded-sm underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {s.value}
                  </a>
                </div>
                <div className="mt-1 text-sm font-semibold leading-snug">{s.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Every brief had to pass three tests
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {threeTests.map((t, i) => (
              <div key={t.title} className="flex gap-3 rounded-2xl border bg-white/80 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold">
                    {i + 1}. {t.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
