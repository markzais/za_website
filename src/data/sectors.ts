export type Sector = {
  slug: string;
  name: string;
  heritage?: boolean;
  blurb: string;
  applications: string[];
  note?: string;
};

export type CaseStep = {
  stage: string;
  title: string;
  body: string;
};

export const damageIntelligence = {
  sector: "Property Insurance and Claims",
  title: "Damage Intelligence",
  summary:
    "An AI damage intelligence platform built with a public adjusting firm. It spots storms, floods, and fires in a county as they happen, works out which properties were most likely affected, and turns that into a short, ranked list for the firm to review.",
  steps: [
    {
      stage: "Signal",
      title: "Public data",
      body: "Storm reports, parcel records, permits, and imagery show where an event hit.",
    },
    {
      stage: "Score",
      title: "AI agents",
      body: "Triage, enrich, and rank the properties most likely to need help.",
    },
    {
      stage: "Act",
      title: "People",
      body: "The firm reviews the list, applies judgment, and makes the connection.",
    },
  ] satisfies CaseStep[],
  closing: "The same pattern finds listing, investment, and repair opportunities in real estate.",
};

export const sectors: Sector[] = [
  {
    slug: "defense-and-national-security",
    name: "Defense and National Security",
    heritage: true,
    blurb:
      "Our roots are here. Two decades directing analytics and AI programs at the highest levels of national security, where the cost of a wrong decision is measured in lives and billions of dollars. That standard of rigor now serves every client we take on.",
    applications: [
      "Enterprise AI and analytics strategy for global defense organizations",
      "Simulation-optimization for force modernization and investment planning",
      "Workforce forecasting and personnel analytics at national scale",
    ],
    note: "Principal holds an active TS/SCI security clearance, available for classified and sensitive engagements.",
  },
  {
    slug: "property-insurance-and-claims",
    name: "Property Insurance and Claims",
    blurb:
      "When storms, floods, and fires strike, the first question is which properties need help. We build AI systems that turn public data into a short, ranked list, so adjusters and claims teams spend their time where it matters most.",
    applications: [
      "Event detection from storm, flood, and fire data as events unfold",
      "Property-level damage likelihood scoring from parcel, permit, and imagery data",
      "Ranked, reviewable work queues for public adjusters and claims teams",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb:
      "The same methods that find damaged properties find listing, investment, and repair opportunities. We help agents, investors, developers, and the trades put AI to work where it pays off, with guardrails that protect clients and reputations.",
    applications: [
      "Opportunity scoring for listings, acquisitions, and repair work from public property data",
      "AI workflow adoption for agents, investors, developers, and trades",
      "AI use policies, fair housing review, and wire fraud safeguards",
    ],
  },
  {
    slug: "federal-state-and-public-sector",
    name: "Federal, State, and Public Sector",
    blurb:
      "Public institutions face private-sector stakes without private-sector margins for error. We bring the same rigor to policy analysis, resource allocation, and program evaluation.",
    applications: [
      "Congressionally directed studies and resource realignment analysis",
      "Program evaluation and cost-benefit analysis for public investment",
      "Analytics governance and operating models for public agencies",
    ],
  },
  {
    slug: "logistics-and-supply-chain",
    name: "Logistics and Supply Chain",
    blurb:
      "The optimization math that shapes billion-dollar fleet modernization applies directly to network design, fleet planning, and distribution. We model the constraints that actually govern your operation.",
    applications: [
      "Fleet planning and vehicle lifecycle investment strategy",
      "Network design and distribution optimization",
      "Scheduling and resource allocation under real-world constraints",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    blurb:
      "Capital allocation, portfolio decisions, and risk all reward the same discipline: rigorous modeling under uncertainty, translated into a decision an executive can defend.",
    applications: [
      "Simulation-optimization for capital and portfolio allocation",
      "Forecasting and risk modeling under uncertainty",
      "AI governance and model assurance for regulated environments",
    ],
  },
  {
    slug: "healthcare-and-life-sciences",
    name: "Healthcare and Life Sciences",
    blurb:
      "Healthcare decisions carry the same weight as defense decisions: high stakes, heavy regulation, and no room for a model that cannot be explained. We build analytics that clinical and executive stakeholders can both trust.",
    applications: [
      "Workforce and capacity forecasting",
      "Resource allocation and scheduling optimization",
      "Responsible AI governance for clinical and operational systems",
    ],
  },
  {
    slug: "energy-and-industrials",
    name: "Energy and Industrials",
    blurb:
      "Asset-heavy industries live and die by capital planning and scheduling. The same simulation-optimization methods that shape defense infrastructure investment apply to plant, grid, and asset lifecycle decisions.",
    applications: [
      "Capital and infrastructure investment planning",
      "Asset lifecycle and maintenance scheduling optimization",
      "Operations research for large-scale industrial systems",
    ],
  },
  {
    slug: "technology-and-commercial-enterprise",
    name: "Technology and Commercial Enterprise",
    blurb:
      "Fast-moving organizations need AI strategy that outlives the current hype cycle, and analytics operating models built to scale with the business, not around it.",
    applications: [
      "Enterprise AI strategy and governance",
      "Generative AI and agentic workflow deployment strategy",
      "Analytics organization design and technical talent development",
    ],
  },
];
