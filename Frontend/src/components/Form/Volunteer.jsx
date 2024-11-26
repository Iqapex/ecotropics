import React, { useState } from 'react';
import './Volunteer.css';

const Volunteer = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Thank you for volunteering! We’ll get in touch with you soon.');
    setTimeout(() => {
      setSuccessMessage('');
      onClose();
    }, 3000);
  };

  return (
    <div className="volunteer-form-container">
      <h2 className="volunteer-form-title">Volunteer with Us</h2>
      {successMessage && <p className="volunteer-form-success">{successMessage}</p>}
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills & Expertise</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Tell us about your skills and expertise"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
