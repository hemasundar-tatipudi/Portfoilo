// src/sections/Projects.js
import "./Projects.css";

const projects = [
  {
    title: "CovidStat Visualizer",
    description: "Animated dashboard visualizing COVID-19 trends, interventions, and vaccination effects across EU/EEA countries."
  },
  {
    title: "StockWave – Dynamic Stock Forecasting",
    description: "LSTM-based stock forecasting app with real-time prediction, technical features, Flask API, and React frontend."
  },
  {
    title: "Book Store",
    description: "Full-stack online bookstore with JWT authentication, admin controls, and real-time inventory tracking."
  },
  {
    title: "Bitcoin Price Prediction",
    description: "Predicts Bitcoin prices using regression on historical blockchain data, with visualization and evaluation."
  },
  {
    title: "Word Cloud",
    description: "Generates interactive word clouds from text files using Python in Jupyter Notebook environments."
  },
  {
    title: "Non-Preemptive SJF-Priority",
    description: "Simulates CPU scheduling with SJF and aging-based priorities for fair, efficient job processing."
  },
  {
    title: "Hospital Management System",
    description: "C-based terminal app for managing patient records, appointments, and visit logs in clinics."
  },
  // ...Add more projects here
];

export default (
  <div className="section-projects-cards">
    {projects.map((project) => (
      <div className="section-project-card" key={project.title}>
        <div className="section-project-title">{project.title}</div>
        <div className="section-project-desc">{project.description}</div>
      </div>
    ))}
  </div>
);
