import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "operations research",
    "data science consulting",
    "artificial intelligence strategy",
    "AI governance",
    "analytics consulting",
    "decision science",
    "simulation optimization",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-paper-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-gold-300 focus:px-4 focus:py-2 focus:text-ink-950 focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.legalName,
              alternateName: site.name,
              description: site.description,
              url: site.url,
              image: `${site.url}/logo/zais-mark-1024.png`,
              logo: `${site.url}/logo/zais-mark-1024.png`,
              email: site.email,
              areaServed: "US",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tampa",
                addressRegion: "FL",
                addressCountry: "US",
              },
              founder: {
                "@type": "Person",
                name: "Mark Zais",
                jobTitle: "Principal",
                url: "https://markzais.com",
              },
              knowsAbout: [
                "Operations Research",
                "Data Science",
                "Artificial Intelligence Strategy",
                "Machine Learning",
                "Analytics Strategy",
                "AI Governance",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
