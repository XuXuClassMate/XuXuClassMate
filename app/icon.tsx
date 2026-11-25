import { ImageResponse } from "next/og";

// Generate at build time (required for output: "export").
export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Original brandmark: an "X" wordmark initial on the accent square.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0071e3",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 7,
          fontFamily: "sans-serif",
        }}
      >
        X
      </div>
    ),
    { ...size },
  );
}
