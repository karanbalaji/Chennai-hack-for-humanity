# Hack for Humanity — Chennai

A single-page React + Vite + TypeScript site for **Hack for Humanity Chennai**, a
build-and-give-back hackathon: any problem technology can help solve in a weekend
for a real Chennai person or group — not just government/civic services.

Modelled on the Georgian HackON 2026 landing page, built with Tailwind CSS v3 and
shadcn/ui-style components (zinc base, warm orange accent).

## What's on the page

- **Hero** — the build-and-give-back framing, the three tests every brief must
  pass, and headline Chennai evidence (Michaung, dengue, MTC access gap,
  Pallikaranai marsh).
- **Problems** — evidence cards for 10 major problem areas + a filterable
  solvability ranking table covering all 14 areas (High / Medium-High / Medium).
- **Tracks** — 6 tracks × 6 project briefs (36 total), each with beneficiaries,
  problem evidence, open datasets, protocols/frameworks, statement owners and
  guardrails. Plus cross-track rules.
- **Open Data** — portal/dataset table (OpenCity Chennai CKAN, data.gov.in,
  TNOGD, OpenAQ, CPCB/TNPCB, IMD/CWC/WRD, OSM, satellite, Census/NFHS), the
  "no verified public Chennai GTFS" warning, and the Chennai Hack Pack remedy.
- **Protocols** — Beckn (BAP/BPP/Gateway/Registry, beckn-onix sandbox ports),
  live networks (ONDC, ONEST, UHI, UEI, Namma Yatri, Vistaar), India Stack table,
  Indian OSS platforms (DIGIT, Sunbird, Bahmni, ODK/Kobo, Avni), and a Bhashini
  Tamil-voice section (AI4Bharat / IIT Madras).
- **Schedule** — Thu–Mon run-of-show + pre-event organiser timeline (Hack Pack and
  Beckn 101 / Bhashini Tamil 101 / Chennai Open Data 101 workshops).
- **Judging** — 30% open data / 25% open protocol & open-source fit / 20% working
  demo / 15% beneficiary validation / 10% UX & wow, hard gates, and prizes
  (incl. the cross-track Wild Card).
- **Rules** — team rules + an interactive submission readiness checklist.
- **Risks** — the 7 research risks and a plainly-labelled "not yet verified" list.
- **FAQ** — accordion (IP/FOSS, teams, pre-existing code, remote, Beckn, Tamil).

## Content

All copy lives in [`src/data/content.ts`](src/data/content.ts) as typed data —
tracks, problems, datasets, schedule, judging, risks and FAQs render from it.
Components are in `src/components/`, shadcn/ui primitives in
`src/components/ui/`.

Content source of truth: the Hack for Humanity Chennai research report
(20 Oct 2026). Verify portal URLs and flagged statistics before printing
participant materials.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc + production build to dist/
npm run preview  # preview the production build
```

No backend. No git repository is initialised in this folder.
