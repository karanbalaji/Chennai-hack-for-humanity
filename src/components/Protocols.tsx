import { ArrowRight, Languages, Mic } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { becknRoles, indiaStackRows, liveNetworks, ossPlatforms } from "@/data/content"

export function Protocols() {
  return (
    <div>
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Beckn Protocol — the centrepiece</CardTitle>
          <p className="text-sm leading-relaxed text-muted-foreground">
            An open, domain-agnostic transaction protocol (by FIDE) for discovery,
            ordering, fulfilment and post-fulfilment between platforms, using a common
            context + message packet and asynchronous request / callback APIs. Specs are
            open (OpenAPI / JSON Schema). A hackathon team builds <em>one side</em> —
            usually a BAP — against a sandbox gateway and mock BPPs. Building a whole
            network is not a weekend job.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            {becknRoles.map((r, i) => (
              <div key={r.role} className="flex flex-1 items-center gap-2">
                <div className="flex-1 rounded-xl border bg-zinc-50/60 p-4">
                  <Badge>{r.role}</Badge>
                  <div className="mt-2 text-sm font-semibold leading-snug">{r.name}</div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.detail}</p>
                </div>
                {i < becknRoles.length - 1 ? (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block" />
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-700">
            beckn-onix local sandbox (pre-provisioned): registry :3000 · gateway :4000 ·
            sandbox-api :4010 · BAP client/network :5001/:5002 · BPP client/network
            :6001/:6002 — with Mongo / Redis / RabbitMQ. Production ONDC onboarding
            (registry whitelisting, subscriber keys, certification) is out of scope for
            a weekend: local onix networks only, judged on the protocol pattern.
          </p>
        </CardContent>
      </Card>

      <h3 className="mb-4 mt-10 text-xl font-bold tracking-tight">Live Beckn networks to build on</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {liveNetworks.map((n) => (
          <Card key={n.name} className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{n.name}</CardTitle>
              <Badge variant="secondary" className="w-fit">{n.domain}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{n.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="mb-4 mt-10 text-xl font-bold tracking-tight">India Stack — the building blocks</h3>
      <div className="overflow-x-auto rounded-2xl border bg-card">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Block</th>
              <th className="px-4 py-3 font-semibold">What it enables in a Chennai hack</th>
              <th className="px-4 py-3 font-semibold">Maturity / hackathon access</th>
            </tr>
          </thead>
          <tbody>
            {indiaStackRows.map((r) => (
              <tr key={r.block} className="border-t align-top">
                <td className="px-4 py-3 font-semibold">{r.block}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.enables}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.access}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Global open specs round out the toolkit: GTFS / GTFS-Realtime, OSM + Overpass,
        HL7 FHIR R4, OpenAPI / AsyncAPI, ActivityPub, WMS / WFS, and the OpenAQ API.
      </p>

      <h3 className="mb-4 mt-10 text-xl font-bold tracking-tight">Open-source platforms from India</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ossPlatforms.map((p) => (
          <Card key={p.name} className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-10 rounded-2xl border-primary/30 bg-gradient-to-br from-orange-50 to-amber-50">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Languages className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold tracking-tight">Bhashini — Tamil voice is Chennai&apos;s home advantage</h3>
          </div>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-700">
            Bhashini, the National Language Translation Mission (MeitY), makes services
            available in all 22 scheduled languages, including Tamil, via a composable
            pipeline: <strong>ASR</strong> (speech → text) → <strong>NMT</strong> (translation) →{" "}
            <strong>TTS</strong> (text → speech), accessed via ULCA with a service ID per
            task. Its model providers include <strong>AI4Bharat at IIT Madras — in Chennai
            itself</strong> — whose IndicVoices dataset holds 12,000 hours of speech across
            22 languages.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-700">
            <Mic className="mr-1 inline h-4 w-4 text-primary" />
            Why it matters: flood alerts, health instructions and bus information are
            useless to a first-generation smartphone user, an elderly person with low
            vision, a domestic worker with limited reading time, or a fisher listening
            with wet hands if they are English-text-only. Voice-first Tamil is the
            difference between a demo and a give-back. Caveats: pre-register event keys,
            cache common phrases, expect variable quality by domain — and always ship a
            human fallback for health and emergency flows.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
