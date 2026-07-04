export type Stat = {
  id: string;
  value: string;
  label: string;
  context: string;
  tags: string[];
};

export const stats: Stat[] = [
  {
    id: "fleet",
    value: "$1.5B",
    label: "Global investment strategy",
    context: "Vehicle fleet modernization shaped by economic analysis and simulation-optimization.",
    tags: ["home", "operations-research-and-optimization"],
  },
  {
    id: "aviation",
    value: "$2B",
    label: "Aviation training portfolio",
    context: "Directed a study shaping long-term modernization and investment decisions.",
    tags: ["operations-research-and-optimization", "industries"],
  },
  {
    id: "construction",
    value: "$40B",
    label: "Infrastructure planning supported",
    context: "Directed optimization platforms supporting large-scale construction and infrastructure planning.",
    tags: ["operations-research-and-optimization", "home"],
  },
  {
    id: "enterprise-ai",
    value: "$13B",
    label: "Budget, 70,000+ personnel",
    context: "Led enterprise AI and analytics strategy for a global organization.",
    tags: ["ai-strategy-and-governance", "home"],
  },
  {
    id: "compensation",
    value: "$2.7B",
    label: "Compensation analytics, annually",
    context: "Directed compensation and housing allowance analytics optimized at national scale.",
    tags: ["analytics-strategy-and-decision-science"],
  },
  {
    id: "realignment",
    value: "$1.1B",
    label: "Resource realignment",
    context: "Congressionally directed studies influencing resource realignment.",
    tags: ["analytics-strategy-and-decision-science", "industries"],
  },
  {
    id: "contracts",
    value: "$600M+",
    label: "New contract awards",
    context: "Technical solutions and proposals generating new contract awards.",
    tags: ["generative-ai-and-agents"],
  },
  {
    id: "workforce",
    value: "547,000+",
    label: "Employees forecasted",
    context: "Enterprise workforce forecasting at national scale.",
    tags: ["data-science-and-machine-learning", "home"],
  },
  {
    id: "experience",
    value: "20+",
    label: "Years in analytics and AI leadership",
    context: "PhD in Operations Research, with leadership across defense, government, academia, and industry.",
    tags: ["home", "about"],
  },
];

export function getStatsByTag(tag: string) {
  return stats.filter((s) => s.tags.includes(tag));
}
