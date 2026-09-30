import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - Technology consulting`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111827",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#a5b4fc",
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.shortName}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              color: "#f8fafc",
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
            }}
          >
            Technology consulting for change that matters.
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 28,
            }}
          >
            Software engineering, AI and data, cloud, security, and transformation.
          </div>
        </div>

        <div
          style={{
            background: "#6366f1",
            display: "flex",
            height: 8,
            width: 180,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
