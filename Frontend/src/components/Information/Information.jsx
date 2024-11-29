import React from "react";
import { motion } from "framer-motion";
import "./information.css";
import AboutData from "../../Data/About";

function Information() {
  const { vision, beliefs, objectives } = AboutData;

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { delay } }),
  };

  return (
    <div className="information-page">
      {/* Vision Statement */}
      <section className="section bg-gradient-vision">
        <motion.div
          className="vision-box"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInVariant}
        >
          <h2 className="section-title">{vision.title}</h2>
          {vision.content.map((text, index) => (
            <p key={index} className="section-content">{text}</p>
          ))}
        </motion.div>
      </section>

      {/* Beliefs & Values */}
      <section className="section bg-gradient-beliefs">
        <h2 className="section-title">Our Beliefs & Values</h2>
        <div className="accordion">
          {beliefs.map((belief, index) => (
            <motion.div
              className="accordion-item hover-effect"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h3>{belief.title}</h3>
              <p>{belief.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section bg-gradient-objectives">
        <h2 className="section-title">Strategic Objectives (2025-2027)</h2>
        <div className="objectives">
          {objectives.map((objective, index) => (
            <motion.div
              className="objective-card hover-effect"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h3>{objective.title}</h3>
              <p>
                <strong>Goal:</strong> {objective.goal}
              </p>
              <p>
                <strong>Milestone:</strong> {objective.milestone}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Information;
