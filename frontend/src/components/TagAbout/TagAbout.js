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
        Food Finance is dedicated to building and supporting agricultural entrepreneurs. We believe that
the future of sustainable agriculture lies in the hands of innovative minds willing to transform
their ideas into reality. Our mission is to provide the tools, resources, and support necessary for
aspiring and established agricultural entrepreneurs to thrive in today's competitive market.
        </p>
      </div>
    </div>
  );
}

export default TagAbout;
