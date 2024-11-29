import React from 'react';
import { motion } from 'framer-motion';
import './What.css';
import { programItems } from '../../Data/Home';

function What() {
  // Data for "Our Mission" section
  const missionItems = [
    { title: "Support Education", description: "ZAMSOF collaborates with like-minded organizations to promote education for all, bridging gaps in access to resources and opportunities." },
    { title: "Improve Healthcare", description: "Through partnerships, we support improving healthcare access, delivery, and education for marginalized communities." },
    { title: "Foster Economic Growth", description: "ZAMSOF works with various organizations to empower individuals by supporting economic opportunities and sustainable livelihoods." },
    { title: "Protect the Environment", description: "A core mission of ZAMSOF is to protect the environment, advocating for eco-friendly practices to preserve our planet for future generations." }
  ];

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };

  return (
    <div className='whatwedo'>
      <div className="Reg-container">
        <motion.div
          className="Reg-text"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          custom={0.2}
        >
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            custom={0.4}
          >
            Our Mission
          </motion.h2>
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            custom={0.6}
          >
            At ZAMSOF, we believe in building a planetary society directed towards
            fruitful relationships among humankind and with the Earth. We strive to create a participatory environment where diverse voices converge to address interconnected social and environmental issues, advocating for equitable policies that enhance resilience, inclusivity, and community empowerment for all.
          </motion.h3>
          <motion.h3
            style={{ color: '#c50c0cf0' }}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            custom={0.8}
          >
            Our Core Mission
          </motion.h3>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            custom={1}
          >
            ZAMSOF is committed to building a planetary society where relationships
            between humans and the Earth are balanced, equitable, and sustainable. We advocate for policies that ensure inclusivity, resilience, and community empowerment, with a focus on the well-being of both people and the planet.
          </motion.p>

          {/* Mission Items Cards */}
          <div className="cards-container">
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                className="card"
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                custom={1.2 + index * 0.2}
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="Reg-offers">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          custom={1.6}
        >
          Our Programs
        </motion.h2>
        <div className="cards-container">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={1.8 + index * 0.2}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default What;
