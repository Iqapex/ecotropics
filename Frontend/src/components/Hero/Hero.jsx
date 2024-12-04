import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="background-image"></div>
      <div className="hero-text">
        <h1>ZAMSOF</h1>
        <p>
          {" "}
          The Zambia Social Forum (ZAMSOF) is a dynamic platform dedicated to
          providing an open and free space for people to engage in discussions
          about democracy, social justice, and sustainable development. ZAMSOF
          fosters dialogue among diverse stakeholders, including marginalized
          communities, civil society organizations, and social movements,
          empowering them to articulate their concerns and aspirations.
        </p>
        <NavLink to="/contact">
          <button>Contact Us</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
