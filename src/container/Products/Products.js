import React from 'react';
import './Products.css';

const Products = () => {
  const productData = [
    {
      title: 'Storage',
      points: [
        'SSD & HDD',
        'Cloud integration',
        'Data backup and recovery'
      ]
    },
    {
      title: 'Power Supply',
      points: [
        'UPS systems',
        'High-efficiency units',
        'Load balancing'
      ]
    },
    {
      title: 'Router',
      points: [
        'Wi-Fi 6 supported',
        'VPN and firewall',
        'Remote management'
      ]
    },
    {
      title: 'Server',
      points: [
        '24/7 uptime',
        'Scalable infrastructure',
        'Virtualization ready'
      ]
    },
    {
      title: 'Switches',
      points: [
        'Layer 2 and 3',
        'PoE support',
        'Managed and unmanaged'
      ]
    },
    {
      title: 'MotherBoards',
      points: [
        'Latest chipsets',
        'Overclocking support',
        'Multiple I/O options'
      ]
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h1 className="section-title">Our Products</h1>
        <div className="cards-wrapper">
          {productData.map((product, index) => (
            <div className="product-card" key={index}>
              <h3 className="card-title">{product.title}</h3>
              <ul className="card-points">
                {product.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
