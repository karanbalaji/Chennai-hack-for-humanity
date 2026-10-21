// All site content for Hack for Humanity Chennai.
// Source of truth: research report, 20 Oct 2026 (see README / footer sources).
// Edit content here — components render from this file.

export const navLinks = [
  { label: "Problems", href: "#problems" },
  { label: "Tracks", href: "#tracks" },
  { label: "Open Data", href: "#open-data" },
  { label: "Protocols", href: "#protocols" },
  { label: "Schedule", href: "#schedule" },
  { label: "Judging", href: "#judging" },
  { label: "Rules", href: "#rules" },
  { label: "FAQ", href: "#faq" },
] as const

export const heroStats = [
  {
    value: "~468 mm / 48h",
    researchSlug: "flooding",
    label: "Rain in Cyclone Michaung, Dec 2023",
    detail: "17 deaths, >41,000 evacuated, Tamil Nadu losses over Rs 11,000 crore.",
  },
  {
    value: "4,592",
    researchSlug: "health",
    label: "Dengue cases in Chennai in 2026 to early Oct",
    detail: "1,293 in September alone, with 100+ fever camps a day running.",
  },
  {
    value: "34.1 lakh / day",
    researchSlug: "mobility",
    label: "MTC bus passengers — but only 36%",
    detail: "of Chennai is within walking distance of high-frequency bus service (ITDP).",
  },
  {
    value: "5,000 ha → ~1,247 ha",
    researchSlug: "water",
    label: "Pallikaranai marsh, 1980s → today",
    detail: "~38% encroached. Chennai floods and runs dry for the same reasons.",
  },
] as const

export const threeTests = [
  {
    title: "Buildable in 48–72 hours",
    detail: "A working prototype, not a pitch deck. If it needs new drains, a metro line, or a desalination plant, it is not a hack.",
  },
  {
    title: "A named beneficiary, usable Monday after",
    detail: "A real Chennai person or group — a fisher cooperative, a vendor collective, an RWA, an NGO — who could use it the week after.",
  },
  {
    title: "Open by default",
    detail: "Built on open data, an open protocol, or open-source software wherever possible. No closed, mock-only apps.",
  },
] as const

/* ---------------- Problems ---------------- */

export interface ProblemCard {
  title: string
  researchSlug: string
  stat: string
  detail: string
  source: string
}

export const problemCards: ProblemCard[] = [
  {
    title: "Flooding & waterlogging",
    researchSlug: "flooding",
    stat: "500+ deaths in 2015 · Michaung 2023",
    detail:
      "The CAG called the 2015 floods a “man-made disaster”: reservoir releases, floodplain construction, choked drains. Michaung repeated it in Dec 2023.",
    source: "CAG / flood reporting",
  },
  {
    title: "Water scarcity — Day Zero",
    researchSlug: "water",
    stat: "19 Jun 2019: all 4 reservoirs dry",
    detail:
      "Waterbody area fell from 12.6 km² (1893) to ~3.2 km² (2017). Around Pallikaranai, a private tanker economy fills the gap — at a price.",
    source: "Anna University research",
  },
  {
    title: "Extreme heat",
    researchSlug: "heat",
    stat: "41–42 °C humid spells",
    detail:
      "Tamil Nadu is the first state with an overarching Heat Mitigation Strategy and heatwaves declared a state disaster. Outdoor workers still have nowhere to rest or refill water.",
    source: "WRI India / TN Heat Action Plan",
  },
  {
    title: "Air pollution",
    researchSlug: "air",
    stat: "PM10 only 66 → 58 µg/m³, 2017–18 → 2024–25",
    detail:
      "Average AQI improved from 114 (2015) to 75 (2025), still not “Good”. Hotspots are hyperlocal: Manali, Ennore, Perungudi, Kodungaiyur.",
    source: "NCAP / MoEFCC, Climate Trends",
  },
  {
    title: "Mobility & access gap",
    researchSlug: "mobility",
    stat: "61% near transit · only 36% near high-frequency bus",
    detail:
      "Chennai One (Sep 2025) unified MTC, Metro, suburban rail and Namma Yatri autos under one QR. The gap now is first/last mile, accessibility, and safety.",
    source: "ITDP People Near Transit: Chennai",
  },
  {
    title: "Waste & polluted waterways",
    researchSlug: "waste",
    stat: "~6,150 tonnes/day · 4-way segregation mandated Sep 2026",
    detail:
      "Kodungaiyur and Perungudi dumps, very low source segregation, and the Cooum, Adyar and Buckingham Canal receiving untreated sewage and solid waste.",
    source: "GCC / academic reviews",
  },
  {
    title: "Dengue & public health",
    researchSlug: "health",
    stat: "TN ~20,000 cases · Chennai 4,592 (2026)",
    detail:
      "Child anaemia in Chennai is 55.3% (NFHS-5). Elder Line 14567 exists because elders face isolation, abuse and pension confusion. The hackable slice is reporting, discovery and follow-up.",
    source: "The Hindu, Oct 2026 / NFHS-5 / PIB",
  },
  {
    title: "Livelihoods — informal Chennai",
    researchSlug: "livelihoods",
    stat: "Gig welfare board 2023 · AC rest lounges Jun 2025",
    detail:
      "Street vendors are blocked on a Certificate of Vending or Letter of Recommendation for PM SVANidhi credit. Women gig workers report no toilets, water or rest zones.",
    source: "TN Planning Commission / Fairwork",
  },
  {
    title: "Coast & Ennore",
    researchSlug: "coast",
    stat: ">41% of TN coast eroding · 8,000+ Ennore fishers",
    detail:
      "Fly ash, hot-water effluents and the Dec 2023 oil spill (2,301 fisher families, 787 boats) are collapsing catches — and fishers have no price or discovery power.",
    source: "ICSF / shoreline studies",
  },
  {
    title: "Housing & resettlement",
    researchSlug: "housing",
    stat: "Perumbakkam: ~60,000 people, 25–30 km from origin",
    detail:
      "Resettled families lost livelihood proximity, schooling continuity and information access. Researchers document a digital divide inside the colonies themselves.",
    source: "IRCDUC / resettlement research",
  },
]

