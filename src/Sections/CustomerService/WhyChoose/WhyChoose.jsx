import WhyChoseStyleWrapper from "./WhyChoose.style";
import chooseUsImg from "../../../assets/images/customer-service/choose-us-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { useEffect } from "react";

const WhyChoose = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <WhyChoseStyleWrapper className="choose-us-section md-pb-50">
      <div className="container text-center">
        <ScrollAnimate delay={200}>
          <div className="title-group">
            <span className="sub-title text-center" data-splitting>Benefits</span>
            <h2 className="title text-center" data-splitting>Unlock Exclusive Benefits as a Member</h2>
          </div>
          
        </ScrollAnimate>
        <div className="choose-us-content">
          <div className="choose-us-text choose-us-text-left">
            <div className="contents-text text-left">
              <ScrollAnimate delay={200}>
                <h4>Exclusive Supplier Discounts</h4>
                <p>
                  Joining TIW Network grants you early access to exclusive property deals before they hit the public market.
                </p>
              </ScrollAnimate>
            </div>
            <div className="contents-text text-left">
              <ScrollAnimate delay={220}>
                <h4>Networking & Collaboration</h4>
                <p>
                  Become part of a thriving community of investors, developers, and industry experts.
                </p>
              </ScrollAnimate>
            </div>
          </div>
          <div className="choose-us-img">
            <ScrollAnimate delay={250}>
              <span>
                <img src={chooseUsImg} alt="img" />
              </span>
            </ScrollAnimate>
          </div>
          <div className="choose-us-text choose-us-text-right">
            <div className="contents-text text-right">
              <ScrollAnimate delay={200}>
                <h4>Support & Resources</h4>
                <p>
                  Enjoy expert support and access to valuable resources designed to boost your investment decisions.
                </p>
              </ScrollAnimate>
            </div>
            <div className="contents-text text-right">
              <ScrollAnimate delay={220}>
                <h4>Growth-Driven Opportunities</h4>
                <p>
                  Leverage the TIW platform to showcase your deals, collaborate on projects, and expand your business.
                </p>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </WhyChoseStyleWrapper>
  );
};

export default WhyChoose;
