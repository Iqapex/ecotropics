import { Link } from "react-router-dom";
import "./News.css";
import { newsData } from "../../Data/News";

function PastEvents() {
  return (
    <div className="pastevent">
      <h2>Past Events</h2>
      <div className="events-section">
        {newsData
          .filter((item) => item.type === "past")
          .map((event) => (
            <div className="news-item" key={event.id}>
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
          ))}
      </div>
    </div>
  );
}

export default PastEvents;
