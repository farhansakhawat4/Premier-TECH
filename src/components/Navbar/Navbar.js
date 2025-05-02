import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // default active

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
         <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className={activeLink === '#home' ? 'active' : ''} >
            <img alt="logo" src="/images/orange.png" />
          </a>
        
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className={activeLink === '#home' ? 'active' : ''} >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleLinkClick('#about')}
            className={activeLink === '#about' ? 'active' : ''} >
            About
          </a>
          <a
            href="#products"
            onClick={() => handleLinkClick('#products')}
            className={activeLink === '#products' ? 'active' : ''} >
            Products
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className={activeLink === '#contact' ? 'active' : ''} >
            Contact
          </a>
        </div>

        <div className="navbar-toggle" onClick={handleToggle}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('/'); // default active

//   const handleToggle = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     closeMenu();
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <img alt="logo" src="/images/orange.png" />

//         <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
//           <Link
//             to="/"
//             onClick={() => handleLinkClick('/')}
//             className={activeLink === '/' ? 'active' : ''}
//           >
//             Home
//           </Link>
//           <a
//             href="#about"
//             onClick={() => handleLinkClick('#about')}
//             className={activeLink === '#about' ? 'active' : ''}
//           >
//             About
//           </a>
//           <a
//             href="#contact"
//             onClick={() => handleLinkClick('#contact')}
//             className={activeLink === '#contact' ? 'active' : ''}
//           >
//             Contact
//           </a>
//         </div>

//         <div className="navbar-toggle" onClick={handleToggle}>
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
