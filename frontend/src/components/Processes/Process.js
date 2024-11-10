import React from 'react';
import './Process.css';

const steps = [
  {
    title: 'Donate',
    description: 'Your donation helps fund programs, reaching communities in need.',
  },
  {
    title: 'Volunteer',
    description: 'Volunteer opportunities: teach, provide healthcare, or protect the environment.',
  },
  {
    title: 'Partner with Us',
    description: 'We partner with businesses, NGOs, and governments to expand impact.',
  },
];

const Process = () => {
  return (
    <div className="process-section">
      <h1 className="process-heading">Get Involved</h1>
      <div className="process-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="cardP">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="arrow"></div>} 
            {/* Arrow except after last card */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Process;
