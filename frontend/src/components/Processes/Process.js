import React from 'react';
import './Process.css';

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
  return (
    <div className="process-section">
      <h1 className="process-heading">Get Involved</h1>
      <p className='process-para'>
        ZAMSOF relies on the collective effort of individuals, communities, and organizations to drive change. Here’s how you can show your solidarity and support the movement:
      </p>
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
