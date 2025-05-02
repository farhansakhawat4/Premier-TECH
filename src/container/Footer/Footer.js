import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">

      <div className="app__footer-links_logo">
        <img src="/images/orange.png" alt="footer_logo" />
        <p className="p__opensans">
          "With our core foundation in exceptional digitalization, our team of perceptive experts drives every business to perform in unison.."
        </p>
      </div>

      <div className="app__footer-links_icons">
        <h1 className="app__footer-headtext">Social</h1>
        <span className="section-divider"></span>
        <div className="footer__icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FiFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FiTwitter />
        </a>
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
         </a>
        </div>
      </div>

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <span className="section-divider"></span>
        
        <p className="p__opensan">Office No. 1, First Floor CSD Bedian Road, Near R A Bazar cantt Lahore</p>
        <p className="p__opensan"><strong>Email:</strong> hr@premier.com</p>
        <p className="p__opensan"><strong>Hr Mobile:</strong> +92 3310099811</p>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Policies</h1>
        <span className="section-divider"></span>
        
        <p><a href="https://www.cmcmtech.com/privacy-policy.html"><strong className="text-switch">Privacy policy</strong></a></p>
        <p><a href="https://www.cmcmtech.com/refund policy.html"><strong className="text-switch">Refund policy</strong></a></p>
        <p><a href="https://www.cmcmtech.com/terms and condition.html"><strong className="text-switch">Terms and Condition</strong></a></p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© {new Date().getFullYear()} Premier. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
