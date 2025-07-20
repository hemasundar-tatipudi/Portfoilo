// src/sections/Skills.js
import "./Skills.css";

const skillsData = [
  {
    category: "Programming",
    color: "#614bf6",
    skills: [
      "Python", "Java", "C++", "C", "HTML", "CSS", "JavaScript", "TypeScript", "Apex"
    ]
  },
  {
    category: "Frameworks",
    color: "#13bcaa",
    skills: [
      "Salesforce", "Pega", "Machine Learning", "AngularJS", "React.js"
    ]
  },
  {
    category: "Tools/Others",
    color: "#ff9900",
    skills: [
      "Azure DevOps", "Azure CI/CD", "Postman", "AWS S3", "Git", "Docker",
      "MySQL", "MongoDB", "Workbench", "ServiceNow"
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
