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
          <h2>Human Rights</h2>
          <p>Human rights ensure the dignity, freedom, and equality of all individuals, promoting justice, fairness, and protection from discrimination.</p>
        </div>
        <div className="cardSol">
        {/* <FontAwesomeIcon className='icon' icon={faIdCard} /> */}
          <h2>Food sovereignty</h2>
          <p>Food sovereignty empowers communities to control their own food systems, prioritizing local production, sustainable practices, and equitable access to nutritious food.</p>
        </div>
        <div className="cardSol">
          <h2>Children and education</h2>
          <p>Children and education focus on providing equal learning opportunities, nurturing development, and empowering young minds for a brighter, inclusive future</p>
        </div>
        <div className="cardSol">
          <h2>Agroecology Climate Justice</h2>
          <p>Agroecology Climate Justice advocates for sustainable farming practices that respect ecosystems, reduce emissions, and ensure fair access to resources, benefiting marginalized communities</p>
        </div>
        <div className="cardSol">
          <h2>Social inclusion</h2>
          <p>Social inclusion promotes equal participation and representation of all individuals, ensuring that marginalized groups are empowered and integrated into society</p>
        </div>
        <div className="cardSol">
          <h2>Gender sensitization</h2>
          <p>Gender and development focuses on addressing inequalities, empowering women and marginalized genders, and promoting equitable access to resources and opportunities for all.</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
