// Mission.js
import React, { useEffect, useState } from 'react';
import AboutData from "../../Data/About"; // Assuming About.js is in the same directory
import './Mission.css';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const missionSection = document.getElementById('mission-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    observer.observe(missionSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="mission-section">
      <h1>Our Missions</h1>
      <div className="mission-container">
        {AboutData.missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            content={mission.content}
            isVisible={isVisible}
            delay={index * 0.3}
          />
        ))}
      </div>
    </section>
  );
};

const MissionCard = ({ title, content, isVisible, delay }) => {
  return (
    <div
      className={`mission-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Mission;
