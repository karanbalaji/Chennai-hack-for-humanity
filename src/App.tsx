import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { Problems } from "@/components/Problems"
import { Tracks } from "@/components/Tracks"
import { OpenData } from "@/components/OpenData"
import { Protocols } from "@/components/Protocols"
import { Schedule } from "@/components/Schedule"
import { Judging } from "@/components/Judging"
import { Rules } from "@/components/Rules"
import { Risks } from "@/components/Risks"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Section
          id="problems"
          eyebrow="Why Chennai"
          title="The problems are real, measured, and local"
          intro="Chennai's defining paradox is too much water, then too little — and the same root causes (lost wetlands, choked drains, concretisation) drive flooding, scarcity, heat and disease together. Evidence first, tracks second."
        >
          <Problems />
        </Section>
        <Section
          id="tracks"
          eyebrow="The Tracks"
          title="Six tracks, thirty-six briefs"
          intro="Each track names its beneficiaries, the open datasets to use, the open protocol or framework to build on, and six project briefs that are genuinely buildable in 48–72 hours. Pick a track, then pick a brief — or bring your own that passes the same three tests."
          muted
        >
          <Tracks />
        </Section>
        <Section
          id="open-data"
          eyebrow="Open Data"
          title="What hackers can actually use"
          intro="The richest Chennai data is not on a slick city API. It is on OpenCity's CKAN mirror, in national and state catalogues, and in feeds that need snapshotting — which is exactly why the Hack Pack exists."
        >
          <OpenData />
        </Section>
        <Section
          id="protocols"
          eyebrow="Protocols & Frameworks"
          title="Build on open networks, not closed apps"
          intro="Chennai is unusually well placed for open-protocol hacks: Beckn networks are live, Chennai One already integrates the city's transport, and Bhashini + AI4Bharat give Tamil speech and translation from Chennai itself."
          muted
        >
          <Protocols />
        </Section>
        <Section
          id="schedule"
          eyebrow="Schedule"
          title="Thursday kickoff to Monday winners"
          intro="The Georgian HackON rhythm, with Chennai additions: pre-provisioned sandboxes, three pre-event workshops, beneficiary check-ins, and mentor desks all weekend."
        >
          <Schedule />
        </Section>
        <Section
          id="judging"
          eyebrow="Judging"
          title="Open data, open protocols, working demos"
          intro="Judging weights open-data and open-protocol integration and a working demo above everything else — and hard gates come before scores."
          muted
        >
          <Judging />
        </Section>
        <Section
          id="rules"
          eyebrow="Rules"
          title="Rules & submission checklist"
          intro="Georgian's mechanics, tightened for a give-back hackathon: a named beneficiary and a FOSS licence are not optional extras, they are the submission."
        >
          <Rules />
        </Section>
        <Section
          id="risks"
          eyebrow="Honesty"
          title="Risks & what we could not verify"
          intro="Read this before announcing anything. Every risk below has a mitigation, and everything the research could not verify is said plainly."
          muted
        >
          <Risks />
        </Section>
        <Section id="faq" eyebrow="FAQ" title="Questions, answered">
          <Faq />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
