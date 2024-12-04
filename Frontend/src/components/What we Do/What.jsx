import React from 'react';
import Fade from 'react-reveal/Fade';
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
        <Fade bottom>
          <div className="Reg-text">
            <h2>Our Mission</h2>
            <h3>
              At ZAMSOF, we believe in building a planetary society directed towards
              fruitful relationships among humankind and with the Earth. We strive to create a participatory environment where diverse voices converge to address interconnected social and environmental issues, advocating for equitable policies that enhance resilience, inclusivity, and community empowerment for all.
            </h3>
            <h3 style={{ color: '#c50c0cf0' }}>Our Core Mission</h3>

            <p  style={{ color: '#1f2937' }}>
            Zambia Social Forum (ZAMSOF) provides an inclusive platform for democratic dialogue and collective
            actions, empowering marginalized communities to develop innovative solutions for climate justice,
            Agroecology, food sovereignty, governance, human rights, and  gender equity, through holistic and
            grassroots-led initiatives. while fostering National, regional and global partnerships for sustainable
            future.
            </p>

            {/* Mission Items Cards */}
            <div className="cards-container">
              {missionItems.map((item, index) => (
                <Fade bottom delay={index * 200} key={index}>
                  <div className="card">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      <div className="Reg-offers">
        <Fade bottom>
          <h2>Our Programs</h2>
        </Fade>
        <div className="cards-container">
          {programItems.map((item, index) => (
            <Fade bottom delay={index * 200} key={index}>
              <div key={index} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default What;
