import React from "react";
import Navbar from "../components/Navbar";
// Place your photo in /public/ as profile.jpg, or use a URL.
import profilePic from "../assets/logo.svg"; // Update path as needed

export default function AboutPage({ navProps }) {
  return (
    <div className="App">
      <Navbar {...navProps} />
      <div className="main-vertical-container">
        <div className="about-page-container">
          <div className="about-profile-pic-wrap">
            <img
              className="about-profile-pic"
              src={profilePic}
              alt="HemaSundar Tatipudi"
            />
          </div>
          <div className="about-card">
            <h1 className="about-name">HemaSundar Tatipudi</h1>
            <h3 className="about-location">Salt Lake City, Utah</h3>
            <div className="about-body">
              <p>
                Hi, I’m <b>HemaSundar Tatipudi</b>—a passionate software engineer and lifelong learner based in Salt Lake City, Utah. I hold a Master’s degree in Computer Science from the University of Utah and have over two years of professional experience as a Salesforce Developer and Full-Stack Engineer at Capgemini.
              </p>
              <p>
                <b>Professionally</b>, I thrive on solving complex problems and building impactful solutions. My expertise spans backend development, cloud platforms, and modern JavaScript frameworks like React. I’ve designed scalable systems, led automation initiatives that improved deployment efficiency, and collaborated with global teams to deliver successful products. I’m skilled in Python, JavaScript, Node.js, React, and Salesforce, and am a Salesforce Certified Administrator and Platform Developer I.
              </p>
              <p>
                I’m always curious about how technology can improve everyday life—from creating intuitive dashboards to exploring machine learning. Some of my favorite projects include <b>StockWave</b>, a stock market forecasting tool using LSTM neural networks, and <b>CovidStat Visualizer</b>, an interactive dashboard for real-time COVID-19 data analytics.
              </p>
              <p>
                <b>Beyond technology</b>, I enjoy an active lifestyle. I’m an avid cricket player and often spend weekends on the field. I also enjoy playing table tennis and badminton, which help me stay energized and balanced. When I’m not coding or on the court, you’ll find me hiking Utah’s scenic trails, catching up on tech podcasts, or volunteering to mentor budding programmers.
              </p>
              <p>
                I believe that curiosity, teamwork, and adaptability are essential—both in technology and in life. If you’re interested in connecting, collaborating, or just talking tech (or sports!), feel free to reach out. I’m always up for a great conversation.
              </p>
            </div>
            <div className="about-cta">
              <p>
                Curious about how this portfolio was built? 
                You can <a
                  href="https://github.com/hemasundar-tatipudi/Portfoilo"
                  className="about-cta-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view the source code on GitHub
                </a>. <br />
                If you like what you see, feel free to connect or even drop a ★! Contributions, feedback, and stars are always welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
