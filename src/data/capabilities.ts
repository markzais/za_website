export type Capability = {
  slug: string;
  index: string;
  icon: "strategy" | "generative" | "security" | "optimization" | "data-science" | "decision-science";
  name: string;
  shortName: string;
  summary: string;
  definition: string;
  whenToEngage: string[];
  whatYouGet: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "data-science-and-machine-learning",
    index: "01",
    icon: "data-science",
    name: "Data Science and Machine Learning",
    shortName: "Data Science",
    summary: "Data science and machine learning, from descriptive to prescriptive analytics, built for decision impact.",
    definition:
      "We build across the full spectrum of analytics and machine learning, descriptive, diagnostic, predictive, and prescriptive, scoped to decision impact. That includes forecasting, natural language processing, and computer vision, grounded in statistical rigor: time series, experimentation, and uncertainty quantification, carried from model development through deployment. Toolset depth includes Python, R, SQL, SAS, MATLAB, Spark and Databricks, and cloud platforms including AWS and Google Cloud.",
    whenToEngage: [
      "Forecasting or workforce modeling needs statistical rigor, not a black box.",
      "A machine learning, NLP, or computer vision solution needs to be explainable to executives, not just accurate.",
      "Uncertainty quantification matters because the decision is expensive to get wrong.",
      "Models need a path from prototype to production, not a notebook that never ships.",
    ],
    whatYouGet: [
      "Descriptive-to-prescriptive analytics built and validated with statistical rigor.",
      "Machine learning, NLP, and computer vision solutions scoped to decision impact.",
      "A deployment path from prototype to production.",
      "Toolset depth across Python, R, SQL, SAS, MATLAB, Spark and Databricks, AWS, and Google Cloud.",
    ],
  },
  {
    slug: "operations-research-and-optimization",
    index: "02",
    icon: "optimization",
    name: "Operations Research and Optimization",
    shortName: "Operations Research",
    summary: "Mathematical modeling for resource allocation, scheduling, logistics, and investment planning.",
    definition:
      "We build mathematical models for resource allocation, scheduling, logistics, and investment planning, backed by doctoral research and peer-reviewed publication. That includes simulation and simulation-optimization for capital and portfolio decisions, metaheuristics and large-scale optimization such as tabu search, GRASP, dynamic programming, and Markov models, and rigorous economic and cost-benefit analysis.",
    whenToEngage: [
      "A resource allocation or scheduling problem has too many variables for intuition alone.",
      "Capital or portfolio decisions need simulation-optimization, not a static spreadsheet.",
      "Large-scale planning requires metaheuristics beyond standard solvers.",
      "Leadership needs an economic and cost-benefit case that will hold up under scrutiny.",
    ],
    whatYouGet: [
      "A mathematical model built for your actual constraints, not a textbook approximation.",
      "Simulation-optimization results leadership can act on with confidence.",
      "Rigorous economic and cost-benefit analysis, documented and defensible.",
      "Delivery grounded in peer-reviewed, doctoral-level research.",
    ],
  },
  {
    slug: "analytics-strategy-and-decision-science",
    index: "03",
    icon: "decision-science",
    name: "Analytics Strategy and Decision Science",
    shortName: "Decision Science",
    summary: "Enterprise analytics strategy, operating models, and decision-ready products.",
    definition:
      "We build enterprise analytics strategy, operating models, and governance, then translate the output into executive decision support: distilling complexity into decision-ready products rather than dashboards no one opens. This includes building analytics organizations, communities of practice, and data governance bodies, plus direct analytics talent development and technical mentorship.",
    whenToEngage: [
      "Analytics exists across the organization, but no operating model or governance ties it together.",
      "Executives need decision-ready products, not another dashboard no one opens.",
      "You are building an analytics organization, a community of practice, or a governance body from scratch.",
      "Your analytics talent needs technical mentorship to reach the next level.",
    ],
    whatYouGet: [
      "An analytics operating model and governance structure suited to your organization.",
      "Decision-ready products that distill complexity into a recommendation, not just a chart.",
      "A blueprint for a community of practice and for developing analytics talent.",
      "Direct technical mentorship for your teams.",
    ],
  },
  {
    slug: "ai-security-and-assurance",
    index: "04",
    icon: "security",
    name: "AI Security and Assurance",
    shortName: "AI Security",
    summary: "Securing AI systems, and the decisions they inform, for regulated and mission-critical environments.",
    definition:
      "We assess and assure AI systems before they fail in public. That includes AI risk assessment, red-teaming concepts and model assurance, governance for safe deployment in regulated and mission-critical environments, and data protection and responsible-use policy that legal teams can stand behind.",
    whenToEngage: [
      "An AI system will inform decisions with legal, financial, or safety consequences.",
      "Regulators or auditors are asking questions your team cannot yet answer.",
      "You need a risk assessment and assurance review before deployment, not after an incident.",
      "Data protection and responsible-use policy have not kept pace with your AI ambitions.",
    ],
    whatYouGet: [
      "An AI risk assessment scoped to how the system will actually be used.",
      "Model assurance and red-teaming concepts suited to regulated environments.",
      "A governance framework for safe deployment in mission-critical settings.",
      "Data protection and responsible-use policy your legal team can stand behind.",
    ],
  },
  {
    slug: "generative-ai-and-agents",
    index: "05",
    icon: "generative",
    name: "Generative AI and AI Agents",
    shortName: "Generative AI",
    summary: "Applied generative AI and agentic systems, built for measured adoption.",
    definition:
      "We take generative AI from use-case discovery through evaluation and deployment strategy. That includes agentic workflow and automation design, retrieval-augmented generation over enterprise knowledge, build-vs-buy and vendor evaluation, and human-in-the-loop design wherever a decision carries real consequence.",
    whenToEngage: [
      "You need to separate genuine LLM use cases from expensive experiments.",
      "You are evaluating agentic automation and need an honest build-vs-buy assessment.",
      "A retrieval-augmented generation system needs to be trustworthy enough for real decisions.",
      "High-stakes workflows require human-in-the-loop design, not full automation by default.",
    ],
    whatYouGet: [
      "Use-case discovery and evaluation grounded in business value, not hype.",
      "Agentic workflow design with clear human checkpoints where stakes are high.",
      "A retrieval-augmented generation architecture built on your enterprise knowledge.",
      "Vendor and build-vs-buy guidance free of vendor incentives.",
    ],
  },
  {
    slug: "ai-strategy-and-governance",
    index: "06",
    icon: "strategy",
    name: "AI Strategy and Governance",
    shortName: "AI Strategy",
    summary:
      "Enterprise AI strategy, roadmaps, and operating models that survive contact with budget cycles and boards.",
    definition:
      "We build enterprise AI strategy, roadmaps, and operating models grounded in your actual constraints. That includes responsible AI and governance frameworks, honest readiness and maturity assessment, and direct advising for executives and boards on AI adoption and digital transformation. Every recommendation ties back to a measurable business outcome.",
    whenToEngage: [
      "Leadership needs a defensible AI roadmap, not a slide deck of buzzwords.",
      "The board is asking for an AI governance framework and no one owns the answer.",
      "Multiple pilots exist. None has scaled, and it is unclear why.",
      "You need a readiness and maturity assessment before committing new investment.",
    ],
    whatYouGet: [
      "A prioritized AI roadmap tied to measurable business outcomes.",
      "A responsible AI and governance framework suited to your regulatory environment.",
      "An honest AI readiness and maturity assessment, not a vendor pitch.",
      "A briefing your board and your engineers will both trust.",
    ],
  },
];

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}
