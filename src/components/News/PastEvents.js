import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./News.css";
import { newsData } from "../../Data/News";

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
