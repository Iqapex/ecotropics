import React from 'react';
import './What.css';
import { programItems } from '../../Data/Home';

function What() {
  // Data for "Our Mission" section
  const missionItems = [
    { title: "Support Education", description: "ZAMSOF collaborates with like-minded organizations to promote education for all, bridging gaps in access to resources and opportunities." },
    { title: "Improve Healthcare", description: "Through partnerships, we support improving healthcare access, delivery, and education for marginalized communities." },
    { title: "Foster Economic Growth", description: "ZAMSOF works with various organizations to empower individuals by supporting economic opportunities and sustainable livelihoods." },
    { title: "Protect the Environment", description: "A core mission of ZAMSOF is to protect the environment, advocating for eco-friendly practices to preserve our planet for future generations." }
];


  return (
    <div className='whatwedo'>
      <div className="Reg-container">
  <div className="Reg-text">
    <h2>Our Mission</h2>
    <h3>
      At ZAMSOF, we believe in building a planetary society directed towards
      fruitful relationships among humankind and with the Earth. We strive to create a participatory environment where diverse voices converge to address interconnected social and environmental issues, advocating for equitable policies that enhance resilience, inclusivity, and community empowerment for all.
    </h3>
    <h3 style={{ color: '#c50c0cf0' }}>Our Core Mission</h3>

    <p>
      ZAMSOF is committed to building a planetary society where relationships
      between humans and the Earth are balanced, equitable, and sustainable. We advocate for policies that ensure inclusivity, resilience, and community empowerment, with a focus on the well-being of both people and the planet.
    </p>
    
    {/* Map through missionItems array */}
    <div className="cards-container">
      {missionItems.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="Reg-offers">
        <h2>Our Programs</h2>
        <div className="cards-container">
          {/* Map through programItems array */}
          {programItems.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default What;
