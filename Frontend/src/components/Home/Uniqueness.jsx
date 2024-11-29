// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { uniquenessPoints } from "../../Data/Home";

function Uniqueness() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { delay } }),
  };

  return (
    <section className="uniqueness-section">
      <div className="uniqueness-container">
        {/* Fade animation for the title */}
        <motion.h2
          className="uniqueness-title"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInVariant}
        >
          What Makes ZAMSOF Unique?
        </motion.h2>

        {/* Fade animation for the description */}
        <motion.p
          className="uniqueness-description"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeInVariant}
        >
          ZAMSOF stands out for its commitment to creating sustainable impact. Here's what makes us unique:
        </motion.p>

        {/* Fade animation for each uniqueness point */}
        <div className="uniqueness-grid">
          {uniquenessPoints.map((point, index) => (
            <motion.div
              className="uniqueness-card"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.3}
              variants={fadeInVariant}
            >
              <div className="text-content">
                <span className="uniqueness-icon">✔</span>
                <p>{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Uniqueness;
