// src/components/News.js

import React from "react";
import UpcomingEvents from "./UpcomingEvents"; // Importing the new UpcomingEvents component
import "./News.css"; // Keep your existing styles
import img from "../../assets/hero2.jpg";
import PastEvents from "./PastEvents";
import ForumLanguages from "./ForumLanguages";
import HeroAbout from "../HeroAbout/HeroAbout";

function News() {
  return (
    <div className="news-container">
      <HeroAbout img={img} text="Get updated with US" />
      <UpcomingEvents />
      <PastEvents />
      <ForumLanguages />
    </div>
  );
}

export default News;
