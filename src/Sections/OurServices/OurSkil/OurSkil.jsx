import OurSkilStyle from "./OurSkil.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import "react-circular-progressbar/dist/styles.css";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";

const OurSkil = ({ subTitle, Title, description, elementImage, showContactButton = false }) => {
  return (
    <OurSkilStyle className="skills-section">
      <div className="radial-gradient"></div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="skills-content">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title">
                    <span className="sub-title">{subTitle}</span>
                    <h2 className="title">{Title}</h2>
                    <p>{description}</p>
                    <div className="btn-group">
                      <NavLink to="/pricing" className="crypto-glow-btn">
                        <span className="btn-inner">
                          <span className="btn-normal-text">Join the Network</span>
                          <span className="btn-hover-text">Join the Network</span>
                        </span>
                      </NavLink>
                      {showContactButton && (
                        <NavLink to="/contact-us" className="lets-talk-bttn">
                          Contact Us
                          <span className="icon">
                            <span
                              className="iconify"
                              data-icon="akar-icons:chevron-right"
                            />
                          </span>
                        </NavLink>
                      )}
                    </div>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-6 image-col">
            <div className="skills-img">
              <ScrollAnimate delay={200}>
                <img src={elementImage} alt="skills-img" />
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </OurSkilStyle>
  );
};

export default OurSkil;
