import ConnectDappsStyle from "./ConnectDapps.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import coinIconsImg from "../../../assets/images/crypto2/coin_icons.svg";
import arrowRightBlueImg from "../../../assets/images/crypto2/arrow-right-blue.svg";
import mockupImg from "../../../assets/images/crypto2/mockup.png";
import dottedLineImg from "../../../assets/images/crypto2/dotted_line.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ConnectDapps = () => {
  return (
    <ConnectDappsStyle className="connect-dapps-section">
      <img src={dottedLineImg} alt="img" className="connect-dapps-doted-img" />
      <div className="container">
        <div className="connect-dapps-content">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Join Our Engaging WhatsApp Subgroups Today"
          subtitle="CONNECT AND INSPIRE"
          alignment="center"
          titleMaxW="675px"
          titleMargin="auto"
          parentClass="crypto2"
        />
        </ScrollAnimate>
        <ScrollAnimate delay={250}>
        <div className="connect-dapps-text">
          <p>
            Become part of our vibrant community! Engage with over 25 subgroups on WhatsApp, covering all aspects of business, investing, and property.
          </p>
        </div>
        </ScrollAnimate>
        </div>
        <div className="connect-dapps-img">
          <ScrollAnimate delay={300}>
          {/* <img src={coinIconsImg} alt="img" className="coin-img" /> */}
          <img src={mockupImg} alt="img" className="mocup-img" />
          </ScrollAnimate>
        </div>
      </div>
    </ConnectDappsStyle>
  );
};

export default ConnectDapps;