export type Solvability = "High" | "Medium-High" | "Medium"

export interface SolvabilityRow {
  problem: string
  researchSlug: string
  buildThis: string
  doNotPromise: string
  level: Solvability
  note?: string
}

export const solvabilityRows: SolvabilityRow[] = [
  { problem: "Flooding", researchSlug: "flooding", buildThis: "Street-level flood reporting + alerts, relief matching, reservoir/rain dashboard, safe-route map", doNotPromise: "New SWD network, desilting, floodplain removal", level: "High", note: "info / coordination" },
  { problem: "Water scarcity", researchSlug: "water", buildThis: "Tanker / RWH / borewell reporting, reservoir-level alerts, leak reporting, water-quality logging", doNotPromise: "Desalination, new reservoirs, pipeline network", level: "High", note: "info — supply itself is Low" },
  { problem: "Heat", researchSlug: "heat", buildThis: "Heat-safe routing, water/rest/cool-roof point discovery, worker alerts in Tamil voice", doNotPromise: "Tree-planting at scale, building-code retrofit", level: "High" },
  { problem: "Air", researchSlug: "air", buildThis: "Hyperlocal AQI + clean-air routes, asthma / outdoor-work advisories, dust/burning reports", doNotPromise: "Industrial retrofit, NCAP enforcement", level: "High", note: "advisory" },
  { problem: "Mobility / safety", researchSlug: "mobility", buildThis: "Multimodal journey help, accessibility & safety layers, blackspot reporting, feeder matching", doNotPromise: "Metro Phase II, new bus fleet, road widening", level: "High", note: "layer" },
  { problem: "Waste / waterways", researchSlug: "waste", buildThis: "Segregation coaching + pickup tracking, dumping reports, recycler / bulk-generator matching (ONDC)", doNotPromise: "Biomining completion, new processing plants", level: "Medium-High" },
  { problem: "Dengue / health access", researchSlug: "health", buildThis: "Breeding-site reports, fever-camp & facility discovery, follow-up reminders, FHIR prototypes", doNotPromise: "Vector control at city scale, new hospitals", level: "Medium-High" },
  { problem: "NCD / maternal / mental health", researchSlug: "health", buildThis: "Screening follow-up, Tamil reminders, referral & check-in tools with human escalation", doNotPromise: "Clinical care delivery itself", level: "Medium" },
  { problem: "Livelihoods", researchSlug: "livelihoods", buildThis: "Discovery / matching: jobs, courses, buyers, credit documents; price transparency, rest-point maps", doNotPromise: "Wage / contract law enforcement itself", level: "High", note: "discovery" },
  { problem: "Education / disability", researchSlug: "education", buildThis: "Tamil bilingual tutoring, accessible-format conversion, course/job discovery (ONEST), out-of-school tracking for NGOs", doNotPromise: "Teacher supply, school construction", level: "High" },
  { problem: "Coast / Ennore", researchSlug: "coast", buildThis: "Catch & pollution reporting, spill alerts, price discovery, creek-health citizen science", doNotPromise: "Ash remediation, port / plant regulation", level: "Medium", note: "evidence tools" },
  { problem: "Housing / resettlement", researchSlug: "housing", buildThis: "Entitlement / transport / service navigation for resettled families, NGO case tools", doNotPromise: "Building housing, stopping evictions", level: "Medium", note: "navigation" },
  { problem: "Governance", researchSlug: "governance", buildThis: "Voice / Tamil grievance front-ends, status trackers, RWA dashboards on open data", doNotPromise: "Back-office reform inside GCC / TN", level: "Medium-High", note: "front-end" },
  { problem: "NGO / community / animals", researchSlug: "communities", buildThis: "Volunteer rostering, needs maps, rescue triage, adoption / foster matching, event discovery", doNotPromise: "Shelter construction, veterinary capacity", level: "High" },
]

/* ---------------- Tracks ---------------- */

export interface Track {
  id: string
  number: number
  title: string
  shortTitle: string
  tagline: string
  beneficiaries: string
  icon: string
  evidence: string
  evidenceLinks?: { text: string; slug: string }[]
  datasets: string[]
  protocol: string[]
  ideas: { name: string; detail: string }[]
  owners: string
  guardrail?: string
}

