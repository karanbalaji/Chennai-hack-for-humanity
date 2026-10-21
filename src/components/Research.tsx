import {
  AlertTriangle,
  Anchor,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  Bus,
  CheckCircle2,
  CloudRainWind,
  Droplets,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Recycle,
  ThermometerSun,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { threeTests } from "@/data/content"
import {
  evidenceSections,
  heroPhoto,
  notVerified,
  researchSources,
  trackMappings,
  type ResearchPhoto,
} from "@/data/research"
import { cn } from "@/lib/utils"

const sectionIcons: Record<string, LucideIcon> = {
  flooding: CloudRainWind,
  water: Droplets,
  heat: ThermometerSun,
  mobility: Bus,
  waste: Recycle,
  air: Wind,
  health: HeartPulse,
  livelihoods: Briefcase,
  education: GraduationCap,
  coast: Anchor,
  housing: Home,
  governance: Landmark,
  communities: Users,
}

function sectionTitle(slug: string): string {
  return evidenceSections.find((s) => s.slug === slug)?.title ?? slug
}

function Photo({ photo, eager = false }: { photo: ResearchPhoto; eager?: boolean }) {
  return (
    <figure>
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        className="h-auto w-full rounded-2xl border object-cover"
      />
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {photo.scene}. Photo:{" "}
        <a
          href={photo.page}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline decoration-primary/50 underline-offset-2 hover:text-primary"
        >
          {photo.author}
        </a>
        , {photo.license}, via Wikimedia Commons.
      </figcaption>
    </figure>
  )
}

export function Research() {
  return (
    <div>
      {/* ---------- Research hero ---------- */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-orange-50 via-amber-50/60 to-background"
        />
        <div className="container relative mx-auto max-w-6xl px-4 pb-14 pt-14 sm:pt-20">
          <Button variant="ghost" size="sm" className="mb-6 h-11 px-3" asChild>
            <a href="#top">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to the hackathon
            </a>
          </Button>
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              The Research · Researched 20 October 2026
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              The evidence behind <span className="text-primary">the tracks</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              This hackathon is not only about government or civic services. The framing is{" "}
              <strong className="text-foreground">build and give back to Chennai</strong>: any
              problem technology can help solve in a weekend, for a named, real beneficiary
              — flood-prone households, fisherfolk, street vendors, gig and domestic workers,
              MSMEs, first-generation students, elderly people living alone, persons with
              disabilities, neighbourhood communities, NGOs, local artists, and community-animal
              caregivers. Greater Chennai Corporation and the Tamil Nadu government are one
              beneficiary and data provider among many.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Method: official portals and primary sources first (GCC / OpenCity, data.gov.in,
              TNOGD, PIB, ITDP, WRI India), then reputable reporting and research (The Hindu /
              Hindu BusinessLine, NFHS analyses, academic studies). Where a figure is secondary,
              small-sample, dated, or an organisation&apos;s own count, it is flagged in place —
              and what could not be verified at all is listed plainly at the bottom.
            </p>
          </div>

          <div className="mt-8">
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

          <div className="mt-10">
            <Photo photo={heroPhoto} eager />
          </div>

          <nav aria-label="Research sections" className="mt-10">
            <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Jump to the evidence
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {evidenceSections.map((s) => (
                <Button key={s.slug} variant="outline" size="sm" className="h-11 rounded-full px-4" asChild>
                  <a href={`#/research/${s.slug}`}>{s.title.split("—")[0].split("·")[0].trim()}</a>
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* ---------- Evidence sections ---------- */}
      <div className="container mx-auto max-w-6xl px-4">
        {evidenceSections.map((s, idx) => {
          const Icon = sectionIcons[s.slug] ?? BookOpen
          return (
            <section
              key={s.slug}
              id={`research-${s.slug}`}
              className={cn("scroll-mt-24 py-10 sm:py-12", idx > 0 && "border-t")}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{s.title}</h2>
              </div>

              <div className="mt-5 max-w-3xl space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              {s.photos ? (
                <div className={cn("mt-8 grid gap-6", s.photos.length > 1 && "sm:grid-cols-2")}>
                  {s.photos.map((ph) => (
                    <Photo key={ph.src} photo={ph} />
                  ))}
                </div>
              ) : null}

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {s.stats.map((st) => (
                  <Card key={st.label} className="rounded-2xl">
                    <CardContent className="p-5">
                      <div className="text-2xl font-extrabold tracking-tight text-primary">{st.value}</div>
                      <div className="mt-1 text-sm leading-snug text-muted-foreground">{st.label}</div>
                      {st.flag ? (
                        <div className="mt-2 inline-flex items-start gap-1 text-xs font-medium text-amber-700">
                          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {st.flag}
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Sources: </span>
                {s.sources.map((src, i) => (
                  <span key={src.href}>
                    {i > 0 ? " · " : null}
                    <a
                      href={src.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-primary/50 underline-offset-2 hover:text-primary"
                    >
                      {src.name}
                    </a>
                  </span>
                ))}
              </p>
            </section>
          )
        })}
      </div>

      {/* ---------- The pattern underneath ---------- */}
      <section className="bg-zinc-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Badge variant="secondary" className="mb-3 uppercase tracking-wide">
            The Pattern
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">Why these problems, in this shape</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Read across all thirteen areas and the same logic repeats. Chennai&apos;s hardest
              problems split into two kinds. The first kind is{" "}
              <strong className="text-foreground">
                information, coordination, discovery, early-warning, reporting and matching
              </strong>{" "}
              — a street that does not know it will flood, a vendor who cannot prove she is a
              vendor, a fever camp nobody can find, a volunteer who does not know where the boat
              is needed. That kind is weekend-solvable: a working prototype can genuinely help a
              named group by Monday.
            </p>
            <p>
              The second kind is <strong className="text-foreground">infrastructure</strong> —
              new stormwater drains, desalination plants, metro lines, dredged canals, built
              housing. No hackathon ships those, and pretending otherwise is how civic hacks lose
              credibility. The honest move is to build the layer that makes people affected by
              infrastructure gaps safer, better informed, and better organised — and to say so.
            </p>
            <p>
              The landing page ranks all 14 problem areas this way, with a “build this / don&apos;t
              promise that” row for each.
            </p>
          </div>
          <Button className="mt-6" asChild>
            <a href="#problems">
              See the solvability table on the landing page <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* ---------- How the tracks came from this ---------- */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Badge variant="secondary" className="mb-3 uppercase tracking-wide">
            From Evidence To Tracks
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">How the tracks came from this</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trackMappings.map((m) => (
              <Card key={m.track} className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{m.track}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{m.note}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.slugs.map((slug) => (
                      <Button key={slug} variant="outline" size="sm" className="h-11 rounded-full px-3" asChild>
                        <a href={`#/research/${slug}`}>{sectionTitle(slug).split("—")[0].trim()}</a>
                      </Button>
                    ))}
                  </div>
                  <a
                    href={m.href}
                    className="mt-4 inline-flex min-h-[2.75rem] items-center gap-1 text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
                  >
                    See the track and its six briefs <ArrowRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Honesty box ---------- */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Card className="rounded-2xl border-amber-300/60 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-amber-900">
                <AlertTriangle className="h-5 w-5" /> Not yet verified — said plainly
              </CardTitle>
              <p className="text-sm leading-relaxed text-amber-800">
                These items could not be verified in the 20 Oct 2026 research run. They are listed
                here, not buried, so nobody prints or pitches them as settled fact.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {notVerified.map((n) => (
                  <li key={n.title} className="text-sm leading-relaxed">
                    <span className="font-semibold text-amber-900">{n.title}. </span>
                    <span className="text-amber-800">{n.detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------- Full sources ---------- */}
      <section className="bg-zinc-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Badge variant="secondary" className="mb-3 uppercase tracking-wide">
            Sources
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">Full source list</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The key sources behind the evidence above, as cited in the research report. Statistics
            on this page are as reported by these sources on 20 Oct 2026; verify portal URLs and
            flagged figures before reusing them in print.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {researchSources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[2.75rem] items-center gap-1.5 py-1 text-sm text-muted-foreground underline decoration-primary/40 underline-offset-2 hover:text-primary"
                >
                  <span>{s.name}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
          <Separator className="my-8" />
          <Button variant="outline" asChild>
            <a href="#tracks">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to the six tracks
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
