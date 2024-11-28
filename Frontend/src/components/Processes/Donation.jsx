import React, { useState } from "react";
import "./Donation.css";

const Donation = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = "http://localhost:5000/api/donate";

    await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        alert("Thank you for your generous donation!");
        onClose();
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Donate Now</h2>
      <div className="info">
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
          <label htmlFor="amount">Donation Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter donation amount"
            required
          />
        </div>
        </div>
        <div className="btn">
        <div className="form-group full-width">
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
          />
        </div>
        <button type="submit" className="submit-btn">
          Donate
        </button>
      </div>
    </form>
  );
};

export default Donation;