export const tracks: Track[] = [
  {
    id: "monsoon",
    number: 1,
    title: "Monsoon-Ready Chennai",
    shortTitle: "Monsoon-Ready",
    tagline: "Flood, Water & Coast",
    beneficiaries: "Flood-prone households, fisherfolk, RWAs, relief NGOs & volunteers",
    icon: "CloudRainWind",
    evidence:
      "2015 floods (500+ deaths, CAG: “man-made disaster”), Michaung Dec 2023 (~468 mm / 48h, >Rs 11,000 crore TN loss), Day Zero 2019, and the Pallikaranai marsh shrinking from >5,000 ha to ~1,247 ha.",
    evidenceLinks: [{ text: "~468 mm / 48h", slug: "flooding" }, { text: "~1,247 ha", slug: "water" }],
    datasets: [
      "OpenCity flooding & floods 2015/2020 (KML)",
      "OpenCity SWD maps — 114 wards",
      "OpenCity waterbodies, drainage, shelters & relief centres",
      "IMD / RMC forecasts + WRD reservoir tables (pre-snapshotted)",
      "OpenStreetMap Chennai",
      "Sentinel-2 flood extent (sample scenes)",
    ],
    protocol: ["OSM + GeoJSON / WMS-WFS", "ODK / KoboToolbox field reports", "Bhashini Tamil voice alerts", "ActivityPub alert feed (optional)"],
    ideas: [
      { name: "Theriyuma Thanni?", detail: "Street-level “will my street flood?” map combining historic flood KML + SWD + live rain, with Tamil voice alert signup per street." },
      { name: "Relief-matching board", detail: "For NGOs/RWAs: needs (food, boat, medicine, shelter beds) matched to offers (volunteers, vehicles, halls), with duplicate-suppression — the 2015 WhatsApp-chaos fix." },
      { name: "Reservoir & rain early-warning dashboard", detail: "Chembarambakkam / Poondi / Puzhal levels vs release thresholds, with a plain-Tamil “what this means for Adyar / Kosasthalaiyar streets”." },
      { name: "Fisherfolk coast-safety + creek watch", detail: "Wind / rain / spill alerts, pollution photo reports (ODK) with GPS on Ennore Creek, shared with fisher cooperatives." },
      { name: "RWH & tanker transparency logger", detail: "For apartments and informal settlements: who got water, when, at what price — an accountability dataset, not just an app." },
      { name: "Drain-blockage reporter", detail: "Before/after photos routed by ward (SWD KML), so RWAs can track closure." },
    ],
    owners: "Relief NGOs, RWAs in Velachery / Madipakkam / Perumbakkam / North Chennai, fisher villages (Ennore, Kasimedu), GCC volunteer registrants",
  },
  {
    id: "cool-air",
    number: 2,
    title: "Cool & Clean-Air Chennai",
    shortTitle: "Cool & Clean-Air",
    tagline: "Heat, Air & Outdoor Work",
    beneficiaries: "Gig & delivery workers, construction workers, street vendors, elderly, children, asthma patients",
    icon: "ThermometerSun",
    evidence:
      "41–42 °C humid heat hitting outdoor workers hardest; TN's first-in-India Heat Mitigation Strategy to build on; AQI stuck at “Satisfactory” with PM10 down only ~12% under NCAP.",
    evidenceLinks: [{ text: "41–42 °C", slug: "heat" }, { text: "PM10 down only ~12%", slug: "air" }],
    datasets: [
      "CPCB real-time AQI via data.gov.in",
      "OpenAQ API",
      "TNPCB daily AQI PDFs (OpenCity mirror)",
      "IMD heat forecasts",
      "NASA ECOSTRESS / Landsat LST sample tiles",
      "OpenCity parks, waterbody & health-centre layers",
    ],
    protocol: ["OpenAQ API", "OSM routing — clean-air / shaded routes", "UEI on Beckn-onix (EV + cooling points)", "Bhashini voice advisories"],
    ideas: [
      { name: "Heat-safe route planner", detail: "Shade + water points + rest lounges (including TN's gig-worker AC lounges) for delivery riders and vendors, with Tamil voice nudges at heat thresholds." },
      { name: "Hyperlocal AQI advisory", detail: "AQI + asthma / outdoor-work advisory per neighbourhood (CPCB/OpenAQ), with Diwali and industrial-spike alerts for Manali / Ennore / Perungudi." },
      { name: "Cool-roof / cool-spot mapper", detail: "Community-reported cool roofs, tree shade and public cooling spaces, prioritising heat-vulnerable wards (TN Heat Action Plan method)." },
      { name: "School & elderly heat check-in", detail: "Daily Tamil IVR / WhatsApp-style check during heatwaves, escalating non-responses to a named volunteer." },
      { name: "Dust & burning reporter", detail: "Construction dust and waste-burning reporting with photo + AQI overlay for ward dashboards." },
      { name: "BeachWatch Chennai", detail: "Beach / creek water-safety alerts: bacteria, spill and flood flags for Marina, Besant Nagar and Ennore." },
    ],
    owners: "Gig-worker collectives, vendor associations, schools, elder-care and asthma support groups",
  },
  {
    id: "move",
    number: 3,
    title: "Move Chennai, For Everyone",
    shortTitle: "Move Chennai",
    tagline: "Mobility, Safety & Access",
    beneficiaries: "Bus / metro commuters, women, persons with disabilities, students, auto drivers",
    icon: "Bus",
    evidence:
      "Only 36% of Chennai is near high-frequency bus service; MTC carries 34.1 lakh/day and the Metro carried 11.19 crore in 2025; two-wheelers dominate Tamil Nadu road deaths; the auto fare has been frozen since 2013.",
    evidenceLinks: [{ text: "36%", slug: "mobility" }, { text: "34.1 lakh/day", slug: "mobility" }],
    datasets: [
      "Organiser-built static GTFS for Chennai (Hack Pack)",
      "OpenCity MRTS lines/stations, bus shelters, road centrelines",
      "OpenStreetMap + Overpass",
      "CMRL ridership tables",
    ],
    protocol: ["GTFS / GTFS-Realtime (as output)", "OSM / Overpass API", "Beckn / Namma Yatri — driver-side, onix sandbox", "OpenAPI for any new feed"],
    ideas: [
      { name: "Accessible journey planner", detail: "Step-free, low-floor, ramp/lift, lighting and crowding layers for PwD, elderly and pregnant users across bus + metro + MRTS." },
      { name: "Women's safe-commute layer", detail: "Well-lit stop ratings, last-bus times, verified auto stands, share-trip + SOS UX. No vigilante features." },
      { name: "Blackspot & near-miss reporter", detail: "Two-wheeler / pedestrian near-miss and footboard-risk logging mapped to junctions, for college and MTC safety drives." },
      { name: "Feeder matcher", detail: "Neighbourhood demand map for the feeder-bus gap — colony to metro station pooled auto / shuttle demand, Beckn-style." },
      { name: "Driver's companion", detail: "For Namma Yatri drivers: earnings / trip diary, rest and EV-charge points, ONEST scholarship and course discovery for drivers' children." },
      { name: "GTFS validator / stop-reality checker", detail: "Dev-tools flavour: compare GTFS stops vs OSM vs ground photos and auto-file corrections — a gift back to the open-data commons." },
    ],
    owners: "Commuter groups, women's collectives, disability organisations, colleges, auto-driver unions",
    guardrail: "No verified public Chennai GTFS / live bus GPS exists. This track builds on the organiser-assembled static GTFS + mock GTFS-RT in the Hack Pack — never promise live MTC data without a CUMTA / MTC letter.",
  },
  {
    id: "work",
    number: 4,
    title: "Work, Learning & Local Business",
    shortTitle: "Work & Learning",
    tagline: "Livelihoods for Informal Chennai",
    beneficiaries: "Gig / informal workers, street vendors, fisher cooperatives, domestic workers, MSMEs & artisans, first-generation learners",
    icon: "Briefcase",
    evidence:
      "Gig precarity and women's safety at work; vendors blocked on vending documentation for PM SVANidhi credit; fisherfolk with no price power; 7,302 out-of-school children identified by GCC; ~65% of first-generation learners prefer Tamil–English bilingual teaching.",
    evidenceLinks: [{ text: "PM SVANidhi credit", slug: "livelihoods" }, { text: "7,302 out-of-school children", slug: "education" }],
    datasets: [
      "eShram aggregates + TNOGD scheme / district data via data.gov.in",
      "OpenCity markets & industrial layers",
      "ONDC / ONEST sandbox catalogues",
      "PM SVANidhi eligibility rules",
    ],
    protocol: ["ONDC — BPP adapter or BAP", "ONEST / DSEP", "DigiLocker + Account Aggregator / OCEN (sandbox / mock only)", "UPI QR / intent (mock)", "Bhashini Tamil voice cataloguing"],
    ideas: [
      { name: "Voice-first ONDC catalogue builder", detail: "A flower, fish or food vendor speaks in Tamil and gets a live catalogue — photo, price, UPI. The ONDC hackathon's Indic / conversational challenge, Chennai edition." },
      { name: "Fisher catch-of-the-day price board", detail: "Catch prices + direct buyer discovery (hotels, retailers, households) for Kasimedu / Ennore cooperatives, with ice and transport pooling." },
      { name: "Gig-worker rights & rest toolkit", detail: "Welfare-board enrolment checker, lounge / rest / toilet map, and an earnings + heat / AQI exposure diary exportable for worker collectives." },
      { name: "SVANidhi / scheme navigator", detail: "Eligibility in Tamil voice, a DigiLocker document checklist, and a LoR / Certificate-of-Vending tracker. No loan promises." },
      { name: "ONEST opportunity finder", detail: "Scholarships, mentors, courses and part-time jobs in Tamil for first-generation students and drivers' / vendors' children, with a verifiable-credential (INCOMS) mock." },
      { name: "MSME / artisan neighbourhood storefront", detail: "Hyperlocal, Beckn-discoverable discovery for small businesses and artisan clusters in OMR / Mylapore / T. Nagar, with Tamil + English listings." },
    ],
    owners: "Vendor associations, fisher cooperatives, gig-worker collectives, MSME clusters, Naan Mudhalvan / skilling partners",
  },
  {
    id: "care",
    number: 5,
    title: "Care Closer to Home",
    shortTitle: "Care Closer to Home",
    tagline: "Health, Elders, Disability & Wellbeing in Tamil",
    beneficiaries: "Dengue-affected households, UPHC / NGO health workers, elderly living alone, PwD, mothers & children, resettlement-colony families",
    icon: "HeartPulse",
    evidence:
      "Dengue surges every monsoon (Chennai 4,592 cases in 2026); Chennai child anaemia 55.3%; Elder Line 14567's taxonomy exists because elders face isolation and abuse; disability inclusion fails on learning materials in appropriate formats and transport, not just ramps.",
    evidenceLinks: [{ text: "4,592 cases", slug: "health" }, { text: "55.3%", slug: "health" }],
    datasets: [
      "OpenCity health centres / UPHC / maternity / TB / anganwadi lists",
      "TNOGD / HMIS district aggregates",
      "NFHS-5 Chennai fact sheet",
      "ABDM sandbox synthetic patients",
      "HFR / HPR sample registries",
    ],
    protocol: ["ABDM / ABHA + FHIR R4 — HAPI FHIR sandbox", "UHI — mock BAP/BPP on Beckn-onix", "Bahmni demo or Avni-style field forms (ODK fallback)", "Bhashini ASR / TTS in Tamil", "eSanjeevani referral model"],
    ideas: [
      { name: "Dengue season companion", detail: "Breeding-site photo reports, nearest fever camp (from organiser-provided GCC camp lists), and test-result follow-up reminders in Tamil — for households and mosquito-worker supervisors." },
      { name: "UHI facility finder (mock network)", detail: "Discover and book a teleconsult, lab or pharmacy across “different apps” via a local UHI gateway, with ABHA-mock and a FHIR encounter summary." },
      { name: "Elder companion", detail: "Daily Tamil voice check-in, medicine and appointment reminders, Elder Line 14567 + family / volunteer escalation, and pension / legal information (not advice) packs." },
      { name: "NCD / anaemia follow-up", detail: "For UPHCs and NGOs: BP / sugar / Hb screening camp forms (ODK) → FHIR observations → defaulter lists for health workers, privacy by design." },
      { name: "Accessible learning / health converter", detail: "Turn a PDF notice or textbook chapter into Tamil audio + large-print + simplified text (Bhashini + OCR), tested with PwD users." },
      { name: "Maternal / child visit navigator", detail: "Antenatal and immunisation schedules in Tamil voice, anganwadi / UPHC finder, and a transport-cost planner — for mothers in resettlement colonies." },
    ],
    owners: "UPHCs, community-health NGOs, elder-care groups, disability organisations, anganwadi networks",
    guardrail: "Hard guardrail: no diagnosis, no therapy chatbot, no real health data. Every flow ends at a human — clinic, health worker, or helpline.",
  },
  {
    id: "commons",
    number: 6,
    title: "Neighbourhood Commons",
    shortTitle: "Neighbourhood Commons",
    tagline: "Tools for NGOs, Communities, Culture & Animals",
    beneficiaries: "NGOs & volunteer networks, RWAs, animal-welfare groups & feeders, local artists & cultural groups, shelters & community kitchens",
    icon: "Users",
    evidence:
      "In 2015, thousands of volunteers mobilised — coordination, not goodwill, was the bottleneck. Blue Cross of India (Chennai, est. 1959) reports 246,628 ABC surgeries and 336,663 rescues; GCC targeted vaccinating ~2 lakh stray dogs in 2026 with 15 ABC centres scaling 200 → 400 surgeries/day.",
    evidenceLinks: [{ text: "246,628 ABC surgeries", slug: "communities" }, { text: "~2 lakh stray dogs", slug: "communities" }],
    datasets: [
      "OpenCity shelters, relief centres, parks, waterbodies, heritage layers",
      "OpenStreetMap",
      "GCC ABC / vaccination camp info (organiser-provided)",
      "Open media archives — Wikimedia Commons licences",
    ],
    protocol: ["ODK / KoboToolbox", "OSM", "ActivityPub — federated neighbourhood feed", "OpenAPI-documented micro-tools", "Sunbird-style modular content blocks", "DIGIT concepts — registries & workflows as design patterns", "Bhashini for Tamil community notices"],
    ideas: [
      { name: "NGO volunteer OS", detail: "Rostering, skills / vehicle / boat registry, needs-matching and after-action logs for flood and heat relief groups — reusable across NGOs, exportable, no platform lock-in." },
      { name: "Street-animal care ledger", detail: "Per-dog ABC / vaccination status by street, rescue-request triage with GPS pick-up → return-same-location, feeder / vet / foster matching, and a camp-day cold-chain checklist." },
      { name: "RWA / neighbourhood commons board", detail: "Water, waste, tree, streetlight and park issues mapped on OSM with photo proof and escalation exports (1913-ready formats) — owned by the RWA, not a startup." },
      { name: "Chennai memory & culture archive", detail: "Tamil oral-history, flood-memory, fisher-song and neighbourhood-history collection with consent and open licences; geotagged walks (heritage, food, music) with accessibility info." },
      { name: "Artist & maker discovery (Beckn-style)", detail: "Local artists, tutors, repairers, caterers and community halls discoverable by neighbourhood for events — ONDC / ONEST patterns applied to culture." },
      { name: "Donation-in-kind matcher", detail: "Surplus food (hotels / events), clothes, medicines (unexpired, pharmacist-verified workflow) and furniture matched to shelters and NGOs with pickup logistics — strict safety rules." },
    ],
    owners: "NGOs and volunteer networks, RWAs and apartment communities, animal-welfare groups, cultural collectives, shelters",
  },
]

