import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
// Place your school logos in /src/assets/ (or use emoji as fallback)
import utahLogo from "../assets/UofU-logo.png";
import lpuLogo from "../assets/LPU-logo.png";

// Hook for responsiveness (same as ExperiencePage)
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 850);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const education = [
  {
    school: "University of Utah",
    degree: "Master of Science - MS, Computer Science",
    period: "Aug 2023 – May 2025",
    grade: "3.8/4.0",
    logo: utahLogo,
    coursework: [
      "Visualization for Data Science",
      "Data Management for & with ML",
      "Human Computer Interaction",
      "Algorithms",
      "Security Operations",
      "Software & System Security",
      "Computer Architecture",
      "Operating Systems",
      "SQL",
      "Databases",
      "Machine Learning"
    ]
  },
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    period: "Aug 2017 – Jul 2021",
    grade: "8.82/10.0",
    logo: lpuLogo,
    coursework: [
      "Object-Oriented Programming (OOP)",
      "Cascading Style Sheets (CSS)",
      "Data Structures",
      "JavaScript",
      "Python",
      "Computer Networking",
      "CPP",
      "C",
      "MySQL",
      "Operating Systems",
      "SQL",
      "Databases",
      "Machine Learning",
      "Java",
      "HTML5"
    ]
  }
];

export default function EducationPage({ navProps }) {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className={`main-vertical-container${navProps && navProps.isMobile ? " mobile" : ""}`}>
        <div className="exp3-page-container">
          <h1 className="exp3-title">Education</h1>
          <div className="exp3-timeline">
            {!isMobile && <div className="exp3-timeline-line" />}
            {education.map((edu, idx) => {
              if (isMobile) {
                // Mobile: Date above card, stacked layout
                return (
                  <div className="exp3-row" key={idx}>
                    <div className="exp3-card-group-mobile">
                      <div className="exp3-date">{edu.period}</div>
                      <div className="exp3-card">
                        <h2>{edu.degree}</h2>
                        <div className="exp3-company">{edu.school}</div>
                        <div className="exp3-edu-grade">Grade: {edu.grade}</div>
                        <div className="exp3-edu-coursework">
                          <span className="exp3-edu-label">Coursework:</span>
                          <ul>
                            {edu.coursework.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Desktop: Alternate cards
                const isLeft = idx % 2 === 0;
                return (
                  <div className="exp3-row" key={idx}>
                    <div className="exp3-col exp3-col-left">
                      {isLeft ? (
                        <div className="exp3-card">
                          <h2>{edu.degree}</h2>
                          <div className="exp3-company">{edu.school}</div>
                          <div className="exp3-edu-grade">Grade: {edu.grade}</div>
                          <div className="exp3-edu-coursework">
                            <span className="exp3-edu-label">Coursework:</span>
                            <ul>
                              {edu.coursework.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="exp3-date exp3-date-right">{edu.period}</div>
                      )}
                    </div>
                    <div className="exp3-col exp3-col-center">
                      <div className="exp3-logo-stack">
                        <img src={edu.logo} alt={edu.school} className="exp3-logo" />
                      </div>
                    </div>
                    <div className="exp3-col exp3-col-right">
                      {!isLeft ? (
                        <div className="exp3-card">
                          <h2>{edu.degree}</h2>
                          <div className="exp3-company">{edu.school}</div>
                          <div className="exp3-edu-grade">Grade: {edu.grade}</div>
                          <div className="exp3-edu-coursework">
                            <span className="exp3-edu-label">Coursework:</span>
                            <ul>
                              {edu.coursework.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="exp3-date exp3-date-left">{edu.period}</div>
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
