// src/components/PastEvents.js
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./News.css"; // Import the CSS for styling

const newsData = [
  {
    id: 1,
    title: "Health Drive 2024",
    description:
      "Our Health Drive 2024 successfully provided free medical check-ups, offering consultations and healthcare services. This initiative focused on preventative care and early diagnosis, helping thousands of people receive critical health services.",
    imgSrc:
      "https://www.shutterstock.com/image-vector/heart-hand-giving-logo-template-260nw-2457545841.jpg",
    link: "/past1",
    type: "past",
  },
  {
    id: 2,
    title: "Educational Empowerment",
    description:
      "Through the Educational Empowerment initiative, we aim to provide children with the tools and resources needed to pursue education. The program focuses on ensuring that every child, especially those from marginalized communities, has access to quality education.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDjLek0tJU0Hr_7BeYev0y0mj9aDVz5g0wA&s",
    link: "/past2",
    type: "past",
  },
];

function PastEvents() {
  return (
    <div className="pastevent">
      <Fade bottom>
        <h2>Past Events</h2>
      </Fade>

      <div className="events-section">
        {newsData
          .filter((item) => item.type === "past")
          .map((event) => (
            <Fade bottom delay={event.id * 200} key={event.id}>
              <div className="news-item">
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
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default PastEvents;
