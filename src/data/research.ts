export const publications: string[] = [
  "A Simulation-Optimization Approach to Estimate Workforce Requirements",
  "A Markov Chain Model of Military Personnel Dynamics",
  "Optimizing Simulation Fidelity for Cost-Effective Aviation Training",
  "Artificial Intelligence: A Decisionmaking Technology",
  "Big Data for Generals... and Everyone Else over 40",
];

export const awards: string[] = [
  "First Place, Chairman of the Joint Chiefs of Staff National Defense Strategy Paper Award (2020)",
];

export type Certification = {
  name: string;
  org: string;
};

export const certifications: Certification[] = [
  { name: "Certified Analytics Professional, Expert (CAP-X)", org: "INFORMS" },
  { name: "Analytics Certification Board Member", org: "INFORMS" },
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
  { name: "Google Cloud Digital Leader", org: "Google Cloud" },
];
