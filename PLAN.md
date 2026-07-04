# PLAN.md — Zais Analytics Website

## Purpose of This Document

This is a build plan for the Zais Analytics consulting website. It defines the company positioning, content, structure, and constraints. Where this document is specific (content, tone, palette, stack), follow it closely. Where it is silent (layout, typography, animation, component design, imagery style), you are expected to make thoughtful, creative design decisions worthy of a premium technical consultancy. Do not produce a generic template site.

---

## 1. Company Overview

**Company:** Zais Analytics LLC
**Tagline direction (you may refine):** Something in the spirit of "Decision advantage through analytics" or "From data to decision." The core idea: converting complexity into confident decisions.

Zais Analytics is a boutique consulting firm specializing in **operations research, data science, and artificial intelligence**. It helps organizations extract maximum value from their data assets by pairing deep technical rigor with executive-level strategic insight.

The firm's differentiator is the rare combination of:

- PhD-level technical depth in operations research, optimization, and decision science
- 20+ years advising C-suite executives and senior government leaders on multi-billion-dollar decisions
- Proven delivery in the most demanding, regulated, mission-critical environments
- The ability to translate between technical practitioners and executive stakeholders at every level

**Critical positioning constraint:** The company has deep roots in defense, national security, and federal government work, and that experience should be presented as proof of rigor and trust, not as the company's boundary. Zais Analytics serves **all sectors**: commercial enterprises, healthcare, financial services, logistics, energy, technology, and government. Frame defense experience as "proven where the stakes are highest," then pivot to broad applicability. Never let the site read as a defense contractor site.

**Critical framing constraint:** The site is about the **firm and its capabilities**, not about an individual. Use "Zais Analytics," "we," and "the firm" throughout. The founder appears only in the About section (see Section 5).

---

## 2. Brand Identity

### Palette: Black + Gold

