import { ImageResponse } from "next/og";

// Generate at build time (required for output: "export").
export const dynamic = "force-static";

export const alt = "XuXuClassMate — AI testing tools for QA teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "radial-gradient(1000px 600px at 85% -10%, #dce9ff 0%, transparent 60%), linear-gradient(160deg, #ffffff 0%, #f0f3f8 100%)",
          color: "#1d1d1f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#0071e3" }}>
          AI-powered Quality Engineering
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: 940,
          }}
        >
          Test cases your team can actually review.
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "#6e6e73" }}>
          XuXuClassMate · QA Engineer · SDET · AI testing
        </div>
      </div>
    ),
    { ...size },
  );
}
