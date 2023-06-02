import React from 'react'

import mobhead from "../../assets/images/mobile/mobhead.jpg";
import deshead from "../../assets/images/desktop/deshead.jpg";
import icondown from "../../assets/images/icondown.svg";

import "./hero.scss";


const Hero = () => {
  return (
    <section className="hero_cont">
      <img src={mobhead} alt="" className="hero_img dn_for_large" />
      <img src={deshead} alt="" className="hero_img dn_for_small" />
      <div className="hero_title_cont ">
        <h1 className="focus-in-expand-fwd">
          WE ARE <br className="dn_for_large" />
          CREATIVES
        </h1>
        <img src={icondown} alt="" />
      </div>
    </section>
  )
};

export default Hero;