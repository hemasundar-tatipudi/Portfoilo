// src/sections/Projects.js
import "./Projects.css";

const projects = [
  {
    title: "CovidStat Visualizer",
    description: "Animated dashboard visualizing COVID-19 trends, interventions, and vaccination effects across EU/EEA countries."
  },
  {
    title: "StockWave – Dynamic Stock Forecasting and Visualization",
    description: "StockWave is a PySpark-powered platform for real-time stock trend forecasting and interactive market visualizations using ML and mathematical models."
  },
  {
    title: "Book Store",
    description: "Full-stack online bookstore with JWT authentication, admin controls, and real-time inventory tracking."
  },
  {
    title: "Order Management System",
    description: "Order Management System is a Salesforce-based application for end-to-end order processing and tracking, featuring custom Apex logic and rich LWC/Visualforce UIs."
  },
  {
    title: "House Value Prediction",
    description: "House Value Prediction is a regression-based ML project forecasting home prices from socioeconomic and structural features using feature engineering and model evaluation."
  },
  {
    title: "Coffee Machine",
    description: 
  },
  {
    title: "Railway Reservation System Website",
    description: "Railway Reservation System Website is a full-featured web app for ticket booking, trip planning, and live train status—mirroring core IRCTC functionalities without external integrations."
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
  {
    title: "Ice Cream Parlor",
    description: "Ice Cream Parlour Management System is a C++ console application that simulates real-world shop operations—including sales, restocking, and price calculations—while persisting data to a local file."
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
