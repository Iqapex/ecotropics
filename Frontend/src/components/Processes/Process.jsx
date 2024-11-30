
import React, { useState, useEffect } from 'react';
import './Process.css';
import Donation from './Donation';
import Volunteer from './Volunteer';
import Partner from './Partner';

const steps = [
  {
    title: 'Donate',
    description: 'Donate to our initiatives and help us reach more communities.',
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const [selectedStep, setSelectedStep] = useState(null);

  const handleCardClick = (step) => {
    setSelectedStep(step);
  };

  const closePopup = () => {
    setSelectedStep(null);
  };

  const renderForm = () => {
    switch (selectedStep.title) {
      case 'Donate':
        return <Donation onClose={closePopup} />;
      case 'Volunteer':
        return <Volunteer onClose={closePopup} />;
      case 'Partner with Us':
        return <Partner onClose={closePopup} />;
      default:
        return null;
    }
  };

  return (
    <div className="process-section">
      <h1 className="process-heading" id='get-involved'>Get Involved</h1>
      <p className="process-para">
        ZAMSOF relies on the collective effort of individuals, communities, and
        organizations to drive change. Here's how you can show your solidarity
        and support the movement:
      </p>
      <div className="process-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="cardP" onClick={() => handleCardClick(step)}>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="arrow"></div>}
          </React.Fragment>
        ))}
      </div>

      {selectedStep && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {renderForm()}
            <button className="close-btn" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Process;