import { faFlask, faIdCard } from '@fortawesome/free-solid-svg-icons'; // Import the flask icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Solution.css';

function Solutions() {
  return (
    <div style={{ backgroundColor: "black", color: "white", top: "-2rem", position: "relative", paddingTop: "2rem" }}>
      <h1>Our Solutions</h1>
      <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>We are working toward a cleaner, brighter future. Our goal is to help industry work toward net zero, which is why we are a global leader in cost-efficient carbon capture technology.</p>

      <div className="card-container">
        <div className="cardSol">
          <FontAwesomeIcon className='icon' icon={faFlask} /> {/* Use the imported icon */}
          <h2>Modular systems</h2>
          <p>Modularised and containerised solutions make it easy to scale your carbon capture system to your plant's unique needs.</p>
        </div>
        <div className="cardSol">
        <FontAwesomeIcon className='icon' icon={faIdCard} />
          <h2>Technology license</h2>
          <p>With our technology licence, the Carbon Clean team will create a custom design for your unique site that makes the most of our CDRMax™ processes.</p>
        </div>
        <div className="cardSol">
          <h2>Engineering services</h2>
          <p>Description of Card 3</p>
        </div>
        <div className="cardSol">
          <h2>Card 4</h2>
          <p>Description of Card 4</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
