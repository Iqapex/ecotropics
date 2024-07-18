import React from 'react';
import carbonImage from '../../assets/carbonSeq.jpeg';
import './What.css';

function What() {
  // Create a reference for the container
 

  return (
    <>
    <div className="Reg-container" >
      <div className="Reg-text">
        <h2>What We Do</h2>
        <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorem recusandae reiciendis eveniet reprehenderit expedita quas et quisquam ad quidem fugit necessitatibus ullam, cupiditate saepe ab optio est illum sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error numquam dignissimos quia nisi! Eaque et deserunt reprehenderit ipsam! Ad quos aspernatur accusantium. Error magni aperiam esse cum, nulla quas, nesciunt id, ipsum porro aut dignissimos maiores in est vel tempore voluptatibus quidem recusandae repellendus. Ducimus nisi alias odio. Eos non, ipsum perspiciatis obcaecati assumenda dolorum labore, quisquam, quo tenetur eligendi rerum. Id sint, dolore veniam inventore corporis, excepturi totam esse pariatur quaerat ut praesentium eligendi beatae ullam minus animi distinctio accusamus ipsam doloribus. Quae quia explicabo dolorum autem incidunt magnam, laboriosam id assumenda ducimus a, ex, accusantium perspiciatis cupiditate eum.
        </p>
      </div>
      <img src={carbonImage} alt="Carbon" className="carbon-image" />
    </div>
    <div className="Reg-offers">
    <h2>What We Offer</h2>
    <ul>
      <li>
        <h3>Partial Financial Aid</h3>
        <p>
          We provide a partial range of financial solutions tailored to the needs of agricultural entrepreneurs, from seed funding for startups to growth capital for expanding enterprises. Our aid involves investment opportunities designed to help you scale your business and achieve your goals.
        </p>
      </li>
      <li>
        <h3>Educational Resources</h3>
        <p>
          Knowledge is power. We offer extensive educational resources, including online courses, webinars, workshops, and mentorship programs, to help you stay ahead of industry trends and best practices. Our educational initiatives cover a wide range of topics, from sustainable farming techniques to advanced business management skills.
        </p>
      </li>
      <li>
        <h3>Networking Opportunities</h3>
        <p>
          Join a community of like-minded agricultural entrepreneurs and industry experts. Our networking events, conferences, and online forums provide the perfect platform to share ideas, collaborate on projects, and build lasting partnerships. Connect with potential investors, mentors, and peers who can help you take your business to the next level.
        </p>
      </li>
      <li>
        <h3>Business Development Services</h3>
        <p>
          Our comprehensive business development services are designed to support you at every stage of your entrepreneurial journey. From business plan development and market analysis to branding and marketing strategies, our team of experts is here to guide you through the complexities of building a successful agricultural enterprise.
        </p>
      </li>
    </ul>
  </div>
  
  </>
  );
}

export default What;
