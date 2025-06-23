import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage({ navProps }) {
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps.isMobile ? " mobile" : ""}`}>
        <div className="about-page-container">
          <h1>Welcome</h1>
          <p>About section page. Add your content here.</p>
        </div>
      </div>
    </div>
  );
}
