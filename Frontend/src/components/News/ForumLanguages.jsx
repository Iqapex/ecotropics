
import "./News.css";
import { languages } from "../../Data/News";

function ForumLanguages() {
  return (
    <section className="languages-section">
      <div className="languages-container">
        <h2 className="languages-title">Languages for Participation in Forums</h2>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div className="language-card" key={index}>
              <h3 className="language-name">{language.name}</h3>
              <p className="language-description">{language.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForumLanguages;
