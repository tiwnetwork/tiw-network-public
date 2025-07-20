
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
                            Inspiring Events
                          </h2>
                        </div>

                        <div className="card-left-content">

                          <div className="card-left-text">
                            <p>
                              From our Christmas Ball to business conferences and adventurous road trips, we host exclusive events all year round. What our members want, we make happen, creating valuable opportunities to connect, collaborate, and grow their network. 
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
                          Community
                        </h3>
                        <p>
                          You’re never more than a message away from the answer you need. From legal questions to trade contacts or deal advice, our community has your back. Connect in 25+ active groups and get instant support from people who’ve been there. 
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
                  <h3>Partners</h3>
                  <p>
                    Members save thousands on everything from kitchens to legal fees. As part of TIW, you get access to exclusive trade-only pricing with partners like B&Q and Wren Kitchens, plus expert advice from leading companies in the sector. 
                  </p>
                  
                  <div className="container mt-4">
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
