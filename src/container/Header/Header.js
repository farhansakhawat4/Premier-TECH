import React from 'react';
import './Header.css';
// import bgVideo from '../../assets/background.mp4'; 
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const scrollToBrands = () => {
    const brandSection = document.getElementById('brands');
    if (brandSection) {
      brandSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <header className="header-section" id='home'>
         <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "",
             

              },
            },
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#eee",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 3,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#eee",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
              },
            },
          }}
        />
      {/* <video
        className="bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      /> */}
   <div className="header-content">
  <div className="header-overlay">
    <h1>
      One Stop Solution for all your digital needs.
      You have <strong>Business</strong> &amp; We have <strong>Strategy</strong>.
    </h1>
    <p className="tagline">Design → Develop → Market → Repeat.</p>
  </div>

  <div className="header-image">
    <img src="/brands/hardware.jpg" alt="Digital Strategy" />
  </div>
</div>
      <div className="scroll-icons" onClick={scrollToBrands}>
          <FontAwesomeIcon icon={faMouse} className="mouse-icon" />
          <br />
          <FontAwesomeIcon icon={faArrowDown} className="down-icon" />
        </div>
    </header>
  );
};

export default Header;
