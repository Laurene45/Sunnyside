import React from 'react';

import egg from "../../assets/images/mobile/egg.jpg";
import cup from "../../assets/images/mobile/cup.jpg";
import chery from "../../assets/images/mobile/chery.jpg";
import orange from "../../assets/images/mobile/orange.jpg";

import egg1 from "../../assets/images/desktop/egg.jpg";
import cup1 from "../../assets/images/desktop/cup.jpg";
import chery1 from "../../assets/images/desktop/chery.jpg";
import orange1 from "../../assets/images/desktop/orange.jpg";

import "./content.scss";


const Content = () => {
  return (
    <section className="content_cont">
        <div className="content_first" style={{ flexDirection: "row-reverse" }}>
            {/* img egg */}
            <div className="content_img">
                <img className="dn_for_large" src={egg} alt="" />
                <img className="dn_for_small" src={egg1} alt="" />
            </div>
            
            {/* text egg */}
            <div className="content_first_info slide-in-left ">
                <h2>
                    {" "}
                    Transform your <br className="dn_for_small" /> brand
                </h2>
                <p>
                    We are a full-service creative agency specializing in helping brands
                    grow fast. Engage your clients through compelling visuals that do
                    most of the marketing for you.
                </p>
                <div className="btn_cont_yellow">Learn more</div>
            </div>
        </div>

        <div className="content_first">
            {/* img cup */}
            <div className="content_img">
                <img className="dn_for_large" src={cup} alt="" />
                <img className="dn_for_small" src={cup1} alt="" />
            </div>

            {/* text cup */}
            <div className="content_first_info slide-in-right">
                <h2> Stand out to the right audience</h2>
                <p>
                    Using a collaborative formula of designers, researchers,
                    photographers, videographers, and copywriters, we’ll build and
                    extend your brand in digital places.
                </p>
                <div className="btn_cont_red">Learn more</div>
            </div>
        </div>

        <div className="sec_cont">
            {/* text cherry */}
            <div className="content_second">
                <img className="dn_for_large" src={chery} alt="" />
                <img className="dn_for_small" src={chery1} alt="" />
            
                <div className="second_info">
                    <h2>Graphic design</h2>
                    <p>
                    Great design makes you memorable. We deliver artwork that
                    underscores your brand message and captures potential clients’
                    attention.
                    </p>
                </div>
            </div>

            {/* text orange */}
            <div className="content_second top_min">
                <img className="dn_for_large" src={orange} alt="" />
                <img className="dn_for_small" src={orange1} alt="" />
                <div className="second_info">
                    <h2>Photography</h2>
                    <p>
                        Increase your credibility by getting the most stunning,
                        high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content