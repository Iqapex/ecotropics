// src/components/News.js

import React from "react";
import UpcomingEvents from "./UpcomingEvents"; // Importing the new UpcomingEvents component
import "./News.css"; // Keep your existing styles
import PastEvents from "./PastEvents";
import ForumLanguages from "./ForumLanguages";

function News() {
  return (
    <div className="news-container">
      <UpcomingEvents />
      <PastEvents />
      <ForumLanguages />
    </div>
  );
}

export default News;
