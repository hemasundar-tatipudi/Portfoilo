import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const certifications = [
  {
    title: "Salesforce Certified Administrator (SCA)",
    about:
      "Validates the skills necessary to configure and manage Salesforce applications.",
    url: "https://trailhead.salesforce.com/credentials/verification"
  },
  {
    title: "Certified Senior System Architect (CSSA)",
    about:
      "Demonstrates advanced expertise in designing and architecting enterprise-level Salesforce solutions.",
    url: "https://trailhead.salesforce.com/credentials/verification"
  },
  {
    title: "Salesforce Certified Platform Developer I",
    about:
      "Confirms ability to develop custom applications on the Lightning Platform using Apex and Visualforce.",
    url: "https://trailhead.salesforce.com/credentials/verification"
  },
  {
    title: "Certified System Architect (CSA)",
    about:
      "Recognizes expertise in translating complex business requirements into scalable Salesforce solutions.",
    url: "https://trailhead.salesforce.com/credentials/verification"
  },
];

export default function CertificationsPage({ navProps }) {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div
        className={`main-vertical-container${
          navProps.isMobile ? " mobile" : ""
        }`}
      >
        <div className="certs-page-container">
          <h1 className="certs-title">Certifications</h1>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.title}>
                <h2 className="cert-title">{cert.title}</h2>
                <p className="cert-about">{cert.about}</p>
                <a
                  className="cert-link"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
