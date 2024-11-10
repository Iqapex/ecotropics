import React from 'react';
import './Thematic.css';
import Fade from 'react-reveal/Fade';

const ThematicPage = () => {
  return (
    <div className="thematic-page">

      <section className="intro">
        <Fade bottom>
          <h2>Thematic Areas of ZAMSOF</h2>
          <p>
            ZAMSOF operates across various themes essential to achieving social and environmental justice in Zambia. Each area represents a pillar of change, promoting equity, sustainability, and empowerment within local communities and beyond.
          </p>
        </Fade>
      </section>

      <section className="thematic-areas">
        <h3>Thematic Areas List</h3>
        <div className="area-cards">
          {[
            { title: "Food Sovereignty", text: "Championing sustainable farming practices and access to nutritious food for all." },
            { title: "Agroecology & Climate Justice", text: "Addressing climate change through eco-friendly agriculture and fair resource management." },
            { title: "Gender & Development", text: "Advocating for gender equity and empowering women in leadership roles." },
            { title: "Social Inclusion & Disability", text: "Ensuring all voices are represented and no one is left behind." },
            { title: "Human Rights & Education", text: "Protecting basic rights and promoting educational opportunities." }
          ].map((area, index) => (
            <Fade bottom key={index}>
              <div className="area-card">
                <h4>{area.title}</h4>
                <p>{area.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <section className="program-highlights">
        <h3>Program Highlights</h3>
        <div className="highlights-timeline">
          {[
            { title: "Food Sovereignty", text: "Programs like community seed banks and training in organic farming techniques." },
            { title: "Climate Justice", text: "Advocacy for eco-friendly policies and initiatives on carbon reduction." },
            { title: "Gender & Development", text: "Workshops and campaigns supporting gender equality and women-led entrepreneurship." }
          ].map((highlight, index) => (
            <Fade bottom key={index}>
              <div className="highlight">
                <h4>{highlight.title}</h4>
                <p>{highlight.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <section className="social-forum-format">
        <h3>Format of Social Forum</h3>
        <div className="forum-list">
          {[
            { title: "Open Space Discussions", text: "Open spaces where participants can freely discuss ideas and share solutions." },
            { title: "Youth & Women Forums", text: "Empowering the next generation and highlighting feminist dialogues." },
            { title: "Cultural Exhibitions", text: "Showcasing Zambia’s values and identity through art and performances." }
          ].map((forum, index) => (
            <Fade bottom key={index}>
              <div className="forum-item">
                <h4>{forum.title}</h4>
                <p>{forum.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <section className="mobilization-strategies">
        <h3>Mobilization Strategies</h3>
        <div className="strategy-list">
          {[
            { title: "Caravan Concept", text: "Traveling forums to engage and inspire rural communities." },
            { title: "Media Outreach", text: "Publicizing events through various media channels." },
            { title: "Language Accessibility", text: "Using local languages to ensure inclusivity and participation." }
          ].map((strategy, index) => (
            <Fade bottom key={index}>
              <div className="strategy-item">
                <h4>{strategy.title}</h4>
                <p>{strategy.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThematicPage;
