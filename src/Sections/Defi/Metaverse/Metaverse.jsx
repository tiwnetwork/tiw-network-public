
import MetaverseStyle from "./Metaverse.style";


import ScrollAnimate from "../../../Components/ScrollAnimate";
import tiwlogo from "../../../assets/images/logo/TIW-Logo.png";

import cardimg1 from "../../../assets/images/tiwmedia/homepage-benefits/3.png";
import cardimg2 from "../../../assets/images/tiwmedia/homepage-benefits/4.webp";
import metavarseCardBgImg from "../../../assets/images/tiwmedia/homepage-benefits/2.png";
import metavarseImg2Img from "../../../assets/images/tiwmedia/homepage-benefits/1.png";


const Metaverse = () => {

  return (
    <MetaverseStyle className="defi-metaverse-section">
      <div className="container">
      <ScrollAnimate delay={200}>
        <div className="defi title center">
          <span className="sub-title">TIW goes beyond surface-level networking</span>
          <h2 className="title">Unlock Your Member Benefits</h2>
        </div>
       </ScrollAnimate>
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <div className="defi-metaverse-card">
              <img src={metavarseImg2Img} alt="img" className="bi-weekly-gathering-bg "/>
                <div className="row">
                  <div className="col-md-5">
                      
                    <ScrollAnimate delay={200}>
                      <div className="card-left">
                        <div className="defi">
                          <img src={tiwlogo} alt="icon" className="tiwlogo" />
                          <h2 className="title resize">
                            Powerful Events
                          </h2>
                        </div>

                        <div className="card-left-content">

                          <div className="card-left-text">
                            <p>
                              From our Christmas Ball to business conferences and relaxing spa days, we host exclusive events. designed to connect the right people in the right room.
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
                        <h3 className="mb-4">
                          💰 Exclusive Discounts
                        </h3>
                        <p>
                          Save £1,000s on kitchens, bathrooms, flooring, estate agency, legals, trades, and more! from our Partners Directory.
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
                <div className="overlay">
                  
                  <img src={tiwlogo} alt="icon" className="tiwlogo" />
                  <h3>25+ Active Subgroups</h3>
                  <p>
                    Dedicated forums for off-market deals, JV opportunities, renovations, and niche topics like alternative investments. 
                  </p>
                  
                  <div className="container mt-5">
                  <div className="row image-row g-0">
                    <div className="col-sm-5">
                      <img src={cardimg1} alt="Image 1" />
                    </div>

                    <div className="col-sm-7">
                      <img src={cardimg2} alt="Image 2" />
                    </div>
                  </div>
                  </div>
                  
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
