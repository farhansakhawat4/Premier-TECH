import React, { useState } from 'react';
import './Ideology.css';
import { ImUsers } from "react-icons/im";
import { SlVector } from "react-icons/sl";
import { PiSpeakerHighLight } from "react-icons/pi";

const Ideology = () => {
  const [hovered, setHovered] = useState(null);

  const sections = [
    {
      id: 1,
      number: '01',
      title: 'Effective Communication',
      description: 'Effective communication is significant at every level of an organization.',
      icon: <ImUsers className="icon" />,
    },
    {
      id: 2,
      number: '02',
      title: 'Creative Designing',
      description: 'A dynamic design is impactful and engaging.',
      icon: <SlVector className="icon rotate" />,
    },
    {
      id: 3,
      number: '03',
      title: 'Data Driven Marketing',
      description: 'Pioneer marketing portal that pursues efficient strategies.',
      icon: <PiSpeakerHighLight className="icon" />,
    },
  ];

  return (
    <section className="ideology-section" id='ideology'>
      <div className="ideology-header">
        <h2>OUR IDEOLOGY</h2>
        {/* <div className="section-divider"></div> */}
      </div>

      <div className="ideology-container">
        {sections.map((item) => (
          <div
            key={item.id}
            className={`ideology-part ${item.id === 2 ? 'middle' : ''}`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
         
             {hovered === item.id ? (
               
              <div className="hover-content">
                {item.icon}
              <h2 className="mt15 mb10">{item.title}</h2>
                <p className="no-margin">{item.description}</p>
            </div>
           
             ) : (
             <div className="default-content">
             <h3>{item.number}</h3>
             {item.icon}
             <h4>
                 {item.title === 'Data Driven Marketing' ? (
                <>
                  Data Driven<br />
                   Marketing
                </>
                ) : (
               item.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                 {word}
                 <br />
                </React.Fragment>
                ))
                 )}
                </h4>
             </div>
               )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ideology;
