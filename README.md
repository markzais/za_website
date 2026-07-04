# Zais Analytics — Website

Marketing site for Zais Analytics LLC, built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (static generation)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Project structure

```
src/
  app/                     Routes (App Router). Each page.tsx exports its own metadata.
    capabilities/          Capabilities overview + [slug] detail pages (6 pillars)
    industries/            Sectors served
    approach/              Methodology
    about/                 Firm story, Principal, certifications, publications
    contact/               Contact form
    api/contact/route.ts   Contact form submission handler (see "Contact form" below)
    sitemap.ts, robots.ts  SEO files, generated from src/data
    opengraph-image.tsx    Social share image, generated at build time
    apple-icon.tsx, icon.png  Favicons, generated from the logo mark
  components/              Header, footer, buttons, cards, decorative motifs, icons
  data/                    All site copy and structured content (see below)
```

## Editing content

There is no CMS. All copy lives in `src/data/` as typed TypeScript objects, so edits are
just text changes with type safety:

- `site.ts` — firm name, tagline, description, contact info, nav links
- `capabilities.ts` — the six service pillars (definition, when to engage, what you get, proof point)
- `sectors.ts` — industries served
- `approach.ts` — the five method principles
- `stats.ts` — credibility numbers, tagged so the same number can be reused across pages
  (e.g. `tags: ["home", "operations-research-and-optimization"]`)
- `research.ts` — certifications, publications, awards

Editing a page's visible copy almost always means editing one of these files, not the
`.tsx` files under `app/`.

## Logo assets

Source logo files (SVG + PNG at multiple sizes) are in `/images` at the repo root. The
versions actually used by the site live in `public/logo/`:

- `zais-mark.svg` — the ring mark alone (header, footer, favicons)
- `zais-lockup.svg` — the horizontal lockup with wordmark (available if you want the
  pre-rendered lockup instead of the live-text wordmark the header/footer currently use)

The header and footer currently render the mark (`LogoMark`) next to a live text
wordmark (`Wordmark`) built with the site's own fonts and colors, defined in
`src/components/logo.tsx`. This keeps the wordmark crisp and themeable (hover states,
dark/light contexts) instead of baking it into a raster/vector image. If you'd rather use
the pre-rendered horizontal lockup SVG as-is, swap `BrandLockup` in `logo.tsx` to render
`<img src="/logo/zais-lockup.svg" />` instead.

The favicon (`src/app/icon.png`) and Apple touch icon (`src/app/apple-icon.tsx`) are
already wired up from the mark. If you get a refreshed logo export, replace the files in
`public/logo/` and `src/app/icon.png` with the new versions (keep the same filenames).

## Contact form

`src/components/contact-form.tsx` is a client component with client-side validation and a
honeypot field (`company_website`) for basic spam protection. It posts JSON to
`src/app/api/contact/route.ts`, which re-validates server-side and currently only logs
the inquiry and returns success — no email is actually sent yet.

To wire up real delivery, open `route.ts` and follow one of the documented options:

- **Resend** (recommended): add `RESEND_API_KEY` to `.env`, install `resend`, and send
  from the route handler. Example code is inline in the TODO comment.
- **Formspree**: skip the API route entirely and point the form's `action` at your
  Formspree endpoint.
- **Amazon SES**: use `@aws-sdk/client-sesv2` with credentials from environment
  variables (never hardcode credentials).

Whichever backend you choose, keep the honeypot check and field validation already in
the route handler.

## Design system

- **Palette**: near-black (`ink-*`) with a metallic gold accent (`gold-*`), derived
  directly from the logo's own colors, defined in `src/app/globals.css` under `@theme`.
  Gold is reserved for accents, rules, and large text; body copy stays neutral
  (`paper-*`) for contrast.
- **Type**: Space Grotesk (display/headings), Inter (body/UI), IBM Plex Mono (labels,
  stats, eyebrows), loaded via `next/font/google` in `src/app/layout.tsx`.
- **Motifs**: `src/components/motifs/` holds the decorative radial-guide rings and node
  network, echoing the logo's precision-scope geometry. They're presentational SVGs,
  `aria-hidden`, with no effect on layout.

## SEO

- Per-page `metadata` exports (title templates, descriptions, Open Graph).
- `src/app/sitemap.ts` and `src/app/robots.ts` are generated from the same route/data
  definitions used to render the pages, so they stay in sync automatically.
- `src/app/opengraph-image.tsx` generates the social share image at build time (no static
  asset to keep updated by hand).
- Organization/ProfessionalService JSON-LD structured data is injected in
  `src/app/layout.tsx`.

## Deployment

The app is static-generation friendly and ready for Vercel:

1. Push to a Git repository and import it in Vercel, or run `vercel` from this directory.
2. Set `NEXT_PUBLIC_SITE_URL`/update `src/data/site.ts` (`site.url`) if the production
   domain differs from `zaisanalytics.com`.
3. Add whichever contact-form environment variable your chosen email backend needs
   (e.g. `RESEND_API_KEY`) in the Vercel project settings.

No database or CMS is required.
