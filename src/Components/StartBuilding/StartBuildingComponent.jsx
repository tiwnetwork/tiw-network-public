import StartBuildingStyleWrapper from "./StartBuilding.style";
import BuildingImg from "../../assets/images/about-us/building-img.svg";
import ScrollAnimate from "../ScrollAnimate";
import { useEffect } from "react";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

const StartBuildingComponent = ({ firstText, highlightText }) => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <StartBuildingStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className="building-content">
              <ScrollAnimate delay={200}>
                <div className="section-title text-center" data-splitting>
                  <h1 className="title">
                    {firstText}{" "}
                    <span style={{ color: "#E6AD23" }}>{highlightText}</span>
                  </h1>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </StartBuildingStyleWrapper>
  );
};

export default StartBuildingComponent;
