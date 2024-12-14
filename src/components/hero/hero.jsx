import React from 'react';
import './hero.css';
import Pic from "../Accets/hero2.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p id="p1">NEW ARRIVALS ONLY</p>
        <div className='hero-l'>
          <div id="p2">New</div>
          <div id="p3">Collections</div>
          <div id="p4">For Everyone</div>
        </div>
        <div id="last">Latest collection ---<FontAwesomeIcon icon={faGreaterThan}  id="greater" /></div>
      </div>
      <div className='hero-right'>
        <img src={Pic} alt="" />
      </div>
    </section>
  )
}

export default Hero;
