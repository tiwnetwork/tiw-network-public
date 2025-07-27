import CrossPlatformStyle from "./CrossPlatform.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";
import check from "../../../assets/images/tiwmedia/about-us/check.png";

const CrossPlatform = () => {
  return (
    <CrossPlatformStyle className="cross-platform-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="cross-platform-card flex flex-col md:flex-row items-start gap-8 p-6 max-w-[1200px] mx-auto">

            {/* Left: Headline, description, and buttons */}
            <div className="title-section">
              <SectionTitle
                title="Join the TIW Network Today"
                alignment="left"
                titleMaxW="100%"
                parentClass="crypto md-mb-0"
              />
              <p className="paragraph mt-4">
                Unlock exclusive benefits and connect with Scotland's leading property investors and developers.
              </p>
              <div className="btn-group flex gap-4 mt-4 mb-4">
                <NavLink to={"/pricing"} className="crypto-glow-btn">
                  <span className="btn-inner">
                    <span className="btn-normal-text">Join Network</span>
                    <span className="btn-hover-text">Join Network</span>
                  </span>
                </NavLink>
                <NavLink to={"/contact-us"} className="lets-talk-bttn flex items-center gap-2">
                  Contact Us
                  <span className="icon">
                    <span
                      className="iconify"
                      data-icon="akar-icons:chevron-right"
                    />
                  </span>
                </NavLink>
              </div>
            </div>

            <div className="flex-1 space-y-2 list-disc list-inside text-left list">
              <p className="featured-list-title">All-access. No tie-ins. Cancel anytime.</p>
              <ul style={{ listStyleImage: `url(${check})` }}>
                <li className="mb-2">Off-Market Property Deals</li>
                <li className="mb-2">Member-Only Discounts</li>
                <li className="mb-2">Tools, Templates & Calculators</li>
                <li className="mb-2">Full Partner & Contractor Directory</li>
                <li className="mb-2">25+ WhatsApp Subgroups</li>
                <li className="mb-2">Fortnightly Zooms with Experts</li>
                <li className="mb-2">Access to All TIW Events</li>
                <li className="mb-2">Personal Member Dashboard</li>
              </ul>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </CrossPlatformStyle>
  );
};

export default CrossPlatform;
