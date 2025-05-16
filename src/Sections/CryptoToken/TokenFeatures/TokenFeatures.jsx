import { useEffect } from "react";
import $ from "jquery";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import TokenFeaturesStyle from "./TokenFeatures.style";


import menImg from "../../../assets/images/tiwmedia/steven.png";
import men1Img from "../../../assets/images/tiwmedia/sam.png";
import signaturePlaceholder from "../../../assets/images/tiwmedia/signaturePlaceholder.png";
import settingIcon from "../../../assets/images/crypto-token/setting-icon.svg";
import arrowRightBlackIcon from "../../../assets/images/crypto-token/arrow-right-black.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TokenFeatures = () => {
  useEffect(() => {
    const moveImg = $(".move-img");
    if (moveImg.length) {
      $(document).on("mousemove", function (e) {
        $(".move-img").offset({
          left: e.pageX,
        });
      });
    }

    const docImg = $(".doc-img");
    if (docImg.length) {
      $(document).on("mousemove", function (e) {
        $(".doc-img").offset({
          left: e.pageX,
        });
      });
    }

    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <TokenFeaturesStyle className="crypto-token-features-section">
      <div className="container">
        <div className="crypto-token-features-cards">
          <div className="stack">
            {/* Card 1 */}
            <div className="stack__card">
              <div className="card-bg">
                <div className="overlay">
                  <div className="row">
                    <div className="col-md-6">
                      <ScrollAnimate delay={200}>
                        <div className="title">
                          <h4 className="dm-sans wt-700" data-splitting="">
                            STEVEN CLARK
                          </h4>
                          <p className="position">8 Figure Property Portfolio, Co-Host of Scottish Property Podcast, Property Investor & Property Coach</p>
                        </div>
                      </ScrollAnimate>
                      <div className="crypto-token-features-img">
                      <ScrollAnimate delay={250}>
                        <div className="features-img-inner">
                          <img src={menImg} alt="img" />
                        </div>
                      </ScrollAnimate>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="crypto-token-features-text">
                        <ScrollAnimate delay={200}>
                          <h2 data-splitting="">
                            "I created this network to encourage change — empowering investors to collaborate, innovate, and make a lasting impact in the industry"
                          </h2>
                        </ScrollAnimate>
                        <ScrollAnimate delay={250}>
                        <div className="features-img-inner">
                          <img src={signaturePlaceholder} alt="img" />
                        </div>
                      </ScrollAnimate>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stack__card">
              <div className="card-bg">
                <div className="overlay">
                  <div className="row">
                    <div className="col-md-6">
                      <ScrollAnimate delay={200}>
                        <div className="title">
                          <h4 className="dm-sans wt-700" data-splitting="">
                            SAM DYER
                          </h4>
                          <p className="position">8 Figure Property Portfolio, <br/> Property Investor & Property Sourcer</p>
                        </div>
                      </ScrollAnimate>
                      <div className="crypto-token-features-img">
                      <ScrollAnimate delay={250}>
                        <div className="features-img-inner">
                          <img src={men1Img} alt="img" />
                        </div>
                      </ScrollAnimate>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="crypto-token-features-text">
                        <ScrollAnimate delay={200}>
                          <h2 data-splitting="">
                            "Creating a property investors network is about more than opportunities — it's about building lasting friendships with like-minded people."
                          </h2>
                        </ScrollAnimate>
                        <ScrollAnimate delay={250}>
                        <div className="features-img-inner">
                          <img src={signaturePlaceholder} alt="img" />
                        </div>
                      </ScrollAnimate>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </TokenFeaturesStyle>
  );
};

export default TokenFeatures;
