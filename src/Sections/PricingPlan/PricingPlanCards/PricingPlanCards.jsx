import PricingPlanCardsStyle from "./PricingPlanCards.style";
import { pricingPlansData } from "../../../assets/data/PricingPlanData/PricingPlanData";

import rightArrow from "../../../assets/images/icons/pricing-arrow-right.svg";
import pricingPlanImg from "../../../assets/images/img/pricing-plan-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useEffect } from "react";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { Link } from "react-router-dom";

const PricingPlanCards = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);
  return (
    <PricingPlanCardsStyle className="pricing-plan-section">
      <div className="container">
        <div className="radial-gradient"></div>
        <ScrollAnimate delay={200}>
          <div className="section-title text-center mb-5" >
            <h2 className="title" data-splitting>
                Pricing Plan
            </h2>
          </div>
        </ScrollAnimate>
        {/* pricing plans */}
        <ScrollAnimate delay={200}>
          <div className="row">
            {pricingPlansData.map((plan, index) => (
              <div
                key={index}
                className={`col-lg-6 col-md-6 mb-4 ${plan.type.toLowerCase()}-card`}
              >
                <div className={`pricing-plan-card ${plan.type.toLowerCase()}-card`}>
                  <div className={`pricing-plan-card-header ${plan.type.toLowerCase()}`}>
                    <h6>
                      {plan.type}
                      {plan.type === "DUO" && <span>Popular 💎</span>}
                    </h6>
                    <p>{plan.description}</p>
                    <h3>
                      {plan.price}
                      {plan.price !== "Single" && <span>/month</span>}
                    </h3>
                    <p>{plan.trial}</p>
                  </div>
                  <div className="best-pricing-card-body">
                    <button
                      className={`best-pricing-btn ${plan.btnClass}`}
                      onClick={() => window.location.href = "https://dashboard.tiwnetwork.co.uk/auth"}
                    >
                      {plan.btnText}
                      <span className="icon">
                        <img src={rightArrow} alt="icon" />
                      </span>
                    </button>

                    <ul className="list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        {/* pricing plan card */}
        <ScrollAnimate delay={300}>
          <div className="row">
            <div className="col-lg-12 col-md-6 mb-5">
              <div className="pricing-plan-card enterprise-card">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="pricing-plan-card-content">
                      <div className="pricing-plan-card-header enterprise ✨">
                        <h6>Business ✨</h6>
                        <p>Personalized for the business needs</p>
                        <h3>
                          Starting at £250 <span>/month</span>
                        </h3>
                      </div>
                    </div>
                    <div className="pricing-plan-card-content mt-4">
                    <Link to="/contact-us" className="best-pricing-btn">
                      Let's Talk
                      <span className="icon">
                        <img src={rightArrow} alt="icon" />
                      </span>
                    </Link>

                    </div>
                  </div>
                  <div className="col-lg-7">
                    <button className="pricing-plan-show-btn pricing-plan-show-btn4">
                      View plan features
                    </button>
                    <div className="pricing-plan-card-content">
                      <div className="best-pricing-card-body m-0">
                        <ul className="list m-0">
                          <li className="list-item">
                            All from <b>Single</b> &amp; <b>Duo Plan</b>
                          </li>
                          <li className="list-item">Staff members included in your plan with their own dashboard access</li>
                          <li className="list-item">Shared access to resources, tools, and property deal data for your team</li>
                          <li className="list-item">Advertising and sponsorship opportunities within the TIW Network</li>
                          <li className="list-item">Priority access to sponsorship at TIW events and webinars</li>
                          <li className="list-item">Brand promotion across TIW’s digital channels and newsletters</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </PricingPlanCardsStyle>
  );
};

export default PricingPlanCards;
