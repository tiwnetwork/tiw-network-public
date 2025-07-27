import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import FinanceBenefitsStyle from "./FinanceBenefits.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import visionImg1 from "../../../assets/images/tiwmedia/about-us/vision-1.jpg";
import visionImg2 from "../../../assets/images/tiwmedia/about-us/vision-2.jpg";
import visionImg3 from "../../../assets/images/tiwmedia/about-us/vision-3.jpg";
import visionImg4 from "../../../assets/images/tiwmedia/about-us/vision-4.jpg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceBenefits = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: false, 
    autoplaySpeed: 5000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
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
  }, []);

  return (
    <FinanceBenefitsStyle className="benefits-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="The Vision"
            subtitle="TIW NETWORK"
            titleMaxW="100%"
            subtitleClass="green-color"
            parentClass="v6 text-center md:text-left"
          />
        </ScrollAnimate>
        <div className="col-md-10 description">
          <p>
            At TIW Network, we envision a thriving, inclusive property sector that
            transforms communities across Scotland.
          </p>
          <p>
            By 2030, our members will lead Scotland’s housing market through innovation,
            sustainability, and collaboration, empowering our members to create affordable,
            energy-efficient homes that improve lives.
          </p>
          <p>Our vision is built on four commitments:</p>
        </div>



        <div className="benefits-content">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimate delay={250}>
                <div className="benefits-left-section slider-benefits-for">
                  <Slider {...settingsFor} className="slider-benefits-for">
                    <div className="benefits-img-bg">

                      <div className="about-feature-img benefits-img">
                        <img src={visionImg1} alt="img" />

                      </div>
                    </div>
                    <div className="benefits-img-bg benefits-img-bg2">

                      <div className="about-feature-img benefits-img">
                        <img src={visionImg2} alt="img" />
                      </div>
                    </div>
                    <div className="benefits-img-bg benefits-img-bg3">

                      <div className="about-feature-img benefits-img">
                        <img src={visionImg3} alt="img" />
                      </div>
                    </div>
                    <div className="benefits-img-bg benefits-img-bg4">

                      <div className="about-feature-img benefits-img">
                        <img src={visionImg4} alt="img" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
                <div className="benefits-faq">
                  <Slider {...settingsNav} className="slider-benefits-nav">
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Building Scotland’s Largest Property Network
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Building Scotland’s Largest Property Network Uniting investors and partners to drive collaboration and mutual growth.

                        </p>
                      </div>
                    </div>
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Driving Change in Housing
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Creating innovative, accessible housing solutions that meet Scotland’s needs.

                        </p>
                      </div>
                    </div>
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">Championing Sustainability and Innovation</button>
                      <div className="benefits-nav-content">
                        <p>
                          Leading with sustainable practices and cutting-edge technology.
                        </p>
                      </div>
                    </div>
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Uplifting Communities
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          Developing vibrant neighbourhoods with high-quality, affordable homes.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </ScrollAnimate>
            </div>
          </div>
          <p className="vision-footer">We are dedicated to fostering an inclusive industry by supporting greater participation from women and underrepresented groups. Together, we will revolutionise Scotland’s property landscape for generations to come.</p> </div>
      </div>
    </FinanceBenefitsStyle>
  );
};

export default FinanceBenefits;
