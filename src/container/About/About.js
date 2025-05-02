import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="app__about " id="about">
         <h1 className="about__heading">About</h1>

      <div className="app__about-content">
        <div className="app__about-content_history">
          <h1 className="headtext__cormorant">Our Trade</h1>
          <h1 className="headtext__cormorant">Designing, Developing, and Innovating for people like you...</h1>
          <p className="p__opensans">
            CMC M-Tech is a full-service digital agency. By providing full services based on the brand presence and social media advertising we create a well-rounded story to fulfill your goals.
          </p>
        </div>

        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">How we started it</h1>
          <p className="p__opensans">
            We took off from a one-room office 12 years ago and grew rapidly into a massive group of tech geniuses devoted to provide the best of the best to our clients.
          </p>
        </div>
      </div>

      <div className="app__about-content">
        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">Quote</h1>
          <p className="p__opensans">
            "Our technology-driven leadership through ideas and actions has resulted in the most influential way in the digital industry."
          </p>
        </div>

        <div className="app__about-content_history">
          <h1 className="headtext__cormorant">What we aim</h1>
          <p className="p__opensans">
            M-Tech focuses on the outcome of the process by giving importance to developmental experimentation and software enhancement. We make design decisions based on how a consumer/client wants their brands to be.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
