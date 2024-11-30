// src/components/News.js
import React, { useEffect } from "react";
import UpcomingEvents from "./UpcomingEvents";
import "./News.css"; // Keep your existing styles
import img from "../../assets/hero2.jpg";
import PastEvents from "./PastEvents";
import ForumLanguages from "./ForumLanguages";
import HeroAbout from "../HeroAbout/HeroAbout";

function News() {
  // Scroll to the element with the id when the component is loaded
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="news-container" id="news-container">
      <HeroAbout img={img} text="Get updated with US" />
      <UpcomingEvents />
      <PastEvents />
      <ForumLanguages />
    </div>
  );
}

export default News;
