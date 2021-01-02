import React from 'react';
import { Button } from '../Button/Button';
import mainImage from '../../images/travel.jpg';
import { FaPlayCircle } from 'react-icons/fa';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={mainImage} alt="main" />
      <h1>ADVENTURE</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FaPlayCircle />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
