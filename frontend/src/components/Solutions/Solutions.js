// import { faFlask, faIdCard,} from '@fortawesome/free-solid-svg-icons'; // Import the flask icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Solution.css';

function Solutions() {
  return (
    <div style={{ backgroundColor: "black", color: "white", top: "-2rem", position: "relative", paddingTop: "2rem" }}>
      <h1>Six Strategy</h1>
      <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>We are working toward a cleaner, brighter future. Our goal is to help industry work toward net zero, which is why we are a global leader in cost-efficient carbon capture technology.</p>

      <div className="card-container">
        <div className="cardSol">
          {/* <FontAwesomeIcon className='icon' icon={faFlask} /> */}
           {/* Use the imported icon */}
          <h2>Climate Justice</h2>
          <p>Establish and support climate action groups with
diverse representation, including women and youth. Facilitate advocacy training to address both
climate and gender justice issues.</p>
        </div>
        <div className="cardSol">
        {/* <FontAwesomeIcon className='icon' icon={faIdCard} /> */}
          <h2>Food Security</h2>
          <p>Improve food security and livelihoods through agroecological practices, emphasizing gender
          equity, social inclusion, and human rights.</p>
        </div>
        <div className="cardSol">
          <h2>Global Solidarity</h2>
          <p>Build regional and global solidarity for social and economic justice, with a focus on gender
          equality, human rights, and humanitarian services.</p>
        </div>
        <div className="cardSol">
          <h2>Community Engagement</h2>
          <p>Promote community participation, protect civic spaces, and advance democratic governance, with
          an emphasis on gender equality, social inclusion, and human rights.</p>
        </div>
        <div className="cardSol">
          <h2>Movement Building</h2>
          <p>Build and strengthen movements addressing climate change, food sovereignty, gender equality,
          and other cross-cutting issues, emphasizing social inclusion and human rights.</p>
        </div>
        <div className="cardSol">
          <h2>Social Inclusion</h2>
          <p>Enhance organizational growth, financial sustainability, and visibility, ensuring effective
implementation of ZAMSOF&#39;s mission and strategic objectives, with an emphasis on gender equity and
social inclusion.</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
