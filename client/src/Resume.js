import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Khushi Patel</h1>
        <p>
          2400 4th Ave | (123) 456-7890 |
          patelkhushibennares@cityuniversity.education
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle USA | Sep 2024</p>
          <p>GPA: 3.9/4.0</p>

          <h3>Bachelor of Science in Engineering </h3>
          <p>Hansaba College Of Engineering & Technology, India | May 2021</p>
          <p>GPA: 3.7/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="projects">
          <h3>Technical Support Lead</h3>
          <p>Storm Academy, India | Mar 2021 - Aug 2024</p>
          <p>
            Automated administrative forms, reducing processing time by 40%.
            Installed, configured, and repaired computers and operating systems.
            Set up Wi-Fi and RJ45 connections for lab networks and secure file sharing.
            Assisted instructors with LMS setup, digital materials, and classroom tech support. 
            Created Excel tools and logbooks to track attendance, performance, and lesson records.
            Supported IT staff in maintaining lab infrastructure and troubleshooting system issues.
            Provided tutoring in computer fundamentals, operating systems, and networking. 
            Managed front-desk operations and ensured classrooms were prepared and functional.

          </p>
          

          <h3>Skills</h3>
          <p>
            UI/UX Design |
            Graphics Design |
            HTML / CSS |
            Figma / Adobe XD |
            Node.js / Express.js |
            AWS |
            Communication |
            Python |
            Problem Solving 
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;