import React from 'react';
import './Brands.css';

const brandLogos = [
  { src: '/brands/cisco_logo.png', name: 'Cisco' },
  { src: '/brands/Dell_Logo.png', name: 'Dell' },
  { src: '/brands/HP_logo.png', name: 'HP' },
  { src: '/brands/juniper_logo.png', name: 'Juniper' },
  { src: '/brands/nvidia_logo.png', name: 'Nvidia' },
  { src: '/brands/ubiquiti_logo.png', name: 'Ubiquiti' },
];

const Brands = () => {
  return (
    <div className="brands-section" id='brands'>
      <h1 className="brands-heading">Brands
      <span className="brand-divider"></span>
      </h1>
      <div className="brands-slider">
        <div className="brands-track">
          {brandLogos.map((logo, index) => (
            <div className="brand-logo" key={index}>
              <img src={logo.src} alt={logo.name} />
              {/* <p className="brand-name">{logo.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
