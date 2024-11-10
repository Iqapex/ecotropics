// src/components/News.js

import React from "react";
import Fade from "react-reveal/Fade";
import UpcomingEvents from "./UpcomingEvents"; // Importing the new UpcomingEvents component
import "./News.css"; // Keep your existing styles

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
  },
  {
    id: 3,
    title: "Health Drive 2024",
    description:
      "Our Health Drive 2024 successfully provided free medical check-ups, offering consultations and healthcare services. This initiative focused on preventative care and early diagnosis, helping thousands of people receive critical health services.",
    imgSrc:
      "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-health-index-illustration-hero-image-1?ts=1730986791931&&fmt=webp-alpha&dpr=off",
    link: "/past1",
    type: "past",
  },
  {
    id: 4,
    title: "Educational Empowerment",
    description:
      "Through the Educational Empowerment initiative, we aim to provide children with the tools and resources needed to pursue education. The program focuses on ensuring that every child, especially those from marginalized communities, has access to quality education.",
    imgSrc:
      "https://img.freepik.com/premium-vector/women-empowerment-women-education_553396-190.jpg",
    link: "/past2",
    type: "past",
  },
];

function News() {
  return (
    <div className="news-container">
      {/* Use the UpcomingEvents component here */}
      <UpcomingEvents />
      {/* You can still keep the past events section in the News component */}
      <div className="pastevent">
        <h2>Past Events</h2>
        <div className="events-section">
          {newsData
            .filter((item) => item.type === "past")
            .map((event) => (
              <Fade bottom key={event.id}>
                <div className="news-item">
                  <img
                    src={event.imgSrc}
                    alt={event.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <a href={event.link} className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </Fade>
            ))}
        </div>
      </div>
    </div>
  );
}

export default News;
