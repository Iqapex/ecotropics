import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <div style={{backgroundColor:"#f8f9fa"}}>
    <h1 style={{marginBottom:"3rem",paddingTop:"2rem"}}>Get Involved</h1>
    <div className="process-container">
     
      <div className="cardP">
        <h2>Donate</h2>
        <p>Your donation helps fund programs, reaching communities in need.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2>Volunteer</h2>
        <p>Volunteer opportunities: teach, provide healthcare, or protect the environment.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2> Partner with Us</h2>
        <p>We partner with businesses, NGOs, governments to expand impact.</p>
      </div>
      {/* <div className="arrow"></div>
      <div className="cardP">
        <h2>Step 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2>Step 5</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div> */}
    </div>
    </div>
  );
}

export default Process;
