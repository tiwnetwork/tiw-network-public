import Layout from "../Layout";
import Header from "../Sections/Header/Header";


import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FeatureTeam from "../Sections/Newsletter/FeatureTeam/FeatureTeam";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import Team from "../Sections/Team/Team";
import UserFeedback from "../Sections/CryptoWallet/UserFeedback/UserFeedback";
import CrossPlatform from "../Sections/CryptoWallet/CrossPlatform/CrossPlatform";

const AboutTIW = () => {
  return (
    <Layout pageTitle="About TIW Network" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <StartBuildingComponent firstText="Who are" highlightText="TIW Network?" description="TIW Network is Scotland’s leading property investors network, dedicated to empowering business  owners and property investors. We facilitate valuable connections, foster collaboration, and provide the  resources needed for members to grow their businesses and property portfolios.  Our members benefit from exclusive industry insights, high-quality events, and investment opportunities  within a dynamic, supportive community. Whether you’re expanding your network, scaling your business,  or exploring new ventures."/>
        <FeatureTeam />
        <ParallaxComponent />
        <Team />
        <UserFeedback />
        <CrossPlatform />
        
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default AboutTIW;
