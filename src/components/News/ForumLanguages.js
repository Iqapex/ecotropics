import React from "react";
import Fade from "react-reveal/Fade";
import "./News.css";
import { languages } from "../../Data/News";

function ForumLanguages() {
  return (
    <section className="languages-section">
      <div className="languages-container">
        <Fade bottom>
          <h2 className="languages-title">Languages for Participation in Forums</h2>
        </Fade>
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
