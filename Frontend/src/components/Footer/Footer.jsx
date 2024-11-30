import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Thematic", path: "/thematic" },
    { name: "News", path: "/news" },
    { name: "About Us", path: "/about" },
  ];
  const featureLinks = [
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/news#upcomming-event" }, // Update the path to include #news-container
    { name: "Get Involved", path: "/#get-involved" },
    { name: "Donate", path: "/#get-involved" },
  ];

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="column about-us">
          <h3>About Us</h3>
          <p>
            ZAMSOF is a network of Civil Society Organizations, Movements, and
            Community groups part of the World Social Forum, participating in
            the Southern Africa and African Social Forums, and the World Social
            Forum.
          </p>
        </div>

        {/* Quick Links */}
        <div className="column quick-links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={scrollToTop}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Feature Links */}
        <div className="column feature-links">
          <h3>Feature Links</h3>
          <ul>
            {featureLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="column contact-us">
          <h3>Contact Us</h3>
          <p>ZAMSOF Secretariat:</p>
          <p>Plot No. 4225, Chilimbulu Road, Chilenje South, Lusaka, Zambia</p>
          <p>
            Email:{" "}
            <a href="mailto:zamsof@zambia.co.zm">zamsof@zambia.co.zm</a> /{" "}
            <a href="mailto:zamsof.forum@gmail.com">zamsof.forum@gmail.com</a>
          </p>
          <p>Phone: + 260 950 72 11 22 / +260 978 80 30 32</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 ZAMSOF. All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