export const crossTrackRules = [
  "Demo must run on a low-end Android phone, in Tamil + English, with a voice or icon path.",
  "Use at least one named open dataset / API and at least one open protocol / framework — logged in the README.",
  "Name one real beneficiary organisation or community, and show evidence of a 15-minute conversation with them. “Chennaites in general” does not count.",
  "No real patient, child, location-of-home, or slum-household data — synthetic / aggregated only.",
  "Submission = public repo + OpenAPI spec (where relevant) + dataset / protocol log + 1–3 minute video.",
] as const

/* ---------------- Open data ---------------- */

export interface DatasetRow {
  source: string
  url: string
  what: string
  format: string
  api: string
  licence: string
  caveat: string
}

export const datasetRows: DatasetRow[] = [
  {
    source: "OpenCity.in — Chennai (CKAN)",
    url: "https://data.opencity.in/dataset/?organization=greater-chennai-corporation",
    what: "The single best Chennai starting point: flooding & floods 2015/2020, SWD maps (114 wards), waterbodies, slums, health centres / UPHCs, anganwadis, shelters, relief centres, MRTS, road centrelines, GCC budgets to 2026–27, Climate & Clean Air Action Plans, TNPCB daily AQI PDFs.",
    format: "CSV / KML / PDF",
    api: "CKAN API pattern",
    licence: "Varies per dataset — check each page",
    caveat: "Curated mirror, not live GCC telemetry. Dates vary; PDFs need parsing; KML needs GIS cleaning.",
  },
  {
    source: "OGD India — data.gov.in",
    url: "https://data.gov.in",
    what: "National catalogues incl. CPCB real-time AQI, IMD, census / surveys, health, education, eShram aggregates, pincode directory.",
    format: "CSV / API",
    api: "API key required (free account)",
    licence: "Government Open Data Licence — India (GODL), with attribution",
    caveat: "Pagination limits; quality and freshness vary wildly by ministry; many “APIs” are static files.",
  },
  {
    source: "Tamil Nadu OGD — data.tn.gov.in",
    url: "https://data.tn.gov.in",
    what: "State catalogues across departments: health, ICDS anganwadi beneficiaries, district handbooks, season & crop / rainfall, economics & statistics. ~32,547 resources / 3,486 catalogues (Oct 2021).",
    format: "CSV / XLS / ODS / XML / KML",
    api: "Some APIs",
    licence: "OGD / GODL terms",
    caveat: "Much is aggregated and dated, not ward-level or real-time. Best for denominators, district stats, scheme lists. Confirm URLs live before the event.",
  },
  {
    source: "OpenAQ",
    url: "https://openaq.org",
    what: "Open, harmonised global air-quality platform — the easiest live environmental API for a weekend.",
    format: "JSON API",
    api: "Documented open API (free key)",
    licence: "Open — see OpenAQ terms",
    caveat: "Station coverage is what it is; community low-cost sensor data is uncalibrated — label it as such.",
  },
  {
    source: "CPCB / TNPCB AQI",
    url: "https://data.gov.in/dataset-group-name/Air%20Quality",
    what: "CAAQMS real-time AQI via data.gov.in; TNPCB daily AQI PDFs for 34 stations mirrored on OpenCity.",
    format: "API / PDF",
    api: "Via data.gov.in (key)",
    licence: "GODL-India",
    caveat: "Historical archives are notoriously hard to retrieve from the real-time portal.",
  },
  {
    source: "IMD / CWC / TN WRD",
    url: "https://mausam.imd.gov.in",
    what: "IMD forecasts & rainfall (RMC Chennai), CWC flood forecasting, reservoir levels for Chembarambakkam / Poondi / Puzhal / Cholavaram as daily WRD tables.",
    format: "Web tables / PDF",
    api: "No stable public API verified",
    licence: "IMD data policy restricts bulk redistribution",
    caveat: "Pre-scrape + snapshot with timestamps. Never present a snapshot as live telemetry.",
  },
  {
    source: "OpenStreetMap — Chennai",
    url: "https://www.openstreetmap.org",
    what: "Roads, footpaths, waterways, buildings, POIs. In the 2015 floods, volunteers built an OSM flood map in ~2 days that got ~2 million hits in 2 weeks.",
    format: "API / GeoJSON / extracts",
    api: "OSM API / Overpass API",
    licence: "ODbL",
    caveat: "Uneven for informal settlements, drains and accessibility attributes (kerbs, ramps, lighting) — which is itself a hack: mapathon + validator.",
  },
  {
    source: "Satellite — Bhuvan / Sentinel / NASA",
    url: "https://bhuvan.nrsc.gov.in",
    what: "ISRO Bhuvan geoportal (WMS/WFS-style), Copernicus Sentinel-2 (flood / land use) & Sentinel-5P (air), NASA ECOSTRESS land-surface temperature used in Chennai heat research.",
    format: "WMS / WFS / GeoTIFF",
    api: "Service endpoints; accounts for some",
    licence: "Free & open (Copernicus); Bhuvan registration for some services",
    caveat: "Pre-download sample scenes — nobody should be learning a satellite portal on day 1.",
  },
  {
    source: "Census / NFHS / district stats",
    url: "https://data.gov.in",
    what: "Census 2011 denominators, NFHS-5 Chennai district fact sheet, SECC, NITI SDG Index, TN district handbooks via TNOGD.",
    format: "PDF / XLS / CSV",
    api: "Downloads",
    licence: "Public / GODL",
    caveat: "Census is 15 years old — GCC is now 200 wards / 15 zones. Always state the vintage on a chart.",
  },
]

