// src/components/UpcomingEvents.js
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Countdown from 'react-countdown';  // Import Countdown
import "./News.css"; // Import the CSS for styling

const newsData = [
  {
    id: 1,
    title: "Helping Hands Initiative",
    description:
      "Join us in making a difference for underprivileged communities. This initiative provides essential resources like food, education, and shelter to those in need. Volunteers are welcome to contribute in various capacities to help build a better and more sustainable.",
    imgSrc:
      "https://www.kiyorndlab.com/wp-content/uploads/2023/07/3-Ways-to-Cultivate-Employee-Engagement-Through-Crowdsourcing.jpg",
    link: "/upcoming1",
    type: "upcoming",
    date: "2024-12-01T00:00:00",  // Add event date for countdown
  },
  {
    id: 2,
    title: "Water for Life Campaign",
    description:
      "Our mission to provide clean drinking water to rural areas is ongoing. This campaign focuses on building sustainable water systems to ensure communities have access to safe water, reducing waterborne diseases and improving overall health.",
    imgSrc:
      "https://wisconsinmuslimjournal.org/wp-content/uploads/2023/09/adobestock_559725888.jpg",
    link: "/upcoming2",
    type: "upcoming",
    date: "2024-12-15T00:00:00",  // Add event date for countdown
  },
];

function UpcomingEvents() {
  return (
    <div className="upevent">
      <Fade bottom>
      <h2>Upcoming Events</h2>
      </Fade>
      <div className="events-section">
        {newsData
          .filter((item) => item.type === "upcoming")
          .map((event) => (
            <Fade bottom delay={event.id*200} key={event.id}>
              <div className="news-item">
                <img
                  src={event.imgSrc}
                  alt={event.title}
                  className="news-image"
                />
                <div className="news-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>

                  {/* Countdown Timer */}
                  <div className="countdown-timer">
                    <Countdown date={new Date(event.date).getTime()} />
                  </div>

                  <Link to={event.link} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
