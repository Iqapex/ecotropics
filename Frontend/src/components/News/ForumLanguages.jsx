import React from "react";
import { motion } from "framer-motion";
import "./News.css";
import { languages } from "../../Data/News";

function ForumLanguages() {
  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { delay } }),
  };

  return (
    <section className="languages-section">
      <div className="languages-container">
        {/* Title Animation */}
        <motion.h2
          className="languages-title"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInVariant}
        >
          Languages for Participation in Forums
        </motion.h2>

        {/* Languages Grid */}
        <div className="languages-grid">
          {languages.map((language, index) => (
            <motion.div
              className="language-card"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h3 className="language-name">{language.name}</h3>
              <p className="language-description">{language.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForumLanguages;
