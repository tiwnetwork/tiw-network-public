import { useEffect } from "react";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import MetaverseStyle from "./Metaverse.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import blurLayerImg from "../../../assets/images/crypto-token/blur-layer.png";
import arrowRightImg from "../../../assets/images/defi/arrow-right.svg";
import objectImg from "../../../assets/images/defi/object.png";
import metavarseCardBgImg from "../../../assets/images/tiwmedia/metavarse-card-bg.png";
import metavarseCardBg3Img from "../../../assets/images/tiwmedia/metavarse-card-bg3.png";
import arrowRightYellowImg from "../../../assets/images/crypto-token/arrow-right-yellow.svg";
import metavarseImg2Img from "../../../assets/images/defi/metavarse-img2.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import tiwlogo from "../../../assets/images/logo/TIW-Logo.png";

const Metaverse = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  

  return (
    <MetaverseStyle className="defi-metaverse-section">
      <div className="container">
      <ScrollAnimate delay={200}>
        <div className="defi title center" data-splitting>
          <span className="sub-title">EXCLUSIVE PERKS FOR OUR MEMBERS</span>
          <h2 className="title">Unlock Your Member Benefits</h2>
        </div>
       </ScrollAnimate>
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <div className="defi-metaverse-card">
              <img src="/src/assets/images/tiwmedia/homepage-bi-weekly.png" alt="img" className="bi-weekly-gathering-bg "/>
                <div className="row">
                  <div className="col-md-7">
                      
                    <ScrollAnimate delay={200}>
                      <div className="card-left">
                        <div className="defi" data-splitting>
                          <img src={tiwlogo} alt="icon" className="tiwlogo" />
                          <h2 className="title resize">
                            Join Our Bi-Weekly Gatherings
                          </h2>
                        </div>

                        <div className="card-left-content">

                          <div className="card-left-text">
                            <p>
                              Network and grow at our major events.
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <ScrollAnimate delay={250}>
              <div className="defi-metaverse-card2">
                <img
                  src={metavarseCardBgImg}
                  alt="img"
                  className="metavarse-card-bg2"
                />
                <div className="overlay">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card2-text">
                        <img src={tiwlogo} alt="icon" className="tiwlogo" />
                        <h3 className="mb-4" data-splitting>
                          Member Events for Everyone
                        </h3>
                        <p>
                          Engage in fun activities like spa days, road trips, and team-building events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <ScrollAnimate delay={300}>
              <div className="defi-metaverse-card3">
                <img
                  src={metavarseCardBg3Img}
                  alt="img"
                  className="metavarse-card-bg3"
                />
                <div className="overlay">
                  
                  <img src={tiwlogo} alt="icon" className="tiwlogo" />
                  <h3 data-splitting>Join Empowering Women-Only Events</h3>
                  <p>
                    Gain insights from industry experts in our sessions.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </MetaverseStyle>
  );
};

export default Metaverse;
