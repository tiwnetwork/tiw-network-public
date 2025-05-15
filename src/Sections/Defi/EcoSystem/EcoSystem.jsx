import { useEffect, useRef } from "react";
import EcoSystemStyle from "./EcoSystem.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { Link } from "react-router-dom";

import ecoLinePC from "../../../assets/images/defi/eco-lines.svg";
import ecoLineMobile from "../../../assets/images/defi/eco_line.png";
import globeImg from "../../../assets/images/tiwmedia/scotlandmap.svg";
import arrowRightBlackImg from "../../../assets/images/crypto-token/arrow-right-black.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const EcoSystem = () => {


  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  });

  return (
    <EcoSystemStyle className="ecosystem-section">
      <div className="container">
       <ScrollAnimate delay={200}>
        <div className="defi" data-splitting>
          <span className="sub-title">If you're building a business or portfolio — this is your community</span>
          <h2 className="title">Join a Network of Likeminded Individuals</h2>
        </div>
       </ScrollAnimate>

        <ScrollAnimate delay={250}>
        <Link to="/pricing">
          <a className="defi-launchapp-btn btn-hov-effect dark">
            Join the Network
            <img src={arrowRightBlackImg} alt="icon" />
            <span className="round-shape" />
          </a>
        </Link>
        
        </ScrollAnimate>
        <div className="ecosystem-text">
          <ScrollAnimate delay={300}>
          <ul>
            <li>
              Exclusive <br/> Events
            </li>
            <li>
            Off-Property <br />
            Deals
            </li>
            <li>
            Group Chats <br/>and Forums
            </li>
            <li>
            Exclusive Discounts<br/>and Offers
              
            </li>
            <li>
            Tools and<br />  Templates
            </li>
          </ul>
          </ScrollAnimate>
        </div>
        <ScrollAnimate delay={300}>
        <div className="ecosystem-content">
          <div className="eco-line">
            <img src={ecoLinePC} alt="img" className="eco-line-pc" />
            <img src={ecoLineMobile} alt="img" className="eco-line-mobile" />
          </div>
          <div className="globe-img">
            <img src={globeImg} alt="img" className="globe" />
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </EcoSystemStyle>
  );
};

export default EcoSystem;
