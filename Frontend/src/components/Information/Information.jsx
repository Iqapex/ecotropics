
import "./information.css";
import AboutData from "../../Data/About";

function Information() {
  const { vision, beliefs, objectives } = AboutData;

  return (
    <div className="information-page">
      {/* Vision Statement */}
      <section className="section bg-gradient-vision">
        <div className="vision-box">
          <h2 className="section-title glow-text">{vision.title}</h2>
          {vision.content.map((text, index) => (
            <p key={index} className="section-content">{text}</p>
          ))}
        </div>
      </section>

      {/* Beliefs & Values */}
      <section className="section bg-gradient-beliefs">
        <h2 className="section-title glow-text">Our Beliefs & Values</h2>
        <div className="accordion">
          {beliefs.map((belief, index) => (
            <div className="accordion-item hover-effect interactive-card" key={index}>
              <h3>{belief.title}</h3>
              <p className="section-content">{belief.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section bg-gradient-objectives">
        <h2 className="section-title glow-text">Strategic Objectives (2025-2027)</h2>
        <div className="objectives">
          {objectives.map((objective, index) => (
            <div className="objective-card hover-effect interactive-card" key={index}>
              <h3>{objective.title}</h3>
              <p className="section-content"><strong>Goal:</strong> {objective.goal}</p>
              <p className="section-content"><strong>Milestone:</strong> {objective.milestone}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Information;