/* ---------------- Protocols ---------------- */

export const becknRoles = [
  { role: "BAP", name: "Beckn Application Platform", detail: "The buyer / seeker side — e.g. a citizen app. This is usually the one side a hackathon team builds." },
  { role: "BPP", name: "Beckn Provider Platform", detail: "The seller / provider side — a vendor collective, a clinic, a driver network." },
  { role: "Gateway", name: "Beckn Gateway (BG)", detail: "Broadcasts discovery requests to BPPs across the network." },
  { role: "Registry", name: "Registry", detail: "The trust layer: verified subscribers, their keys, domains and policies." },
] as const

export const liveNetworks = [
  { name: "ONDC", domain: "Digital commerce", detail: "Kirana, MSME, vendor and fisherfolk catalogues discoverable by any buyer app, with logistics and grievance (ODR) rails." },
  { name: "ONEST", domain: "Education & livelihood", detail: "Discovery of courses, scholarships, internships, mentors and jobs. First live transaction: a scholarship for a Namma Yatri driver's daughter, via Protean Vidyasaarthi." },
  { name: "UHI", domain: "Health — ABDM service layer", detail: "Discover / transact with verified providers via the NHA Gateway, using ABHA, HPR/HFR and consent-based record sharing. Sandbox / mock only for a hackathon." },
  { name: "UEI", domain: "Energy", detail: "Open network for EV charging and energy transactions — EV-charge discovery for gig and fleet riders." },
  { name: "Namma Yatri", domain: "Mobility", detail: "Zero-commission, Beckn-based, driver-community ride-hailing, live in Chennai and integrated into Chennai One." },
  { name: "Vistaar", domain: "Agriculture", detail: "Government-orchestrated farmer network — Chennai fit is peri-urban farmers supplying Chennai markets. An extension, not a core track." },
] as const

