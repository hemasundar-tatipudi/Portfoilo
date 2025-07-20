import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import sectionsContent from "./sections";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import CertificationsPage from "./pages/CertificationsPage";
import SkillsPage from "./pages/SkillsPage";
/* import ContactPage from "./pages/ContactPage"; */

// Section function
function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

// Home component: Resume always comes after About Me
function Home(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Tooltip text for each section (customize as needed)
  const sectionTooltips = {
    about: "Learn more about me!",
    projects: "Explore my technical projects & code.",
    experience: "See my work experience & professional roles.",
    education: "Review my academic background.",
    certifications: "View my certifications & Verify my credentials.",
    skills: "Browse my programming languages, frameworks, and tools.",
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar {...props} />
      <div className={`main-vertical-container${props.isMobile ? " mobile" : ""}`}>
        {/* 👉 Instruction Line for Home Page */}
        <p className="home-instruct">
          <span role="img" aria-label="pointer">👉</span>
          Click any tile or section to explore more details!
        </p>
        <main>
          {sectionsContent.map((section) =>
            section.id === "resume" || section.id === "contact" ? (
              <Section key={section.id} id={section.id} title={section.title}>
                {section.content}
              </Section>
            ) : (
              <section
                key={section.id}
                id={section.id}
                className="section about-clickable-tile"
                onClick={() => navigate(`/${section.id}`)}
                style={{ cursor: "pointer" }}
                tabIndex={0}
                onKeyDown={e => (e.key === "Enter" ? navigate(`/${section.id}`) : null)}
                aria-label={`Go to ${section.title} Page`}
              >
                {/* Tooltip */}
                <span className="homepage-tooltip">
                  {sectionTooltips[section.id]}
                </span>
                <h2>{section.title}</h2>
                <div>{section.content}</div>
              </section>
            )
          )}
        </main>
      </div>
    </div>
  );
}

function App() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && window.innerWidth > 900) setExpanded(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navProps = {
    expanded,
    setExpanded,
    darkMode,
    setDarkMode,
    isMobile,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home {...navProps} />} />
        <Route path="/about" element={<AboutPage navProps={navProps} />} />
        <Route path="/resume" element={<ResumePage navProps={navProps} />} />
        <Route path="/projects" element={<ProjectsPage navProps={navProps} />} />
        <Route path="/experience" element={<ExperiencePage navProps={navProps} />} />
        <Route path="/education" element={<EducationPage navProps={navProps} />} />
        <Route path="/certifications" element={<CertificationsPage navProps={navProps} />} />
        <Route path="/skills" element={<SkillsPage navProps={navProps} />} />
        {/* <Route path="/contact" element={<ContactPage navProps={navProps} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
