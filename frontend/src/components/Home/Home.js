import React, { useState } from "react";
import Achievements from "../Achievements/Achievements";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Process from "../Processes/Process";
import Recognition from "../Recognition/Recognition";
import Tag from "../Tag/Tag";
import What from "../What we Do/What";
import "./Home.css";
import Team from "../Team/Team";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // message disappears after 3 seconds
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Tag />
      <What />
      <Process />
      <Achievements />
      <Recognition />
      <div className="form-container">
        <h2 className="form-heading">Join With Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="form-content">
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
                required
              />
              <button type="submit" className="btn-inside">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <p className="message">Submission Successful!</p>
        )}
      </div>
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
