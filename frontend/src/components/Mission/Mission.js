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
          <h2>Innovation in Agriculture</h2>
          <p>At Food Finance, we foster innovation in agriculture. We empower entrepreneurs with knowledge and resources to drive advancements.</p>
        </div>
        <div className={`mission-card ${isVisible ? 'visible1' : ''}`}>
          <h2>Sustainability</h2>
          <p> We promote sustainable agricultural practices to ensure global food security. Our focus is on initiatives with lasting positive impacts.</p>
        </div>
        <div className={`mission-card ${isVisible ? 'visible2' : ''}`}>
          <h2>Empowerment </h2>
          <p>We provide financial support to create a community of agricultural leaders. Our mission is to empower individuals to drive positive change.</p>
        </div>
        {/* Add more mission cards as needed */}
      </div>
    </div>
  );
};

export default Mission;
