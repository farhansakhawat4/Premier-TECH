import React from 'react';
import './Team.css';


const teamMembers = [
  {
    name: 'Mujtaba Tariq',
    role: 'CEO',
    image: 'images/team2.png',
  },
  {
    name: 'Naheen Mujtaba',
    role: 'Creative Director',
    image: 'images/team1.png',
  },
  {
    name: 'Inam Ur Rehman',
    role: 'CTO',
    image: 'images/team3.png',
  }
];

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-title">
          <h2>Team</h2>
          <div className="section-divider"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-image-wrapper">
                <div className="team-image-hover">
              
                </div>
                <img src={member.image} alt={`${member.name}`} className="team-member-img" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        <div className="about-team">
          <div className="about-block">
            <h5>Our Goal</h5>
            
            <h3>
              To create a worthier and unprecedented digital experience. <strong>CPU Premier</strong> team
              creates exceptional digital experiences for our clients every day.
            </h3>
          </div>
          <div className="about-block">
            <h5>Who are we?</h5>
            <p>
              We are dedicated team of IT hardware specialists committed to delivering IT hardware solutions 
              that power the core of modern business infrastructure. With deep industry expertise and a passion 
              for technology, we provide high-performance servers, scalable storage systems and custom hardware 
              configurations. Our client-first approach make us trsuted partner for organizations that require 
              robust and future-ready IT enovironmets. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
