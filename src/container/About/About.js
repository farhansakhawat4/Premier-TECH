import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="app__about " id="about">
         <h1 className="about__heading">About
         <div className="section-divider"></div>
         </h1>

      <div className="app__about-content">
        <div className="app__about-content_history">
          <h1 className="headtext__cormorant">About Us</h1>
          <p className="p__opensans">
            At CPU Premier, we sell and buy IT hardware built for performance, reliability, and scalability. 
           We upgrade data centers, expand server capabilities, and optimize storage solutions to deliver 
           the technology you need to stay ahead. With a strong focus on quality and custom hardware configurations, 
           we support organizations in building robust IT environments tailored to their operational demands. 
           Our team of experts combines technical knowledge with industry insight to offer scalable solutions 
           to meet the evolving challenges of data management, virtualization, and network performance. 
           Being backed by a trusted partnership with leading global manufacturers, we stand as reliable 
           business partners seeking groundbreaking innovations in hardware technology. 
          </p>
        </div>

        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">What We Aim</h1>
          <p className="p__opensans">
           We aim to empower businesses with reliable and high-performance IT hardware that constructs 
           the foundation of efficient, secure, and scalable operations. Our products range from advanced 
           storage servers to enterprise-grade servers that align with your technical needs and strategic 
           goals. We push boundaries in innovating hardware that simplifies the ongoing challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
