import React, { useState } from 'react';
import img from '../../assets/hero2.jpg';
import Footer from '../Footer/Footer';
import HeroAbout from '../HeroAbout/HeroAbout';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form data submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
      <HeroAbout img={img} text="CONTACT US" />
      <div className="contact-container">
        <p className="contact-description">
          Have questions or need more information? Get in touch with us! Our team is here to assist you
          and provide the support you need to succeed. Reach out to us via email, phone, or through our
          social media channels.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
            <button type="button" className="btn reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
