import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <div style={{backgroundColor:"#f8f9fa"}}>
    <h1 style={{marginBottom:"3rem",paddingTop:"2rem"}}>How It Works</h1>
    <div className="process-container">
     
      <div className="cardP">
        <h2>Step 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2>Step 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2>Step 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2>Step 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="arrow"></div>
      <div className="cardP">
        <h2>Step 5</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    </div>
  );
}

export default Process;
