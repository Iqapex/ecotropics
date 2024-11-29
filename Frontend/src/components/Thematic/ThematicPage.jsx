import React from 'react';
import { motion } from 'framer-motion';
import './Thematic.css';

// Import content
import {
  introContent,
  thematicAreas,
  programHighlights,
  socialForumFormat,
  mobilizationStrategies,
} from '../../Data/Thematic';

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  }),
};

const ThematicPage = () => {
  return (
    <div className="thematic-page">
      {/* Intro Section */}
      <section className="intro">
        <motion.h2
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInVariant}
        >
          {introContent.heading}
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeInVariant}
        >
          {introContent.description}
        </motion.p>
      </section>

      {/* Thematic Areas Section */}
      <section className="thematic-areas">
        <h3>Thematic Areas List</h3>
        <div className="area-cards">
          {thematicAreas.map((area, index) => (
            <motion.div
              className="area-card"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h4>{area.title}</h4>
              <p>{area.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights">
        <h3>Program Highlights</h3>
        <div className="highlights-timeline">
          {programHighlights.map((highlight, index) => (
            <motion.div
              className="highlight"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h4>{highlight.title}</h4>
              <p>{highlight.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Forum Format Section */}
      <section className="social-forum-format">
        <h3>Format of Social Forum</h3>
        <div className="forum-list">
          {socialForumFormat.map((forum, index) => (
            <motion.div
              className="forum-item"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h4>{forum.title}</h4>
              <p>{forum.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobilization Strategies Section */}
      <section className="mobilization-strategies">
        <h3>Mobilization Strategies</h3>
        <div className="strategy-list">
          {mobilizationStrategies.map((strategy, index) => (
            <motion.div
              className="strategy-item"
              key={index}
              initial="hidden"
              animate="visible"
              custom={index * 0.2}
              variants={fadeInVariant}
            >
              <h4>{strategy.title}</h4>
              <p>{strategy.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThematicPage;
