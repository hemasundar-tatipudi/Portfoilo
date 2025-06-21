// src/sections/index.js
import { FaUser, FaFileAlt, FaProjectDiagram, FaBriefcase, FaUniversity, FaCertificate, FaCode, FaEnvelope } from "react-icons/fa";

import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import Skills from "./Skills";
import Contact from "./Contact";

const sectionsContent = [
  { id: "about", title: "About Me", content: About, icon: <FaUser /> },
  { id: "resume", title: "Resume", content: Resume, icon: <FaFileAlt /> },
  { id: "projects", title: "Projects", content: Projects, icon: <FaProjectDiagram /> },
  { id: "experience", title: "Experience", content: Experience, icon: <FaBriefcase /> },
  { id: "education", title: "Education", content: Education, icon: <FaUniversity /> },
  { id: "certifications", title: "Certifications", content: Certifications, icon: <FaCertificate /> },
  { id: "skills", title: "Skills", content: Skills, icon: <FaCode /> },
  { id: "contact", title: "Contact", content: Contact, icon: <FaEnvelope /> },
];

export default sectionsContent;
