import React, { useState } from 'react';
import './Process.css';
import Donation from '../Form/Donation';
import Partner from '../Form/Partner';
import Volunteer from '../Form/Volunteer';

const steps = [
  {
    title: 'Donate',
    description: 'Donate to our initiatives and help us reach more communities.',
    action: 'donate',
  },
  {
    title: 'Volunteer',
    description: 'Volunteer opportunities: teach, provide healthcare, or protect the environment.',
    action: 'volunteer',
  },
  {
    title: 'Partner with Us',
    description: 'We partner with businesses, NGOs, and governments to expand impact.',
    action: 'partner',
  },
];

const Process = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (action) => {
    setModalContent(action);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="process-section">
      <h1 className="process-heading">Get Involved</h1>
      <p className="process-para">
        ZAMSOF relies on the collective effort of individuals, communities, and organizations to drive change. Here’s how you can show your solidarity and support the movement:
      </p>
      <div className="process-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="cardP"
              onClick={() => handleCardClick(step.action)}
            >
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="arrow"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Modal Section */}
      {modalContent && (
        <div className="modal">
          <button className="modal-close-btn" onClick={closeModal}>✖</button>
          {modalContent === 'donate' && <Donation onClose={closeModal} />}
          {modalContent === 'volunteer' && <Volunteer onClose={closeModal} />}
          {modalContent === 'partner' && <Partner onClose={closeModal} />}
        </div>
      )}
    </div>
  );
};

export default Process;
