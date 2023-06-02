import React from 'react';
import "./footer.scss";

import ice from "../../assets/images/mobile/ice.jpg";
import gal from "../../assets/images/mobile/gal.jpg";
import milk from "../../assets/images/mobile/milk.jpg";
import plate from "../../assets/images/mobile/plate.jpg";

import ice1 from "../../assets/images/desktop/ice.jpg";
import gal1 from "../../assets/images/desktop/gal.jpg";
import milk1 from "../../assets/images/desktop/milk.jpg";
import plate1 from "../../assets/images/desktop/plate.jpg";

import face from "../../assets/images/icon-facebook.svg";
import inst from "../../assets/images/icon-instagram.svg";
import twet from "../../assets/images/icon-twitter.svg";
import pin from "../../assets/images/icon-pinterest.svg";


function Footer() {
  return (
    <section className="footer_cont">
        {/* images laptop */}
      <div className="footer_top dn_for_large">
        <img src={milk} alt="" />
        <img src={plate} alt="" />
        <img src={ice} alt="" />
        <img src={gal} alt="" />
      </div>

      {/* images mobile */}
      <div className="footer_top_des dn_for_small">
        <img src={milk1} alt="" />
        <img src={plate1} alt="" />
        <img src={ice1} alt="" />
        <img src={gal1} alt="" />
      </div>

      <div className="footer_bottom">
        <h2>sunnyside</h2>
        <div className="footer_links">
          <h3>About</h3>
          <h3>Services</h3>
          <h3>Projects</h3>
          <h3>Contact</h3>
        </div>
        <div className="footer_icons">
          <img src={face} alt="" />
          <img src={inst} alt="" />
          <img src={twet} alt="" />
          <img src={pin} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Footer