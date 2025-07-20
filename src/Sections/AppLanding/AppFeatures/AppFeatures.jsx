import AppFeaturesStyleWrapper from "./AppFeatures.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppFeatures = () => {
  return (
    <AppFeaturesStyleWrapper className="app-useful-features">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Get to Know Us"
                subtitle="TIW Network"
                titleClass="text-white"
              />
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="app-useful-features-text">
                <p className="text-para pb-3">
                  TIW Network is Scotland’s leading property investors network, dedicated to empowering business owners and property investors. We facilitate valuable connections, encourage collaboration, and provide the resources needed for members to grow their businesses and property portfolios. 
                </p>
                <p className="text-para">
                  Our members benefit from exclusive industry insights, high-quality events, and investment opportunities within a dynamic, supportive community. Whether you’re expanding your network, scaling your business, or exploring new ventures. 
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </AppFeaturesStyleWrapper>
  );
};

export default AppFeatures;
