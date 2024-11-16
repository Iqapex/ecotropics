// src/components/Uniqueness.js
import React from "react";
import Fade from "react-reveal/Fade";
import "./Home.css";

const uniquenessPoints = [
  "An inclusive movement that engages people from all walks of life.",
  "Focused on sustainable development and grassroots mobilization.",
  "Collaborates with a variety of partners, from local to global.",
  "Innovative solutions tailored to specific community needs.",
];

function Uniqueness() {
  return (
    <section className="uniqueness-section">
      <div className="uniqueness-container">
        {/* Fade animation for the title */}
        <Fade bottom>
          <h2 className="uniqueness-title">What Makes ZAMSOF Unique?</h2>
        </Fade>
        
        {/* Fade animation for the description */}
        <Fade bottom delay={200}>
          <p className="uniqueness-description">
            ZAMSOF stands out for its commitment to creating sustainable impact. Here's what makes us unique:
          </p>
        </Fade>
        
        {/* Fade animation for each uniqueness point */}
        <div className="uniqueness-grid">
          {uniquenessPoints.map((point, index) => (
            <Fade bottom delay={index * 300} key={index}>
              <div className="uniqueness-card">
                <div className="text-content">
                  <span className="uniqueness-icon">✔</span>
                  <p>{point}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Uniqueness;
