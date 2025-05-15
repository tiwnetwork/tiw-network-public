import OurSkilStyle from "./OurSkil.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease"; // Update path accordingly
import { skillsData } from "../../../assets/data/OurServicesData/SkilData";


import AnimatedProgressProvider from "./../../../Components/AnimatedProgressProvider";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const OurSkil = ({ subTitle, Title, description, elementImage}) => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);
  return (
    <OurSkilStyle className="skills-section">
      <div className="radial-gradient">

      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="skills-content">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>

                  <div className="section-title">
                    <span className="sub-title" data-splitting>{subTitle}</span>
                    <h2 className="title" data-splitting>
                      {Title}
                    </h2>
                    <p>
                      {description}
                    </p>
                    <div className="btn-group">
                      <NavLink to={"/"} className="crypto-glow-btn">
                        <span className="btn-inner">
                          <span className="btn-normal-text">Join the Network</span>
                          <span className="btn-hover-text">Join the Network </span>
                        </span>
                      </NavLink>
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
