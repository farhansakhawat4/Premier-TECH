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
              To create a worthier and unprecedented digital experience. <strong>M-Tech</strong> team
              creates exceptional digital experiences for our clients every day.
            </h3>
          </div>
          <div className="about-block">
            <h5>Who are we?</h5>
            <p>
              M-Tech adopts a 360-degree approach by targeting multiple channels, especially social media. Our specialties comprise business strategy, branding, design, content creation, UX/UI, CX, strategic marketing, web development, and much more digital awesomeness.
              Our techniques for digital services are ready to attune to changes or turmoil taking place in the digital world with our team of various expertise and interests to push their ambitions to a new level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
