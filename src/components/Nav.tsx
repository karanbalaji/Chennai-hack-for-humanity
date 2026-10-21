import { useState } from "react"
import { HeartHandshake, Menu, PackageOpen, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/data/content"
import { cn } from "@/lib/utils"

export function Nav({ view = "landing" }: { view?: "landing" | "research" }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HeartHandshake className="h-5 w-5" />
          </span>
          <span className="text-sm leading-tight sm:text-base">
            Hack for Humanity
            <span className="block text-xs font-medium text-muted-foreground sm:inline sm:text-base sm:text-primary"> · Chennai</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={view === "research" ? "font-bold text-primary" : "font-semibold text-primary"}
          >
            <a href="#/research" aria-current={view === "research" ? "page" : undefined}>
              Research
            </a>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden h-11 sm:inline-flex" asChild>
            <a href="#open-data">
              <PackageOpen className="mr-1 h-4 w-4" /> Chennai Hack Pack
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <nav
        className={cn("border-t px-4 py-2 lg:hidden", open ? "block" : "hidden")}
        aria-label="Mobile"
      >
        <div className="grid grid-cols-2 gap-1">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" className="h-11 justify-start" asChild>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </Button>
          ))}
          <Button variant="ghost" className="h-11 justify-start font-semibold text-primary" asChild>
            <a href="#/research" onClick={() => setOpen(false)}>
              Research
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
