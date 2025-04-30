import OurSkilStyle from "./OurSkil.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease"; // Update path accordingly
import { skillsData } from "../../../assets/data/OurServicesData/SkilData";

import skillsImg from "../../../assets/images/services/skills-img.png";
import AnimatedProgressProvider from "./../../../Components/AnimatedProgressProvider";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const OurSkil = () => {
  return (
    <OurSkilStyle className="skills-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="skills-content">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title">
                    <span className="sub-title">UNLOCK YOUR POTENTIAL</span>
                    <h2 className="title">
                      Scotland's Premier Property Investors
                    </h2>
                    <p>
                      Joining TIW Network opens the door to exclusive resources, expert insights, and a vibrant community of property investors. Experience unparalleled growth opportunities and support tailored to your journey.
                    </p>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="skills-img">
              <ScrollAnimate delay={200}>
                <img src={skillsImg} alt="skills-img" />
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </OurSkilStyle>
  );
};

export default OurSkil;
