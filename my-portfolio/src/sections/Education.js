// src/sections/Education.js
import "./Education.css";

const educationList = [
  {
    degree: "MS, Computer Science",
    school: "University of Utah",
    dates: "Aug 2023 – May 2025"
  },
  {
    degree: "BTech, Computer Science",
    school: "Lovely Professional University",
    dates: "Aug 2017 – Jul 2021"
  }
];

export default (
  <div className="section-edu-badges">
    {educationList.map((edu) => (
      <div className="section-edu-badge" key={edu.degree + edu.school}>
        <div>
          <span className="section-edu-degree">{edu.degree}, </span>
          <span className="section-edu-school">{edu.school}</span>
        </div>
        <div className="section-edu-dates">{edu.dates}</div>
      </div>
    ))}
  </div>
);
