export type Principle = {
  index: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Find the real problem",
    body: "The most valuable engagements begin before any data work: with the question underneath the question. What decision are you actually trying to make, what would change with a better answer, and what evidence would that answer require? Getting this right multiplies the value of everything downstream.",
  },
  {
    index: "02",
    title: "Right-size the solution",
    body: "Not every problem needs artificial intelligence, and no method outperforms the data behind it. We size the solution to both the decision and the data actually available, applying the simplest method that answers the question with confidence, from a well-framed spreadsheet model to a large-scale simulation-optimization platform. The right tool is the one that gets the decision made.",
  },
  {
    index: "03",
    title: "Build for decisions, not dashboards",
    body: "Analysis creates value the moment someone acts on it. Every engagement ends in something an executive can act on: a recommendation, a threshold, a plan, a number with a confidence interval attached. We measure our work by the decisions it improves, not the artifacts it produces.",
  },
  {
    index: "04",
    title: "Translate at every level",
    body: "Technical rigor earns its impact in the boardroom, and executive vision earns its credibility in engineering review. We work fluently at both altitudes, so strategy holds up under implementation and implementation holds up under scrutiny.",
  },
  {
    index: "05",
    title: "Transfer capability",
    body: "Our standard is an engagement that leaves you stronger, not dependent. And because analytics is never really finished (conditions change, models drift, and yesterday's right answer can quietly become tomorrow's wrong one), we build monitoring, governance, and knowledge transfer into the work itself, closing the loop back to the original decision so the capability endures long after the engagement ends.",
  },
];
