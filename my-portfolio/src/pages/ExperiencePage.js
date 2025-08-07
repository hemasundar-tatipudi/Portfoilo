import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import capgeminiLogo from "../assets/capgemini-logo.png";
import brainweaveLogo from "../assets/brainweave-logo.png";

// Simple hook to check if mobile (you can move to a util)
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 850);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const experiences = [
  {
    title: "Associate Consultant (Full-time)",
    company: "Capgemini",
    logo: capgeminiLogo,
    period: "Jul 2022 – Jul 2023",
    bullets: [
      "Led development and deployment of a Salesforce-based Order Management System for Ryder System, Inc., streamlining order processing and operational workflows.",
      "Designed and integrated RESTful APIs for real-time data exchange between Salesforce and third-party systems.",
      "Automated CI/CD pipelines using Azure DevOps and Git, reducing deployment time by 40% and improving reliability.",
      "Refactored Apex backend logic and optimized SOQL/SQL queries to enhance system performance and scalability.",
    ],
  },
  {
    title: "Senior Analyst (Full-time)",
    company: "Capgemini",
    logo: capgeminiLogo,
    period: "Jun 2021 – Jun 2022",
    bullets: [
      "Designed and implemented Lightning Web Components (LWC), Apex classes, and Visualforce pages to support key business functionalities.",
      "Created and executed unit tests using Apex and JUnit, maintaining 85%+ code coverage.",
      "Participated in Agile ceremonies by providing technical estimations and supporting sprint planning and backlog grooming.",
      "Analyzed customer-reported issues, implemented hotfixes, and ensured smooth post-deployment transitions.",
      "Mentored junior team members on Salesforce development best practices and clean coding principles.",
    ],
  },
  {
    title: "Senior Analyst (Internship)",
    company: "Capgemini",
    logo: capgeminiLogo,
    period: "Jan 2021 – May 2021",
    bullets: [
      "Focused on mastering enterprise development workflows within the Salesforce ecosystem, including Apex, Visualforce, and Lightning Web Components.",
      "Shadowed senior developers to gain hands-on experience in real-world application design and debugging.",
      "Completed internal training on VSTS and Agile methodology, contributing to small-scale code enhancements and project documentation.",
    ],
  },
  {
    title: "Full-Stack Developer (Internship)",
    company: "BrainWeave",
    logo: brainweaveLogo,
    period: "Feb 2019 – Jul 2019",
    bullets: [
      "Developed real-time student and parent dashboards in React and TypeScript, integrating personalized learning insights, and refactored a legacy Vue.js codebase into a React Hooks architecture with Context API, reducing load times by 30% and improving maintainability.",
      "Designed and implemented secure REST and GraphQL APIs for over 7,000 students across 120 NGOs, ensuring scalable, efficient access to educational data.",
      "Built CI/CD pipelines with GitHub Actions and Azure DevOps, cutting manual deployment efforts by 80% and enforcing rigorous code quality standards.",
    ],
  },
];

export default function ExperiencePage({ navProps }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isMobile = useIsMobile();
  // Most recent first
  const ordered = experiences.slice();

  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps && navProps.isMobile ? " mobile" : ""}`}>
        <div className="exp3-page-container">
          <h1 className="exp3-title">Experience</h1>
          <div className="exp3-timeline">
            {!isMobile && <div className="exp3-timeline-line" />}
            {ordered.map((exp, idx) => {
              if (isMobile) {
                // Mobile: Date always above card
                return (
                  <div className="exp3-row" key={idx}>
                    <div className="exp3-card-group-mobile">
                      <div className="exp3-date">{exp.period}</div>
                      <div className="exp3-card">
                        <h2>{exp.title}</h2>
                        <div className="exp3-company">{exp.company}</div>
                        <ul>
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Desktop: Alternate left/right
                const isLeft = idx % 2 === 0;
                return (
                  <div className="exp3-row" key={idx}>
                    <div className="exp3-col exp3-col-left">
                      {isLeft ? (
                        <div className="exp3-card">
                          <h2>{exp.title}</h2>
                          <div className="exp3-company">{exp.company}</div>
                          <ul>
                            {exp.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="exp3-date exp3-date-right">{exp.period}</div>
                      )}
                    </div>
                    <div className="exp3-col exp3-col-center">
                      <div className="exp3-logo-stack">
                        <img src={exp.logo} alt={exp.company} className="exp3-logo" />
                      </div>
                    </div>
                    <div className="exp3-col exp3-col-right">
                      {!isLeft ? (
                        <div className="exp3-card">
                          <h2>{exp.title}</h2>
                          <div className="exp3-company">{exp.company}</div>
                          <ul>
                            {exp.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="exp3-date exp3-date-left">{exp.period}</div>
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