- Primary: near-black / charcoal (e.g., #0A0A0A to #1A1A1A range) as the dominant ground
- Accent: a refined metallic gold (avoid brassy or yellow-leaning golds; aim for something like #C9A227, #D4AF37, or a muted variant that reads premium, not gaudy)
- Support with warm neutrals (off-white, warm grey) for text and surfaces
- Gold is an accent, not a flood. Use it for emphasis: rules, icons, data highlights, hover states, key numerals. Large gold areas will look cheap.

### Visual character

The existing logo concept (a "Precision Scope" mark: circular border with concentric rings, quadrant arcs, cardinal guides, a fine node network, and a thin elegant Z with an ascending bar chart tucked into the Z's lower-right pocket) sets the aesthetic language:

- **Geometric minimalism.** Clean lines, deliberate symmetry, circular and radial motifs.
- **Precision.** Thin strokes, exact alignment, generous whitespace, restrained ornament.
- **Analytical texture.** Subtle nods to data are welcome: fine grid lines, node networks, concentric rings, understated chart motifs. Keep them quiet and structural, not decorative clip art.
- Flat colors. No gradients-as-decoration, no stock-photo hero collages of people pointing at whiteboards.

A logo asset may not be available in the repo at build time. Design so the site stands on typography and layout alone, with a clean placeholder wordmark ("ZAIS ANALYTICS") that can be swapped for the final SVG logo. Reserve appropriate logo slots (header, footer, favicon).

### Tone of voice

- Confident, precise, senior. Written for executives and technical leaders.
- Short declarative sentences. No buzzword soup, no exclamation points, no "unlock synergies."
- Quantified wherever possible. This firm's credibility rests on numbers.
- Avoid the word "utilize"; use "use." Avoid em dashes in site copy.

---

## 3. Tech Stack and Engineering Requirements

- **Framework:** Next.js (App Router) with React and TypeScript
- **Styling:** Tailwind CSS (or CSS modules if you have strong reason; Tailwind preferred)
- **Deployment target:** Vercel-ready (static/SSG where possible; this is a content site, so prefer static generation)
- **Contact form:** Build the form UI and client-side validation now. Wire it to a simple API route with a pluggable backend (e.g., a stub handler with clear TODO comments for connecting Resend, Formspree, or SES). Include honeypot or similar basic spam protection.
- **Responsive:** Flawless on mobile through large desktop
- **Performance:** Lighthouse 90+ across categories; optimize images; minimal client JS
- **Accessibility:** Semantic HTML, WCAG AA contrast (test gold-on-black text carefully; body text should be neutral, gold reserved for large text and accents), keyboard navigable, proper focus states
- **SEO:** Per-page metadata, Open Graph tags, sitemap, robots.txt, structured data (Organization + ProfessionalService schema)
- **No CMS required.** Content lives in the repo (constants/MDX/JSON, your choice), organized so copy edits are easy.

---

## 4. Site Structure

Model the information architecture on established technical consultancies (think firms like BCG Gamma-style analytics practices or boutique OR/AI shops): capabilities-led, outcomes-focused, credibility-heavy. Suggested structure below; you may adjust navigation labels and page composition if you have a better design rationale, but all content areas must exist.

### 4.1 Home

- **Hero:** Strong statement of what the firm does and for whom. One primary CTA ("Start a conversation" → Contact) and one secondary ("Explore capabilities").
- **Capabilities overview:** Cards or sections summarizing the service areas (Section 4.2), each linking to detail.
- **Proof band:** A row of quantified outcomes (see "Credibility numbers" in Section 6). Present these as firm experience, e.g., "$1.5B investment strategy shaped by simulation-optimization."
- **Approach teaser:** Brief statement of how the firm works (Section 4.4) with link.
- **Sectors served:** Compact treatment showing breadth beyond defense (Section 4.3).
- **Closing CTA** into Contact.

### 4.2 Capabilities (the core of the site)

Either one Capabilities page with deep sections or individual subpages per capability. Six service pillars:

1. **AI Strategy and Governance**
   Enterprise AI strategy, roadmaps, and operating models. Responsible AI and governance frameworks. AI readiness and maturity assessment. Advising executives and boards on AI adoption and digital transformation. Aligning AI investment with measurable business outcomes.

2. **Generative AI and AI Agents**
   Applied generative AI: LLM use-case discovery, evaluation, and deployment strategy. Agentic workflows and automation design. Retrieval-augmented generation and enterprise knowledge systems. Build-vs-buy guidance and vendor evaluation. Human-in-the-loop design for high-stakes decisions.

3. **AI Security and Assurance**
   Securing AI systems and the decisions they inform. AI risk assessment, red-teaming concepts, and model assurance. Governance for safe deployment in regulated and mission-critical environments. Data protection and responsible-use policy.

4. **Operations Research and Optimization**
   Mathematical modeling for resource allocation, scheduling, logistics, and investment planning. Simulation and simulation-optimization for capital and portfolio decisions. Metaheuristics and large-scale optimization (tabu search, GRASP, dynamic programming, Markov models). Economic and cost-benefit analysis. This pillar is backed by doctoral research and peer-reviewed publication; the copy can reflect that depth.

5. **Data Science and Machine Learning**
   Predictive analytics, forecasting, and workforce/behavioral modeling. Machine learning and NLP solutions built for decision impact, not novelty. Statistical rigor: time series, experimentation, uncertainty quantification. Model development through deployment. Toolset depth includes Python, R, SQL, SAS, MATLAB, Spark/Databricks, and cloud platforms (AWS, Google Cloud); mention tools sparingly and only where it builds credibility with technical buyers.

6. **Analytics Strategy and Decision Science**
   Enterprise analytics strategy, operating models, and governance. Building analytics organizations, communities of practice, and data governance bodies. Executive decision support: distilling complexity into decision-ready products. Analytics talent development and technical mentorship.

For each pillar include: a crisp definition, representative problem statements ("When to engage us" style), what the client gets, and where possible a quantified proof point drawn from Section 6.

### 4.3 Industries / Sectors

A page or prominent section establishing breadth. Structure as "proven in the most demanding environments, applied everywhere":

- **Defense and National Security** (deep heritage; frame as proof of rigor under the highest stakes; note that the Principal holds an active TS/SCI security clearance, a meaningful differentiator for classified and sensitive work)
- **Federal, State, and Public Sector**
- **Logistics and Supply Chain**
- **Financial Services**
- **Healthcare and Life Sciences**
- **Energy and Industrials**
- **Technology and Commercial Enterprise**

For non-defense sectors, write honest capability-transfer copy (the same optimization that shapes billion-dollar defense portfolios applies to fleet planning, network design, capital allocation, workforce planning). Do not fabricate past clients or invent case studies. Frame as "where these methods apply," not "who we have served," except for the defense/government experience which is real.

### 4.4 Approach / How We Work

A short page giving the firm's methodology. Draft around these ideas (refine the language):

- **Find the real problem.** Separate valuable from interesting. Ask the right question before building anything.
- **Right-size the solution.** Not everything needs AI. The firm applies the most efficient method that answers the question, from a well-framed spreadsheet model to a large-scale simulation-optimization platform.
- **Build for decisions, not dashboards.** Every engagement ends in something an executive can act on.
- **Translate at every level.** Fluency with both C-suite stakeholders and technical practitioners; strategy that survives contact with implementation.
- **Transfer capability.** Mentorship, governance, and communities of practice so the client is stronger after the engagement.

### 4.5 About

- Brief firm story: founded to bring decision-science rigor honed in national security and enterprise analytics leadership to organizations in every sector.
- **Principal:** Mark Zais, PhD, listed as **Principal**. One short paragraph only: PhD in Operations Research (Business Administration), 20+ years leading advanced analytics and AI strategy across defense, government, academia, and industry; former Chief Data Scientist of U.S. Special Operations Command; retired U.S. Army Colonel. Link out to **markzais.com** for the full background ("Learn more about the Principal at markzais.com"). Do not build a personal bio page; the site stays firm-centric.
- Certifications and affiliations worth surfacing at the firm level: INFORMS Certified Analytics Professional (CAP-X, Expert), INFORMS Analytics Certification Board member, AWS Cloud Practitioner, Google Cloud Digital Leader.
- **Published research and thought leadership** (may be presented as a compact "Selected Publications" element in About, or woven into relevant capability pages as proof of depth):
  - A Simulation-Optimization Approach to Estimate Workforce Requirements
  - A Markov Chain Model of Military Personnel Dynamics
  - Optimizing Simulation Fidelity for Cost-Effective Aviation Training
  - Artificial Intelligence: A Decisionmaking Technology
  - Big Data for Generals... and Everyone Else over 40
  - First Place, Chairman of the Joint Chiefs of Staff National Defense Strategy Paper Award (2020)

### 4.6 Contact

- Contact form: name, organization, email, topic/capability of interest (select), message
- Direct email link as a fallback
- Location line: Tampa, FL, serving clients nationwide and remote
- Set expectations: "We respond within one business day" or similar

### 4.7 Footer (all pages)

Wordmark, one-line firm description, nav links, contact link, © Zais Analytics LLC, and the markzais.com principal link is optional here.

---

## 5. Content Rules

- Firm voice ("we"), never first person singular, outside the single Principal paragraph.
- The founder's name appears only in About (Principal listing) and optionally the footer.
- No stock photos of generic business people. Prefer abstract geometric/analytical visuals consistent with the brand, generated as SVG/CSS where possible.
- No fabricated testimonials, client logos, or case studies. Quantified experience from Section 6 is real and may be used, attributed to the firm's leadership experience (e.g., "Our leadership has directed..." or presented plainly as firm proof points).
- Keep pages scannable: executives skim. Strong headings, short paragraphs, quantified pull-outs.

---

## 6. Credibility Numbers (real; use selectively and accurately)

These come from the Principal's verified experience. Present them as proof points of the expertise behind the firm:

- Led development of a **$1.5B** global investment strategy for vehicle fleet modernization using economic analysis and simulation-optimization
- Directed a **$2B** aviation training portfolio study shaping long-term modernization and investment decisions
- Directed development of optimization platforms supporting **$40B** in construction and infrastructure planning
- Led enterprise AI and analytics strategy for a global organization of **70,000+ personnel** and a **$13B annual budget**
- Directed compensation and housing allowance analytics optimizing **$2.7B annually**
- Congressionally directed studies influencing **$1.1B** in resource realignment
- Technical solutions and proposals generating **$600M+** in new contract awards
- Enterprise workforce forecasting for an organization of **547,000+ employees**
- **20+ years** in advanced analytics, operations research, and AI leadership; PhD in Operations Research
- Published researcher on AI decision-making, workforce modeling, and simulation-optimization; national first-place defense strategy paper award (2020)
- Principal holds an active TS/SCI security clearance (use only in defense/federal contexts, not as a general proof point)

Use a subset; do not dump all of them everywhere. Rotate them across relevant capability pages and the home proof band.

---

## 7. Design Latitude (your creative mandate)

You have freedom on:

- Typography (choose a distinctive, premium pairing; avoid default-feeling system fonts)
- Layout systems, grid, and page composition
- Motion (tasteful, minimal; e.g., subtle reveal on scroll, animated data motifs; nothing gratuitous)
- Iconography (keep it consistent with the geometric, thin-stroke, precision aesthetic)
- Abstract visual elements (concentric rings, node networks, fine grids, radial guides all fit the brand)
- Micro-interactions and hover states (gold accent shines here)

You are constrained on:

- Palette (black + gold as defined)
- Voice and content rules (Sections 2, 5)
- Structure and required content areas (Section 4)
- Stack and engineering requirements (Section 3)

## 8. Definition of Done

- All pages in Section 4 built, responsive, and populated with real copy (write final copy consistent with this plan; no lorem ipsum)
- Contact form functional client-side with a stubbed, clearly documented API route
- SEO metadata, sitemap, OG tags, and structured data in place
- Lighthouse 90+ on performance, accessibility, best practices, SEO
- README with local dev instructions, deployment notes, and a short guide to editing content and swapping in the final logo assets
