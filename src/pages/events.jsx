import Layout from "../Layout";
import Header from "../Sections/Header/Header";

import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import BusinessHowWork from "../Sections/Business/BusinessHowWork/BusinessHowWork";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CTAImage from "../assets/images/tiwmedia/events/eventsCta.png";

const Events = () => {
  return (
    <Layout pageTitle="TIW Network - A Business Network Where Opportunities Flourish" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <StartBuildingComponent firstText="Engage &" highlightText="Connect"/>
        <BusinessHowWork />
        <OurSkil subTitle="JOIN TIW NETWORK" Title="Sign Up to Book Your Spot" elementImage ={CTAImage} description="To secure your place at these exclusive events, you’ll need to sign up as a TIW Network member."/>

        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default Events;
