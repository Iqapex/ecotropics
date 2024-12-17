import "./Home.css";
import { uniquenessPoints } from "../../Data/Home";

function Uniqueness() {
  return (
    <section className="uniqueness-section">
      <div className="uniqueness-container">
        {/* Title */}
        <h2 className="uniqueness-title">What Makes ZAMSOF Unique?</h2>

        {/* Description */}
        <p className="uniqueness-description">
          ZAMSOF stands out for its commitment to creating sustainable impact. Here is what makes us unique:
        </p>

        {/* Uniqueness points */}
        <div className="uniqueness-grid">
          {uniquenessPoints.map((point, index) => (
            <div className="uniqueness-card" key={index}>
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
