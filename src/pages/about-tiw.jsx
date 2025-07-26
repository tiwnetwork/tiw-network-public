import Layout from "../Layout";
import Header from "../Sections/Header/Header";


import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FeatureTeam from "../Sections/Newsletter/FeatureTeam/FeatureTeam";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import Team from "../Sections/Team/Team";
import UserFeedback from "../Sections/CryptoWallet/UserFeedback/UserFeedback";
import CrossPlatform from "../Sections/CryptoWallet/CrossPlatform/CrossPlatform";
import TeamFaq from "../Sections/TeamCollaboration/TeamFaq/TeamFaq";
import AppFeatures from "../Sections/AppLanding/AppFeatures/AppFeatures";
import ChatbotChoose from "../Sections/Chatbot/ChatbotChoose/ChatbotChoose";

const AboutTIW = () => {
  return (
    <Layout pageTitle="About TIW Network" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <StartBuildingComponent firstText="Who are" highlightText="TIW Network?"/>
        <AppFeatures />
        <ParallaxComponent />

        <ChatbotChoose />
        {/* <TokenFeatures /> */}

        <FeatureTeam />
        <Team />
        <UserFeedback />
        <TeamFaq />
        <CrossPlatform />
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default AboutTIW;
