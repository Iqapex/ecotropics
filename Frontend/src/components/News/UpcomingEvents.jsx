import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import "./News.css";
import { newsData } from "../../Data/News";

function UpcomingEvents() {
  const upcomingEvents = newsData.filter((item) => item.type === "upcoming");

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { delay } }),
  };

  return (
    <div className="upevent">
      {/* Title Animation */}
      <motion.h2
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeInVariant}
      >
        Upcoming Events
      </motion.h2>

      <div className="events-section">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
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
                <div className="countdown-timer">
                  <Countdown date={new Date(event.date).getTime()} />
                </div>
                <Link to={event.link} className="read-more">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="placeholder"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInVariant}
          >
            No updates currently. Stay tuned for upcoming events!
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
