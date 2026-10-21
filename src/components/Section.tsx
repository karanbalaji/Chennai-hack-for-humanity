import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  muted = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  muted?: boolean
}) {
  return (
    <section id={id} className={muted ? "bg-zinc-50 py-12 sm:py-20" : "py-12 sm:py-20"}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-3xl">
          <Badge variant="secondary" className="mb-3 uppercase tracking-wide">
            {eyebrow}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
