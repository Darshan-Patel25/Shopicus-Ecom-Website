import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faInstagram ,faFacebook,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo3 from "../Accets/logo-removebg-preview.png"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
       
        <h1> <img src={logo3} alt="" />Shopicus</h1>
      </div>
      <div className='footer-two'>
        <div className="about">
          <h3>ABOUT</h3>
          <p>A Mission Statement is a definition of the company's business, who it serves, what it does, its objectives, and its approach to reaching those objectives. A Vision Statement is a description of the desired future state of the company. An effective vision inspires the team, showing them how success will look and feel.</p>
          <p className='faicon'><FontAwesomeIcon icon={faInstagram} id="instra"/> <FontAwesomeIcon icon={faFacebook} id="facebook"/> <FontAwesomeIcon icon={faLinkedin} id="linkdin"/> <FontAwesomeIcon icon={faTwitter}id="twiter" /></p>
        </div>
        <div className="footer-link">
          <h3>Links</h3>
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="location">
          <div className='l1'>  <FontAwesomeIcon icon={faLocationDot} />   21 Revolution Street <p>Paris, France</p></div>
          <div className='l2'>
          <FontAwesomeIcon icon={faWhatsapp} /> +1 444 156789
          </div>
          <div className='l3'>
          <FontAwesomeIcon icon={faEnvelope} />  shopicus@gmail.com</div>
        </div>
      </div>
      <hr />
      <span>Copyright©2022; Designed by Dp</span>
      
    </div>
  );
}

export default Footer;
