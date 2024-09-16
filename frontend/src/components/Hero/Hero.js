import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
  <div className="background-image"></div>
  <div className="hero-text">
    <h1>ZAMSOF</h1>
    <p> Zambia Social Forum (ZAMSOF) was formed in 2003 after the World Social Forum (WSF) and
      registered in 2014 under the Laws of the Republic of Zambia. It is an open
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
