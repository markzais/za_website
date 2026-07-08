export type Principle = {
  index: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Find the real problem",
    body: "Most engagements fail before they start, aimed at an interesting problem instead of a valuable one. We begin by asking the question underneath the question: what decision are you actually trying to make, what would change if you had a better answer, and what evidence that answer would actually require. Everything downstream depends on getting this right.",
  },
  {
    index: "02",
    title: "Right-size the solution",
    body: "Not every problem needs artificial intelligence, and no method is better than the data behind it. We size the solution to both the decision and the data actually available, applying the simplest method that answers the question with confidence, from a well-framed spreadsheet model to a large-scale simulation-optimization platform. The right tool is the one that gets the decision made, not the one that is most impressive to build.",
  },
  {
    index: "03",
    title: "Build for decisions, not dashboards",
    body: "A dashboard nobody acts on is a cost center. Every engagement ends in something an executive can act on: a recommendation, a threshold, a plan, a number with a confidence interval attached. We measure our work by the decisions it changes, not the artifacts it produces.",
  },
  {
    index: "04",
    title: "Translate at every level",
    body: "Technical rigor is worthless if it cannot survive a board meeting, and executive vision is worthless if it cannot survive an engineering review. We work fluently at both altitudes, so strategy holds up under implementation and implementation holds up under scrutiny.",
  },
  {
    index: "05",
    title: "Transfer capability",
    body: "An engagement that leaves you dependent on us has failed by our own standard, and analytics is never really finished: conditions change, models drift, and yesterday's right answer can quietly become tomorrow's wrong one. We build monitoring, governance, and communities of practice into the work itself, and close the loop back to the original decision, so your organization is measurably stronger in the capability long after we are gone.",
  },
];
