import React from 'react';
import './What.css';

function What() {
  // Data for "Our Mission" section
  const missionItems = [
    { title: "Promote Education", description: "Providing quality education and resources to children and adults, ensuring a brighter future for all." },
    { title: "Improve Healthcare", description: "Delivering essential healthcare services and education to underprivileged communities." },
    { title: "Foster Economic Growth", description: "Supporting local businesses and entrepreneurs to create sustainable economic opportunities." },
    { title: "Protect the Environment", description: "Advocating for and implementing eco-friendly practices to safeguard our natural resources." }
  ];

  // Data for "Our Programs" section
  const programItems = [
    { title: "Education for All", description: "Education is the key to breaking the cycle of poverty. We provide scholarships, school supplies, and build schools in remote areas to ensure that every child has the opportunity to learn." },
    { title: "Healthcare Access", description: "We offer medical clinics, health education, and training for local health workers to ensure that communities have access to essential healthcare services." },
    { title: "Economic Empowerment", description: "Through microfinance, vocational training, and business mentorship, we empower individuals to create sustainable livelihoods and support their families." },
    { title: "Environmental Conservation", description: "Our environmental programs focus on reforestation, clean water initiatives, and promoting sustainable agriculture practices to protect our planet for future generations." }
  ];

  return (
    <div className='whatwedo'>
      <div className="Reg-container">
        <div className="Reg-text">
          <h2>Our Mission</h2>
          <h3>
            At ZAMSOF, we believe in the potential of every individual to contribute to a brighter future.
            Our mission is to:
          </h3>
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