export const indiaStackRows = [
  { block: "UPI (NPCI)", enables: "Instant payments for vendors, gig workers, NGO donations, transit", access: "Ubiquitous live — mock / intent-only in hacks; no real money without a PSP partner" },
  { block: "DigiLocker", enables: "Verified documents (licence, marksheets, caste/income and vending certificates) pulled with consent for SVANidhi / scholarship / job applications", access: "Live; partner / aggregator access — use sandbox / mock verification screens" },
  { block: "Account Aggregator + OCEN", enables: "Consent-based financial data for MSME / vendor / gig credit underwriting; standardised lending APIs", access: "Live, regulated ecosystem — hack on the AA sandbox / synthetic statements only" },
  { block: "ABHA / ABDM + FHIR R4", enables: "Portable health records, consent manager (HIE-CM), HFR / HPR registries", access: "Live nationally — ABDM sandbox with synthetic patients is the correct hack environment" },
  { block: "eSanjeevani", enables: "National telemedicine — provider-to-provider hub-and-spoke + patient-to-doctor OPD", access: "Live service to integrate / refer into, not to rebuild" },
  { block: "DIKSHA / Sunbird", enables: "National school platform on open-source Sunbird; Tamil content, QR-coded textbooks", access: "Live — build on Sunbird building blocks or mirror its patterns" },
  { block: "MOSIP", enables: "Open-source foundational ID platform (“Aadhaar in a box”)", access: "Too heavy for a weekend build — DPI design reference only" },
  { block: "GeM / UMANG / OGD", enables: "Government procurement discovery for MSME sellers; single-app access to 1,200+ services", access: "Live services — hacks are discovery / navigation front-ends, not clones" },
] as const

