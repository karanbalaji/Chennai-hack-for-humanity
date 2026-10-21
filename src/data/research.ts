// Research page content for Hack for Humanity Chennai.
// Source of truth: deep research report, 20 Oct 2026
// (~/workspace/research_notes/hack-for-humanity-chennai-tracks-researc-20261020-1056/report.md).
// Hedges and flags from the report are kept visible on purpose.
// Photos: Wikimedia Commons hotlinks (the repo push path is text-only, so no
// binary images are committed). Every URL was verified HTTP 200 + image/jpeg.

export interface ResearchPhoto {
  src: string
  alt: string
  scene: string
  author: string
  license: string
  page: string
}

export const heroPhoto: ResearchPhoto = {
  src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Marina_beach%2C_Chennai_aerial_view.jpg/1280px-Marina_beach%2C_Chennai_aerial_view.jpg",
  alt: "Aerial view of Marina Beach and the Chennai coastline",
  scene: "Marina Beach, Chennai, aerial view",
  author: "Saiphani02",
  license: "CC BY-SA 4.0",
  page: "https://commons.wikimedia.org/wiki/File:Marina_beach,_Chennai_aerial_view.jpg",
}

export interface ResearchStat {
  value: string
  label: string
  flag?: string
}

export interface ResearchSource {
  name: string
  href: string
}

export interface EvidenceSection {
  slug: string
  title: string
  paragraphs: string[]
  stats: ResearchStat[]
  sources: ResearchSource[]
  photos?: ResearchPhoto[]
}

const floodPhoto: ResearchPhoto = {
  src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Aerial_view_of_Chennai_during_floods_-_2.jpg/1280px-Aerial_view_of_Chennai_during_floods_-_2.jpg",
  alt: "Aerial view of flooded land and neighbourhoods in Chennai during the floods",
  scene: "Chennai during the floods, aerial view",
  author: "Veethika",
  license: "CC BY-SA 4.0",
  page: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Chennai_during_floods_-_2.jpg",
}

const metroPhoto: ResearchPhoto = {
  src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Chennai_Metro_Rail_at_Koyambedu.JPG/1280px-Chennai_Metro_Rail_at_Koyambedu.JPG",
  alt: "A Chennai Metro train at Koyambedu station",
  scene: "Chennai Metro at Koyambedu",
  author: "KARTY JazZ",
  license: "CC BY-SA 4.0",
  page: "https://commons.wikimedia.org/wiki/File:Chennai_Metro_Rail_at_Koyambedu.JPG",
}

const trafficPhoto: ResearchPhoto = {
  src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Kathipara_Chennai.JPG/1280px-Kathipara_Chennai.JPG",
  alt: "The Kathipara junction flyover with traffic in Guindy, Chennai",
  scene: "Kathipara Junction, Guindy",
  author: "Vijayvmail",
  license: "CC BY-SA 3.0",
  page: "https://commons.wikimedia.org/wiki/File:Kathipara_Chennai.JPG",
}

const marketPhoto: ResearchPhoto = {
  src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Flowers_in_Koyambedu_Flower_market.jpg/1280px-Flowers_in_Koyambedu_Flower_market.jpg",
  alt: "Flower stalls at the Koyambedu wholesale flower market in Chennai",
  scene: "Koyambedu flower market, Chennai",
  author: "Kaartic",
  license: "CC BY-SA 3.0",
  page: "https://commons.wikimedia.org/wiki/File:Flowers_in_Koyambedu_Flower_market.jpg",
}

const fishingPhoto: ResearchPhoto = {
  src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Boats_on_Marina_Beach%2C_Chennai.jpg/1280px-Boats_on_Marina_Beach%2C_Chennai.jpg",
  alt: "Fishing boats on the water off Marina Beach, Chennai, at sunrise",
  scene: "Fishing boats off Marina Beach",
  author: "D. Vasanth Kumar",
  license: "CC BY-SA 4.0",
  page: "https://commons.wikimedia.org/wiki/File:Boats_on_Marina_Beach,_Chennai.jpg",
}

