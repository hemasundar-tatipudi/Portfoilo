// src/sections/Experience.js
import "./Experience.css";

const experience = {
  company: "Capgemini",
  role: "Salesforce Developer",
  dates: "Jan 2021 – Jul 2023",
  summary: "Salesforce Developer with 2.5 years at Capgemini: Specialized in deployment automation, API development, full-stack Salesforce solutions, and performance optimization. Collaborated with cross-functional teams, managed DevOps pipelines, improved deployment efficiency, resolved critical issues, and delivered high-quality solutions using Agile best practices."
};

export default (
  <div className="section-exp-summary-card">
    <div className="section-exp-header-flex">
      <div>
        <div className="section-exp-role">{experience.role}</div>
        <div className="section-exp-company">{experience.company}</div>
      </div>
      <div className="section-exp-dates">{experience.dates}</div>
    </div>
    <div className="section-exp-summary">{experience.summary}</div>
  </div>
);