export const ossPlatforms = [
  { name: "DIGIT (eGov Foundation)", detail: "Open-source, open-API platform for municipal / governance services; the national urban platform UPYOG is built on it. Extend it with a module — do not deploy it whole in a weekend." },
  { name: "Sunbird (EkStep)", detail: "MIT-licensed, modular building blocks for learning and human development; powers DIKSHA and more. Use its data models / APIs as reference or build a block." },
  { name: "Bahmni", detail: "Open-source hospital / EMR system born in India, in 500+ hospitals across 50+ countries, ABDM-certified. Hack on a pre-installed demo instance — not a fresh install on day 2." },
  { name: "ODK / KoboToolbox", detail: "Free, offline-first field forms with GPS / photo, XLSForm authoring and instant dashboards. The pragmatic field-data stack for flood, dengue, waste and animal-rescue tracks." },
  { name: "Avni", detail: "Open-source field / workforce app used by NGOs and community-health programmes for offline household visits and longitudinal case records." },
  { name: "HAPI FHIR + MapLibre + FastAPI/Node", detail: "The recommended rapid stack: MapLibre / Leaflet + OSM, GeoJSON/KML from OpenCity, an OpenAPI spec from day 1, and a Flutter / React PWA — offline-first, low-end Android first." },
] as const

/* ---------------- Schedule ---------------- */

export const scheduleDays = [
  { when: "Thu · 6:00 PM", title: "Kickoff & Team Matchmaking", detail: "Sponsor introductions, detailed track overview, statement owners pitch their problems, team formation, starter credits and Hack Pack access activated." },
  { when: "Fri · 9:00 AM", title: "Build Window Opens & Office Hours", detail: "Hacking officially begins. Technical advisors host 30-minute office hours: Beckn-onix, ABDM sandbox, Bhashini keys, Open Data help desk, Ethics desk." },
  { when: "Sat · All Day", title: "Intense Building & Demo Rehearsals", detail: "Hacking continues. Beneficiary check-in window in the morning; optional demo rehearsals from 6:00 PM to dry-run your strictly enforced 3-minute demo." },
  { when: "Sun · 11:59 PM", title: "Code Freeze & Submission Deadline", detail: "All repositories pushed, README with dataset / protocol log updated, and 1–3 minute video walkthrough submitted. No exceptions." },
  { when: "Mon · 6:00 PM", title: "Judging Demos", detail: "Results review, pitch highlights and evaluation by the judging panel. Every team gets a 1–3 minute video demo slot plus live Q&A." },
  { when: "Mon · 7:30 PM", title: "Winners Announced & Closing", detail: "Awards for first place, runner-ups and cross-track Wild Cards. Handover commitments to beneficiary groups confirmed on stage." },
] as const

export const preEventTimeline = [
  { when: "2 weeks before", title: "Chennai Hack Pack ships", detail: "Frozen, cleaned, documented datasets with vintages + licences mirrored for offline use. Live APIs are a bonus, never the plan." },
  { when: "2 weeks before", title: "Sandboxes pre-provisioned", detail: "Local Beckn-onix networks, ABDM / UHI sandboxes with synthetic data, pre-registered Bhashini API keys tested on Chennai vocabulary (stops, streets, fish, symptoms)." },
  { when: "1 week before", title: "Workshop: Beckn 101", detail: "BAP / BPP / Gateway / Registry, a working onix demo, and the ONEST scholarship story as the pattern to copy." },
  { when: "1 week before", title: "Workshop: Bhashini Tamil 101", detail: "ASR → translation → TTS pipeline via ULCA, service IDs per task, code-mixed Tamil–English input, and the human-fallback rule." },
  { when: "1 week before", title: "Workshop: Chennai Open Data 101", detail: "OpenCity CKAN, KML → GeoJSON, data.gov.in API keys, OSM / Overpass, and how to cite a dataset's vintage honestly." },
  { when: "Before doors open", title: "Statement owners confirmed", detail: "Every track names its owners — an NGO, a collective, a clinic, a fisher group — and community teammates / mentors are in the room, not just “users”." },
] as const

/* ---------------- Judging ---------------- */

export const judgingCriteria = [
  { name: "Open Data Integration", weight: 30, detail: "Meaningful use of at least one open dataset or OpenAPI spec. Two sources earn bonus points." },
  { name: "Open Protocol / Open-Source Fit", weight: 25, detail: "Real, code-level use of Beckn / ABDM / Bhashini / OSM / DIGIT-family tooling. A logo on a slide does not count." },
  { name: "Working Demo", weight: 20, detail: "A fully functioning build, running on a low-end Android phone. Slides-only ideas are disqualified." },
  { name: "Beneficiary Validation", weight: 15, detail: "A named beneficiary organisation or community, a real 15-minute conversation, and a handover path for Monday after." },
  { name: "UX / Polish & Wow", weight: 10, detail: "Clean, Tamil + English, voice or icon path, helpful errors — and an answer to “should this exist?”" },
] as const

export const hardGates = [
  "Slides-only = disqualified",
  "No diagnosis or therapy bots — human escalation always",
  "No real patient, child, or vulnerable-household location data",
  "Tamil + English, low-end Android — no English-only, login-walled demos",
] as const

export const prizes = [
  { place: "1st Place (per track)", detail: "Extended platform developer credits + a publication feature + a named beneficiary adopter for handover." },
  { place: "2nd Place (per track)", detail: "Standard platform developer credits + organiser swag pack + handover support." },
  { place: "Wild Card (cross-track)", detail: "Best open-source documentation & handover, and best developer tool used by other teams (the Georgian Dev Tools spirit, Chennai-style)." },
] as const

/* ---------------- Rules ---------------- */

