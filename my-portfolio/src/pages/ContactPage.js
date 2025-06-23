import React from "react";
import Navbar from "../components/Navbar";

export default function ContactPage({ navProps }) {
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps.isMobile ? " mobile" : ""}`}>
        <div className="about-page-container">
          <h1>Contact</h1>
          <p>
            Email: <a href="mailto:hemasundar@email.com">hemasundar@email.com</a>
            <br />
            LinkedIn: <a href="https://linkedin.com/in/findmehere-hs" target="_blank" rel="noopener noreferrer">findmehere-hs</a>
          </p>
        </div>
      </div>
    </div>
  );
}
