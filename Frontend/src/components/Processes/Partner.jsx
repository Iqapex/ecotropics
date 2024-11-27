import React, { useState } from "react";
import "./Process.css";


const PartnerForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    address: "",
    partnershipType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Partner form submitted successfully");
        closePopup();
      } else {
        alert("Error submitting partner form");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error, please try again later.");
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Partner Form</h2>
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
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          required
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="form-group">
        <label>Partnership Type</label>
        <input
          type="text"
          name="partnershipType"
          value={formData.partnershipType}
          onChange={handleChange}
          placeholder="Sponsorship/Collaboration"
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

export default PartnerForm;