export const rules = [
  "Teams consist of 1 to 4 builders. Solo hackers are fully supported; community teammates (NGO staff, drivers, vendors, caregivers) count as builders.",
  "All primary code must be written during the hackathon window. Pre-existing utilities and scaffolding frameworks are fine; pre-built projects are not allowed — repos will be checked.",
  "Every project must integrate at least one open dataset or OpenAPI specification, and at least one open protocol or open-source framework.",
  "Every project must name a real beneficiary organisation or community and log the 15-minute beneficiary conversation.",
  "All submissions carry a FOSS licence. Teams own their IP; the licence is what lets the beneficiary group keep using the work on Monday.",
  "Video presentations are limited to 1–3 minutes and must be a public walkthrough of the working build.",
] as const

export const submissionChecklist = [
  { title: "Project Title & Description", detail: "A brief 2–3 sentence overview + selected challenge track name." },
  { title: "Public Repository Link", detail: "Clean GitHub repository with an explanatory README and a FOSS licence." },
  { title: "1–3 Minute Video Walkthrough", detail: "A public video link walking through the working demo, in Tamil and/or English." },
  { title: "Dataset & Protocol Log", detail: "Every open dataset, API and protocol / framework used, with source URLs and data vintages." },
  { title: "Beneficiary Note", detail: "Who it is for, the conversation you had, and who maintains it after the weekend." },
] as const

/* ---------------- Risks ---------------- */

export const risks = [
  {
    title: "“Open” but not accessible",
    detail: "TNOGD / data.gov.in entries are often old, aggregated or PDF-only, and several official portals could not be verified live during research. Mitigation: the frozen Chennai Hack Pack, mirrored two weeks before.",
  },
  {
    title: "No verified public Chennai GTFS / live bus GPS",
    detail: "Absence in research is not proof none exists — ask CUMTA / MTC / CMRL directly. Mitigation: organiser-assembled static GTFS + mock GTFS-RT as event infrastructure; no live-data promises without a letter.",
  },
  {
    title: "Beckn / ABDM production onboarding is too heavy for a weekend",
    detail: "Registry whitelisting, subscriber keys, certification and consent-manager compliance take weeks. Mitigation: local Beckn-onix, sandboxes, synthetic data — judge the protocol pattern, not production registration.",
  },
  {
    title: "Bhashini key & model risk",
    detail: "Per-task service IDs, variable Tamil quality by domain, registration lead time. Mitigation: pre-register keys, test Chennai vocabulary in advance, cache common phrases, always ship a human fallback.",
  },
  {
    title: "Sensitive-data harm",
    detail: "Slum locations, health, children, elders, exact home addresses, feeder locations. Mitigation: aggregation thresholds, synthetic health data, Tamil consent scripts, and an ethics mentor desk.",
  },
  {
    title: "Solutionism / extractive hacking",
    detail: "Teams building for fisherfolk, vendors or PwD without them. Mitigation: the beneficiary-conversation gate, community teammates and mentors in every track, prizes for handover — not just pitch.",
  },
  {
    title: "Post-weekend death",
    detail: "Most civic hacks die on Monday. Mitigation: FOSS licence required, Wild-Card prize for documentation + handover, a named maintainer / NGO adopter per winning team, and follow-on pathways (Tamil LangTech Fund, Naan Mudhalvan / TNSDC, ONDC / ONEST, IIT-M / AI4Bharat) named at closing.",
  },
] as const

/* ---------------- FAQ ---------------- */

export const faqs = [
  {
    q: "Who owns the intellectual property (IP) of the project?",
    a: "Your team does. The one condition is a FOSS (free and open-source) licence on the submission repo, so the beneficiary group you built for can keep using, maintaining and extending the work after the weekend. That licence requirement is the whole point of a give-back hackathon.",
  },
  {
    q: "What if I don't have a team yet?",
    a: "Come to the Thursday 6 PM kickoff — team matchmaking is built into it, and solo hackers are fully supported (teams are 1–4). We actively match builders with community teammates: NGO staff, drivers, vendors and caregivers who know the problem first-hand.",
  },
  {
    q: "Can we use pre-existing code or boilerplates?",
    a: "Scaffolding, libraries and pre-existing utilities are fine. A pre-built, essentially complete project is not — all primary code must be written during the hackathon window, and repositories are checked.",
  },
  {
    q: "Are remote participants allowed?",
    a: "The core weekend is designed as an in-person Chennai event (beneficiary conversations and mentor desks are in the room). Pre-event workshops run online, and remote teammates can join a team — talk to the organisers when you register so your team's demo and beneficiary check-in are scheduled fairly.",
  },
  {
    q: "What is Beckn, in one minute?",
    a: "Beckn is an open protocol for discovery, ordering and fulfilment between platforms — the pattern behind ONDC (commerce), ONEST (education & livelihood), UHI (health), UEI (energy) and Namma Yatri (mobility). Your app (a BAP) asks a Gateway to find providers (BPPs) listed in a Registry. You build one side against the pre-provisioned Beckn-onix local sandbox — no production onboarding needed.",
  },
  {
    q: "Does our demo have to work in Tamil?",
    a: "Yes — Tamil + English, with a voice or icon path, running on a low-end Android phone. For a first-generation smartphone user, an elderly person, or a fisher with wet hands, English-text-only is the difference between a demo and a give-back. Bhashini (ASR / translation / TTS) keys are pre-registered for the event, and a human fallback is mandatory for health and emergency flows.",
  },
  {
    q: "What counts as “open data” for the judging points?",
    a: "A named dataset or OpenAPI spec from the Open Data section (OpenCity, data.gov.in, TNOGD, OpenAQ, OSM, the Hack Pack mirrors), logged in your README with its source URL and vintage. Two meaningful sources earn bonus points under Open Data Integration.",
  },
] as const

export const footerSources = [
  { label: "Beckn Protocol", href: "https://becknprotocol.io/" },
  { label: "beckn.io — live open networks", href: "https://beckn.io/" },
  { label: "OpenCity Chennai datasets", href: "https://data.opencity.in/dataset/?organization=greater-chennai-corporation" },
  { label: "OGD India — data.gov.in", href: "https://data.gov.in" },
  { label: "Inspiration: Georgian HackON 2026", href: "https://georgian-hackon.vercel.app/" },
] as const
