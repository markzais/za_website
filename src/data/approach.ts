export type Principle = {
  index: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Find the real problem",
    body: "Before any data work begins, we find the question underneath the question: the decision you actually need to make and the evidence it truly requires.",
  },
  {
    index: "02",
    title: "Right-size the solution",
    body: "We match the method to the decision and the data at hand, applying the simplest approach that answers the question with confidence, whether that is a spreadsheet model or a simulation-optimization platform.",
  },
  {
    index: "03",
    title: "Every deliverable drives a decision",
    body: "Every engagement produces something an executive can act on directly: a recommendation, a threshold, a plan, or a number with a confidence interval attached.",
  },
  {
    index: "04",
    title: "Translate at every level",
    body: "We work fluently in both the boardroom and the engineering review, so strategy holds up under implementation and implementation holds up under scrutiny.",
  },
  {
    index: "05",
    title: "Transfer capability",
    body: "We build monitoring, governance, and knowledge transfer into every engagement, so your organization stays capable long after the work is done.",
  },
];
