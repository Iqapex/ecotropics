import React, { useEffect, useState } from 'react';
import './Mission.css';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const missionSection = document.getElementById('mission-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("hi")
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when at least 50% of the element is visible
    );

    observer.observe(missionSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="mission-section" className={"mission-section" }>
      <h1>Our Missions</h1>
      <div className="mission-container">
        <div className={`mission-card ${isVisible ? 'visible' : ''}`}>
          <h2>Core Value 1</h2>
          <p>Our first core value description goes here.</p>
        </div>
        <div className={`mission-card ${isVisible ? 'visible1' : ''}`}>
          <h2>Core Value 2</h2>
          <p>Our second core value description goes here.</p>
        </div>
        <div className={`mission-card ${isVisible ? 'visible2' : ''}`}>
          <h2>Core Value 3</h2>
          <p>Our third core value description goes here.</p>
        </div>
        {/* Add more mission cards as needed */}
      </div>
    </div>
  );
};

export default Mission;
