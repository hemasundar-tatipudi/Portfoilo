import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Project data (add 'website' as needed)
export const projects = [
  {
    title: "CovidStat Visualizer",
    skills: ["Python", "PySpark", "HTML", "CSS", "JavaScript", "D3.js"],
    description: [
      "CovidStat Visualizer is an interactive dashboard for exploring COVID-19 cases, deaths, vaccination rates, and government responses across EU/EEA countries, with animated charts and overlays for interventions.",
      "Users can analyze the effects of vaccination, testing, and government policies on pandemic outcomes, with annotated peaks marking key events.",
      "The tool offers bar chart comparisons, intervention filters, and embedded screencasts, serving as a resource for policymakers and public health professionals.",
    ],
    links: {
      github: "https://github.com/dataviscourse2024/group-project-covidstat-visualizer",
      website: "https://dataviscourse2024.github.io/group-project-covidstat-visualizer/"
    }
  },
  {
    title: "StockWave - Dynamic Stock Forecasting and Visualization",
    skills: ["Python", "PySpark", "Machine Learning", "Time Series Analysis", "Data Visualization"],
    description: [
      "Ingested and processed large-scale streaming stock data with Apache PySpark, extracting features such as historical prices, moving averages, and volatility metrics for model training.",
      "Developed and continuously retrained ML and mathematical time series models (LSTM) to predict near-term stock price movements and market trends.",
      "Built interactive dashboards using data visualization libraries to display forecasts, model performance, and key indicators, empowering investors with actionable insights."
    ],
    links: {
      github: null,
      website: null,
    }
  },
  {
    title: "Book Store",
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
  {
    title: "Order Management System",
    skills: ["Salesforce", "Apex", "SOQL", "Visualforce", "Lightning Web Components", "Aura"],
    description: [
      "Built a full-lifecycle order flow—product selection, cart assembly, and checkout—using custom LWC components for a responsive user experience and custom objects to model orders, items, and shipments.",
      "Implemented Apex classes and triggers for server-side order validation, inventory adjustments, and automated status updates, optimizing SOQL queries for bulk processing and enforcing security via Profiles and Permission Sets.",
      "Designed automated order approval and notification flows with Process Builder and Flow Builder, and created interactive dashboards for real-time operational KPIs."
    ],
    links: {
      github: null,
      website: null,
    }
  },
  {
    title: "House Value Prediction",
    skills: ["Python", "Machine Learning"],
    description: [
      "Gathered and preprocessed housing data—poverty percentage, student–teacher ratio, average rooms per dwelling, etc.—using pandas and NumPy to handle missing values and outliers.",
      "Engineered new features and trained regression models (Linear Regression, Random Forest) with scikit-learn, evaluating performance using RMSE and R² metrics to select the best model.",
      "Conducted hyperparameter tuning and visualized model predictions and feature importances with Matplotlib and Seaborn to derive insights on the key drivers of house prices."
    ],
    links: {
      github: null,
      website: null,
    }
  },
  {
    title: "Coffee Machine",
    skills: ["HTML", "CSS", "JavaScript"],
    description: [
      "Coffee Machine is a single-page web app that lets users order espresso, latte, or cappuccino in small, medium, or large sizes with sugar and syrup add-ons, showing a live price calculation.",
      "It maintains in-memory inventory of water, milk, beans, cups, sugar, and syrups, offering refill and collect-cash operations via a polished kiosk-style UI.",
      "Interactive controls include type and size radio buttons, sugar input, syrup options, real-time price updates, and alerts for low stock or successful brew, making it ideal for showcasing vanilla JS and DOM manipulation skills."
    ],
    links: {
      github: "https://github.com/hemasundar-tatipudi/Coffee-Machine/",
      website: "https://coffee-machine-preview.vercel.app/"
    }
  },
  {
    title: "Railway Reservation System Website",
    skills: ["HTML", "CSS", "JavaScript"],
    description: [
      "Developed a responsive web interface for searching trains, selecting routes, and booking tickets with passenger details and seat preferences.",
      "Implemented trip planning features to view upcoming journeys, past bookings, and generate printable e-tickets using client-side storage.",
      "Simulated live train status checks and dynamic seat availability using static data and JavaScript timers for real-time-like feedback."
    ],
    links: {
      github: null,
      website: null,
    }
  },
  {
    title: "Bitcoin Price Prediction",
    skills: ["Python", "Machine Learning"],
    description: [
      "Bitcoin Price Prediction is a data science project that leverages historical Bitcoin market and blockchain data to forecast the market price of Bitcoin.",
      "The project performs exploratory data analysis with visualizations, cleans and preprocesses the data, and builds a linear regression model using features such as market capitalization, transaction counts, miners' revenue, and hash rate.",
      "After model training and evaluation, the script predicts future Bitcoin prices on a provided test set.",
    ],
    links: {
      github: "https://github.com/hemasundar-tatipudi/Bitcoin-Price-Prediction",
      website: null
    }
  },
  {
    title: "Word Cloud",
    skills: ["Python"],
    description: [
      "Word-Cloud is a Python-based Jupyter Notebook application that creates a word cloud visualization from the contents of a text file.",
      "The program processes uploaded text, removing punctuation and common stop words, and then generates a visual word cloud representing the frequency of each unique word.",
      "Users can upload their own text files interactively using Jupyter widgets, making the process seamless and user-friendly.",
    ],
    links: {
      github: "https://github.com/yourusername/Word-Cloud",
      website: null
    }
  },
  {
    title: "Non-Preemptive SJF-Priority",
    skills: ["C"],
    description: [
      "This project implements a non-preemptive CPU scheduling algorithm inspired by Shortest Job First (SJF), but enhanced with an aging-based priority calculation to prevent starvation.",
      "Each process is assigned a priority computed as: Priority = 1 + (Waiting Time / Estimated Run Time). As waiting time increases, so does priority, allowing long-waiting jobs to be scheduled fairly.",
      "The scheduler sorts jobs first by arrival, then applies SJF, and finally re-orders jobs based on the calculated priority before execution.",
    ],
    links: {
      github: "https://github.com/hemasundar-tatipudi/Non-Preemptive-SJF_Priority",
      website: null
    }
  },
  {
    title: "Hospital Management System",
    skills: ["C"],
    description: [
      "Hospital Management System is a terminal-based C application that enables hospitals or clinics to manage patient records, including creating, updating, and viewing patient details, logging visit history, and generating appointment dates.",
      "Each patient's data is stored in a separate text file for easy retrieval or updates by patient ID, showcasing basic file handling, user input, and record management in C.",
    ],
    links: {
      github: "https://github.com/yourusername/Hospital-Management",
      website: null
    }
  },
  {
    title: "Ice Cream Parlor",
    skills: ["C++"],
    description: [
      "Implemented a menu-driven interface to handle ice cream sales—letting users choose flavors, sizes, and quantities—with real-time price calculations and receipt generation.",
      "Built inventory management using classes to track stock levels, enable restocking operations, and alert when ingredients run low.",
      "Persisted transaction history and inventory data to a local text file for session continuity, employing robust file I/O and error handling."
    ],
    links: {
      github: null,
      website: null,
    }
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
