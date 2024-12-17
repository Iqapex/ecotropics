import { useEffect } from 'react';
import './Thematic.css';

// Import content
import {
  introContent,
  thematicAreas,
  programHighlights,
  socialForumFormat,
  mobilizationStrategies,
} from '../../Data/Thematic';

const ThematicPage = () => {
  useEffect(() => {
    // Select all elements with the class "fade-in"
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the "visible" class to trigger animation
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    // Start observing each fade-in element
    fadeInElements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="thematic-page">
      {/* Intro Section */}
      <section className="intro fade-in">
        <h2>{introContent.heading}</h2>
        <p>{introContent.description}</p>
      </section>

      {/* Thematic Areas Section */}
      <section className="thematic-areas">
        <h3>Thematic Areas List</h3>
        <div className="area-cards">
          {thematicAreas.map((area, index) => (
            <div
              className={`area-card fade-in fade-in-delay-${index + 1}`}
              key={index}
            >
              <h4>{area.title}</h4>
              <p style={{ color: '#1d1f1d' }}>{area.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights">
        <h3>Program Highlights</h3>
        <div className="highlights-timeline">
          {programHighlights.map((highlight, index) => (
            <div
              className={`highlight fade-in fade-in-delay-${index + 1}`}
              key={index}
            >
              <h4>{highlight.title}</h4>
              <p style={{ color: '#1d1f1d' }}>{highlight.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Forum Format Section */}
      <section className="social-forum-format">
        <h3>Format of Social Forum</h3>
        <div className="forum-list">
          {socialForumFormat.map((forum, index) => (
            <div
              className={`forum-item fade-in fade-in-delay-${index + 1}`}
              key={index}
            >
              <h4>{forum.title}</h4>
              <p style={{ color: '#1d1f1d' }}>{forum.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobilization Strategies Section */}
      <section className="mobilization-strategies">
        <h3>Mobilization Strategies</h3>
        <div className="strategy-list">
          {mobilizationStrategies.map((strategy, index) => (
            <div
              className={`strategy-item fade-in fade-in-delay-${index + 1}`}
              key={index}
            >
              <h4>{strategy.title}</h4>
              <p style={{ color: '#1d1f1d' }}>{strategy.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThematicPage;
