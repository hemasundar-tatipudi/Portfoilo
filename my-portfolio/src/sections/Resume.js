import React from "react";
import { Link } from "react-router-dom";

export default (
  <div>
    <p>
      <Link
        to="/resume"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "0.7em 1.2em",
          background: "#3578e5",
          color: "#fff",
          borderRadius: "0.5em",
          fontWeight: 600,
          textDecoration: "none",
          marginTop: "0.7em",
          transition: "background 0.17s"
        }}
      >
        View Full Resume
      </Link>
    </p>
  </div>
);
