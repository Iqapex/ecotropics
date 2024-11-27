import React, { useState } from "react";
import img from "../../assets/hero2.jpg";
import HeroAbout from "../HeroAbout/HeroAbout";
import "./Contact.css"; // Import the separate CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false); // State to handle submission message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setShowMessage(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
  
        // Auto-hide success message
        setTimeout(() => setShowMessage(false), 3000);
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <>
      <HeroAbout img={img} text="CONTACT US" />
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="title">About Zamsof</h2>
          <p>
          ZAMSOF is a movement empowering communities through advocacy, education, sustainability, and global partnerships for change.
            Zamsof is committed to supporting Zambia’s software development
            community...
          </p>
          <p>
            <strong>Address:</strong> Plot No. 4225, Chilimbulu Road...
          </p>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.2453020182736!2d28.2970051!3d-15.4296642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194a1c6162f979b5%3A0x4e83f29d6246850!2sChilimbulu%20Road%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1601480211499!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p>
            <strong>Email:</strong> zamsof@zambia.co.zm / zamsof.forum@gmail.com
          </p>
          <p><strong>Mob: </strong>+ 260 950 72 11 22 / +260 978 80 30 32</p>
        </div>

        <div className="contact-form">
          <h2 className="title">Contact Us</h2>
          <p>
            Have questions or need more information? Get in touch with us...
          </p>
          {showMessage && (
            <div className="success-message">
              Thank you! Your message has been submitted.
            </div>
          )}{" "}
          {/* Submission message */}
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {" "}
              {/* Grid layout for form groups */}
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
          </form>
          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" onClick={handleReset} className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
