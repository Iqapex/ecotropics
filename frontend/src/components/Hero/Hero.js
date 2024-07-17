import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
  <div className="background-image"></div>
  <div className="hero-text">
    <h1>Your Title</h1>
    <p>Your description</p>
    <NavLink to='/contact'>
    <button>Contact Us</button>
    </NavLink>
  </div>
</div>

  );
}

export default Hero;
