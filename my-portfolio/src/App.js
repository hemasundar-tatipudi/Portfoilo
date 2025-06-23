import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import sectionsContent from "./sections";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaMoon, FaSun } from "react-icons/fa";

function Navbar({ expanded, setExpanded, darkMode, setDarkMode }) {
  return (
    <nav className={`navbar-vertical${expanded ? " expanded" : ""}`}>
      <div className="logo-title-vertical">
        <img src={logo} alt="Logo" className="logo-vertical" />
        {expanded && (
          <div className="navbar-name-block">
            <span className="navbar-name">HEMASUNDAR</span>
            <span className="navbar-name">TATIPUDI</span>
          </div>
        )}
      </div>
      <ul className="navbar-links-vertical">
        {sectionsContent.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              title={!expanded ? section.title : undefined}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* Dark Mode Toggle */}
      <button
        className="dark-toggle"
        onClick={() => setDarkMode((d) => !d)}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      {/* Expand/Collapse Toggle */}
      <button
        className="nav-toggle nav-toggle-bottom"
        onClick={() => setExpanded((e) => !e)}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function App() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) setExpanded(true);
      else setExpanded(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add dark or light class to root
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar
        expanded={expanded}
        setExpanded={setExpanded}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="main-vertical-container">
        <main>
          {sectionsContent.map((section) => (
            <Section key={section.id} id={section.id} title={section.title}>
              {section.content}
            </Section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
