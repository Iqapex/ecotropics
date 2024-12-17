
import "./Home.css";
import { uniquenessPoints } from "../../Data/Home";

function Uniqueness() {
  return (
    <section className="uniqueness-section">
      <div className="uniqueness-container">
        {/* Title */}
        <h2 className="uniqueness-title fade-in">What Makes ZAMSOF Unique?</h2>

        {/* Description */}
        <p className="uniqueness-description fade-in delay-200">
          ZAMSOF stands out for its commitment to creating sustainable impact. Here is what makes us unique:
        </p>

        {/* Uniqueness points */}
        <div className="uniqueness-grid">
          {uniquenessPoints.map((point, index) => (
            <div className={`uniqueness-card fade-in delay-${index * 300}`} key={index}>
              <div className="text-content">
                <span className="uniqueness-icon">✔</span>
                <p>{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Uniqueness;
