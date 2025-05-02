import React from 'react';
import './Header.css';
import bgVideo from '../../assets/background.mp4'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <header className="header-section" id='home'>
      <video
        className="bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="header-overlay">
      <h1>
          One Stop Solution for all your digital needs.
          You have <strong>Business</strong> &amp; We have <strong>Strategy</strong>.
      </h1>

        <p className="tagline">Design → Develop → Market → Repeat.</p>

        <div className="scroll-icons" onClick={scrollToAbout}>
          <FontAwesomeIcon icon={faMouse} className="mouse-icon" />
          <br />
          <FontAwesomeIcon icon={faArrowDown} className="down-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
