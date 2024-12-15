import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="EasyMart Logo" />
        <p>EasyMart.bd</p>
      </div>
      
      <ul className="footer-links">
        <li>
          <Link to="/company">Company</Link>  
        </li>
        <li>
          <Link to="/office">Offices</Link>  
        </li>
        <li>
          <Link to="/about">About</Link>  
        </li>
        <li>
          <Link to="/contact">Contact</Link>  
        </li>
      </ul>
      
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterest_icon} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 EasyMart.bd</p>
      </div>
    </div>
  );
}

export default Footer;
