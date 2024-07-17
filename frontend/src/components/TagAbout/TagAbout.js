import React, { useEffect } from 'react';
import './TagAbout.css';

function TagAbout() {
  // Function to handle animation on scroll
  const handleScrollAnimation = () => {
    const container = document.getElementById('carbon-container');
    if (container) {
      const position = container.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      
      // If the top of the container is in the viewport
      if (position < screenHeight*0.9) {
        container.classList.add('slide-in'); 
        // Add slide-in class
      }
      else {
        container.classList.remove('slide-in'); // Remove slide-in class
      }
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    const listener = () => handleScrollAnimation();
    
    // Add event listener for scroll
    window.addEventListener('scroll', listener);
    
    // Remove event listener on component unmount
    return () => {
      console.log("hi");
      window.removeEventListener('scroll', listener);
    };
  }, []); // Run effect only once on component mount

  return (
    <div id="carbon-container" className="carbon-container">
      <div className="carbon-text">
        <h1>ABOUT US</h1>
        <p>
          Manage farm-level decisions and finances and capture your supply chains to be part of the journey to a hunger-free and carbon-neutral world.
        </p>
      </div>
    </div>
  );
}

export default TagAbout;
