import React from "react";
import Navbar from "../components/Navbar";

export default function ProjectsPage({ navProps }) {
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps.isMobile ? " mobile" : ""}`}>
        <div className="about-page-container">
          <h1>Projects</h1>
          <p>Projects section page. Add your content here.</p>
        </div>
      </div>
    </div>
  );
}
