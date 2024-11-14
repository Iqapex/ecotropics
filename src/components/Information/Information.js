import React,{useState} from 'react';
import './information.css';


function Information() {
  const [isAccordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen(isAccordionOpen === index ? null : index);
  };
  return (
    <div className="container">
      {/* Vision Statement */}
      <section className="section">
        <div className="vision-box">
          <h2 className="section-title">Vision Statement</h2>
          <p className="section-content">
            Our vision is to create a world where justice, equality, and sustainability are at the forefront of every community's goals. By mobilizing individuals, communities, and institutions, we aim to foster collaborative efforts towards a fair and prosperous future for all.
          </p>
          <p className="section-content">
            We believe in empowering citizens through education, advocacy, and grassroots organizing to take charge of their futures and ensure their voices are heard on issues that matter most to them.
          </p>
        </div>
      </section>

      {/* Beliefs & Values (Accordion) */}
      <section className="section">
        <h2 className="section-title">Our Beliefs & Values</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(0)}>
              Equality for All
            </button>
            {isAccordionOpen === 0 && (
              <div className="accordion-content">
                <p>
                  We strive to ensure equal opportunities and rights for every individual, regardless of race, gender, or socioeconomic background.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(1)}>
              Environmental Sustainability
            </button>
            {isAccordionOpen === 1 && (
              <div className="accordion-content">
                <p>
                  Our work centers around preserving the planet for future generations by addressing climate change and advocating for renewable energy.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(2)}>
              Collaboration & Solidarity
            </button>
            {isAccordionOpen === 2 && (
              <div className="accordion-content">
                <p>
                  We work alongside communities, organizations, and governments to achieve our shared goals, believing that collective action drives the most impactful change.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section">
        <h2 className="section-title">Strategic Objectives (2024-2027)</h2>
        <div className="objectives">
          <div className="objective-card">
            <h3>Objective 1: Expand Education Programs</h3>
            <p>Goal: Increase access to education by launching new initiatives in rural and underserved communities.</p>
            <p>Milestone: Enroll 10,000 students in our scholarship and mentorship programs by 2027.</p>
          </div>
          <div className="objective-card">
            <h3>Objective 2: Strengthen Advocacy Networks</h3>
            <p>Goal: Build stronger connections between local organizations and global partners to enhance advocacy efforts.</p>
            <p>Milestone: Establish partnerships with 50 new NGOs and advocacy groups over the next 3 years.</p>
          </div>
          <div className="objective-card">
            <h3>Objective 3: Increase Environmental Efforts</h3>
            <p>Goal: Double our efforts to combat climate change by working with governments, businesses, and communities.</p>
            <p>Milestone: Reduce carbon emissions in partner regions by 20% by 2027.</p>
          </div>
        </div>
      </section>
    </div>
  );

}


export default Information;