export const evidenceSections: EvidenceSection[] = [
  {
    slug: "flooding",
    title: "Flooding & waterlogging — the signature risk",
    paragraphs: [
      "Chennai floods on a cycle, and the causes are documented, not mysterious: reservoir releases, construction on floodplains and encroached waterways, and faulty, incomplete or clogged stormwater drains. The Comptroller and Auditor General categorised the 2015 Tamil Nadu flooding as a “man-made disaster”. Cyclone Michaung in December 2023 proved the pattern had not changed — extreme rain, a closed airport, mass evacuation, and losses in the thousands of crores. Even in a “prepared” year, with GCC reporting most stormwater drains desilted, North Chennai still flooded at monsoon onset in October 2026.",
    ],
    stats: [
      { value: "500+", label: "Deaths in the Nov–Dec 2015 floods (422 officially in Tamil Nadu)" },
      { value: "1.8 million+", label: "People displaced in 2015" },
      { value: "~468 mm / 48h", label: "Rainfall recorded in Cyclone Michaung, Dec 2023" },
      { value: ">₹11,000 crore", label: "Economic loss in Tamil Nadu from Michaung; 17 deaths, >41,000 evacuated" },
    ],
    sources: [
      { name: "2015 South India floods — Wikipedia (CAG findings)", href: "https://en.wikipedia.org/wiki/2015_South_India_floods" },
      { name: "2023 Chennai floods (Michaung) — Wikipedia", href: "https://en.wikipedia.org/wiki/2023_Chennai_floods" },
      { name: "OpenCity — GCC stormwater drain maps, 114 wards", href: "https://data.opencity.in/organization/greater-chennai-corporation" },
    ],
    photos: [floodPhoto],
  },
  {
    slug: "water",
    title: "Water scarcity, lakes & the vanishing marsh",
    paragraphs: [
      "The same city that floods also ran dry: on 19 June 2019 officials declared “Day Zero” as all four main reservoirs emptied after two deficient monsoons, leaving families dependent on tankers and distant pumps. Underneath is a century of storage loss — Chennai's waterbody area shrank from 12.6 km² in 1893 to about 3.2 km² by 2017, and the Pallikaranai marsh, south Chennai's flood sponge, has shrunk from over 5,000 hectares in the 1980s to roughly 1,247 hectares, with a government DGPS survey finding about 38% encroached. Around the marsh, a private tanker economy fills the supply gap, at prices the poorest pay most for.",
    ],
    stats: [
      { value: "19 Jun 2019", label: "“Day Zero” — all four main reservoirs dry" },
      { value: "~11.2 million", label: "People affected by the 2019 water crisis" },
      { value: "12.6 → ~3.2 km²", label: "Chennai waterbody area, 1893 → 2017 (Anna University)" },
      { value: ">5,000 ha → ~1,247 ha", label: "Pallikaranai marsh, 1980s → today; ~38% encroached (DGPS / NGT)" },
    ],
    sources: [
      { name: "2019 Chennai water crisis — Wikipedia", href: "https://en.wikipedia.org/wiki/2019_Chennai_water_crisis" },
      { name: "How the decline of Pallikaranai wetlands is draining Chennai's water security — JFW Online", href: "https://jfwonline.com/article/how-the-decline-of-pallikaranai-wetlands-is-draining-chennais-water-security/" },
    ],
  },
  {
    slug: "heat",
    title: "Extreme heat & the urban heat island",
    paragraphs: [
      "Chennai's heat is humid heat: spells of 41–42 °C with coastal humidity push “feels-like” temperatures far higher, and concretisation, shrinking wetlands and lost tree cover amplify the heat island in exactly the dense, low-income neighbourhoods least able to cope. Outdoor workers absorb the worst of it — one Chennai delivery worker in 2026 reporting described a water bottle that “gets over within an hour”, refilled at residents' homes and temples. Tamil Nadu is a policy leader to build on rather than duplicate: the first state with an overarching Heat Mitigation Strategy, heat vulnerability mapping, and heatwaves declared a state-specific disaster.",
    ],
    stats: [
      { value: "41–42 °C", label: "Humid heat spells, with far higher feels-like temperatures" },
      { value: "Up to 4 °C", label: "Potential urban-heat reduction from cool roofs / passive cooling (UNEP Cool Coalition mapping)" },
      { value: "15–30%", label: "Potential cut in heat illness from the same measures" },
      { value: "1st state", label: "Tamil Nadu: first overarching state Heat Mitigation Strategy; heatwave a state disaster (WRI India)" },
    ],
    sources: [
      { name: "Prioritizing Heat Mitigation — WRI India", href: "https://wri-india.org/initiatives/prioritizing-heat-mitigation" },
      { name: "UN cites Tamil Nadu's cool roof project — Hindu BusinessLine", href: "https://www.thehindubusinessline.com/news/national/un-cites-tamil-nadus-cool-roof-project-as-a-climate-mitigation-innovation/article69694590.ece/amp/" },
    ],
  },
  {
    slug: "mobility",
    title: "Mobility — the backbone is buses, the gap is access",
    paragraphs: [
      "Chennai moves on buses: MTC carries an average of 34.1 lakh passengers a day, and the Metro carried 11.19 crore passengers in 2025, its highest year. Yet ITDP's People Near Transit analysis finds only 36% of the city is within walking distance of high-frequency bus service — proximity to some transit is not the same as usable transit. Chennai One, launched in September 2025, unified MTC, Metro, suburban rail and Namma Yatri autos under a single QR ticket; the weekend-solvable layer now is accessibility, safety, Tamil voice, and first/last-mile help around it, not rebuilding ticketing. Road safety is the dark side: a secondary summary of the official Commissionerate analysis attributes about 45% of Tamil Nadu accidents to two-wheelers — a figure to verify against the official PDF before using it in print (see the honesty box).",
    ],
    stats: [
      { value: "34.1 lakh / day", label: "MTC bus passengers; fleet 3,810 (Aug 2025)" },
      { value: "11.19 crore", label: "Chennai Metro passengers in 2025, its highest year" },
      { value: "61% / 36%", label: "Near at least one transit mode / near high-frequency bus service (ITDP)" },
      { value: "~45%", label: "Share of TN road accidents involving two-wheelers", flag: "Secondary summary of official analysis — verify before print" },
    ],
    sources: [
      { name: "People Near Transit: Chennai — ITDP India", href: "https://itdp.in/location-resources/chennai/" },
      { name: "Chennai launches India's first all-in-one commute app — Hindu BusinessLine", href: "https://www.thehindubusinessline.com/economy/logistics/chennai-launches-indias-first-all-in-one-commute-app/article70080238.ece" },
      { name: "MTC daily transactions after digital ticketing — Hindu BusinessLine", href: "https://www.thehindubusinessline.com/economy/logistics/mtc-chennais-daily-transactions-soar-after-digital-ticket-launch/article70161482.ece" },
    ],
    photos: [metroPhoto, trafficPhoto],
  },
  {
    slug: "waste",
    title: "Waste, plastic & polluted waterways",
    paragraphs: [
      "Chennai generates roughly 6,150 tonnes of waste a day, split mainly between the Kodungaiyur and Perungudi dumps, with very low segregation at source in sampled studies — one review found just 12.5% of wet and 7.4% of dry waste segregated at source. GCC made four-way segregation mandatory in September 2026, with penalties, which makes segregation coaching and pickup tracking a live, buildable problem. The Cooum, Adyar and Buckingham Canal still receive untreated sewage and solid waste; an older World Bank-cited study put roughly 55 million litres a day of untreated sewage and about 7 tonnes a day of solid waste into the Cooum alone — dated, and useful only as an order of magnitude.",
    ],
    stats: [
      { value: "~6,150 t / day", label: "Waste collected by GCC; dumps at Kodungaiyur & Perungudi" },
      { value: "12.5% / 7.4%", label: "Wet / dry waste segregated at source in sampled studies" },
      { value: "4-way", label: "Source segregation made mandatory by GCC, Sep 2026" },
      { value: "~55 MLD", label: "Untreated sewage into the Cooum (older study)", flag: "Dated figure — order of magnitude only" },
    ],
    sources: [
      { name: "Chennai solid waste review — Atlantis Press", href: "https://www.atlantis-press.com/article/126023013.pdf" },
      { name: "GCC four-way segregation mandate — HiIndia", href: "https://hiindia.com/chennai-corporation-makes-four-way-waste-segregation-mandatory-warns-of-penalties/" },
    ],
  },
  {
    slug: "air",
    title: "Air pollution — better than Delhi, not “good”",
    paragraphs: [
      "Chennai's air has improved slowly and unevenly. Under the National Clean Air Programme, PM10 fell only 12.1% over seven years, from 66 µg/m³ in 2017–18 to 58 µg/m³ in 2024–25 — far slower than Mumbai or Kolkata, and only just under the 60 µg/m³ national standard. Climate Trends' analysis of the city's monitoring stations puts average AQI down from 114 in 2015 to 75 in 2025, still nowhere near the “Good” band. The pollution that matters is hyperlocal and seasonal: industrial North Chennai (Manali, Ennore, Kodungaiyur), the Perungudi dump, road and construction dust, and Diwali spikes that pushed Perungudi to an AQI of 217.",
    ],
    stats: [
      { value: "66 → 58 µg/m³", label: "PM10, 2017–18 → 2024–25 — only −12.1% under NCAP (MoEFCC)" },
      { value: "114 → 75", label: "Average AQI, 2015 → 2025 (Climate Trends, 8 stations)" },
      { value: "217", label: "AQI spike at Perungudi in TNPCB Diwali reporting" },
      { value: "0", label: "Major Indian cities, Chennai included, meeting the “Good” 0–50 AQI band" },
    ],
    sources: [
      { name: "Chennai lags in air-quality progress under NCAP — Construction World (MoEFCC data)", href: "https://www.constructionworld.in/amp/policy-updates-and-economic-news/chennai-lags-behind-in-air-quality-progress-under-ncap/76712" },
      { name: "Chennai AQI drops 34% in 10 years — Climate Trends analysis", href: "https://bharathorizon.com/world/climate-change/chennai-aqi-drops-34-in-10-years-but-not-safe-yet.html" },
    ],
  },
  {
    slug: "health",
    title: "Public health — dengue, anaemia, elders",
    paragraphs: [
      "Dengue is a monsoon-season systems failure with a hackable shape: breeding-site reporting, fever-camp discovery, and follow-up — not diagnosis by app. In 2026 to early October, Tamil Nadu reported around 20,000 cases and Chennai 4,592, with 1,293 in September alone, while thousands of mosquito-eradication workers and over a hundred fever camps a day ran across the city. Underneath the surge sits a chronic burden: NFHS-5 analysis puts Chennai child anaemia at 55.3%, and newer-round reporting shows obesity and diabetes climbing. For elders, the national Elder Line 14567 operates in Tamil Nadu precisely because isolation, abuse, and pension and legal confusion are common — its service taxonomy is a ready-made workflow for a Tamil voice companion with human escalation.",
    ],
    stats: [
      { value: "4,592", label: "Dengue cases in Chennai in 2026 to early Oct (1,293 in September alone)" },
      { value: "55.3%", label: "Child anaemia in Chennai (NFHS-5 analysis)" },
      { value: "3,703", label: "Mosquito-eradication workers deployed; 100+ fever camps a day" },
      { value: "14567", label: "Elder Line — operational in Tamil Nadu for isolation, abuse, pension & legal help (PIB)" },
    ],
    sources: [
      { name: "Dengue reporting, Oct 2026 — The Hindu (via Scoopfeeds)", href: "https://scoopfeeds.com/article/5c97dd7a-f41e-59b9-a1b8-c093b4e3b69f" },
      { name: "Elder Line 14567 — Press Information Bureau", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1759358&ui=2&tf=1&pli=1&reg=48&lang=2" },
    ],
  },
  {
    slug: "livelihoods",
    title: "Livelihoods — informal Chennai runs the city",
    paragraphs: [
      "Most of Chennai works informally, and most of its problems are information problems. Gig and platform workers gained a Tamil Nadu welfare board in 2023 and air-conditioned rest lounges in Chennai in June 2025, yet safe conditions, toilets, drinking water and rest spaces remain unsystematised — especially for women, 58% of whom cited safety concerns in one small-sample Chennai survey (flagged: small sample). Street vendors' route to credit under PM SVANidhi turns on a Certificate of Vending or a Letter of Recommendation, so their core blocker is documentation and discoverability, not willingness to repay. Fisherfolk, below, have the same shape of problem: no price or buyer discovery power.",
    ],
    stats: [
      { value: "2023", label: "TN welfare board created for online gig / platform workers" },
      { value: "Jun 2025", label: "AC rest lounges for platform workers opened in Chennai" },
      { value: "58%", label: "Women gig workers citing safety as the main concern", flag: "Small primary sample — directional only" },
      { value: "₹10k / 20k / 50k", label: "PM SVANidhi loan tranches — gated on vending certificate or LoR documentation" },
    ],
    sources: [
      { name: "Tamil Nadu gig worker study — Fairwork / TN State Planning Commission", href: "https://fair.work/20260213_Gig%20Worker%20Report.pdf" },
      { name: "PM SVANidhi scheme — IBEF (MoHUA programme)", href: "https://dev.ibef.org/government-schemes/pm-svanidhi-scheme" },
    ],
    photos: [marketPhoto],
  },
  {
    slug: "education",
    title: "Education, skilling, Tamil & disability access",
    paragraphs: [
      "Chennai's education gap is an access gap, not an infrastructure gap. GCC identified 7,302 out-of-school children in the city; a 2026 camp enrolled 509 in schools and 263 in ITIs, including children with disabilities needing further support. For children with disabilities, Tamil Nadu research finds the barriers are transport cost and safety, teacher training, and learning materials in appropriate formats — the weakest-scoring entitlement in a Chennai higher-education study — rather than ramps alone. The digital divide compounds it: studies summarised for Tamil Nadu report roughly 30–40% of students facing digital-divide barriers (directional; journal quality varies), and about 65% of first-generation learners preferring Tamil–English bilingual teaching.",
    ],
    stats: [
      { value: "7,302", label: "Out-of-school children identified by GCC in Chennai" },
      { value: "509 + 263", label: "Children enrolled into schools + ITIs at a 2026 GCC camp" },
      { value: "~30–40%", label: "TN students facing digital-divide barriers", flag: "Directional — source journal quality varies" },
      { value: "~65%", label: "First-generation learners preferring Tamil–English bilingual teaching" },
    ],
    sources: [
      { name: "Disability & schooling barriers in Tamil Nadu — PMC study", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10431638/" },
      { name: "Chennai disability camp links 772 children to schools & ITIs — Urban Acres (GCC)", href: "https://urbanacres.in/chennai-disability-camp-links-772-children-to-schools-and-itis/" },
    ],
  },
  {
    slug: "coast",
    title: "Coast, Ennore & fisher communities",
    paragraphs: [
      "Over 41% of Tamil Nadu's coast is eroding, and the Chennai coast itself measured 36.7% eroding in long-term analysis. At Ennore Creek, fly ash from thermal plants (the Ennore plant is cited at 2,500 tonnes a day), leaking ash pipelines and hot-water effluents have collapsed the fish and prawn catch that over 8,000 regular fishers and about 1,000 Irular tribal fishers depend on; 90% of surveyed fishers in one review reported reduced catch. During the Michaung floods, the December 2023 Ennore oil spill affected 2,301 fisher families and damaged 787 boats across roughly 20 km². The weekend-solvable slice is evidence and market tools — catch and pollution reporting, spill alerts, price discovery — not ash remediation.",
    ],
    stats: [
      { value: ">41%", label: "Of Tamil Nadu's coast affected by erosion; 36.7% on the Chennai coast" },
      { value: "2,500 t / day", label: "Fly ash cited from the Ennore thermal plant (ETPS)" },
      { value: "8,000+", label: "Regular fishers dependent on Ennore Creek, plus ~1,000 Irular fishers" },
      { value: "2,301 families", label: "Affected by the Dec 2023 Ennore oil spill; 787 boats damaged, ~20 km² spill" },
    ],
    sources: [
      { name: "Industrialisation pushes Ennore towards destruction — IDR Online", href: "https://idronline.org/article/rights/photo-essay-industrialisation-pushes-ennore-towards-destruction/?amp" },
      { name: "Oil spill in Ennore brings fishing to a standstill — ICSF", href: "https://icsf.net/newss/tamil-nadu-oil-spill-in-ennore-brings-fishing-to-a-standstill/" },
    ],
    photos: [fishingPhoto],
  },
  {
    slug: "housing",
    title: "Housing, informal settlements & resettlement",
    paragraphs: [
      "Chennai's resettlement colonies hold the city's displaced at arm's length: Perumbakkam alone houses roughly 60,000 people in about 24,000 houses, 25–30 km from the neighbourhoods families were evicted from, with livelihood proximity, schooling continuity and information access all broken by the move. Researchers explicitly document a digital divide inside the colonies, and IRCDUC's “Resettled in the Paths of Floods” (Dec 2023) warns that resettlement has moved some families into flood-vulnerable sites — from one risk to another. Nobody hacks their way to new housing in a weekend; the solvable slice is entitlement, transport and service navigation for resettled families, and case tools for the NGOs who work with them.",
    ],
    stats: [
      { value: "~60,000", label: "People resettled at Perumbakkam alone" },
      { value: "25–30 km", label: "Distance from original habitations to the resettlement colonies" },
      { value: "~24,000", label: "Houses built across the major resettlement sites" },
    ],
    sources: [
      { name: "Resettlement & digital divide research — ResearchGate", href: "https://www.researchgate.net/figure/a-woman-and-her-child-watching-the-demolition-of-their-home-in-an-inner-city-slum_fig2_370802781" },
      { name: "OpenCity — Chennai slum locations & IRCDUC resettlement report", href: "https://data.opencity.in/organization/greater-chennai-corporation" },
    ],
  },
  {
    slug: "governance",
    title: "Governance & service-delivery pain points",
    paragraphs: [
      "Citizens reach Greater Chennai Corporation through the 1913 helpline, the Namma Chennai app and the online grievance portal, with category deadlines such as a day for garbage clearance or mosquito menace. The pain is familiar everywhere and specific here: no visibility on complaint status, duplicates and reopenings, no feedback loop to resident welfare associations, and thin Tamil and voice access for low-literacy users. One concrete hook stands out: ahead of the northeast monsoon, GCC opened volunteer registration for individuals, NGOs, associations and corporate groups through the upgraded Namma Chennai app — the matching, rostering and needs-mapping layer around such registries is exactly what community groups still lack. One caution: the research could not verify GCC's own portal content directly (see the honesty box), so confirm current service URLs before printing them.",
    ],
    stats: [
      { value: "1913", label: "GCC citizen helpline, alongside the Namma Chennai app & grievance portal" },
      { value: "1 day", label: "Example category deadline in app reporting (garbage clearance / mosquito menace)" },
      { value: "3 channels", label: "Helpline, app, web portal — with no shared status view for citizens" },
    ],
    sources: [
      { name: "GCC complaint channels & deadlines — Magicbricks reporting", href: "https://content.magicbricks.com/property-news/chennai-real-estate-news/appsolutely-great/99163.html" },
      { name: "GCC monsoon volunteer registration — disaster-response reporting", href: "https://ngos.ai/cat/from-volunteers-to-first-responders-how-cities-are-rethinking-community-disaster-response/" },
    ],
  },
  {
    slug: "communities",
    title: "Beyond government — communities, culture & animals",
    paragraphs: [
      "The 2015 floods mobilised thousands of Chennai volunteers — one foundation alone accounts for 5,000 or more — and the persistent lesson was that coordination, not goodwill, was the bottleneck: who needs what, where, and who is already going. Every disaster since has rebuilt the same ad-hoc WhatsApp control rooms. Animal welfare shows the same pattern at city scale: Chennai is the home of Blue Cross of India, the pioneer of animal birth control, which reports 246,628 spay/neuter surgeries and 336,663 rescues since 1959 (the organisation's own counts). GCC's 2026 drive targeted vaccinating about 2 lakh stray dogs, scaling 15 ABC centres from roughly 200 to 400 surgeries a day. The buildable gaps are mundane and real: rescue triage with GPS return-location, per-street vaccination records, foster matching, and camp scheduling.",
    ],
    stats: [
      { value: "246,628", label: "ABC spay/neuter surgeries by Blue Cross of India since 1959", flag: "Organisation's own counts" },
      { value: "336,663", label: "Rescues by Blue Cross of India since 1959", flag: "Organisation's own counts" },
      { value: "~2 lakh", label: "Stray dogs targeted in GCC's 2026 anti-rabies vaccination drive" },
      { value: "200 → 400 / day", label: "ABC surgeries per day, scaling across 15 centres" },
    ],
    sources: [
      { name: "Blue Cross of India — what we do", href: "http://bluecrossofindia.org/What-We-Do.html" },
      { name: "GCC targets 2 lakh stray dogs — Bilkul Online", href: "https://bilkulonline.com/2026/08/05/chennai-corporation-targets-2-lakh-stray-dogs-in-major-anti-rabies-vaccination-drive/" },
    ],
  },
]

/* ---------------- How the tracks came from this ---------------- */

export interface TrackMapping {
  track: string
  href: string
  slugs: string[]
  note: string
}

export const trackMappings: TrackMapping[] = [
  {
    track: "Track 1 — Monsoon-Ready Chennai",
    href: "#tracks",
    slugs: ["flooding", "water", "coast"],
    note: "Flood alerts, relief matching, reservoir dashboards, fisherfolk safety.",
  },
  {
    track: "Track 2 — Cool & Clean-Air Chennai",
    href: "#tracks",
    slugs: ["heat", "air"],
    note: "Heat-safe routes, rest-point discovery, hyperlocal AQI advisories in Tamil.",
  },
  {
    track: "Track 3 — Move Chennai, For Everyone",
    href: "#tracks",
    slugs: ["mobility", "livelihoods"],
    note: "Accessibility and safety layers on Chennai One; driver livelihoods too.",
  },
  {
    track: "Track 4 — Work, Learning & Local Business",
    href: "#tracks",
    slugs: ["livelihoods", "education"],
    note: "Vendor documentation, ONEST discovery, fisher price power, Tamil-first learning.",
  },
  {
    track: "Track 5 — Care Closer to Home",
    href: "#tracks",
    slugs: ["health", "education"],
    note: "Dengue reporting and follow-up, elder check-ins, accessible formats. Human escalation always.",
  },
  {
    track: "Track 6 — Neighbourhood Commons",
    href: "#tracks",
    slugs: ["communities", "governance", "housing"],
    note: "Volunteer coordination, RWA tools, animal-care ledgers, neighbourhood memory.",
  },
]

/* ---------------- Honesty box ---------------- */

export interface NotVerified {
  title: string
  detail: string
}

export const notVerified: NotVerified[] = [
  {
    title: "GCC portal content",
    detail:
      "The fetch of chennaicorporation.gov.in returned a default Apache Tomcat page on 20 Oct 2026. Current GCC service and grievance URLs, and any GCC developer API, must be confirmed live or with GCC directly before printing a handbook.",
  },
  {
    title: "data.tn.gov.in & bhashini.gov.in",
    detail:
      "Direct fetches of both homepages failed in this run (DNS/timeout). Their descriptions here rely on OGD progress updates, re3data, PIB and secondary analyses — confirm the TNOGD catalogue and Bhashini/ULCA developer URLs live before relying on them.",
  },
  {
    title: "No verified public Chennai GTFS feed",
    detail:
      "No public GTFS / GTFS-Realtime feed for Chennai was found. Absence in this search is not proof none exists (an unpublicised CUMTA feed might) — ask CUMTA, MTC and CMRL directly. The event plan therefore builds a static GTFS into the Hack Pack.",
  },
  {
    title: "NFHS edition for the 2026 health figures",
    detail:
      "The Tamil Nadu obesity, diabetes and caesarean figures were reported as a newer NFHS round in May 2026 coverage. Verify the exact fact sheet and edition before quoting them in event materials.",
  },
  {
    title: "Road-accident six-month totals",
    detail:
      "The Tamil Nadu six-month accident and death totals come from a secondary summary of the official Commissionerate of Transport & Road Safety analysis. Verify against the official PDF before publishing.",
  },
  {
    title: "Artist & creative-economy statistics",
    detail:
      "No robust Chennai source on artist livelihoods was found in this run. Track 6 therefore proposes infrastructure for artists and cultural groups, without sized claims about the creative economy.",
  },
  {
    title: "Tool licences & pricing",
    detail:
      "Avni, KoboToolbox / ODK and Setu licence and pricing descriptions come from general ecosystem knowledge, not page-verified reads in this run.",
  },
]

/* ---------------- Full sources ---------------- */

export const researchSources: ResearchSource[] = [
  { name: "2015 South India floods — Wikipedia (CAG “man-made disaster”)", href: "https://en.wikipedia.org/wiki/2015_South_India_floods" },
  { name: "2023 Chennai floods / Cyclone Michaung — Wikipedia", href: "https://en.wikipedia.org/wiki/2023_Chennai_floods" },
  { name: "2019 Chennai water crisis — Wikipedia", href: "https://en.wikipedia.org/wiki/2019_Chennai_water_crisis" },
  { name: "Pallikaranai wetlands decline — JFW Online", href: "https://jfwonline.com/article/how-the-decline-of-pallikaranai-wetlands-is-draining-chennais-water-security/" },
  { name: "TN Heat Mitigation Strategy — WRI India", href: "https://wri-india.org/initiatives/prioritizing-heat-mitigation" },
  { name: "Cool roofs in Chennai — Hindu BusinessLine (UNEP)", href: "https://www.thehindubusinessline.com/news/national/un-cites-tamil-nadus-cool-roof-project-as-a-climate-mitigation-innovation/article69694590.ece/amp/" },
  { name: "People Near Transit: Chennai — ITDP India", href: "https://itdp.in/location-resources/chennai/" },
  { name: "Chennai One launch — Hindu BusinessLine", href: "https://www.thehindubusinessline.com/economy/logistics/chennai-launches-indias-first-all-in-one-commute-app/article70080238.ece" },
  { name: "MTC ridership & digital ticketing — Hindu BusinessLine", href: "https://www.thehindubusinessline.com/economy/logistics/mtc-chennais-daily-transactions-soar-after-digital-ticket-launch/article70161482.ece" },
  { name: "NCAP PM10 progress — MoEFCC data via Construction World", href: "https://www.constructionworld.in/amp/policy-updates-and-economic-news/chennai-lags-behind-in-air-quality-progress-under-ncap/76712" },
  { name: "Chennai AQI 2015–2025 — Climate Trends analysis", href: "https://bharathorizon.com/world/climate-change/chennai-aqi-drops-34-in-10-years-but-not-safe-yet.html" },
  { name: "Dengue in TN & Chennai, Oct 2026 — The Hindu via Scoopfeeds", href: "https://scoopfeeds.com/article/5c97dd7a-f41e-59b9-a1b8-c093b4e3b69f" },
  { name: "Elder Line 14567 — Press Information Bureau", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1759358&ui=2&tf=1&pli=1&reg=48&lang=2" },
  { name: "UHI launch — Press Information Bureau", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2278987&reg=3&lang=1" },
  { name: "TN platform gig workers — Fairwork / State Planning Commission", href: "https://fair.work/20260213_Gig%20Worker%20Report.pdf" },
  { name: "PM SVANidhi — IBEF", href: "https://dev.ibef.org/government-schemes/pm-svanidhi-scheme" },
  { name: "Ennore industrialisation photo essay — IDR Online", href: "https://idronline.org/article/rights/photo-essay-industrialisation-pushes-ennore-towards-destruction/?amp" },
  { name: "Ennore oil spill — ICSF", href: "https://icsf.net/newss/tamil-nadu-oil-spill-in-ennore-brings-fishing-to-a-standstill/" },
  { name: "Disability & schooling in Tamil Nadu — PMC", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10431638/" },
  { name: "OpenCity — Greater Chennai Corporation datasets", href: "https://data.opencity.in/dataset/?organization=greater-chennai-corporation&license_id=other-pd" },
  { name: "TNOGD progress update — data.gov.in artefacts", href: "https://artefacts.data.gov.in/progress-update-of-tamil-nadu-open-government-data-tnogd-project-as-on-31st-october-2021/" },
  { name: "OGD India — data.gov.in air quality datasets", href: "https://data.gov.in/dataset-group-name/Air Quality" },
  { name: "Blue Cross of India — what we do", href: "http://bluecrossofindia.org/What-We-Do.html" },
  { name: "GCC stray-dog vaccination drive — Bilkul Online", href: "https://bilkulonline.com/2026/08/05/chennai-corporation-targets-2-lakh-stray-dogs-in-major-anti-rabies-vaccination-drive/" },
  { name: "Beckn Protocol — live open networks", href: "https://becknprotocol.io/" },
  { name: "Georgian HackON 2026 — the model adapted", href: "https://georgian-hackon.vercel.app/" },
]
