// News.js

import React from 'react';
import './Thematic.css'; // Import the CSS file for styling

function News() {
  return (
    <div className="news-container" style={{margin:"2rem"}}>
      <div className="news-item">
        <img src="news1.jpg" alt="News 1" />
        <div className="news-content">
          <h3>News Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies augue eu rhoncus condimentum.</p>
          <a href="/news1">Read More</a>
        </div>
      </div>
      <div className="news-item">
        <img src="news2.jpg" alt="News 2" />
        <div className="news-content">
          <h3>News Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies augue eu rhoncus condimentum.</p>
          <a href="/news2">Read More</a>
        </div>
      </div>
      {/* Add more news items as needed */}
      <div className="news-item">
        <img src="news1.jpg" alt="News 1" />
        <div className="news-content">
          <h3>News Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies augue eu rhoncus condimentum.</p>
          <a href="/news1">Read More</a>
        </div>
      </div>
      <div className="news-item">
        <img src="news2.jpg" alt="News 2" />
        <div className="news-content">
          <h3>News Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies augue eu rhoncus condimentum.</p>
          <a href="/news2">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default News;
