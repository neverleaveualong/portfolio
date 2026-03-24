import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "심우현 | Frontend-focused Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #09090B 0%, #18181B 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundSize: "60px 60px",
            backgroundImage:
              "linear-gradient(to right, rgba(39,39,42,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(39,39,42,0.3) 1px, transparent 1px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(39,39,42,0.8)",
              background: "rgba(24,24,27,0.6)",
              fontSize: "14px",
              color: "#a1a1aa",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            Frontend-focused Full-stack Developer
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "-2px",
              background: "linear-gradient(135deg, #fff 0%, #a1a1aa 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            심우현
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              maxWidth: "700px",
              textAlign: "center",
            }}
          >
            Claude Code를 무기로, 시니어처럼 사고하는 주니어
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "14px",
            color: "#52525b",
            fontFamily: "monospace",
          }}
        >
          simwoohyun.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
