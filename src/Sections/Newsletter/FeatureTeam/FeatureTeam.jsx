import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import FeatureTeamStyle from "./FeatureTeam.style";

import Img1 from "../../../assets/images/img/feature-team3.png";
import Img2 from "../../../assets/images/img/feature-team2.png";
import Img3 from "../../../assets/images/img/feature-team1.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

const FeatureTeam = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));

    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);
  
  return (
    <FeatureTeamStyle className="feature-team-section newsletter">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-7 mt-5 mb-5 mt-lg-0">
          <ScrollAnimate delay={200}>
          <Slider
            ref={sliderNavRef}
            {...settingsNav}
            className="feature-team-slider-nav"
          >
            <div className="slider-item">
              <div className="slider-progress">
                <div className="progress-done" />
              </div>
              <img src={Img1} alt="slider-img-1" />
            </div>
            <div className="slider-item">
              <div className="slider-progress">
                <div className="progress-done" />
              </div>
              <img src={Img2} alt="slider-img-2" />
            </div>
            <div className="slider-item">
              <div className="slider-progress">
                <div className="progress-done" />
              </div>
              <img src={Img3} alt="slider-img-3" />
            </div>
          </Slider>
          </ScrollAnimate>
        </div>
        <div className="col-lg-5">
            <ScrollAnimate delay={200}>
            <Slider
              ref={sliderForRef}
              {...settingsFor}
              className="feature-team-slider-for"
            >
              <div className="slider-item">
                <p className="sub-title">Our Mission</p>
                <h2>Empowering Investors Through Collaboration & Knowledge Sharing</h2>
                <p>
                  At TIW Network, we are dedicated to creating a value-driven community where members can share expertise and connect with trusted partners. Our mission is to foster collaboration and drive mutual success in the property investment sector.
                </p>
              </div>
              <div className="slider-item">
                <p className="sub-title">Our Mission</p>
                <h2>Building lasting relationships for collective growth</h2>
                <p>
                  Our network fosters meaningful connections and long-term partnerships, enabling members to collaborate, share opportunities, and grow together.
                </p>
              </div>
              <div className="slider-item">
                <p className="sub-title">Our Mission</p>
                <h2>Creating opportunities for collaboration and innovation</h2>
                <p>
                  Our network fosters meaningful connections and long-term partnerships, enabling members to collaborate, share opportunities, and grow together.
                </p>
              </div>
            </Slider>
            </ScrollAnimate>
        </div>

          
        </div>
      </div>
    </FeatureTeamStyle>
  );
};

export default FeatureTeam;
