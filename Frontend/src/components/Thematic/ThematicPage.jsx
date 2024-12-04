
import './Thematic.css';
import Fade from 'react-reveal/Fade';

// Import content
import {
  introContent,
  thematicAreas,
  programHighlights,
  socialForumFormat,
  mobilizationStrategies,
} from '../../Data/Thematic';

const ThematicPage = () => {
  return (
    <div className="thematic-page">
      {/* Intro Section */}
      <section className="intro">
        <Fade bottom>
          <h2>{introContent.heading}</h2>
          <p>{introContent.description}</p>
        </Fade>
      </section>

      {/* Thematic Areas Section */}
      <section className="thematic-areas">
        <h3>Thematic Areas List</h3>
        <div className="area-cards">
          {thematicAreas.map((area, index) => (
            <Fade bottom delay={200 * index} key={index}>
              <div className="area-card">
                <h4>{area.title}</h4>
                <p style={{color: '#1d1f1d'}}>{area.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights">
        <h3>Program Highlights</h3>
        <div className="highlights-timeline">
          {programHighlights.map((highlight, index) => (
            <Fade bottom delay={200 * index} key={index}>
              <div className="highlight">
                <h4>{highlight.title}</h4>
                <p style={{color: '#1d1f1d'}}>{highlight.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Social Forum Format Section */}
      <section className="social-forum-format">
        <h3>Format of Social Forum</h3>
        <div className="forum-list">
          {socialForumFormat.map((forum, index) => (
            <Fade bottom delay={200 * index} key={index}>
              <div className="forum-item">
                <h4>{forum.title}</h4>
                <p style={{color: '#1d1f1d'}}>{forum.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Mobilization Strategies Section */}
      <section className="mobilization-strategies">
        <h3>Mobilization Strategies</h3>
        <div className="strategy-list">
          {mobilizationStrategies.map((strategy, index) => (
            <Fade bottom delay={200 * index} key={index}>
              <div className="strategy-item">
                <h4 >{strategy.title}</h4>
                <p style={{color: '#1d1f1d'}} >{strategy.text}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThematicPage;