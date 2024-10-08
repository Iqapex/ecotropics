import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
  <div className="background-image"></div>
  <div className="hero-text">
    <h1>ZAMSOF</h1>
    <p> Zambia Social Forum (ZAMSOF), formed in 2003, is an open
      space that provides a free platform for ordinary citizens to discuss
      democratic issues that affect them and provide alternative community
      solutions.</p>
    <NavLink to='/contact'>
    <button>Contact Us</button>
    </NavLink>
  </div>
</div>

  );
}

export default Hero;
