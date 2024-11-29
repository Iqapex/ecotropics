import React, { useState } from "react";
import "./Partner.css";

const Partner = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    address: "",
    partnershipType: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages
    setSuccessMessage(""); // Clear any previous success messages

    try {
      const response = await fetch("https://zamsof.onrender.com/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(
          "Thank you for partnering with us! We will connect with you ASAP."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          address: "",
          partnershipType: "",
          message: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
          closePopup();
        }, 3000);
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "An error occurred while submitting the form."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Partner Form</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="form-input">
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
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            pattern="[0-9]{10}" // Example: Only accept 10-digit numbers
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
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional message"
          rows="4"
        />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Partner;
