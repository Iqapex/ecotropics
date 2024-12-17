
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import "./News.css";
import { newsData } from "../../Data/News";

function UpcomingEvents() {
  const upcomingEvents = newsData.filter((item) => item.type === "upcoming");

  return (
    <div className="upevent" id="upcomming-event">
      <h2>Upcoming Events</h2>
      <div className="events-section">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <div className="news-item" key={event.id}>
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
            </div>
          ))
        ) : (
          <p className="placeholder">No updates currently. Stay tuned for upcoming events!</p>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
