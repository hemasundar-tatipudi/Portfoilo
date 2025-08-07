// src/sections/Skills.js
import "./Skills.css";

const skillsData = [
  {
    category: "Programming",
    color: "#614bf6",
    skills: [
      "Python", "Java", "C++", "C", "C#", "JavaScript", "TypeScript", "HTML", "CSS", "Apex", "SOQL", "SOSL",
    ]
  },
  {
    category: "Frameworks",
    color: "#13bcaa",
    skills: [
      "React.js", "AngularJS", "Next.js", "Spring Boot", "Redux", "Tailwind CSS", "Machine Learning", "REST APIs", "GraphQL", "WebSockets", "Swagger",
    ]
  },
  {
    category: "Tools/Others",
    color: "#ff9900",
    skills: [
      "Docker", "Azure DevOps", "CI/CD pipelines", "AWS S3", "Git", "Postman", "Linux", "MySQL", "MongoDB", "Redis", "Salesforce Workbench", "ServiceNow",
    ]
  }
];

export default (
  <div className="section-skills-chipcloud">
    {skillsData.map(cat => (
      <div className="section-skills-cat" key={cat.category}>
        <div
          className="section-skills-cat-title"
          style={{ color: cat.color }}
        >
          {cat.category}
        </div>
        <div className="section-skills-chips">
          {cat.skills.map(skill => (
            <span className="section-skills-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
