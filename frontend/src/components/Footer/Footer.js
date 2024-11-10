import React from "react";
import "./Footer.css";

const Footer = () => {
  const quickLinks = ["Home", "Thematic", "News", "About Us"];
  const featureLinks = ["Projects", "Events", "Get Involved", "Donate"];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="column about-us">
          <h3>About Us</h3>
          <p>
            ZAMSOF is a network of Civil Society Organizations, Movements, and
            Community groups part of the World Social Forum, participating in
            the Southern Africa and African Social Forums, and the World Social
            Forum.
          </p>
        </div>

        <div className="column quick-links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="column feature-links">
          <h3>Feature Links</h3>
          <ul>
            {featureLinks.map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="column contact-us">
          <h3>Contact Us</h3>
          <p>ZAMSOF Secretariat:</p>
          <p>Plot No. 4225, Chilimbulu Road, Chilenje South, Lusaka, Zambia</p>
          <p>
            Email:{" "}
            <a href="mailto:zamsof@zambia.co.zm">zamsof@zambia.co.zm</a> /{" "}
            <a href="mailto:zamsof.forum@gmail.com">zamsof.forum@gmail.com</a>
          </p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ZAMSOF. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
