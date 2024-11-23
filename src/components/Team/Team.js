// Team.js

import React, { useState } from 'react';
import profile from '../../assets/client-3.png';
import './Team.css'; // Import CSS file for styling

function Team() {
  // State variables to track which section to display
  const [showManagement, setShowManagement] = useState(true);
  const [showPartners, setShowPartners] = useState(false);

  return (
    <div className="team-container">
      <div className="button-container">
        <button className={`butn ${showManagement?'visibleT':''}`}onClick={() =>{ setShowManagement(true) 
        setShowPartners(false)
        }}>Management</button>
        <button className={`butn ${showPartners?'visibleT':''}`}onClick={() => {setShowPartners(true)
        setShowManagement(false)}}>Partners</button>
      </div>
      {showManagement && (
        <div className="management-section">
          {/* Display Management details */}
          {/* Example: */}
          <div className="member">
            <img src={profile} alt="Management Member 1" />
            <p>Management Member 1 Details</p>
          </div>
          <div className="member">
            <img src={profile} alt="Management Member 2" />
            <p>Management Member 2 Details</p>
          </div>
          {/* Add more members as needed */}
        </div>
      )}
      {showPartners && (
        <div className="partners-section">
          {/* Display Partners details */}
          {/* Example: */}
          <div className="partners">
            <img src={profile} alt="Partner 1" />
            <p>Partner 1 Details</p>
          </div>
          <div className="partners">
            <img src={profile} alt="Partner 2" />
            <p>Partner 2 Details</p>
          </div>
          <div className="partners">
            <img src={profile} alt="Partner 1" />
            <p>Partner 1 Details</p>
          </div>
          <div className="partners">
            <img src={profile} alt="Partner 2" />
            <p>Partner 2 Details</p>
          </div>
          
          {/* Add more partners as needed */}
        </div>
      )}
    </div>
  );
}

export default Team;
