import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import "./Resume.css";

export default (
  <div className="resume-btn-center">
    <div className="resume-tooltip-container">
      <Link
        to="/resume"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Full Resume (PDF)"
        className="resume-pdf-link"
      >
        <FaFilePdf className="resume-pdf-icon" />
      </Link>
      <span className="resume-tooltip">View Full Resume (PDF)</span>
    </div>
  </div>
);
