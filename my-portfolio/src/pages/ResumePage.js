import React from "react";

export default function ResumePage() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      background: "#181a20"
    }}>
      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="100%"
        style={{
          border: "none",
          minHeight: "100vh",
          minWidth: "100vw",
          background: "#181a20"
        }}
      />
    </div>
  );
}
