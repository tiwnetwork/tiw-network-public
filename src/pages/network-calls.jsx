import Layout from "../Layout";
import Header from "../Sections/Header/Header";

import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CTAImage from "../assets/images/tiwmedia/network-calls/networkCallCTA.png";
import NetworkCallFeed from "../Sections/NetworkCalls/networkCallFeed";

const NetworkCalls = () => {
  return (
    <Layout pageTitle="TIW Network - A Business Network Where Opportunities Flourish" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <StartBuildingComponent firstText="Virtual" highlightText="Conferences"/>
        <NetworkCallFeed />
        <OurSkil showContactButton={true} subTitle="JOIN TIW NETWORK" Title="Engage with Experts and Expand Your Network" elementImage ={CTAImage} description="Join our fortnightly Zoom calls to connect with industry leaders and fellow investors. Gain insights, share experiences, and enhance your property investment strategies."/>
        
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default NetworkCalls;
