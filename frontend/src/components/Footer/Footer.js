// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
            <div style={{display:"flex",justifyContent:"space-between"}}>
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>A brief description of your company and its mission.</p>
          </div>
          <div className="col-md-6 " style={{marginRight:"7rem"}}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <p>123 Main Street, City</p>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
