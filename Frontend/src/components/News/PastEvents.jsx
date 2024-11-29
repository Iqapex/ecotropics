import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./News.css";
import { newsData } from "../../Data/News";

function PastEvents() {
  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { delay } }),
  };

  return (
    <div className="pastevent">
      {/* Title Animation */}
      <motion.h2
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeInVariant}
      >
        Past Events
      </motion.h2>

      <div className="events-section">
        {newsData
          .filter((item) => item.type === "past")
          .map((event) => (
            <motion.div
              className="news-item"
              key={event.id}
              initial="hidden"
              animate="visible"
              custom={event.id * 0.2}
              variants={fadeInVariant}
            >
              <img
                src={event.imgSrc}
                alt={event.title}
                className="news-image"
              />
              <div className="news-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <Link to={event.link} className="read-more">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default PastEvents;
