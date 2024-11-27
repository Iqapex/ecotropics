import React, { useState } from "react";
import "./Process.css";


const DonateForm = ({ closePopup }) => {
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
    try {
      const response = await fetch("http://localhost:5000/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Donation submitted successfully");
        closePopup();
      } else {
        alert("Error submitting donation");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error, please try again later.");
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Donate Form</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter donation amount"
          required
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional message"
        />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default DonateForm;
