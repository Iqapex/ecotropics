import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
  <div className="background-image"></div>
  <div className="hero-text">
    <h1>ZAMSOF</h1>
    <p> The Zambia Social Forum (ZAMSOF) promotes dialogue on democracy, social justice, and sustainable development. It empowers marginalized communities through grassroots action, advocacy, and partnerships, addressing issues like climate justice and gender equity. ZAMSOF fosters local solutions and global solidarity, building a more just and inclusive society.</p>
    <NavLink to='/contact'>
    <button>Contact Us</button>
    </NavLink>
  </div>
</div>

  );
}

export default Hero;
