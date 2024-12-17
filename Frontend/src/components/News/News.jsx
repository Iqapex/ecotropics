// src/components/News.js
import { useEffect } from "react";
import UpcomingEvents from "./UpcomingEvents";
import "./News.css"; // Keep your existing styles
//import PastEvents from "./PastEvents";
import ForumLanguages from "./ForumLanguages";
import Project from "../Projects/Project";
import AnnualReport from "./AnnualReport";

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
      <AnnualReport />
      <UpcomingEvents />
      {/* <PastEvents /> */}
      <Project />
      <ForumLanguages />
    </div>
  );
}

export default News;
