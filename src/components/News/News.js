// src/components/News.js

import React from "react";
import UpcomingEvents from "./UpcomingEvents"; // Importing the new UpcomingEvents component
import "./News.css"; // Keep your existing styles
import PastEvents from "./PastEvents";

function News() {
  return (
    <div className="news-container">
      {/* Use the UpcomingEvents component here */}
      <UpcomingEvents />
      {/* You can still keep the past events section in the News component */}
      <PastEvents />
    </div>
  );
}

export default News;
