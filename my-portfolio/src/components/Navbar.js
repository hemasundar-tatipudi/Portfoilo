import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaMoon, FaSun } from "react-icons/fa";
import sectionsContent from "../sections";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ expanded, setExpanded, darkMode, setDarkMode, isMobile }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirecting, setRedirecting] = useState(false);

  // Logo click handler with fade transition (works for both mobile & desktop)
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      setRedirecting(true);
      setTimeout(() => {
        setRedirecting(false);
        navigate("/", { replace: true });
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 15);
      }, 400);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Section navigation/scroll handler
  const handleSectionClick = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ----- MOBILE NAV -----
  if (isMobile) {
    const handleMobileChange = (e) => {
      const id = e.target.value;
      if (id) {
        if (id === "home") {
          navigate("/");
        } else {
          navigate("/", { state: { scrollTo: id } });
        }
      }
    };

    return (
      <>
        {redirecting && <div className="navbar-redirect-overlay" />}
        <div className="mobile-nav-dropdown">
          <div
            className="mobile-nav-logo-block"
            tabIndex={0}
            onClick={handleLogoClick}
            style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}
            aria-label="Go to Home Page"
            onKeyDown={e => (e.key === "Enter" ? handleLogoClick(e) : null)}
          >
            <img src={logo} alt="Logo" className="mobile-nav-logo" />
            <div className="mobile-navbar-name-block">
              <span className="mobile-navbar-name">HEMASUNDAR</span>
              <span className="mobile-navbar-name">TATIPUDI</span>
            </div>
          </div>
          <select
            className="mobile-nav-select"
            onChange={handleMobileChange}
            aria-label="Select section"
            defaultValue=""
          >
            <option value="" disabled>
              Navigate…
            </option>
            <option value="home">Home</option>
            {sectionsContent.map(section => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
          <button
            className="mobile-dark-toggle"
            onClick={() => setDarkMode((d) => !d)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </>
    );
  }

  // ----- DESKTOP / SIDEBAR NAV -----
  return (
    <>
      {redirecting && <div className="navbar-redirect-overlay" />}
      <nav className={`navbar-vertical${expanded ? " expanded" : ""}`}>
        <div className="logo-title-vertical">
          <span
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            onClick={handleLogoClick}
            tabIndex={0}
            onKeyDown={e => (e.key === "Enter" ? handleLogoClick(e) : null)}
            aria-label="Go to Home Page"
          >
            <img src={logo} alt="Logo" className="logo-vertical" />
          </span>
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
                onClick={handleSectionClick(section.id)}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-label">{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode((d) => !d)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="nav-toggle nav-toggle-bottom"
          onClick={() => setExpanded((e) => !e)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>
      </nav>
    </>
  );
}
