import React, { useState } from 'react';
import './Process.css';

const steps = [
  {
    title: 'Donate',
    description: 'Donate to our initiatives and help us reach more communities.',
    formFields: [
      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name', required: true },
      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
      { label: 'Amount', name: 'amount', type: 'number', placeholder: 'Enter donation amount', required: true },
      { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Additional message', required: false },
    ],
  },
  {
    title: 'Volunteer',
    description: 'Volunteer opportunities: teach, provide healthcare, or protect the environment.',
    formFields: [
      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name', required: true },
      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
      { label: 'Phone Number', name: 'phone', type: 'text', placeholder: 'Enter your phone number', required: true },
      { label: 'Skills & Expertise', name: 'skills', type: 'textarea', placeholder: 'Tell us about your skills and expertise', required: true },
      { label: 'Availability', name: 'availability', type: 'text', placeholder: 'When are you available?', required: true },
      { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Additional message', required: false },
    ],
  },
  {
    title: 'Partner with Us',
    description: 'We partner with businesses, NGOs, and governments to expand impact.',
    formFields: [
      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name', required: true },
      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
      { label: 'Phone Number', name: 'phone', type: 'text', placeholder: 'Enter your phone number', required: true },
      { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter your company name', required: true },
      { label: 'Partnership Type', name: 'partnershipType', type: 'text', placeholder: 'Sponsorship/Collaboration', required: true },
      { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Additional message', required: false },
    ],
  },
];

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    companyName: '',
    message: '',
    phone: '',
    availability: '',
    partnershipType: '',
    amount: '',
  });

  const handleCardClick = (step) => {
    setSelectedStep(step);
  };

  const closePopup = () => {
    setSelectedStep(null);
    setFormData({
      name: '',
      email: '',
      skills: '',
      companyName: '',
      message: '',
      phone: '',
      availability: '',
      partnershipType: '',
      amount: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    const apiEndpoint = selectedStep.title === 'Volunteer' ? 'http://localhost:5000/api/volunteer' :
                        selectedStep.title === 'Partner with Us' ? 'http://localhost:5000/api/partner' :
                        selectedStep.title === 'Donate' ? 'http://localhost:5000/api/donate' :

    await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => {
      if (response.ok) {
        alert(`${selectedStep.title} form submitted successfully`);
        closePopup();
      } else {
        alert('Error submitting the form');
      }
    });
  };

  const renderForm = () => {
    if (!selectedStep) return null;

    return (
      <form className="popup-form" onSubmit={handleSubmit}>
        <h2>{selectedStep.title} Form</h2>
        {selectedStep.formFields.map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows="4"
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className="process-section">
      <h1 className="process-heading">Get Involved</h1>
      <p className="process-para">
        ZAMSOF relies on the collective effort of individuals, communities, and
        organizations to drive change. Here’s how you can show your solidarity
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
