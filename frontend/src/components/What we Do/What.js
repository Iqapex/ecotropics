import React from 'react';
import carbonImage from '../../assets/Sun Gold Orange Sustainability Instagram Post.png';
import './What.css';

function What() {
  // Create a reference for the container
 

  return (
    <>
    <div className="Reg-container" >
      <div className="Reg-text">
        <h2>Our Mission</h2>
      <h3>Our mission at Zambia Social Forum (ZAMSOF) is to unite citizens, community groups, and CSO movements in Zambia to amplify their voices in policy-making, demand better living standards, and advocate for improved service delivery. We are committed to fostering a just and inclusive society where every individual can maximize their potential, contributing holistically towards sustainable development and harmonious relationships between humankind and the Earth.</h3>
      </div>
      <img src={carbonImage} alt="Carbon" className="carbon-image" />
    </div>
    <div className="Reg-offers">
    <h2> Our Programs</h2>
    <h3>
    ZAMSOF constitution provides for a semi-organic structure voluntarily: A Guardian that is selected
 by the members as a pro bono advisor based on the person’s knowledge of the principles and
 discourse of the World Social Forum; An elected Chairperson and Treasurer from amongst the
 membership based on their consistent activism; A Coordinator selected from the membership based
 on her/his activism, who is mandated to co-opt volunteers to assist with administrative work of the
 forum; There is no monetary membership fee to enable all interested activists to join from various
 walks of life. The Organizational membership from established CSOs and other organizations may
 apply to support day-to-day Secretariat works.
    </h3>
  </div>
  
  </>
  );
}

export default What;
