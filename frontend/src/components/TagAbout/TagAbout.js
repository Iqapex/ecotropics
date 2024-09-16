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
        ZAMSOF is a network of CSOs, movements, and community groups focused on promoting social, ecological, and economic justice. It strengthens democracy, mobilizes action on key issues, and challenges neoliberal policies, advocating for sustainable development and people-centered alternatives to profit-driven systems.
        </p>
      </div>
    </div>
  );
}

export default TagAbout;
