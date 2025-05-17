import StartBuildingStyleWrapper from "./StartBuilding.style";
import ScrollAnimate from "../ScrollAnimate";

const StartBuildingComponent = ({ firstText, highlightText }) => {

  return (
    <StartBuildingStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className="building-content">
              <ScrollAnimate delay={200}>
                <div className="section-title text-center" >
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
