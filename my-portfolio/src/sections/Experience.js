// src/sections/Experience.js
import "./Experience.css";

const experiences = [
  {
    company: "Capgemini",
    role: "Salesforce/Software Developer",
    dates: "Jan 2021 – Jul 2023",
    summary:
      "Salesforce/Software Developer with about 3 years at Capgemini: Specialized in deployment automation, API development, full-stack Salesforce solutions, and performance optimization. Collaborated with cross-functional teams, managed DevOps pipelines, improved deployment efficiency, resolved critical issues, and delivered high-quality solutions using Agile best practices."
  },
  {
    company: "BrainWeave",
    role: "Full-Stack Developer",
    dates: "Feb 2019 – Jul 2019",
    summary:
      "Developed real-time student and parent dashboards in React and TypeScript, integrating personalized learning insights; refactored a legacy Vue.js codebase into a React Hooks architecture with Context API; designed and implemented secure REST and GraphQL APIs; and built CI/CD pipelines with GitHub Actions and Azure DevOps."
  }
];

export default(
  <div>
    {experiences.map((exp, idx) => (
      <div key={idx} className="section-exp-summary-card">
        <div className="section-exp-header-flex">
          <div>
            <div className="section-exp-role">{exp.role}</div>
            <div className="section-exp-company">{exp.company}</div>
          </div>
          <div className="section-exp-dates">{exp.dates}</div>
        </div>
        <div className="section-exp-summary">{exp.summary}</div>
      </div>
    ))}
  </div>
);
