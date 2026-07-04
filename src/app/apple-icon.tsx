import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 148,
            height: 148,
            borderRadius: "50%",
            border: "7px solid #8b7332",
          }}
        >
          <span
            style={{
              display: "flex",
              fontSize: 84,
              color: "#8b7332",
              fontWeight: 700,
              fontFamily: "sans-serif",
            }}
          >
            Z
          </span>
        </div>
      </div>
    ),
    size,
  );
}
