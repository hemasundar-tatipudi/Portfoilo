import React from "react";
import Navbar from "../components/Navbar";

export default function ResumePage({ navProps }) {
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps.isMobile ? " mobile" : ""}`}>
        <div className="about-page-container">
          <h1>Resume</h1>
          <p>
            {/* Simple download link; you can embed PDF instead if you want */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View My Resume (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
