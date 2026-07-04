import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD_300 = "#d4af37";
const GOLD_500 = "#9b7f3a";
const GOLD_700 = "#6b5828";
const GOLD_800 = "#4a3d1c";

export default async function OpengraphImage() {
  const fontData = await readFile(
    join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "0 90px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 6,
              color: GOLD_300,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Operations Research · Data Science · AI
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 60,
              lineHeight: 1.15,
              color: "#f7f5f0",
            }}
          >
            <span style={{ marginRight: 18 }}>Decision advantage through</span>
            <span style={{ color: GOLD_300 }}>analytics.</span>
          </div>
        </div>

        <div style={{ display: "flex", position: "relative", width: 300, height: 300 }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 150,
              border: `4px solid ${GOLD_500}`,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 38,
              left: 38,
              right: 38,
              bottom: 38,
              borderRadius: 112,
              border: `2px solid ${GOLD_700}`,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 92,
              left: 92,
              right: 92,
              bottom: 92,
              borderRadius: 58,
              border: `1px solid ${GOLD_800}`,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 143,
              left: 143,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: GOLD_300,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: fontData, style: "normal", weight: 400 }],
    },
  );
}

export const alt = `${site.name} — ${site.tagline}`;
