// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row1">
          <div className="about">
            <h4>About Us</h4>
            <p> 
            <p>ZAMSOF is a network of Civil Society Organizations, Movements, and Community groups</p>
            <p>part of the World Social Forum, participating in the Southern Africa</p>
            <p>and African Social Forums, and the World Social Forum.</p>
              </p>
          </div>
          <div className="links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="contact">
          <h2>Contact Us</h2>
        <p><strong>ZAMSOF Secretariat:</strong></p>
        {/* <p>Zambia Library Skills Centre and Visually Impaired (ZLSCVI)</p> */}
        {/* <p><strong>National Coordinator For National Organizing Steering Committee:</strong></p> */}
        <p>Plot No. 4225, Chilimbulu Road, Chilenje South, Lusaka, Zambia</p>
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
