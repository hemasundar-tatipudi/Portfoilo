import React from "react";
import Navbar from "../components/Navbar";

export default function EducationPage({ navProps }) {
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps.isMobile ? " mobile" : ""}`}>
        <div className="about-page-container">
          <h1>Education</h1>
          <p>Education section page. Add your content here.</p>
        </div>
      </div>
    </div>
  );
}
