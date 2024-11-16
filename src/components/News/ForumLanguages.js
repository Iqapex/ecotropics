// src/components/Languages.js
import React from "react";
import Fade from "react-reveal/Fade";
import "./News.css"; // Import custom CSS for additional styling

const languages = [
  {
    name: "English",
    description:
      "The primary language for international participation, ensuring wide reach."
  },
  {
    name: "French",
    description:
      "For Francophone countries, ZAMSOF ensures inclusion in the discussions."
  },
  {
    name: "Hindi",
    description:
      "Supporting participation from the Indian subcontinent with a wide user base."
  },
  {
    name: "Bengali",
    description:
      "Facilitating engagement from the Bengali-speaking population across regions."
  },
];

function ForumLanguages() {
  return (
    <section className="languages-section">
      <div className="languages-container">
        {/* Title with fade effect */}
        <Fade bottom>
          <h2 className="languages-title">Languages for Participation in Forums</h2>
        </Fade>

        {/* Language cards with fade-in animation */}
        <div className="languages-grid">
          {languages.map((language, index) => (
            <Fade bottom delay={index * 200} key={index}>
              <div className="language-card">
                <h3 className="language-name">{language.name}</h3>
                <p className="language-description">{language.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForumLanguages;
