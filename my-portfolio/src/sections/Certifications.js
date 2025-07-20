import "./Certifications.css";
const certs = [
  "Salesforce Certified Administrator",
  "Certified System Architect (CSA)",
  "Salesforce Certified Platform Developer I",
  "Certified Senior System Architect (CSSA)"
];
export default (
  <ul className="section-cert-columns-list">
    {certs.map(cert => (
      <li className="section-cert-columns-li" key={cert}>
        <span className="section-cert-columns-text">{cert}</span>
      </li>
    ))}
  </ul>
);
