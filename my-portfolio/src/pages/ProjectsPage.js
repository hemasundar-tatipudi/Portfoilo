import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Project data (add 'website' as needed)
export const projects = [
  {
    title: "CovidStat Visualizer",
    skills: ["PySpark", "HTML", "CSS", "D3.js", "React.js"],
    description: [
      "Interactive EU/EEA COVID-19 dashboard with animated charts, hover tooltips and stringency-index overlays for comparing case/death trends.",
      "Highlighted key events (lockdowns, vaccine rollouts) via annotated peaks to inform public-health decision-making.",
    ],
    links: {
      github: "https://github.com/dataviscourse2024/group-project-covidstat-visualizer",
      website: "https://dataviscourse2024.github.io/group-project-covidstat-visualizer/",
    },
  },
  {
    title: "StockWave – Dynamic Stock Forecasting",
    skills: ["Python", "PySpark", "TensorFlow", "LSTM"],
    description: [
      "LSTM-based time-series model with EMA/RSI feature engineering, delivering 15% lower mean error than ARIMA baselines.",
      "Exposed via a Flask API & React frontend for real-time input, visualization of predictions vs. actuals, and on demand retraining.",
    ],
    links: {
      github: null,
      website: null,
    },
  },
  {
    title: "Book Store Web App",
    skills: ["Node.js", "MongoDB", "React.js"],
    description: [
      "Full-stack e-commerce site with secure JWT authentication, role-based access, and debounced search/filter over 1,000+ titles.",
      "Designed RESTful APIs and a responsive React UI with an admin dashboard for real-time inventory and order management.",
    ],
    links: {
      github: "https://github.com/hemasundar-tatipudi/Book_Store-Web_Application",
      website: "https://book-store-web-application.vercel.app/",
    },
  },
];

// derive our full set of unique skills
const allSkills = Array.from(
  new Set(projects.flatMap((p) => p.skills))
).sort();

function ProjectCard({ project, idx, onSkillClick, selectedSkills }) {
  return (
    <div
      className="project-card no-image"
      style={{ "--delay": `${0.1 * idx + 0.04}s` }}
      tabIndex={0}
    >
      <div className="project-card-content">
        <h2 className="project-card-title">{project.title}</h2>
        <div className="project-card-skills">
          {project.skills.map((skill, i) => {
            const isActive = selectedSkills.includes(skill);
            return (
              <span
                key={i}
                className={
                  "project-skill-badge" + (isActive ? " active" : "")
                }
                onClick={() => !isActive && onSkillClick(skill)}
                style={{
                  cursor: isActive ? "default" : "pointer",
                  opacity: isActive ? 0.55 : 1,
                  pointerEvents: isActive ? "none" : "auto",
                }}
                title={isActive ? "Already filtered" : "Filter by skill"}
              >
                {skill}
              </span>
            );
          })}
        </div>
        <ul className="project-card-description">
          {project.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        <div className="project-card-links">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage({ navProps }) {
  const location = useLocation();

  // Pull filterSkill from navigation state (string) and wrap in an array
  const navSkill = location.state?.filterSkill;
  const initialFilter = navSkill ? [navSkill] : [];

  const [selectedSkills, setSelectedSkills] = useState(initialFilter);
  const [picklist, setPicklist] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // If you navigate here again with a new skill, reset the selectedSkills
  useEffect(() => {
    if (navSkill) {
      setSelectedSkills([navSkill]);
      // clear the navigation state so re-visits don't re-filter
      window.history.replaceState({}, document.title);
    }
  }, [navSkill]);

  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) return projects;
    return projects.filter((p) =>
      selectedSkills.every((skill) => p.skills.includes(skill))
    );
  }, [selectedSkills]);

  // Available skills for picklist
  const filteredSkills = useMemo(
    () =>
      allSkills.filter(
        (skill) =>
          !selectedSkills.includes(skill) &&
          skill.toLowerCase().includes(picklist.toLowerCase())
      ),
    [picklist, selectedSkills]
  );

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prev) => [...prev, skill]);
      setPicklist("");
      setIsOpen(false);
    }
  };
  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className="main-vertical-container">
        <div className="projects-page-container">
          <h1 className="projects-title">Projects</h1>

          <div className="projects-filter-row">
            <span className="projects-filter-label">Filter by Skills:</span>
            <div className="projects-picklist-container">
              <input
                className="projects-picklist-input"
                type="text"
                placeholder={
                  selectedSkills.length
                    ? "Add more skills…"
                    : "Type or select a skill…"
                }
                value={picklist}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => {
                  setPicklist(e.target.value);
                  setIsOpen(true);
                }}
                onBlur={() => setTimeout(() => setIsOpen(false), 150)}
                autoComplete="off"
              />
              {isOpen && filteredSkills.length > 0 && (
                <ul className="projects-picklist-dropdown">
                  {filteredSkills.map((skill) => (
                    <li
                      key={skill}
                      onMouseDown={() => addSkill(skill)}
                      tabIndex={0}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="projects-skill-chiplist">
              {selectedSkills.map((skill) => (
                <span className="projects-skill-chip selected" key={skill}>
                  {skill}
                  <button
                    className="chip-remove-btn"
                    onClick={() => removeSkill(skill)}
                    aria-label="Remove skill"
                  >
                    <FaTimes />
                  </button>
                </span>
              ))}
              {selectedSkills.length > 0 && (
                <button
                  className="projects-skill-chip clear"
                  onClick={() => setSelectedSkills([])}
                  tabIndex={0}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.length === 0 ? (
              <div className="projects-empty">
                No projects match the selected skill(s).
              </div>
            ) : (
              filteredProjects.map((project, idx) => (
                <ProjectCard
                  project={project}
                  idx={idx}
                  key={project.title}
                  onSkillClick={addSkill}
                  selectedSkills={selectedSkills}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
