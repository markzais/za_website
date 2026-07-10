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

export type SkillCategory = {
  category: string;
  items: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Programming & Analytics",
    items: ["Python", "R", "SAS", "SQL", "SPSS", "MATLAB", "Minitab", "Arena", "ProModel", "LaTeX"],
  },
  {
    category: "AI Coding",
    items: ["Cursor", "VS Code", "Antigravity", "Claude Code", "OpenAI Codex", "GitHub Copilot"],
  },
  {
    category: "Visualization & BI",
    items: ["Power BI", "Tableau", "Posit (R Shiny)", "Microsoft Office Suite (Advanced)"],
  },
  {
    category: "Cloud Platforms",
    items: ["Azure", "AWS", "Google Cloud"],
  },
];
