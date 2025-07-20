import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import FeatureTeamStyle from "./FeatureTeam.style";

import Img1 from "../../../assets/images/tiwmedia/about-us/about-us-networking.png";
import Img2 from "../../../assets/images/tiwmedia/about-us/about-us-events.png";
import Img3 from "../../../assets/images/tiwmedia/about-us/about-us-collab.png";
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
                <h2>Network</h2>
                <p>
                  TIW Network is designed to help you build lasting wealth. Whether you’re a member, partner, or sponsor, our network provides the tools, resources, and connections to accelerate your success and help you achieve financial growth.  
                </p>
              </div>
              <div className="slider-item">
                <p className="sub-title">Our Mission</p>
                <h2>Events</h2>
                <p>
                  We host a range of events throughout the year, including conferences, Christmas ball, NC500, family days and so on. Whatever our members ask for, we make happen – creating valuable opportunities to connect, collaborate, and grow their network. 
                </p>
              </div>
              <div className="slider-item">
                <p className="sub-title">Our Mission</p>
                <h2>Collaboration</h2>
                <p>
                  We believe that true wealth is built through strong partnerships and shared opportunities. Our platform fosters collaboration between members, partners, and sponsors, creating an eco-system where ideas, resources, and expertise are shared.  
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
