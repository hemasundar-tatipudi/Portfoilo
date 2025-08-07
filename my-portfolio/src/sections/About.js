// src/sections/About.js
import "./About.css";

const about = [
  "Software Engineer with more than 3 years of hands-on delivery across back-end, front-end, and cloud-native applications. Proficient in designing and implementing end-to-end solutions using Java, Python, JavaScript/TypeScript, and modern frameworks (Spring Boot, React.js, Angular). Skilled at architecting RESTful APIs, optimizing databases (SQL/NoSQL), and automating CI/CD pipelines on AWS and Azure. Adept in full-stack development from responsive UIs to scalable microservices while collaborating cross-functionally to translate business requirements into robust, maintainable code. Continuous learner with in Computer Science and Salesforce certifications, committed to delivering high-quality, impactful software."
  // Add another paragraph as a string here when ready!
];

export default (
  <div className="section-about-card">
    {about.map((para, i) => (
      <p className="section-about-para" key={i}>{para}</p>
    ))}
  </div>
);
