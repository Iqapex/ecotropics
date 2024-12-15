import { useState } from "react";
import "./Volunteer.css";

const VolunteerForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address:"",
    availability: "",
    skills: "",
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
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:4000/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(
          "Thank you for volunteering with us! We will connect with you ASAP."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          address:"",
          availability: "",
          skills: "",
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
      alert("Network error, please try again later.");
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Volunteer Form</h2>
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
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
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
            placeholder="Enter your address number"
            required
          />
        </div>
        <div className="form-group">
          <label>Availability</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="When are you available?"
            required
          />
        </div>
        <div className="form-group">
          <label>Skills & Expertise</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Tell us about your skills"
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

export default VolunteerForm;
