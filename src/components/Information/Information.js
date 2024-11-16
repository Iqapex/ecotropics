import React, { useState } from "react";
import "./information.css";
import Fade from "react-reveal/Fade";

function Information() {
  const [isAccordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen(isAccordionOpen === index ? null : index);
  };

  return (
    <div className="information-page">
      {/* Vision Statement */}
      <section className="section bg-gradient-vision">
        <Fade bottom>
          <div className="vision-box">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-content">
            A resilient and empowered society where marginalized voices are amplified, and communities
            thrive in harmony with the environment.
            </p>
            <p className="section-content">
            A society without injustices and Poverty in which Human Kind enjoys its rights to a life
            between it and the Earth
            </p>
            <h4>Communities across Zambia are empowered, resilient, and engaged in
            democratic governance, shaping a just, inclusive, and sustainable future</h4>
          </div>
        </Fade>
      </section>

      {/* Beliefs & Values (Accordion) */}
      <section className="section bg-gradient-beliefs">
        <h2 className="section-title">Our Beliefs & Values</h2>
        <div className="accordion">
          {[
            { title: "Equality for All", content: "We strive to ensure equal opportunities and rights for every individual, regardless of race, gender, or socioeconomic background." },
            { title: "Environmental Sustainability", content: "Our work centers around preserving the planet for future generations by addressing climate change and advocating for renewable energy." },
            { title: "Collaboration & Solidarity", content: "We work alongside communities, organizations, and governments to achieve our shared goals, believing that collective action drives the most impactful change." },
          ].map((belief, index) => (
            <Fade bottom delay={index * 200} key={index}>
              <div className="accordion-item">
              <h3>{belief.title}</h3>
                <p>{belief.content}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section bg-gradient-objectives">
        <h2 className="section-title">Strategic Objectives (2024-2027)</h2>
        <div className="objectives">
          {[
            {
              title: "Expand Education Programs",
              goal: "Increase access to education by launching new initiatives in rural and underserved communities.",
              milestone: "Enroll 10,000 students in our scholarship and mentorship programs by 2027.",
            },
            {
              title: "Strengthen Advocacy Networks",
              goal: "Build stronger connections between local organizations and global partners to enhance advocacy efforts.",
              milestone: "Establish partnerships with 50 new NGOs and advocacy groups over the next 3 years.",
            },
            {
              title: "Increase Environmental Efforts",
              goal: "Double our efforts to combat climate change by working with governments, businesses, and communities.",
              milestone: "Reduce carbon emissions in partner regions by 20% by 2027.",
            },
            {
              title: "Enhance Healthcare Access",
              goal: "Improve healthcare services in remote areas through mobile health clinics and telemedicine initiatives.",
              milestone: "Provide healthcare access to 100,000 individuals in underserved regions by 2027.",
            },
          ].map((objective, index) => (
            <Fade bottom delay={index * 200} key={index}>
              <div className="objective-card hover-effect">
              <h3>{objective.title}</h3>
                <p><strong>Goal:</strong> {objective.goal}</p>
                <p><strong>Milestone:</strong> {objective.milestone}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Information;
