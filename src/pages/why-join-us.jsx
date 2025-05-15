import Layout from "../Layout";
import Header from "../Sections/Header/Header";


import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import FinanceBanner from "../Sections/Banner/FinanceBanner/FinanceBanner";
import WhyChoose from "../Sections/CustomerService/WhyChoose/WhyChoose";
import CrossPlatform from "../Sections/CryptoWallet/CrossPlatform/CrossPlatform";
import Image from "../assets/images/services/skills-img.png";

const WhyJoinTIW = () => {
  return (
    <Layout pageTitle="Why Join TIW Network" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <StartBuildingComponent firstText="Join" highlightText="TIW Network" />
        <OurSkil subTitle="UNLOCK YOUR POTENTIAL" Title="Scotland's Premier Property Investors" elementImage ={Image} description="Joining TIW Network opens the door to exclusive resources, expert insights, and a vibrant community of property investors. Experience unparalleled growth opportunities and support tailored to your journey."/>
        <FinanceBanner />
        <WhyChoose />
        <CrossPlatform />
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default WhyJoinTIW;
