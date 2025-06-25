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
      "Led project teams in delivering Salesforce-based solutions.",
      "Mentored new hires and facilitated knowledge sharing sessions.",
      "Managed client communications and requirement gathering.",
    ],
  },
  {
    title: "Senior Analyst (Full-time)",
    company: "Capgemini",
    logo: capgeminiLogo,
    period: "Jun 2021 – Jun 2022",
    bullets: [
      "Developed and optimized Salesforce solutions using Apex and LWC.",
      "Designed and integrated RESTful APIs with third-party services.",
      "Troubleshot and resolved system issues to improve reliability.",
    ],
  },
  {
    title: "Senior Analyst (Internship)",
    company: "Capgemini",
    logo: capgeminiLogo,
    period: "Jan 2021 – May 2021",
    bullets: [
      "Developed tools to automate manual tasks in Salesforce.",
      "Supported the full project life cycle for client implementations.",
    ],
  },
  {
    title: "Marketing Promoter (Internship)",
    company: "BrainWeave",
    logo: brainweaveLogo,
    period: "Mar 2019 – Apr 2019",
    bullets: [
      "Promoted BrainWeave's brand on campus and at events.",
      "Coordinated with marketing team to increase brand awareness.",
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
