import { ExternalLink, HeartHandshake } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { footerSources } from "@/data/content"

export function Footer() {
  return (
    <footer className="border-t bg-zinc-50">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <HeartHandshake className="h-5 w-5" />
              </span>
              Hack for Humanity · Chennai
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Built on open data &amp; open protocols. Tracks, datasets and evidence
              researched 20 Oct 2026 — verify portal URLs and flagged statistics before
              printing participant materials.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Sources &amp; credits</div>
            <ul className="mt-2 space-y-2 text-sm">
              {footerSources.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 py-1 text-muted-foreground hover:text-primary hover:underline"
                  >
                    {s.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-xs text-muted-foreground">
          Hack for Humanity Chennai · A build-and-give-back hackathon · Tamil + English,
          open by default.
        </p>
      </div>
    </footer>
  )
}
