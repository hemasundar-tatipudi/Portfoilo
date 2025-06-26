import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = (
  <div className="contact-card-container">
    <a
      href="https://github.com/hemasundar-tatipudi"
      className="contact-card-icon github"
      data-tooltip="GitHub: hemasundar-tatipudi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/findmehere-hs/"
      className="contact-card-icon linkedin"
      data-tooltip="LinkedIn: findmehere-hs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
    <a
      href="mailto:hemasundarhs53@gmail.com"
      className="contact-card-icon gmail"
      data-tooltip="Email: hemasundarhs53@gmail.com"
      aria-label="Gmail"
    >
      <SiGmail />
    </a>
    <a
      href="tel:+13854360938"
      className="contact-card-icon phone"
      data-tooltip="Phone: +1 (385) 436-0938"
      aria-label="Phone"
    >
      <FaPhone />
    </a>
  </div>
);

export default Contact;
