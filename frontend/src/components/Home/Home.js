import React from "react";
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
import Uniqueness from "./Uniqueness";
import JoinUs from "./JoinUs";
import { Project } from "../Projects/Project";

function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Tag />
      <Uniqueness />
      <What />
      <Process />
      <Achievements />
      <Recognition />
      <JoinUs />
      <Project />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
