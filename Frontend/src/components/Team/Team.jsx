
import { useState } from 'react';
import './Team.css'; // Import CSS file for styling


import President from '../../assets/president.jpg';
// import VicePresident from '../../assets/vice-president.jpg';
// import Secretary from '../../assets/secretary.jpg';
const managementTeam = [
  {
    id: 1,
    name: 'Luyando Mweene',
    title: 'President',
    description: 'ZAMSOF Youth Connect Initiative',
    image: President,
  },
  // {
  //   id: 2,
  //   name: 'John Doe',
  //   title: 'Vice President',
  //   description: 'Empowering Communities Program',
  //   image: VicePresident,
  // },
  // {
  //   id: 3,
  //   name: 'Jane Smith',
  //   title: 'Secretary',
  //   description: 'Environmental Advocacy Project',
  //   image: Secretary,
  // },
];

function Team() {
  // State variable to track which section to display
  const [showManagement, setShowManagement] = useState(true);

  return (
    <div className="team-container">
      {/* Buttons for toggling sections */}
      <div className="button-container">
        <button
          className={`butn ${showManagement ? 'visibleT' : ''}`}
          onClick={() => setShowManagement(true)}
        >
          Management
        </button>
      </div>

      {/* Management Section */}
      {showManagement && (
        <div className="management-section">
          {managementTeam.map((member) => (
            <div className="member" key={member.id}>
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
              <h2>{member.title}</h2>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Team;
