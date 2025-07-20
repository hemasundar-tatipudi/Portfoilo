// src/sections/About.js
import "./About.css";

const about = [
  "Software Engineer with 2.5+ years’ experience in backend, cloud, and Salesforce development. Proven track record of automating CI/CD pipelines (80% faster deployments), integrating scalable APIs, and building robust full-stack web solutions in Python, Java, and JavaScript. Adept at database optimization and cross-functional collaboration to deliver business impact."
  // Add another paragraph as a string here when ready!
];

export default (
  <div className="section-about-card">
    {about.map((para, i) => (
      <p className="section-about-para" key={i}>{para}</p>
    ))}
  </div>
);
