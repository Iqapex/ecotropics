import React from "react";
import "./Solution.css";
import AboutData from "../../Data/About";

function Solutions() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        position: "relative",
        paddingTop: "2rem",
      }}
      className="container"
    >
      <h1>Six Strategy</h1>
      <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        We are working toward a cleaner, brighter future. Our goal is to help
        industry work toward net zero, which is why we are a global leader in
        cost-efficient carbon capture technology.
      </p>
      <div className="card-container">
        {AboutData.strategies.map((strategy, index) => (
          <div key={index} className="cardSol">
            <h2>{strategy.title}</h2>
            <p>{strategy.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
